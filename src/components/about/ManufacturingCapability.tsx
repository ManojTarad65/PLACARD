import Image from "next/image";

export default function ManufacturingCapability() {
  return (
    <>
      {/* Technical Divider */}
      <div className="tech-divider"></div>

      {/* Manufacturing Capability */}
      <section className="max-w-7xl mx-auto px-grid-margin py-section-gap w-full">
        <div className="flex flex-col md:flex-row gap-stack-lg justify-between items-end mb-stack-lg">
          <div className="flex flex-col gap-stack-sm">
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-text-primary">
              Precision Infrastructure
            </h2>
            <p className="text-text-muted max-w-xl">
              Our manufacturing facilities are built on a foundation of rigorous process control and advanced automation, ensuring every unit meets exact specifications.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-hairline rounded-lg border border-border-hairline overflow-hidden">
          {/* Feature 1 */}
          <div className="bg-surface-panel p-stack-lg flex flex-col gap-stack-md hover:bg-surface-container-high transition-colors">
            <div className="w-full h-32 mb-4 rounded overflow-hidden bg-surface-container-lowest border border-border-hairline relative">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Automated Assembly"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-500"
                unoptimized
              />
            </div>
            <span className="material-symbols-outlined text-primary-container text-3xl">precision_manufacturing</span>
            <h3 className="font-body-lg text-body-lg text-text-primary font-semibold">Automated Assembly</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Robotic assembly lines capable of sub-millimeter precision, reducing variance and ensuring absolute consistency across high-volume production runs.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-surface-panel p-stack-lg flex flex-col gap-stack-md hover:bg-surface-container-high transition-colors">
            <div className="w-full h-32 mb-4 rounded overflow-hidden bg-surface-container-lowest border border-border-hairline relative">
              <Image
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
                alt="Quality Testing Lab"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-500"
                unoptimized
              />
            </div>
            <span className="material-symbols-outlined text-primary-container text-3xl">science</span>
            <h3 className="font-body-lg text-body-lg text-text-primary font-semibold">Quality Testing Lab</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              In-house thermal, kinetic, and voltage stress testing environments that simulate conditions far exceeding standard operational parameters.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-surface-panel p-stack-lg flex flex-col gap-stack-md hover:bg-surface-container-high transition-colors">
            <div className="w-full h-32 mb-4 rounded overflow-hidden bg-surface-container-lowest border border-border-hairline relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                alt="R&D Center"
                fill
                className="object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-500"
                unoptimized
              />
            </div>
            <span className="material-symbols-outlined text-primary-container text-3xl">architecture</span>
            <h3 className="font-body-lg text-body-lg text-text-primary font-semibold">R&amp;D Center</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Dedicated engineering teams focused on material science advancements and IoT integration for next-generation smart switchgear.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
