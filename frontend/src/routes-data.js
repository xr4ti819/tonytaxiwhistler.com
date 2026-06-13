/**
 * Centralized SEO content for each route landing page.
 * Each entry powers a unique indexable URL with route-targeted copy + schema.
 */
export const ROUTES = {
  "yvr-airport-taxi-whistler": {
    slug: "yvr-airport-taxi-whistler",
    h1: "YVR Airport Taxi to Whistler · $299 Flat · 24/7",
    title: "YVR Airport Taxi to Whistler — $299 Flat Rate · 24/7 · Tony Taxi",
    description: "Whistler ↔ YVR Airport flat-rate $299 CAD. Flight tracked in real-time, 2-hour door-to-door, 24/7. Same-day available. Call 778-917-3030 or book online.",
    keywords: "YVR to Whistler taxi, Whistler airport taxi, Vancouver airport to Whistler, YVR Whistler shuttle, airport transfer Whistler, Whistler airport pickup",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
    pickup: "YVR Airport",
    dropoff: "Whistler",
    flatRate: 299,
    durationMin: 135,
    distanceKm: 125,
    serviceType: "Airport Shuttle",
    intro:
      "Land at Vancouver International (YVR) and head straight to Whistler with zero stress. Tony Taxi's flat-rate $299 CAD service tracks your flight in real-time, includes a 60-min wait grace period, and gets you to your hotel door in about 2 hours. Booked thousands of times by skiers, families, FIFA fans, and visiting executives.",
    bullets: [
      { title: "Flat $299 CAD · no surge ever", body: "What you see is what you pay. No surge multipliers, no nighttime upcharges, no surprise tolls. Group of 4? You're paying ~$75 each — cheaper than the bus." },
      { title: "Real-time flight tracking", body: "Your driver monitors your inbound flight every 15 minutes. Delayed? They reschedule the pickup automatically — first 2 hours of wait time are free." },
      { title: "2 hours door-to-door", body: "Sea-to-Sky Highway via Horseshoe Bay. Spotless SUVs and full-size vans (up to 8 pax + ski gear). Car seats and booster seats free on request." },
      { title: "Meet & Greet inside terminal", body: "Your driver waits at International Arrivals with a name sign. Help with luggage. Bottled water and Wi-Fi onboard." },
      { title: "24/7/365 · including red-eye landings", body: "Doesn't matter if your flight lands at 11 PM or 4 AM — we're there. No after-hours fees." },
      { title: "Loyalty rewards", body: "Airport trips count double on your Tony Taxi loyalty card. Every 10 stamps = 1 free local ride or trailhead shuttle." },
    ],
    faqs: [
      { q: "How much is a taxi from YVR to Whistler?", a: "Tony Taxi's flat rate is $299 CAD for up to 4 passengers in an SUV. Van service (5–8 passengers + luggage) is $339 CAD. No surge pricing." },
      { q: "How long is the drive from YVR Airport to Whistler?", a: "Approximately 2 hours and 15 minutes via the Sea-to-Sky Highway (Hwy 99). Driving conditions, weather, and stops for ferries or photos can shift this slightly." },
      { q: "Do you track flights for delays?", a: "Yes. Every flight is tracked in real-time. Your driver adjusts the pickup automatically and the first 2 hours of wait time are complimentary." },
      { q: "Can I book a same-day ride from YVR to Whistler?", a: "Yes — same-day bookings are available 24/7 subject to driver availability. Call 778-917-3030 for fastest dispatch. We recommend booking ahead during ski season and FIFA 2026." },
      { q: "Do you provide child car seats?", a: "Yes — infant, toddler, and booster seats are free on request when booking." },
      { q: "Where exactly do you meet at YVR?", a: "Your driver waits at International Arrivals (Level 2) with a name sign. For domestic flights, we meet at Domestic Arrivals. Reply to your booking SMS once you've landed." },
    ],
  },

  "vancouver-to-whistler-taxi": {
    slug: "vancouver-to-whistler-taxi",
    h1: "Vancouver to Whistler Taxi · $279 Flat · 24/7",
    title: "Vancouver to Whistler Taxi — $279 Flat · Downtown Pickup · Tony Taxi",
    description: "Downtown Vancouver ↔ Whistler private ride for $279 CAD flat. Hotel-to-hotel pickup, 24/7 dispatch, group rates available. Book in 60 seconds.",
    keywords: "Vancouver to Whistler taxi, Vancouver Whistler shuttle, downtown Vancouver to Whistler, taxi from Vancouver to Whistler, private driver Vancouver to Whistler",
    heroImage: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=1600&q=80",
    pickup: "Vancouver",
    dropoff: "Whistler",
    flatRate: 279,
    durationMin: 115,
    distanceKm: 120,
    serviceType: "Private Transfer",
    intro:
      "Skip the rental car, skip the bus. Tony Taxi runs door-to-door private rides from Downtown Vancouver hotels (or any Vancouver address) to Whistler Village, Creekside, or Blackcomb Base. Flat $279 CAD, 24/7, professional drivers who know every viewpoint along the Sea-to-Sky.",
    bullets: [
      { title: "Hotel-to-hotel · zero waiting", body: "We pick up at your Vancouver hotel lobby and drop you at your Whistler hotel. No transfers. No shared rides. No app surge." },
      { title: "Sea-to-Sky storytelling driver", body: "Want to stop at Shannon Falls, Stawamus Chief, or Brandywine for photos? Just say the word — short stops included." },
      { title: "Better than the bus for groups", body: "Bus tickets are ~$60 each. Group of 4 in Tony Taxi = $70 each but with door-to-door service, luggage handling, and flexible departure." },
      { title: "Premium vehicles", body: "SUVs (4 pax) and full-size vans (up to 8). Spotless interiors, complimentary water, Wi-Fi, USB-C charging in every seat." },
    ],
    faqs: [
      { q: "How much does a taxi from Vancouver to Whistler cost?", a: "Tony Taxi's flat rate is $279 CAD downtown Vancouver to Whistler Village in an SUV (up to 4 pax). Van service for 5–8 passengers is $319 CAD." },
      { q: "How long is the drive from Vancouver to Whistler?", a: "About 1 hour 55 minutes to 2 hours via Hwy 99 (Sea-to-Sky), depending on traffic and weather." },
      { q: "Can you pick up from anywhere in Vancouver?", a: "Yes — any hotel, residence, or address within Metro Vancouver. Specify the pickup location when booking." },
      { q: "Is it cheaper than the bus for a group?", a: "Yes. For 3+ passengers, Tony Taxi works out cheaper per person than the bus — plus you get door-to-door service and flexible departure." },
    ],
  },

  "bc-place-fifa-2026": {
    slug: "bc-place-fifa-2026",
    h1: "Whistler to BC Place · FIFA 2026 World Cup Rides",
    title: "Whistler to BC Place FIFA 2026 Taxi — $349 Flat · Match Day Specialists",
    description: "Pre-book your Whistler ↔ BC Place Stadium ride for FIFA World Cup 2026 matches. Flat $349 CAD, match-day premium service, door-to-door, group vans available.",
    keywords: "Whistler BC Place taxi, FIFA 2026 Whistler taxi, BC Place stadium Whistler ride, FIFA World Cup Vancouver shuttle, Whistler Vancouver match day, BC Place private driver",
    heroImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&q=80",
    pickup: "Whistler",
    dropoff: "BC Place",
    flatRate: 349,
    durationMin: 130,
    distanceKm: 125,
    serviceType: "Event Transfer",
    intro:
      "BC Place Stadium hosts seven FIFA World Cup 2026 matches in Vancouver. Tony Taxi locks in your match-day round-trip from Whistler so you can focus on the football. Pre-book to guarantee a vehicle on game day — surge will be brutal, our flat rate won't be.",
    bullets: [
      { title: "Match-day round trips · $349 flat one-way", body: "Pre-book in advance to lock pricing. Includes priority dispatch, named driver assignment, and a guaranteed slot — no surge, no scrambling." },
      { title: "Drop-off at the BC Place doorstep", body: "Closest legal drop-off zone, beating the gridlock around Pacific Boulevard. Same plan for pickup post-match." },
      { title: "Group vans for the whole crew", body: "8-passenger vans for friend-groups and family squads. Per-head cost beats taking everyone's car (and parking)." },
      { title: "Designated Driver add-on", body: "Celebrating a win? Add our Designated Driver option — two drivers come, one drives YOU and YOUR CAR home from BC Place. No DUI risk." },
      { title: "Whistler Robson St watch party shuttle", body: "Not heading to the stadium? We also do shuttles to the official Robson Street FIFA Fan Zone — flat $279 round-trip." },
    ],
    faqs: [
      { q: "How much is a Whistler to BC Place taxi for FIFA 2026?", a: "Tony Taxi's flat rate is $349 CAD one-way for up to 4 passengers, $389 for vans (5–8 pax). Pre-booking required for match days — surge will be in full effect for everyone else." },
      { q: "When should I book my FIFA 2026 ride?", a: "ASAP. Match days will be the busiest transit days in BC history. We're already 60% booked for Group Stage. Lock yours in now to avoid the surge." },
      { q: "Will you wait until the match is over?", a: "Yes — for round-trip bookings we hold a dedicated vehicle in our Vancouver depot. Your driver meets you at the BC Place gate 15 minutes after final whistle." },
      { q: "How long does the drive take on match day?", a: "Allow 2.5–3 hours for match-day arrivals (vs the usual 2 hours). We'll suggest departure times when booking." },
      { q: "Do you go to the Robson Street FIFA fan zone too?", a: "Yes — we run shuttles to the official Robson watch party for $279 round-trip from Whistler." },
    ],
  },

  "squamish-to-whistler-taxi": {
    slug: "squamish-to-whistler-taxi",
    h1: "Squamish to Whistler Taxi · $149 Flat · 24/7",
    title: "Squamish to Whistler Taxi — $149 Flat · 45 min · Tony Taxi",
    description: "Squamish ↔ Whistler taxi service. Flat $149 CAD, ~45 minute drive, 24/7. Perfect for Whistler workers, weekend trips, or post-Chief climbs.",
    keywords: "Squamish to Whistler taxi, Squamish Whistler shuttle, taxi from Squamish to Whistler, Stawamus Chief Whistler ride",
    heroImage: "https://images.unsplash.com/photo-1588702980080-66c22d9e6292?w=1600&q=80",
    pickup: "Squamish",
    dropoff: "Whistler",
    flatRate: 149,
    durationMin: 45,
    distanceKm: 60,
    serviceType: "Local Transfer",
    intro:
      "Squamish ↔ Whistler is one of our busiest local routes. Whether you're climbing the Chief, working at the resort, or doing a weekend adventure — Tony Taxi runs this leg 24/7 with a flat $149 CAD fare. About 45 minutes door-to-door.",
    bullets: [
      { title: "Flat $149 CAD · one of our most-booked routes", body: "Squamish residents commute to Whistler year-round — we're built for it. Lock in the rate, skip the rental car." },
      { title: "Stops at Shannon Falls, Brandywine, Brackendale", body: "Want a quick photo stop along the way? Just ask — we know every viewpoint." },
      { title: "Climber-friendly drivers", body: "Plenty of gear room. We've shuttled climbers off the Chief at 11 PM more times than we can count." },
    ],
    faqs: [
      { q: "How much is a Squamish to Whistler taxi?", a: "Tony Taxi's flat rate is $149 CAD for up to 4 passengers, $179 for vans." },
      { q: "How long is the drive from Squamish to Whistler?", a: "Approximately 45 minutes via Hwy 99 (Sea-to-Sky Highway)." },
    ],
  },

  "pemberton-taxi": {
    slug: "pemberton-taxi",
    h1: "Pemberton to Whistler Taxi · $99 Flat · 24/7",
    title: "Pemberton to Whistler Taxi — $99 Flat · 30 min · Tony Taxi",
    description: "Pemberton ↔ Whistler private ride. Flat $99 CAD, 30 minutes, 24/7 dispatch. Perfect for commuters, farmers' market trips, and Joffre Lakes day trips.",
    keywords: "Pemberton to Whistler taxi, Pemberton Whistler ride, Joffre Lakes shuttle, taxi Pemberton BC",
    heroImage: "https://images.unsplash.com/photo-1494391468241-0a4476581b78?w=1600&q=80",
    pickup: "Pemberton",
    dropoff: "Whistler",
    flatRate: 99,
    durationMin: 30,
    distanceKm: 35,
    serviceType: "Local Transfer",
    intro:
      "Pemberton to Whistler is a quick 30-minute hop along Hwy 99. Whether you're catching a Whistler dinner reservation, heading home from a Pemberton wedding, or starting your Joffre Lakes day, Tony Taxi runs this route 24/7 with a flat $99 CAD fare.",
    bullets: [
      { title: "Flat $99 CAD · cheapest direct option", body: "Beats taxis with meters. Beats parking in the village. Beats getting stuck without a designated driver after a Pemberton brewery night." },
      { title: "Joffre Lakes drop-off available", body: "Add $25 to the flat rate and we'll drop you at the Joffre Lakes trailhead for the iconic 10 km hike." },
    ],
    faqs: [
      { q: "How much is a taxi from Pemberton to Whistler?", a: "Tony Taxi's flat rate is $99 CAD for up to 4 passengers." },
      { q: "How long is the drive from Pemberton to Whistler?", a: "Approximately 30 minutes via Hwy 99." },
    ],
  },

  "whistler-designated-driver": {
    slug: "whistler-designated-driver",
    h1: "Whistler Designated Driver · We Drive You AND Your Car Home",
    title: "Whistler Designated Driver Service — From $89 · We Drive You & Your Car Home",
    description: "Two of our drivers come to you. One drives you home in YOUR car. The other follows in ours. Starts at $89 CAD. Don't risk a DUI — call 778-917-3030.",
    keywords: "Whistler designated driver, DD service Whistler, drive me home Whistler, drink and drive alternative Whistler, ddride Whistler",
    heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80",
    pickup: "Anywhere in Whistler",
    dropoff: "Your home",
    flatRate: 89,
    durationMin: 30,
    distanceKm: 10,
    serviceType: "Designated Driver",
    intro:
      "Had a few too many at Dusty's? At Garf's? At a wedding? Don't risk it. Tony Taxi's Designated Driver service sends TWO drivers — one to drive you home in YOUR car, the other to follow behind in ours. You keep your vehicle, you keep your license, you keep your life. From $89 CAD anywhere in Whistler.",
    bullets: [
      { title: "Your car stays with you", body: "No paying for an Uber tonight and an Uber back to your car tomorrow. No risking a tow. We drive YOUR vehicle home." },
      { title: "DUI in BC is brutal", body: "First-offense DUI in BC = 90-day driving ban + $4,060+ in costs + Responsible Driver Program + ignition interlock. Our $89 is the best $89 you'll ever spend." },
      { title: "24/7 dispatch · 15-min response in village", body: "Call from the bar, the wedding, the dinner party. We'll be there before you finish your water." },
      { title: "Works for couples, groups, anyone", body: "Going home together? Both rides in one trip. Trustworthy. Discreet. Insured." },
    ],
    faqs: [
      { q: "How does a designated driver service work?", a: "Two of our drivers come to your location. One drives you home in your car. The second driver follows in our vehicle and brings the first driver back. You wake up with your car at home." },
      { q: "How much is the designated driver service in Whistler?", a: "Starts at $89 CAD anywhere in Whistler Village. Pricing scales with distance — call for a quote." },
      { q: "Is your designated driver service insured?", a: "Yes — all our drivers are professionally licensed and our coverage protects both your vehicle and you during the ride." },
      { q: "How fast can you get to me?", a: "Average village response is 15 minutes. Call 778-917-3030 the moment you decide you shouldn't drive." },
    ],
  },
};
