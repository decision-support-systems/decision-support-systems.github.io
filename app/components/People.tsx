'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { people } from '@/data/people';

type PeopleProps = {
  preview?: boolean;
  eagerImages?: boolean;
};

export default function People({ preview = false, eagerImages = false }: PeopleProps) {
  const visiblePeople = preview ? people.slice(0, 3) : people;

  return (
    <section id="capabilities" className="py-14 md:py-16">
      <div className="container-custom">
        <p className="section-kicker">Team and People</p>
        <h2 className="section-title">People Involved</h2>
        <p className="section-subtitle">
          A cross-disciplinary team bringing together domain knowledge, technical design, and applied AI delivery experience.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visiblePeople.map((person, index) => (
            <article
              key={person.id}
              className={`glass-card rounded-2xl p-5 float-up delay-${Math.min(index + 1, 3)}`}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={person.image}
                  alt={`${person.name} profile photo`}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full border border-[#d5e2dd] object-cover"
                  loading={eagerImages ? 'eager' : 'lazy'}
                  priority={eagerImages && index < 3}
                />
                <div>
                  <h3 className="text-base font-semibold text-[#1b2a2f]">{person.name}</h3>
                  <p className="text-sm text-[#4c5f66]">{person.designation}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#0b6e6e] hover:underline"
                  >
                    <Mail aria-hidden="true" className="h-4 w-4" />
                    <span>{person.email}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {preview ? (
          <div className="mt-8">
            <Link href="/people" className="btn-secondary">View All People</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
