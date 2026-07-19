'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

function BaariDashboardMock({ accent }) {
  const waiting = [
    { token: 'T13', name: 'Sarah Chen', detail: '10:40 · Consultation · headache', badge: '4 visits' },
    { token: 'T14', name: 'James Park', detail: '11:00 · party of 2' },
    { token: 'T15', name: 'Priya Sharma', detail: '11:20 · Follow-up · 8 min late', late: true },
    { token: 'T16', name: 'Sundar Rao', detail: '11:40 · skin', badge: '6 visits' },
    { token: 'T17', name: 'Amir Khan', detail: '12:00 · Vaccination' },
  ];
  return (
    <div className="rounded-lg overflow-hidden border border-white/[0.08] bg-[#0b0b0d] shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#141416] border-b border-white/[0.04]">
        <span className="flex gap-1" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
        </span>
        <span className="mx-auto text-[7px] text-fog bg-white/[0.04] rounded-full px-2 py-0.5">
          getbaari.in / queue
        </span>
      </div>
      {/* App nav */}
      <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/[0.04]">
        <div className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded flex items-center justify-center text-white text-[7px] font-bold"
            style={{ background: accent }}
          >
            b
          </span>
          <span className="text-white text-[7px] font-medium">Pratiksha</span>
        </div>
        <div className="flex items-center gap-2 text-[6px] text-fog">
          <span className="text-white bg-white/[0.06] rounded px-1.5 py-0.5">Queue</span>
          <span>Search</span>
          <span>Signal</span>
        </div>
        <span className="text-[6px] text-ash">Trial 60D</span>
      </div>
      {/* Body: Queue header + stats + two-column */}
      <div className="p-2.5">
        <div className="text-[6px] text-ash uppercase tracking-wider">Tue 15 Jul · 11:14 IST</div>
        <div className="flex items-center justify-between mb-1.5">
          <div className="text-white font-heading text-[15px] leading-none tracking-tightest">Queue</div>
          <span
            className="text-[6px] rounded-full px-2 py-0.5 text-black font-medium"
            style={{ background: accent }}
          >
            + New booking
          </span>
        </div>
        {/* Stats bar */}
        <div className="flex gap-2 mb-2 text-[6px] text-fog bg-white/[0.02] border border-white/[0.04] rounded px-2 py-1">
          <span>Today <span className="text-white font-medium">6</span></span>
          <span>Waiting <span className="text-white font-medium">5</span></span>
          <span>In consult <span className="text-white font-medium">1</span></span>
          <span>Late <span className="text-white font-medium">1</span></span>
        </div>
        {/* Two-column: Waiting list + In consult panel */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-2">
          <div className="rounded bg-white/[0.02] border border-white/[0.04] p-1.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[6px] text-ash uppercase tracking-wider">Waiting</span>
              <span className="text-[6px] text-white">5</span>
            </div>
            <div className="space-y-0.5">
              {waiting.map((row, i) => (
                <div
                  key={i}
                  className={`rounded p-1 flex items-center justify-between ${
                    row.late ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-white/[0.02]'
                  }`}
                >
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[6px] text-fog">{row.token}</span>
                      <span className="text-[7px] text-white font-medium">{row.name}</span>
                    </div>
                    <div className="text-[5px] text-ash leading-tight">{row.detail}</div>
                  </div>
                  {row.late && (
                    <span className="text-[5px] text-amber-400 uppercase tracking-wider">Late</span>
                  )}
                  {row.badge && !row.late && (
                    <span
                      className="text-[5px] uppercase tracking-wider rounded-full px-1 py-0.5"
                      style={{ color: accent, background: 'rgba(52,211,153,0.1)' }}
                    >
                      {row.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded bg-white/[0.02] border border-white/[0.04] p-1.5 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[6px] text-ash uppercase tracking-wider">Token</span>
              <span
                className="text-[5px] rounded-full px-1.5 py-0.5"
                style={{ background: 'rgba(52,211,153,0.15)', color: accent }}
              >
                In consult
              </span>
            </div>
            <div
              className="font-heading leading-none"
              style={{ color: accent, fontSize: '30px', letterSpacing: '-0.04em' }}
            >
              T12
            </div>
            <div className="text-white text-[8px] font-medium mt-1.5">Emma Wilson</div>
            <div className="text-[6px] text-fog leading-tight">Consultation · cold, sore throat</div>
            <div className="text-[6px] text-ash leading-tight mt-0.5">Started 10:47 · 27 min in</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TokenMock({ accent }) {
  return (
    <div className="relative w-full h-full">
      {/* Web dashboard — main element, left-anchored */}
      <div className="absolute top-1/2 left-[2%] w-[68%]" style={{ transform: 'translateY(-50%)' }}>
        <BaariDashboardMock accent={accent} />
      </div>
      {/* Mobile phone — overlaps right, slightly tilted */}
      <div
        className="absolute top-1/2 right-[6%] w-[100px] md:w-[125px] z-10"
        style={{ transform: 'translateY(-50%) rotate(3deg)' }}
      >
        <PhoneFrame>
          <div className="w-full h-full bg-white flex flex-col text-black">
            <div className="px-2 pt-6 pb-1.5">
              <div className="text-[5px] text-gray-500">getbaari.in / queue</div>
              <div className="text-[8px] font-semibold">Today&apos;s queue</div>
            </div>
            <div className="px-1.5 space-y-1">
              {[
                { token: 'T12', name: 'Emma Wilson', tag: 'In consult', accent: true },
                { token: 'T13', name: 'Sarah Chen', tag: 'Waiting' },
                { token: 'T14', name: 'James Park', tag: 'Waiting' },
                { token: 'T15', name: 'Priya Sharma', tag: 'Late' },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`rounded p-1 ${row.accent ? 'font-medium' : ''}`}
                  style={
                    row.accent
                      ? { background: accent, color: '#0a0a0a' }
                      : { background: 'rgba(0,0,0,0.045)' }
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[7px]">{row.token}</span>
                    <span className="text-[5px] uppercase tracking-wider opacity-80">{row.tag}</span>
                  </div>
                  <div className="text-[5px] opacity-70">{row.name}</div>
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>
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
