'use client';

import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-14 md:py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">About The Showcase</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-4">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">What this site represents</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              This is a landing page for University of Huddersfield work on decision support systems and applied AI. It brings together domain-focused research, technical prototypes, and delivery-oriented projects with public and private sector partners.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The emphasis is practical: building models, testing generative AI, orchestrating agentic workflows, analysing operational data, and turning complex evidence into usable informatics and visualisations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Focus areas</h3>
            <ul className="space-y-3">
              {[
                'Machine learning models for risk, prioritisation, and service outcomes',
                'Generative AI tools for communication, triage, and knowledge support',
                'Agentic workflows that automate research, operations, and reporting tasks',
                'Data analysis for domain teams, place-based studies, and operational insight',
                'Decision informatics, linked information, and evidence-rich dashboards',
                'Interactive visualisations that make complex data easier to act on',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                  />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
