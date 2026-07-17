'use client';

import Link from 'next/link';
import { EDUCATION, EXPERIENCE } from '@/lib/site';
import ScrollReveal from './ScrollReveal';

export default function ExperienceTimeline() {
  return (
    <div className="mt-20 md:mt-28">
      {/* Education */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-6">Education</div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-20">
        {EDUCATION.map((e, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="rounded-2xl bg-carbon border border-white/[0.05] p-6 md:p-8 relative">
              <span className="absolute top-4 left-6 text-4xl text-fog/40 font-serif leading-none" aria-hidden="true">
                ❛❛
              </span>
              <div className="pt-6">
                <div className="font-heading tracking-tightest text-silver text-xl md:text-2xl">{e.degree}</div>
                <div className="text-fog mt-1">{e.school}</div>
                <div className="text-ash mt-4 text-sm leading-relaxed">
                  <span className="text-fog">Coursework:</span> {e.coursework}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Experience */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-6">Experience</div>
      </ScrollReveal>
      <div className="divide-y divide-white/[0.06]">
        {EXPERIENCE.map((row, i) => {
          const inner = (
            <div
              className="py-6 grid gap-4 items-start hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-xl"
              style={{ gridTemplateColumns: 'minmax(140px, 344px) minmax(180px, 320px) 1fr' }}
            >
              <div className="text-ash text-sm md:text-base">{row.years}</div>
              <div>
                <div className="text-silver font-medium">{row.role}</div>
                <div className="text-fog text-sm">{row.org}</div>
              </div>
              <div className="text-fog text-sm md:text-base leading-relaxed">
                {row.description}
                {row.slug && <span className="ml-2 card-arrow text-silver" aria-hidden="true">↗</span>}
              </div>
            </div>
          );
          return (
            <ScrollReveal key={i}>
              {row.slug ? (
                <Link href={`/work/${row.slug}`} className="group block">
                  {inner}
                </Link>
              ) : (
                inner
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
