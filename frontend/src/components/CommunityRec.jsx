import React from "react";
import { ExternalLink, MapPin, Heart } from "lucide-react";
import { COMMUNITY_SERVICES, PHONE_TEL } from "@/data";

export default function CommunityRec() {
  return (
    <section id="community" className="py-20 px-5" data-testid="community-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
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

        <div className="grid sm:grid-cols-2 gap-5">
          {COMMUNITY_SERVICES.map((c, i) => (
            <div key={c.name} data-testid={`community-${i}`} className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-gold/30 transition-colors flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-wider text-gold flex items-center gap-1">
                  {c.tag === "Community Support" && <Heart className="w-3 h-3" />}
                  {c.tag}
                </span>
                <span className="text-xs text-white/40">{c.shuttle}</span>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{c.name}</h3>
              <p className="text-sm text-white/60 mb-3 flex-1">{c.desc}</p>
              <div className="flex items-center text-xs text-white/50 mb-3">
                <MapPin className="w-3 h-3 mr-1 text-gold/60" />
                {c.address}
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
          ))}
        </div>
      </div>
    </section>
  );
}
