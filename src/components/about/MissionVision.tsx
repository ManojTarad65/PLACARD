"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-black/5">
      <div className="max-w-container-max mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="font-label-caps text-[11px] tracking-[0.2em] text-black/40 uppercase font-bold border border-black/10 px-4 py-2 rounded-full">
                01 — OUR MISSION
              </span>
            </div>
            
            <h2 className="font-black text-4xl sm:text-5xl uppercase tracking-tighter text-black leading-none mb-6">
              MANUFACTURING <br/>
              <span className="text-black/30">ABSOLUTE SAFETY.</span>
            </h2>
            
            <p className="font-body-lg text-lg text-black/60 leading-relaxed font-light max-w-md">
              To manufacture uncompromising electrical solutions that ensure safety, efficiency, and continuous operation in the world's most demanding industrial and commercial environments.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="font-label-caps text-[11px] tracking-[0.2em] text-black/40 uppercase font-bold border border-black/10 px-4 py-2 rounded-full">
                02 — OUR VISION
              </span>
            </div>
            
            <h2 className="font-black text-4xl sm:text-5xl uppercase tracking-tighter text-black leading-none mb-6">
              ARCHITECTING <br/>
              <span className="text-black/30">SMART INFRASTRUCTURE.</span>
            </h2>
            
            <p className="font-body-lg text-lg text-black/60 leading-relaxed font-light max-w-md">
              To integrate intelligent diagnostics into industrial-grade hardware, making every circuit visible, manageable, and secure for the next generation of smart cities.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
