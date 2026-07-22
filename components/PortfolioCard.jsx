'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

function TokenMock({ accent }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-3 md:p-4">
      <div className="flex items-center gap-3 md:gap-4 h-full max-w-[680px] w-full">
        {/* Web queue — left panel, wider */}
        <div
          className="flex-1 rounded-2xl border border-white/[0.08] overflow-hidden h-full flex flex-col"
          style={{ background: 'rgba(11,11,13,0.92)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.05] shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: accent }}>
                <span className="text-black text-[10px] font-bold">b</span>
              </div>
              <span className="text-white text-[10px] font-medium tracking-tight">Pratiksha</span>
            </div>
            <div className="flex items-center gap-2 text-[8px] text-fog">
              <span className="text-white bg-white/[0.06] rounded-full px-1.5 py-0.5">Queue</span>
              <span>Signal</span>
            </div>
          </div>
          {/* Body */}
          <div className="p-2.5 space-y-2 flex-1 overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="text-[8px] text-ash tracking-wider">Tue 15 Jul · 11:14 IST</div>
              <div className="flex items-center gap-2 text-[8px] text-fog">
                <span>Today <span className="text-white font-medium">6</span></span>
                <span>Waiting <span className="text-white font-medium">4</span></span>
              </div>
            </div>

            {/* Active patient */}
            <div className="rounded-xl p-2.5" style={{ background: accent, color: '#0a0a0a' }}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[9px] tracking-widest uppercase font-medium">T12</span>
                <span className="text-[7px] rounded-full px-1.5 py-0.5 font-medium" style={{ background: 'rgba(0,0,0,0.15)', color: '#0a0a0a' }}>In consult</span>
              </div>
              <div className="text-[13px] font-heading tracking-tightest leading-none">Emma Wilson</div>
              <div className="text-[8px] opacity-70 mt-0.5">cold, sore throat · 27 min in</div>
              <div className="mt-2 rounded-lg py-1 text-center text-[8px] font-medium" style={{ background: 'rgba(0,0,0,0.12)', color: '#0a0a0a' }}>Mark done</div>
            </div>

            {/* Waiting patients */}
            {[
              { token: 'T13', name: 'Sarah Chen', detail: '10:40 · headache', badge: '4 visits' },
              { token: 'T14', name: 'James Park', detail: '11:00 · party of 2' },
              { token: 'T15', name: 'Priya Sharma', detail: '11:20 · Follow-up', late: true },
            ].map((row) => (
              <div key={row.token} className={`rounded-lg p-2 flex items-center justify-between ${row.late ? 'bg-amber-500/[0.08] border border-amber-500/20' : 'bg-white/[0.02] border border-white/[0.03]'}`}>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[8px] text-fog">{row.token}</span>
                    <span className="text-[9px] text-white font-medium">{row.name}</span>
                  </div>
                  <div className="text-[7px] text-ash leading-tight mt-0.5">{row.detail}</div>
                </div>
                {row.late && <span className="text-[7px] text-amber-400 uppercase tracking-wider">Late</span>}
                {row.badge && !row.late && <span className="text-[7px] rounded-full px-1.5 py-0.5 font-medium" style={{ color: accent, background: `${accent}15` }}>{row.badge}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Phone — right panel, grounded with shadow and slight angle */}
        <div className="w-[90px] md:w-[105px] shrink-0 flex items-center justify-center">
          <div
            className="w-full"
            style={{
              filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.55))',
              transform: 'rotate(3deg)',
            }}
          >
            <PhoneFrame>
              <div className="w-full h-full bg-white flex flex-col text-black">
                <div className="px-2 pt-5 pb-1">
                  <div className="text-[5px] text-gray-400">getbaari.in</div>
                  <div className="text-[7px] font-semibold mt-0.5">Today's queue</div>
                </div>
                <div className="px-1.5 space-y-1">
                  {[
                    { token: 'T12', name: 'Emma Wilson', tag: 'In consult', active: true },
                    { token: 'T13', name: 'Sarah Chen', tag: 'Waiting' },
                    { token: 'T14', name: 'James Park', tag: 'Waiting' },
                    { token: 'T15', name: 'Priya Sharma', tag: 'Late' },
                  ].map((row) => (
                    <div
                      key={row.token}
                      className="rounded p-1"
                      style={row.active ? { background: accent, color: '#0a0a0a' } : { background: 'rgba(0,0,0,0.04)' }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[6px] font-medium">{row.token}</span>
                        <span className="text-[4px] uppercase tracking-wider opacity-70">{row.tag}</span>
                      </div>
                      <div className="text-[5px] opacity-70 mt-0.5">{row.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneFrame>
          </div>
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

// Quiet cover: one real product screenshot inside a minimal browser frame,
// centred in the media column. Same visual temperature as the flat image covers.
function CoverShot({ src, alt, url }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-3 md:p-5">
      <div className="w-full max-w-[480px] rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.08] bg-white shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-1 px-2.5 py-2 bg-gray-100 border-b border-gray-200">
          <span className="flex gap-1" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
          </span>
          {url && (
            <span className="mx-auto text-[9px] text-gray-500 bg-white/60 rounded-full px-2 py-0.5">
              {url}
            </span>
          )}
        </div>
        {/* Real product screenshot — top-anchored so header + primary content show */}
        <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
          <Image
            src={src}
            alt={alt || ''}
            fill
            sizes="(max-width: 768px) 90vw, 480px"
            className="object-cover object-top"
          />
        </div>
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
        className={`group block relative w-full ${aspect} overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/[0.05] transition-colors duration-500 hover:bg-white/[0.05]`}
        style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)' }}
      >
        {/* In-flow on mobile so the card grows with its content; absolute + aspect-locked on desktop */}
        <div className="relative md:absolute md:inset-0 flex flex-col md:flex-row">
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
          <div className="relative flex-1 min-h-[250px] md:min-h-0 p-4 md:p-6 overflow-hidden">
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
            {/* min-h on mobile: h-full resolves to auto against the min-h parent, which
                collapses `fill` images — give the frame box a real height instead */}
            <div className="relative w-full h-full min-h-[218px] md:min-h-0">
              {card.frame === 'token' && <TokenMock accent={accent} />}
              {card.frame === 'browser' && (
                <BrowserFrame src={card.image} alt={title} url={card.url} className="h-full" />
              )}
              {card.frame === 'ilancaster' && <ILancasterMock />}
              {card.frame === 'cover-shot' && (
                <CoverShot src={card.image} alt={title} url={card.url} />
              )}
              {card.frame === 'phones' && <PhonesMock images={card.images} />}
              {card.frame === 'flat' && card.image && (
                <Image
                  src={card.image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={`object-contain ${card.scale || 'p-4'}`}
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
