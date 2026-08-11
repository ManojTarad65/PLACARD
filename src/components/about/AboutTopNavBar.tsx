import Link from "next/link";

export default function AboutTopNavBar() {
  return (
    <header className="bg-surface/80 backdrop-blur-md dark:bg-surface/80 text-primary dark:text-primary font-body-md text-body-md fixed top-0 w-full z-50 border-b border-border-hairline dark:border-border-hairline transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-grid-margin py-base max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link
          className="font-display-lg text-display-lg font-bold text-primary dark:text-primary tracking-tighter"
          href="/"
        >
          Placard Electric
        </Link>
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-on-surface hover:text-primary transition-colors duration-200 hover:glow-sm" href="/">
            Home
          </Link>
          <div className="relative group">
            <button className="text-on-surface hover:text-primary transition-colors duration-200 hover:glow-sm flex items-center gap-1">
              Products
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="absolute left-0 top-full mt-2 w-48 bg-surface-container-high border border-border-hairline shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/products/smart-switch" className="block px-4 py-3 text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">
                Smart Switch
              </Link>
              <Link href="#" className="block px-4 py-3 text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">
                Standard Switches
              </Link>
              <Link href="#" className="block px-4 py-3 text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">
                Industrial Wires
              </Link>
              <Link href="#" className="block px-4 py-3 text-on-surface hover:bg-surface-container-highest hover:text-primary transition-colors">
                Switchgear
              </Link>
            </div>
          </div>
          <Link className="text-on-surface hover:text-primary transition-colors duration-200 hover:glow-sm" href="/about">
            About
          </Link>
          <Link className="text-on-surface hover:text-primary transition-colors duration-200 hover:glow-sm" href="#">
            Media
          </Link>
        </nav>
        {/* Trailing Action */}
        <div className="flex items-center gap-gutter">
          <Link
            className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-4 py-2 rounded transition-all duration-200 glow-btn flex items-center gap-2"
            href="#"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </header>
  );
}
