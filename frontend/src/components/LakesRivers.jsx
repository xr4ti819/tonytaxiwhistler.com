import React from "react";
import { Droplets, MapPin } from "lucide-react";
import { LAKES_RIVERS, PHONE_TEL } from "@/data";

export default function LakesRivers() {
  return (
    <section id="lakes" className="py-20 px-5" data-testid="lakes-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3 max-w-md mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Lakes · Rivers · Falls</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-center mb-3 tracking-tighter">
          Glacier water, <span className="italic gold-gradient-text">delivered.</span>
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-10">
          Eight blue-green lakes, two rivers, one waterfall. Tony Taxi shuttles you to every shoreline — bring the SUP, we&apos;ll fit it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LAKES_RIVERS.map((l, i) => (
            <article
              key={l.name} data-testid={`lake-${i}`}
              className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 hover:-translate-y-1 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={l.img} alt={l.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider text-gold border border-gold/30 flex items-center gap-1">
                  <Droplets className="w-3 h-3" /> {l.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold mb-2 leading-tight">{l.name}</h3>
                <p className="text-xs text-white/60 mb-3 line-clamp-2">{l.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/40 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {l.access}
                  </span>
                  <a href={PHONE_TEL} data-testid={`lake-shuttle-${i}`} className="text-xs text-gold hover:underline font-medium">
                    Shuttle {l.shuttle} →
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
