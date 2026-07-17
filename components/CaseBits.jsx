'use client';

import { useAccent } from '@/lib/caseStudyTheme';
import ScrollReveal from './ScrollReveal';

export function Section({ title, tone = 'default', children, className = '' }) {
  const bg = tone === 'sunken' ? 'bg-graphite' : '';
  return (
    <section className={`py-16 md:py-24 px-5 md:px-10 ${bg} ${className}`}>
      <div className="mx-auto max-w-5xl">
        {title ? (
          <ScrollReveal as="h2" className="font-heading tracking-tightest text-silver text-3xl md:text-5xl mb-8 md:mb-12">
            {title}
          </ScrollReveal>
        ) : null}
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children, className = '' }) {
  return (
    <ScrollReveal>
      <div className={`text-fog text-lg md:text-xl leading-relaxed max-w-measure ${className}`}>
        {children}
      </div>
    </ScrollReveal>
  );
}

export function SubList({ items }) {
  return (
    <ScrollReveal>
      <ul className="space-y-3 text-fog text-lg leading-relaxed max-w-measure">
        {items.map((it, i) => (
          <li key={i} className="pl-5 relative">
            <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-fog/40" />
            {it}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

export function PullQuote({ children }) {
  const accent = useAccent();
  return (
    <ScrollReveal>
      <blockquote
        className="border-l-2 pl-6 my-8 font-heading text-2xl md:text-3xl leading-snug"
        style={{ borderColor: accent, color: accent }}
      >
        {children}
      </blockquote>
    </ScrollReveal>
  );
}

export function MetricCard({ value, label }) {
  const accent = useAccent();
  return (
    <ScrollReveal className="rounded-2xl bg-carbon p-6 border border-white/[0.05] relative overflow-hidden">
      <span className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent }} />
      <div className="font-heading font-medium tracking-tightest text-4xl md:text-5xl" style={{ color: accent }}>
        {value}
      </div>
      <div className="mt-2 text-fog text-sm">{label}</div>
    </ScrollReveal>
  );
}

export function MetricGrid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{children}</div>;
}

export function HandNote({ children, rotate = -2, className = '' }) {
  return (
    <span
      className={`inline-block font-hand text-2xl md:text-3xl text-fog ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

export function AssetPlaceholder({ label, aspect = '16/9', className = '' }) {
  return (
    <div
      className={`w-full rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex items-center justify-center text-fog/60 text-sm text-center px-6 ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {label}
    </div>
  );
}
