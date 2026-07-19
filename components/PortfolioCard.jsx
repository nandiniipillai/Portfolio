'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

function TokenMock({ accent }) {
  const queue = [
    { token: 'T12', name: 'Emma Wilson', detail: 'cold, sore throat · 27 min in', active: true },
    { token: 'T13', name: 'Sarah Chen', detail: '10:40 · headache', badge: '4 visits' },
    { token: 'T14', name: 'James Park', detail: '11:00 · party of 2' },
    { token: 'T15', name: 'Priya Sharma', detail: '11:20 · Follow-up', late: true },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-6">
      <div
        className="w-full max-w-[520px] rounded-2xl border border-white/[0.08] overflow-hidden"
        style={{ background: 'rgba(11,11,13,0.92)' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div
              className="w-6 h-6 rounded flex items-center justify-center"
              style={{ background: accent }}
            >
              <span className="text-black text-xs font-bold">b</span>
            </div>
            <span className="text-white text-xs font-medium tracking-tight">Pratiksha</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-fog">
            <span className="text-white bg-white/[0.06] rounded-full px-2 py-0.5">Queue</span>
            <span>Signal</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 space-y-3">
          {/* Day + count */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-ash tracking-wider">Tue 15 Jul · 11:14 IST</div>
              <div className="text-white font-heading text-xl tracking-tightest mt-0.5">Queue</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-fog">Today <span className="text-white font-medium">6</span></span>
              <span className="text-[10px] text-fog">Waiting <span className="text-white font-medium">4</span></span>
            </div>
          </div>

          {/* Active patient card */}
          {queue.filter((r) => r.active).map((row) => (
            <div
              key={row.token}
              className="rounded-xl p-3.5"
              style={{ background: accent, color: '#0a0a0a' }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] tracking-widest uppercase font-medium">{row.token}</span>
                <span
                  className="text-[9px] rounded-full px-2 py-0.5 font-medium"
                  style={{ background: 'rgba(0,0,0,0.15)', color: '#0a0a0a' }}
                >
                  In consult
                </span>
              </div>
              <div className="text-base font-heading tracking-tightest leading-none">{row.name}</div>
              <div className="text-[10px] opacity-70 mt-0.5">{row.detail}</div>
              <div
                className="mt-3 rounded-lg py-1.5 text-center text-[10px] font-medium"
                style={{ background: 'rgba(0,0,0,0.12)', color: '#0a0a0a' }}
              >
                Mark done
              </div>
            </div>
          ))}

          {/* Waiting list */}
          {queue
            .filter((r) => !r.active)
            .map((row) => (
              <div
                key={row.token}
                className={`rounded-lg p-2.5 flex items-center justify-between ${
                  row.late
                    ? 'bg-amber-500/[0.08] border border-amber-500/20'
                    : 'bg-white/[0.02] border border-white/[0.03]'
                }`}
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] text-fog">{row.token}</span>
                    <span className="text-[11px] text-white font-medium">{row.name}</span>
                  </div>
                  <div className="text-[9px] text-ash leading-tight mt-0.5">{row.detail}</div>
                </div>
                {row.late && (
                  <span className="text-[9px] text-amber-400 uppercase tracking-wider">Late</span>
                )}
                {row.badge && !row.late && (
                  <span
                    className="text-[9px] rounded-full px-2 py-0.5 font-medium"
                    style={{ color: accent, background: `${accent}15` }}
                  >
                    {row.badge}
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function ILancasterMock() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Left phone — sits at 28% of media width, tilted outward */}
      <div
        className="absolute w-[110px] md:w-[128px]"
        style={{
          left: '28%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(-18deg)',
        }}
      >
        <PhoneFrame src="/assets/ilancaster/timetable-day.png" />
      </div>
      {/* Right phone — mirrors at 72%, tilted outward */}
      <div
        className="absolute w-[110px] md:w-[128px]"
        style={{
          left: '72%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(18deg)',
        }}
      >
        <PhoneFrame src="/assets/ilancaster/welfare-day.png" />
      </div>
      {/* Centre phone — upright, forward, largest */}
      <div className="relative z-10 w-[125px] md:w-[148px] drop-shadow-2xl">
        <PhoneFrame src="/assets/ilancaster/home-day.png" />
      </div>
    </div>
  );
}

function LucaWindow({ src, url, dotSize = 'w-1.5 h-1.5', urlSize = 'text-[8px]' }) {
  return (
    <div className="rounded-lg overflow-hidden border border-white/[0.08] bg-white">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-100">
        <span className="flex gap-1" aria-hidden="true">
          <span className={`${dotSize} rounded-full bg-[#FF5F57]`} />
          <span className={`${dotSize} rounded-full bg-[#FEBC2E]`} />
          <span className={`${dotSize} rounded-full bg-[#28C840]`} />
        </span>
        {url && (
          <span className={`mx-auto ${urlSize} text-gray-500 bg-white/60 rounded-full px-2 py-0.5`}>
            {url}
          </span>
        )}
      </div>
      {/* Fixed aspect ratio; show the TOP of each screen where the module identity lives */}
      <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
        <Image src={src} alt="" fill className="object-cover object-top" sizes="500px" />
      </div>
    </div>
  );
}

function LucaMock({ url }) {
  return (
    <div className="relative w-full h-full py-3">
      {/* CV optimiser — behind, tilted left */}
      <div
        className="absolute top-1/2 left-[6%] w-[40%] shadow-xl opacity-90"
        style={{ transform: 'translateY(-50%) rotate(-6deg)' }}
      >
        <LucaWindow src="/assets/luca/cv-optimiser-2.png" />
      </div>
      {/* AI Interview — behind, tilted right */}
      <div
        className="absolute top-1/2 right-[6%] w-[40%] shadow-xl opacity-90"
        style={{ transform: 'translateY(-50%) rotate(6deg)' }}
      >
        <LucaWindow src="/assets/luca/interview-setup.png" />
      </div>
      {/* Dashboard — front and centre, largest */}
      <div className="absolute top-1/2 left-1/2 w-[56%] shadow-2xl z-10" style={{ transform: 'translate(-50%, -50%)' }}>
        <LucaWindow src="/assets/luca/dashboard-existing.png" url={url} />
      </div>
    </div>
  );
}

function PhonesMock({ images }) {
  return (
    <div className="w-full h-full flex items-end justify-center gap-3 md:gap-5 p-6 bg-gradient-to-br from-carbon to-graphite rounded-2xl border border-white/[0.06]">
      {images.slice(0, 3).map((src, i) => (
        <div key={i} className={`transform ${i === 1 ? '-translate-y-4' : ''}`}>
          <PhoneFrame src={src} alt="" className="!max-w-[110px] md:!max-w-[140px]" />
        </div>
      ))}
    </div>
  );
}

export default function PortfolioCard({ study, featured = false }) {
  const { path, title, oneLiner, accent, category, year, glowPosition, card } = study;
  const containerCls = featured ? 'md:col-span-2' : 'md:col-span-1';
  const aspect = featured ? 'md:aspect-[16/7]' : 'md:aspect-[16/9]';
  const glowOrigin = glowPosition || '50% 50%';


  return (
    <ScrollReveal className={containerCls}>
      <Link
        href={path}
        className={`group block relative w-full aspect-[16/10] ${aspect} overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/[0.05] transition-colors duration-500 hover:bg-white/[0.05]`}
        style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)' }}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-center">
            {year && (
              <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-2">{year}</div>
            )}
            <div className="text-[11px] tracking-[0.24em] uppercase mb-3" style={{ color: accent || '#B4B4B0' }}>
              {category}
            </div>
            <div
              className="font-heading tracking-tightest text-silver"
              style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1 }}
            >
              <RollLabel>{title}</RollLabel>
            </div>
            <p className="mt-3 text-fog text-sm md:text-base max-w-xs">{oneLiner}</p>
          </div>
          <div className="relative flex-1 min-h-[180px] md:min-h-0 p-4 md:p-6 overflow-hidden">
            {/* Shared grid backdrop — same across all four cards */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(${accent || '#B4B4B0'} 1px, transparent 1px), linear-gradient(90deg, ${accent || '#B4B4B0'} 1px, transparent 1px)`,
                backgroundSize: '52px 52px',
              }}
              aria-hidden="true"
            />
            {/* Accent glow — origin varies per card */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"
              style={{
                background: `radial-gradient(circle at ${glowOrigin}, ${accent || '#B4B4B0'} 0%, transparent 62%)`,
              }}
              aria-hidden="true"
            />
            <div className="relative w-full h-full">
              {card.frame === 'token' && <TokenMock accent={accent} />}
              {card.frame === 'browser' && (
                <BrowserFrame src={card.image} alt={title} url={card.url} className="h-full" />
              )}
              {card.frame === 'ilancaster' && <ILancasterMock />}
              {card.frame === 'luca-multi' && <LucaMock url={card.url} />}
              {card.frame === 'phones' && <PhonesMock images={card.images} />}
              {card.frame === 'flat' && card.image && (
                <Image
                  src={card.image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain p-4"
                  style={{ mixBlendMode: 'lighten' }}
                />
              )}
            </div>
          </div>
        </div>
        <span
          className="absolute top-6 right-6 text-silver text-xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
          aria-hidden="true"
        >
          ↗
        </span>
      </Link>
    </ScrollReveal>
  );
}
