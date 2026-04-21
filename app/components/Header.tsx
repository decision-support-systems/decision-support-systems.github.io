'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import SiteLogo from './SiteLogo';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Domains', href: '/domains' },
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

    if (href.includes('#')) {
      const [pathPart, hashPart] = href.split('#');
      return normalizedPathname === normalizePath(pathPart) && currentHash === `#${hashPart}`;
    }

    return normalizedPathname === normalizePath(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e4e1] bg-white/80 backdrop-blur-md">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 float-up">
            <SiteLogo size={44} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0b6e6e]">University of Huddersfield</p>
              <p className="text-lg md:text-xl font-display font-semibold text-[#1b2a2f]">Decision Support Systems</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#2f464d]">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-[#0b6e6e] ${isItemActive(item.href) ? 'text-[#0b6e6e] font-bold' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d3dfdb] bg-white text-[#365058]"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>

          <a
            href="https://github.com/decision-support-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary float-up delay-1"
          >
            GitHub
          </a>
        </div>

        {isMobileMenuOpen ? (
          <div className="mt-4 md:hidden rounded-2xl border border-[#d3dfdb] bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isItemActive(item.href) ? 'bg-[#e9f3f3] text-[#0b6e6e]' : 'text-[#365058] hover:bg-[#f3f8f7]'}`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://github.com/decision-support-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-primary"
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
