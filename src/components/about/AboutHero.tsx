"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[70svh] flex flex-col justify-end bg-black overflow-hidden border-b border-white/5 pb-24 pt-48">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-black pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] transform-gpu blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.05)_0%,transparent_60%)] transform-gpu blur-[100px]"></div>
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen transform-gpu" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="flex flex-col max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 border border-white/10 px-4 py-2 rounded-full glass self-start mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-pulse"></span>
            <span className="font-label-caps text-[11px] text-white/70 tracking-[0.2em] font-semibold uppercase">ABOUT PLACARD</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] uppercase tracking-tighter text-white leading-[0.95] mb-8"
          >
            ENGINEERED FOR <br/>
            <span className="text-white/30">EXCELLENCE.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-lg text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-light border-l-2 border-white/20 pl-6"
          >
            For over two decades, Placard Electric has defined the standard in high-performance electrical components. We merge industrial resilience with modern precision to build infrastructure you can trust.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
