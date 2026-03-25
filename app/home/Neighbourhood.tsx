"use client";

import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const districts = [
  {
    name: "Maitama",
    count: "42 Properties",
    img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1974&auto=format&fit=crop",
    desc: "The Diplomatic Heart",
  },
  {
    name: "Asokoro",
    count: "28 Properties",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    desc: "The Power Seat",
  },
  {
    name: "Guzape",
    count: "15 Properties",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    desc: "The Modern Slopes",
  },
];

export function Neighborhoods() {
  return (
    <section
      id="neighborhoods"
      className="py-24 lg:py-40 bg-[#002349] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span
              className={`${montserrat.className} text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] block mb-4`}
            >
              Prime Postcodes
            </span>
            <h2
              className={`${playfair.className} text-5xl lg:text-7xl leading-tight`}
            >
              Abuja's Most <br />{" "}
              <span className="italic text-[#C5A059]">Coveted.</span>
            </h2>
          </div>
          <p
            className={`${montserrat.className} text-slate-400 text-sm max-w-xs leading-loose`}
          >
            Selection of districts based on appreciation value, security
            infrastructure, and legal status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {districts.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -20 }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              style={{ borderRadius: "0 4rem 0 4rem" }}
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002349] via-transparent to-transparent p-10 flex flex-col justify-end">
                <span
                  className={`${montserrat.className} text-[9px] font-black text-[#C5A059] uppercase tracking-widest mb-2`}
                >
                  {item.count}
                </span>
                <h3 className={`${playfair.className} text-4xl mb-4`}>
                  {item.name}
                </h3>
                <p
                  className={`${montserrat.className} text-[10px] text-slate-400 uppercase tracking-widest`}
                >
                  {item.desc}
                </p>
                <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all">
                  <HiOutlineArrowUpRight className="text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
