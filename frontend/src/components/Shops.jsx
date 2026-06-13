import React from "react";
import { Leaf, Tag, Clock } from "lucide-react";
import { SHOPS, PHONE_TEL } from "@/data";

export default function Shops() {
  return (
    <section id="shops" className="py-20 px-5" data-testid="shops-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3 max-w-md mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Local Shops · Daily Specials</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-center mb-3 tracking-tighter">
          Cannabis, vape & <span className="italic gold-gradient-text">daily deals.</span>
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-10">
          Whistler&apos;s legal dispensaries & vape lounges. ID required (19+). Tony shuttles available — never drive impaired.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOPS.map((s, i) => (
            <article key={s.name} data-testid={`shop-${i}`} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-400/30 transition-all flex flex-col">
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500/15 backdrop-blur text-[10px] uppercase tracking-wider text-emerald-300 border border-emerald-400/40 flex items-center gap-1">
                  <Leaf className="w-3 h-3" /> {s.tag}
                </span>
                <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[10px] text-white/80 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {s.hours}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold mb-2 leading-tight">{s.name}</h3>
                <p className="text-xs text-white/60 mb-3">{s.desc}</p>
                <div className="mt-auto bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border-l-2 border-emerald-400 rounded-r-md px-3 py-2 mb-3">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-emerald-300 font-bold mb-1 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Daily Specials
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">{s.daily}</p>
                </div>
                <a href={PHONE_TEL} data-testid={`shop-ride-${i}`} className="text-xs text-center px-3 py-2 rounded-lg gold-foil font-semibold hover:scale-[1.02] transition-transform">
                  Shuttle {s.shuttle} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
