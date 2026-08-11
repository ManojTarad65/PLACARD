export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center border-b border-border-hairline">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <div
          className="bg-cover bg-center w-full h-full"
          data-alt="Industrial electrical switchgear panel, technical macro shot, professional engineering environment, dark premium aesthetic, deep charcoal and amber accents, high-end industrial photography."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_8tvzkh1FjNMub5Bi6Txy38CZW84rENhA30Y45UMEMCQNOPEhJ-Q7LTcS0sWaPIu5g8mGFkZ_mVIOQWfKbm-uFAtRGK2LcG0hnEXTUCFygblktZ4veCZ2g2cVVMU2tShpQ7-fO5nvadLFL_mfd7fTnHV4wSNg98z_1MdZfkkx5YkVqwIpvtaLpKrervcm-E_6rXE9FuurKBamS6jQRwn002Zhiim301QY8RTHKYqnfEnfHbv6NdMkUw")',
          }}
        ></div>
        {/* Gradient Overlay for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-grid-margin w-full grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col gap-stack-lg">
          <div className="inline-flex items-center gap-2 border border-border-hairline px-3 py-1 rounded bg-surface-panel/50 backdrop-blur-sm self-start">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-text-muted tracking-widest">ABOUT PLACARD</span>
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary leading-tight">
            Engineered for <br />
            <span className="text-primary-container">Excellence</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-primary-container pl-4">
            For over two decades, Placard Electric has defined the standard in high-performance electrical components. We merge industrial resilience with modern precision to build infrastructure you can trust.
          </p>
        </div>
      </div>
    </section>
  );
}
