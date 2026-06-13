import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Check, MapPin, Clock, Star, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { Footer } from "@/components/Sections";
import SEO from "@/components/SEO";
import FloatingCTAs from "@/components/FloatingCTAs";
import MobileActionBar from "@/components/MobileActionBar";
import { PHONE, PHONE_TEL, WHATSAPP } from "@/data";

/**
 * RoutePage — Reusable SEO landing page template for high-intent local search.
 * Each instance is a self-contained, indexable page with route-specific copy,
 * pricing, schema.org Trip + Service + FAQ JSON-LD, and CTAs.
 */
export default function RoutePage({
  slug,
  h1,
  title,
  description,
  keywords,
  heroImage,
  pickup,
  dropoff,
  flatRate,
  durationMin,
  distanceKm,
  bullets = [],
  faqs = [],
  serviceType = "Taxi Service",
  intro,
}) {
  const url = `https://tonytaxiwhistler.com/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: h1,
      serviceType,
      provider: { "@id": "https://tonytaxiwhistler.com/#business" },
      areaServed: [
        { "@type": "City", name: pickup },
        { "@type": "City", name: dropoff },
      ],
      description,
      offers: {
        "@type": "Offer",
        price: String(flatRate),
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        url,
      },
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "TripPlan",
      name: `${pickup} to ${dropoff}`,
      description,
      provider: { "@type": "Organization", name: "Tony Taxi Whistler" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tonytaxiwhistler.com/" },
        { "@type": "ListItem", position: 2, name: h1, item: url },
      ],
    },
    ...(faqs.length
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }]
      : []),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={url}
        image={heroImage}
        type="service"
        jsonLd={jsonLd}
      />
      <Header />

      {/* HERO */}
      <section className="relative pt-12 pb-16 px-5 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.4), rgba(10,10,10,0.95)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-4">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-gold">{h1}</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 mb-5">
            <Star className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">4.9 · 847 Reviews · 24/7</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-5">
            {h1}
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mb-7 leading-relaxed">{intro}</p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3 max-w-2xl mb-8">
            <Stat label="Flat Rate" value={`$${flatRate}`} accent />
            <Stat label="Distance" value={`${distanceKm} km`} />
            <Stat label="Drive Time" value={`${Math.floor(durationMin / 60)}h ${durationMin % 60}m`} />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={PHONE_TEL}
              data-testid={`route-call-${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gold-foil font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-gold/20"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} /> Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`route-whatsapp-${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/10 font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <Link
              to="/#book"
              data-testid={`route-book-${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 hover:border-gold hover:text-gold font-medium transition-colors"
            >
              Book online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BULLETS */}
      <section className="py-14 px-5 border-t border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tighter mb-8">
            Why riders choose Tony Taxi for the{" "}
            <span className="italic gold-gradient-text">{pickup} → {dropoff}</span> run
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-2xl border border-white/8 bg-surface2">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{b.title}</div>
                  <p className="text-sm text-white/65 mt-1 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-14 px-5 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">FAQ</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tighter text-center mb-8">
              {pickup} → {dropoff} · Questions answered
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-white/8 bg-surface2 p-5 open:border-gold/30"
                  data-testid={`route-faq-${i}`}
                >
                  <summary className="cursor-pointer list-none flex justify-between items-center gap-4">
                    <span className="font-semibold text-white">{f.q}</span>
                    <ArrowRight className="w-4 h-4 text-gold transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-white/70 mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTERNAL LINKS — boost SEO */}
      <section className="py-14 px-5 border-t border-white/5 bg-surface/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tighter mb-6 text-center">
            Other popular Tony Taxi routes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {OTHER_ROUTES.filter((r) => r.slug !== slug).map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
                className="group p-4 rounded-2xl border border-white/8 bg-surface2 hover:border-gold/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold/80 mb-1">
                  <MapPin className="w-3 h-3" /> Route
                </div>
                <div className="font-semibold text-white group-hover:text-gold transition-colors">{r.label}</div>
                <div className="text-sm text-white/55 mt-1">from ${r.price} CAD</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-6 h-6 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tighter mb-4">
            Ready when you are. <span className="italic gold-gradient-text">24/7.</span>
          </h2>
          <p className="text-white/65 mb-7">
            Lock in your {pickup} → {dropoff} ride now. Flat rate. No surge. <Clock className="inline w-4 h-4 text-gold" /> Average pickup: 15 min.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl gold-foil font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-gold/30"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} /> Call {PHONE}
            </a>
            <Link
              to="/#book"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gold text-gold hover:bg-gold hover:text-black font-bold transition-colors"
            >
              Book online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTAs />
      <MobileActionBar />
    </div>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className={`p-3 rounded-xl border ${accent ? "border-gold/40 bg-gold/5" : "border-white/10 bg-surface2"}`}>
      <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
      <div className={`font-serif text-2xl font-black tabular-nums ${accent ? "gold-gradient-text" : "text-white"}`}>{value}</div>
    </div>
  );
}

const OTHER_ROUTES = [
  { slug: "yvr-airport-taxi-whistler", label: "YVR Airport ↔ Whistler", price: 299 },
  { slug: "vancouver-to-whistler-taxi", label: "Vancouver ↔ Whistler", price: 279 },
  { slug: "bc-place-fifa-2026", label: "BC Place · FIFA 2026", price: 349 },
  { slug: "squamish-to-whistler-taxi", label: "Squamish ↔ Whistler", price: 149 },
  { slug: "pemberton-taxi", label: "Pemberton ↔ Whistler", price: 99 },
  { slug: "whistler-designated-driver", label: "Designated Driver", price: 89 },
];
