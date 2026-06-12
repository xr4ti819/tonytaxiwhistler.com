import React from "react";
import { ExternalLink, MapPin, Heart } from "lucide-react";
import { COMMUNITY_SERVICES, PHONE_TEL } from "@/data";

export default function CommunityRec() {
  return (
    <section id="community" className="py-20 px-5" data-testid="community-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3 max-w-md mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Community & Recreation</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-center mb-3 tracking-tighter">
          We support our <span className="italic gold-gradient-text">neighbours.</span>
        </h2>
        <p className="text-center text-white/60 max-w-2xl mx-auto mb-10">
          Tony Taxi proudly partners with local rec & community services. <span className="text-gold">Free rides for WCSS clients accessing critical services.</span>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMUNITY_SERVICES.map((c, i) => (
            <article key={c.name} data-testid={`community-${i}`} className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all flex flex-col">
              <div className="relative h-40 overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider text-gold border border-gold/30 flex items-center gap-1">
                  {c.tag === "Community Support" && <Heart className="w-3 h-3" />}
                  {c.tag}
                </span>
                <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[10px] text-white/80">{c.shuttle}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold mb-2 leading-tight">{c.name}</h3>
                <p className="text-sm text-white/60 mb-3 flex-1">{c.desc}</p>
                <div className="flex items-center text-xs text-white/50 mb-3">
                  <MapPin className="w-3 h-3 mr-1 text-gold/60 shrink-0" />
                  <span className="truncate">{c.address}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={c.link} target={c.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    data-testid={`community-link-${i}`}
                    className="flex-1 text-xs text-center px-3 py-2 rounded-lg border border-white/10 hover:border-gold hover:text-gold transition-colors flex items-center justify-center gap-1"
                  >
                    Visit {c.link.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                  </a>
                  <a
                    href={PHONE_TEL}
                    data-testid={`community-ride-${i}`}
                    className="flex-1 text-xs text-center px-3 py-2 rounded-lg gold-foil font-semibold hover:scale-[1.02] transition-transform"
                  >
                    Book Ride
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
