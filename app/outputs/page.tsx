import type { Metadata } from 'next';
import Publications from '../components/Publications';
import { publications } from '@/data/publications';
import { getDomainById } from '@/data/domains';
import { absoluteUrl } from '../lib/seo';

export const metadata: Metadata = {
  title: 'Research Outputs',
  description:
    'Read research outputs, implementation findings, and evidence briefs connected to AI-enabled decision support at the University of Huddersfield.',
  alternates: {
    canonical: '/outputs',
  },
  keywords: [
    'decision support publications',
    'AI research outputs',
    'University of Huddersfield papers',
    'retrofit research evidence',
  ],
  openGraph: {
    title: 'Decision Support Research Outputs',
    description:
      'A curated set of publications and evidence-led outputs supporting applied AI adoption and implementation.',
    url: absoluteUrl('/outputs'),
    type: 'website',
  },
};

export default function OutputsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/outputs#collection'),
        url: absoluteUrl('/outputs'),
        name: 'Research Outputs',
        description:
          'A publication and research evidence collection for University of Huddersfield decision support systems work.',
      },
      {
        '@type': 'ItemList',
        '@id': absoluteUrl('/outputs#list'),
        name: 'Publications and Evidence Outputs',
        numberOfItems: publications.length,
        itemListElement: publications.map((publication, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'ScholarlyArticle',
            headline: publication.title,
            description: publication.summary,
            isPartOf: publication.venue,
            about: getDomainById(publication.domainId)?.title || 'Decision support systems',
            url: publication.link || absoluteUrl('/outputs'),
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
      <Publications />
    </>
  );
}
