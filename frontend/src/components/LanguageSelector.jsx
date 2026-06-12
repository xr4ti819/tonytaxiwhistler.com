import React, { useState } from "react";
import { Globe } from "lucide-react";

const LANGS = [
  { code: "en", name: "English", native: "English" },
  { code: "zh-CN", name: "Chinese", native: "中文" },
  { code: "fr", name: "French", native: "Français" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "ja", name: "Japanese", native: "日本語" },
  { code: "de", name: "German", native: "Deutsch" },
  { code: "ko", name: "Korean", native: "한국어" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "it", name: "Italian", native: "Italiano" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);

  const translate = (code) => {
    if (code === "en") {
      // Reset
      window.location.href = window.location.pathname + window.location.search;
      return;
    }
    const host = window.location.hostname;
    const url = `https://translate.google.com/translate?sl=en&tl=${code}&u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <div className="relative" data-testid="language-selector">
      <button
        onClick={() => setOpen(!open)}
        data-testid="lang-toggle"
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:border-gold/40 text-sm text-white/70 hover:text-gold transition-colors"
        aria-label="Translate"
      >
        <Globe className="w-4 h-4" strokeWidth={1.8} />
        <span className="hidden sm:inline">Translate</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-56 glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto" data-testid="lang-menu">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => translate(l.code)}
                data-testid={`lang-${l.code}`}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-gold/10 hover:text-gold transition-colors flex justify-between items-center"
              >
                <span>{l.native}</span>
                <span className="text-xs text-white/40">{l.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
