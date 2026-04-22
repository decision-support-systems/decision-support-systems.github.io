'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { domains } from '@/data/domains';
import SiteLogo from './SiteLogo';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  {
    name: 'Domains',
    href: '/domains',
    children: domains.map((domain) => ({
      name: domain.title,
      href: `/domains/${domain.slug}`,
      description: domain.shortDescription,
    })),
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Outputs', href: '/outputs' },
  { name: 'People', href: '/people' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  const normalizePath = (value: string) => {
    if (!value) {
      return '/';
    }

    if (value === '/') {
      return '/';
    }

    return value.endsWith('/') ? value.slice(0, -1) : value;
  };

  useEffect(() => {
    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, currentHash]);

  const isItemActive = (href: string) => {
    const normalizedPathname = normalizePath(pathname || '/');
    const normalizedHref = normalizePath(href);

    if (href.includes('#')) {
      const [pathPart, hashPart] = href.split('#');
      return normalizedPathname === normalizePath(pathPart) && currentHash === `#${hashPart}`;
    }

    if (normalizedHref === '/domains') {
      return normalizedPathname === '/domains' || normalizedPathname.startsWith('/domains/');
    }

    return normalizedPathname === normalizedHref;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(252,252,251,0.84)] backdrop-blur-md">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 float-up">
            <SiteLogo size={44} />
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-xs font-semibold uppercase tracking-[0.14em] lg:tracking-[0.16em] whitespace-nowrap text-[var(--brand-strong)]">University of Huddersfield</p>
              <p className="text-lg md:text-base lg:text-xl leading-tight whitespace-nowrap font-display font-semibold text-[var(--ink)]">AI with Decision Support Systems</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center lg:gap-6 lg:text-sm font-medium text-[var(--muted)]">
            {menuItems.map((item) => {
              const isActive = isItemActive(item.href);

              if (item.children) {
                return (
                  <div key={item.name} className="group relative">
                    <Link
                      href={item.href}
                      aria-haspopup="menu"
                      className={`inline-flex items-center gap-1 transition-colors hover:text-[var(--brand-strong)] ${isActive ? 'text-[var(--brand-strong)] font-bold' : ''}`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-[1px] group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                    </Link>

                    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <div className="rounded-3xl border border-[var(--line)] bg-[rgba(252,252,251,0.98)] p-3 shadow-[0_22px_48px_rgba(39,49,59,0.14)] backdrop-blur-md">
                        <div className="mb-2 px-3 py-2">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">Research domains</p>
                          <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">Explore active decision support themes across the group.</p>
                        </div>

                        <div className="flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`rounded-2xl px-3 py-3 transition-colors ${isItemActive(child.href) ? 'bg-[rgba(182,213,222,0.34)]' : 'hover:bg-[rgba(191,217,202,0.22)]'}`}
                            >
                              <p className={`text-sm font-semibold ${isItemActive(child.href) ? 'text-[var(--brand-strong)]' : 'text-[var(--ink)]'}`}>{child.name}</p>
                              <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">{child.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors hover:text-[var(--brand-strong)] ${isActive ? 'text-[var(--brand-strong)] font-bold' : ''}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>

          <a
            href="https://github.com/decision-support-systems"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub organization"
            className="hidden lg:inline-flex btn-primary float-up delay-1"
          >
            GitHub
          </a>
        </div>

        {isMobileMenuOpen ? (
          <div className="mt-4 lg:hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-3 shadow-sm">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-1">
                  <Link
                    href={item.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isItemActive(item.href) ? 'bg-[rgba(182,213,222,0.34)] text-[var(--brand-strong)]' : 'text-[var(--muted)] hover:bg-[rgba(191,217,202,0.3)]'}`}
                  >
                    {item.name}
                  </Link>

                  {item.children ? (
                    <div className="ml-3 flex flex-col gap-1 border-l border-[var(--line)] pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`rounded-lg px-3 py-2 text-sm transition-colors ${isItemActive(child.href) ? 'bg-[rgba(182,213,222,0.3)] text-[var(--brand-strong)]' : 'text-[var(--muted)] hover:bg-[rgba(191,217,202,0.22)]'}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <a
                href="https://github.com/decision-support-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-primary"
                aria-label="Open GitHub organization"
              >
                GitHub
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
