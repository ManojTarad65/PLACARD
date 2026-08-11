import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white font-body-md w-full mt-auto relative overflow-hidden border-t border-white/10">
      {/* Subtle ambient glow in footer */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] transform-gpu blur-[80px] pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        {/* Pre-Footer CTA */}
        <div className="py-20 md:py-28 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10">
          <div className="max-w-3xl">
            <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tighter text-white leading-none mb-6">
              READY TO UPGRADE <br/>
              <span className="text-white/30">YOUR INFRASTRUCTURE?</span>
            </h2>
            <p className="font-body-lg text-white/50 font-light max-w-xl">
              Connect with our engineering team to discuss custom implementations, bulk orders, and architectural specifications.
            </p>
          </div>
          <Link href="/contact" className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-label-caps text-xs tracking-[0.2em] font-bold uppercase transition-all hover:scale-105">
            CONTACT SALES
            <span className="material-symbols-outlined ml-3 text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Image
              src="/images/logo.png"
              alt="PLACARD Logo"
              width={180}
              height={70}
              className="w-auto h-9 object-contain mb-8 opacity-90"
            />
            <p className="text-white/40 font-body-sm max-w-sm font-light leading-relaxed mb-8">
              Specialized manufacturing of exceptional electrical products exclusively crafted for modern homes, offices, and heavy-duty industries.
            </p>
            {/* Social Icons (Placeholders) */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
            </div>
          </div>
          
          {/* Column 2: Products (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-label-caps text-[11px] tracking-[0.2em] mb-8 uppercase font-bold border-l-2 border-primary pl-3">PLATFORMS</h4>
            <ul className="space-y-4 flex flex-col">
              {[
                { name: "Switches & Accessories", href: "/products/switches-and-accessories" },
                { name: "Smart Switch", href: "/products/smart-switch" },
                { name: "Wires & Cables", href: "/products/wires-and-cables" },
                { name: "Switchgear", href: "/products/switchgear" },
                { name: "Other Products", href: "/#other-products" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-white/50 font-body-sm hover:text-white transition-colors duration-300"
                  >
                    <span className="material-symbols-outlined text-[14px] mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">chevron_right</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-label-caps text-[11px] tracking-[0.2em] mb-8 uppercase font-bold border-l-2 border-primary pl-3">CORPORATE HQ</h4>
              <ul className="space-y-4 flex flex-col text-white/50 font-body-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-white/30 text-lg mt-0.5">location_on</span>
                  <span>Property No - VL01/3846,<br/>Julluddin Compound,<br/>Vasai Phata, Vasai (E),<br/>Dist Palghar - 401208</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-white/30 text-lg mt-0.5">location_on</span>
                  <span>2 KH-12 Sager Vihar<br/>Vaishali Nager,<br/>Ajmer Rajasthan</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-label-caps text-[11px] tracking-[0.2em] mb-8 uppercase font-bold border-l-2 border-primary pl-3">CONNECT</h4>
              <ul className="space-y-4 flex flex-col">
                <li>
                  <a className="group flex items-center gap-3 text-white/50 font-body-sm hover:text-white transition-colors duration-300" href="tel:+919462621341">
                    <span className="material-symbols-outlined text-white/30 text-lg group-hover:text-primary transition-colors">phone_in_talk</span>
                    +91 9462621341
                  </a>
                </li>
                <li>
                  <a className="group flex items-center gap-3 text-white/50 font-body-sm hover:text-white transition-colors duration-300 break-all" href="mailto:placardelectric1341@gmail.com">
                    <span className="material-symbols-outlined text-white/30 text-lg group-hover:text-primary transition-colors">mail</span>
                    placardelectric1341@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5 bg-black/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 font-label-caps text-[10px] tracking-[0.2em] uppercase text-center md:text-left">
            © {new Date().getFullYear()} PLACARD ELECTRIC PVT LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/70 font-label-caps text-[10px] tracking-[0.1em] uppercase transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/70 font-label-caps text-[10px] tracking-[0.1em] uppercase transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
