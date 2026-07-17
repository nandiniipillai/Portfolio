'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RollLabel from './RollLabel';
import StackMarquee from './StackMarquee';
import { SITE } from '@/lib/site';

function Arrow({ size = 'clamp(24px, 2.4vw, 32px)' }) {
  return (
    <span
      className="card-arrow text-silver leading-none absolute bottom-4 right-5 md:bottom-5 md:right-6 pointer-events-none"
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      ↗
    </span>
  );
}

function CardShell({ to, ariaLabel, className = '', external = false, download = false, children }) {
  const router = useRouter();
  const onClick = (e) => {
    if (external) return;
    e.preventDefault();
    router.push(to);
  };
  const commonProps = {
    'aria-label': ariaLabel,
    className: `card-tex block relative w-full h-full ${className}`,
  };

  if (external) {
    return (
      <a
        {...commonProps}
        href={to}
        target="_blank"
        rel="noreferrer noopener"
        {...(download ? { download: 'Nandini-Pillai-Resume.pdf' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link {...commonProps} href={to} onClick={onClick}>
      {children}
    </Link>
  );
}

function StandardCard({ to, label, external = false, className = '' }) {
  return (
    <CardShell to={to} ariaLabel={label} className={className} external={external}>
      <span
        className="absolute bottom-4 left-5 md:bottom-5 md:left-6 text-silver font-heading tracking-tightest leading-none"
        style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}
      >
        <RollLabel>{label}</RollLabel>
      </span>
      <Arrow />
    </CardShell>
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
      // fall back to mailto if clipboard is blocked
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <a
      href={`mailto:${SITE.email}`}
      className="card-tex block relative w-full h-full"
      aria-label={`Email ${SITE.email}`}
    >
      <div className="absolute inset-0 flex flex-col justify-end px-5 md:px-6 pb-4 md:pb-5">
        <div
          className="text-fog text-[11px] tracking-[0.24em] uppercase mb-2"
        >
          Contact
        </div>
        <div
          className="text-silver font-heading tracking-tightest leading-none truncate"
          style={{ fontSize: 'clamp(20px, 2.4vw, 34px)' }}
        >
          {SITE.email}
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email to clipboard"
        className="absolute bottom-4 right-4 md:bottom-5 md:right-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] transition-colors px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase text-silver"
      >
        {copied ? (
          <>
            <span aria-hidden="true">✓</span>
            <span>Copied</span>
          </>
        ) : (
          <>
            <span aria-hidden="true">⧉</span>
            <span>Copy</span>
          </>
        )}
      </button>
    </a>
  );
}

function ResumeCard() {
  return (
    <CardShell to={SITE.resume} external download ariaLabel="Open résumé (PDF)">
      <span
        className="absolute bottom-4 left-5 md:bottom-4 md:left-6 text-silver font-heading tracking-tightest leading-none"
        style={{ fontSize: 'clamp(20px, 2vw, 30px)' }}
      >
        <RollLabel>Résumé</RollLabel>
      </span>
      <Arrow size="clamp(18px, 1.8vw, 26px)" />
    </CardShell>
  );
}

function StackCard() {
  return (
    <div
      className="card-tex relative w-full h-full !p-0 flex items-center overflow-hidden"
      aria-label="Tools stack"
    >
      <StackMarquee />
    </div>
  );
}

function PortraitCard() {
  return (
    <div
      className="card-tex relative w-full h-full !p-0 items-stretch overflow-hidden"
      aria-label="Portrait"
    >
      <Image
        src={SITE.portrait}
        alt="Nandini Pillai"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        style={{ objectPosition: 'center 30%', filter: 'contrast(1.1)' }}
      />
    </div>
  );
}

function PositioningLine() {
  return (
    <p
      className="font-heading text-silver tracking-tightest leading-[1.15] max-w-4xl"
      style={{ fontSize: 'clamp(22px, 2.4vw, 40px)' }}
    >
      Product designer shipping real products for founders.{' '}
      <span className="text-fog">
        Currently building{' '}
        <Link href="/work/baari" className="text-silver hover:text-lime transition-colors underline decoration-white/20 underline-offset-4">
          Baari
        </Link>
        .
      </span>
    </p>
  );
}

export default function BentoNav() {
  return (
    <div className="relative w-full h-[calc(100svh-3.5rem)] mt-14 px-4 md:px-6 py-4 md:py-6 flex flex-col gap-4 md:gap-6 overflow-hidden">
      <PositioningLine />

      <div
        className="grid gap-3 md:gap-3 flex-1 min-h-0 w-full"
        style={{
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gridTemplateRows: '1fr 1fr',
          maxHeight: '560px',
        }}
      >
        {/* Row 1 */}
        <div className="col-span-2 md:col-span-1">
          <StandardCard to="/about" label="About" />
        </div>
        <div className="col-span-2 md:col-span-3">
          <StandardCard to="/portfolio" label="Portfolio" />
        </div>

        {/* Row 2 */}
        <div className="col-span-4 md:col-span-2">
          <ContactCard />
        </div>
        <div className="col-span-2 md:col-span-1">
          <PortraitCard />
        </div>
        <div
          className="col-span-2 md:col-span-1 grid gap-3 md:gap-3"
          style={{ gridTemplateRows: '2fr 1fr' }}
        >
          <StackCard />
          <ResumeCard />
        </div>
      </div>
    </div>
  );
}
