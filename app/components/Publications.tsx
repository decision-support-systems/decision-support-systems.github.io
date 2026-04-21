'use client';

import { publications } from '@/data/publications';
import { getDomainById } from '@/data/domains';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type PublicationsProps = {
  preview?: boolean;
  domainId?: number;
};

export default function Publications({ preview = false, domainId }: PublicationsProps) {
  const filteredPublications = domainId ? publications.filter((publication) => publication.domainId === domainId) : publications;
  const visiblePublications = preview ? filteredPublications.slice(0, 2) : filteredPublications;

  return (
    <section id="outputs" className="py-14 md:py-16 bg-[rgba(182,213,222,0.18)]">
      <div className="container-custom">
        <p className="section-kicker">Evidence & Research</p>
        <h2 className="section-title">Research Outputs</h2>
        <p className="section-subtitle">
          Publications, implementation findings, and evaluative outputs that translate technical AI work into practical decisions for real-world domain teams.
        </p>

        <div className="space-y-6 max-w-4xl">
          {visiblePublications.map((pub) => (
            <div
              key={pub.id}
              className="rounded-2xl border-l-4 border-[var(--brand)] bg-[var(--surface)] px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">{pub.type}</p>
              <h3 className="text-lg font-semibold text-[var(--ink)] mt-2">{pub.title}</h3>
              {/* <p className="text-[#4c5f66] mt-2">
                <span className="font-medium">{pub.authors}</span>
                <span className="text-[#708287]"> ({pub.year})</span>
              </p> */}
              <p className="text-[var(--muted)] mt-2 leading-relaxed">{pub.summary}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
                Domain: {getDomainById(pub.domainId)?.title || 'Unassigned'}
              </p>
              <p className="text-[var(--muted)] italic mt-2">{pub.venue}</p>
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--brand-strong)] hover:underline mt-3 inline-flex items-center gap-2"
                >
                  <span>{pub.linkLabel}</span>
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {preview && filteredPublications.length > visiblePublications.length ? (
          <div className="mt-8">
            <Link href="/outputs" className="btn-secondary">View All Outputs</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
