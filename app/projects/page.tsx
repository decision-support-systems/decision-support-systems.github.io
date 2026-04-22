import type { Metadata } from 'next';
import Projects from '../components/Projects';
import { projects } from '@/data/projects';
import { getDomainById } from '@/data/domains';
import { absoluteUrl } from '../lib/seo';

export const metadata: Metadata = {
  title: 'Projects and Prototypes',
  description:
    'Review applied AI and decision support projects from the University of Huddersfield, including housing retrofit and evidence-driven planning tools.',
  alternates: {
    canonical: '/projects',
  },
  keywords: [
    'AI projects University of Huddersfield',
    'decision support prototypes',
    'retrofit planning tools',
    'applied data science projects',
  ],
  openGraph: {
    title: 'Decision Support Projects and Prototypes',
    description:
      'Explore delivery-focused projects that transform research into practical decision tools.',
    url: absoluteUrl('/projects'),
    type: 'website',
  },
};

export default function ProjectsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/projects#collection'),
        url: absoluteUrl('/projects'),
        name: 'Projects and Prototypes',
        description:
          'A collection of practical decision support and applied AI projects developed by the University of Huddersfield.',
      },
      {
        '@type': 'ItemList',
        '@id': absoluteUrl('/projects#list'),
        name: 'Project Portfolio',
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            url: absoluteUrl('/projects'),
            about: getDomainById(project.domainId)?.title || 'AI with Decision Support Systems',
            keywords: project.tags.join(', '),
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
      <Projects />
    </>
  );
}
