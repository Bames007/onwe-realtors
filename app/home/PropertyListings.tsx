"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import {
  HiOutlineVideoCamera,
  HiOutlineMapPin,
  HiXMark,
} from "react-icons/hi2";
import { FaBed, FaBath } from "react-icons/fa6";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const listings = [
  {
    id: "1",
    title: "The Guzape Monolith",
    price: "₦ 2.5 Billion",
    location: "Guzape District, Abuja",
    specs: { beds: 11, baths: 12, size: "2,400 sqm" },
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/0eBxu8vYgmo?autoplay=1",
    tag: "VNAV Verified",
  },
  {
    id: "2",
    title: "Maitama Glass House",
    price: "₦ 1.8 Billion",
    location: "Maitama, Abuja",
    specs: { beds: 7, baths: 9, size: "1,900 sqm" },
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/0S9mwufHcA8?autoplay=1",
    tag: "Prime Asset",
  },
  {
    id: "3",
    title: "The Asokoro Diplomatic",
    price: "Price Upon Request",
    location: "Asokoro, Abuja",
    specs: { beds: 9, baths: 10, size: "3,100 sqm" },
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/3g7M8p-31ts?autoplay=1",
    tag: "Exclusive",
  },
];

export default function PropertyListings() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="properties" className="py-24 lg:py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <motion.h2
            className={`${playfair.className} text-5xl lg:text-7xl text-[#002349] mb-4`}
          >
            The Cinema{" "}
            <span className="text-[#C5A059] italic text-4xl lg:text-6xl">
              Collection
            </span>
          </motion.h2>
          <div className="h-1 w-24 bg-[#C5A059]" />
        </div>

        {/* PROPERTY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {listings.map((item) => (
            <motion.div key={item.id} className="group">
              <div
                className="relative aspect-[4/5] overflow-hidden mb-8 cursor-pointer shadow-2xl"
                style={{ borderRadius: "0 4rem 0 4rem" }}
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-[#002349]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 scale-75 group-hover:scale-100 transition-transform duration-500">
                    <HiOutlineVideoCamera className="text-3xl text-white" />
                  </div>
                  <span
                    className={`${montserrat.className} text-[10px] font-black text-white uppercase tracking-[0.4em]`}
                  >
                    Play Tour
                  </span>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-[#002349] text-white px-4 py-2 text-[8px] font-black uppercase tracking-widest">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* TEXT DETAILS */}
              <div>
                <h3
                  className={`${playfair.className} text-2xl lg:text-3xl text-[#002349] mb-2`}
                >
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <HiOutlineMapPin className="text-[#C5A059]" />
                  <span
                    className={`${montserrat.className} text-[10px] font-bold text-slate-400 uppercase tracking-widest`}
                  >
                    {item.location}
                  </span>
                </div>
                <p
                  className={`${montserrat.className} text-[#C5A059] font-black text-lg mb-6`}
                >
                  {item.price}
                </p>

                <div className="flex gap-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2 text-[#002349]">
                    <FaBed size={14} className="opacity-20" />
                    <span className="text-xs font-bold">
                      {item.specs.beds} Beds
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#002349]">
                    <FaBath size={14} className="opacity-20" />
                    <span className="text-xs font-bold">
                      {item.specs.baths} Baths
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- CINEMA MODAL --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Blurred Backdrop */}
            <div
              className="absolute inset-0 bg-[#002349]/95 backdrop-blur-xl"
              onClick={() => setSelectedVideo(null)}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-10 right-10 text-white hover:text-[#C5A059] transition-colors z-[110]"
            >
              <HiXMark size={40} />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-black shadow-[0_0_100px_rgba(197,160,89,0.2)] border border-[#C5A059]/30 overflow-hidden"
              style={{ borderRadius: "0 4rem 0 4rem" }}
            >
              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </motion.div>

            {/* Brand Watermark in Modal */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
              <p
                className={`${playfair.className} text-[#C5A059] text-3xl opacity-50`}
              >
                Onwe Cinema Series
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
