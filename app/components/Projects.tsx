'use client';

import { projects } from '@/data/projects';
import { getDomainById } from '@/data/domains';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type ProjectsProps = {
  preview?: boolean;
  domainId?: number;
};

export default function Projects({ preview = false, domainId }: ProjectsProps) {
  const filteredProjects = domainId ? projects.filter((project) => project.domainId === domainId) : projects;
  const visibleProjects = preview ? filteredProjects.slice(0, 2) : filteredProjects;

  const getStatusClasses = (status: string) => {
    if (status === 'completed') {
      return 'bg-[rgba(191,217,202,0.92)] text-[var(--brand-strong)]';
    }

    return 'bg-[rgba(230,198,128,0.88)] text-[var(--ink)]';
  };

  return (
    <section id="projects" className="py-14 md:py-16">
      <div className="container-custom">
        <p className="section-kicker">Applied Delivery</p>
        <h2 className="section-title">Projects And Prototypes</h2>
        <p className="section-subtitle">
          Discover practical tools, technical pilots, and research-informed builds designed to strengthen domain insight, improve communication, and support better operational decisions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-40 bg-gradient-to-br from-[rgba(182,213,222,0.42)] via-[rgba(252,252,251,0.94)] to-[rgba(231,205,213,0.36)] flex items-center justify-center border-b border-[var(--line)]">
                <div className="text-[var(--muted)] text-sm font-semibold text-center px-6">{project.imageLabel}</div>
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-[var(--ink)]">{project.title}</h3>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${getStatusClasses(project.status)}`}>
                    {project.status || 'active'}
                  </span>
                </div>
                <p className="text-[var(--muted)] mb-4 leading-relaxed">{project.description}</p>

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
                  Domain: {getDomainById(project.domainId)?.title || 'Unassigned'}
                </p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-[rgba(191,217,202,0.34)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <span>{project.linkLabel}</span>
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[var(--muted)]">Project profile available on request.</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {preview && filteredProjects.length > visibleProjects.length ? (
          <div className="mt-8">
            <Link href="/projects" className="btn-secondary">View All Projects</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}