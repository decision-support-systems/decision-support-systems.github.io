'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-20 left-[-14%] h-72 w-72 rounded-full bg-[rgba(182,213,222,0.75)] blur-3xl" />
        <div className="absolute top-20 right-[-10%] h-72 w-72 rounded-full bg-[rgba(231,205,213,0.72)] blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="float-up">
            <h1 className="font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl md:text-5xl lg:text-7xl">
              <span className="block">AI with Decision Support Systems</span>
              <span className="block text-[var(--brand-strong)]">in practice</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Explore how machine learning, generative AI, agentic systems, and data storytelling are applied to real-world decisions across domains through research-led prototypes and partner-facing delivery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/domains" className="btn-primary">Explore Domains</Link>
              <Link href="/outputs" className="btn-secondary">See Outputs</Link>
              <Link href="/people" className="btn-secondary">Meet The Team</Link>
            </div>
          </div>

          <div className="glass-card float-up delay-2 rounded-3xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-strong)]">What this hub offers</p>
            <div className="mt-5 space-y-4">
              <div className="panel-mint rounded-2xl p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">Domain-Led Projects</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Practical prototypes and delivery-focused builds mapped to specific decision domains.</p>
              </div>
              <div className="panel-peach rounded-2xl p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">Research Outputs</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Evidence, reports, and implementation notes that support informed adoption.</p>
              </div>
              <div className="panel-lilac rounded-2xl p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">People and Capability</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Cross-disciplinary expertise across models, agents, analytics, and informatics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
