"""Backend tests for Tony Taxi Whistler API"""
import os
import pytest
import requests
from pymongo import MongoClient
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).resolve().parents[1] / ".env")

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://tony-taxi-whistler.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def mongo_db():
    c = MongoClient(MONGO_URL)
    yield c[DB_NAME]
    c.close()


# Root health
def test_root(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"
    assert "Tony" in data.get("service", "")


# Fare estimate - Whistler to YVR
def test_fare_whistler_yvr(session):
    r = session.post(f"{API}/fare-estimate", json={
        "pickup": "Whistler Village", "dropoff": "YVR Airport",
        "passengers": 2, "service_type": "airport"
    })
    assert r.status_code == 200
    data = r.json()
    assert data["estimate"] == 299
    assert data["currency"] == "CAD"
    assert data["distance_km"] == 125
    assert data["breakdown"]["base_route"] == 299


# Fare estimate - FIFA premium (BC Place + fifa)
def test_fare_fifa_premium(session):
    r = session.post(f"{API}/fare-estimate", json={
        "pickup": "Whistler", "dropoff": "BC Place Stadium",
        "passengers": 2, "service_type": "fifa"
    })
    assert r.status_code == 200
    data = r.json()
    # 349 base + 50 fifa premium = 399
    assert data["estimate"] == 399
    assert data["breakdown"]["fifa_premium"] == 50


# Fare estimate - designated driver +$60 premium
def test_fare_designated_driver(session):
    r = session.post(f"{API}/fare-estimate", json={
        "pickup": "Whistler Village", "dropoff": "Creekside",
        "passengers": 2, "service_type": "designated"
    })
    assert r.status_code == 200
    data = r.json()
    # 25 base + 60 designated driver premium = 85
    assert data["estimate"] == 85
    assert data["breakdown"]["designated_driver_premium"] == 60


# Fare estimate - group 5+ surcharge
def test_fare_group_surcharge(session):
    r = session.post(f"{API}/fare-estimate", json={
        "pickup": "Whistler", "dropoff": "YVR",
        "passengers": 6, "service_type": "airport"
    })
    assert r.status_code == 200
    data = r.json()
    assert data["estimate"] == 299 + 40
    assert data["breakdown"]["passenger_surcharge"] == 40


# Create booking + persistence
def test_create_booking_and_persist(session, mongo_db):
    payload = {
        "name": "TEST_User",
        "phone": "7785551234",
        "pickup": "Whistler Village",
        "dropoff": "YVR Airport",
        "pickup_date": "2026-06-15",
        "pickup_time": "10:30",
        "passengers": 2,
        "service_type": "airport"
    }
    r = session.post(f"{API}/bookings", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert "id" in data
    assert data["estimated_fare"] == 299
    assert data["status"] == "pending"
    # verify GET list
    r2 = session.get(f"{API}/bookings")
    assert r2.status_code == 200
    ids = [b["id"] for b in r2.json()]
    assert data["id"] in ids
    # cleanup
    mongo_db.bookings.delete_one({"id": data["id"]})


# Bookings sorted desc
def test_list_bookings(session):
    r = session.get(f"{API}/bookings")
    assert r.status_code == 200
    bookings = r.json()
    if len(bookings) > 1:
        # created_at should be descending
        for i in range(len(bookings) - 1):
            assert bookings[i]["created_at"] >= bookings[i + 1]["created_at"]


# Loyalty flow
def test_loyalty_flow(session, mongo_db):
    phone = "7789998888"
    # cleanup
    mongo_db.bookings.delete_many({"phone": phone})
    # create airport booking
    b1 = session.post(f"{API}/bookings", json={
        "name": "TEST_Loyalty", "phone": phone,
        "pickup": "Whistler", "dropoff": "YVR",
        "pickup_date": "2026-01-10", "pickup_time": "08:00",
        "passengers": 1, "service_type": "airport"
    }).json()
    # create local booking
    b2 = session.post(f"{API}/bookings", json={
        "name": "TEST_Loyalty", "phone": phone,
        "pickup": "Village", "dropoff": "Blackcomb",
        "pickup_date": "2026-01-11", "pickup_time": "20:00",
        "passengers": 2, "service_type": "local"
    }).json()
    # Confirm both via direct mongo update
    mongo_db.bookings.update_many({"phone": phone}, {"$set": {"status": "confirmed"}})
    # Get loyalty
    r = session.get(f"{API}/loyalty/{phone}")
    assert r.status_code == 200
    data = r.json()
    assert data["rides"] == 2
    assert data["airport_rides"] == 1
    assert data["stamps"] == 3  # 2 + 1 airport bonus
    assert data["rides_until_free"] == 7
    # cleanup
    mongo_db.bookings.delete_many({"phone": phone})


# Testimonials
def test_testimonials(session):
    r = session.get(f"{API}/testimonials")
    assert r.status_code == 200
    data = r.json()
    assert len(data) == 6
    assert all("name" in t and "rating" in t and "text" in t for t in data)
    assert all(t["rating"] == 5 for t in data)
