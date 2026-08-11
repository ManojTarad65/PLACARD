import Image from "next/image";
import Link from "next/link";

export default function SwitchgearProductsGrid() {
  const products = [
    {
      id: "sg-lv",
      name: "Low Voltage (LV) Panels",
      description: "Motor control centers and power distribution panels optimized for safety and accessibility.",
      image: "/images/switchgear/lv-panel.png"
    },
    {
      id: "sg-mv",
      name: "Medium Voltage (MV) Switchgear",
      description: "Air-insulated and gas-insulated switchgear designed for medium voltage distribution networks.",
      image: "/images/switchgear/mv-switchgear.png"
    },
    {
      id: "sg-rmu",
      name: "Ring Main Units (RMU)",
      description: "Compact, enclosed switchgear used at the load connection points of a ring-type distribution network.",
      image: "/images/switchgear/rmu.png"
    },
    {
      id: "sg-mcb",
      name: "Miniature Circuit Breakers (MCB)",
      description: "Protecting electrical circuits against overloads and short circuits with high reliability.",
      image: "/images/switchgear/mcb.png"
    },
    {
      id: "sg-rccb",
      name: "Residual Current Circuit Breakers (RCCB)",
      description: "Essential life safety equipment to prevent electric shock and detect leakage currents.",
      image: "/images/switchgear/rccb.png"
    },
    {
      id: "sg-db",
      name: "Distribution Boards (DB)",
      description: "Centralized electrical supply distribution panels providing optimal routing and protection.",
      image: "/images/switchgear/db.png"
    },
    {
      id: "sg-isolator",
      name: "Isolators",
      description: "Heavy-duty disconnect switches ensuring safe isolation of circuits for maintenance.",
      image: "/images/switchgear/isolator.png"
    },
    {
      id: "sg-custom",
      name: "Custom Control Panels",
      description: "Bespoke industrial control panels tailored to specific automation and facility requirements.",
      image: "/images/switchgear/hero.png" // Reusing hero image for custom panel
    }
  ];

  return (
    <section id="products" className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-4">
            factory
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-6">
            Industrial Grade Lineup
          </h2>
          <p className="text-secondary font-body-lg text-body-lg">
            Explore our comprehensive range of switchgear products. Built to withstand harsh environments while maintaining operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((product) => (
            <Link 
              href="#products" 
              key={product.id}
              className="group flex flex-col bg-surface-container hover:bg-surface-container-high transition-colors border border-outline hover:border-primary rounded-xl overflow-hidden h-full"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 bg-surface-container-highest border-b border-outline">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-secondary font-body-md text-body-md mb-8 flex-grow">
                  {product.description}
                </p>
                
                <div className="flex items-center text-primary font-label-caps text-label-caps tracking-widest font-bold mt-auto group-hover:text-inverse-primary transition-colors">
                  EXPLORE SERIES
                  <span className="material-symbols-outlined ml-2 text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
