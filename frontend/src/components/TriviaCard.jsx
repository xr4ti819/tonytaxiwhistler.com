import React, { useState } from "react";
import { Lightbulb, ChevronRight } from "lucide-react";

const FACTS = [
  "Whistler hosted the 2010 Winter Olympics — the bobsled track is still open for public rides.",
  "Whistler Bike Park is the world's #1 lift-accessed downhill mountain bike park.",
  "Whistler & Blackcomb mountains are connected by the PEAK 2 PEAK gondola — the longest unsupported lift span in the world (3.024 km).",
  "The name 'Whistler' comes from the hoary marmot whistles you can hear in the alpine.",
  "Vancouver hosts 7 matches of the FIFA World Cup 2026 at BC Place Stadium.",
  "Brandywine Falls drops 70 meters — taller than Niagara Falls.",
  "Joffre Lakes' turquoise colour comes from finely-ground glacial rock flour suspended in the water.",
  "Whistler has more than 50 black bears actively roaming village trails between April and October.",
  "The Sea-to-Sky Highway (Hwy 99) is named one of the most scenic drives in the world by National Geographic.",
  "Sushi Village opened in 1985 — older than Whistler's village square itself.",
];

export default function TriviaCard() {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * FACTS.length));

  return (
    <section className="py-16 px-5" data-testid="trivia-section">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-gold/10 via-surface to-surface border border-gold/20 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">
            <Lightbulb className="w-4 h-4" />
            Did You Know?
          </div>
          <p className="font-serif text-xl sm:text-2xl leading-snug text-white/90" data-testid="trivia-text">
            {FACTS[idx]}
          </p>
          <button
            onClick={() => setIdx((i) => (i + 1) % FACTS.length)}
            data-testid="trivia-next"
            className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gold hover:underline"
          >
            Another fact <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
