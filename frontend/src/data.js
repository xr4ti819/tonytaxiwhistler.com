export const PHONE = "778-917-3030";
export const PHONE_TEL = "tel:7789173030";
export const PHONE_SMS = "sms:7789173030";
export const WHATSAPP = "https://wa.me/17789173030";

export const FIFA_MATCHES = [
  { date: "Jun 13, 2026", label: "Group Stage · Match 1", kickoff: "6:30 PM", accent: "#FF6B35" },
  { date: "Jun 18, 2026", label: "Group Stage · Match 2", kickoff: "5:30 PM", accent: "#D4AF37" },
  { date: "Jun 30, 2026", label: "Round of 16", kickoff: "4:30 PM", accent: "#D93838" },
  { date: "Jul 4, 2026", label: "Quarter Final · if Canada advances", kickoff: "5:30 PM", accent: "#4CAF50" },
];

export const LAKES_RIVERS = [
  { name: "Cheakamus Lake", type: "Glacial Lake", desc: "Turquoise alpine lake · 7km easy trail through old-growth · Free parking · Garibaldi Park", img: "https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?w=800&q=80", shuttle: "$45", access: "Garibaldi Park" },
  { name: "Cheakamus River", type: "River", desc: "Wild glacier river · Train Wreck suspension bridge · Pebble beaches · Fly fishing · 10 min south", img: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800&q=80", shuttle: "$45", access: "Cheakamus" },
  { name: "Lost Lake", type: "Swimming Lake", desc: "Sandy beach · Summer lifeguards · SUP & kayak rentals · Sunset spot · 15-min walk from village", img: "https://images.unsplash.com/photo-1561134643-668f9057cce4?w=800&q=80", shuttle: "$25", access: "Whistler Village" },
  { name: "Alta Lake", type: "Beach Lake", desc: "3 beaches · Canoe & kayak rentals · SUP · Fishing · Picnic areas", img: "https://images.unsplash.com/photo-1495612778264-627cd2e6dfb3?w=800&q=80", shuttle: "$25", access: "Westside Rd" },
  { name: "Green Lake", type: "Glacial Lake", desc: "Famous turquoise glacial colour · Windsurfing · Kiteboarding · Seaplane base · 5-min drive", img: "https://images.unsplash.com/photo-1602519958552-07eb454c9a78?w=800&q=80", shuttle: "$25", access: "Hwy 99" },
  { name: "Nita Lake", type: "Quiet Lake", desc: "Quiet swimming · Nita Lake Lodge · Private dock access · Less crowded · 10-min walk", img: "https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=800&q=80", shuttle: "$25", access: "Creekside" },
  { name: "Brandywine Falls", type: "Waterfall", desc: "70m dramatic waterfall · 10-min walk from parking · Viewing platforms · Year-round", img: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80", shuttle: "$45", access: "Hwy 99 South" },
  { name: "Joffre Lakes", type: "Triple Glacier Lakes", desc: "Three turquoise alpine lakes · 10km return · Most Instagrammed in BC · Day-use pass required", img: "https://images.unsplash.com/photo-1623423415485-1d36867376b6?w=800&q=80", shuttle: "$55", access: "Pemberton" },
];

export const SERVICES = [
  { title: "Airport Transfers", desc: "YVR ↔ Whistler · 2hrs door-to-door · Flight tracked", price: "from $299", icon: "Plane", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" },
  { title: "FIFA 2026", desc: "Whistler ↔ BC Place · Match day premium · Pre-book now", price: "from $349", icon: "Trophy", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80" },
  { title: "Designated Driver", desc: "Two drivers come. We drive YOU & YOUR CAR home.", price: "from $89", icon: "ShieldCheck", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" },
  { title: "Activities & Tours", desc: "Heli, ATV, rafting, hiking trailheads & more", price: "from $25", icon: "Mountain", img: "https://images.unsplash.com/photo-1764191616930-01ad017f4fdf?w=800&q=80" },
  { title: "Nightlife & Safe Ride", desc: "24/7 pickup from any bar · Group rates", price: "from $25", icon: "Moon", img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80" },
];

export const ACTIVITIES = [
  { name: "Bear & Wildlife Tour · Half Day", price: "$250 flat · 5 hrs · up to 4", badge: "Local Guide", img: "https://images.unsplash.com/photo-1648265139146-7a8c5ea3acef?w=800&q=80", shuttle: "All-in", category: "Wildlife" },
  { name: "Bear & Wildlife Tour · Full Day", price: "$500 flat · 11 hrs · up to 4", badge: "Bucket List", img: "https://images.unsplash.com/photo-1610393882555-b6dc1734f97d?w=800&q=80", shuttle: "All-in", category: "Wildlife" },
  { name: "Helicopter Glacier Tours", price: "$399/pp", badge: "Bucket List", img: "https://images.unsplash.com/photo-1764191616930-01ad017f4fdf?w=800&q=80", shuttle: "$55", category: "Adventure" },
  { name: "ATV Mountain Tours", price: "$189/pp", badge: "Adventure", img: "https://images.unsplash.com/photo-1769272260986-6af5820c545e?w=800&q=80", shuttle: "$45", category: "Adventure" },
  { name: "Whistler Bungee Jumping", price: "$149/jump", badge: "Adrenaline", img: "https://images.unsplash.com/photo-1559677624-3c956f10d431?w=800&q=80", shuttle: "$45", category: "Adventure" },
  { name: "White Water Rafting · Squamish", price: "$189/pp", badge: "Class 3-4", img: "https://images.unsplash.com/photo-1641584495089-5914d85d9bcc?w=800&q=80", shuttle: "$55", category: "Adventure" },
  { name: "Sea to Sky Gondola", price: "$62/adult", badge: "Must Do", img: "https://images.unsplash.com/photo-1588702980080-66c22d9e6292?w=800&q=80", shuttle: "$65", category: "Sightseeing" },
  { name: "Scandinave Spa", price: "from $85", badge: "Relax", img: "https://images.unsplash.com/photo-1519320993082-43a535317ddc?w=800&q=80", shuttle: "$25", category: "Wellness" },
  { name: "Whistler Bike Park", price: "$89/day", badge: "World #1", img: "https://images.unsplash.com/photo-1663645037190-4dca6857a1b4?w=800&q=80", shuttle: "$50", category: "Adventure" },
  { name: "Joffre Lakes Hike", price: "Free + Pass", badge: "Iconic", img: "https://images.unsplash.com/photo-1494391468241-0a4476581b78?w=800&q=80", shuttle: "$45", category: "Hiking" },
  { name: "Garibaldi Lake Trail", price: "Free", badge: "Glacier Lake", img: "https://images.unsplash.com/photo-1725710392966-6a003a008d53?w=800&q=80", shuttle: "$45", category: "Hiking" },
  { name: "Via Ferrata", price: "$199/pp", badge: "Iron Way", img: "https://images.unsplash.com/photo-1630353958888-5eeec80b5806?w=800&q=80", shuttle: "$45", category: "Adventure" },
  { name: "Horseback Riding · Pemberton", price: "$95/hr", badge: "Family", img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80", shuttle: "$55", category: "Family" },
  { name: "Jet Skis · Alta Lake", price: "$139/hr", badge: "Summer", img: "https://images.unsplash.com/photo-1554132267-d06483b00adc?w=800&q=80", shuttle: "$25", category: "Summer" },
];

export const TRAILS = [
  { name: "Rainbow Lake", level: "Intermediate", dist: "16km", elev: "600m", time: "6 hrs", img: "https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?w=800&q=80" },
  { name: "Garibaldi Lake", level: "Hard", dist: "18km", elev: "820m", time: "5–6 hrs", img: "https://images.unsplash.com/photo-1725710392966-6a003a008d53?w=800&q=80" },
  { name: "Joffre Lakes", level: "Hard", dist: "10km", elev: "400m", time: "4–5 hrs", img: "https://images.unsplash.com/photo-1623423415485-1d36867376b6?w=800&q=80" },
  { name: "Wedgemount Lake", level: "Expert", dist: "12km", elev: "1,160m", time: "6–7 hrs", img: "https://images.unsplash.com/photo-1494391468241-0a4476581b78?w=800&q=80" },
];

export const RESTAURANTS = [
  { name: "Araxi Restaurant + Bar", cuisine: "Farm-to-Table · Seafood", award: "Vancouver Magazine Gold List", price: "$$$", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { name: "Bearfoot Bistro", cuisine: "Champagne · Tasting Menu", award: "Best Champagne List Canada", price: "$$$$", img: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80" },
  { name: "Rimrock Cafe", cuisine: "Pacific Northwest · Game", award: "Wine Spectator Excellence", price: "$$$$", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" },
  { name: "Wild Blue Restaurant + Bar", cuisine: "Seafood · The Listel", award: "Best New Restaurant 2023", price: "$$$$", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" },
  { name: "Aura at Nita Lake Lodge", cuisine: "West Coast · Lakeside", award: "Wine Spectator Award", price: "$$$", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { name: "The Keg Steakhouse", cuisine: "Steakhouse · Whistler Village", award: "Whistler Classic", price: "$$$", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" },
  { name: "Red Door Bistro", cuisine: "French Bistro · Marketplace", award: "Local Favourite", price: "$$$", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" },
  { name: "Bar Oso", cuisine: "Spanish · Tapas · Wine", award: "Best Bar Whistler", price: "$$$", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { name: "La Bocca", cuisine: "Modern Italian · Village Square", award: "Vancouver Mag · 2 stars", price: "$$$", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80" },
  { name: "Stinky's on the Stroll", cuisine: "Comfort Food · Late Night", award: "Best Comfort Food", price: "$$", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" },
  { name: "Black's Pub & Restaurant", cuisine: "Pub · Burgers · 99 Beers on Tap", award: "Whistler Heritage Spot", price: "$$", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80" },
  { name: "Hunter Gather", cuisine: "BBQ · Smokehouse · Cocktails", award: "Best BBQ Sea-to-Sky", price: "$$", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" },
  { name: "Beacon Pub & Eatery", cuisine: "Gastropub · Chef Adrian Beaty", award: "Best Gastropub 2024", price: "$$$", img: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80" },
  { name: "Sushi Village", cuisine: "Japanese · Since 1985", award: "Whistler's Favourite", price: "$$", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80" },
  { name: "Creekbread", cuisine: "Wood-Fired Pizza · Organic", award: "Best Pizza Whistler", price: "$$", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80" },
];

export const COMMUNITY_SERVICES = [
  {
    name: "Whistler Community Church",
    desc: "Sunday Services · 10:00 AM (English) · 11:30 AM (Português) · Family worship · Coffee & connect after every service.",
    address: "7445 Fitzsimmons Rd, Whistler",
    link: "https://whistlerchurch.com/",
    shuttle: "Free for seniors Sundays",
    tag: "Faith",
    img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&q=80",
  },
  {
    name: "Meadow Park Sports Centre",
    desc: "25m pool, hot tub, sauna, ice rink, gym, squash, fitness classes. The Whistler local's gym.",
    address: "8625 Hwy 99, Whistler",
    link: "https://www.whistler.ca/services/recreation/meadow-park-sports-centre",
    shuttle: "$25",
    tag: "Recreation",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
  },
  {
    name: "Whistler Community Services Society (WCSS)",
    desc: "Outreach · food bank · mental health · youth & family programs · the heart of Whistler's community.",
    address: "Nesters Square, Whistler",
    link: "https://mywcss.org/",
    shuttle: "Free for clients",
    tag: "Community Support",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    name: "Whistler Public Library",
    desc: "Modern community library · free WiFi · children's programs · mountain views.",
    address: "4329 Main St, Whistler",
    link: "https://www.whistlerlibrary.ca/",
    shuttle: "$15",
    tag: "Free",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
  },
  {
    name: "Whistler Health Care Centre",
    desc: "Walk-in clinic, urgent care, x-ray on site. Open daily.",
    address: "4380 Lorimer Rd",
    link: "tel:6049324911",
    shuttle: "Priority dispatch",
    tag: "Medical",
    img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
  },
];

export const NIGHTLIFE = [
  { name: "Garfinkel's", type: "Club", hours: "3PM–2AM", desc: "Live DJ · Dance floor · Apres-ski hotspot", img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80", happy_hour: "" },
  { name: "Tommy Africa's", type: "Underground Club", hours: "10PM–3AM", desc: "Hip-hop & electronic · Late-night", img: "https://images.unsplash.com/photo-1571266028243-d220bc1d2c79?w=800&q=80", happy_hour: "" },
  { name: "Dusty's Bar & BBQ", type: "Apres-Ski", hours: "Since 1965", desc: "Live music · BBQ · Patio · Creekside", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80", happy_hour: "3–6 PM · $5 beers · $7 wings · $8 burgers" },
  { name: "The Mallard Lounge", type: "Lounge", hours: "Evenings", desc: "Upscale cocktails · Fireplace · Piano", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80", happy_hour: "4–7 PM · $8 cocktails · $10 wine · $12 charcuterie" },
  { name: "Merlin's Bar", type: "Pub", hours: "Apres-ski", desc: "Pool tables · Burgers & beers", img: "https://images.unsplash.com/photo-1518176258769-f227c798150e?w=800&q=80", happy_hour: "3–6 PM · Drink specials" },
  { name: "Buffalo Bills", type: "Club", hours: "9PM–3AM", desc: "Iconic Whistler · Theme nights · 21+", img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80", happy_hour: "4–7 PM · $4 shots · $5 highballs · $6 apps" },
  { name: "Bar Oso", type: "Spanish Bar", hours: "5PM–Late", desc: "Tapas · Sherry · Award-winning cocktails", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80", happy_hour: "5–6 PM · $8 sangria · half-price tapas" },
  { name: "Bearfoot Bistro Lounge", type: "Champagne Lounge", hours: "Evenings", desc: "Champagne sabering · Ice room vodka tastings", img: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80", happy_hour: "5–7 PM · $10 cocktails · $12 oysters" },
];

export const HAPPY_HOUR = [
  { spot: "Dusty's", time: "3–6 PM", offer: "$5 beers · $7 wings · $8 burgers" },
  { spot: "Sushi Village", time: "2–5 PM", offer: "$3 nigiri · $4 rolls · $5 sake" },
  { spot: "Bearfoot Bistro", time: "5–7 PM", offer: "$10 cocktails · $12 oysters · Sabering 6PM" },
  { spot: "Creekbread", time: "3–6 PM", offer: "$5 pizza slices · $6 pints" },
  { spot: "The Mallard", time: "4–7 PM", offer: "$8 cocktails · $10 wine · $12 charcuterie" },
  { spot: "Buffalo Bills", time: "4–7 PM", offer: "$4 shots · $5 highballs · $6 apps" },
];

export const EVENTS_2026 = [
  { name: "FIFA World Cup", when: "Jun 13 – Jul 6", tag: "Global", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80" },
  { name: "Crankworx Whistler", when: "Jul 24 – Aug 2", tag: "MTB", img: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800&q=80" },
  { name: "Wanderlust Yoga", when: "Aug 1 – 4", tag: "Wellness", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80" },
  { name: "IRONMAN Canada", when: "Jul 26", tag: "Triathlon", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80" },
  { name: "GranFondo", when: "Sep 12", tag: "Cycling", img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80" },
  { name: "Cornucopia Festival", when: "Nov 5 – 15", tag: "Food & Wine", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { name: "Tough Mudder", when: "Jun 20 – 21", tag: "Obstacle Race", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80" },
  { name: "WSSF · Snow & Ski Festival", when: "Apr 10 – 19", tag: "Snow Sports", img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80" },
];

export const EMERGENCY = [
  { name: "Whistler Medical Clinic", phone: "604-932-3977", note: "Walk-in · 8AM–8PM · X-ray" },
  { name: "Whistler Fire & Ambulance", phone: "604-932-4621", note: "Non-emergency · 24/7" },
  { name: "RCMP Whistler", phone: "604-932-3044", note: "Police · 24/7" },
  { name: "Ski Patrol (Whistler Blackcomb)", phone: "604-932-4211", note: "On-mountain rescue" },
  { name: "Blackcomb Helicopters", phone: "604-932-6611", note: "Medevac standby" },
  { name: "BC Poison Control", phone: "1-800-567-8911", note: "24/7 · Free hotline" },
];

export const FAQ = [
  { q: "Do I need to book in advance?", a: "Same-day is fine — usually 15–30 minutes. For airport pickups and large groups, book 24+ hours ahead." },
  { q: "Which areas do you serve?", a: "Whistler Village, Creekside, Blackcomb, YVR Airport, Vancouver, Squamish, Pemberton — and everywhere in between." },
  { q: "How are rates calculated?", a: "Regulated meter rates with flat-rate options for common routes (YVR, BC Place, Squamish). Use the fare calculator for an instant estimate." },
  { q: "Do you accept credit cards?", a: "Yes — Visa, Mastercard, Amex, debit, Apple Pay, Google Pay, and cash. Contactless in every vehicle." },
  { q: "What if my flight is delayed?", a: "We track every flight in real time. Your driver will be there when you land — no surcharge for delays under 2 hours." },
  { q: "Is there a cancellation fee?", a: "Free with 2+ hours notice. Within 2 hours, $25 fee. No-shows are charged the full estimated fare." },
  { q: "Do you do private tours?", a: "Yes — photo tours, brewery crawls, multi-stop adventure days. Call to design your perfect day." },
  { q: "Wheelchair / pets / car seats?", a: "All available at no extra charge — just let us know when booking. Car seats free for infants to 12 years." },
];

export const PICKUP_OPTIONS = [
  "Whistler Village", "Whistler Creekside", "Blackcomb Base", "Fairmont Chateau",
  "Pan Pacific Whistler", "Four Seasons Whistler", "YVR Airport", "Vancouver Downtown",
  "BC Place Stadium", "Squamish", "Pemberton",
];
