'use client';

import Link from 'next/link';
import { Copyright } from 'lucide-react';
import { domains } from '@/data/domains';
import SiteLogo from './SiteLogo';

export default function Footer() {
  return (
    <footer className="bg-[var(--footer)] text-gray-100 py-14">
      <div className="container-custom">
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-[1.8fr_1fr_1fr_1fr] xl:gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SiteLogo size={34} className="rounded-lg" />
              <span className="font-bold text-lg">UoH AI with Decision Support Systems</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              University of Huddersfield work spanning machine learning, generative AI, agents, analytics, informatics, and visualisation for domain-focused decision contexts.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:col-span-1 xl:col-span-3 xl:gap-4">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/domains" className="hover:text-white transition-colors">Domains</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/outputs" className="hover:text-white transition-colors">Outputs</Link></li>
                <li><Link href="/people" className="hover:text-white transition-colors">People</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Domains</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {domains.map((domain) => (
                  <li key={domain.slug}>
                    <Link href={`/domains/${domain.slug}`} className="hover:text-white transition-colors">
                      {domain.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="https://github.com/decision-support-systems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <Link href="/people" className="hover:text-white transition-colors">Contact The Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(182,213,222,0.25)] pt-8 text-center text-gray-300 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Copyright aria-hidden="true" className="h-4 w-4" />
            <span>{new Date().getFullYear()} <a href='https://www.hud.ac.uk/' className="hover:text-white transition-colors" target='_blank' rel='noopener noreferrer'>University of Huddersfield </a> 
              AI with Decision Support Systems showcase.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
