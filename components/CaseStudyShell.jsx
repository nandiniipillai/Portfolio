'use client';

import Link from 'next/link';
import { AccentProvider } from '@/lib/caseStudyTheme';
import { nextCaseStudy } from '@/lib/case-studies';
import { SITE } from '@/lib/site';
import DisplayTitle from './DisplayTitle';
import ScrollReveal from './ScrollReveal';
import ScrollProgress from './ScrollProgress';

export default function CaseStudyShell({ slug, index, title, oneLiner, meta = [], accent, children }) {
  const next = nextCaseStudy(slug);
  return (
    <AccentProvider accent={accent}>
      <ScrollProgress accent={accent} />
      <article className="relative">
        {/* Colored glow header */}
        <header className="relative px-5 md:px-10 pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-25"
            style={{ background: accent }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="flex items-center gap-4 text-[11px] tracking-[0.24em] uppercase text-fog mb-6">
                <span style={{ color: accent }}>Case study {index}</span>
                {meta[3] && <span className="text-ash">·</span>}
                {meta[3] && <span>{meta[3][1]}</span>}
              </div>
            </ScrollReveal>
            <DisplayTitle>{title}</DisplayTitle>
            {oneLiner && (
              <ScrollReveal>
                <p className="mt-6 md:mt-8 text-fog text-xl md:text-2xl max-w-3xl leading-snug">
                  {oneLiner}
                </p>
              </ScrollReveal>
            )}

            <ScrollReveal>
              <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/[0.06] pt-8">
                {meta.map(([label, value], i) => (
                  <div key={i}>
                    <dt className="text-[11px] tracking-[0.24em] uppercase text-ash mb-1.5">{label}</dt>
                    <dd className="text-silver text-sm md:text-base">{value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </header>

        {children}

        {/* Next step / mailto CTA */}
        <section className="px-5 md:px-10 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">Next step</div>
              <p className="font-heading tracking-tightest text-silver text-3xl md:text-5xl leading-tight mb-8">
                Want to talk through this project?
              </p>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent(`About ${title}`)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:-translate-y-0.5"
                style={{ background: accent, color: '#0b0b0a' }}
              >
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Next case study */}
        <section className="px-5 md:px-10 pb-20">
          <div className="mx-auto max-w-5xl border-t border-white/[0.06] pt-10 flex items-center justify-between">
            <span className="text-[11px] tracking-[0.24em] uppercase text-ash">Next case study</span>
            <Link
              href={next.path}
              className="group flex items-center gap-3 text-cream font-heading tracking-tightest text-2xl md:text-3xl hover:text-amber transition-colors"
              style={{ ['--accent']: next.accent }}
            >
              {next.title}
              <span className="card-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </article>
    </AccentProvider>
  );
}
