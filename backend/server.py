from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Tony Taxi Whistler API")
api_router = APIRouter(prefix="/api")


# ----------------------- Models -----------------------
class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    pickup: str
    dropoff: str
    pickup_date: str  # ISO date string
    pickup_time: str  # HH:MM
    passengers: int = 1
    luggage: Optional[str] = None
    notes: Optional[str] = None
    service_type: Literal["airport", "fifa", "activity", "nightlife", "local", "tour"] = "local"
    estimated_fare: Optional[float] = None
    status: Literal["pending", "confirmed", "completed", "cancelled"] = "pending"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class BookingCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    pickup: str
    dropoff: str
    pickup_date: str
    pickup_time: str
    passengers: int = 1
    luggage: Optional[str] = None
    notes: Optional[str] = None
    service_type: Literal["airport", "fifa", "activity", "nightlife", "local", "tour"] = "local"


class FareRequest(BaseModel):
    pickup: str
    dropoff: str
    passengers: int = 1
    service_type: str = "local"


class FareResponse(BaseModel):
    estimate: float
    currency: str = "CAD"
    distance_km: float
    duration_min: int
    breakdown: dict


class LoyaltyResponse(BaseModel):
    phone: str
    rides: int
    airport_rides: int
    stamps: int  # airport rides count double
    rides_until_free: int
    total_spent: float


class Testimonial(BaseModel):
    name: str
    location: str
    rating: int
    text: str
    avatar: Optional[str] = None


# ----------------------- Static rate matrix -----------------------
RATE_MATRIX = {
    # (pickup_key, dropoff_key) -> (distance_km, duration_min, flat_cad)
    ("whistler", "yvr"): (125, 120, 299),
    ("yvr", "whistler"): (125, 120, 299),
    ("whistler", "vancouver"): (120, 115, 279),
    ("vancouver", "whistler"): (120, 115, 279),
    ("whistler", "squamish"): (60, 45, 149),
    ("squamish", "whistler"): (60, 45, 149),
    ("whistler", "pemberton"): (35, 30, 99),
    ("pemberton", "whistler"): (35, 30, 99),
    ("whistler", "bc-place"): (125, 130, 349),
    ("bc-place", "whistler"): (125, 130, 349),
    ("whistler", "creekside"): (8, 10, 25),
    ("creekside", "whistler"): (8, 10, 25),
    ("village", "blackcomb"): (3, 5, 20),
}


def normalize_loc(s: str) -> str:
    s = (s or "").lower().strip()
    aliases = {
        "yvr airport": "yvr",
        "vancouver airport": "yvr",
        "vancouver international airport": "yvr",
        "whistler village": "whistler",
        "downtown vancouver": "vancouver",
        "bc place stadium": "bc-place",
        "fifa": "bc-place",
    }
    return aliases.get(s, s.replace(" ", "-"))


@api_router.get("/")
async def root():
    return {"service": "Tony Taxi Whistler", "status": "ok"}


@api_router.post("/fare-estimate", response_model=FareResponse)
async def fare_estimate(req: FareRequest):
    p = normalize_loc(req.pickup)
    d = normalize_loc(req.dropoff)
    key = (p, d)
    if key in RATE_MATRIX:
        km, mins, flat = RATE_MATRIX[key]
    else:
        # Fallback: $2.80/km + $5 base
        km = max(10, len(req.pickup) + len(req.dropoff))
        mins = int(km * 1.0)
        flat = round(km * 2.80 + 5, 2)
    # Surcharge for 5+ passengers (van)
    surcharge = 40 if req.passengers >= 5 else 0
    night_surcharge = 0
    fifa_surcharge = 50 if req.service_type == "fifa" else 0
    total = flat + surcharge + night_surcharge + fifa_surcharge
    return FareResponse(
        estimate=total,
        distance_km=km,
        duration_min=mins,
        breakdown={
            "base_route": flat,
            "passenger_surcharge": surcharge,
            "fifa_premium": fifa_surcharge,
            "currency": "CAD"
        }
    )


@api_router.post("/bookings", response_model=Booking)
async def create_booking(payload: BookingCreate):
    # Get fare estimate
    fare_req = FareRequest(
        pickup=payload.pickup,
        dropoff=payload.dropoff,
        passengers=payload.passengers,
        service_type=payload.service_type,
    )
    fare = await fare_estimate(fare_req)

    booking = Booking(**payload.model_dump(), estimated_fare=fare.estimate)
    await db.bookings.insert_one(booking.model_dump())
    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings():
    docs = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


@api_router.get("/loyalty/{phone}", response_model=LoyaltyResponse)
async def get_loyalty(phone: str):
    # Strip non-digits
    norm = "".join(c for c in phone if c.isdigit())
    bookings = await db.bookings.find(
        {"phone": {"$regex": norm[-7:]}, "status": {"$in": ["confirmed", "completed"]}},
        {"_id": 0}
    ).to_list(500)
    total = len(bookings)
    airport = sum(1 for b in bookings if b.get("service_type") == "airport")
    stamps = total + airport  # airport counts double
    total_spent = sum(b.get("estimated_fare", 0) or 0 for b in bookings)
    rides_until_free = max(0, 10 - stamps)
    return LoyaltyResponse(
        phone=phone,
        rides=total,
        airport_rides=airport,
        stamps=stamps,
        rides_until_free=rides_until_free,
        total_spent=round(total_spent, 2),
    )


@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    return [
        Testimonial(name="Sarah M.", location="Toronto, ON", rating=5,
                    text="Tony picked us up from YVR at 1 AM after our flight was delayed. Vehicle was spotless, driver was warm and professional. The kid car seats they had ready were a lifesaver."),
        Testimonial(name="James R.", location="Seattle, WA", rating=5,
                    text="Booked Tony for a Crankworx weekend. They handled 6 of us plus bikes without breaking a sweat. Way better than waiting for a bus."),
        Testimonial(name="Priya K.", location="Vancouver, BC", rating=5,
                    text="Called at 2 AM after a wedding at the Fairmont. They were there in 12 minutes. Saved my life — never drink and drive."),
        Testimonial(name="Marco L.", location="Mexico City", rating=5,
                    text="Coming up for FIFA 2026 and Tony already has us locked in for the BC Place run. Quoted me a flat rate weeks out. Real professionals."),
        Testimonial(name="Emma & Tom", location="London, UK", rating=5,
                    text="Custom photo tour with our driver Mike — he knew every viewpoint, waited while we got our shots, and we ended up at Brandywine Falls at golden hour. Worth every dollar."),
        Testimonial(name="Daniel H.", location="Calgary, AB", rating=5,
                    text="The loyalty program is legit. I'm on ride #9 this season and got a free heli-tour shuttle queued up. Tony Taxi is part of our annual ski trip now."),
    ]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
