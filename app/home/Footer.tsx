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

const CONTACT_INFO = {
  whatsapp: "2347063690379",
  phones: ["07063690379", "08114984507", "07017011141"],
  email: "inquiry@onwerealtors.com",
  address: "#47 Lake Chad Crescent off IBB Way Maitama Main, Abuja-FCT",
};

export function Footer() {
  return (
    <footer className="bg-white text-[#002349] pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- BRAND ARCHITECTURE --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <img
            src="/logo.png"
            alt="Onwe Realtors Logo"
            className="h-20 md:h-24 w-auto object-contain mx-auto mb-6"
          />
          <h2
            className={`${playfair.className} text-3xl md:text-5xl text-[#002349] leading-tight`}
          >
            Onwe <span className="text-[#C5A059] italic">Realtors</span>
          </h2>
          <h3
            className={`${montserrat.className} text-[10px] md:text-xs font-black text-[#002349]/40 uppercase tracking-[0.4em] mt-2`}
          >
            Integrated LTD
          </h3>
        </div>

        {/* --- SIMPLE CONTACT BAR --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 border-y border-slate-50 mb-16">
          {/* Address */}
          <div className="text-center lg:text-left">
            <h4
              className={`${montserrat.className} text-[9px] font-black text-[#C5A059] uppercase tracking-widest mb-2`}
            >
              Principal Office
            </h4>
            <p className="text-xs font-bold text-slate-500 max-w-[280px] leading-relaxed uppercase">
              {CONTACT_INFO.address}
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { Icon: FaInstagram, link: "#" },
              { Icon: FaLinkedinIn, link: "#" },
              {
                Icon: FaWhatsapp,
                link: `https://wa.me/${CONTACT_INFO.whatsapp}`,
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-slate-100 flex items-center justify-center hover:bg-[#002349] hover:text-white transition-all duration-500 rounded-full shadow-sm"
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>

          {/* Direct Contact */}
          <div className="text-center lg:text-right">
            <h4
              className={`${montserrat.className} text-[9px] font-black text-[#C5A059] uppercase tracking-widest mb-2`}
            >
              Direct Inquiry
            </h4>
            <p className="text-xs font-black text-[#002349] tracking-widest mb-1">
              {CONTACT_INFO.phones[0]}
            </p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              {CONTACT_INFO.email}
            </p>
          </div>
        </div>

        {/* --- FOOTER CREDITS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p
            className={`${montserrat.className} text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]`}
          >
            © 2026 ONWE REALTORS. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span
              className={`${montserrat.className} text-[8px] font-black text-slate-400 uppercase tracking-widest`}
            >
              Design by
            </span>
            <a
              href="https://www.ebcomtechnologies.com"
              className="text-[9px] font-black text-[#002349] uppercase tracking-[0.2em] border-b border-[#C5A059]"
            >
              EBCom Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
