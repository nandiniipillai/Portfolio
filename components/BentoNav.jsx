'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SITE, TOOLS } from '@/lib/site';

const CARD = 'group relative block w-full h-full rounded-[13px] bg-[#171717] hover:bg-[#1f1f1f] hover:-translate-y-0.5 cursor-pointer transition-all duration-200 ease-out overflow-hidden will-change-transform';

// Subtle top highlight — 1px inset border rgba(255,255,255,0.04) via ::before pseudo
const cardStyle = { boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.04)' };

function Label({ children }) {
  return (
    <span
      className="absolute bottom-6 left-6 font-heading tracking-tight text-[#e8e8e8] leading-none"
      style={{ fontSize: '15px', fontWeight: 500 }}
    >
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <span
      className="absolute bottom-6 right-6 leading-none text-[#888] group-hover:text-white transition-colors pointer-events-none"
      style={{ fontSize: '14px' }}
      aria-hidden="true"
    >
      ↗
    </span>
  );
}

function StandardCard({ to, label, external = false, download = false }) {
  const router = useRouter();
  const onClick = external
    ? undefined
    : (e) => {
        e.preventDefault();
        router.push(to);
      };
  const commonProps = { className: CARD, style: cardStyle, 'aria-label': label };
  if (external) {
    return (
      <a
        {...commonProps}
        href={to}
        target="_blank"
        rel="noreferrer noopener"
        {...(download ? { download: 'Nandini-Pillai-Resume.pdf' } : {})}
      >
        <Label>{label}</Label>
        <Arrow />
      </a>
    );
  }
  return (
    <Link {...commonProps} href={to} onClick={onClick}>
      <Label>{label}</Label>
      <Arrow />
    </Link>
  );
}

function ContactCard() {
  const [copied, setCopied] = useState(false);
  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };
  return (
    <a
      href={`mailto:${SITE.email}`}
      className={CARD}
      style={cardStyle}
      aria-label={`Email ${SITE.email}`}
    >
      <div className="absolute inset-0 flex items-center justify-center gap-3 px-8">
        <span
          className="text-[#888] font-heading tracking-tight leading-none"
          style={{ fontSize: '15px', fontWeight: 500 }}
        >
          {SITE.email}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy email to clipboard"
          className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] transition-colors px-2 py-0.5 text-[10px] tracking-[0.18em] uppercase text-[#888] hover:text-[#e8e8e8]"
        >
          {copied ? (
            <>
              <span aria-hidden="true">✓</span><span>Copied</span>
            </>
          ) : (
            <>
              <span aria-hidden="true">⧉</span><span>Copy</span>
            </>
          )}
        </button>
      </div>
      <Label>Contact</Label>
      <Arrow />
    </a>
  );
}

function ToolsCard() {
  // Exactly 3 icons — Photoshop, Illustrator, Adobe XD. No text labels.
  const picks = ['Photoshop', 'Illustrator', 'Adobe XD']
    .map((name) => TOOLS.find((t) => t.name === name))
    .filter(Boolean);
  return (
    <div
      className={`${CARD} flex items-center justify-center`}
      style={cardStyle}
      aria-label={`Tools: ${picks.map((p) => p.name).join(', ')}`}
    >
      <div className="flex items-center justify-center" style={{ gap: '12px' }}>
        {picks.map((tool) => (
          <span
            key={tool.name}
            title={tool.name}
            className="flex items-center justify-center font-heading font-semibold shrink-0"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: '#222',
              color: tool.fg,
              fontSize: '28px',
              lineHeight: 1,
            }}
          >
            {tool.glyph}
          </span>
        ))}
      </div>
    </div>
  );
}

function PortraitCard() {
  return (
    <div
      className="relative block w-full h-full rounded-[13px] overflow-hidden bg-[#171717]"
      style={cardStyle}
      aria-label="Portrait"
    >
      <Image
        src={SITE.portrait}
        alt="Nandini Pillai"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        style={{
          objectPosition: 'center 30%',
          filter: 'grayscale(1) brightness(0.85) contrast(1.05)',
        }}
      />
    </div>
  );
}

function HeroName() {
  return (
    <div
      className="hero-name pointer-events-none select-none"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '20px',
        left: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: 'clamp(120px, 15vw, 210px)',
        fontWeight: 550,
        color: '#f5f5f5',
        letterSpacing: '-0.02em',
        filter: 'blur(7px)',
        zIndex: 1,
        whiteSpace: 'nowrap',
        lineHeight: 0.9,
      }}
    >
      Nandini
    </div>
  );
}

export default function BentoNav() {
  return (
    <div className="relative w-full min-h-[calc(100svh-52px)] mt-[52px] pt-[150px] px-4 md:px-5">
      <HeroName />

      <div className="bento-grid relative z-[2] mx-auto">
        {/* Row 1 */}
        <div className="col-span-12 lg:col-span-3 min-h-[160px]">
          <StandardCard to="/about" label="About" />
        </div>
        <div className="col-span-12 lg:col-span-9 min-h-[160px]">
          <StandardCard to="/portfolio" label="Portfolio" />
        </div>

        {/* Row 2 */}
        <div className="col-span-12 lg:col-span-6 min-h-[160px]">
          <ContactCard />
        </div>
        <div className="col-span-12 lg:col-span-3 min-h-[160px]">
          <PortraitCard />
        </div>
        <div className="col-span-12 lg:col-span-3 min-h-[160px] bento-split">
          <ToolsCard />
          <StandardCard to={SITE.resume} label="Resume" external download />
        </div>
      </div>
    </div>
  );
}
