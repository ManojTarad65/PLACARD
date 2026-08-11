import Image from "next/image";
import Link from "next/link";

const cables = [
  {
    name: "House Wires",
    description: "Flexible copper wiring for residential and commercial electrical circuits.",
    specs: ["FR / FRLS options", "Copper conductor", "Easy routing"],
    icon: "cable",
  },
  {
    name: "Power Cables",
    description: "Reliable low-voltage power cable solutions for distribution, panels, and equipment feeds.",
    specs: ["Single / multicore", "PVC insulation", "Stable load transfer"],
    icon: "electrical_services",
  },
  {
    name: "Control Cables",
    description: "Multi-core cabling for controls, automation, signalling, and machine wiring.",
    specs: ["Flexible cores", "Panel friendly", "Automation ready"],
    icon: "settings_input_component",
  },
  {
    name: "Industrial Cables",
    description: "Durable cabling for demanding installations where protection and long service life matter.",
    specs: ["Heavy-duty jacket", "Plant wiring", "Reliable insulation"],
    icon: "factory",
  },
];

const qualityPoints = [
  "Designed for safe, stable current carrying performance",
  "Built for clean installation through conduits, panels, and raceways",
  "Suitable for homes, offices, commercial buildings, and industries",
  "Insulation choices for everyday and demanding environments",
  "Available in practical configurations for power and control circuits",
  "Supports dependable electrical infrastructure planning",
];

const applications = ["Residential Wiring", "Office Fit-outs", "Control Panels", "Machinery", "Distribution Boards", "Industrial Plants"];

export default function WiresAndCablesPage() {
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
                  Wires & Cables
                </span>
              </div>

              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold text-on-surface">
                Stable <span className="text-primary">Power</span> Transmission.
              </h1>

              <p className="font-body-lg text-body-lg text-secondary max-w-lg">
                A dependable range of wires and cables for safe installation, stable conductivity, and long-term electrical performance across homes, offices, panels, and industrial facilities.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link href="#products" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps font-bold transition-all hover:bg-inverse-primary">
                  VIEW CABLE RANGE
                </Link>
                <Link href="/contact-us" className="inline-flex justify-center items-center px-8 py-4 border border-outline text-on-surface font-label-caps text-label-caps font-bold transition-all hover:border-primary hover:text-primary">
                  ASK FOR QUOTE
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden border border-outline bg-surface-container-high">
              <Image
                src="/images/products/wires.png"
                alt="Placard wires and cables"
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
              { label: "CONDUCTOR", value: "Copper" },
              { label: "INSULATION", value: "PVC / FR" },
              { label: "APPLICATION", value: "Power + Control" },
              { label: "INSTALLATION", value: "Indoor / Panel" },
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
            <span className="material-symbols-outlined text-primary text-5xl mb-4">cable</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-6">
              Cable Product Range
            </h2>
            <p className="text-secondary font-body-lg text-body-lg">
              Choose the right cable family for building wiring, power distribution, automation, and equipment connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {cables.map((cable) => (
              <article key={cable.name} className="group flex flex-col bg-surface-container hover:bg-surface-container-high transition-colors border border-outline hover:border-primary rounded-xl overflow-hidden h-full">
                <div className="relative h-44 bg-surface-container-highest border-b border-outline flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-6xl transition-transform duration-500 group-hover:scale-110">{cable.icon}</span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                    {cable.name}
                  </h3>
                  <p className="text-secondary font-body-md text-body-md mb-8 flex-grow">{cable.description}</p>
                  <ul className="space-y-3 mb-8">
                    {cable.specs.map((spec) => (
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
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Cable Quality</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mt-4 mb-6">
              Made For Electrical Systems That Need To Keep Running.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              The right wire or cable selection improves safety, uptime, installation quality, and maintenance confidence across the full electrical system.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualityPoints.map((point) => (
              <div key={point} className="glass-card rounded-lg p-5 flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <p className="font-body-md text-body-md text-on-surface-variant">{point}</p>
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
