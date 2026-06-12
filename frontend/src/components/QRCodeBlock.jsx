import React from "react";
import { QrCode } from "lucide-react";

export default function QRCodeBlock() {
  const url = "https://tonytaxiwhistler.com/";
  // Lightweight QR via api (free, no key)
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&bgcolor=0A0A0A&color=D4AF37&margin=10&data=${encodeURIComponent(url)}`;

  return (
    <section className="py-20 px-5" data-testid="qr-section">
      <div className="max-w-3xl mx-auto bg-surface border border-white/5 rounded-3xl p-8 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-8 items-center">
        <div className="bg-[#0A0A0A] border border-gold/30 rounded-2xl p-4 mx-auto">
          <img
            src={qrSrc}
            alt="Tony Taxi Whistler QR Code"
            width="200" height="200"
            className="w-[200px] h-[200px]"
            data-testid="qr-image"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-3">
            <QrCode className="w-4 h-4" /> Save for later
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tighter mb-3">
            Scan it. <span className="italic gold-gradient-text">Save it.</span>
          </h2>
          <p className="text-white/60 mb-4">
            Snap this code with your phone camera. Bookmark Tony Taxi for the next time you need a ride from the village, the airport, or the trailhead.
          </p>
          <a href="https://tonytaxiwhistler.com" target="_blank" rel="noreferrer" className="text-gold text-sm font-mono hover:underline" data-testid="qr-link">
            tonytaxiwhistler.com →
          </a>
        </div>
      </div>
    </section>
  );
}
