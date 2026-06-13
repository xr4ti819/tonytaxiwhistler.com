import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import confetti from "canvas-confetti";
import { Phone, Trophy, Plane, Moon, Mountain, Star, Check, Award, Quote, ShieldCheck } from "lucide-react";
import { PHONE, PHONE_TEL, WHATSAPP, FIFA_MATCHES, SERVICES, ACTIVITIES, TRAILS, RESTAURANTS,
  NIGHTLIFE, EVENTS_2026, EMERGENCY, FAQ, HAPPY_HOUR
} from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ICON = { Plane, Trophy, Mountain, Moon, ShieldCheck };

export function Services() {
  return (
    <section className="py-20 px-5" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="What We Do" title={<>One number. <span className="italic gold-gradient-text">Every kind of ride.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {SERVICES.map((s, i) => {
            const Icon = ICON[s.icon] || Plane;
            return (
              <article key={s.title} data-testid={`service-${i}`} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 hover:-translate-y-1 transition-all">
                <div className="relative h-32 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <div className="absolute bottom-2 left-3 w-10 h-10 rounded-xl glass border border-gold/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold mb-2 leading-tight">{s.title}</h3>
                  <p className="text-xs text-white/60 mb-3">{s.desc}</p>
                  <div className="text-gold text-sm font-medium">{s.price} →</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function daysUntil(dateStr) {
  const [m, d, y] = dateStr.replace(",", "").split(" ");
  const months = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };
  const t = new Date(parseInt(y), months[m], parseInt(d)).getTime();
  return Math.max(0, Math.ceil((t - Date.now()) / 86400000));
}

export function FIFASection() {
  return (
    <section id="fifa" className="py-20 px-5 relative" data-testid="fifa-section">
      <div className="absolute inset-0 bg-gradient-to-b from-fifa/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4" aria-hidden="true">⚽ 🏆 🏔️</div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fifa/10 border border-fifa/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-fifa animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-fifa">Canada 🇨🇦 · Mexico 🇲🇽 · USA 🇺🇸</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-3">
            FIFA World Cup <span className="gold-gradient-text italic">2026.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">Vancouver hosts seven matches at BC Place. Tony Taxi runs Whistler ↔ BC Place direct. The bus stops short. We don&apos;t.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {FIFA_MATCHES.map((m) => {
            const days = daysUntil(m.date);
            return (
              <div
                key={m.date} data-testid={`fifa-match-${m.date}`}
                className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all relative"
                style={{ borderLeftWidth: "3px", borderLeftColor: m.accent }}
              >
                <div className="relative h-36 overflow-hidden">
                  <img src={m.img} alt={m.label} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider font-bold" style={{ color: m.accent }}>{m.date}</span>
                  <div className="absolute top-3 right-3 text-right">
                    <div className="font-serif text-2xl font-black tabular-nums leading-none" style={{ color: m.accent }}>{days}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/70">days</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold mb-2">{m.label}</h3>
                  <p className="text-sm text-white/60">Kickoff {m.kickoff} · Pickup 2.5 hrs before</p>
                  <a href={PHONE_TEL} className="mt-3 inline-flex items-center gap-2 text-gold text-sm font-medium hover:underline" data-testid={`fifa-book-${m.date}`}>
                    Reserve this match-day <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-gradient-to-br from-fifa/15 to-transparent border border-fifa/30 rounded-2xl overflow-hidden">
          <div className="relative h-56 sm:h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1600&q=80"
              alt="Robson Square FIFA 2026 free outdoor viewing party — fans cheering at large screen"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur text-[10px] uppercase tracking-[0.3em] text-fifa font-bold">FIFA Fan Zone Shuttle</span>
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/70">Downtown Vancouver</div>
                <div className="font-serif text-2xl sm:text-3xl font-black text-white drop-shadow-lg">Robson Square · Free Viewing</div>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-[10px] uppercase tracking-widest text-white/70">Group of 4</div>
                <div className="font-serif text-2xl font-black text-fifa tabular-nums">$87<span className="text-sm text-white/60"> /ea</span></div>
              </div>
            </div>
          </div>
          <div className="p-7 sm:p-8 text-center">
            <p className="text-white/75 mb-5 max-w-2xl mx-auto leading-relaxed">
              Big screens. Food trucks. Live music. The official FIFA 2026 outdoor watch party in the heart of Downtown Vancouver. Group of 4 = <span className="text-fifa font-semibold">$87 each round-trip</span> from Whistler. The bus doesn&apos;t go there. We do.
            </p>
            <a href={PHONE_TEL} data-testid="fifa-fanzone-cta" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-foil font-semibold hover:scale-105 transition-transform">
              <Phone className="w-4 h-4" /> Book Fan Zone Run
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VsBus() {
  const rows = [
    ["Door-to-door", "❌", "✅"],
    ["Time", "2.5–3.5 hrs", "2 hrs"],
    ["Group of 4 cost", "$220", "$299 / $75 ea"],
    ["Luggage", "1 bag", "Unlimited"],
    ["Skis / bikes", "Limited", "Always"],
    ["Schedule", "Fixed", "Your time"],
    ["Snow days", "Often cancels", "Snow tires · always runs"],
  ];
  return (
    <section className="py-20 px-5" data-testid="vs-bus">
      <div className="max-w-5xl mx-auto">
        <SectionHeading kicker="Tony vs Bus" title={<>Cheaper per-head for <span className="italic gold-gradient-text">groups of 3+.</span></>} />
        <div className="mt-10 bg-surface border border-white/5 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-surface2 px-6 py-4 text-xs uppercase tracking-wider text-white/50 border-b border-white/5">
            <div></div>
            <div className="text-center">Bus</div>
            <div className="text-center text-gold">Tony Taxi</div>
          </div>
          {rows.map(([k, a, b], i) => (
            <div key={k} className={`grid grid-cols-3 px-6 py-4 ${i % 2 ? "bg-surface2/40" : ""}`}>
              <div className="text-sm text-white/70">{k}</div>
              <div className="text-sm text-center text-white/60">{a}</div>
              <div className="text-sm text-center font-medium text-white">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Activities() {
  return (
    <section id="activities" className="py-20 px-5" data-testid="activities-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="Things To Do" title={<>Whistler&apos;s playground, <span className="italic gold-gradient-text">delivered.</span></>} />
        <p className="text-center text-white/60 max-w-2xl mx-auto mt-3">We drop you at the trailhead, the dock, the helipad — and pick you up when you&apos;re done. No parking, no shuttles.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {ACTIVITIES.map((a, i) => (
            <article key={a.name} data-testid={`activity-${i}`} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 hover:-translate-y-1 transition-all">
              <div className="relative h-52 overflow-hidden">
                <img src={a.img} alt={a.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider text-gold border border-gold/30">{a.badge}</span>
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{a.category}</div>
                <h3 className="font-serif text-lg font-bold mb-2">{a.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gold text-sm font-medium">{a.price}</span>
                  <a href={PHONE_TEL} data-testid={`activity-shuttle-${i}`} className="text-xs text-white/60 hover:text-gold transition-colors">
                    Shuttle {a.shuttle} →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trails() {
  return (
    <section className="py-20 px-5" data-testid="trails-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="Alpine Trails" title={<>Drop us at the trailhead. <span className="italic gold-gradient-text">$45 covers four.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {TRAILS.map((t, i) => (
            <article key={t.name} data-testid={`trail-${i}`} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 hover:-translate-y-1 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                <span className={`absolute top-3 right-3 text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold backdrop-blur bg-black/60 border ${
                  t.level === "Expert" ? "border-emergency/50 text-emergency" :
                  t.level === "Hard" ? "border-fifa/50 text-fifa" : "border-gold/50 text-gold"
                }`}>{t.level}</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold mb-3">{t.name}</h3>
                <div className="grid grid-cols-3 gap-2 text-xs text-white/60">
                  <div><div className="text-white font-medium">{t.dist}</div><div className="uppercase tracking-wider text-[10px] text-white/40">Distance</div></div>
                  <div><div className="text-white font-medium">{t.elev}</div><div className="uppercase tracking-wider text-[10px] text-white/40">Elevation</div></div>
                  <div><div className="text-white font-medium">{t.time}</div><div className="uppercase tracking-wider text-[10px] text-white/40">Time</div></div>
                </div>
                <a href={PHONE_TEL} className="mt-4 inline-flex items-center text-xs text-gold hover:underline font-medium" data-testid={`trail-shuttle-${i}`}>
                  Shuttle $45 (up to 4) →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Dining() {
  return (
    <section id="dining" className="py-20 px-5" data-testid="dining-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="Where To Eat" title={<>Award-winning <span className="italic gold-gradient-text">tables.</span></>} />
        <p className="text-center text-white/60 mt-3">Tony knows every reservation. Ask your driver — we&apos;ll get you in.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {RESTAURANTS.map((r, i) => (
            <div key={r.name} data-testid={`restaurant-${i}`} className="relative group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 transition-all">
              <div className="relative h-56 overflow-hidden">
                <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                <div className="absolute top-3 right-3 gold-foil text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded-sm shadow-lg flex items-center gap-1">
                  <Award className="w-3 h-3" /> Gold List
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold mb-1">{r.name}</h3>
                <p className="text-xs text-white/60 mb-2">{r.cuisine}</p>
                <p className="text-xs text-gold/80 italic">{r.award}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-white/40 font-mono">{r.price}</span>
                  <a href={PHONE_TEL} className="text-xs text-gold hover:underline">Drop me here →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HappyHour() {
  return (
    <section className="py-20 px-5" data-testid="happy-hour-section">
      <div className="max-w-5xl mx-auto">
        <SectionHeading kicker="Happy Hour" title={<>Cheap drinks. <span className="italic gold-gradient-text">Safe ride home.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {HAPPY_HOUR.map((h, i) => (
            <div key={h.spot} data-testid={`hh-${i}`} className="bg-surface border border-white/5 rounded-2xl p-5">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-lg font-bold">{h.spot}</h3>
                <span className="text-xs text-gold tabular-nums">{h.time}</span>
              </div>
              <p className="text-sm text-white/60">{h.offer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-emergency/10 border border-emergency/30 rounded-2xl p-6 text-center">
          <p className="text-sm text-white/80">
            🚨 A DUI in BC costs <span className="text-emergency font-bold">$10,000+</span>. We pick up from any bar, any hour.
            Save <a href={PHONE_TEL} className="text-gold font-bold underline">{PHONE}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Nightlife() {
  return (
    <section id="nightlife" className="py-20 px-5" data-testid="nightlife-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="After Dark" title={<>From apres-ski to <span className="italic gold-gradient-text">3 AM.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {NIGHTLIFE.map((n, i) => (
            <article key={n.name} data-testid={`night-${i}`} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all">
              <div className="relative h-44 overflow-hidden">
                <img src={n.img} alt={n.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider text-gold border border-gold/30">{n.type}</span>
                <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[10px] text-white/80 tabular-nums">{n.hours}</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold mb-2">{n.name}</h3>
                <p className="text-sm text-white/70">{n.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Loyalty() {
  const [phone, setPhone] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const check = async (e) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/loyalty/${encodeURIComponent(phone)}`);
      setData(data);
    } catch (err) {
      console.warn("[Loyalty] lookup failed", err);
    }
    setLoading(false);
  };

  const stamps = data?.stamps || 0;
  const tier = stamps >= 10 ? "FIFA VIP" : stamps >= 7 ? "Gold" : stamps >= 4 ? "Silver" : stamps >= 1 ? "Bronze" : "Rookie";
  const tierColor = { "FIFA VIP": "text-fifa", Gold: "text-gold", Silver: "text-zinc-300", Bronze: "text-amber-600", Rookie: "text-white/40" }[tier];

  useEffect(() => {
    if (stamps >= 10 && data) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ["#D4AF37", "#F2E3C6", "#FF6B35"] });
      if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
    }
  }, [stamps, data]);

  const share = () => {
    const text = "I just booked Tony Taxi Whistler — 24/7 private rides, FIFA 2026 transport, Designated Driver. Save this number: 778-917-3030 → https://tonytaxiwhistler.com";
    if (navigator.share) {
      navigator.share({ title: "Tony Taxi Whistler", text, url: "https://tonytaxiwhistler.com" });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  return (
    <section id="loyalty" className="py-16 px-5" data-testid="loyalty-section">
      <div className="max-w-5xl mx-auto relative">
        {/* Glow halo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-fifa/20 to-gold/20 rounded-[2rem] blur-2xl opacity-50 pointer-events-none" />
        <div className="relative bg-gradient-to-br from-[#1a1410] via-surface to-[#1a1410] border-2 border-gold/50 rounded-[2rem] p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="shimmer absolute inset-0 pointer-events-none" />
          {/* Spotlight */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-foil text-xs uppercase tracking-[0.3em] font-bold shadow-lg mb-5">
                ⭐ Free Loyalty Club · <span className={tierColor}>{tier} tier</span> ⭐
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-3 leading-[0.95]">
                Ride 10 times.<br />
                <span className="italic gold-gradient-text">11th ride is FREE.</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
                Your 11th ride matches the average distance of your last 10. <span className="text-gold font-semibold">Airport runs count double.</span> Members save ~$250/year.
              </p>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-3 mb-8 max-w-3xl mx-auto">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  data-testid={`loyalty-stamp-${i}`}
                  className={`aspect-square rounded-full border-2 flex items-center justify-center text-base font-bold transition-all duration-500 ${
                    i < stamps
                      ? "gold-foil border-gold shadow-xl shadow-gold/40 scale-105"
                      : "border-white/15 text-white/30 hover:border-gold/40"
                  }`}
                >
                  {i < stamps ? <Check className="w-5 h-5" strokeWidth={3} /> : i + 1}
                </div>
              ))}
            </div>

            <form onSubmit={check} className="flex gap-2 max-w-md mx-auto">
              <input
                type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                data-testid="loyalty-phone"
                placeholder="Enter your phone to check stamps"
                className="flex-1 bg-[#0A0A0A]/80 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
              <button type="submit" disabled={loading} data-testid="loyalty-check" className="px-6 py-3 rounded-xl gold-foil font-bold hover:scale-105 transition-transform disabled:opacity-60 shadow-lg shadow-gold/20">
                {loading ? "..." : "Check"}
              </button>
            </form>
            {data && (
              <p className="text-center text-sm text-white/80 mt-5" data-testid="loyalty-result">
                <span className="text-gold font-semibold">{data.rides}</span> ride{data.rides === 1 ? "" : "s"} ·{" "}
                <span className="text-gold font-semibold">{data.airport_rides}</span> airport ·{" "}
                {data.rides_until_free === 0
                  ? <span className="text-gold font-bold text-base">🎉 Your next ride is on us!</span>
                  : <><span className="text-gold font-bold">{data.rides_until_free}</span> more stamps to a free ride</>}
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
              <span>Joining is automatic · Track by phone</span>
              <span className="hidden sm:inline text-white/20">·</span>
              <button
                onClick={share}
                data-testid="loyalty-refer"
                className="text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline"
              >
                Refer a friend · Get a free stamp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`${API}/testimonials`).then(r => setItems(r.data)).catch(() => {});
  }, []);

  if (!items.length) return null;
  const loop = [...items, ...items];

  return (
    <section className="py-20 overflow-hidden" data-testid="testimonials-section">
      <div className="px-5 mb-10">
        <SectionHeading kicker="Riders" title={<>Real <span className="italic gold-gradient-text">people. Real rides.</span></>} />
      </div>
      <div className="flex marquee gap-5 w-max">
        {loop.map((t, i) => (
          <div key={i} data-testid={`testimonial-${i}`} className="w-[340px] shrink-0 bg-surface border border-white/5 rounded-2xl p-6">
            <Quote className="w-6 h-6 text-gold/40 mb-3" />
            <p className="text-sm text-white/80 leading-relaxed mb-4">{t.text}</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-serif font-bold text-sm">{t.name}</div>
                <div className="text-xs text-white/40">{t.location}</div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Events() {
  return (
    <section className="py-20 px-5" data-testid="events-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeading kicker="Calendar 2026" title={<>This year in <span className="italic gold-gradient-text">Whistler.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {EVENTS_2026.map((e, i) => (
            <article key={e.name} data-testid={`event-${i}`} className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all">
              <div className="relative h-44 overflow-hidden">
                <img src={e.img} alt={e.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider text-gold border border-gold/30">{e.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold mb-1 leading-tight">{e.name}</h3>
                <div className="text-xs text-white/50">{e.when}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Emergency() {
  return (
    <section className="py-20 px-5" data-testid="emergency-section">
      <div className="max-w-6xl mx-auto">
        <SectionHeading kicker="Save These" title={<>Emergency <span className="italic gold-gradient-text">numbers.</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {EMERGENCY.map((e, i) => (
            <div key={e.name} data-testid={`emergency-${i}`} className="bg-surface border border-white/5 rounded-xl p-5">
              <h3 className="font-serif text-base font-bold mb-1">{e.name}</h3>
              <a href={`tel:${e.phone.replace(/-/g, "")}`} className="text-gold text-sm font-mono">{e.phone}</a>
              <p className="text-xs text-white/50 mt-1">{e.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-emergency/10 border border-emergency/30 rounded-2xl p-5 text-center text-sm text-white/80">
          🚨 Life-threatening? Call <strong className="text-emergency">911</strong> first. For non-emergency transport to medical: <a href={PHONE_TEL} className="text-gold underline">{PHONE}</a>.
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 px-5" data-testid="faq-section">
      <div className="max-w-3xl mx-auto">
        <SectionHeading kicker="FAQ" title={<>Common <span className="italic gold-gradient-text">questions.</span></>} />
        <div className="mt-10 space-y-3">
          {FAQ.map((f, i) => (
            <div key={f.q} data-testid={`faq-${i}`} className="bg-surface border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-white/5"
              >
                <span className="font-serif text-base font-bold pr-4">{f.q}</span>
                <span className="text-gold text-xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SEO_ROUTES = [
  { slug: "yvr-airport-taxi-whistler", label: "YVR Airport ↔ Whistler · $299" },
  { slug: "vancouver-to-whistler-taxi", label: "Vancouver ↔ Whistler · $279" },
  { slug: "bc-place-fifa-2026", label: "BC Place FIFA 2026 · $349" },
  { slug: "squamish-to-whistler-taxi", label: "Squamish ↔ Whistler · $149" },
  { slug: "pemberton-taxi", label: "Pemberton ↔ Whistler · $99" },
  { slug: "whistler-designated-driver", label: "Designated Driver · from $89" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-5" data-testid="site-footer">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg gold-foil flex items-center justify-center font-serif text-lg font-black">T</div>
            <div>
              <div className="font-serif text-lg font-bold">Tony Taxi Whistler</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Since 2010</div>
            </div>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">24/7 private rides between Whistler, YVR, Vancouver, Squamish & beyond. 15+ years. 50,000+ happy riders.</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Reach Us</div>
          <a href={PHONE_TEL} className="block font-serif text-2xl font-bold gold-gradient-text mb-2" data-testid="footer-call">{PHONE}</a>
          <a href="mailto:tonytaxiwhistler@gmail.com" className="text-sm text-white/70 hover:text-gold">tonytaxiwhistler@gmail.com</a>
          <p className="text-xs text-white/40 mt-3">Whistler, BC, Canada</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Popular Routes</div>
          <ul className="space-y-1.5">
            {SEO_ROUTES.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/${r.slug}`}
                  data-testid={`footer-route-${r.slug}`}
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Promise</div>
          <p className="text-sm text-white/60 leading-relaxed mb-2">Never drink and drive. Save <strong className="text-gold">{PHONE}</strong>.</p>
          <p className="text-xs text-white/40">Wheelchair · Pets · Car seats · Skis · Bikes — all welcome, all free.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-center space-y-2">
        <p className="text-xs text-gold/80 italic tracking-wide" data-testid="footer-faith-tagline">
          ✝ Viewed through the lens of Jesus Christ our Savior · <span className="text-white/50">Soli Deo Gloria</span>
        </p>
        <p className="text-xs text-white/40">
          © 2026 Tony Taxi Whistler. All rights reserved. ·{" "}
          <a href="/sitemap.xml" className="hover:text-gold">Sitemap</a> ·{" "}
          <a href="/robots.txt" className="hover:text-gold">Robots</a>
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({ kicker, title }) {
  return (
    <div className="text-center">
      <div className="flex items-center gap-3 mb-3 max-w-md mx-auto">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold">{kicker}</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
      </div>
      <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tighter">{title}</h2>
    </div>
  );
}
