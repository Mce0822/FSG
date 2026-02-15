"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PainPoints />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
