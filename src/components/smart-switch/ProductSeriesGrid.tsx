import Image from "next/image";
import Link from "next/link";

export default function ProductSeriesGrid() {
  const products = [
    {
      id: "smart-inice",
      name: "iNice Series",
      description: "Classic tactile feedback combined with modern smart home integration. Available in multiple gang configurations.",
      image: "/images/products/smart-switch/inice.png"
    },
    {
      id: "smart-ismart",
      name: "iSmart Series",
      description: "Advanced IoT integration with energy monitoring capabilities. Seamless connection to leading smart ecosystems.",
      image: "/images/products/smart-switch/ismart.png"
    },
    {
      id: "smart-itouch",
      name: "iTouch Series",
      description: "Sleek glass panel with capacitive touch zones. Includes customizable LED status indicators and scene control.",
      image: "/images/products/smart-switch/itouch.png"
    }
  ];

  return (
    <section id="products" className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-4">
            nest_thermostat
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-6">
            Smart Control Lineup
          </h2>
          <p className="text-secondary font-body-lg text-body-lg">
            Explore our comprehensive range of smart switch products. Engineered for modern residential and commercial environments while maintaining exceptional reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {products.map((product) => (
            <Link 
              href={`#`} 
              key={product.id}
              className="group flex flex-col bg-surface-container hover:bg-surface-container-high transition-colors border border-outline hover:border-primary rounded-xl overflow-hidden h-full"
            >
              {/* Product Image */}
              <div className="relative w-full h-48 bg-surface-container-highest border-b border-outline">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  unoptimized
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
