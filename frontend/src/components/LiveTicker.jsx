import React, { useEffect, useState } from "react";
import { Circle } from "lucide-react";

const TICKERS = [
  "Sarah from Toronto just booked YVR → Whistler",
  "Mike booked DD service in Creekside",
  "FIFA Match-Day pickup confirmed for 4 fans",
  "Priya booked Joffre Lakes trailhead shuttle",
  "Carlos from Mexico booked a Crankworx round-trip",
  "Emma just unlocked her free 11th ride 🎉",
  "James booked airport pickup for 3 AM tomorrow",
  "Daniel & family booked Scandinave Spa shuttle",
  "Lin from Vancouver booked Bar Oso → home",
  "Tony just hit 50,001 rides — thank you!",
];

export default function LiveTicker() {
  const [idx, setIdx] = useState(0);
  const [secondsAgo, setSecondsAgo] = useState(12);

  useEffect(() => {
    const i = setInterval(() => {
      setIdx((n) => (n + 1) % TICKERS.length);
      setSecondsAgo(Math.floor(Math.random() * 45) + 4);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <div
      data-testid="live-ticker"
      className="border-b border-white/5 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5"
    >
      <div className="max-w-7xl mx-auto px-5 py-2 flex items-center gap-3 text-xs">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold shrink-0">
          <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
          LIVE
        </span>
        <span className="text-white/70 truncate transition-opacity duration-500" key={idx}>
          {TICKERS[idx]}
        </span>
        <span className="ml-auto text-white/30 shrink-0 tabular-nums">{secondsAgo}s ago</span>
      </div>
    </div>
  );
}
