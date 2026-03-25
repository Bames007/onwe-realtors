"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import {
  HiOutlineArrowRight,
  HiOutlineMapPin,
  HiOutlineArrowsPointingOut,
} from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// 1. Define Asset Categories
const categories = [
  "All Assets",
  "Mansions",
  "Office Space",
  "Lands",
  "Penthouses",
];

// 2. Mock Data for demonstration
const properties = [
  {
    id: 1,
    category: "Mansions",
    title: "The Glass Sovereign",
    location: "Maitama, Abuja",
    price: "₦ 1,200,000,000",
    size: "1,200 SQM",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    category: "Office Space",
    title: "Unity Corporate Tower",
    location: "Central Area, Abuja",
    price: "₦ 3,500,000,000",
    size: "4,500 SQM",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    category: "Penthouses",
    title: "The Sky Pavilion",
    location: "Guzape, Abuja",
    price: "₦ 850,000,000",
    size: "650 SQM",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
  },
  // Add more items as needed...
];

export function FeaturedListings() {
  const [activeTab, setActiveTab] = useState("All Assets");

  const filtered =
    activeTab === "All Assets"
      ? properties
      : properties.filter((p) => p.category === activeTab);

  return (
    <section className="py-24 lg:py-40 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`${montserrat.className} text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] block mb-4`}
            >
              Curated Selection
            </motion.span>
            <h2
              className={`${playfair.className} text-5xl lg:text-7xl text-[#002349] leading-tight`}
            >
              Prime <br />{" "}
              <span className="italic text-[#C5A059]">Portfolio.</span>
            </h2>
          </div>

          {/* DYNAMIC FILTER TABS */}
          <div className="flex flex-wrap gap-2 lg:gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`${montserrat.className} px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTab === cat
                    ? "bg-[#002349] text-white shadow-xl shadow-[#002349]/20"
                    : "text-slate-400 hover:text-[#002349] hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC GRID --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                {/* Image Frame */}
                <div
                  className="relative aspect-[4/5] overflow-hidden mb-8 shadow-2xl shadow-slate-200"
                  style={{ borderRadius: "0 4rem 0 4rem" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-[#002349] px-4 py-2 text-[9px] font-black uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Details Overlay */}
                  <div className="absolute inset-0 bg-[#002349]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <div className="flex items-center gap-4 text-white mb-6">
                      <div className="flex items-center gap-2">
                        <HiOutlineArrowsPointingOut className="text-[#C5A059]" />
                        <span className="text-[10px] font-bold">
                          {item.size}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineMapPin className="text-[#C5A059]" />
                        <span className="text-[10px] font-bold">
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <button className="w-full bg-[#C5A059] text-white py-5 rounded-none font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-[#002349] transition-all">
                      View Private Dossier
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="space-y-2 px-2">
                  <h3
                    className={`${playfair.className} text-3xl text-[#002349] group-hover:text-[#C5A059] transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400">
                    <HiOutlineMapPin size={14} className="text-[#C5A059]" />
                    <span
                      className={`${montserrat.className} text-[11px] font-bold uppercase tracking-widest`}
                    >
                      {item.location}
                    </span>
                  </div>
                  <p
                    className={`${montserrat.className} text-2xl font-black text-[#002349] pt-2`}
                  >
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
