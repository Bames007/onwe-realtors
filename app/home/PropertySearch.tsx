"use client";

import { useState } from "react";
import { Montserrat, Playfair_Display } from "next/font/google";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlineHomeModern,
  HiOutlineCurrencyDollar,
  HiChevronDown,
} from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// Categorized FCT Districts for better UX
const fctDistricts = [
  {
    label: "PRIME ENCLAVES",
    districts: [
      "Maitama / Maitama 2",
      "Asokoro",
      "Wuse 2",
      "Guzape / Guzape 2",
    ],
  },
  {
    label: "STRATEGIC HUBS",
    districts: [
      "Jabi",
      "Utako",
      "Wuye",
      "Dakibiyu",
      "Mabushi",
      "Jahi",
      "Katampe / Extension",
    ],
  },
  {
    label: "GROWTH ZONES",
    districts: [
      "Apo",
      "Kaura",
      "Durumi",
      "Airport Road",
      "Wuse Zones",
      "Garki Areas",
    ],
  },
];

export function PropertySearch() {
  const [isFocused, setIsFocused] = useState<string | null>(null);

  return (
    <section
      id="search"
      className="relative -mt-16 lg:-mt-32 z-50 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* UPPER TAB INDICATOR */}
        <div className="flex gap-1 mb-0 ml-4 md:ml-10">
          <div
            className="bg-[#002349] text-white px-6 md:px-8 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ borderRadius: "1.2rem 1.2rem 0 0" }}
          >
            Buy Assets
          </div>
          <div
            className="bg-white/60 backdrop-blur-md text-[#002349]/40 px-6 md:px-8 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] cursor-pointer hover:bg-white hover:text-[#002349] transition-all"
            style={{ borderRadius: "1.2rem 1.2rem 0 0" }}
          >
            Joint Ventures
          </div>
        </div>

        {/* MAIN SEARCH ARCHITECTURE */}
        <div
          className="bg-white shadow-[0_60px_100px_-20px_rgba(0,35,73,0.2)] p-2 lg:p-6 border border-slate-100 relative overflow-hidden"
          style={{ borderRadius: "0 4rem 0 4rem" }} // Slightly smaller radius for mobile fluidity
        >
          {/* Subtle Background Branding */}
          <div
            className={`${playfair.className} absolute -right-10 -bottom-10 text-[8rem] lg:text-[12rem] text-slate-50 opacity-[0.03] pointer-events-none select-none`}
          >
            ONWE
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center relative z-10">
            {/* 1. DISTRICT SELECTOR (WITH FULL FCT COVERAGE) */}
            <div
              className={`flex-1 px-6 md:px-8 py-5 md:py-6 cursor-pointer transition-all duration-300 border-b lg:border-b-0 lg:border-r border-slate-100 hover:bg-slate-50 ${isFocused === "district" ? "bg-slate-50" : ""}`}
              onClick={() => setIsFocused("district")}
            >
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <HiOutlineMapPin className="text-[#C5A059] text-xl" />
                <label
                  className={`${montserrat.className} text-[9px] md:text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em]`}
                >
                  Preferred District
                </label>
              </div>
              <div className="flex items-center justify-between group">
                <select
                  className={`${playfair.className} w-full text-xl md:text-2xl text-[#002349] outline-none bg-transparent cursor-pointer appearance-none`}
                >
                  <option value="">Select FCT District</option>
                  {fctDistricts.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="other">Other FCT Districts</option>
                </select>
                <HiChevronDown className="text-slate-300 group-hover:text-[#C5A059] transition-colors" />
              </div>
            </div>

            {/* 2. PROPERTY CLASS */}
            <div
              className={`flex-1 px-6 md:px-8 py-5 md:py-6 cursor-pointer transition-all duration-300 border-b lg:border-b-0 lg:border-r border-slate-100 hover:bg-slate-50 ${isFocused === "type" ? "bg-slate-50" : ""}`}
              onClick={() => setIsFocused("type")}
            >
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <HiOutlineHomeModern className="text-[#C5A059] text-xl" />
                <label
                  className={`${montserrat.className} text-[9px] md:text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em]`}
                >
                  Asset Classification
                </label>
              </div>
              <div className="flex items-center justify-between group">
                <select
                  className={`${playfair.className} w-full text-xl md:text-2xl text-[#002349] outline-none bg-transparent cursor-pointer appearance-none`}
                >
                  <option>Sovereign Mansion</option>
                  <option>Grade-A Office Block</option>
                  <option>Luxury Maisonette</option>
                  <option>Industrial Acreage</option>
                  <option>Residential Land</option>
                </select>
                <HiChevronDown className="text-slate-300 group-hover:text-[#C5A059] transition-colors" />
              </div>
            </div>

            {/* 3. BUDGETARY RANGE */}
            <div
              className={`flex-1 px-6 md:px-8 py-5 md:py-6 cursor-pointer transition-all duration-300 hover:bg-slate-50 ${isFocused === "budget" ? "bg-slate-50" : ""}`}
              onClick={() => setIsFocused("budget")}
            >
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <HiOutlineCurrencyDollar className="text-[#C5A059] text-xl" />
                <label
                  className={`${montserrat.className} text-[9px] md:text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em]`}
                >
                  Budget Liquidity
                </label>
              </div>
              <div className="flex items-center justify-between group">
                <select
                  className={`${playfair.className} w-full text-xl md:text-2xl text-[#002349] outline-none bg-transparent cursor-pointer appearance-none`}
                >
                  <option>₦250M — ₦500M</option>
                  <option>₦500M — ₦1.2B</option>
                  <option>₦1.2B — ₦5B</option>
                  <option>₦5B+ (High-Yield)</option>
                </select>
                <HiChevronDown className="text-slate-300 group-hover:text-[#C5A059] transition-colors" />
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="p-3">
              <button
                className="h-20 lg:h-28 w-full lg:w-48 bg-[#002349] hover:bg-[#C5A059] text-white flex flex-col items-center justify-center gap-1 md:gap-2 transition-all duration-700 shadow-xl shadow-[#002349]/20 active:scale-95 group"
                style={{ borderRadius: "0 3.5rem 0 3.5rem" }}
              >
                <HiOutlineMagnifyingGlass className="text-2xl md:text-3xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
                <span
                  className={`${montserrat.className} text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]`}
                >
                  Search Market
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* REAL-TIME MARKET STATS FOOTER */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-8 opacity-60">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span
              className={`${montserrat.className} text-[9px] md:text-[10px] font-bold text-[#002349] uppercase tracking-widest`}
            >
              Verified FCT Assets Today
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-slate-300 hidden md:block" />
            <span
              className={`${montserrat.className} text-[9px] md:text-[10px] font-bold text-[#002349] uppercase tracking-widest`}
            >
              Official AGIS Data Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
