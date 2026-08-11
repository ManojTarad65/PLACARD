import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-white/50 font-body-md w-full mt-auto relative overflow-hidden">
      {/* Subtle ambient glow in footer */}
      <div className="absolute bottom-[-50%] right-[-10%] w-[60%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.05)_0%,transparent_60%)] transform-gpu blur-[80px] pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto relative z-10">
        <div className="col-span-1 md:col-span-2 flex flex-col items-start">
          <Image
            src="/images/placard_logo_real.svg"
            alt="PLACARD Logo"
            width={160}
            height={60}
            className="w-auto h-8 object-contain mb-8 filter brightness-0 invert opacity-90"
          />
          <p className="text-white/40 font-body-sm max-w-sm font-light leading-relaxed">
            Welcome to Placard, where we specialize in manufacturing exceptional products exclusively crafted for modern homes, offices, and industries.
          </p>
          <div className="text-white/30 font-label-caps text-[10px] mt-12 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} PLACARD ELECTRIC PVT LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-label-caps text-[11px] tracking-[0.15em] mb-6 uppercase">CONTACT US</h4>
          <ul className="space-y-4 flex flex-col">
            <li className="text-white/50 font-body-sm leading-relaxed">
              Property No - VL01/3846, Julluddin Compound, Nr Nagarsevak Bunglow, Dhumal Nagar, Vasai Phata, Vasai (E), Dist Palghar - 401208
            </li>
            <li className="text-white/50 font-body-sm leading-relaxed">
              2 KH-12 Sager Vihar Vaishali Nager, Ajmer Rajasthan
            </li>
            <a className="text-white/50 font-body-sm hover:text-white transition-colors duration-300 w-fit" href="tel:+919462621341">
              +91 9462621341
            </a>
            <a className="text-white/50 font-body-sm hover:text-white transition-colors duration-300 w-fit" href="mailto:placardelectric1341@gmail.com">
              placardelectric1341@gmail.com
            </a>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="text-white font-label-caps text-[11px] tracking-[0.15em] mb-6 uppercase">PRODUCTS</h4>
          <ul className="space-y-4 flex flex-col">
            <Link
              className="text-white/50 font-body-sm hover:text-primary transition-colors duration-300 w-fit"
              href="/products/switches-and-accessories"
            >
              Switches & Accessories
            </Link>
            <Link
              className="text-white/50 font-body-sm hover:text-white transition-colors duration-300 w-fit"
              href="/products/smart-switch"
            >
              Smart Switch
            </Link>
            <Link
              className="text-white/50 font-body-sm hover:text-white transition-colors duration-300 w-fit"
              href="/products/wires-and-cables"
            >
              Wires & Cables
            </Link>
            <Link className="text-white/50 font-body-sm hover:text-white transition-colors duration-300 w-fit" href="/products/switchgear">
              Switchgear
            </Link>
            <Link className="text-white/50 font-body-sm hover:text-white transition-colors duration-300 w-fit" href="/#other-products">
              Other Products
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
