import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/data";

const NAV = [
  { href: "#fifa", label: "FIFA 2026" },
  { href: "#book", label: "Book" },
  { href: "#activities", label: "Activities" },
  { href: "#dining", label: "Dining" },
  { href: "#nightlife", label: "Nightlife" },
  { href: "#loyalty", label: "Loyalty" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2" data-testid="brand-logo">
          <div className="w-9 h-9 rounded-lg gold-foil flex items-center justify-center font-serif text-lg font-black">T</div>
          <div className="leading-none">
            <div className="font-serif text-lg font-bold tracking-tight">Tony Taxi</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Whistler</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-${n.href.slice(1)}`}
              className="text-sm text-white/80 hover:text-gold transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            data-testid="header-call"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full gold-foil font-semibold text-sm hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            {PHONE}
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/10 mt-3" data-testid="mobile-menu">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/80 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a href={PHONE_TEL} className="mt-2 py-2 text-gold font-semibold">📞 {PHONE}</a>
          </div>
        </div>
      )}
    </header>
  );
}
