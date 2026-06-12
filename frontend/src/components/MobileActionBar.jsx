import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { PHONE_TEL, WHATSAPP } from "@/data";

export default function MobileActionBar() {
  return (
    <div
      data-testid="mobile-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[75] glass border-t border-white/10 px-3 py-2 grid grid-cols-3 gap-2 max-w-full overflow-hidden"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <a
        href={WHATSAPP} target="_blank" rel="noreferrer"
        data-testid="mab-whatsapp"
        className="flex flex-col items-center gap-0.5 py-2 rounded-xl bg-whatsapp/15 border border-whatsapp/40 text-whatsapp text-[10px] uppercase tracking-wider font-semibold"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={2} />
        Text
      </a>
      <a
        href="#book"
        data-testid="mab-book"
        className="flex flex-col items-center gap-0.5 py-2 rounded-xl border border-white/15 text-white text-[10px] uppercase tracking-wider font-semibold hover:border-gold"
      >
        <Calendar className="w-5 h-5" strokeWidth={2} />
        Book
      </a>
      <a
        href={PHONE_TEL}
        data-testid="mab-call"
        className="flex flex-col items-center gap-0.5 py-2 rounded-xl gold-foil text-[10px] uppercase tracking-wider font-bold"
      >
        <Phone className="w-5 h-5" strokeWidth={2.5} />
        Call
      </a>
    </div>
  );
}
