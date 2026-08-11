"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSnapshotSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-[#0D0D0D] relative z-10 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase border-l-[3px] border-primary-container pl-5 mb-8 tracking-tight">
              Engineering the Future of Power
            </h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                At PLACARD, we don&apos;t just build electrical components. We engineer precision systems designed to handle the most demanding industrial loads and critical infrastructure projects across the globe.
              </p>
              <p>
                Founded on the principles of uncompromising safety and extreme durability, our architecture ensures absolute stability in environments where failure is not an option. From smart automated residential grids to heavy-duty industrial switchgears.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/about" className="inline-flex items-center gap-3 bg-white text-black font-label-caps text-label-caps uppercase px-8 py-4 rounded-[12px] hover:bg-gray-200 transition-all duration-300 shadow-lg group">
                Discover Our Story
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-[500px] rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.08)] group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60 z-10"></div>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxH5GxLOuHgrveWYpc8vlgCR03iQTJ9Bl6QFR5O0JtKiYaHLpmB3k4leGVtxR5spr1AS9Vua3jTk8nTQRt5MXiSqkf_GuyKDelLtci5CBY46etbouBnMvCJRCXkXm5seFRJu3dpQCg0HRBBLwCzvGIyjg1pwGLDmEh9mJVnoZsZTSWXOEx6O0VHoUeIL13fURyP75X8VJsxTB3rqsHfCiF-sVFOpZoEeRbUYgcFABVVAMRffta-9fH2Q" 
              alt="Placard Engineering"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale hover:grayscale-0"
              unoptimized
            />
            
            <div className="absolute bottom-8 left-8 z-20 font-label-caps text-label-caps uppercase text-white tracking-widest bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              Est. 1998
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
