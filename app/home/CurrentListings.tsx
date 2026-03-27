"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import {
  HiOutlineMapPin,
  HiOutlineCamera,
  HiOutlinePlay,
  HiXMark,
  HiChevronLeft,
  HiChevronRight,
  HiOutlinePhone,
  HiOutlineBuildingOffice2,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const CONTACT_INFO = {
  whatsapp: "2347063690379",
  phones: ["07063690379", "08114984507", "07017011141"],
  address: "#47 Lake Chad Crescent off IBB Way Maitama Main, Abuja-FCT",
};

const listings = [
  {
    id: "ON-JAB-001",
    title: "The Sovereign Plaza",
    location: "Jabi, Abuja",
    price: "₦8 Billion (Asking)",
    category: "Commercial",
    type: "image",
    images: ["/property1a.jpeg"],
    tags: ["8,000sqm", "C of O", "Lifts"],
    desc: "4-Floor luxury plaza with marble finish, 200KV Wilson Generator, and private transformer.",
  },
  {
    id: "ON-JAB-002",
    title: "Jabi High-Yield Mall",
    location: "Jabi, Abuja",
    price: "₦12 Billion",
    category: "Investment",
    type: "image",
    images: ["/property2a.jpeg"],
    tags: ["100% Occupied", "₦300M Annual ROI", "5,000sqm"],
    desc: "A fully occupied trophy asset generating ₦300M annually. Powered by 2x 500KVA generators.",
  },
  {
    id: "ON-UTK-003",
    title: "Utako Detached Manor",
    location: "Utako, Abuja",
    price: "₦2.2 Billion",
    category: "Residential",
    type: "image",
    images: [
      "/property3a.jpeg",
      "/property3b.jpeg",
      "/property3c.jpeg",
      "/property3d.jpeg",
      "/property3e.jpeg",
    ],
    tags: ["2,000sqm", "6-Bed", "Inverter System"],
    desc: "Standalone 6-Bedroom duplex with BQ and 2 units of 4-Bedroom terraces. Fitted kitchen & CCTV.",
  },
  {
    id: "ON-WUS-004",
    title: "Wuse Hospitality Suite",
    location: "Wuse Zone 7, Abuja",
    price: "₦15 Billion (Net)",
    category: "Hospitality",
    type: "image",
    images: [
      "/property4a.jpeg",
      "/property4b.jpeg",
      "/property4c.jpeg",
      "/property4d.jpeg",
      "/property4e.jpeg",
    ],
    tags: ["97 Rooms", "Turnkey", "Strategic Location"],
    desc: "A massive 97-room hotel asset in the heart of Wuse. Fully operational and ready for takeover.",
  },
  {
    id: "ON-KAR-005",
    title: "Nizamiya Portfolio",
    location: "Karimo, Abuja",
    price: "₦12 Billion",
    category: "Development",
    type: "video",
    videoUrl: "/property5.mp4",
    thumbnail: "/property3e.jpeg",
    tags: ["54 Units", "Terrace Duplexes", "Video Tour"],
    desc: "Mini-estate featuring 54 units of luxury terrace duplexes. Architectural walkthrough video available.",
  },
  {
    id: "ON-DUR-006",
    title: "Industrial Logistics Hub",
    location: "Durumi / Area 1, Abuja",
    price: "₦4.5 Billion",
    category: "Industrial",
    type: "image",
    images: ["/property6.jpeg", "/property6b.jpeg"],
    tags: ["3,000sqm", "Warehouse", "Admin Block"],
    desc: "1000sqm warehouse + 2-storey office block. Automated fire detection and heavy-duty accessibility.",
  },
];

