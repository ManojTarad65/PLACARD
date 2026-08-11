"use client";

import { motion } from "framer-motion";

export default function LeadershipMessage() {
  return (
    <section className="relative w-full bg-black py-32 md:py-48 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-12 relative z-10">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="material-symbols-outlined text-white/20 text-6xl md:text-8xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </motion.span>
        
        <motion.blockquote 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 leading-[1.1] tracking-tighter"
        >
          "In the electrical manufacturing industry, there is no margin for error. We don't just build switches; we build the unseen nervous system of modern infrastructure. Reliability isn't a feature—it's our foundational requirement."
        </motion.blockquote>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-2 mt-8"
        >
          <span className="font-body-lg text-xl md:text-2xl text-white tracking-wide">Elias Vance</span>
          <span className="font-label-caps text-[11px] tracking-[0.3em] text-primary uppercase font-bold">Chief Engineer &amp; CEO</span>
        </motion.div>
      </div>
    </section>
  );
}
