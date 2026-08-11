"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ from, to, duration, suffix = "", decimal = false }: { from: number, to: number, duration: number, suffix?: string, decimal?: boolean }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = from + (to - from) * ease;
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      {decimal ? count.toFixed(1) : Math.round(count)}{suffix}
    </span>
  );
}

export default function PerformanceMetricsSection() {
  return (
    <section className="relative w-full bg-black py-32 overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-[0%] left-[20%] w-[60%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none transform-gpu blur-[120px]"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        <div className="flex flex-col gap-24">
          
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <div className="flex flex-col">
              <div className="flex items-end">
                <Counter from={0} to={20} duration={2} suffix="+" />
              </div>
              <span className="font-label-caps text-[11px] tracking-[0.3em] text-primary uppercase mt-4 font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Years of Engineering Excellence</span>
            </div>
            <p className="font-body-lg text-white/50 max-w-sm text-right font-light leading-relaxed">
              For over two decades, Placard Systems has defined the standard in unyielding high-performance electrical architecture.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-b border-white/10 pb-12">
             <p className="font-body-lg text-white/50 max-w-sm text-left order-2 md:order-1 font-light leading-relaxed">
              Manufacturing facilities built on a foundation of rigorous process control and advanced automation.
            </p>
            <div className="flex flex-col items-end order-1 md:order-2 text-right w-full md:w-auto">
              <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                ISO 9001
              </span>
              <span className="font-label-caps text-[11px] tracking-[0.3em] text-primary uppercase mt-4 font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Quality Management Certified</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pb-12">
            <div className="flex flex-col">
              <span className="font-black text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                UL & CE
              </span>
              <span className="font-label-caps text-[11px] tracking-[0.3em] text-primary uppercase mt-4 font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Global Compliance Standards</span>
            </div>
            <p className="font-body-lg text-white/50 max-w-sm text-right font-light leading-relaxed">
              Our components undergo extreme thermal, kinetic, and voltage stress testing to ensure absolute reliability worldwide.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