export function CurrentListings() {
  const [activeAsset, setActiveAsset] = useState<any>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    if (activeAsset) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [activeAsset]);

  const openAsset = (item: any) => {
    setActiveAsset(item);
    setCurrentImgIdx(0);
  };

  const handleWhatsapp = (id: string, title: string) => {
    const message = `Hello Onwe Realtors, I am interested in Asset ${id}: ${title}. Please provide full details and payment procedures.`;
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      id="listings"
      className="relative py-24 lg:py-32 bg-white text-[#002349]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-slate-100 pb-12">
          <div className="text-left">
            <span className="text-[#00459a] text-[10px] font-black uppercase tracking-[0.4em] block mb-4">
              Verified Portfolio
            </span>
            <h2
              className={`${playfair.className} text-5xl lg:text-7xl leading-[1.1]`}
            >
              Current <br />{" "}
              <span className="italic text-[#C5A059]">Acquisitions.</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right">
            <div className="flex items-center gap-2 justify-end mb-2">
              <HiOutlineBuildingOffice2 className="text-[#C5A059]" />
              <span
                className={`${montserrat.className} text-[9px] font-bold uppercase tracking-widest`}
              >
                Maitama Headquarters
              </span>
            </div>
            <p className="text-[10px] text-slate-400 max-w-[250px] leading-relaxed uppercase font-bold italic">
              {CONTACT_INFO.address}
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24">
          {listings.map((item) => (
            <motion.div key={item.id} className="group relative">
              <div
                className="relative aspect-[3/4] overflow-hidden mb-8 shadow-2xl cursor-pointer"
                style={{ borderRadius: "0 4rem 0 4rem" }}
                onClick={() => openAsset(item)}
              >
                <img
                  src={
                    item.type === "video" ? item.thumbnail : item.images?.[0]
                  }
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 flex items-center gap-2 shadow-xl z-20">
                  {item.type === "video" ? (
                    <>
                      <HiOutlinePlay className="text-[#00459a]" />
                      <span className="text-[9px] font-black uppercase">
                        Play Tour
                      </span>
                    </>
                  ) : (
                    <>
                      <HiOutlineCamera className="text-[#C5A059]" />
                      <span className="text-[9px] font-black uppercase">
                        {item.images?.length || 0} Views
                      </span>
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-[#002349]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-30">
                  <div className="bg-[#C5A059] text-white px-8 py-4 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-2xl">
                    Explore Asset <HiOutlineCamera className="text-lg" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#002349] to-transparent pointer-events-none text-left z-40">
                  <div className="flex items-center gap-2 text-white/70 mb-2">
                    <HiOutlineMapPin className="text-[#C5A059] text-sm" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      {item.location}
                    </span>
                  </div>
                  <h3 className={`${playfair.className} text-3xl text-white`}>
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-2 text-left">
                <div className="flex flex-wrap gap-3 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold text-slate-400 border-b border-slate-100 pb-1 uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[14px] text-slate-400 mb-8 line-clamp-2 italic leading-relaxed">
                  "{item.desc}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <span className="text-[9px] font-black text-[#C5A059] uppercase block mb-1 tracking-[0.2em]">
                      Listing Price
                    </span>
                    <span className="text-2xl font-bold text-[#00459a] tracking-tight">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsapp(item.id, item.title);
                      }}
                      className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center text-white hover:bg-[#00459a] transition-all shadow-lg"
                    >
                      <FaWhatsapp size={22} />
                    </button>
                    <a
                      href={`tel:${CONTACT_INFO.phones[0]}`}
                      className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center text-[#002349] hover:bg-[#002349] hover:text-white transition-all"
                    >
                      <HiOutlinePhone size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMPLIANCE */}
        <div
          className="mt-32 p-10 md:p-16 bg-[#f8fafc] flex flex-col lg:flex-row items-center justify-between gap-12 border border-slate-100"
          style={{ borderRadius: "0 5rem 0 5rem" }}
        >
          <div className="flex items-start gap-8 max-w-xl text-left">
            <div className="w-20 h-20 bg-white shadow-xl flex items-center justify-center shrink-0 rounded-sm">
              <HiOutlineShieldCheck className="text-4xl text-[#C5A059]" />
            </div>
            <div>
              <h4 className={`${playfair.className} text-3xl mb-3`}>
                Private Treaty & Inspection
              </h4>
              <p className="text-[11px] text-slate-400 leading-loose uppercase font-black tracking-wider">
                Official Agency Protocol: A standard{" "}
                <span className="text-[#00459a]">
                  5% Professional Facilitator Fee
                </span>{" "}
                applies to all successful acquisitions.
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, "_blank")
            }
            className="w-full lg:w-auto px-12 py-6 bg-[#002349] text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#C5A059] transition-all shadow-2xl"
          >
            Contact Principal Office
          </button>
        </div>
      </div>

      {/* MODAL SECTION */}
      <AnimatePresence>
        {activeAsset && (
          <motion.div
            key="property-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-start md:items-center justify-center z-[999999] bg-[#001833]/98 overflow-y-auto"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <button
              onClick={() => setActiveAsset(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-[#C5A059] p-3 md:p-4 bg-white/10 rounded-full transition-all z-[1000001]"
            >
              <HiXMark size={28} className="md:w-10 md:h-10" />
            </button>

            <div className="w-full max-w-6xl min-h-full flex flex-col items-center justify-center p-6 md:p-12">
              <div className="relative w-full flex flex-col items-center justify-center">
                {activeAsset.type === "video" ? (
                  <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                    <video
                      src={activeAsset.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="relative w-full flex items-center justify-center">
                    <motion.img
                      key={currentImgIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      src={activeAsset.images[currentImgIdx]}
                      className="max-h-[50vh] md:max-h-[75vh] w-auto object-contain shadow-2xl rounded-sm"
                    />
                    {activeAsset.images.length > 1 && (
                      <div className="absolute inset-y-0 w-full flex justify-between items-center pointer-events-none px-2 md:px-0">
                        <button
                          className="pointer-events-auto p-2 md:p-4 text-white/40 hover:text-[#C5A059] transition-colors bg-black/20 md:bg-transparent rounded-full"
                          onClick={() =>
                            setCurrentImgIdx((p) =>
                              p === 0 ? activeAsset.images.length - 1 : p - 1,
                            )
                          }
                        >
                          <HiChevronLeft
                            size={30}
                            className="md:w-16 md:h-16"
                          />
                        </button>
                        <button
                          className="pointer-events-auto p-2 md:p-4 text-white/40 hover:text-[#C5A059] transition-colors bg-black/20 md:bg-transparent rounded-full"
                          onClick={() =>
                            setCurrentImgIdx((p) =>
                              p === activeAsset.images.length - 1 ? 0 : p + 1,
                            )
                          }
                        >
                          <HiChevronRight
                            size={30}
                            className="md:w-16 md:h-16"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {!activeAsset.videoUrl && activeAsset.images.length > 1 && (
                  <span className="text-white/40 text-[10px] mt-4 font-bold tracking-widest md:hidden">
                    {currentImgIdx + 1} / {activeAsset.images.length}
                  </span>
                )}
              </div>

              <div className="mt-8 md:mt-12 text-center w-full max-w-2xl">
                <span className="text-[#C5A059] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                  Reference: {activeAsset.id}
                </span>
                <h2
                  className={`${playfair.className} text-2xl md:text-5xl text-white mb-2`}
                >
                  {activeAsset.title}
                </h2>
                <p className="text-white/60 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8">
                  {activeAsset.location} • {activeAsset.price}
                </p>
                <button
                  onClick={() =>
                    handleWhatsapp(activeAsset.id, activeAsset.title)
                  }
                  className="w-full md:w-auto bg-[#C5A059] text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 mx-auto hover:bg-white hover:text-[#002349] transition-all"
                >
                  Direct Inquiry <FaWhatsapp size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
