export default function WiresAndCablesPage() {
  return (
    <main className="flex-grow flex flex-col w-full pt-[88px]">
      {/* Hero Section */}
      <section className="w-full px-grid-margin py-section-gap relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full opacity-30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9uV08DACHtp1L8Xag6VY7nbY3vMLLOFHUK536lXPWMXbl_gzqXqKoMuSyK3WR-eBSS0P_m-_4iSxHLpafKUurS_f1QU7qYNkC0J9RU5ufoLDVkbTHDvwhTpG0ASbyI4aWCWkHLbjwhWLpxJ8EmWnSwlXjRMcLy3v_htEAlx4gw_2L5rxnz_mEtUmA4CgIkZmbyFJFU7SEuWd7PBAcPvSW4-gfi5B69Jn4Zh9nZ9kYgg3cjaIHznlFtw')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-display-lg text-display-lg md:font-display-lg text-primary tracking-tighter mb-stack-lg">Wires & Cables</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-stack-lg">High-performance transmission lines engineered for extreme industrial environments. Ensuring uninterrupted power delivery with maximum durability.</p>
        </div>
      </section>
      {/* Technical Specs Bento */}
      <section className="w-full px-grid-margin py-section-gap max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Heavy Duty Cable */}
          <div className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col md:col-span-2 group hover:border-primary-container transition-colors duration-300">
            <div className="flex justify-between items-start mb-stack-md">
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors">Armored Power Cable (XLPE/SWA/PVC)</h3>
              <span className="material-symbols-outlined text-primary-container">bolt</span>
            </div>
            <div className="mb-stack-lg w-full h-48 bg-surface-container-lowest rounded border border-border-hairline flex items-center justify-center overflow-hidden">
              <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRyk59tJfGJGqM120B5BW1PWgs42C64dvdVplptFJrhtSa334FufowjWk7Sz1EG1tIyxPoAfRd8LXtEOTePnwFMyhJvoQ9-BcATKO4YQkJIjCjxv4N66q-bVNSGTZY65phZi0c4oXtK1Din_UMhM2NbjNvXtteDJ1sQLgEJ92w6TkidoY0kmZ6eJVmgfwKNMeX9atz6_I-hysOt5cxqUvNhMxTW5gtLHumDy5E4rxsP3QmVpIYJOLLlQ')" }}></div>
            </div>
            <div className="grid grid-cols-2 gap-stack-md font-code-spec text-code-spec text-on-surface-variant flex-grow">
              <div>
                <span className="block text-text-muted font-label-caps text-label-caps mb-stack-sm">Voltage Rating</span>
                <span className="text-on-surface">0.6/1 kV (Up to 33kV)</span>
              </div>
              <div>
                <span className="block text-text-muted font-label-caps text-label-caps mb-stack-sm">Conductor</span>
                <span className="text-on-surface">Stranded Copper (Class 2)</span>
              </div>
              <div>
                <span className="block text-text-muted font-label-caps text-label-caps mb-stack-sm">Armor</span>
                <span className="text-on-surface">Steel Wire Armored (SWA)</span>
              </div>
              <div>
                <span className="block text-text-muted font-label-caps text-label-caps mb-stack-sm">Max Temp</span>
                <span className="text-on-surface">90°C</span>
              </div>
            </div>
          </div>
          {/* Specs Card */}
          <div className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col">
            <div className="flex justify-between items-start mb-stack-lg">
              <h3 className="font-headline-md text-headline-md text-on-surface">Control Cables (YY/CY/SY)</h3>
              <span className="material-symbols-outlined text-tertiary-container">settings</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">Flexible multi-core cables designed for measuring, control, and regulation tasks in industrial automation systems.</p>
            <div className="space-y-stack-md font-code-spec text-code-spec text-on-surface-variant flex-grow">
              <div className="flex justify-between border-b border-border-hairline pb-2">
                <span className="text-text-muted">Voltage</span>
                <span className="text-on-surface">300/500V</span>
              </div>
              <div className="flex justify-between border-b border-border-hairline pb-2">
                <span className="text-text-muted">Screening</span>
                <span className="text-on-surface">Tinned Copper Braid (CY)</span>
              </div>
              <div className="flex justify-between border-b border-border-hairline pb-2">
                <span className="text-text-muted">Armor</span>
                <span className="text-on-surface">Galvanized Steel (SY)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
