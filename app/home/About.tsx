"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { Montserrat, Playfair_Display } from "next/font/google";
import { HiOutlineLibrary } from "react-icons/hi";
import { HiOutlineShieldCheck, HiOutlineArrowUpRight } from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-48 bg-white overflow-hidden"
    >
      {/* 1. ARCHITECTURAL GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full border-x border-slate-900 max-w-7xl mx-auto flex justify-between">
          <div className="w-px h-full bg-slate-900" />
          <div className="w-px h-full bg-slate-900" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          {/* LEFT SIDE: MULTI-LAYERED VISUALS (IPAD & MOBILE OPTIMIZED) */}
          <div className="flex-1 relative w-full group">
            {/* Main Feature Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl"
              style={{ borderRadius: "0 8rem 0 8rem" }}
            >
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Architecture"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#002349]/10 mix-blend-multiply" />
            </motion.div>

            {/* Secondary Floating "Trust" Image (Hidden on small mobile, visible on iPad+) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="hidden md:block absolute -bottom-12 -left-12 w-1/2 aspect-square overflow-hidden border-[12px] border-white shadow-2xl"
              style={{ borderRadius: "0 4rem 0 4rem" }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Abuja Office Integrity"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute -top-6 -right-6 lg:-right-12 bg-[#C5A059] p-8 lg:p-10 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700"
            >
              <p
                className={`${playfair.className} text-white text-5xl lg:text-6xl leading-none`}
              >
                12
              </p>
              <p
                className={`${montserrat.className} text-white text-[9px] font-black uppercase tracking-[0.3em] mt-2`}
              >
                Years of <br /> Sovereignty
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE NARRATIVE */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#991B1B]" />
                <span
                  className={`${montserrat.className} text-[#991B1B] text-[11px] font-black uppercase tracking-[0.5em]`}
                >
                  The Heritage
                </span>
              </div>

              <h2
                className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl text-[#002349] leading-[1.1] mb-8`}
              >
                Security Meets <br />
                <span className="text-[#C5A059] italic">The High Life.</span>
              </h2>

              <div
                className={`${montserrat.className} space-y-8 text-[#0f172a] text-sm lg:text-base leading-relaxed font-medium opacity-90`}
              >
                <p>
                  At{" "}
                  <span className="font-black border-b-2 border-[#C5A059]/20">
                    Onwe Realtors Integrated Limited
                  </span>
                  , we do not simply broker transactions; we curate legacies. In
                  the heart of Nigeria’s capital, we recognize that land is the
                  ultimate signature of success.
                </p>
                <p className="pl-6 border-l-4 border-[#C5A059]">
                  Our commitment is to absolute transparency. Every square inch
                  of our portfolio in{" "}
                  <span className="text-[#002349] font-bold">
                    Maitama, Asokoro, and Guzape
                  </span>{" "}
                  is subjected to rigorous AGIS verification and legal scrutiny.
                </p>
              </div>
            </motion.div>

            {/* VALUE PROPOSITION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                {
                  icon: <HiOutlineShieldCheck />,
                  title: "AGIS Verified",
                  desc: "Every title is cross-referenced with the FCT land registry.",
                },
                {
                  icon: <HiOutlineLibrary />,
                  title: "Legal Fortress",
                  desc: "In-house legal counsel for seamless Deed of Assignment.",
                },
                {
                  icon: <Handshake />,
                  title: "Elite Network",
                  desc: "Off-market access to Abuja's most prestigious estates.",
                },
                {
                  icon: <HiOutlineArrowUpRight />,
                  title: "Asset Growth",
                  desc: "Expert advisory on high-yield real estate investments.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-5"
                >
                  <div className="text-[#C5A059] text-3xl shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className={`${montserrat.className} text-[11px] font-black text-[#002349] uppercase tracking-widest mb-1`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-slate-500 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
