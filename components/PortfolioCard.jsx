'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

function TokenMock({ accent }) {
  return (
    <div className="relative w-full h-full flex items-center justify-between gap-4 md:gap-6 px-4 md:px-6">
      <div className="flex-1 text-center">
        <div className="text-ash text-[10px] tracking-[0.24em] uppercase mb-1">Now serving</div>
        <div
          className="font-heading text-5xl md:text-7xl leading-none"
          style={{ color: accent, letterSpacing: '-0.04em' }}
        >
          A–044
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] text-silver">
          <span className="inline-block w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#7CFF9B' }} />
          <span>Live · 15s</span>
        </div>
      </div>
      <PhoneFrame className="!max-w-[130px] md:!max-w-[150px]">
        <div className="w-full h-full bg-white flex flex-col text-black">
          <div className="px-2 pt-7 pb-1.5">
            <div className="text-[6px] text-gray-500">Aayush Clinic · East Legon</div>
            <div className="text-[9px] font-medium">Today&apos;s queue</div>
          </div>
          <div className="px-1.5 space-y-1">
            {[
              { label: 'A–044', tag: 'Now', accent: true },
              { label: 'A–045', tag: 'Next' },
              { label: 'A–046', tag: 'In 5' },
              { label: 'A–047', tag: 'In 8' },
            ].map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded p-1 ${row.accent ? 'font-medium' : ''}`}
                style={row.accent ? { background: accent, color: '#0a0a0a' } : { background: 'rgba(0,0,0,0.04)' }}
              >
                <span className="text-[8px]">{row.label}</span>
                <span className="text-[6px] uppercase tracking-wider">{row.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function ILancasterMock() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-4 md:gap-6 p-6 bg-gradient-to-br from-[#1a0004] via-graphite to-carbon rounded-2xl border border-white/[0.06]">
      <PhoneFrame className="!max-w-[140px] md:!max-w-[160px]">
        <div className="w-full h-full bg-[#0a0a0a] p-3 text-[9px] text-white">
          <div className="text-[10px] mb-2">Good evening</div>
          <div className="rounded-lg bg-[#E4002B] text-white p-2 mb-1.5 text-center text-[8px]">Check in</div>
          <div className="rounded-lg bg-white/[0.05] p-2 mb-1 text-[7px]">Timetable</div>
          <div className="rounded-lg bg-white/[0.05] p-2 text-[7px]">Enquiry</div>
        </div>
      </PhoneFrame>
      <PhoneFrame className="!max-w-[140px] md:!max-w-[160px]">
        <div className="w-full h-full bg-white p-3 text-[9px] text-black">
          <div className="text-[10px] mb-2">Good morning</div>
          <div className="rounded-lg bg-[#E4002B] text-white p-2 mb-1.5 text-center text-[8px]">Check in</div>
          <div className="rounded-lg bg-black/[0.05] p-2 mb-1 text-[7px]">Timetable</div>
          <div className="rounded-lg bg-black/[0.05] p-2 text-[7px]">Enquiry</div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function LucaMock({ url }) {
  const back = '/assets/luca/interview-setup.png';
  const front = '/assets/luca/landing-existing-user.png';
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06]">
      {/* Subtle grid — texture kept for visual continuity with iLancaster cover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#F0576B 1px, transparent 1px), linear-gradient(90deg, #F0576B 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
        aria-hidden="true"
      />
      {/* Back window */}
      <div
        className="absolute top-[10%] left-[6%] w-[46%] md:w-[42%] shadow-2xl"
        style={{ transform: 'rotate(-4deg)' }}
      >
        <div className="rounded-lg overflow-hidden border border-white/[0.08] bg-white">
          <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-100">
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
            </span>
          </div>
          <Image src={back} alt="" width={1600} height={900} className="w-full h-auto" sizes="400px" />
        </div>
      </div>
      {/* Front window */}
      <div className="absolute bottom-[8%] right-[6%] w-[62%] md:w-[58%] shadow-2xl">
        <div className="rounded-lg overflow-hidden border border-white/[0.08] bg-white">
          <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-100">
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
            </span>
            {url && (
              <span className="mx-auto text-[8px] text-gray-500 bg-white/60 rounded-full px-2 py-0.5">
                {url}
              </span>
            )}
          </div>
          <Image src={front} alt="" width={1600} height={900} className="w-full h-auto" sizes="600px" />
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
  const { path, title, oneLiner, whyHere, accent, category, card } = study;
  const containerCls = featured ? 'md:col-span-2' : 'md:col-span-1';
  const aspect = featured ? 'md:aspect-[16/7]' : 'md:aspect-[16/9]';

  return (
    <ScrollReveal className={containerCls}>
      <Link
        href={path}
        className={`group card-tex block relative w-full aspect-[16/10] ${aspect} overflow-hidden`}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between">
            <div>
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
            {whyHere && (
              <div className="mt-6 flex items-center gap-3 text-fog text-xs md:text-sm max-w-xs">
                <span
                  className="inline-block w-6 h-px shrink-0"
                  style={{ background: accent, opacity: 0.75 }}
                  aria-hidden="true"
                />
                <span className="leading-snug">{whyHere}</span>
              </div>
            )}
          </div>
          <div className="relative flex-1 min-h-[180px] md:min-h-0 p-4 md:p-6">
            {/* Accent glow — always visible, intensifies on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"
              style={{
                background: `radial-gradient(circle at 60% 45%, ${accent || '#B4B4B0'} 0%, transparent 62%)`,
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
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={title}
                    fill
                    sizes="600px"
                    className={card.fit === 'contain' ? 'object-contain' : 'object-cover'}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <span className="absolute top-6 right-6 card-arrow text-silver text-xl" aria-hidden="true">↗</span>
      </Link>
    </ScrollReveal>
  );
}
