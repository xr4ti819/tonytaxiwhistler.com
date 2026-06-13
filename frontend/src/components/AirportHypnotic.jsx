import React from "react";
import { Plane, Phone, Sparkles, ArrowRight } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/data";

// NLP / hypnotic copy: presuppositions, embedded commands, sensory pacing, future-pacing,
// social proof, double-binds. Designed to drive bookings + gratuity.

export default function AirportHypnotic() {
  return (
    <section id="airport" className="py-20 px-5 relative overflow-hidden" data-testid="airport-section">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
          alt="Plane wing over clouds"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3 max-w-md mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold flex items-center gap-1.5">
            <Plane className="w-3 h-3" /> Airport · YVR ↔ Whistler
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-4 tracking-tighter leading-[0.95]">
          Imagine stepping off the plane,<br />
          <span className="italic gold-gradient-text">and breathing easy.</span>
        </h2>

        <p className="text-center text-white/70 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
          Picture it now — you walk into Arrivals, and there&apos;s a driver holding a sign with your name on it.
          Your bags lift away from your hands. The door closes with that satisfying click. And as the Sea-to-Sky
          unfolds outside your window, you can already feel yourself <em className="text-gold not-italic font-semibold">arriving relaxed</em>,
          not exhausted. <span className="text-white">That&apos;s the difference Tony Taxi makes.</span>
        </p>

        {/* Hypnotic bullets — embedded commands */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
          {[
            { k: "Notice", t: "how every flight is tracked in real-time — so when your plane lands, your driver is already there." },
            { k: "Feel", t: "the moment your bags float into the trunk and your shoulders finally drop." },
            { k: "Picture", t: "yourself at the hotel in 90 quiet minutes — fresh, smiling, and ready for Whistler." },
            { k: "Remember", t: "you only travel like this once a trip. The smartest travellers book Tony before they fly." },
          ].map((b, i) => (
            <div key={b.k} className="bg-surface/80 border border-gold/15 rounded-2xl p-5 backdrop-blur" data-testid={`airport-bullet-${i}`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {b.k}…
              </div>
              <p className="text-sm text-white/85 leading-relaxed">{b.t}</p>
            </div>
          ))}
        </div>

        {/* Social proof gratuity nudge */}
        <div className="bg-gradient-to-br from-gold/15 via-surface to-surface border-2 border-gold/40 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl shadow-gold/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gold-foil text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
            ⭐ 4.9 from 50,000+ travellers
          </div>
          <p className="font-serif text-2xl sm:text-3xl font-bold mb-3 leading-tight">
            &ldquo;The service was so smooth, my whole family agreed —{" "}
            <span className="italic gold-gradient-text">this is the only way to arrive in Whistler.</span>&rdquo;
          </p>
          <p className="text-xs text-white/50 uppercase tracking-widest mb-6">— Sarah M., Toronto · regular rider</p>

          <p className="text-white/70 max-w-xl mx-auto mb-6 leading-relaxed">
            Most riders find themselves <em className="text-gold not-italic">tipping 18–25%</em> on airport runs —
            because the service genuinely moves them. You&apos;ll know exactly what feels right when you arrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_TEL} data-testid="airport-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gold-foil font-semibold hover:scale-[1.02] transition-transform shadow-lg"
              onClick={() => navigator.vibrate && navigator.vibrate(40)}
            >
              <Phone className="w-4 h-4" /> Lock In Your Pickup · {PHONE}
            </a>
            <a
              href="#book" data-testid="airport-book"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-gold/50 text-gold hover:bg-gold/10 transition-colors"
            >
              Book Online <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-5 text-[11px] text-white/40 uppercase tracking-widest">
            Confirmation in under 15 minutes · Flat rate · No surge · No surprise
          </p>
        </div>
      </div>
    </section>
  );
}
