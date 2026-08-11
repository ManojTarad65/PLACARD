export default function SwitchgearSpecs() {
  const specs = [
    { label: "RATED VOLTAGE", value: "Up to 36 kV" },
    { label: "RATED CURRENT", value: "Up to 4000 A" },
    { label: "SHORT CIRCUIT RATING", value: "Up to 50 kA" },
    { label: "PROTECTION DEGREE", value: "IP4X to IP54" },
  ];

  return (
    <section className="w-full bg-primary text-on-primary py-12 border-y border-outline overflow-hidden relative">
      {/* Decorative hash pattern */}
      <div className="absolute top-0 right-0 w-64 h-full opacity-10 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)" }}></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          
          <div className="md:w-1/4">
            <h2 className="font-headline-sm text-headline-sm font-bold uppercase">
              Technical<br/>Specifications
            </h2>
          </div>
          
          <div className="w-full md:w-3/4 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="flex flex-col space-y-2 border-l-2 border-on-primary/20 pl-4">
                <span className="font-label-caps text-label-caps text-on-primary/70 tracking-wider">
                  {spec.label}
                </span>
                <span className="font-headline-sm text-headline-sm font-bold">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
