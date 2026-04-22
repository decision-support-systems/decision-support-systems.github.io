'use client';

import { Activity, BarChart3, BookOpenText, BriefcaseBusiness, CheckCircle2, Layers3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type DomainKpisProps = {
  activeProjects: number;
  completedProjects: number;
  researchOutputs: number;
  impactFactor: number;
  focusThemes: number;
  deliveryFootprint: number;
};

type KpiCard = {
  label: string;
  value: number;
  decimals?: number;
  detail: string;
  icon: typeof BriefcaseBusiness;
  accentClass: string;
};

function CounterValue({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    if (value === 0) {
      setDisplayValue(0);
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setDisplayValue(value);
      return undefined;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const duration = Math.min(1400, 700 + value * 110);
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const precisionFactor = 10 ** decimals;
      setDisplayValue(Math.round(value * easedProgress * precisionFactor) / precisionFactor);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();
        frameId = window.requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [decimals, value]);

  return (
    <span ref={elementRef}>
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

export default function DomainKpis({
  activeProjects,
  completedProjects,
  researchOutputs,
  impactFactor,
  focusThemes,
  deliveryFootprint,
}: DomainKpisProps) {
  const cards: KpiCard[] = [
    {
      label: 'Active Projects',
      value: activeProjects,
      detail: 'Projects currently being delivered or iterated.',
      icon: BriefcaseBusiness,
      accentClass: 'panel-mint',
    },
    {
      label: 'Completed Projects',
      value: completedProjects,
      detail: 'Projects that have delivered a completed outcome.',
      icon: CheckCircle2,
      accentClass: 'bg-[rgba(231,205,213,0.35)]',
    },
    {
      label: 'Research Outputs',
      value: researchOutputs,
      detail: 'Publications and formal evidence outputs linked here.',
      icon: BookOpenText,
      accentClass: 'panel-peach',
    },
    {
      label: 'Impact Factor',
      value: impactFactor,
      decimals: 1,
      detail: 'Average journal impact factor across listed outputs.',
      icon: Activity,
      accentClass: 'bg-[rgba(230,198,128,0.3)]',
    },
    {
      label: 'Focus Themes',
      value: focusThemes,
      detail: 'Unique themes combined from project and output metadata.',
      icon: BarChart3,
      accentClass: 'bg-[rgba(182,213,222,0.28)]',
    },
    {
      label: 'Delivery Footprint',
      value: deliveryFootprint,
      detail: 'Distinct delivery contexts represented in this domain.',
      icon: Layers3,
      accentClass: 'panel-lilac',
    },
  ];

  return (
    <section className="mb-10 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(252,252,251,0.72)] shadow-[0_18px_42px_rgba(39,49,59,0.08)] backdrop-blur-sm">
      <div className="p-6 lg:p-8">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">Domain KPIs</p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--ink)]">Delivery and evidence snapshot</h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            These counters summarise current project status, output quality, thematic breadth, and where the domain is being applied.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.label}
                className={`rounded-[1.5rem] border border-[var(--line)] p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${card.accentClass}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">{card.label}</p>
                    <p className="mt-3 text-4xl font-bold tracking-tight text-[var(--ink)]">
                      <CounterValue value={card.value} decimals={card.decimals} />
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(252,252,251,0.72)] text-[var(--brand-strong)] shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{card.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}