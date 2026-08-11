"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ScrollProductExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background and overall opacity
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Scene 1: Introduction
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const scene1Y = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  
  // Scene 2: Tech Specs
  const scene2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const scene2Y = useTransform(scrollYProgress, [0.2, 0.35, 0.6, 0.7], [100, 0, 0, -100]);
  
  // Scene 3: Energy Flow
  const scene3Opacity = useTransform(scrollYProgress, [0.65, 0.8, 0.95], [0, 1, 1]);
  const scene3Y = useTransform(scrollYProgress, [0.65, 0.8], [100, 0]);

  // Image Scale/Parallax
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Red Energy path length (SVG stroke-dashoffset)
  const pathLength = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-on-background">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Dynamic Background Image */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0"
        >
          <motion.div 
            style={{ scale: imageScale, y: imageY }}
            className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen"
          >
            <Image 
              src="/images/switchgear/hero.png" 
              alt="Engineering Interior" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>
          <div className="absolute inset-0 bg-on-background/80 backdrop-blur-sm z-10"></div>
          
          {/* Animated SVG Circuit Background */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="stroke-white/20 stroke-1 fill-none">
              <path d="M0 500 H300 L400 400 H600 L700 500 H1000" />
              <path d="M200 0 V300 L300 400" />
              <path d="M800 1000 V700 L700 600" />
            </svg>
            
            {/* Red Energy flowing through the circuit */}
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 stroke-primary-container stroke-[3px] fill-none mix-blend-screen transform-gpu">
              <motion.path 
                d="M0 500 H300 L400 400 H600 L700 500 H1000" 
                style={{ pathLength }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Text Scenes Container */}
        <div className="relative z-30 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center h-full">
          
          {/* Scene 1 */}
          <motion.div 
            style={{ opacity: scene1Opacity, y: scene1Y, pointerEvents: "none" }}
            className="absolute w-full max-w-3xl"
          >
            <h2 className="font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-surface leading-[0.9]">
              INDUSTRIAL GRADE <br/>
              <span className="text-primary-container">SWITCHGEAR.</span>
            </h2>
            <p className="mt-8 font-body-lg text-xl md:text-2xl text-surface/70 max-w-xl font-light">
              Precision engineered for the future of industrial power distribution. The Nxt Series defines rugged reliability with advanced IoT integration.
            </p>
          </motion.div>

          {/* Scene 2 */}
          <motion.div 
            style={{ opacity: scene2Opacity, y: scene2Y, pointerEvents: "none" }}
            className="absolute w-full right-margin-desktop flex justify-end"
          >
            <div className="max-w-xl text-right">
              <span className="font-label-caps text-sm tracking-[0.2em] text-primary-container font-bold mb-4 block uppercase">NXT Series Technical Specifications</span>
              <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tighter text-surface leading-none mb-6">
                BUILT FOR <br/>THE <span className="text-surface/40">EXTREMES.</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-4 text-left border-t border-surface/10 pt-8 mt-8">
                <div>
                  <span className="text-surface/50 font-label-caps text-[10px] tracking-widest uppercase block mb-1">Voltage</span>
                  <span className="text-surface font-body-lg text-lg">Up to 1000V AC</span>
                </div>
                <div>
                  <span className="text-surface/50 font-label-caps text-[10px] tracking-widest uppercase block mb-1">Amperage</span>
                  <span className="text-surface font-body-lg text-lg">800A - 2000A</span>
                </div>
                <div>
                  <span className="text-surface/50 font-label-caps text-[10px] tracking-widest uppercase block mb-1">Protection</span>
                  <span className="text-surface font-body-lg text-lg">NEMA 4X</span>
                </div>
                <div>
                  <span className="text-surface/50 font-label-caps text-[10px] tracking-widest uppercase block mb-1">Connectivity</span>
                  <span className="text-surface font-body-lg text-lg">IoT Ethernet/Wi-Fi</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scene 3 */}
          <motion.div 
            style={{ opacity: scene3Opacity, y: scene3Y, pointerEvents: "none" }}
            className="absolute w-full max-w-4xl left-1/2 -translate-x-1/2 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full border border-primary-container flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-primary-container/20 animate-ping"></div>
              <span className="material-symbols-outlined text-primary-container text-2xl">bolt</span>
            </div>
            <h2 className="font-black text-5xl md:text-7xl uppercase tracking-tighter text-surface leading-none">
              ABSOLUTE <br/>RELIABILITY.
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
