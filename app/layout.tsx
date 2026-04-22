import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollCompassBackground from './components/ScrollCompassBackground';
import { SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME, absoluteUrl, getSiteUrl } from './lib/seo';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_NAME,
    template: '%s | UoH AI with Decision Support Systems',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_SHORT_NAME,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'AI with Decision Support Systems',
    'University of Huddersfield',
    'Applied AI research',
    'Machine learning projects',
    'Decision informatics',
    'Generative AI',
    'Housing analytics',
    'Research outputs',
  ],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: absoluteUrl('/'),
    siteName: SITE_SHORT_NAME,
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'research',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} font-sans`}>
        <ScrollCompassBackground />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
