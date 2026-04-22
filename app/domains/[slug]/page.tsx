import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DomainKpis from '../../components/DomainKpis';
import { domains, getDomainBySlug } from '@/data/domains';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { absoluteUrl } from '@/app/lib/seo';

type DomainPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return domains.map((domain) => ({ slug: domain.slug }));
}

export function generateMetadata({ params }: DomainPageProps): Metadata {
  const domain = getDomainBySlug(params.slug);

  if (!domain) {
    return {
      title: 'Domain Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${domain.title} Domain`,
    description: domain.longDescription,
    alternates: {
      canonical: `/domains/${domain.slug}`,
    },
    keywords: [
      `${domain.title} decision support`,
      `${domain.title} AI research`,
      `${domain.title} data-driven decisions`,
      'University of Huddersfield',
    ],
    openGraph: {
      title: `${domain.title} Decision Support Systems`,
      description: domain.shortDescription,
      url: absoluteUrl(`/domains/${domain.slug}`),
      type: 'article',
    },
  };
}

export default function DomainPage({ params }: DomainPageProps) {
  const domain = getDomainBySlug(params.slug);

  if (!domain) {
    notFound();
  }

  const domainProjects = projects.filter((project) => project.domainId === domain.id);
  const domainPublications = publications.filter((publication) => publication.domainId === domain.id);
  const activeProjectCount = domainProjects.filter((project) => project.status === 'active').length;
  const completedProjectCount = domainProjects.filter((project) => project.status === 'completed').length;
  const focusThemeCount = new Set([
    ...domainProjects.flatMap((project) => project.tags),
    ...domainPublications.flatMap((publication) => publication.focusThemes || []),
  ]).size;
  const deliveryFootprintCount = new Set([
    ...domainProjects.flatMap((project) => project.deliveryContexts || []),
    ...domainPublications.flatMap((publication) => publication.deliveryContexts || []),
  ]).size;
  const impactFactor = domainPublications.length
    ? domainPublications.reduce((sum, publication) => sum + (publication.impactFactor || 0), 0) / domainPublications.length
    : 0;
  const pageUrl = absoluteUrl(`/domains/${domain.slug}`);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        url: pageUrl,
        name: `${domain.title} Decision Domain`,
        description: domain.longDescription,
        about: domain.title,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: absoluteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Domains',
            item: absoluteUrl('/domains'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: domain.title,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#projects`,
        name: `${domain.title} Projects`,
        numberOfItems: domainProjects.length,
        itemListElement: domainProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            about: domain.title,
            keywords: project.tags.join(', '),
          },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#outputs`,
        name: `${domain.title} Research Outputs`,
        numberOfItems: domainPublications.length,
        itemListElement: domainPublications.map((publication, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'ScholarlyArticle',
            headline: publication.title,
            description: publication.summary,
            isPartOf: publication.venue,
            about: domain.title,
            url: publication.link || pageUrl,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="py-14 md:py-16">
        <div className="container-custom">
          <p className="section-kicker">Decision Domain</p>
          <h1 className="section-title">{domain.title}</h1>
          <p className="section-subtitle">{domain.longDescription}</p>

          <DomainKpis
            activeProjects={activeProjectCount}
            completedProjects={completedProjectCount}
            researchOutputs={domainPublications.length}
            impactFactor={impactFactor}
            focusThemes={focusThemeCount}
            deliveryFootprint={deliveryFootprintCount}
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Projects</h2>
              {domainProjects.length ? (
                <div className="space-y-4">
                  {domainProjects.map((project) => (
                    <article key={project.id} className="glass-card rounded-2xl p-5">
                      <h3 className="text-lg font-semibold text-[var(--ink)]">{project.title}</h3>
                      <p className="mt-2 text-[var(--muted)] leading-relaxed">{project.description}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--muted)]">No projects published for this domain yet.</p>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Research Outputs</h2>
              {domainPublications.length ? (
                <div className="space-y-4">
                  {domainPublications.map((publication) => (
                    <article key={publication.id} className="rounded-2xl border-l-4 border-[var(--brand)] bg-[var(--surface)] px-6 py-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-[var(--ink)] mt-2">{publication.title}</h3>
                      <p className="text-[var(--muted)] mt-2 leading-relaxed">{publication.summary}</p>
                      <p className="text-[var(--muted)] italic mt-2">{publication.venue}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--muted)]">No publications published for this domain yet.</p>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/domains" className="btn-secondary">All Domains</Link>
            <Link href="/projects" className="btn-secondary">All Projects</Link>
            <Link href="/outputs" className="btn-secondary">All Outputs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
