'use client';

import Link from 'next/link';
import { EDUCATION, EXPERIENCE } from '@/lib/site';
import ScrollReveal from './ScrollReveal';

function EducationFlipCard({ e }) {
  return (
    <div className="group h-full min-h-[340px] [perspective:1200px]">
      <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl bg-carbon border border-white/[0.05] p-6 md:p-8 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] flex flex-col justify-between">
          <span className="text-4xl text-fog/40 font-serif leading-none" aria-hidden="true">
            ❛❛
          </span>
          <div>
            <div className="text-ash text-xs tracking-[0.2em] uppercase">{e.years}</div>
            <div className="mt-2 font-heading tracking-tightest text-silver text-xl md:text-2xl leading-tight">
              {e.degree}
            </div>
            <div className="text-fog mt-1 text-sm md:text-base">{e.school}</div>
          </div>
          <div className="text-ash text-[10px] tracking-[0.24em] uppercase">
            Hover to see more
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl bg-carbon border border-white/[0.05] p-6 md:p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] flex flex-col justify-center">
          <div className="text-ash text-[10px] tracking-[0.24em] uppercase mb-4">Highlights</div>
          <ul className="space-y-3 list-disc list-outside pl-5 marker:text-fog/60">
            {(e.highlights || []).map((h, j) => (
              <li key={j} className="text-fog text-sm leading-relaxed pl-1">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="mt-20 md:mt-28">
      {/* Education */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-6">Education</div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-20 items-stretch">
        {EDUCATION.map((e, i) => (
          <ScrollReveal key={i} delay={i * 0.06} className="h-full">
            <EducationFlipCard e={e} />
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
                {row.bullets && row.bullets.length > 0 ? (
                  <ul className="space-y-2 list-disc list-outside pl-5 marker:text-fog/60">
                    {row.bullets.map((b, j) => (
                      <li key={j} className="pl-1">
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {row.slug && (
                  <span className="ml-2 card-arrow text-silver inline-block mt-2" aria-hidden="true">
                    ↗
                  </span>
                )}
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
