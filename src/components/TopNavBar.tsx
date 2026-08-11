"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopNavBar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto transition-all duration-500">
        <Link
          className="relative z-50 flex items-center gap-2 group transition-opacity hover:opacity-80 duration-300"
          href="/"
        >
          <Image
            src="/images/logo.png"
            alt="PLACARD Logo"
            width={240}
            height={90}
            className={`w-auto object-contain transition-all duration-500 rounded-sm ${scrolled ? 'h-7 md:h-9' : 'h-8 md:h-10'}`}
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="/">HOME</NavLink>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="text-white/70 font-label-caps text-[11px] tracking-[0.15em] hover:text-white transition-colors duration-300 flex items-center gap-1 py-2 uppercase">
              PRODUCTS
              <motion.span 
                animate={{ rotate: isProductsOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="material-symbols-outlined text-[16px] opacity-70"
              >
                expand_more
              </motion.span>
            </button>
            
            <AnimatePresence>
              {isProductsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 rounded-xl"
                >
                  <div className="flex flex-col p-2">
                    <DropdownLink href="/products/switches-and-accessories">Switches & Accessories</DropdownLink>
                    <DropdownLink href="/products/smart-switch">Smart Switch</DropdownLink>
                    <DropdownLink href="/products/wires-and-cables">Wires & Cables</DropdownLink>
                    <DropdownLink href="/products/switchgear">Switchgear</DropdownLink>
                    <DropdownLink href="/products/nxt-series">NXT Series</DropdownLink>
                    <DropdownLink href="/#other-products">Other Products</DropdownLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <NavLink href="/about">ABOUT</NavLink>
          <NavLink href="#">MEDIA</NavLink>
        </nav>

        <div className="hidden md:flex items-center">
          <Link href="/contact-us">
            <motion.button 
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 text-white border border-white/20 font-label-caps text-[11px] tracking-[0.15em] font-medium uppercase px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
              Contact Sales
            </motion.button>
          </Link>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span 
            key={isMobileMenuOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="material-symbols-outlined block text-3xl"
          >
            {isMobileMenuOpen ? 'close' : 'menu'}
          </motion.span>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100svh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-0 left-0 w-full bg-black/95 backdrop-blur-3xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col px-margin-mobile pt-32 pb-12 gap-8 h-full">
              <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</MobileNavLink>
              <div className="flex flex-col gap-4">
                <span className="text-white/50 font-label-caps text-xs uppercase tracking-[0.2em] px-4">PRODUCTS</span>
                <MobileNavLink href="/products/switches-and-accessories" onClick={() => setIsMobileMenuOpen(false)} className="pl-8 border-l border-white/10 ml-4">Switches & Accessories</MobileNavLink>
                <MobileNavLink href="/products/smart-switch" onClick={() => setIsMobileMenuOpen(false)} className="pl-8 border-l border-white/10 ml-4">Smart Switch</MobileNavLink>
                <MobileNavLink href="/products/wires-and-cables" onClick={() => setIsMobileMenuOpen(false)} className="pl-8 border-l border-white/10 ml-4">Wires & Cables</MobileNavLink>
                <MobileNavLink href="/products/switchgear" onClick={() => setIsMobileMenuOpen(false)} className="pl-8 border-l border-white/10 ml-4">Switchgear</MobileNavLink>
                <MobileNavLink href="/products/nxt-series" onClick={() => setIsMobileMenuOpen(false)} className="pl-8 border-l border-white/10 ml-4">NXT Series</MobileNavLink>
                <MobileNavLink href="/#other-products" onClick={() => setIsMobileMenuOpen(false)} className="pl-8 border-l border-white/10 ml-4">Other Products</MobileNavLink>
              </div>
              <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>MEDIA</MobileNavLink>
              
              <div className="mt-auto pt-12">
                <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                  <button className="w-full bg-primary text-white font-label-caps text-[11px] tracking-[0.15em] font-medium uppercase px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group text-white/70 font-label-caps text-[11px] tracking-[0.15em] hover:text-white transition-colors duration-300 py-2 uppercase">
      {children}
      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
    </Link>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="block px-6 py-4 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 font-label-caps text-[11px] tracking-[0.15em] uppercase rounded-lg"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, className = "", onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`block px-4 py-2 text-white/80 hover:text-white transition-colors duration-300 font-headline-sm text-headline-sm font-medium uppercase tracking-wider ${className}`}
    >
      {children}
    </Link>
  );
}
