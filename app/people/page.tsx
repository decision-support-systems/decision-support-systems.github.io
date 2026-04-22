import type { Metadata } from 'next';
import People from '../components/People';
import { people } from '@/data/people';
import { absoluteUrl } from '../lib/seo';

export const metadata: Metadata = {
  title: 'People and Expertise',
  description:
    'Meet the researchers and practitioners behind University of Huddersfield AI with Decision Support Systems work in AI, analytics, and decision informatics.',
  alternates: {
    canonical: '/people',
  },
  keywords: [
    'AI researchers Huddersfield',
    'decision support team',
    'housing and AI experts',
    'research capability directory',
  ],
  openGraph: {
    title: 'People Behind AI with Decision Support Systems',
    description:
      'A cross-disciplinary team delivering research, prototypes, and practical decision intelligence solutions.',
    url: absoluteUrl('/people'),
    type: 'profile',
  },
};

export default function PeoplePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/people#collection'),
        url: absoluteUrl('/people'),
        name: 'People and Expertise',
        description:
          'Profiles of contributors working on AI with Decision Support Systems at the University of Huddersfield.',
      },
      {
        '@type': 'ItemList',
        '@id': absoluteUrl('/people#list'),
        name: 'Team Profiles',
        numberOfItems: people.length,
        itemListElement: people.map((person, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Person',
            name: person.name,
            jobTitle: person.designation,
            email: person.email,
            image: absoluteUrl(person.image),
            worksFor: {
              '@type': 'CollegeOrUniversity',
              name: 'University of Huddersfield',
              url: 'https://www.hud.ac.uk/',
            },
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
      <People eagerImages />
    </>
  );
}
