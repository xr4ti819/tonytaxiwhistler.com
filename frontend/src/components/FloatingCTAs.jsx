import React from "react";
import { Phone, MessageCircle, MessageSquare } from "lucide-react";
import { PHONE_TEL, PHONE_SMS, WHATSAPP } from "@/data";

export default function FloatingCTAs() {
  return (
    <div className="fixed right-4 bottom-4 z-[80] flex flex-col gap-3 items-end" data-testid="floating-ctas">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        data-testid="whatsapp-fab"
        aria-label="WhatsApp Tony Taxi"
        className="w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
      </a>
      <a
        href={PHONE_SMS}
        data-testid="sms-fab"
        aria-label="SMS Tony Taxi"
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-7 h-7" strokeWidth={2} />
      </a>
      <a
        href={PHONE_TEL}
        data-testid="call-fab"
        aria-label="Call Tony Taxi"
        className="fab-pulse w-16 h-16 rounded-full gold-foil flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <Phone className="w-8 h-8" strokeWidth={2.5} />
      </a>
    </div>
  );
}
