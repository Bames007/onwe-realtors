"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <main className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden antialiased">
      {/* BACKGROUND ARCHITECTURAL WATERMARK */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03] select-none">
        <h1 className="text-[40vw] font-black text-[#002349]">404</h1>
      </div>

      <div className="relative z-10 max-w-2xl px-6 text-center">
        {/* GOLDEN ACCENT LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[2px] bg-[#C5A059] mx-auto mb-8"
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${montserrat.className} text-[#991B1B] text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] block mb-4`}
        >
          Location Unavailable
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${playfair.className} text-5xl md:text-7xl text-[#002349] leading-tight mb-6`}
        >
          Even the finest <br />
          <span className="text-[#C5A059] italic">maps have limits.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`${montserrat.className} text-slate-500 text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto`}
        >
          The asset or page you are looking for has been moved, private-listed,
          or does not exist in our current portfolio.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 bg-[#002349] text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-500 shadow-xl shadow-[#002349]/10"
          >
            <HiOutlineArrowLongLeft
              size={20}
              className="transition-transform group-hover:-translate-x-2"
            />
            Return to Grand Entrance
          </Link>

          <Link
            href="/#listings"
            className={`${montserrat.className} text-[11px] font-black text-[#002349] uppercase tracking-widest hover:text-[#C5A059] transition-colors border-b-2 border-transparent hover:border-[#C5A059] pb-1`}
          >
            View Available Assets
          </Link>
        </motion.div>
      </div>

      {/* DECORATIVE CORNER ELEMENT */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 border-t border-l border-slate-100 pointer-events-none opacity-50"
        style={{ borderRadius: "100% 0 0 0" }}
      />
    </main>
  );
}
