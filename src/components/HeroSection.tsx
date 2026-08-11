"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Scroll parallax for the entire hero section
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const rightSideScale = useTransform(scrollY, [0, 500], [1, 1.05]);

  // Mouse Parallax for the right side
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Transforms for different layers to create depth
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
  
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate normalized mouse coordinates (-0.5 to 0.5)
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Staggered reveal for the left column
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100svh] flex flex-col justify-end bg-background overflow-hidden selection:bg-white selection:text-black"
    >
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-background pointer-events-none overflow-hidden">
        {/* Deep red/crimson ambient glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.08)_0%,transparent_60%)] transform-gpu blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_60%)] transform-gpu blur-[100px]"></div>
        
        {/* Subtle dot matrix grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen transform-gpu" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        ></div>
      </div>

      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow flex flex-col lg:flex-row items-center pt-32 pb-16 lg:pb-32 gap-12 lg:gap-8"
      >
        
        {/* LEFT SIDE: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="w-full lg:w-[50%] flex flex-col items-start z-20 order-2 lg:order-1"
        >
          
          <motion.div variants={itemVariants} className="mb-6 lg:mb-10 inline-flex items-center gap-4 glass px-4 py-2 rounded-full border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-caps text-[11px] tracking-[0.2em] text-text-muted uppercase font-semibold">The Future of Power Architecture</span>
          </motion.div>

          <h1 className="select-none font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] uppercase leading-[0.95] tracking-tighter text-on-background mb-8 flex flex-col items-start">
            <div className="overflow-hidden pb-2"><motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">NEXT-GEN</motion.span></div>
            <div className="overflow-hidden pb-2">
              <motion.span variants={itemVariants} className="block text-primary drop-shadow-[0_0_30px_rgba(225,29,72,0.3)]">
                PRECISION
              </motion.span>
            </div>
            <div className="overflow-hidden"><motion.span variants={itemVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40">SOLUTIONS.</motion.span></div>
          </h1>
          
          <motion.p variants={itemVariants} className="font-body-lg text-lg md:text-xl text-text-muted mb-12 max-w-[480px] leading-relaxed font-light">
            Defining the standard in high-performance electrical components. Merging unyielding industrial resilience with unprecedented precision and control.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mt-4 w-full sm:w-auto">
            {/* Primary Sharp CTA */}
            <Link href="#solutions" className="group relative inline-flex items-center justify-center bg-primary text-black px-8 py-4 w-full sm:w-auto overflow-hidden rounded-sm transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <div className="absolute inset-0 bg-black/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
              
              <div className="relative z-10 flex items-center gap-3">
                <span className="font-label-caps text-xs tracking-[0.2em] uppercase font-bold">DISCOVER PLATFORMS</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-500 group-hover:translate-x-2">
                  east
                </span>
              </div>
            </Link>
            
            {/* Secondary Minimal CTA */}
            <Link href="#explore" className="group relative inline-flex items-center justify-center bg-transparent text-white px-6 py-4 w-full sm:w-auto overflow-hidden border border-white/10 rounded-sm glass-card">
              <div className="relative z-10 flex items-center gap-3">
                <span className="font-label-caps text-xs tracking-[0.2em] uppercase font-medium group-hover:text-primary transition-colors duration-300">TECH SPECS</span>
                <motion.span 
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="material-symbols-outlined text-white/50 group-hover:text-primary text-[16px] transition-colors" 
                >
                  south
                </motion.span>
              </div>
            </Link>
          </motion.div>

        </motion.div>


        {/* RIGHT SIDE: Product Visual Showcase */}
        <motion.div 
          style={{ scale: rightSideScale, willChange: "transform" }}
          className="w-full lg:w-[50%] h-[40vh] min-h-[350px] sm:min-h-[450px] lg:h-[75vh] lg:min-h-[600px] relative z-10 order-1 lg:order-2 flex items-center justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-full h-full max-w-[800px] max-h-[800px] flex items-center justify-center"
          >
            {/* Intense Backlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none transform-gpu mix-blend-screen"></div>
            
            {/* The Main Product Image */}
            <motion.div style={{ x: layer1X, y: layer1Y }} className="relative w-[100%] h-[100%] transform-gpu z-10">
              <Image 
                src="/images/products/switchgear.png" 
                alt="Placard Industrial Switchgear"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1] filter contrast-125 brightness-90"
                unoptimized
                priority
              />
            </motion.div>
            
            {/* Floating Spec Callout 1 */}
            <motion.div 
              style={{ x: layer2X, y: layer2Y }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 sm:top-[20%] right-0 sm:right-[-5%] lg:right-[5%] z-20 glass-panel px-4 sm:px-5 py-3 sm:py-4 rounded-xl flex flex-col w-[160px] sm:w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(225,29,72,0.8)]"></div>
                <span className="font-label-caps text-[10px] text-primary tracking-[0.2em]">NXT SERIES</span>
              </div>
              <span className="font-headline-sm text-[15px] text-white font-bold uppercase tracking-wider leading-tight">33kV High Voltage Capacity</span>
              <div className="mt-3 h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
            
            {/* Floating Spec Callout 2 */}
            <motion.div 
              style={{ x: layer3X, y: layer3Y }}
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 sm:bottom-[15%] left-0 sm:left-[-5%] lg:left-[5%] z-20 glass-panel px-4 sm:px-5 py-3 sm:py-4 rounded-xl flex flex-col w-[150px] sm:w-[180px]"
            >
               <span className="font-label-caps text-[10px] text-text-muted tracking-[0.2em] mb-1">INTEGRATION</span>
               <span className="font-headline-sm text-[15px] text-white font-bold uppercase tracking-wider">IoT Smart Grid Ready</span>
               <div className="mt-2 flex gap-1">
                 {[1,2,3,4].map((i) => (
                   <motion.div 
                     key={i}
                     animate={{ opacity: [0.3, 1, 0.3] }}
                     transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                     className="w-1 h-3 bg-secondary rounded-sm"
                   />
                 ))}
               </div>
            </motion.div>
            
          </motion.div>
        </motion.div>

      </motion.div>

      {/* BOTTOM STRIP: Technical Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full border-t border-white/5 bg-black/40 backdrop-blur-xl"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
            
            <div className="flex flex-col pl-0 md:pl-4">
              <span className="font-black text-3xl md:text-4xl text-white tracking-tighter mb-1">99.99%</span>
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-text-muted uppercase">UPTIME GUARANTEE</span>
            </div>
            
            <div className="flex flex-col pl-6 md:pl-8">
              <span className="font-black text-3xl md:text-4xl text-white tracking-tighter mb-1">15K+</span>
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-text-muted uppercase">ACTIVE DEPLOYMENTS</span>
            </div>
            
            <div className="flex flex-col pl-0 md:pl-8 col-span-2 md:col-span-1 border-t md:border-t-0 border-white/5 pt-6 md:pt-0 mt-2 md:mt-0">
              <span className="font-black text-3xl md:text-4xl text-white tracking-tighter mb-1"><span className="text-primary">&lt;</span>2ms</span>
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-text-muted uppercase">TRIP RESPONSE TIME</span>
            </div>

            <div className="flex flex-col pl-6 md:pl-8 col-span-2 md:col-span-1 border-t md:border-t-0 border-white/5 pt-6 md:pt-0 mt-2 md:mt-0">
              <span className="font-black text-3xl md:text-4xl text-white tracking-tighter mb-1">24/7</span>
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-primary uppercase drop-shadow-[0_0_10px_rgba(225,29,72,0.4)]">MISSION CONTROL</span>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}
