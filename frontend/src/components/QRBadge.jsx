import React, { useState } from "react";
import { QrCode, X } from "lucide-react";

export default function QRBadge() {
  const [open, setOpen] = useState(false);
  const url = "https://tonytaxiwhistler.com/";
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&bgcolor=0A0A0A&color=D4AF37&margin=12&data=${encodeURIComponent(url)}`;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        data-testid="qr-badge-toggle"
        aria-label="Show QR Code"
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:border-gold/40 text-sm text-white/70 hover:text-gold transition-colors"
      >
        <QrCode className="w-4 h-4" strokeWidth={1.8} />
        <span className="hidden sm:inline">Scan</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-5 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setOpen(false)}
          data-testid="qr-modal"
        >
          <div
            className="bg-surface border border-gold/30 rounded-3xl p-8 max-w-sm w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              data-testid="qr-modal-close"
              className="absolute top-3 right-3 w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Save for later</div>
            <h3 className="font-serif text-2xl font-black mb-4">
              Scan it. <span className="italic gold-gradient-text">Save it.</span>
            </h3>
            <div className="bg-[#0A0A0A] border border-gold/30 rounded-2xl p-3 inline-block mb-4">
              <img src={qrSrc} alt="Tony Taxi QR" width="240" height="240" className="w-60 h-60" data-testid="qr-modal-image" />
            </div>
            <p className="text-sm text-white/60 mb-2">Snap with your phone camera</p>
            <a href={url} target="_blank" rel="noreferrer" className="text-gold text-sm font-mono hover:underline">
              tonytaxiwhistler.com →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
