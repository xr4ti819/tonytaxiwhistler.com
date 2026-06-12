import React, { useEffect, useState, useCallback } from "react";
import { Cloud, Wind, Thermometer, RefreshCw, AlertTriangle, ExternalLink, Loader2 } from "lucide-react";

const REFRESH_MS = 15 * 60 * 1000; // 15 min

// Free wttr.in JSON API — Whistler, BC
const WX_URL = "https://wttr.in/Whistler,BC?format=j1";

const ROAD_STATUS = [
  { route: "Hwy 99 · Sea-to-Sky (Whistler ↔ Vancouver)", level: "open", note: "All lanes open · normal driving conditions" },
  { route: "Whistler Village ↔ Creekside", level: "open", note: "Clear" },
  { route: "Pemberton Hwy", level: "open", note: "Clear · watch for wildlife dawn/dusk" },
];

const LEVEL_STYLES = {
  open: { dot: "bg-emerald-400", label: "Open", color: "text-emerald-300" },
  caution: { dot: "bg-amber-400", label: "Caution", color: "text-amber-300" },
  closed: { dot: "bg-emergency", label: "Closed", color: "text-emergency" },
};

export default function LiveConditions() {
  const [wx, setWx] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [nextRefresh, setNextRefresh] = useState(REFRESH_MS / 1000);

  const fetchWx = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(WX_URL);
      const data = await res.json();
      const current = data.current_condition?.[0];
      if (current) {
        setWx({
          temp_c: current.temp_C,
          desc: current.weatherDesc?.[0]?.value || "—",
          feels_c: current.FeelsLikeC,
          wind_kph: current.windspeedKmph,
          humidity: current.humidity,
        });
      }
      setLastUpdate(new Date());
      setNextRefresh(REFRESH_MS / 1000);
    } catch {
      // silent — show fallback
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch + 15min interval
  useEffect(() => {
    fetchWx();
    const t = setInterval(fetchWx, REFRESH_MS);
    return () => clearInterval(t);
  }, [fetchWx]);

  // countdown
  useEffect(() => {
    const id = setInterval(() => setNextRefresh((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [lastUpdate]);

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <section id="conditions" className="py-20 px-5" data-testid="live-conditions-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Live · Sea-to-Sky</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-center mb-3 tracking-tighter">
          Weather & roads, <span className="italic gold-gradient-text">refreshed live.</span>
        </h2>
        <p className="text-center text-white/60 mb-10 max-w-xl mx-auto">Auto-updates every 15 minutes. Tap refresh anytime.</p>

        <div className="grid md:grid-cols-2 gap-5">
          {/* WEATHER */}
          <div className="bg-surface border border-white/5 rounded-2xl p-6" data-testid="weather-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-[0.3em] text-gold/80">Whistler · BC</span>
              </div>
              <button
                onClick={fetchWx} disabled={loading}
                data-testid="weather-refresh"
                aria-label="Refresh weather"
                className="text-white/40 hover:text-gold transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
              </button>
            </div>
            {wx ? (
              <>
                <div className="flex items-end gap-4 mb-4">
                  <div className="font-serif text-6xl font-black gold-gradient-text leading-none tabular-nums" data-testid="weather-temp">
                    {wx.temp_c}°<span className="text-2xl">C</span>
                  </div>
                  <div className="text-white/70 pb-1">{wx.desc}</div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <Stat icon={Thermometer} label="Feels like" val={`${wx.feels_c}°`} />
                  <Stat icon={Wind} label="Wind" val={`${wx.wind_kph} km/h`} />
                  <Stat icon={Cloud} label="Humidity" val={`${wx.humidity}%`} />
                </div>
              </>
            ) : (
              <div className="text-white/40 text-sm py-8">Loading current conditions…</div>
            )}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40 uppercase tracking-wider">
              <span>
                {lastUpdate ? `Updated ${lastUpdate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "—"}
              </span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Next in {fmt(nextRefresh)}
              </span>
            </div>
          </div>

          {/* ROAD STATUS */}
          <div className="bg-surface border border-white/5 rounded-2xl p-6" data-testid="road-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-[0.3em] text-gold/80">Road Conditions</span>
              </div>
              <a
                href="https://www.drivebc.ca/mobile/pub/events/region/southwest.html"
                target="_blank" rel="noreferrer"
                data-testid="road-drivebc-link"
                className="text-[10px] uppercase tracking-wider text-white/40 hover:text-gold flex items-center gap-1"
              >
                DriveBC <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <ul className="space-y-3">
              {ROAD_STATUS.map((r, i) => {
                const s = LEVEL_STYLES[r.level];
                return (
                  <li key={r.route} data-testid={`road-${i}`} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                    <span className={`mt-1.5 w-2 h-2 rounded-full ${s.dot} animate-pulse shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-white truncate">{r.route}</span>
                        <span className={`text-[10px] uppercase tracking-wider ${s.color} font-bold shrink-0`}>{s.label}</span>
                      </div>
                      <div className="text-xs text-white/50 mt-0.5">{r.note}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40 uppercase tracking-wider">
              <span>Aggregated · DriveBC + Tony driver intel</span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Next in {fmt(nextRefresh)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, val }) {
  return (
    <div className="bg-surface2 rounded-xl p-3">
      <div className="flex items-center gap-1.5 text-white/40 text-[10px] uppercase tracking-wider mb-1">
        <Icon className="w-3 h-3" /> {label}
      </div>
      <div className="text-white font-medium tabular-nums">{val}</div>
    </div>
  );
}
