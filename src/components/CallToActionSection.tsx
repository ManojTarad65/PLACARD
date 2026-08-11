"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CallToActionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scaleParallax = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-32 border-t border-transparent">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle technical grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen transform-gpu" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        ></div>
        
        {/* Scrolling background elements */}
        <motion.div style={{ y: yParallax, willChange: 'transform' }} className="absolute inset-0">
          {/* Glowing red path 1 */}
          <motion.div 
            className="absolute top-[20%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] transform-gpu"
            animate={{ opacity: [0, 0.8, 0], x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          {/* Glowing red path 2 */}
          <motion.div 
            className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent transform-gpu"
            animate={{ opacity: [0, 0.6, 0], x: ['100%', '-100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
          ></motion.div>
          {/* Vertical path */}
          <motion.div 
            className="absolute top-0 left-[30%] w-[2px] h-full bg-gradient-to-b from-transparent via-primary/80 to-transparent blur-[1px] transform-gpu"
            animate={{ opacity: [0, 0.7, 0], y: ['-100%', '100%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
          ></motion.div>
        </motion.div>

        {/* Central Radial Glow responding to scroll */}
        <motion.div 
          style={{ opacity: glowOpacity, scale: scaleParallax, willChange: 'transform, opacity' }}
          className="absolute top-[0%] left-[0%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] mix-blend-screen pointer-events-none transform-gpu blur-[60px]"
        ></motion.div>
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-10 pointer-events-none transform-gpu"></div>
      </div>

      <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 glass-card"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          <span className="material-symbols-outlined text-primary shadow-[0_0_10px_rgba(255,255,255,0.8)]">power_settings_new</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tighter text-white mb-8"
        >
          READY TO <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            UPGRADE
          </span> <br/>YOUR <br className="sm:hidden" />
          INFRASTRUCTURE?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-body-lg text-lg md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Talk to our engineering team about the right electrical solution for your next project.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link href="/contact-us" className="group relative inline-flex items-center justify-center bg-white text-black px-12 py-6 font-label-caps tracking-[0.2em] uppercase font-bold overflow-hidden hover:text-white transition-colors duration-500">
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
            
            <div className="relative z-10 flex items-center gap-4">
              <span>CONTACT SALES TEAM</span>
              <span className="material-symbols-outlined transition-transform duration-500 group-hover:translate-x-2" style={{ fontSize: "20px" }}>
                east
              </span>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
