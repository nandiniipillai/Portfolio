'use client';

import { motion } from 'framer-motion';
import DisplayTitle from './DisplayTitle';
import ScrollReveal from './ScrollReveal';

export default function BriefPage({
  title,
  oneLiner,
  category,
  meta = [],
  accent = '#B4B4B0',
  overview,
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
    >
      <article className="relative">
        <header className="relative px-5 md:px-10 pt-24 md:pt-32 pb-14 md:pb-16 overflow-hidden">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20"
            style={{ background: accent }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="text-[11px] tracking-[0.24em] uppercase mb-6" style={{ color: accent }}>
                Other work{category ? ` · ${category}` : ''}
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
            {meta.length > 0 && (
              <ScrollReveal>
                <dl className={`mt-12 grid grid-cols-2 ${meta.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-6 md:gap-8 border-t border-white/[0.06] pt-8`}>
                  {meta.map(([label, value], i) => (
                    <div key={i}>
                      <dt className="text-[11px] tracking-[0.24em] uppercase text-ash mb-1.5">{label}</dt>
                      <dd className="text-silver text-sm md:text-base">
                        {Array.isArray(value) ? value.join(' · ') : value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>
            )}
          </div>
        </header>

        {overview && (
          <section className="px-5 md:px-10 pb-4 md:pb-6">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-fog text-lg md:text-xl leading-relaxed space-y-5">
                {overview}
              </div>
            </ScrollReveal>
          </section>
        )}

        {children && (
          <section className="px-5 md:px-10 py-10 md:py-14">
            <div className="mx-auto max-w-5xl space-y-8">{children}</div>
          </section>
        )}
      </article>
    </motion.div>
  );
}
