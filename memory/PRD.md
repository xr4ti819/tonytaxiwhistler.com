# Tony Taxi Whistler — Product Requirements

## Original Problem Statement
User provided a comprehensive HTML template for "Tony Taxi Whistler" (tourism + taxi landing page) and asked for it to be upgraded to a production-ready, revenue-generating PWA with:

- **Phase 1**: Business Essentials — online booking, instant fare calculator, WhatsApp/SMS booking, payments
- **Phase 2**: Dynamic Features — live weather, road conditions, bear activity, event calendar
- **Phase 3**: SEO Domination — dedicated landing pages for major routes (Top-3 ranking on Google, Naver, Bing/Edge, Baidu, Yandex)
- **Phase 4**: Mobile-app architecture — PWA, push notifications, loyalty rewards

Additional asks layered in: AI Concierge, FIFA 2026 match countdowns + music widget, Designated Driver service ("ddride"), Hypnotic NLP airport copy, Canvas-Confetti, rotating Daily Bread Bible verses, 15-min auto-refresh, full SEO domination across all major search engines.

## Architecture
- React 19 + TailwindCSS + Shadcn UI (SPA via react-router-dom v7)
- FastAPI + MongoDB (Motor async client)
- Emergent LLM Key → Anthropic Claude (AI concierge)
- All API endpoints prefixed with `/api`

## Implemented (Feb 2026)
- ✅ Instant Fare Calculator with multi-service pricing engine — corrected location aliases (Fairmont/Pan Pacific/Four Seasons/Creekside/Blackcomb all → "whistler"), Vancouver Downtown alias, FIFA premium gated to BC Place routes only, DD service $89 minimum, "Apply to Booking" handoff button, human-readable drive-time format
- ✅ Booking Engine (`POST /api/bookings`) with prefill via custom event from FareCalculator
- ✅ AI Concierge (Claude Sonnet 4.6 via Emergent LLM Key)
- ✅ PWA Manifest with app shortcuts (Call, Quote, Book, FIFA)
- ✅ FIFA 2026 section with match countdowns, music widget, upgraded Robson Square FIFA Fan Zone card with overlay pricing
- ✅ Daily Bread rotating Bible verses (15-min cycle)
- ✅ Live weather (wttr.in) + DriveBC road conditions
- ✅ Designated Driver service module
- ✅ Hypnotic NLP airport copy block
- ✅ Activities, Lakes & Rivers, Trails, Dining, Nightlife (now incl. Roxy's), Community, Cannabis/Vape shops — all with verified Unsplash imagery
- ✅ Zipline image corrected (real zipline action photo via Unsplash)
- ✅ NEW: Liquor Stores section with 6 stores × full weekly hours (BC Liquor, 21 Steps, Whistler Village Liquor, Nesters, Creekside, Husky/Function Junction) — today auto-highlighted, store phone + Tony shuttle CTA
- ✅ 15-minute auto-refresh (idle-aware)
- ✅ PWA Install Banner for Android/iOS

### SEO Domination (Feb 2026)
- ✅ Comprehensive index.html: title, description, keywords, OG, Twitter, Dublin Core
- ✅ Multi-search-engine verification meta placeholders (Google, Bing, Yandex, Naver, Baidu, Pinterest)
- ✅ Bot-specific directives (Googlebot, Bingbot, Yeti/NaverBot, Baiduspider, YandexBot, DuckDuckBot, AI bots)
- ✅ 6 JSON-LD blocks: LocalBusiness/TaxiService (with reviews + offers), Organization, WebSite+SearchAction, FAQPage, BreadcrumbList
- ✅ hreflang for en, en-CA, en-US, ko, zh-CN, ja, fr, es, pt-BR, x-default
- ✅ robots.txt with explicit allow-lists for Google, Bing, Naver, Baidu, Yandex, Sogou, 360Spider, SeznamBot, Applebot, GPTBot, ClaudeBot, PerplexityBot
- ✅ sitemap.xml with image extensions and hreflang alternates
- ✅ 6 SEO landing pages with unique meta + Service/TripPlan/FAQ/BreadcrumbList JSON-LD:
  - `/yvr-airport-taxi-whistler`
  - `/vancouver-to-whistler-taxi`
  - `/bc-place-fifa-2026`
  - `/squamish-to-whistler-taxi`
  - `/pemberton-taxi`
  - `/whistler-designated-driver`
- ✅ Footer internal-link block to all SEO pages
- ✅ `<noscript>` fallback with full NAP info, services, and pricing for non-JS crawlers (Baidu/Naver)
- ✅ Imperative SEO.jsx component using direct DOM head manipulation (works around React 19's meta dedup)

## Routes
- `/` — Home (full landing page)
- `/:slug` — SEO landing pages (resolved via ROUTES table; fallback redirects to `/`)

## Key Backend API
- `POST /api/fare-estimate` — flat-rate matrix + surcharges; verified accuracy across 8 scenarios
- `POST /api/bookings` — creates booking; auto-computes estimate
- `GET /api/bookings` — admin list
- `GET /api/loyalty/{phone}` — loyalty stamps (airport rides count double)
- `GET /api/testimonials` — static testimonials
- `POST /api/concierge/chat` — AI concierge

## Deployment Readiness — Feb 2026
- ✅ `deployment_agent` static analysis: PASS
- ✅ No hardcoded URLs/secrets
- ✅ All env vars (MONGO_URL, DB_NAME, EMERGENT_LLM_KEY, CORS_ORIGINS, REACT_APP_BACKEND_URL) flow through .env only
- ✅ CORS wildcard ok
- ✅ All API routes `/api`-prefixed
- ✅ Supervisor config valid (backend 8001, frontend 3000)
- Ready to deploy to tonytaxiwhistler.com via Emergent → Deploy

## Backlog
- P1: Add Korean / Mandarin / French translations for top-3 SEO landing pages (improves Naver + Baidu rank)
- P1: Submit sitemap to Google Search Console, Bing Webmaster Tools, Naver Search Advisor, Baidu Webmaster Tools (post-deploy)
- P2: Live FIFA scores ticker (needs paid API)
- P2: Whistler live-cam embed (CORS-blocked from official sources)
- P2: Animated SVG route map for hero
- P2: Stripe Checkout integration (test key already in pod env)
- P2: Service Worker for offline PWA fallback
