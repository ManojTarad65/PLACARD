import Image from "next/image";
import Link from "next/link";

export default function SwitchgearHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-surface-container-lowest overflow-hidden">
      {/* Background with yellow/industrial accent */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70"></div>
        <div className="absolute left-0 top-0 w-2 h-full bg-primary z-10"></div>
      </div>
      
      {/* Container */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Industrial Infrastructure
              </span>
            </div>
            
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold text-on-surface">
              Robust <span className="text-primary">Switchgear</span> Solutions.
            </h1>
            
            <p className="font-body-lg text-body-lg text-secondary max-w-lg">
              Engineered for extreme reliability and absolute safety. Our industrial switchgear panels manage power distribution seamlessly across critical facilities.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="inline-flex justify-center items-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps font-bold transition-all hover:bg-inverse-primary"
              >
                VIEW PRODUCTS
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex justify-center items-center px-8 py-4 border border-outline text-on-surface font-label-caps text-label-caps font-bold transition-all hover:border-primary hover:text-primary"
              >
                REQUEST QUOTE
              </Link>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden border border-outline bg-surface-container-high">
            <Image 
              src="/images/switchgear/hero.png" 
              alt="Heavy Duty Switchgear Panel"
              fill
              className="object-cover"
              priority
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
