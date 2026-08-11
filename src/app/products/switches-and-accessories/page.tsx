import Image from "next/image";

const products = [
  {
    name: "Modular Switches",
    description: "Reliable everyday switching for modern residential, office, and industrial interiors.",
    icon: "toggle_on",
  },
  {
    name: "Sockets",
    description: "Durable socket solutions built for clean installation and dependable connectivity.",
    icon: "power",
  },
  {
    name: "Plates & Frames",
    description: "Coordinated finishing accessories for a neat, premium wall-mounted electrical layout.",
    icon: "dashboard",
  },
  {
    name: "Control Accessories",
    description: "Supporting electrical accessories for complete switch and control installations.",
    icon: "settings_input_component",
  },
];

export default function SwitchesAndAccessoriesPage() {
  return (
    <main className="flex-grow pt-[88px] pb-section-gap px-grid-margin w-full max-w-7xl mx-auto flex flex-col gap-section-gap">
      <section className="flex flex-col md:flex-row gap-stack-lg items-center">
        <div className="flex-1 space-y-stack-md">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
            Switches & Accessories
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Modular switches, sockets, plates, frames, and control accessories crafted for modern homes, offices, and industries.
          </p>
        </div>
        <div className="flex-1 w-full h-[400px] bg-surface-panel rounded-lg border border-border-hairline overflow-hidden relative">
          <Image
            className="object-contain w-full h-full p-10 opacity-90"
            alt="Placard switches and accessories"
            src="/images/products/nxt-series.png"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </section>

      <section>
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-lg border-b border-border-hairline pb-stack-sm">
          Product Range
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col gap-stack-md hover:border-primary-container transition-colors group"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">{product.name}</h3>
                <span className="material-symbols-outlined text-primary-container opacity-70 group-hover:opacity-100 transition-opacity">
                  {product.icon}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                {product.description}
              </p>
              <div className="mt-auto flex items-center text-primary-container font-label-caps text-label-caps tracking-widest font-bold">
                PLACARD ELECTRIC
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
