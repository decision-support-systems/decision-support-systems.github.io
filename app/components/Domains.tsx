'use client';

import Link from 'next/link';
import { domains } from '@/data/domains';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';

type DomainsProps = {
  preview?: boolean;
};

export default function Domains({ preview = false }: DomainsProps) {
  const visibleDomains = preview ? domains.slice(0, 3) : domains;

  return (
    <section id="domains" className="py-14 md:py-16 bg-[#eef5f6]">
      <div className="container-custom">
        <p className="section-kicker">Decision Domains</p>
        <h2 className="section-title">Domain Areas</h2>
        <p className="section-subtitle">
          Explore where our decision support systems are currently applied.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleDomains.map((domain) => {
            const projectCount = projects.filter((project) => project.domainId === domain.id).length;
            const publicationCount = publications.filter((publication) => publication.domainId === domain.id).length;

            return (
              <article
                key={domain.id}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b6e6e]">{domain.title}</p>
                <p className="mt-3 text-[#425860] leading-relaxed">{domain.shortDescription}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#e8f1f2] px-3 py-1 text-xs font-semibold text-[#35515a]">
                    {projectCount} project{projectCount === 1 ? '' : 's'}
                  </span>
                  <span className="rounded-full bg-[#fdf1e3] px-3 py-1 text-xs font-semibold text-[#6b4e2a]">
                    {publicationCount} output{publicationCount === 1 ? '' : 's'}
                  </span>
                </div>

                <div className="mt-6">
                  <Link href={`/domains/${domain.slug}`} className="btn-secondary">
                    Explore {domain.title}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {preview && domains.length > visibleDomains.length ? (
          <div className="mt-8">
            <Link href="/domains" className="btn-secondary">View All Domains</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
