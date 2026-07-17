'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SITE, TOOLS } from '@/lib/site';

const CARD = 'group relative block w-full h-full rounded-[13px] bg-[#161616] hover:bg-[#1f1f1f] transition-colors duration-200 overflow-hidden';

// Subtle top highlight — 1px inset border rgba(255,255,255,0.04) via ::before pseudo
const cardStyle = { boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.04)' };

function Label({ children, size = 15 }) {
  return (
    <span
      className="absolute bottom-5 left-6 font-heading tracking-tight text-[#e8e8e8] leading-none"
      style={{ fontSize: `${size}px`, fontWeight: 500 }}
    >
      {children}
    </span>
  );
}

function Arrow({ size = 14 }) {
  return (
    <span
      className="absolute bottom-5 right-6 leading-none text-[#888] group-hover:text-white transition-colors pointer-events-none"
      style={{ fontSize: `${size}px` }}
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
      <div className="absolute inset-0 flex items-center px-8">
        <div
          className="font-heading text-[#f0f0f0] tracking-tight leading-tight"
          style={{ fontSize: 'clamp(18px, 1.8vw, 26px)', fontWeight: 500 }}
        >
          {SITE.email}
        </div>
      </div>
      <Label>Contact</Label>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email to clipboard"
        className="absolute bottom-4 right-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] transition-colors px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-[#e8e8e8]"
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
    </a>
  );
}

function ToolsCard() {
  // Exactly 3 icons — pick Framer, Notion, Figma.
  const picks = ['Framer', 'Notion', 'Figma']
    .map((name) => TOOLS.find((t) => t.name === name))
    .filter(Boolean);
  return (
    <div className={CARD} style={cardStyle} aria-label={`Tools: ${picks.map((p) => p.name).join(', ')}`}>
      <div className="absolute inset-0 flex items-center justify-center gap-3">
        {picks.map((tool) => (
          <span
            key={tool.name}
            title={tool.name}
            className="w-[52px] h-[52px] rounded-[12px] flex items-center justify-center text-[22px] font-heading font-semibold"
            style={{
              background: tool.bg,
              color: tool.fg,
              border: '1px solid rgba(255,255,255,0.05)',
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
      className="relative block w-full h-full rounded-[13px] overflow-hidden bg-[#161616]"
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
      className="pointer-events-none absolute inset-x-0 top-4 md:top-6 z-0 flex justify-center overflow-hidden select-none"
      aria-hidden="true"
    >
      <span
        className="whitespace-nowrap font-heading"
        style={{
          fontSize: 'clamp(120px, 14vw, 200px)',
          fontWeight: 600,
          filter: 'blur(7px)',
          letterSpacing: '-0.02em',
          color: '#f5f5f5',
          lineHeight: 0.9,
        }}
      >
        Nandini Pillai
      </span>
    </div>
  );
}

export default function BentoNav() {
  return (
    <div className="relative w-full min-h-[calc(100svh-52px)] mt-[52px] px-4 md:px-5">
      <HeroName />

      <div className="bento-grid relative z-10 mx-auto pt-[80px] lg:pt-[100px]">
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
