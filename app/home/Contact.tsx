"use client";

import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const CONTACT_INFO = {
  whatsapp: "2347063690379",
  phones: ["07063690379", "08114984507", "07017011141"],
  email: "inquiry@onwerealtors.com",
  address: "#47 Lake Chad Crescent off IBB Way Maitama Main, Abuja-FCT",
};

export function ContactSection() {
  const handleWhatsapp = () => {
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello Onwe Realtors, I would like to schedule a private consultation regarding an asset.`,
      "_blank",
    );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-40 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXT CONTENT */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block bg-[#002349]/5 px-4 py-2 mb-4 md:mb-6 rounded-sm border-l-4 border-[#C5A059]"
            >
              <span
                className={`${montserrat.className} text-[#002349] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]`}
              >
                Private Consultation
              </span>
            </motion.div>

            <h2
              className={`${playfair.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#002349] leading-[1.1] md:leading-[0.95] mb-8 md:mb-12`}
            >
              Begin Your <br />
              <span className="text-[#C5A059] italic drop-shadow-sm">
                Acquisition.
              </span>
            </h2>

            {/* CONTACT INFO PILLS */}
            <div className="space-y-6 md:space-y-10">
              <div
                className="flex items-center gap-4 md:gap-6 group cursor-pointer"
                onClick={() => window.open(`tel:${CONTACT_INFO.phones[0]}`)}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                  <HiOutlinePhone className="text-[#C5A059] group-hover:text-white text-xl md:text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${montserrat.className} text-[10px] text-slate-400 font-bold uppercase tracking-widest`}
                  >
                    Direct Line
                  </span>
                  <span
                    className={`${montserrat.className} text-xs md:text-sm font-black text-[#002349] tracking-widest`}
                  >
                    +234 {CONTACT_INFO.phones[0].slice(1)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                  <HiOutlineEnvelope className="text-[#C5A059] group-hover:text-white text-xl md:text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${montserrat.className} text-[10px] text-slate-400 font-bold uppercase tracking-widest`}
                  >
                    Official Email
                  </span>
                  <span
                    className={`${montserrat.className} text-xs md:text-sm font-black text-[#002349] tracking-widest uppercase`}
                  >
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                  <HiOutlineMapPin className="text-[#C5A059] group-hover:text-white text-xl md:text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${montserrat.className} text-[10px] text-slate-400 font-bold uppercase tracking-widest`}
                  >
                    Principal Office
                  </span>
                  <span
                    className={`${montserrat.className} text-xs md:text-sm font-black text-[#002349] tracking-widest uppercase leading-relaxed max-w-xs`}
                  >
                    {CONTACT_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* LUXURY FORM */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] p-8 md:p-12 lg:p-20 border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,35,73,0.1)]"
            style={{ borderRadius: "0 5rem 0 5rem" }}
          >
            <div className="mb-10">
              <h3
                className={`${playfair.className} text-2xl text-[#002349] mb-2`}
              >
                Expression of Interest
              </h3>
              <p
                className={`${montserrat.className} text-[9px] font-bold text-slate-400 uppercase tracking-widest`}
              >
                Complete the form for a discreet callback
              </p>
            </div>

            <form className="space-y-6 md:space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder="FULL NAME"
                  className="w-full bg-transparent border-b border-slate-300 py-3 md:py-4 text-[11px] md:text-[12px] font-black tracking-[0.2em] text-[#002349] outline-none focus:border-[#C5A059] transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-slate-300 py-3 md:py-4 text-[11px] md:text-[12px] font-black tracking-[0.2em] text-[#002349] outline-none focus:border-[#C5A059] transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="relative group">
                <textarea
                  placeholder="ASSET OF INTEREST OR INQUIRY"
                  rows={3}
                  className="w-full bg-transparent border-b border-slate-300 py-3 md:py-4 text-[11px] md:text-[12px] font-black tracking-[0.2em] text-[#002349] outline-none focus:border-[#C5A059] transition-all resize-none placeholder:text-slate-400"
                />
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <button className="w-full bg-[#002349] text-white py-6 text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#C5A059] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  Submit Acquisition Request
                </button>

                <button
                  type="button"
                  onClick={handleWhatsapp}
                  className="w-full border border-[#C5A059] text-[#C5A059] py-5 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#C5A059] hover:text-white transition-all duration-500"
                >
                  Quick Chat on WhatsApp{" "}
                  <HiOutlineChatBubbleLeftRight size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
