"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const otherProducts = [
  {
    title: "Switches & Accessories",
    description: "A complete range of modular switches, sockets, plates, and everyday electrical accessories.",
    image: "/images/products/nxt-series.png",
    href: "/products/switches-and-accessories",
  },
  {
    title: "NXT Series",
    description: "Premium switch range focused on clean aesthetics, durable touch points, and reliable control.",
    image: "/images/products/nxt-series.png",
    href: "/products/nxt-series",
  },
  {
    title: "Wires & Cables",
    description: "Power and control cable solutions designed for stable transmission and safe installation.",
    image: "/images/products/wires.png",
    href: "/products/wires-and-cables",
  },
  {
    title: "Switchgear",
    description: "Distribution boards, breakers, isolators, and panels for protected power distribution.",
    image: "/images/products/switchgear.png",
    href: "/products/switchgear",
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

export default function OtherProductsSection() {
  return (
    <section id="other-products" className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-[#030303] relative z-10 border-b border-white/5">
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="max-w-container-max mx-auto relative z-20">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-md text-headline-md text-white uppercase border-l-[3px] border-primary pl-6 mb-6">
              Other Products
            </h2>
            <p className="font-body-lg text-body-lg text-white/50 font-light leading-relaxed">
              Discover our extended range of specialized electrical infrastructure, built to the same exacting standards of reliability and performance.
            </p>
          </div>
          <Link href="/#other-products" className="inline-flex items-center gap-3 text-white/70 font-label-caps text-[11px] tracking-[0.2em] uppercase hover:text-white transition-colors group">
            VIEW ALL PRODUCTS
            <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-2 transition-transform">east</span>
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {otherProducts.map((product, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Link 
                href={product.href}
                className="flex flex-col h-full bg-[#080808] border border-white/5 p-5 group rounded-2xl relative overflow-hidden transition-colors hover:border-primary/50"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none z-10"></div>
                
                {/* Image Section */}
                <div className="relative w-full h-48 mb-8 rounded-xl overflow-hidden bg-black flex items-center justify-center p-4">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1] filter brightness-75 contrast-125 group-hover:brightness-100 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                <div className="px-2 flex-grow flex flex-col relative z-20">
                  <h3 className="font-headline-sm text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {product.title}
                  </h3>
                  
                  <p className="font-body-md text-sm text-white/40 mb-8 group-hover:text-white/70 transition-colors flex-grow font-light">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-white/40 font-label-caps text-[10px] uppercase group-hover:text-primary transition-colors tracking-[0.2em]">
                    VIEW DETAILS
                    <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">east</span>
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
