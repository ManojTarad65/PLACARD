"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    title: "Switches & Accessories",
    description: "Modular switches, sockets, plates, and control accessories for modern homes, offices, and industries.",
    image: "/images/products/nxt-series.png",
    href: "/products/switches-and-accessories",
  },
  {
    title: "Smart Switch",
    description: "Intelligent switching solutions for connected residential and commercial environments.",
    image: "/images/products/smart-switch.png",
    href: "/products/smart-switch",
  },
  {
    title: "NXT Series Switches",
    description: "Premium architectural switches engineered for durability and aesthetic excellence.",
    image: "/images/products/nxt-series.png",
    href: "/products/nxt-series",
  },
  {
    title: "Wires & Cables",
    description: "High-grade wires and cables built for stable transmission, safety, and long service life.",
    image: "/images/products/wires.png",
    href: "/products/wires-and-cables",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ProductCategoriesSection() {
  return (
    <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-white relative z-10 border-b border-black/5">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-black uppercase border-l-[3px] border-black pl-6 mb-6">
              Platform Architecture
            </h2>
            <p className="font-body-lg text-body-lg text-black/60 font-light leading-relaxed">
              Explore our comprehensive range of electrical solutions designed for unyielding precision, reliability, and next-gen aesthetic integration.
            </p>
          </div>
          <Link href="#" className="inline-flex items-center gap-3 text-black/60 font-label-caps text-[11px] tracking-[0.2em] uppercase hover:text-black transition-colors group">
            VIEW FULL CATALOGUE
            <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-2 transition-transform">east</span>
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Link 
                href={category.href}
                className="flex flex-col h-full bg-white border border-black/5 hover:border-black/10 hover:shadow-xl p-5 group rounded-2xl relative overflow-hidden transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-black/0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none z-10"></div>
                
                {/* Image Section */}
                <div className="relative w-full h-56 mb-8 rounded-xl overflow-hidden bg-gray-50 border border-black/5 flex items-center justify-center p-4">
                  <Image 
                    src={category.image} 
                    alt={category.title}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-1000 ease-[0.16,1,0.3,1] filter brightness-90 contrast-125 group-hover:brightness-110"
                  />
                  {/* Subtle gradient overlay to blend image into the card */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>
                
                <div className="px-2 flex-grow flex flex-col relative z-20">
                  <h3 className="font-headline-sm text-lg font-bold text-black mb-3 group-hover:text-black/70 transition-colors tracking-tight">
                    {category.title}
                  </h3>
                  
                  <p className="font-body-md text-sm text-black/50 mb-8 group-hover:text-black/80 transition-colors flex-grow font-light">
                    {category.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-black md:text-black/40 font-label-caps text-[10px] uppercase md:group-hover:text-black transition-colors tracking-[0.2em]">
                    EXPLORE SERIES
                    <span className="material-symbols-outlined text-sm transform translate-x-1 md:translate-x-0 md:group-hover:translate-x-1 transition-transform">east</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
