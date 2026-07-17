'use client';

import { useAccent } from '@/lib/caseStudyTheme';
import ScrollReveal from './ScrollReveal';

export default function OutcomeSpine({ outcome, problem, decisions, change }) {
  const accent = useAccent();
  return (
    <section className="px-5 md:px-10 py-16 md:py-24 border-y border-white/[0.06] bg-carbon">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-[11px] tracking-[0.24em] uppercase font-medium mb-6" style={{ color: accent }}>
            The outcome
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <p className="font-heading text-silver tracking-tightest text-3xl md:text-5xl leading-tight max-w-4xl">
            {outcome}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            { label: 'The problem', body: problem },
            { label: 'The decisions', body: decisions },
            { label: 'What changed', body: change },
          ].map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div>
                <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-3">{c.label}</div>
                <p className="text-fog text-base md:text-lg leading-relaxed">{c.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
