"use client";

import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import {
  HiOutlineShieldCheck,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineScale,
} from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const advantages = [
  {
    title: "AGIS Title Sovereignty",
    desc: "Every property we represent undergoes a direct 48-hour AGIS verification. We don't just sell; we guarantee the paper.",
    icon: (
      <HiOutlineDocumentMagnifyingGlass className="text-4xl text-[#C5A059]" />
    ),
  },
  {
    title: "Legal Representation",
    desc: "Unlike standard agents, Onwe Realtors provides in-house legal oversight for every Deed of Assignment and Power of Attorney.",
    icon: <HiOutlineScale className="text-4xl text-[#C5A059]" />,
  },
  {
    title: "Architectural Vetting",
    desc: "We analyze structural integrity and setbacks. If it's not built to the FCT Masterplan, we won't list it.",
    icon: <HiOutlineShieldCheck className="text-4xl text-[#C5A059]" />,
  },
];

export function WhyChooseUs() {
  return (
    <section id="advantage" className="py-24 lg:py-40 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: THE STATEMENT */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className={`${montserrat.className} text-[#991B1B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block`}
            >
              The Onwe Standard
            </motion.span>
            <h2
              className={`${playfair.className} text-5xl lg:text-7xl text-[#002349] leading-tight mb-8`}
            >
              Beyond Brokerage. <br />
              <span className="text-[#C5A059] italic">Asset Protection.</span>
            </h2>
            <p
              className={`${montserrat.className} text-slate-500 text-sm lg:text-base leading-loose max-w-md mb-12`}
            >
              In the Abuja real estate market, ambiguity is the enemy. Onwe
              Realtors was founded to eliminate the "Agent Culture" and replace
              it with **Real Estate Sovereignty.**
            </p>

            <div className="space-y-12">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0">{adv.icon}</div>
                  <div>
                    <h4
                      className={`${montserrat.className} text-[11px] font-black text-[#002349] uppercase tracking-widest mb-2`}
                    >
                      {adv.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                      {adv.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE VISUAL MASK */}
          <div className="relative h-[500px] lg:h-[700px] w-full hidden md:block">
            <div
              className="absolute inset-0 bg-[#002349] overflow-hidden"
              style={{ borderRadius: "15rem 0 15rem 0" }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000"
                alt="The Onwe Founder"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002349] via-transparent to-transparent" />
              <div className="absolute bottom-20 left-12">
                <p
                  className={`${playfair.className} text-[#C5A059] text-3xl mb-2`}
                >
                  "We secure the land <br /> before we sell the house."
                </p>
                <p
                  className={`${montserrat.className} text-[9px] font-black text-white uppercase tracking-widest opacity-60`}
                >
                  — Onwe Realtors Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
