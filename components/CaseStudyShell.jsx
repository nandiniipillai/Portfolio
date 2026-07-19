'use client';

import Link from 'next/link';
import { AccentProvider } from '@/lib/caseStudyTheme';
import { nextCaseStudy, getCaseStudy } from '@/lib/case-studies';
import { SITE } from '@/lib/site';
import DisplayTitle from './DisplayTitle';
import ScrollReveal from './ScrollReveal';
import ScrollProgress from './ScrollProgress';

export default function CaseStudyShell({ slug, index, title, oneLiner, meta = [], accent, readTime, children }) {
  const next = nextCaseStudy(slug);
  const current = getCaseStudy(slug);
  const effectiveReadTime = readTime ?? current?.readTime;
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
                {effectiveReadTime && <span className="text-ash">·</span>}
                {effectiveReadTime && <span>{effectiveReadTime}</span>}
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
                    <dd className="text-silver text-sm md:text-base">
                      {Array.isArray(value) ? (
                        <div className="space-y-0.5">
                          {value.map((v, j) => (
                            <div key={j}>{v}</div>
                          ))}
                        </div>
                      ) : (
                        value
                      )}
                    </dd>
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

        {/* Next case study — mini card with accent glow */}
        <section className="px-5 md:px-10 pb-20">
          <div className="mx-auto max-w-5xl">
            <Link
              href={next.path}
              className="group card-tex block relative w-full py-8 md:py-10 px-6 md:px-8 overflow-hidden"
            >
              <div
                className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: next.accent }}
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-3">
                    Next case study
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-[11px] tracking-[0.24em] uppercase"
                      style={{ color: next.accent }}
                    >
                      {next.index}
                    </span>
                    <h3
                      className="font-heading tracking-tightest text-silver leading-none"
                      style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}
                    >
                      {next.title}
                    </h3>
                  </div>
                  {next.oneLiner && (
                    <p className="mt-3 text-fog text-sm md:text-base max-w-2xl">
                      {next.oneLiner}
                    </p>
                  )}
                </div>
                <span className="card-arrow text-silver text-2xl shrink-0" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </AccentProvider>
  );
}
