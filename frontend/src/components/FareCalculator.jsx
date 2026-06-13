import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { Calculator, ArrowRight, MapPin, Users, Loader2, RefreshCw, ArrowLeftRight, Sparkles } from "lucide-react";
import { PICKUP_OPTIONS, PHONE_TEL } from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const REFRESH_MS = 15 * 60 * 1000; // 15 min

const SERVICE_TYPES = [
  { v: "local", label: "Standard" },
  { v: "airport", label: "Airport" },
  { v: "fifa", label: "FIFA Match Day" },
  { v: "designated", label: "Designated Driver" },
  { v: "activity", label: "Trailhead / Tour" },
  { v: "nightlife", label: "Late Night" },
];

export default function FareCalculator() {
  const [pickup, setPickup] = useState("Whistler Village");
  const [dropoff, setDropoff] = useState("YVR Airport");
  const [pax, setPax] = useState(2);
  const [serviceType, setServiceType] = useState("airport");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [lastFetched, setLastFetched] = useState(null);
  const [nextRefresh, setNextRefresh] = useState(REFRESH_MS / 1000);
  const timerRef = useRef(null);

  const calculate = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    setErr("");
    try {
      const { data } = await axios.post(`${API}/fare-estimate`, {
        pickup, dropoff,
        passengers: Number(pax),
        service_type: serviceType,
      });
      setResult(data);
      setLastFetched(new Date());
      setNextRefresh(REFRESH_MS / 1000);
    } catch (e) {
      setErr("Couldn't estimate right now. Call us and we'll quote you directly.");
    } finally {
      setLoading(false);
    }
  }, [pickup, dropoff, pax, serviceType]);

  // Auto refresh every 15 minutes once we have a result
  useEffect(() => {
    if (!result) return;
    const id = setInterval(() => {
      calculate(true);
    }, REFRESH_MS);
    return () => clearInterval(id);
  }, [result, calculate]);

  // Countdown timer
  useEffect(() => {
    if (!result) return;
    timerRef.current = setInterval(() => {
      setNextRefresh((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [result, lastFetched]);

  const swap = () => {
    setPickup(dropoff);
    setDropoff(pickup);
  };

  const fmtTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <section id="fare" className="py-20 px-5" data-testid="fare-calculator-section">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Instant Quote</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-center mb-3 tracking-tighter">
          Know the price <span className="italic gold-gradient-text">before you ride.</span>
        </h2>
        <p className="text-center text-white/60 mb-10 max-w-xl mx-auto">
          Flat rates on major routes. No surge. No surprise. Group of 4? You&apos;re often cheaper per-person than the bus.
        </p>

        <div className="bg-gradient-to-br from-surface to-surface2 border border-white/8 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          {/* Service type pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SERVICE_TYPES.map((s) => (
              <button
                key={s.v}
                onClick={() => setServiceType(s.v)}
                data-testid={`fare-service-${s.v}`}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  serviceType === s.v
                    ? "gold-foil shadow-lg shadow-gold/20"
                    : "border border-white/10 text-white/60 hover:border-gold/30 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Pickup / Swap / Dropoff */}
          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-end mb-4">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5 block flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold" /> Pickup
              </label>
              <select
                value={pickup} onChange={(e) => setPickup(e.target.value)}
                data-testid="fare-pickup"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
              >
                {PICKUP_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <button
              onClick={swap}
              data-testid="fare-swap"
              aria-label="Swap pickup and dropoff"
              className="hidden sm:flex w-11 h-11 mb-0.5 rounded-full border border-white/10 hover:border-gold hover:bg-gold/10 items-center justify-center group transition-all"
            >
              <ArrowLeftRight className="w-4 h-4 text-white/60 group-hover:text-gold group-hover:rotate-180 transition-all duration-500" />
            </button>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5 block flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-fifa" /> Drop-off
              </label>
              <select
                value={dropoff} onChange={(e) => setDropoff(e.target.value)}
                data-testid="fare-dropoff"
                className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
              >
                {PICKUP_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-[1fr_auto] gap-3 items-end">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5 block flex items-center gap-1.5">
                <Users className="w-3 h-3 text-gold" /> Passengers
              </label>
              <div className="flex items-center gap-2 bg-[#0A0A0A] border border-white/10 rounded-xl px-2 py-1">
                <button
                  type="button" onClick={() => setPax(Math.max(1, Number(pax) - 1))}
                  data-testid="fare-pax-minus"
                  className="w-9 h-9 rounded-lg hover:bg-gold/10 hover:text-gold text-white/60 font-bold text-lg transition-colors"
                >−</button>
                <input
                  type="number" min="1" max="10" value={pax}
                  onChange={(e) => setPax(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
                  data-testid="fare-passengers"
                  className="flex-1 bg-transparent text-center text-white text-lg font-semibold focus:outline-none tabular-nums"
                />
                <button
                  type="button" onClick={() => setPax(Math.min(10, Number(pax) + 1))}
                  data-testid="fare-pax-plus"
                  className="w-9 h-9 rounded-lg hover:bg-gold/10 hover:text-gold text-white/60 font-bold text-lg transition-colors"
                >+</button>
              </div>
            </div>
            <button
              onClick={() => calculate(false)}
              disabled={loading}
              data-testid="fare-calc-button"
              className="h-[52px] inline-flex items-center justify-center gap-2 px-8 rounded-xl gold-foil font-semibold hover:scale-[1.02] transition-transform disabled:opacity-60 shadow-lg shadow-gold/20"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {loading ? "Calculating..." : "Get Estimate"}
            </button>
          </div>

          {err && <p className="mt-4 text-sm text-red-400" data-testid="fare-error">{err}</p>}

          {result && (
            <div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-5" data-testid="fare-result">
              <div className="relative bg-gradient-to-br from-gold/20 via-gold/5 to-transparent border border-gold/30 rounded-2xl p-6 overflow-hidden">
                <div className="shimmer absolute inset-0 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-gold/80">Flat Rate Estimate</span>
                    <span className="text-[10px] text-white/40 flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" />
                      Refreshes in {fmtTime(nextRefresh)}
                    </span>
                  </div>
                  <div className="font-serif text-6xl font-black gold-gradient-text tabular-nums leading-none">
                    ${result.estimate}
                  </div>
                  <div className="text-sm text-white/60 mt-2">{result.currency} · all-in · no surge</div>
                  <div className="text-xs text-white/50 mt-3">
                    ≈ <span className="text-gold tabular-nums">${(result.estimate / Math.max(1, pax)).toFixed(0)}</span> per person
                  </div>
                  {lastFetched && (
                    <div className="text-[10px] text-white/30 mt-3 uppercase tracking-wider">
                      Quoted {lastFetched.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-surface2 rounded-2xl p-6 flex flex-col justify-between">
                <div className="space-y-2.5 text-sm">
                  <Row label="Distance" value={`${result.distance_km} km`} />
                  <Row label="Drive time" value={`${Math.floor(result.duration_min / 60)}h ${result.duration_min % 60}m`} />
                  <Row label="Base route" value={`$${result.breakdown.base_route}`} />
                  {result.breakdown.passenger_surcharge > 0 && (
                    <Row label="Van surcharge" value={`+$${result.breakdown.passenger_surcharge}`} highlight />
                  )}
                  {result.breakdown.fifa_premium > 0 && (
                    <Row label="FIFA match day" value={`+$${result.breakdown.fifa_premium}`} highlight />
                  )}
                  {result.breakdown.designated_driver_premium > 0 && (
                    <Row label="2nd driver (DD)" value={`+$${result.breakdown.designated_driver_premium}`} highlight />
                  )}
                  <div className="h-px bg-white/5 my-2" />
                  <Row label="Total" value={`$${result.estimate}`} bold />
                </div>
                {pax >= 2 && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20">
                    <div className="text-[10px] uppercase tracking-wider text-emerald-300 mb-1">Group split</div>
                    <div className="text-sm text-white">
                      <span className="tabular-nums font-bold text-emerald-300">${(result.estimate / pax).toFixed(2)}</span>
                      <span className="text-white/60"> per person · {pax} riders</span>
                    </div>
                  </div>
                )}
                <a
                  href={PHONE_TEL} data-testid="fare-book-call"
                  className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gold text-gold hover:bg-gold hover:text-black font-medium transition-colors"
                  onClick={() => navigator.vibrate && navigator.vibrate(30)}
                >
                  Lock in this ride <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  data-testid="fare-apply-to-booking"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("tony:prefill-booking", {
                        detail: {
                          pickup, dropoff,
                          passengers: Number(pax),
                          service_type: serviceType,
                        },
                      })
                    );
                    const el = document.getElementById("book");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl gold-foil font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-gold/20"
                >
                  Apply to Booking <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, bold, highlight }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`${bold ? "text-white font-medium" : "text-white/60"}`}>{label}</span>
      <span className={`tabular-nums ${bold ? "text-gold font-bold text-lg" : highlight ? "text-gold" : "text-white"}`}>{value}</span>
    </div>
  );
}
