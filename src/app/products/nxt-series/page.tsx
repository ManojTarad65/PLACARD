export default function NxtSeriesPage() {
  return (
    <main className="flex-grow pt-[88px] pb-section-gap px-grid-margin w-full max-w-7xl mx-auto flex flex-col gap-section-gap">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-stack-lg items-center">
        <div className="flex-1 space-y-stack-md">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Nxt Series</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Precision engineered for the future of industrial power distribution. 
            The Nxt Series defines rugged reliability with advanced IoT integration.
          </p>
        </div>
        <div className="flex-1 w-full h-[400px] bg-surface-panel rounded-lg border border-border-hairline overflow-hidden relative">
          <img className="object-cover w-full h-full opacity-80" alt="Industrial electrical panel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3F4VB9VxTTRo39dY5G-l-zhwM4YTicxNKNWXfhMX2rTRHSFNwx9jkNF2LH1vU4c1fjRtvkx_IjPacU0p6GSLKl8OxNVu3CcygGR2AYemUor_nd_9vQ95jEkv7PMi4VSmySFa3-c7S3YnOX07oZn4kJOEvN7DI7jwC77cvFHaEUbRVCL88eWT5HTSVL8FLpwk6Qj-aPkNHTsV3HBoJ5slLzrlMrdNYFBwBSV1_x8PRLYQswSKxLnuXbw" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </div>
      </section>
      {/* Product Grid */}
      <section>
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-lg border-b border-border-hairline pb-stack-sm">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* X4 Card */}
          <div className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col gap-stack-md hover:border-primary-container transition-colors group">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">X4 Series</h3>
              <span className="material-symbols-outlined text-primary-container opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(242,169,59,0.5)] transition-all">electric_bolt</span>
            </div>
            <div className="h-48 rounded bg-surface border border-border-hairline overflow-hidden mb-stack-sm">
              <img className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" alt="X4 Series component" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7RVL-TFwX5N-Qk7LrzddvK2vpU7gbIGNcUaIyrGku4Z8yEmhcphdofFXexulVGjQzicWEnsMauMYBM6hYlr8-1RIQJO8wvtGEIm1JXSEk2vZop88RTfqcpeAHD4id7vLRrXphHqyFTX_0QVE2DFfQ9tf7s7evxUukXw_nkpaMzpMIK_cPT8Pw3S119oYSfGcLG6XS9676rPIdmtQgcfqBjI5OlQsiP7duiMTo2xQdcPQfwI2x1BBUpw" />
            </div>
            <ul className="font-code-spec text-code-spec text-on-surface-variant space-y-stack-sm flex-grow">
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Voltage</span> <span className="text-on-surface">480V AC</span></li>
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Amperage</span> <span className="text-on-surface">100A - 400A</span></li>
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Poles</span> <span className="text-on-surface">3</span></li>
            </ul>
            <button className="mt-auto w-full py-2 border border-border-hairline rounded text-text-primary font-label-caps text-label-caps hover:border-primary-container hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(242,169,59,0.2)] transition-all">
              View Details
            </button>
          </div>
          {/* X5 Card */}
          <div className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col gap-stack-md hover:border-primary-container transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary-container text-black font-label-caps text-[10px] px-2 py-1 rounded-bl">IOT ENABLED</div>
            <div className="flex justify-between items-center mt-2">
              <h3 className="font-headline-md text-headline-md text-on-surface">X5 Series</h3>
              <span className="material-symbols-outlined text-secondary opacity-80 group-hover:drop-shadow-[0_0_12px_rgba(146,204,255,0.5)] transition-all">sensors</span>
            </div>
            <div className="h-48 rounded bg-surface border border-border-hairline overflow-hidden mb-stack-sm">
              <img className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" alt="X5 Series component" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrvDk4P0S5LJioWTBuiHw1UhJlzG2jTzS7ziIAEOwbCPS2Z-7ApqPN0qEVXoeHMGroNl6G11R3JLaZrviUv9T-1CUpc8vTHIMKeUmNWNVXJ4JAtxx7PXQgLR_E1oTgSgWh_pqLz0tmNFUUpY-QY9WTXwdhKAwnglf5p6e3gLghAdn8uTHTXlUF-2ZIBFm2AeG1kMlMyEQKMpDpRds2WshuQQq8O-Ui5OgfnAYm0tdJcxe-lMsYCiS3sQ" />
            </div>
            <ul className="font-code-spec text-code-spec text-on-surface-variant space-y-stack-sm flex-grow">
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Voltage</span> <span className="text-on-surface">600V AC</span></li>
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Amperage</span> <span className="text-on-surface">400A - 800A</span></li>
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Connectivity</span> <span className="text-secondary">Ethernet/Wi-Fi</span></li>
            </ul>
            <button className="mt-auto w-full py-2 border border-border-hairline rounded text-text-primary font-label-caps text-label-caps hover:border-primary-container hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(242,169,59,0.2)] transition-all">
              View Details
            </button>
          </div>
          {/* X6 Card */}
          <div className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col gap-stack-md hover:border-primary-container transition-colors group">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface">X6 Series</h3>
              <span className="material-symbols-outlined text-brand-red opacity-80 group-hover:drop-shadow-[0_0_12px_rgba(237,28,36,0.5)] transition-all">warning</span>
            </div>
            <div className="h-48 rounded bg-surface border border-border-hairline overflow-hidden mb-stack-sm">
              <img className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" alt="X6 Series switchgear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTxxfuzQmx4pO_wqgdoKztyv5giB9Z152yI7NMWM2jp-yfy_02NVX2H7NYbr0JOmmTII-XB6H_mwNuxLBOoRr7kIttWeps8LJdi9c5Hi5kUhyygxSURhp7slc_7XYDeiT1Koar6MvrvCDGqghQhxiJfmfWbcWz9ayk35ok1hC_3oBZX4zYOkIO-UYfv_eyjZt5LBd-aS7HKStSHB6Dfw7AlCA-Kf0pGNCf4IYanfeFkr3D2B7kQHN4iQ" />
            </div>
            <ul className="font-code-spec text-code-spec text-on-surface-variant space-y-stack-sm flex-grow">
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Voltage</span> <span className="text-on-surface">1000V AC</span></li>
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Amperage</span> <span className="text-on-surface">800A - 2000A</span></li>
              <li className="flex justify-between border-b border-border-hairline pb-1"><span>Protection</span> <span className="text-on-surface">NEMA 4X</span></li>
            </ul>
            <button className="mt-auto w-full py-2 border border-border-hairline rounded text-text-primary font-label-caps text-label-caps hover:border-primary-container hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(242,169,59,0.2)] transition-all">
              View Details
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
