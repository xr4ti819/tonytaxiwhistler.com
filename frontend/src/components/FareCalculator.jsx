import React, { useState } from "react";
import axios from "axios";
import { Calculator, ArrowRight, MapPin, Users, Loader2 } from "lucide-react";
import { PICKUP_OPTIONS, PHONE_TEL } from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function FareCalculator() {
  const [pickup, setPickup] = useState("Whistler Village");
  const [dropoff, setDropoff] = useState("YVR Airport");
  const [pax, setPax] = useState(2);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const calculate = async () => {
    setErr(""); setLoading(true); setResult(null);
    try {
      const { data } = await axios.post(`${API}/fare-estimate`, {
        pickup, dropoff, passengers: Number(pax), service_type: "local",
      });
      setResult(data);
    } catch (e) {
      setErr("Couldn't estimate right now. Call us and we'll quote you directly.");
    } finally { setLoading(false); }
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

        <div className="bg-surface border border-white/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-white/50 mb-2 block flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" /> Pickup
              </label>
              <select
                value={pickup} onChange={(e) => setPickup(e.target.value)}
                data-testid="fare-pickup"
                className="w-full bg-surface2 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              >
                {PICKUP_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-white/50 mb-2 block flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-fifa" /> Drop-off
              </label>
              <select
                value={dropoff} onChange={(e) => setDropoff(e.target.value)}
                data-testid="fare-dropoff"
                className="w-full bg-surface2 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              >
                {PICKUP_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-white/50 mb-2 block flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-gold" /> Passengers
              </label>
              <input
                type="number" min="1" max="10" value={pax}
                onChange={(e) => setPax(e.target.value)}
                data-testid="fare-passengers"
                className="w-full bg-surface2 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            disabled={loading}
            data-testid="fare-calc-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-foil font-semibold hover:scale-[1.02] transition-transform disabled:opacity-60"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Calculator className="w-4 h-4" />}
            {loading ? "Calculating..." : "Get Instant Estimate"}
          </button>

          {err && <p className="mt-4 text-sm text-red-400" data-testid="fare-error">{err}</p>}

          {result && (
            <div className="mt-8 grid sm:grid-cols-2 gap-5" data-testid="fare-result">
              <div className="bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 rounded-2xl p-6">
                <div className="text-xs uppercase tracking-wider text-gold/80 mb-2">Flat Rate Estimate</div>
                <div className="font-serif text-5xl font-black gold-gradient-text tabular-nums">
                  ${result.estimate}
                </div>
                <div className="text-sm text-white/60 mt-2">{result.currency} · all-in</div>
                <div className="text-xs text-white/50 mt-3">≈ ${(result.estimate / Math.max(1, pax)).toFixed(0)} per person</div>
              </div>
              <div className="bg-surface2 rounded-2xl p-6 flex flex-col justify-between">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-white/60">Distance</span><span className="tabular-nums">{result.distance_km} km</span></div>
                  <div className="flex justify-between"><span className="text-white/60">Drive time</span><span className="tabular-nums">~{result.duration_min} min</span></div>
                  <div className="flex justify-between"><span className="text-white/60">Base route</span><span className="tabular-nums">${result.breakdown.base_route}</span></div>
                  {result.breakdown.passenger_surcharge > 0 && (
                    <div className="flex justify-between"><span className="text-white/60">Van surcharge</span><span className="tabular-nums">+${result.breakdown.passenger_surcharge}</span></div>
                  )}
                </div>
                <a href={PHONE_TEL} data-testid="fare-book-call" className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gold text-gold hover:bg-gold hover:text-black transition-colors">
                  Lock in this ride <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
