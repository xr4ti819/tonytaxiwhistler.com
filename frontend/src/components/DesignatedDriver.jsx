import React from "react";
import { ShieldCheck, Car, Users, Sparkles, Phone, ArrowRight } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/data";

export default function DesignatedDriver() {
  return (
    <section id="dd" className="py-20 px-5 relative overflow-hidden" data-testid="dd-section">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">New · Like MyDDRide</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            You + your car, <span className="italic gold-gradient-text">both home safe.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Had a few drinks? Don&apos;t leave your car at the bar. Two of our drivers come to you — one drives YOU home in YOUR car, the other follows. You wake up with your car in your driveway.
          </p>
        </div>

        {/* How it works steps */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { n: 1, t: "Call us", d: `Dial ${PHONE} or hit Book. Tell us where you are.`, Icon: Phone, img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80" },
            { n: 2, t: "Two drivers arrive", d: "One takes the wheel of your car with you in the passenger seat. The other follows in a Tony Taxi.", Icon: Users, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" },
            { n: 3, t: "Both home, safe", d: "We drop you and your vehicle at your door. We drive off. You sleep easy.", Icon: Car, img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80" },
          ].map((s) => (
            <article key={s.n} data-testid={`dd-step-${s.n}`} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden relative hover:border-emerald-400/30 transition-all">
              <div className="relative h-40 overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-full gold-foil flex items-center justify-center font-serif font-black text-sm shadow-lg">
                  {s.n}
                </div>
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl glass border border-emerald-400/30 flex items-center justify-center">
                  <s.Icon className="w-5 h-5 text-emerald-300" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-white/60">{s.d}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Pricing strip */}
        <div className="bg-gradient-to-br from-emerald-500/15 via-surface to-surface border border-emerald-400/30 rounded-3xl p-8 sm:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Cheaper than a DUI by $9,900+
            </div>
            <h3 className="font-serif text-3xl font-bold mb-3">Flat <span className="gold-gradient-text">$89</span> within Whistler · <span className="gold-gradient-text">$149</span> to Squamish · <span className="gold-gradient-text">$349</span> to Vancouver</h3>
            <p className="text-white/60 text-sm">Includes both drivers, both vehicles, all the way to your driveway. Tip optional. We don&apos;t judge — we&apos;ve all been there.</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-white/70">
              {[
                "✓ Available 24/7 — even 3 AM",
                "✓ Manual or automatic — we drive both",
                "✓ Truck, SUV, sports car — no problem",
                "✓ Roof racks with skis/bikes — fine",
                "✓ Pet in the car — bring them home too",
                "✓ Discreet · professional · zero judgment",
              ].map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={PHONE_TEL} data-testid="dd-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gold-foil font-semibold hover:scale-[1.02] transition-transform shadow-lg whitespace-nowrap"
            >
              <Phone className="w-4 h-4" /> Call Now · {PHONE}
            </a>
            <a
              href="#book" data-testid="dd-book"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 transition-colors whitespace-nowrap"
            >
              Book DD Online <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
