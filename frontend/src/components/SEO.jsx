import React, { useEffect } from "react";

/**
 * SEO — Per-page <head> manager.
 * Imperatively sets <title>, <meta>, <link rel=canonical>, and <script type=application/ld+json>
 * so each route page gets unique, indexable metadata.
 */
const MANAGED_FLAG = "data-seo-managed";

function setMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.tag || "meta");
    Object.entries(attrs.attrs).forEach(([k, v]) => v != null && el.setAttribute(k, v));
    el.setAttribute(MANAGED_FLAG, "true");
    document.head.appendChild(el);
  } else {
    Object.entries(attrs.attrs).forEach(([k, v]) => v != null && el.setAttribute(k, v));
  }
  return el;
}

export default function SEO({
  title,
  description,
  canonical,
  image = "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=1200&h=630&fit=crop&q=80",
  keywords,
  type = "website",
  jsonLd,
  noindex = false,
}) {
  useEffect(() => {
    if (title) document.title = title;
    const robots = noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1";
    const url =
      canonical || (typeof window !== "undefined" ? window.location.href : "");

    // ---- Standard meta ----
    setMeta('meta[name="description"]', { attrs: { name: "description", content: description } });
    setMeta('meta[name="robots"]', { attrs: { name: "robots", content: robots } });
    setMeta('meta[name="googlebot"]', { attrs: { name: "googlebot", content: robots } });
    setMeta('meta[name="bingbot"]', { attrs: { name: "bingbot", content: robots } });
    if (keywords) {
      setMeta('meta[name="keywords"]', { attrs: { name: "keywords", content: keywords } });
    }

    // ---- Canonical ----
    let canonicalEl = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", url);

    // ---- Open Graph ----
    setMeta('meta[property="og:type"]', { attrs: { property: "og:type", content: type } });
    setMeta('meta[property="og:title"]', { attrs: { property: "og:title", content: title } });
    setMeta('meta[property="og:description"]', { attrs: { property: "og:description", content: description } });
    setMeta('meta[property="og:url"]', { attrs: { property: "og:url", content: url } });
    setMeta('meta[property="og:image"]', { attrs: { property: "og:image", content: image } });

    // ---- Twitter ----
    setMeta('meta[name="twitter:card"]', { attrs: { name: "twitter:card", content: "summary_large_image" } });
    setMeta('meta[name="twitter:title"]', { attrs: { name: "twitter:title", content: title } });
    setMeta('meta[name="twitter:description"]', { attrs: { name: "twitter:description", content: description } });
    setMeta('meta[name="twitter:image"]', { attrs: { name: "twitter:image", content: image } });

    // ---- JSON-LD (route-specific) ----
    const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    // Remove any previously-injected route-specific JSON-LD
    document.head
      .querySelectorAll(`script[type="application/ld+json"][${MANAGED_FLAG}]`)
      .forEach((s) => s.remove());
    ldArray.forEach((ld) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute(MANAGED_FLAG, "true");
      s.textContent = JSON.stringify(ld);
      document.head.appendChild(s);
    });
  }, [title, description, canonical, image, keywords, type, jsonLd, noindex]);

  return null;
}
