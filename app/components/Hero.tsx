'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-20 left-[-14%] h-72 w-72 rounded-full bg-[#b8e3df] blur-3xl" />
        <div className="absolute top-20 right-[-10%] h-72 w-72 rounded-full bg-[#ffd6ab] blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="float-up">
            <p className="mb-4 inline-flex rounded-full border border-[#cfded9] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6e6e]">
              University of Huddersfield Decision Intelligence Hub
            </p>
            <h1 className="font-display text-5xl leading-tight text-[#1b2a2f] md:text-6xl lg:text-7xl">
              Decision Support
              <span className="block text-[#0b6e6e]">Systems in practice</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#425860] md:text-xl">
              Explore how machine learning, generative AI, agentic systems, and data storytelling are applied to real-world decisions across domains through research-led prototypes and partner-facing delivery.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/domains" className="btn-primary">Explore Domains</Link>
              <Link href="/outputs" className="btn-secondary">See Outputs</Link>
              <Link href="/people" className="btn-secondary">Meet The Team</Link>
            </div>
          </div>

          <div className="glass-card float-up delay-2 rounded-3xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b6e6e]">What this hub offers</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-[#f3f8f7] p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1b2a2f]">Domain-Led Projects</p>
                <p className="mt-2 text-sm text-[#4c5f66]">Practical prototypes and delivery-focused builds mapped to specific decision domains.</p>
              </div>
              <div className="rounded-2xl bg-[#fdf4ea] p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1b2a2f]">Research Outputs</p>
                <p className="mt-2 text-sm text-[#4c5f66]">Evidence, reports, and implementation notes that support informed adoption.</p>
              </div>
              <div className="rounded-2xl bg-[#eef5fc] p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1b2a2f]">People and Capability</p>
                <p className="mt-2 text-sm text-[#4c5f66]">Cross-disciplinary expertise across models, agents, analytics, and informatics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
