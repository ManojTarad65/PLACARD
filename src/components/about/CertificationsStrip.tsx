"use client";

import { motion } from "framer-motion";

export default function CertificationsStrip() {
  return (
    <section className="bg-white border-b border-black/5 py-12 w-full overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="font-label-caps text-[11px] tracking-[0.2em] text-black/40 uppercase font-bold whitespace-nowrap"
        >
          CERTIFIED &amp; COMPLIANT
        </motion.span>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center md:justify-end gap-6 w-full"
        >
          <div className="flex items-center gap-2 border border-black/10 px-6 py-3 rounded-full bg-gray-50/50 hover:bg-gray-50 hover:border-black/20 transition-colors">
            <span className="material-symbols-outlined text-black/70">verified</span>
            <span className="font-label-caps text-[10px] tracking-[0.1em] text-black/80 font-semibold">ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-2 border border-black/10 px-6 py-3 rounded-full bg-gray-50/50 hover:bg-gray-50 hover:border-black/20 transition-colors">
            <span className="material-symbols-outlined text-black/70">shield</span>
            <span className="font-label-caps text-[10px] tracking-[0.1em] text-black/80 font-semibold">UL COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2 border border-black/10 px-6 py-3 rounded-full bg-gray-50/50 hover:bg-gray-50 hover:border-black/20 transition-colors">
            <span className="material-symbols-outlined text-black/70">bolt</span>
            <span className="font-label-caps text-[10px] tracking-[0.1em] text-black/80 font-semibold">CE CERTIFIED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
