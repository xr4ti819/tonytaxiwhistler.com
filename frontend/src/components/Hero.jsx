import React, { useEffect, useState } from "react";
import { Phone, ArrowRight, Star } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/data";

function getCountdown() {
  const target = new Date("2026-06-13T18:30:00-07:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

export default function Hero() {
  const [c, setC] = useState(getCountdown());

  useEffect(() => {
    const t = setInterval(() => setC(getCountdown()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden grain" data-testid="hero">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581411025298-98a9987d7ce7?w=1920&q=85"
          alt="Whistler mountain road"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pt-32 pb-14 lg:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6" data-testid="hero-badge">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/80">24/7 · Dispatching Now</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-6">
            Private rides through the<br />
            <span className="gold-gradient-text italic font-medium">Sea to Sky.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed">
            Airport transfers, FIFA 2026 BC Place runs, alpine trailheads, and safe rides home from the village.
            15 years driving Whistler — every shortcut, every storm, every time.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href={PHONE_TEL}
              data-testid="hero-call-btn"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-full gold-foil font-semibold text-base hover:scale-[1.03] transition-transform shadow-2xl"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Call {PHONE}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#book"
              data-testid="hero-book-btn"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Book Online
            </a>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <span>4.9 · 50,000+ rides</span>
            </div>
          </div>

          {/* FIFA Countdown */}
          <div className="glass rounded-2xl p-5 sm:p-6 max-w-2xl relative overflow-hidden" data-testid="fifa-countdown">
            <div className="shimmer absolute inset-0" />
            <div className="relative flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-fifa font-semibold mb-1">FIFA World Cup 2026</div>
                <div className="font-serif text-xl font-bold">Kickoff at BC Place</div>
                <div className="text-xs text-white/60 mt-1">Vancouver · Pre-book your match-day ride</div>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { v: c.d, l: "DAYS" },
                  { v: c.h, l: "HRS" },
                  { v: c.m, l: "MIN" },
                  { v: c.s, l: "SEC" },
                ].map((x, i) => (
                  <div key={i} className="text-center">
                    <div className="font-serif text-2xl sm:text-3xl font-black gold-gradient-text tabular-nums" data-testid={`countdown-${x.l.toLowerCase()}`}>
                      {String(x.v).padStart(2, "0")}
                    </div>
                    <div className="text-[9px] tracking-widest text-white/50">{x.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
