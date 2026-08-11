import Link from "next/link";

export default function AboutFooter() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary font-label-caps text-label-caps w-full mt-section-gap border-t border-border-hairline dark:border-border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-grid-margin py-section-gap max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-stack-md col-span-1 md:col-span-1">
          <span className="font-headline-md text-headline-md text-on-surface tracking-tighter font-bold">Placard Electric</span>
          <p className="text-text-muted normal-case mt-2 max-w-xs">Precision engineered electrical components for demanding industrial environments.</p>
        </div>
        {/* Links Column */}
        <div className="flex flex-col gap-stack-md col-span-1 md:col-span-2 md:col-start-3 md:flex-row md:justify-around">
          <div className="flex flex-col gap-stack-sm">
            <Link className="text-text-muted hover:text-on-surface hover:text-primary transition-colors py-1" href="#">Products</Link>
            <Link className="text-text-muted hover:text-on-surface hover:text-primary transition-colors py-1" href="#">Company</Link>
            <Link className="text-text-muted hover:text-on-surface hover:text-primary transition-colors py-1" href="#">Support</Link>
          </div>
          <div className="flex flex-col gap-stack-sm mt-4 md:mt-0">
            <Link className="text-text-muted hover:text-on-surface hover:text-primary transition-colors py-1" href="#">Newsletter</Link>
            <Link className="text-text-muted hover:text-on-surface hover:text-primary transition-colors py-1" href="#">Privacy Policy</Link>
            <span className="text-text-muted py-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified</span> ISO 9001 Certified
            </span>
          </div>
        </div>
        {/* Copyright Row spanning full width at bottom of grid */}
        <div className="col-span-1 md:col-span-4 mt-stack-lg pt-stack-lg border-t border-border-hairline flex flex-col md:flex-row justify-between items-center text-text-muted">
          <span className="">© 2024 Placard Electric. Precision Engineered.</span>
        </div>
      </div>
    </footer>
  );
}
