"use client";

import { motion } from "framer-motion";

const clients = [
  "BOSCH", "SIEMENS", "GENERAL ELECTRIC", "SCHNEIDER", 
  "ABB", "ROCKWELL", "HONEYWELL", "EMERSON"
];

export default function ClientMarqueeSection() {
  return (
    <section className="py-12 bg-white border-b border-black/5 overflow-hidden flex flex-col justify-center items-center">
      <p className="font-label-caps text-label-caps text-gray-500 uppercase tracking-widest mb-6 px-4 text-center">
        Trusted by industry leaders globally
      </p>
      
      <div className="relative w-full max-w-container-max mx-auto overflow-hidden">
        {/* Gradient fades for the edges to make the scrolling smooth */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-fit">
          <motion.div
            className="flex whitespace-nowrap gap-16 px-8 items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {/* Repeat the array twice to create a seamless loop */}
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div 
                key={i} 
                className="text-2xl md:text-3xl font-black text-gray-300 uppercase tracking-tighter hover:text-black transition-colors duration-300 select-none cursor-default"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
