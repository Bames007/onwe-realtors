"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { Montserrat, Playfair_Display } from "next/font/google";
import { HiOutlineLibrary } from "react-icons/hi";
import {
  HiOutlineShieldCheck,
  HiOutlineArrowUpRight,
  HiOutlineMapPin,
} from "react-icons/hi2";

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
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center mb-32">
          {/* LEFT SIDE: VISUALS */}
          <div className="flex-1 relative w-full group">
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

          {/* RIGHT SIDE: NARRATIVE */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#991B1B]" />
                <span
                  className={`${montserrat.className} text-[#991B1B] text-[11px] font-black uppercase tracking-[0.5em]`}
                >
                  Territorial Authority
                </span>
              </div>

              <h2
                className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl text-[#002349] leading-[1.1] mb-8`}
              >
                A Presence in Every <br />
                <span className="text-[#C5A059] italic">FCT Hub.</span>
              </h2>

              <div
                className={`${montserrat.className} space-y-8 text-[#0f172a] text-sm lg:text-base leading-relaxed font-medium opacity-90`}
              >
                <p>
                  At{" "}
                  <span className="font-black border-b-2 border-[#C5A059]/20">
                    Onwe Realtors Integrated Limited
                  </span>
                  , we have mapped the entire Federal Capital Territory to bring
                  you the most secure assets. From the diplomatic enclaves of{" "}
                  <span className="text-[#002349] font-bold">
                    Maitama and Asokoro
                  </span>{" "}
                  to the high-growth corridors of{" "}
                  <span className="text-[#002349] font-bold">Airport Road</span>
                  .
                </p>
                <p className="pl-6 border-l-4 border-[#C5A059]">
                  We specialize in high-end residential, strategic commercial
                  lands, and investment-grade assets across <strong>all</strong>{" "}
                  Abuja phases.
                </p>
              </div>
            </motion.div>

            {/* CORE SERVICES SMALL GRID */}
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
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-[#C5A059] text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className={`${montserrat.className} text-[11px] font-black text-[#002349] uppercase tracking-widest`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- THE FCT COVERAGE MATRIX --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-50 p-8 md:p-16 border border-slate-100"
          style={{ borderRadius: "0 6rem 0 6rem" }}
        >
          <div className="flex items-center gap-4 mb-12">
            <HiOutlineMapPin className="text-[#C5A059] text-3xl" />
            <h3 className={`${playfair.className} text-3xl text-[#002349]`}>
              FCT Portfolio Reach
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* TIER 1 */}
            <div>
              <h4
                className={`${montserrat.className} text-[10px] font-black text-[#C5A059] uppercase tracking-widest mb-6 border-b border-slate-200 pb-2`}
              >
                Prime Enclaves
              </h4>
              <ul
                className={`${montserrat.className} text-xs space-y-3 text-slate-600 font-bold uppercase tracking-wider`}
              >
                <li>Maitama & Maitama 2</li>
                <li>Asokoro</li>
                <li>Wuse 2</li>
                <li>Guzape & Guzape 2</li>
              </ul>
            </div>
            {/* TIER 2 */}
            <div>
              <h4
                className={`${montserrat.className} text-[10px] font-black text-[#C5A059] uppercase tracking-widest mb-6 border-b border-slate-200 pb-2`}
              >
                Strategic Hubs
              </h4>
              <ul
                className={`${montserrat.className} text-xs space-y-3 text-slate-600 font-bold uppercase tracking-wider`}
              >
                <li>Jabi & Utako</li>
                <li>Wuye & Dakibiyu</li>
                <li>Mabushi & Jahi</li>
                <li>Katampe & Extension</li>
              </ul>
            </div>
            {/* TIER 3 */}
            <div>
              <h4
                className={`${montserrat.className} text-[10px] font-black text-[#C5A059] uppercase tracking-widest mb-6 border-b border-slate-200 pb-2`}
              >
                Growth Zones
              </h4>
              <ul
                className={`${montserrat.className} text-xs space-y-3 text-slate-600 font-bold uppercase tracking-wider`}
              >
                <li>Apo & Kaura</li>
                <li>Durumi</li>
                <li>Airport Road</li>
                <li>Wuse Zones & Garki</li>
              </ul>
            </div>
            {/* TIER 4 */}
            <div className="bg-[#002349] p-6 text-white flex flex-col justify-center">
              <p className={`${playfair.className} text-xl italic mb-2`}>
                Complete FCT Access
              </p>
              <p className="text-[10px] uppercase font-black tracking-widest opacity-70">
                If it exists in the Abuja Master Plan, we secure it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
