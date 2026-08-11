"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productImages = [
  "imgi_14_1.png", "imgi_15_2.png", "imgi_16_3.png", "imgi_17_4.png",
  "imgi_18_5.png", "imgi_19_6.png", "imgi_20_7.png", "imgi_21_8.png",
  "imgi_22_9.png", "imgi_23_10.png", "imgi_24_11.png", "imgi_25_12.png",
  "imgi_26_13.png", "imgi_27_14.png", "imgi_28_15.png", "imgi_29_16.png",
  "imgi_30_17.png", "imgi_31_18.png", "imgi_32_20.png", "imgi_33_21.png",
  "imgi_34_22.png", "imgi_35_23.png", "imgi_36_24.png", "imgi_37_25.png",
  "imgi_38_26.png", "imgi_39_27.png", "imgi_40_28.png", "imgi_41_29.png",
  "imgi_42_30.png", "imgi_43_31.png", "imgi_44_32.png", "imgi_45_33.png",
  "imgi_46_34.png", "imgi_47_35.png", "imgi_48_36.png", "imgi_49_37.png",
  "imgi_50_38.png", "imgi_51_39.png", "imgi_52_40.png", "imgi_53_41.png",
  "imgi_54_42.png", "imgi_55_43.png", "imgi_56_44.png", "imgi_57_45.png"
];

const allProducts = productImages.map((img, i) => ({
  id: i + 1,
  title: `Placard Series ${String.fromCharCode(65 + (i % 26))}${i + 1}`,
  description: "High-grade industrial electrical component engineered for maximum durability and precision.",
  image: `/images/products/other/${img}`,
  href: "#",
}));

export default function ProductSolutionsSection() {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, allProducts.length));
  };

  const hasMore = visibleCount < allProducts.length;

  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-20">
        
        {/* Header Area matching original ProductSolutionsSection */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 border border-white/10 px-4 py-2 rounded-full glass self-start mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            <span className="font-label-caps text-[11px] text-white/70 tracking-[0.2em] font-semibold uppercase">PLATFORM OVERVIEW</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white leading-none mb-6"
          >
            ESSENTIAL COMPONENTS. <br/>
            <span className="text-white/30">ENGINEERED TO LAST.</span>
          </motion.h2>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
             <p className="font-body-lg text-body-lg text-white/50 font-light leading-relaxed max-w-2xl">
              Explore our complete range of architectural-grade modular switches, robust metal gang boxes, and premium holders designed for clean installations and lifelong durability.
            </p>
            <div className="inline-flex items-center gap-3 text-white/70 font-label-caps text-[11px] tracking-[0.2em] uppercase">
              {allProducts.length} PRODUCTS AVAILABLE
            </div>
          </div>
        </div>

        {/* The 44-Image Masonry Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence>
            {allProducts.slice(0, visibleCount).map((product, index) => (
              <motion.div 
                key={product.image} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
                className="h-full"
              >
                <div 
                  className="flex flex-col h-full bg-[#080808] border border-white/5 p-5 rounded-2xl relative overflow-hidden"
                >
                  <div className="relative w-full h-48 mb-8 rounded-xl overflow-hidden bg-[#0F0F0F] flex items-center justify-center p-4">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      className="object-contain p-4 filter brightness-90 contrast-125 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                      unoptimized
                    />
                  </div>
                  
                  <div className="px-2 flex-grow flex flex-col relative z-20">
                    <h3 className="font-headline-sm text-lg font-bold text-white mb-3 tracking-tight">
                      {product.title}
                    </h3>
                    
                    <p className="font-body-md text-sm text-white/40 mb-2 flex-grow font-light">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="mt-16 flex justify-center w-full relative z-20">
            <button 
              onClick={loadMore}
              className="group relative inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-8 py-4 w-full sm:w-auto overflow-hidden rounded-full transition-all hover:bg-white hover:text-black cursor-pointer"
            >
              <div className="relative z-10 flex items-center gap-3">
                <span className="font-label-caps text-xs tracking-[0.2em] uppercase font-bold">LOAD MORE PRODUCTS</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-500 group-hover:translate-y-1">
                  keyboard_arrow_down
                </span>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
