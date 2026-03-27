"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlineHomeModern,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const CONTACT_INFO = {
  whatsapp: "2347063690379",
  phones: ["07063690379", "08114984507", "07017011141"],
  address: "#47 Lake Chad Crescent off IBB Way Maitama Main, Abuja-FCT",
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Listings", href: "#listings" },
  { name: "Neighborhoods", href: "#neighborhoods" },
];

const fctDistricts = [
  {
    label: "PRIME",
    districts: [
      "Maitama / Maitama 2",
      "Asokoro",
      "Wuse 2",
      "Guzape / Guzape 2",
    ],
  },
  {
    label: "STRATEGIC",
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
    label: "GROWTH",
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setMobileMenuOpen(false);
      setIsSearchOpen(false);
    }
  };

  const handleContactPrincipal = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, "_blank");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || isSearchOpen
            ? "bg-white/95 backdrop-blur-xl py-3 shadow-md border-b border-slate-100"
            : "bg-white py-5 lg:py-8 border-b border-slate-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO SECTION */}
          <div
            className="flex items-center gap-4 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/logo.png"
              alt="Onwe Logo"
              className="h-10 lg:h-14 w-auto object-contain"
            />
            <div className="hidden sm:block border-l border-slate-200 pl-4 text-left">
              <h1
                className={`${playfair.className} text-lg lg:text-xl text-[#002349] leading-tight`}
              >
                Onwe <span className="text-[#C5A059] italic">Realtors</span>
              </h1>
              <p
                className={`${montserrat.className} text-[7px] font-black uppercase tracking-[0.3em] text-[#002349]/40`}
              >
                Integrated Ltd
              </p>
            </div>
          </div>

          {/* DESKTOP NAV & TOOLS */}
          <div className="flex items-center gap-6 lg:gap-10">
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`${montserrat.className} text-[10px] font-black uppercase tracking-[0.25em] text-[#002349] hover:text-[#C5A059] transition-all relative group`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C5A059] transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* SEARCH TOGGLE */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-3 rounded-full transition-all ${
                isSearchOpen
                  ? "bg-[#C5A059] text-white"
                  : "bg-slate-50 text-[#002349] hover:bg-slate-100"
              }`}
            >
              {isSearchOpen ? (
                <HiX size={20} />
              ) : (
                <HiOutlineMagnifyingGlass size={20} />
              )}
            </button>

            <button
              onClick={handleContactPrincipal}
              className="hidden sm:block bg-[#002349] text-white px-6 py-3 lg:px-8 lg:py-4 text-[9px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-lg"
            >
              Private Office
            </button>

            <button
              className="lg:hidden text-[#002349]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <HiOutlineMenuAlt3 size={28} />
            </button>
          </div>
        </div>

        {/* INTEGRATED SEARCH DROPDOWN */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-white border-t border-slate-50"
            >
              <div className="max-w-6xl mx-auto py-8 lg:py-12 px-6">
                <div
                  className="bg-white shadow-2xl p-2 border border-slate-100"
                  style={{ borderRadius: "0 3rem 0 3rem" }}
                >
                  <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                    {/* DISTRICT SELECTOR */}
                    <div className="flex-1 p-6 text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <HiOutlineMapPin className="text-[#C5A059]" />
                        <label
                          className={`${montserrat.className} text-[9px] font-black text-[#C5A059] uppercase tracking-widest`}
                        >
                          Search District
                        </label>
                      </div>
                      <select
                        className={`${playfair.className} w-full text-xl text-[#002349] bg-transparent outline-none cursor-pointer appearance-none`}
                      >
                        <option value="">Anywhere in FCT</option>
                        {fctDistricts.map((group) => (
                          <optgroup key={group.label} label={group.label}>
                            {group.districts.map((d) => (
                              <option key={d} value={d}>
                                {d}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    {/* ASSET TYPE */}
                    <div className="flex-1 p-6 text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <HiOutlineHomeModern className="text-[#C5A059]" />
                        <label
                          className={`${montserrat.className} text-[9px] font-black text-[#C5A059] uppercase tracking-widest`}
                        >
                          Asset Type
                        </label>
                      </div>
                      <select
                        className={`${playfair.className} w-full text-xl text-[#002349] bg-transparent outline-none cursor-pointer appearance-none`}
                      >
                        <option>Sovereign Mansion</option>
                        <option>Residential Land</option>
                        <option>Commercial Plaza</option>
                        <option>Penthouse Portfolio</option>
                        <option>Industrial Acreage</option>
                      </select>
                    </div>

                    {/* OFFICE CONTACT INFO (SYNCED) */}
                    <div className="flex-1 p-6 hidden xl:block text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <HiOutlineBuildingOffice2 className="text-[#C5A059]" />
                        <label
                          className={`${montserrat.className} text-[9px] font-black text-[#C5A059] uppercase tracking-widest`}
                        >
                          Principal Office
                        </label>
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed">
                        {CONTACT_INFO.address}
                      </p>
                    </div>

                    {/* SEARCH BUTTON */}
                    <div className="lg:w-48 p-2">
                      <button
                        className="w-full h-full bg-[#002349] text-white py-6 flex flex-col items-center justify-center gap-2 group hover:bg-[#C5A059] transition-all"
                        style={{ borderRadius: "0 2.5rem 0 2.5rem" }}
                      >
                        <span
                          className={`${montserrat.className} text-[9px] font-black uppercase tracking-widest`}
                        >
                          Locate Asset
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-50">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 bg-[#002349] text-white rounded-full flex items-center justify-center shadow-lg"
              >
                <HiX size={20} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-10 gap-8 text-left">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`${playfair.className} text-4xl text-[#002349] flex items-baseline gap-4`}
                >
                  <span
                    className={`${montserrat.className} text-[10px] text-[#C5A059] font-black`}
                  >
                    0{i + 1}
                  </span>
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="p-10 bg-[#002349]">
              <p className="text-[9px] text-white/40 uppercase font-black tracking-widest mb-4 text-left">
                Principal HQ: Maitama
              </p>
              <button
                onClick={handleContactPrincipal}
                className="w-full py-5 bg-[#C5A059] text-white text-[10px] font-black uppercase tracking-widest shadow-xl"
              >
                Contact Principal Office
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
