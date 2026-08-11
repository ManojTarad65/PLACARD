export default function LeadershipMessage() {
  return (
    <section className="max-w-4xl mx-auto px-grid-margin py-section-gap w-full text-center flex flex-col items-center gap-stack-lg">
      <span
        className="material-symbols-outlined text-primary-container text-4xl opacity-50"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        format_quote
      </span>
      <blockquote className="font-headline-md text-headline-md text-text-primary leading-relaxed">
        &quot;In the electrical manufacturing industry, there is no margin for error. We don&apos;t just build switches; we build the unseen nervous system of modern infrastructure. Reliability isn&apos;t a feature&mdash;it&apos;s our foundational requirement.&quot;
      </blockquote>
      <div className="flex flex-col items-center gap-1 mt-stack-md">
        <span className="font-body-lg text-body-lg font-semibold text-text-primary">Elias Vance</span>
        <span className="font-label-caps text-label-caps text-text-muted">Chief Engineer &amp; CEO</span>
      </div>
    </section>
  );
}
