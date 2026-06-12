import React, { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, X } from "lucide-react";

const TRACKS = [
  { title: "Anthem · Sea to Sky", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "Match Day Pulse", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { title: "Whistler Drive", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
];

export default function MusicWidget() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const audioRef = useRef(null);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      try { await el.play(); setPlaying(true); } catch { /* autoplay block */ }
    }
  };

  const next = () => {
    setTrackIdx((i) => (i + 1) % TRACKS.length);
    setPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current && playing) {
      audioRef.current.play().catch(() => setPlaying(false));
    }
  }, [trackIdx, playing]);

  return (
    <div
      data-testid="music-widget"
      className="hidden lg:block fixed bottom-32 right-4 z-[60]"
    >
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          data-testid="music-toggle"
          aria-label="Open FIFA music"
          className="w-11 h-11 rounded-full glass border border-fifa/40 flex items-center justify-center hover:border-fifa hover:scale-110 transition-all group"
        >
          <Music className="w-4 h-4 text-fifa group-hover:animate-pulse" strokeWidth={1.8} />
        </button>
      ) : (
        <div className="glass border border-fifa/30 rounded-2xl p-3 w-64 shadow-2xl" data-testid="music-panel">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fifa animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-fifa font-bold">FIFA 2026 · CA · MX · US</span>
            </div>
            <button
              onClick={() => { setOpen(false); audioRef.current?.pause(); setPlaying(false); }}
              data-testid="music-close"
              className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-white/50"
              aria-label="Close player"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-xs text-white font-medium mb-3 truncate flex items-center gap-2" title={TRACKS[trackIdx].title}>
            <span className="inline-flex gap-0.5 items-end h-3">
              <span className={`w-0.5 bg-fifa rounded-sm ${playing ? "animate-pulse" : ""}`} style={{ height: "30%" }} />
              <span className={`w-0.5 bg-fifa rounded-sm ${playing ? "animate-pulse" : ""}`} style={{ height: "60%", animationDelay: "0.15s" }} />
              <span className={`w-0.5 bg-fifa rounded-sm ${playing ? "animate-pulse" : ""}`} style={{ height: "100%", animationDelay: "0.3s" }} />
              <span className={`w-0.5 bg-fifa rounded-sm ${playing ? "animate-pulse" : ""}`} style={{ height: "60%", animationDelay: "0.45s" }} />
              <span className={`w-0.5 bg-fifa rounded-sm ${playing ? "animate-pulse" : ""}`} style={{ height: "30%", animationDelay: "0.6s" }} />
            </span>
            {TRACKS[trackIdx].title}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              data-testid="music-play"
              className="w-10 h-10 rounded-full bg-fifa text-black flex items-center justify-center hover:scale-105 transition-transform"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={next}
              data-testid="music-next"
              className="text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg border border-white/10 hover:border-fifa/40 text-white/70 hover:text-fifa transition-colors"
            >
              Next
            </button>
            <div className="ml-auto text-[10px] text-white/40 tabular-nums">
              {trackIdx + 1}/{TRACKS.length}
            </div>
          </div>
          <audio
            ref={audioRef}
            src={TRACKS[trackIdx].src}
            onEnded={next}
            preload="none"
          />
        </div>
      )}
    </div>
  );
}
