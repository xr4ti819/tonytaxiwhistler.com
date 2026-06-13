import React from "react";
import { Clock, MapPin, Phone, Wine, Truck, ExternalLink } from "lucide-react";
import { LIQUOR_STORES, PHONE_TEL } from "@/data";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const todayKey = () => {
  // JS getDay(): Sun=0..Sat=6
  const map = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return map[new Date().getDay()];
};

export default function LiquorStores() {
  const today = todayKey();
  return (
    <section id="liquor" className="py-20 px-5" data-testid="liquor-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3 max-w-md mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold flex items-center gap-1.5">
            <Wine className="w-3 h-3" /> Liquor · 19+
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-center mb-3 tracking-tighter">
          Whistler liquor stores · <span className="italic gold-gradient-text">all the hours.</span>
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-10">
          Every government + private liquor store in Whistler with full hours of operation. Buying for a chalet party? Tony Taxi
          shuttles your bottles home so nobody&apos;s driving. ID 19+ required.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LIQUOR_STORES.map((s, i) => (
            <article
              key={s.name}
              data-testid={`liquor-${i}`}
              className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-amber-400/30 transition-all flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500/15 backdrop-blur text-[10px] uppercase tracking-wider text-amber-200 border border-amber-400/40 flex items-center gap-1">
                  <Wine className="w-3 h-3" /> {s.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold mb-1 leading-tight">{s.name}</h3>
                <p className="text-xs text-white/55 mb-3 flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span>{s.address}</span>
                </p>
                <p className="text-xs text-white/65 mb-4 leading-relaxed">{s.desc}</p>

                {/* Hours grid */}
                <div className="rounded-xl border border-white/8 bg-[#0A0A0A]/60 p-3 mb-4">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-amber-200 mb-2 font-bold">
                    <Clock className="w-3 h-3" /> Hours of Operation
                  </div>
                  <ul className="space-y-1">
                    {DAYS.map((d) => (
                      <li
                        key={d}
                        className={`flex justify-between text-[11px] tabular-nums ${
                          d === today
                            ? "text-amber-300 font-semibold"
                            : "text-white/65"
                        }`}
                      >
                        <span className="w-9">
                          {d}
                          {d === today && <span className="text-amber-400/80"> · today</span>}
                        </span>
                        <span>{s.hours[d]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 mt-auto">
                  {s.phone && (
                    <a
                      href={`tel:${s.phone.replace(/\D/g, "")}`}
                      data-testid={`liquor-phone-${i}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:border-amber-400 hover:text-amber-300 text-xs font-medium transition-colors"
                    >
                      <Phone className="w-3 h-3" /> Store
                    </a>
                  )}
                  <a
                    href={PHONE_TEL}
                    data-testid={`liquor-shuttle-${i}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg gold-foil text-xs font-semibold hover:scale-[1.02] transition-transform"
                  >
                    <Truck className="w-3 h-3" /> Shuttle {s.shuttle}
                  </a>
                  {s.link && (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`liquor-link-${i}`}
                      aria-label={`${s.name} website`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 hover:border-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-emergency/10 border border-emergency/30 rounded-2xl p-6 text-center">
          <p className="text-sm text-white/80">
            🍷 Buying for a chalet party? <span className="text-amber-300 font-semibold">Don&apos;t drive after</span> — we&apos;ll pick you and the bottles up. <br className="hidden sm:block" />
            <a href={PHONE_TEL} className="text-gold font-bold underline ml-1">Call Tony for the booze run.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
