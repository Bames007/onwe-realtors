"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// --- CORE COMPONENTS ---
import { Header } from "./Header";
import AboutSection from "./About";
import { FeaturedListings } from "./FeaturedListings";
import { Neighborhoods } from "./Neighbourhood";
import { WhyChooseUs } from "./WhyChooseUs";
import { ContactSection } from "./Contact";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsappButton";
import PropertyListings from "./PropertyListings";

import { Playfair_Display } from "next/font/google";
import UltimateHero from "./Hero";
import { CurrentListings } from "./CurrentListings";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="relative bg-white antialiased selection:bg-[#C5A059] selection:text-white">
      {/* 1. SCROLL PROGRESS */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#C5A059] origin-left z-[110]"
        style={{ scaleX }}
      />

      {/* 2. NAVIGATION */}
      <Header />

      {/* 3. HEADER BUFFER 
          This is crucial: It creates the space for your logo 
          so it doesn't overlap the Hero's first headline.
      */}
      <div className="h-[80px] lg:h-[120px] bg-white w-full" />

      {/* 4. CONTENT SECTIONS */}
      <section id="home">
        <UltimateHero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="listings">
        <div className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">
              Verified Assets
            </span>
            <h2
              className={`${playfair.className} text-4xl lg:text-5xl text-[#002349] mt-2`}
            >
              Our Portfolio.
            </h2>
          </div>
          <PropertyListings />
        </div>
      </section>

      <FeaturedListings />

      <CurrentListings />

      <section id="neighborhoods">
        <Neighborhoods />
      </section>

      <WhyChooseUs />

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
      <WhatsAppButton />

      {/* ARCHITECTURAL DECOR LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.015] select-none">
        <p className="absolute top-[20%] -left-20 rotate-90 text-[15vw] font-black text-[#002349]">
          MAITAMA
        </p>
        <p className="absolute top-[60%] -right-20 -rotate-90 text-[15vw] font-black text-[#002349]">
          ASOKORO
        </p>
      </div>
    </main>
  );
}
