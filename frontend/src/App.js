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
  HappyHour, Nightlife, Loyalty, Testimonials, Events, Emergency,
  FAQSection, Footer
} from "@/components/Sections";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <FareCalculator />
        <FIFASection />
        <BookingForm />
        <VsBus />
        <Activities />
        <Trails />
        <Loyalty />
        <Dining />
        <HappyHour />
        <Nightlife />
        <Testimonials />
        <Events />
        <Emergency />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTAs />
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
