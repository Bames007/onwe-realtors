"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineShieldCheck } from "react-icons/hi2";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Montserrat, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function UltimateHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#FCFDFF] overflow-hidden flex flex-col"
    >
      {/* 1. ART-GALLERY SIDEBAR */}
      <div className="hidden lg:flex absolute left-0 top-0 h-full w-24 border-r border-slate-200/60 flex-col items-center justify-between py-16 z-50 bg-white">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#C5A059] to-transparent" />
        <span
          className={`${montserrat.className} rotate-180 [writing-mode:vertical-lr] text-[10px] font-black tracking-[0.8em] text-[#002349] uppercase opacity-80`}
        >
          ONWE REALTORS • ABUJA
        </span>
        <div className="flex flex-col gap-10 text-[#002349]">
          <FaInstagram className="hover:text-[#C5A059] cursor-pointer transition-all text-xl" />
          <FaFacebookF className="hover:text-[#C5A059] cursor-pointer transition-all text-xl" />
          <FaLinkedinIn className="hover:text-[#C5A059] cursor-pointer transition-all text-xl" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-1">
        {/* 2. TYPOGRAPHIC COMMAND SECTION */}
        <div className="flex-[1.2] flex flex-col justify-center px-6 md:px-16 lg:pl-40 lg:pr-12 py-20 lg:py-0 relative z-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-[#C5A059]" />
            <span
              className={`${montserrat.className} text-[#991B1B] text-[10px] lg:text-[12px] font-black uppercase tracking-[0.5em]`}
            >
              Luxury Assets
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`${playfair.className} text-[13vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] text-[#002349] tracking-tighter`}
          >
            YOUR <br />
            <span className="relative">
              SHELTER,
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-[#C5A059]/20"
              />
            </span>{" "}
            <br />
            <span className="text-[#C5A059] italic block mt-2">
              OUR PRIORITY.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 lg:mt-14 max-w-sm lg:max-w-lg"
          >
            <p
              className={`${montserrat.className} text-[#0f172a] text-sm md:text-base lg:text-lg leading-relaxed mb-12 font-medium opacity-70`}
            >
              The definitive gateway to Abuja&apos;s most prestigious addresses.
              We blend legal sovereignty with architectural distinction in
              Maitama, Asokoro, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#002349] text-white px-10 py-7 lg:py-8 text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-between hover:bg-[#C5A059] transition-all duration-500 group shadow-2xl shadow-[#002349]/20">
                View Portfolios
                <HiArrowRight
                  size={20}
                  className="ml-8 group-hover:translate-x-2 transition-transform"
                />
              </button>

              <div className="flex items-center gap-4 px-2">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center">
                  <HiOutlineShieldCheck className="text-[#C5A059] text-2xl" />
                </div>
                <span
                  className={`${montserrat.className} text-[9px] font-bold uppercase tracking-widest text-[#002349]`}
                >
                  100% VNAV <br /> Verified Assets
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. ARCHITECTURAL VISUAL SECTION */}
        <div className="relative h-[50vh] lg:h-screen w-full lg:flex-1 order-1 lg:order-2 p-4 lg:p-10">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
            style={{ borderRadius: "0 10rem 0 10rem" }}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover brightness-[0.85] hover:scale-105 transition-transform duration-[3000ms]"
              alt="Abuja Luxury Mansion"
            />

            {/* Glassmorphism Floating Info */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-12 right-0 bg-white/10 backdrop-blur-xl border-l border-t border-white/20 p-8 lg:p-12 min-w-[280px]"
            >
              <p
                className={`${playfair.className} text-[#C5A059] text-4xl lg:text-6xl mb-2`}
              >
                01
              </p>
              <p
                className={`${montserrat.className} text-white text-[10px] font-black uppercase tracking-[0.3em] mb-4`}
              >
                Market Authority
              </p>
              <p className="text-white/60 text-xs leading-relaxed max-w-[200px]">
                Leading the FCT premium sector with over ₦50B in managed luxury
                assets.
              </p>
            </motion.div>

            {/* Gold Accent Overlay */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#C5A059]/40 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-[-5%] left-[10%] pointer-events-none opacity-[0.03] select-none">
        <h2
          className={`${playfair.className} text-[25vw] text-[#002349] font-black`}
        >
          ONWE
        </h2>
      </div>
    </section>
  );
}
