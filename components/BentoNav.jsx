'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { RollingWordProvider, RollingWordBand, useRollingWord, hoverProps } from './RollingWord';
import RollLabel from './RollLabel';
import StackMarquee from './StackMarquee';
import { SITE } from '@/lib/site';

function Arrow({ size = 'clamp(24px, 2.4vw, 34px)' }) {
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

function CardShell({ to, word, ariaLabel, className = '', external = false, download = false, children }) {
  const rw = useRollingWord();
  const router = useRouter();
  const onClick = (e) => {
    if (external) return;
    e.preventDefault();
    router.push(to);
  };
  const commonProps = {
    ...hoverProps(rw, word),
    'aria-label': ariaLabel || word,
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

function StandardCard({ to, word, label, external = false, className = '' }) {
  return (
    <CardShell to={to} word={word} className={className} external={external}>
      <span
        className="absolute bottom-4 left-5 md:bottom-5 md:left-6 text-silver font-heading tracking-tightest leading-none"
        style={{ fontSize: 'clamp(28px, 3.2vw, 46px)' }}
      >
        <RollLabel>{label}</RollLabel>
      </span>
      <Arrow />
    </CardShell>
  );
}

function ResumeCard() {
  return (
    <CardShell to={SITE.resume} word="Résumé" external download ariaLabel="Open résumé (PDF)">
      <span
        className="absolute bottom-4 left-5 md:bottom-4 md:left-6 text-silver font-heading tracking-tightest leading-none"
        style={{ fontSize: 'clamp(22px, 2.2vw, 32px)' }}
      >
        <RollLabel>Résumé</RollLabel>
      </span>
      <Arrow size="clamp(20px, 2vw, 28px)" />
    </CardShell>
  );
}

function StackCard() {
  const rw = useRollingWord();
  return (
    <div
      {...hoverProps(rw, 'Stack')}
      className="card-tex relative w-full h-full !p-0 flex items-center overflow-hidden"
      aria-label="Tools stack"
    >
      <StackMarquee />
    </div>
  );
}

function PortraitCard() {
  const rw = useRollingWord();
  return (
    <div
      {...hoverProps(rw, 'Hey')}
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

export default function BentoNav() {
  return (
    <RollingWordProvider defaultWord={SITE.name}>
      <div className="relative w-full h-[calc(100svh-3.5rem)] mt-14 px-4 md:px-5 pt-3 md:pt-4 pb-3 md:pb-4 overflow-hidden">
        {/* Rolling hover-word — sits above the cards, cropped by the card tops below. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-center overflow-hidden">
          <RollingWordBand />
        </div>

        <div
          className="relative grid gap-3 md:gap-3 h-full"
          style={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gridTemplateRows: '1fr 1fr',
          }}
        >
          {/* Row 1 */}
          <div className="col-span-2 md:col-span-1">
            <StandardCard to="/about" word="About" label="About" />
          </div>
          <div className="col-span-2 md:col-span-3">
            <StandardCard to="/portfolio" word="Portfolio" label="Portfolio" />
          </div>

          {/* Row 2 */}
          <div className="col-span-4 md:col-span-2">
            <StandardCard to="/contact" word="Contact" label="Contact" />
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
    </RollingWordProvider>
  );
}
