import React, { useEffect, useState } from "react";
import { BookOpen, X } from "lucide-react";

const VERSES = [
  { ref: "Proverbs 3:5–6", text: "Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths." },
  { ref: "Philippians 4:13", text: "I can do all things through Christ who strengthens me." },
  { ref: "Isaiah 40:31", text: "Those who wait on the Lord shall renew their strength; they shall mount up with wings like eagles." },
  { ref: "Psalm 23:1", text: "The Lord is my shepherd; I shall not want." },
  { ref: "Joshua 1:9", text: "Be strong and courageous. Do not be afraid; the Lord your God will be with you wherever you go." },
  { ref: "Romans 8:28", text: "And we know that all things work together for good to those who love God." },
  { ref: "Matthew 11:28", text: "Come to Me, all you who labor and are heavy laden, and I will give you rest." },
  { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, plans to prosper you, plans for a hope and a future." },
  { ref: "Psalm 46:10", text: "Be still, and know that I am God." },
  { ref: "John 14:27", text: "Peace I leave with you, My peace I give to you. Let not your heart be troubled." },
  { ref: "Proverbs 16:3", text: "Commit to the Lord whatever you do, and He will establish your plans." },
  { ref: "Psalm 121:1–2", text: "I will lift up my eyes to the mountains — where does my help come from? My help comes from the Lord." },
  { ref: "2 Corinthians 5:7", text: "For we walk by faith, not by sight." },
  { ref: "Galatians 6:9", text: "Let us not grow weary in doing good, for in due season we shall reap if we do not lose heart." },
  { ref: "Ecclesiastes 3:1", text: "To everything there is a season, and a time for every purpose under heaven." },
];

const ROTATE_MS = 15 * 60 * 1000; // 15 minutes

export default function DailyBread() {
  const [dismissed, setDismissed] = useState(() => {
    try { return sessionStorage.getItem("dailyBreadDismissed") === "1"; } catch { return false; }
  });
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * VERSES.length));
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % VERSES.length);
        setFading(false);
      }, 600);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [dismissed]);

  if (dismissed) return null;

  const close = () => {
    try { sessionStorage.setItem("dailyBreadDismissed", "1"); } catch { /* noop */ }
    setDismissed(true);
  };

  const v = VERSES[idx];

  return (
    <div
      data-testid="daily-bread-banner"
      className="w-full bg-gradient-to-r from-gold/15 via-gold/5 to-gold/15 border-b border-gold/20 relative z-[71]"
    >
      <div className={`max-w-7xl mx-auto px-5 py-2.5 flex items-center gap-3 transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}>
        <div className="hidden sm:flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-gold font-bold shrink-0">
          <BookOpen className="w-3 h-3" /> Daily Bread
        </div>
        <BookOpen className="sm:hidden w-3.5 h-3.5 text-gold shrink-0" />
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-x-3">
          <p className="font-serif text-xs sm:text-sm italic text-white/90 truncate sm:truncate-none leading-snug">
            &ldquo;{v.text}&rdquo;
          </p>
          <span className="text-[10px] uppercase tracking-widest text-gold/70 shrink-0 whitespace-nowrap" data-testid="daily-bread-ref">— {v.ref}</span>
        </div>
        <button
          onClick={close}
          data-testid="daily-bread-close"
          className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/50 shrink-0"
          aria-label="Dismiss daily bread"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
