export default function CertificationsStrip() {
  return (
    <section className="bg-surface-container-low border-y border-border-hairline py-stack-lg w-full">
      <div className="max-w-7xl mx-auto px-grid-margin flex flex-col md:flex-row items-center justify-between gap-stack-lg">
        <span className="font-label-caps text-label-caps text-text-muted whitespace-nowrap">CERTIFIED &amp; COMPLIANT</span>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-stack-lg opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simulated Badges using Typography & Borders */}
          <div className="flex items-center gap-2 border border-border-hairline px-4 py-2 rounded">
            <span className="material-symbols-outlined text-text-primary">verified</span>
            <span className="font-code-spec text-code-spec text-text-primary">ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-2 border border-border-hairline px-4 py-2 rounded">
            <span className="material-symbols-outlined text-text-primary">shield</span>
            <span className="font-code-spec text-code-spec text-text-primary">UL Compliant</span>
          </div>
          <div className="flex items-center gap-2 border border-border-hairline px-4 py-2 rounded">
            <span className="material-symbols-outlined text-text-primary">bolt</span>
            <span className="font-code-spec text-code-spec text-text-primary">CE Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
