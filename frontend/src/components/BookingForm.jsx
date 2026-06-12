import React, { useState } from "react";
import axios from "axios";
import { Loader2, Check, Send } from "lucide-react";
import { PICKUP_OPTIONS } from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICE_TYPES = [
  { v: "local", label: "Local · Around Whistler" },
  { v: "airport", label: "Airport · YVR Transfer" },
  { v: "fifa", label: "FIFA 2026 · BC Place" },
  { v: "designated", label: "Designated Driver · You + Your Car" },
  { v: "activity", label: "Activity · Trailhead / Tour" },
  { v: "nightlife", label: "Nightlife · Safe Ride Home" },
  { v: "tour", label: "Custom Tour · Multi-Stop" },
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    pickup: "Whistler Village", dropoff: "YVR Airport",
    pickup_date: new Date().toISOString().slice(0, 10),
    pickup_time: "10:00",
    passengers: 2, luggage: "", notes: "", service_type: "airport",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    try {
      const { data } = await axios.post(`${API}/bookings`, {
        ...form,
        passengers: Number(form.passengers),
      });
      setStatus({ loading: false, success: data, error: null });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err?.response?.data?.detail || "Booking failed — please call us directly." });
    }
  };

  if (status.success) {
    return (
      <section id="book" className="py-20 px-5" data-testid="booking-success-section">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-gold/20 to-transparent border border-gold/40 rounded-3xl p-10 text-center">
          <div className="w-16 h-16 rounded-full gold-foil mx-auto flex items-center justify-center mb-5">
            <Check className="w-8 h-8" strokeWidth={3} />
          </div>
          <h2 className="font-serif text-4xl font-black mb-3">Booking received.</h2>
          <p className="text-white/70 mb-4">
            Confirmation #<span className="text-gold font-mono">{status.success.id.slice(0, 8).toUpperCase()}</span>
          </p>
          <p className="text-white/60 mb-2">Estimated fare:</p>
          <div className="font-serif text-5xl gold-gradient-text font-black tabular-nums mb-6">${status.success.estimated_fare}</div>
          <p className="text-white/60 text-sm">A driver will confirm by text within 15 minutes. For urgent rides, call us directly.</p>
          <button
            onClick={() => setStatus({ loading: false, success: null, error: null })}
            data-testid="booking-new-btn"
            className="mt-6 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5"
          >
            Book another ride
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-20 px-5" data-testid="booking-section">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Reserve Your Ride</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl font-black text-center mb-3 tracking-tighter">
          Book in <span className="italic gold-gradient-text">60 seconds.</span>
        </h2>
        <p className="text-center text-white/60 mb-10">Get a confirmation text in 15 minutes or less.</p>

        <form onSubmit={submit} className="bg-surface border border-white/5 rounded-3xl p-6 sm:p-10 space-y-5" data-testid="booking-form">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name" required>
              <input
                value={form.name} onChange={(e) => update("name", e.target.value)}
                required data-testid="booking-name"
                className="input" placeholder="Sarah M."
              />
            </Field>
            <Field label="Phone" required>
              <input
                value={form.phone} onChange={(e) => update("phone", e.target.value)}
                required data-testid="booking-phone"
                className="input" type="tel" placeholder="+1 604 555 1234"
              />
            </Field>
          </div>

          <Field label="Email (optional)">
            <input
              value={form.email} onChange={(e) => update("email", e.target.value)}
              data-testid="booking-email" type="email"
              className="input" placeholder="you@example.com"
            />
          </Field>

          <Field label="Service type" required>
            <select
              value={form.service_type} onChange={(e) => update("service_type", e.target.value)}
              data-testid="booking-service"
              className="input"
            >
              {SERVICE_TYPES.map(s => <option key={s.v} value={s.v}>{s.label}</option>)}
            </select>
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Pickup" required>
              <select value={form.pickup} onChange={(e) => update("pickup", e.target.value)} data-testid="booking-pickup" className="input">
                {PICKUP_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Drop-off" required>
              <select value={form.dropoff} onChange={(e) => update("dropoff", e.target.value)} data-testid="booking-dropoff" className="input">
                {PICKUP_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </Field>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Date" required>
              <input type="date" value={form.pickup_date} onChange={(e) => update("pickup_date", e.target.value)} required data-testid="booking-date" className="input" />
            </Field>
            <Field label="Time" required>
              <input type="time" value={form.pickup_time} onChange={(e) => update("pickup_time", e.target.value)} required data-testid="booking-time" className="input" />
            </Field>
            <Field label="Passengers" required>
              <input type="number" min="1" max="10" value={form.passengers} onChange={(e) => update("passengers", e.target.value)} required data-testid="booking-passengers" className="input" />
            </Field>
          </div>

          <Field label="Luggage / gear (skis, bikes, golf clubs...)">
            <input value={form.luggage} onChange={(e) => update("luggage", e.target.value)} data-testid="booking-luggage" className="input" placeholder="2 ski bags, 1 large suitcase" />
          </Field>

          <Field label="Notes for your driver">
            <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} data-testid="booking-notes" className="input min-h-[80px]" placeholder="Anything we should know?" />
          </Field>

          {status.error && <p className="text-sm text-red-400" data-testid="booking-error">{status.error}</p>}

          <button
            type="submit" disabled={status.loading}
            data-testid="booking-submit"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-foil font-semibold hover:scale-[1.01] transition-transform disabled:opacity-60"
          >
            {status.loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {status.loading ? "Sending..." : "Reserve My Ride"}
          </button>

          <p className="text-center text-xs text-white/40">
            By booking, you agree to free cancellation up to 2 hours before pickup.
          </p>
        </form>
      </div>

      <style>{`
        .input { width: 100%; background: #1A1D24; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px 16px; color: white; transition: all 0.2s; font-family: 'Outfit', sans-serif; }
        .input:focus { outline: none; border-color: #D4AF37; box-shadow: 0 0 0 3px rgba(212,175,55,0.15); }
        .input::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-white/50 mb-1.5 block">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
