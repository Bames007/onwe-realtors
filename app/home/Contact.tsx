"use client";

import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-40 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXT CONTENT */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block bg-[#991B1B]/5 px-3 py-1 mb-4 md:mb-6 rounded-sm border-l-2 border-[#991B1B]"
            >
              <span
                className={`${montserrat.className} text-[#991B1B] text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]`}
              >
                Private Consultation
              </span>
            </motion.div>

            <h2
              className={`${playfair.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#002349] leading-[1.1] md:leading-[0.95] mb-8 md:mb-12`}
            >
              Begin Your <br />
              <span className="text-[#C5A059] italic drop-shadow-sm">
                Acquisition.
              </span>
            </h2>

            {/* CONTACT INFO PILLS */}
            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#C5A059]/10 transition-colors">
                  <HiOutlinePhone className="text-[#C5A059] text-xl md:text-2xl" />
                </div>
                <span
                  className={`${montserrat.className} text-xs md:text-sm font-black text-[#0f172a] tracking-widest`}
                >
                  +234 812 000 0000
                </span>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#C5A059]/10 transition-colors">
                  <HiOutlineEnvelope className="text-[#C5A059] text-xl md:text-2xl" />
                </div>
                <span
                  className={`${montserrat.className} text-xs md:text-sm font-black text-[#0f172a] tracking-widest uppercase break-all`}
                >
                  inquiry@onwerealtors.com
                </span>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#C5A059]/10 transition-colors">
                  <HiOutlineMapPin className="text-[#C5A059] text-xl md:text-2xl" />
                </div>
                <span
                  className={`${montserrat.className} text-xs md:text-sm font-black text-[#0f172a] tracking-widest`}
                >
                  Maitama, Abuja, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* LUXURY FORM */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] p-8 md:p-12 lg:p-20 border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,35,73,0.1)]"
            style={{ borderRadius: "3rem 0 3rem 0" }} // Reduced radius for mobile fit
          >
            <form className="space-y-6 md:space-y-10">
              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder="FULL NAME"
                  className="w-full bg-transparent border-b-2 border-slate-300 py-3 md:py-4 text-[11px] md:text-[12px] font-black tracking-[0.2em] text-[#000000] outline-none focus:border-[#002349] transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b-2 border-slate-300 py-3 md:py-4 text-[11px] md:text-[12px] font-black tracking-[0.2em] text-[#000000] outline-none focus:border-[#002349] transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="relative group">
                <textarea
                  placeholder="MESSAGE"
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-slate-300 py-3 md:py-4 text-[11px] md:text-[12px] font-black tracking-[0.2em] text-[#000000] outline-none focus:border-[#002349] transition-all resize-none placeholder:text-slate-400"
                />
              </div>

              <button className="w-full bg-[#002349] text-white py-6 md:py-8 text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-[#C5A059] hover:shadow-xl hover:shadow-[#C5A059]/20 transition-all duration-500 transform hover:-translate-y-1 active:scale-95">
                Submit Acquisition Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
