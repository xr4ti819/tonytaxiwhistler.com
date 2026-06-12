import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MessageSquareText, X, Send, Loader2, Sparkles } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SUGGESTIONS = [
  "Best place for dinner near Creekside?",
  "When's the next FIFA match in Vancouver?",
  "How long is Whistler → YVR by taxi?",
  "Best beginner hike in summer?",
];

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm Tony, your Whistler concierge. Ask me anything — restaurants, trails, FIFA, weather, road conditions." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).slice(2));
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async (text) => {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;
    setMessages((m) => [...m, { role: "user", text: msg }]);
    setInput("");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/concierge/chat`, { session_id: sessionId, message: msg });
      setMessages((m) => [...m, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", text: "Hmm, I can't reach my brain right now. Call 778-917-3030 — a real human will help." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          data-testid="concierge-toggle"
          aria-label="Open concierge chat"
          className="hidden lg:flex fixed bottom-32 right-20 z-[60] w-12 h-12 rounded-full glass border border-gold/40 items-center justify-center hover:border-gold hover:scale-110 transition-all group"
        >
          <Sparkles className="w-5 h-5 text-gold group-hover:animate-pulse" strokeWidth={1.8} />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      )}

      {open && (
        <div
          data-testid="concierge-panel"
          className="hidden lg:flex fixed bottom-32 right-4 z-[65] w-96 h-[28rem] glass border border-gold/30 rounded-2xl flex-col shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gold-foil flex items-center justify-center font-serif font-black text-sm">T</div>
              <div>
                <div className="text-sm font-semibold leading-none">Tony · AI Concierge</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} data-testid="concierge-close" className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/50">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 ${m.role === "user" ? "bg-gold/20 text-white" : "bg-surface2 text-white/90 border border-white/5"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-surface2 border border-white/5 rounded-2xl px-3.5 py-2 text-white/50 flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" /> Tony is thinking...
                </div>
              </div>
            )}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 hover:border-gold hover:text-gold transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="border-t border-white/5 p-3 flex gap-2">
            <input
              value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Tony..."
              data-testid="concierge-input"
              disabled={loading}
              className="flex-1 bg-surface2 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold"
            />
            <button type="submit" disabled={loading || !input.trim()} data-testid="concierge-send" className="px-3 rounded-xl gold-foil disabled:opacity-50">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
