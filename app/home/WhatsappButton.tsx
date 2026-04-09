"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after a small delay for premium entrance
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "2347063690379"; // Replace with actual owner number
  const message =
    "Hello, I am interested in one of your Prime Assets in Abuja. Can we schedule a private consultation?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4"
        >
          {/* TOOLTIP GREETING */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="hidden md:flex bg-white/90 backdrop-blur-md border border-slate-100 px-5 py-3 shadow-xl rounded-2xl items-center gap-3"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
              <div className="w-2 h-2 bg-emerald-500 rounded-full relative" />
            </div>
            <span
              className={`${montserrat.className} text-[10px] font-black text-[#002349] uppercase tracking-widest`}
            >
              Consult the Principal
            </span>
          </motion.div> */}

          {/* THE BUTTON */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            {/* Pulsing Background Ring */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity" />

            {/* Main Icon Circle */}
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
              <FaWhatsapp className="text-3xl lg:text-4xl" />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
