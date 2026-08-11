import Image from "next/image";
import Link from "next/link";

const productRange = [
  {
    title: "Premium Switches",
    description: "Smooth-operating modular switches for high-use rooms, offices, showrooms, and workspaces.",
    specs: ["1 way / 2 way options", "Soft-touch actuation", "Long service life"],
    icon: "toggle_on",
  },
  {
    title: "Power Sockets",
    description: "Reliable socket modules designed for everyday appliances, workstations, and commercial interiors.",
    specs: ["Universal options", "Secure contact grip", "Modular installation"],
    icon: "power",
  },
  {
    title: "USB & Charging",
    description: "Convenient charging modules for desks, hospitality spaces, bedrooms, and modern utility zones.",
    specs: ["USB-ready layouts", "Clean plate fitment", "Space-saving modules"],
    icon: "usb",
  },
  {
    title: "Plates & Frames",
    description: "Coordinated front plates and frames that complete the NXT look with a clean architectural finish.",
    specs: ["Multi-gang formats", "Flush visual profile", "Easy maintenance"],
    icon: "select_window",
  },
];

const highlights = [
  "Designed for modern homes, offices, and industries",
  "Modular format for flexible room-by-room planning",
  "Premium exterior finish for visible installation areas",
  "Reliable switching feel for daily use",
  "Compatible layouts for switches, sockets, and accessories",
  "Built for clean installation and easy servicing",
];

const applications = ["Homes", "Offices", "Hotels", "Retail", "Industries", "Institutions"];

export default function NxtSeriesPage() {
  return (
    <main className="flex-grow flex flex-col w-full pt-20 bg-background">
      <section className="relative w-full min-h-[80vh] flex items-center bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70" />
          <div className="absolute left-0 top-0 w-2 h-full bg-primary" />
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                  NXT Series Switches
                </span>
              </div>

              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold text-on-surface">
                Premium <span className="text-primary">Modular</span> Switching.
              </h1>

              <p className="font-body-lg text-body-lg text-secondary max-w-lg">
                A complete switch and accessory range made for refined interiors, reliable daily use, and clean electrical planning across residential, commercial, and light industrial spaces.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link href="#products" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps font-bold transition-all hover:bg-inverse-primary">
                  VIEW RANGE
                </Link>
                <Link href="/contact-us" className="inline-flex justify-center items-center px-8 py-4 border border-outline text-on-surface font-label-caps text-label-caps font-bold transition-all hover:border-primary hover:text-primary">
                  REQUEST DETAILS
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden border border-outline bg-surface-container-high">
              <Image
                src="/images/products/nxt-series.png"
                alt="Placard NXT Series switches"
                fill
                className="object-contain p-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-on-primary py-12 border-y border-outline overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-full opacity-10 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)" }} />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "FORMAT", value: "Modular" },
              { label: "USE CASE", value: "Home / Office" },
              { label: "INSTALLATION", value: "Flush Mount" },
              { label: "RANGE", value: "Switches + Accessories" },
            ].map((spec) => (
              <div key={spec.label} className="flex flex-col space-y-2 border-l-2 border-on-primary/20 pl-4">
                <span className="font-label-caps text-label-caps text-on-primary/70 tracking-wider">{spec.label}</span>
                <span className="font-headline-sm text-headline-sm font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">widgets</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-6">
              NXT Product Range
            </h2>
            <p className="text-secondary font-body-lg text-body-lg">
              Build a complete electrical layout using coordinated switches, sockets, charging, and plate accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {productRange.map((product) => (
              <article key={product.title} className="group flex flex-col bg-surface-container hover:bg-surface-container-high transition-colors border border-outline hover:border-primary rounded-xl overflow-hidden h-full">
                <div className="relative h-44 bg-surface-container-highest border-b border-outline flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-6xl transition-transform duration-500 group-hover:scale-110">
                    {product.icon}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-secondary font-body-md text-body-md mb-8 flex-grow">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-3 text-on-surface-variant text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us" className="flex items-center text-primary font-label-caps text-label-caps tracking-widest font-bold mt-auto group-hover:text-inverse-primary transition-colors">
                    ENQUIRE NOW
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-y border-outline">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Why NXT</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mt-4 mb-6">
              Built For Spaces Where The Switch Is Part Of The Design.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              NXT helps create a consistent visible electrical finish across interiors while keeping the installation practical for electricians, builders, and facility teams.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="glass-card rounded-lg p-5 flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <p className="font-body-md text-body-md text-on-surface-variant">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Applications</h2>
          <div className="flex flex-wrap gap-3">
            {applications.map((item) => (
              <span key={item} className="border border-outline rounded-full px-5 py-3 text-on-surface-variant font-label-caps text-label-caps tracking-widest">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
