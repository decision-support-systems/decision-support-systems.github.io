import type { Metadata } from 'next';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Projects from './components/Projects';
import Publications from './components/Publications';
import People from './components/People';
import { domains } from '@/data/domains';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { people } from '@/data/people';
import { absoluteUrl } from './lib/seo';

export const metadata: Metadata = {
  title: 'Applied AI with Decision Support Systems',
  description:
    'Explore University of Huddersfield projects, outputs, and team expertise in AI-powered AI with Decision Support Systems across housing, health care, and emerging domains.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'AI with Decision Support Systems UK',
    'AI for decision making',
    'Huddersfield housing AI',
    'applied machine learning research',
  ],
  openGraph: {
    title: 'Applied AI with Decision Support Systems at the University of Huddersfield',
    description:
      'A research-led showcase of practical AI, data analysis, and decision informatics projects, outputs, and collaborations.',
    url: absoluteUrl('/'),
    type: 'website',
  },
};

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': absoluteUrl('/#organization'),
        name: 'University of Huddersfield AI with Decision Support Systems',
        url: absoluteUrl('/'),
        parentOrganization: {
          '@type': 'CollegeOrUniversity',
          name: 'University of Huddersfield',
          url: 'https://www.hud.ac.uk/',
        },
        areaServed: 'United Kingdom',
        knowsAbout: [
          'AI with Decision Support Systems',
          'Machine learning',
          'Generative AI',
          'Decision informatics',
          'Data visualisation',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        url: absoluteUrl('/'),
        name: 'UoH AI with Decision Support Systems Showcase',
        description:
          'Explore AI-enabled decision support research, projects, outputs, and people at the University of Huddersfield.',
        publisher: {
          '@id': absoluteUrl('/#organization'),
        },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'ItemList',
        '@id': absoluteUrl('/#site-summary'),
        name: 'AI with Decision Support Systems Showcase Summary',
        numberOfItems: domains.length + projects.length + publications.length + people.length,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: `Domains (${domains.length})`,
            url: absoluteUrl('/domains'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `Projects (${projects.length})`,
            url: absoluteUrl('/projects'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Research Outputs (${publications.length})`,
            url: absoluteUrl('/outputs'),
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: `People (${people.length})`,
            url: absoluteUrl('/people'),
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <main>
        <Hero />
        <About />
        <Domains />
        <Projects preview />
        <Publications preview />
        <People preview />
      </main>
    </>
  );
}
