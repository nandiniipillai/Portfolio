'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import RollLabel from './RollLabel';
import ScrollReveal from './ScrollReveal';

function TokenMock({ accent }) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-carbon to-graphite border border-white/[0.06] flex items-center justify-center">
      <div className="text-center">
        <div className="text-fog text-[11px] tracking-[0.24em] uppercase mb-3">Your turn</div>
        <div className="font-heading text-6xl md:text-8xl" style={{ color: accent, letterSpacing: '-0.04em' }}>
          A–044
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-[12px] text-silver">
          <span className="inline-block w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#7CFF9B' }} />
          <span>Live · updates every 15s</span>
        </div>
      </div>
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
  const { path, title, oneLiner, role, status, accent, category, tags = [], card } = study;
  const containerCls = featured
    ? 'md:col-span-2'
    : 'md:col-span-1';
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
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wider text-fog border border-white/[0.08] rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`relative flex-1 min-h-[180px] md:min-h-0 ${
              card.frame === 'flat' && card.fit === 'contain' ? 'p-0' : 'p-4 md:p-6'
            }`}
          >
            <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
              {card.frame === 'token' && <TokenMock accent={accent} />}
              {card.frame === 'browser' && (
                <BrowserFrame src={card.image} alt={title} url={card.url} className="h-full" />
              )}
              {card.frame === 'ilancaster' && <ILancasterMock />}
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
        {(role || status) && (
          <div className="absolute bottom-6 right-6 text-right text-[11px] text-ash">
            {role && <div>{role}</div>}
            {status && <div className="text-fog">{status}</div>}
          </div>
        )}
      </Link>
    </ScrollReveal>
  );
}
