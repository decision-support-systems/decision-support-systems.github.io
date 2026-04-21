const FALLBACK_SITE_URL = 'https://decision-support-systems.github.io';

export const SITE_NAME = 'University of Huddersfield | Decision Support Systems';
export const SITE_SHORT_NAME = 'UoH Decision Support Systems';
export const SITE_DESCRIPTION =
  'Discover how the University of Huddersfield applies AI, machine learning, data analysis, and decision informatics to practical domain challenges through research-led projects and outputs.';

export function getSiteUrl() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredSiteUrl) {
    return FALLBACK_SITE_URL;
  }

  return configuredSiteUrl.endsWith('/')
    ? configuredSiteUrl.slice(0, -1)
    : configuredSiteUrl;
}

export function absoluteUrl(path = '/') {
  const baseUrl = getSiteUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}