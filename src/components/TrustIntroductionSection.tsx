"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TrustIntroductionSection() {
  return (
    <section className="relative w-full bg-white py-32 md:py-48 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-black/5">
      {/* Decorative tech grid - Light Mode Edition */}
      <div className="absolute top-0 right-0 w-[80%] md:w-1/2 h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(90deg, #000000, #000000 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, #000000, #000000 1px, transparent 1px, transparent 40px)" }}>
        {/* Fading gradient for the grid */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
      </div>
      
      {/* Subtle ambient light */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] blur-[100px] pointer-events-none"></div>

      <div className="max-w-container-max mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          
          {/* Left: Large Statement */}
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 border border-black/10 px-4 py-2 rounded-full bg-gray-50 self-start mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.5)] animate-pulse"></span>
              <span className="font-label-caps text-[11px] text-black/70 tracking-[0.2em] font-semibold uppercase">THE ARCHITECTS OF POWER</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase tracking-tighter text-black leading-[0.95]"
            >
              MANUFACTURING <br/>
              <span className="text-black/40">UNCOMPROMISING</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">RELIABILITY.</span>
            </motion.h2>
          </div>
          
          {/* Right: Supporting Text & Labels */}
          <div className="lg:w-2/5 flex flex-col gap-10">
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-body-lg text-xl md:text-2xl text-black/60 leading-relaxed font-light"
            >
              We ensure absolute safety, seamless efficiency, and continuous operation in the world&apos;s most demanding industrial environments.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-black/10"
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="font-label-caps text-[11px] tracking-[0.2em] text-black/50 uppercase font-bold">CERTIFIED & COMPLIANT</span>
                <div className="flex flex-wrap gap-3 font-label-caps text-[10px] tracking-widest text-black/80">
                  <span className="px-3 py-1.5 border border-black/10 bg-gray-50 rounded-sm">ISO 9001:2015</span>
                  <span className="px-3 py-1.5 border border-black/10 bg-gray-50 rounded-sm">UL COMPLIANT</span>
                  <span className="px-3 py-1.5 border border-black/10 bg-gray-50 rounded-sm">CE CERTIFIED</span>
                </div>
              </div>
              
              <Link href="/about" className="group inline-flex items-center gap-3 font-label-caps text-xs tracking-[0.2em] text-black uppercase font-bold hover:text-black/60 transition-colors">
                EXPLORE OUR LEGACY
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-2">
                  east
                </span>
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
