'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

function TokenMock({ accent }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <PhoneFrame className="!max-w-[160px] md:!max-w-[190px]">
        <div className="w-full h-full bg-white flex flex-col text-black">
          <div className="px-2.5 pt-8 pb-2">
            <div className="text-[7px] text-gray-500">getbaari.in / queue</div>
            <div className="text-[11px] font-semibold">Today&apos;s queue</div>
          </div>
          <div className="px-2 space-y-1.5">
            {[
              { token: 'T12', name: 'Emma Wilson', tag: 'In consult', accent: true },
              { token: 'T13', name: 'James Kumar', tag: 'Waiting · 4m' },
              { token: 'T14', name: 'Priya Shah', tag: 'Waiting · 8m' },
              { token: 'T15', name: 'Ade Adekunle', tag: 'Booked 11:30' },
              { token: 'T16', name: 'Riya Menon', tag: 'Booked 11:45' },
            ].map((row, i) => (
              <div
                key={i}
                className={`rounded-md p-1.5 ${row.accent ? 'font-medium' : ''}`}
                style={row.accent ? { background: accent, color: '#0a0a0a' } : { background: 'rgba(0,0,0,0.045)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px]">{row.token}</span>
                  <span className="text-[7px] uppercase tracking-wider opacity-80">{row.tag}</span>
                </div>
                <div className="text-[7px] opacity-70">{row.name}</div>
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
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Left phone — tilted outward, sits behind */}
      <div
        className="absolute w-[105px] md:w-[125px] left-[18%] md:left-[22%] top-1/2"
        style={{ transform: 'translateY(-42%) rotate(-16deg)' }}
      >
        <PhoneFrame src="/assets/ilancaster/timetable-day.png" />
      </div>
      {/* Right phone — tilted outward, sits behind */}
      <div
        className="absolute w-[105px] md:w-[125px] right-[18%] md:right-[22%] top-1/2"
        style={{ transform: 'translateY(-42%) rotate(16deg)' }}
      >
        <PhoneFrame src="/assets/ilancaster/welfare-day.png" />
      </div>
      {/* Centre phone — upright, forward, largest */}
      <div className="relative z-10 w-[130px] md:w-[160px] drop-shadow-2xl">
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
    <div className="relative w-full h-full">
      {/* CV optimiser — behind, tilted left */}
      <div
        className="absolute top-1/2 left-[4%] w-[42%] shadow-xl opacity-90"
        style={{ transform: 'translateY(-50%) rotate(-8deg)' }}
      >
        <LucaWindow src="/assets/luca/cv-optimiser-2.png" />
      </div>
      {/* AI Interview — behind, tilted right */}
      <div
        className="absolute top-1/2 right-[4%] w-[42%] shadow-xl opacity-90"
        style={{ transform: 'translateY(-50%) rotate(8deg)' }}
      >
        <LucaWindow src="/assets/luca/interview-setup.png" />
      </div>
      {/* Dashboard — front and centre, largest */}
      <div className="absolute top-1/2 left-1/2 w-[58%] shadow-2xl z-10" style={{ transform: 'translate(-50%, -50%)' }}>
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
  const { path, title, oneLiner, accent, category, card } = study;
  const containerCls = featured ? 'md:col-span-2' : 'md:col-span-1';
  const aspect = featured ? 'md:aspect-[16/7]' : 'md:aspect-[16/9]';

  return (
    <ScrollReveal className={containerCls}>
      <Link
        href={path}
        className={`group card-tex block relative w-full aspect-[16/10] ${aspect} overflow-hidden`}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-center">
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
            {/* Accent glow — always visible, intensifies on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${accent || '#B4B4B0'} 0%, transparent 62%)`,
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
