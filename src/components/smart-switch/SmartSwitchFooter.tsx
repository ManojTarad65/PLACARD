import Link from "next/link";

export default function SmartSwitchFooter() {
  return (
    <footer className="w-full bottom-0 border-t border-border-hairline bg-surface-container-lowest transition-opacity duration-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-grid-margin py-section-gap w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-stack-md col-span-1 md:col-span-1">
          <span className="font-headline-md text-headline-md font-bold text-on-surface text-primary-container">
            PLACARD ELECTRIC
          </span>
          <p className="font-body-md text-body-md text-text-muted mt-4">
            Precision Engineered. ISO 9001:2015 &amp; ISO 14001 Certified.
          </p>
        </div>
        <div className="flex flex-col gap-stack-sm">
          <h4 className="font-label-caps text-label-caps text-text-primary mb-2">RESOURCES</h4>
          <Link className="font-body-md text-body-md text-text-muted font-normal hover:text-primary transition-colors" href="#">
            Technical Data
          </Link>
          <Link className="font-body-md text-body-md text-text-muted font-normal hover:text-primary transition-colors" href="#">
            Safety Standards
          </Link>
          <Link className="font-body-md text-body-md text-text-muted font-normal hover:text-primary transition-colors" href="#">
            Compliance
          </Link>
        </div>
        <div className="flex flex-col gap-stack-sm">
          <h4 className="font-label-caps text-label-caps text-text-primary mb-2">COMPANY</h4>
          <Link className="font-body-md text-body-md text-text-muted font-normal hover:text-primary transition-colors" href="#">
            Global Distribution
          </Link>
          <Link className="font-body-md text-body-md text-text-muted font-normal hover:text-primary transition-colors" href="#">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-stack-sm">
          <h4 className="font-label-caps text-label-caps text-text-primary mb-2">NEWSLETTER</h4>
          <div className="flex border-glow rounded overflow-hidden border border-border-hairline bg-surface-panel mt-2">
            <input
              className="bg-transparent border-none text-text-primary font-body-md focus:ring-0 w-full p-3"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-surface-container hover:text-on-primary-fixed text-text-muted p-3 transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-border-hairline px-grid-margin py-4">
        <p className="font-label-caps text-label-caps text-text-muted text-center">
          © 2024 PLACARD ELECTRIC. Precision Engineered. ISO 9001:2015 &amp; ISO 14001 Certified.
        </p>
      </div>
    </footer>
  );
}
