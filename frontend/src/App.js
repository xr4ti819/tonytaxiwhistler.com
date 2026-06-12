import React from "react";
import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FareCalculator from "@/components/FareCalculator";
import BookingForm from "@/components/BookingForm";
import FloatingCTAs from "@/components/FloatingCTAs";
import {
  Services, FIFASection, VsBus, Activities, Trails, Dining,
  Nightlife, Loyalty, Testimonials, Events, Emergency,
  FAQSection, Footer
} from "@/components/Sections";
import QRCodeBlock from "@/components/QRCodeBlock";
import DesignatedDriver from "@/components/DesignatedDriver";
import MobileActionBar from "@/components/MobileActionBar";
import MusicWidget from "@/components/MusicWidget";
import DailyBread from "@/components/DailyBread";
import LiveConditions from "@/components/LiveConditions";
import CommunityRec from "@/components/CommunityRec";
import LakesRivers from "@/components/LakesRivers";
import LiveTicker from "@/components/LiveTicker";
import TriviaCard from "@/components/TriviaCard";
import Concierge from "@/components/Concierge";

function useAutoRefresh(minutes = 15) {
  React.useEffect(() => {
    const ms = minutes * 60 * 1000;
    let lastActivity = Date.now();
    const bump = () => { lastActivity = Date.now(); };
    ["mousemove", "keydown", "scroll", "touchstart", "click"].forEach((e) =>
      window.addEventListener(e, bump, { passive: true })
    );
    const id = setInterval(() => {
      if (document.hidden) return; // skip while tab hidden
      const idleFor = Date.now() - lastActivity;
      // Only reload if user has been idle ≥ 60s, to avoid interrupting a booking
      if (idleFor >= 60 * 1000) window.location.reload();
    }, ms);
    return () => {
      clearInterval(id);
      ["mousemove", "keydown", "scroll", "touchstart", "click"].forEach((e) =>
        window.removeEventListener(e, bump)
      );
    };
  }, [minutes]);
}

function Home() {
  useAutoRefresh(15);
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <DailyBread />
      <LiveTicker />
      <main>
        <Hero />
        <Loyalty />
        <LiveConditions />
        <Services />
        <DesignatedDriver />
        <FareCalculator />
        <FIFASection />
        <BookingForm />
        <VsBus />
        <Activities />
        <LakesRivers />
        <Trails />
        <TriviaCard />
        <Dining />
        <CommunityRec />
        <Nightlife />
        <Testimonials />
        <Events />
        <QRCodeBlock />
        <Emergency />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTAs />
      <MobileActionBar />
      <MusicWidget />
      <Concierge />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
