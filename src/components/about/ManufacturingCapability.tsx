"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ManufacturingCapability() {
  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-white/5">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-white/50 uppercase font-bold border border-white/10 px-4 py-2 rounded-full self-start">
              FACILITIES
            </span>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
              PRECISION <br/>
              <span className="text-white/30">INFRASTRUCTURE.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 max-w-md font-body-lg text-lg font-light leading-relaxed"
          >
            Our manufacturing facilities are built on a foundation of rigorous process control and advanced automation, ensuring every unit meets exact specifications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0A0A0A] border border-white/5 p-8 flex flex-col gap-6 hover:border-white/20 transition-all duration-500 rounded-2xl group"
          >
            <div className="w-full h-48 rounded-xl overflow-hidden bg-black relative">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Automated Assembly"
                fill
                className="object-cover opacity-50 mix-blend-luminosity group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                unoptimized
              />
            </div>
            <h3 className="font-black text-2xl text-white uppercase tracking-tight">Automated Assembly</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Robotic assembly lines capable of sub-millimeter precision, reducing variance and ensuring absolute consistency across high-volume production runs.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A0A0A] border border-white/5 p-8 flex flex-col gap-6 hover:border-white/20 transition-all duration-500 rounded-2xl group"
          >
            <div className="w-full h-48 rounded-xl overflow-hidden bg-black relative">
              <Image
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
                alt="Quality Testing Lab"
                fill
                className="object-cover opacity-50 mix-blend-luminosity group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                unoptimized
              />
            </div>
            <h3 className="font-black text-2xl text-white uppercase tracking-tight">Quality Testing Lab</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              In-house thermal, kinetic, and voltage stress testing environments that simulate conditions far exceeding standard operational parameters.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0A0A0A] border border-white/5 p-8 flex flex-col gap-6 hover:border-white/20 transition-all duration-500 rounded-2xl group"
          >
            <div className="w-full h-48 rounded-xl overflow-hidden bg-black relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                alt="R&D Center"
                fill
                className="object-cover opacity-50 mix-blend-luminosity group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                unoptimized
              />
            </div>
            <h3 className="font-black text-2xl text-white uppercase tracking-tight">R&amp;D Center</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Dedicated engineering teams focused on material science advancements and IoT integration for next-generation smart switchgear.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
