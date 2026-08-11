"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    id: "switches-accessories",
    title: "SWITCHES & ACCESSORIES",
    description: "Modern switch and accessory ranges crafted for everyday control, clean installation, and dependable operation across homes, offices, and industries.",
    link: "/products/switches-and-accessories",
    specs: ["Switches", "Sockets", "Plates & Frames"],
    image: "/images/products/nxt-series.png"
  },
  {
    id: "power-distribution",
    title: "POWER DISTRIBUTION",
    description: "Precision systems designed for unyielding industrial power management. Capable of handling extreme loads with zero thermal degradation.",
    link: "/products/switchgear",
    specs: ["Medium Voltage", "Low Voltage", "Custom Panels"],
    image: "/images/switchgear.png" // Fix: pointing to correct root product image
  },
  {
    id: "smart-switch",
    title: "SMART SWITCH",
    description: "Connected switch systems engineered for modern environments while maintaining exceptional architectural reliability and aesthetic integration.",
    link: "/products/smart-switch",
    specs: ["IoT Ready", "Automated Grid", "Touch Interface"],
    image: "/images/products/smart-switch.png"
  },
  {
    id: "cables",
    title: "ADVANCED CABLING",
    description: "High-performance transmission lines engineered for extreme industrial environments. Ensuring uninterrupted power delivery and shielding.",
    link: "/products/wires-and-cables",
    specs: ["Armored Shielding", "Thermal Control", "Up to 33kV"],
    image: "/images/products/wires.png" // Fix: pointing to correct root product image
  }
];

export default function ProductSolutionsSection() {

  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-b border-white/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 border border-white/10 px-4 py-2 rounded-full glass self-start mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          <span className="font-label-caps text-[11px] text-white/70 tracking-[0.2em] font-semibold uppercase">PLATFORM OVERVIEW</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white leading-none"
        >
          ENGINEERED FOR <br/>
          <span className="text-white/30">EVERY POWER CHALLENGE.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col border-y border-white/10 w-full bg-transparent">
        {solutions.map((solution, idx) => (
          <Link 
            key={solution.id} 
            href={solution.link}
            className="group relative flex flex-col md:flex-row items-stretch md:items-center border-b border-white/5 last:border-0 overflow-hidden hover:bg-white/[0.02] transition-colors duration-500"
          >
            {/* Background Hover Image & Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-700 ease-[0.16,1,0.3,1] pointer-events-none">
              <Image 
                src={solution.image} 
                alt={solution.title} 
                fill 
                className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out filter brightness-50" 
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            {/* Glowing Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-100 md:scale-y-0 md:group-hover:scale-y-100 origin-top transition-transform duration-500 z-20 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center py-12 md:py-16 px-margin-mobile md:px-margin-desktop transition-transform duration-500 group-hover:translate-x-4">
              
              {/* Title & Index */}
              <div className="md:w-5/12 flex items-start gap-4 mb-6 md:mb-0">
                <span className="font-label-caps text-xs text-primary font-bold mt-2">
                  0{idx + 1}
                </span>
                <h3 className="font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors duration-300">
                  {solution.title}
                </h3>
              </div>

              {/* Description & Specs */}
              <div className="md:w-5/12 pr-8 mb-6 md:mb-0">
                <p className="font-body-md text-white/40 group-hover:text-white/80 text-lg mb-4 transition-colors duration-300 font-light leading-relaxed">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-3 overflow-hidden max-h-[100px] opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-[100px] md:group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]">
                  {solution.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="font-label-caps text-[10px] tracking-[0.2em] uppercase border border-white/10 glass text-white/70 px-3 py-1.5 rounded-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              {/* Action */}
              <div className="md:w-2/12 flex md:justify-end items-center mt-4 md:mt-0 opacity-100 translate-x-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:-translate-x-4 md:group-hover:translate-x-0">
                <span className="font-label-caps text-[11px] tracking-[0.2em] text-primary uppercase font-bold flex items-center gap-2">
                  EXPLORE PLATFORM
                  <span className="material-symbols-outlined text-[16px]">east</span>
                </span>
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
