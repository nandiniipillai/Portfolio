'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

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

// One browser-framed screenshot window. theme 'dark' matches dark-UI shots (Baari).
function BrowserWindow({ src, alt, url, theme = 'light', sizesAttr = '400px' }) {
  const dark = theme === 'dark';
  return (
    <div
      className={`w-full rounded-lg md:rounded-xl overflow-hidden border shadow-2xl ${
        dark ? 'border-white/[0.25] bg-[#0f0f12]' : 'border-white/[0.08] bg-white'
      }`}
    >
      <div
        className={`flex items-center gap-1 px-2 py-1.5 border-b ${
          dark ? 'bg-[#1a1a1e] border-white/[0.06]' : 'bg-gray-100 border-gray-200'
        }`}
      >
        <span className="flex gap-1" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
        </span>
        {url && (
          <span
            className={`mx-auto text-[8px] rounded-full px-2 py-0.5 ${
              dark ? 'text-fog bg-white/[0.06]' : 'text-gray-500 bg-white/60'
            }`}
          >
            {url}
          </span>
        )}
      </div>
      <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
        <Image src={src} alt={alt || ''} fill sizes={sizesAttr} className="object-cover object-top" />
      </div>
    </div>
  );
}

// Spread of three real screens fanned like the phone covers: centre window forward,
// side windows tilted behind. images = [left, centre, right].
function CoverSpread({ images, alts = [], url, theme }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02]">
      {/* Left window — behind, tilted out */}
      <div
        className="absolute w-[46%]"
        style={{ left: '23%', top: '50%', transform: 'translate(-50%, -50%) rotate(-6deg)' }}
      >
        <BrowserWindow src={images[0]} alt={alts[0]} theme={theme} sizesAttr="300px" />
      </div>
      {/* Right window — behind, tilted out */}
      <div
        className="absolute w-[46%]"
        style={{ left: '77%', top: '50%', transform: 'translate(-50%, -50%) rotate(6deg)' }}
      >
        <BrowserWindow src={images[2]} alt={alts[2]} theme={theme} sizesAttr="300px" />
      </div>
      {/* Centre window — forward, largest, carries the URL */}
      <div className="relative z-10 w-[58%] drop-shadow-2xl">
        <BrowserWindow src={images[1]} alt={alts[1]} url={url} theme={theme} sizesAttr="420px" />
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
  const { path, title, oneLiner, status, accent, category, year, glowPosition, card } = study;
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
            {status && (
              <p className="mt-4 text-[13px] text-silver flex items-center gap-2">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                {status}
              </p>
            )}
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
              {card.frame === 'browser' && (
                <BrowserFrame src={card.image} alt={title} url={card.url} className="h-full" />
              )}
              {card.frame === 'ilancaster' && <ILancasterMock />}
              {card.frame === 'cover-spread' && (
                <CoverSpread images={card.images} alts={card.alts} url={card.url} theme={card.theme} />
              )}
              {card.frame === 'phones' && <PhonesMock images={card.images} />}
              {card.frame === 'flat' && card.image && (
                <Image
                  src={card.image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={`object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] ${card.scale || 'p-4'}`}
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
