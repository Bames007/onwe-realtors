"use client";

import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import { HiOutlineArrowUpRight, HiOutlineMapPin } from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const districts = [
  {
    name: "Maitama & Maitama 2",
    count: "42 Properties",
    img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974&auto=format&fit=crop",
    desc: "The Diplomatic Heart",
    tag: "Prime",
  },
  {
    name: "Asokoro",
    count: "28 Properties",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    desc: "The Power Seat",
    tag: "Prime",
  },
  {
    name: "Guzape & Guzape 2",
    count: "15 Properties",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    desc: "The Modern Slopes",
    tag: "Prime",
  },
  {
    name: "Wuse 2 & Zones",
    count: "34 Properties",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    desc: "Commercial Epicenter",
    tag: "Strategic",
  },
  {
    name: "Jabi & Utako",
    count: "22 Properties",
    img: "https://images.unsplash.com/photo-1449156059431-787c5b7ad39c?q=80&w=2070&auto=format&fit=crop",
    desc: "Lakeside Luxury",
    tag: "Strategic",
  },
  {
    name: "Airport Road",
    count: "50+ Plots",
    img: "https://images.unsplash.com/photo-1590633711956-6f1c71389808?q=80&w=2071&auto=format&fit=crop",
    desc: "The Expansion Gateway",
    tag: "Growth",
  },
];

// Simple helper for other districts to show volume
const otherDistricts = [
  "Garki Areas",
  "Wuye",
  "Dakibiyu",
  "Mabushi",
  "Jahi",
  "Katampe Extension",
  "Apo",
  "Kaura",
  "Durumi",
];

export function Neighborhoods() {
  return (
    <section
      id="neighborhoods"
      className="py-20 lg:py-40 bg-[#002349] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-20 gap-8">
          <div className="max-w-xl text-left">
            <span
              className={`${montserrat.className} text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] block mb-4`}
            >
              Territorial Intelligence
            </span>
            <h2
              className={`${playfair.className} text-4xl md:text-5xl lg:text-7xl leading-tight`}
            >
              Abuja's Most <br />{" "}
              <span className="italic text-[#C5A059]">Coveted.</span>
            </h2>
          </div>
          <div className="text-left lg:text-right">
            <p
              className={`${montserrat.className} text-slate-400 text-xs md:text-sm max-w-xs leading-loose mb-4`}
            >
              From the high-security diplomatic enclaves to the strategic
              commercial expansion zones of the FCT.
            </p>
            <div className="flex flex-wrap lg:justify-end gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">
                Phase 1
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">
                Phase 2
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">
                Phase 3
              </span>
            </div>
          </div>
        </div>

        {/* FEATURED DISTRICTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {districts.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group cursor-pointer"
              style={{ borderRadius: "0 3rem 0 3rem" }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002349] via-[#002349]/20 to-transparent p-8 md:p-10 flex flex-col justify-end text-left">
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`${montserrat.className} text-[9px] font-black text-[#C5A059] uppercase tracking-widest`}
                  >
                    {item.count}
                  </span>
                  <span className="text-[8px] border border-[#C5A059]/40 px-2 py-0.5 rounded text-[#C5A059] uppercase font-bold">
                    {item.tag}
                  </span>
                </div>
                <h3
                  className={`${playfair.className} text-3xl md:text-4xl mb-3`}
                >
                  {item.name}
                </h3>
                <p
                  className={`${montserrat.className} text-[9px] md:text-[10px] text-slate-300 uppercase tracking-widest`}
                >
                  {item.desc}
                </p>

                <div className="absolute top-8 right-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all">
                  <HiOutlineArrowUpRight className="text-lg md:text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ALL OTHER DISTRICTS CHIPS */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <HiOutlineMapPin className="text-[#C5A059] text-2xl" />
              <span
                className={`${montserrat.className} text-[10px] font-black uppercase tracking-[0.3em]`}
              >
                Active Operations
              </span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4">
              {otherDistricts.map((name) => (
                <span
                  key={name}
                  className={`${montserrat.className} text-[10px] md:text-[11px] font-bold text-slate-400 hover:text-white transition-colors cursor-default uppercase tracking-widest`}
                >
                  {name}
                </span>
              ))}
              <span
                className={`${montserrat.className} text-[10px] md:text-[11px] font-black text-[#C5A059] uppercase tracking-widest`}
              >
                + All FCT Districts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
