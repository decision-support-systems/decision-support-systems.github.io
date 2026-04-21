import type { Metadata } from 'next';
import Domains from '../components/Domains';
import { domains } from '@/data/domains';
import { absoluteUrl } from '../lib/seo';

export const metadata: Metadata = {
  title: 'Decision Domains',
  description:
    'Browse domain areas where the University of Huddersfield applies decision support systems, including health care and housing strategy.',
  alternates: {
    canonical: '/domains',
  },
  keywords: [
    'decision support domains',
    'health care AI decision support',
    'housing retrofit decision tools',
    'University of Huddersfield research domains',
  ],
  openGraph: {
    title: 'Decision Support Domains',
    description:
      'Explore practical AI and decision informatics domain areas, each linked to active projects and published outputs.',
    url: absoluteUrl('/domains'),
    type: 'website',
  },
};

export default function DomainsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/domains#collection'),
        url: absoluteUrl('/domains'),
        name: 'Decision Support Domains',
        description:
          'A structured list of decision support domains covered by the University of Huddersfield.',
        isPartOf: {
          '@id': absoluteUrl('/#website'),
        },
      },
      {
        '@type': 'ItemList',
        '@id': absoluteUrl('/domains#list'),
        name: 'Domain Areas',
        numberOfItems: domains.length,
        itemListElement: domains.map((domain, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: domain.title,
          url: absoluteUrl(`/domains/${domain.slug}`),
          description: domain.shortDescription,
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
      <Domains />
    </>
  );
}
