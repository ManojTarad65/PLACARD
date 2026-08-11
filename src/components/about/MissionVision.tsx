export default function MissionVision() {
  return (
    <section className="max-w-7xl mx-auto px-grid-margin py-section-gap w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
        {/* Mission Card */}
        <div className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col gap-stack-md relative group overflow-hidden">
          {/* Tech accent line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary-container/0 via-primary-container/50 to-primary-container/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-12 h-12 flex items-center justify-center border border-border-hairline rounded bg-surface mb-2">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              my_location
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-text-primary">Our Mission</h2>
          <p className="text-text-muted">
            To manufacture uncompromising electrical solutions that ensure safety, efficiency, and continuous operation in the world&apos;s most demanding industrial and commercial environments.
          </p>
        </div>
        {/* Vision Card */}
        <div className="bg-surface-panel border border-border-hairline rounded-lg p-stack-lg flex flex-col gap-stack-md relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary-container/0 via-primary-container/50 to-primary-container/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-12 h-12 flex items-center justify-center border border-border-hairline rounded bg-surface mb-2">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              visibility
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-text-primary">Our Vision</h2>
          <p className="text-text-muted">
            To architect the future of smart infrastructure by integrating intelligent diagnostics into industrial-grade hardware, making every circuit visible, manageable, and secure.
          </p>
        </div>
      </div>
    </section>
  );
}
