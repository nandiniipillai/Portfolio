'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SITE, TOOLS } from '@/lib/site';

// Interactive card (About, Portfolio, Résumé). Rendered as <a> — real hover-lift, real cursor.
const CARD =
  'group relative block w-full h-full rounded-[13px] bg-[#171717] hover:bg-[#1f1f1f] hover:-translate-y-0.5 hover:will-change-transform cursor-pointer transition-all duration-200 ease-out overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2';

// Non-interactive card container (Portrait, Tools, Contact wrapper). No cursor, no lift, no bg hover.
const CARD_STATIC = 'relative block w-full h-full rounded-[13px] bg-[#171717] overflow-hidden';

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

// Contact card — the mailto is its own link, Copy is a sibling button. No nested interactive elements.
function ContactCard() {
  const [copied, setCopied] = useState(false);
  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // silent fallback — mailto link is still available on the Contact label
    }
  };
  return (
    <div className={CARD_STATIC} style={cardStyle} role="group" aria-label="Contact">
      {/* Email display — selectable text, also a mailto link */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <a
          href={`mailto:${SITE.email}`}
          className="font-heading tracking-tight text-[#e8e8e8] leading-none hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2 rounded-sm"
          style={{ fontSize: '15px', fontWeight: 500 }}
          aria-label={`Email ${SITE.email}`}
        >
          {SITE.email}
        </a>
      </div>
      {/* "Contact" is a static label, matches About/Portfolio in weight */}
      <span
        className="absolute bottom-6 left-6 font-heading tracking-tight text-[#e8e8e8] leading-none"
        style={{ fontSize: '15px', fontWeight: 500 }}
      >
        Contact
      </span>
      {/* Copy button — sibling of the link, not descendant. preventDefault + stopPropagation. */}
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Email copied to clipboard' : 'Copy email to clipboard'}
        aria-live="polite"
        className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.1] transition-colors px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase text-[#e8e8e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2"
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
  );
}

// Tools card — non-interactive, no cursor / hover-lift / hover-bg change.
function ToolsCard() {
  const picks = ['Photoshop', 'Illustrator', 'Adobe XD']
    .map((name) => TOOLS.find((t) => t.name === name))
    .filter(Boolean);
  return (
    <div
      className={`${CARD_STATIC} flex items-center justify-center`}
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
      className={CARD_STATIC}
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
        fontSize: 'clamp(64px, 15vw, 210px)',
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
    <div className="relative w-full min-h-[calc(100svh-52px)] mt-[52px] pt-[110px] px-4 md:px-5">
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
