"use client";

import { Montserrat, Playfair_Display } from "next/font/google";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="bg-white text-[#002349] pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- BRAND ARCHITECTURE SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          {/* Logo Container */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Onwe Realtors Logo"
              className="h-20 md:h-28 w-auto object-contain mx-auto"
            />
          </div>

          {/* Line 1: Gold */}
          <h2
            className={`${playfair.className} text-4xl md:text-6xl text-[#C5A059] leading-tight`}
          >
            Onwe Realtors
          </h2>

          {/* Line 2: Blue */}
          <h3
            className={`${montserrat.className} text-xl md:text-3xl font-black text-[#002349] uppercase tracking-[0.2em] mt-2`}
          >
            Integrated LTD
          </h3>

          {/* Line 3: Red Tagline */}
          <p
            className={`${montserrat.className} text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-[#991B1B] mt-6`}
          >
            Your Shelter, Our Priority.
          </p>

          <div className="h-[2px] w-16 bg-[#C5A059]/30 mt-10 rounded-full" />
        </div>

        {/* --- RESPONSIVE LINKS GRID --- */}
        {/* Mobile: 1 col (gap-12)
            iPad: 2 cols (md:grid-cols-2)
            Desktop: 4 cols (lg:grid-cols-4)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 border-y border-slate-50 py-16">
          {/* Column 1: Navigation */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4
              className={`${montserrat.className} text-[10px] font-black text-[#C5A059] uppercase tracking-widest border-b border-[#C5A059]/20 pb-2`}
            >
              Corporate
            </h4>
            <a
              href="#home"
              className="text-xs font-bold text-slate-500 hover:text-[#991B1B] transition-colors"
            >
              The Agency
            </a>
            <a
              href="#properties"
              className="text-xs font-bold text-slate-500 hover:text-[#991B1B] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#neighborhoods"
              className="text-xs font-bold text-slate-500 hover:text-[#991B1B] transition-colors"
            >
              Districts
            </a>
          </div>

          {/* Column 2: Trust */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4
              className={`${montserrat.className} text-[10px] font-black text-[#C5A059] uppercase tracking-widest border-b border-[#C5A059]/20 pb-2`}
            >
              Legal Trust
            </h4>
            <span className="text-xs font-bold text-slate-400">
              AGIS Verification
            </span>
            <span className="text-xs font-bold text-slate-400">
              Title Authentication
            </span>
            <span className="text-xs font-bold text-slate-400">
              Land Registry Search
            </span>
          </div>

          {/* Column 3: Presence */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4
              className={`${montserrat.className} text-[10px] font-black text-[#C5A059] uppercase tracking-widest border-b border-[#C5A059]/20 pb-2`}
            >
              Inquiry
            </h4>
            <span className="text-xs font-bold text-slate-500">
              Maitama, Abuja
            </span>
            <span className="text-xs font-bold text-slate-500">
              info@onwerealtors.com
            </span>
            <span className="text-xs font-bold text-slate-500">
              +234 812 000 0000
            </span>
          </div>

          {/* Column 4: Social Concierge */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <h4
              className={`${montserrat.className} text-[10px] font-black text-[#C5A059] uppercase tracking-widest`}
            >
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 border border-slate-100 flex items-center justify-center hover:bg-[#002349] hover:text-white transition-all duration-500 cursor-pointer rounded-full shadow-sm"
                  >
                    <Icon size={16} />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* --- EBCOM CREDIT & COPYRIGHT --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <p
              className={`${montserrat.className} text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]`}
            >
              © 2026 ONWE REALTORS INTEGRATED LTD.
            </p>
          </div>

          <div
            className={`${montserrat.className} flex items-center gap-3 bg-slate-50 px-8 py-4 rounded-full border border-slate-100 shadow-inner group hover:border-[#C5A059]/30 transition-all`}
          >
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
              Digital Infrastructure by
            </span>
            <a
              href="https://www.ebcomtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black text-[#002349] hover:text-[#991B1B] transition-all uppercase tracking-[0.3em] border-b-2 border-[#C5A059] pb-0.5"
            >
              EBCom Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
