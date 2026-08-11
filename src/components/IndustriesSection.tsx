"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    id: "energy",
    name: "ENERGY",
    description: "High-voltage distribution and control systems for power plants, renewable energy grids, and substations.",
    image: "/images/switchgear/hero.png" // using available images as placeholders
  },
  {
    id: "manufacturing",
    name: "MANUFACTURING",
    description: "Robust motor control centers and automation panels built to withstand harsh factory environments.",
    image: "/images/hero_bg.png"
  },
  {
    id: "infrastructure",
    name: "INFRASTRUCTURE",
    description: "Reliable power management for critical infrastructure including airports, hospitals, and railways.",
    image: "/images/switchgear/mv-switchgear.png"
  },
  {
    id: "automation",
    name: "AUTOMATION",
    description: "Intelligent control systems and IoT-enabled monitoring for modern automated facilities.",
    image: "/images/products/smart-switch/ismart.png"
  }
];

export default function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image
            src={industries[activeIdx].image}
            alt={industries[activeIdx].name}
            fill
            className="object-cover opacity-30"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10"></div>
          
          {/* Subtle gradient overlay to blend into the dark theme */}
          <div className="absolute bottom-0 left-[-10%] w-[120%] h-[70vh] bg-[radial-gradient(ellipse_at_bottom,rgba(215,25,32,0.15)_0%,transparent_70%)] z-10 mix-blend-screen transform-gpu pointer-events-none"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex-grow flex flex-col pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full h-full">
        
        <div className="mb-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white"
          >
            ENGINEERED FOR <br/>
            <span className="text-white/40">DEMANDING INDUSTRIES.</span>
          </motion.h2>
        </div>

        {/* Interactive Industry List & Description */}
        <div className="mt-16 flex flex-col lg:flex-row justify-between items-end gap-16">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {industries.map((ind, idx) => (
              <div 
                key={ind.id}
                onMouseEnter={() => setActiveIdx(idx)}
                className="group cursor-pointer flex items-center border-b border-white/10 pb-4 relative overflow-hidden"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-primary-container transition-transform duration-500 origin-bottom ${activeIdx === idx ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'}`}></div>
                <h3 className={`font-black text-3xl md:text-5xl uppercase tracking-tighter transition-all duration-300 pl-6 ${activeIdx === idx ? 'text-white translate-x-2' : 'text-white/30 group-hover:text-white/60'}`}>
                  {ind.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 h-[150px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-md"
              >
                <span className="font-label-caps text-xs tracking-widest text-primary-container uppercase block mb-4">
                  {industries[activeIdx].name} Sector
                </span>
                <p className="font-body-lg text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  {industries[activeIdx].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
