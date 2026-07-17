'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { RollingWordProvider, RollingWordBand, useRollingWord, hoverProps } from './RollingWord';
import RollLabel from './RollLabel';
import StackMarquee from './StackMarquee';
import { SITE } from '@/lib/site';

function Arrow() {
  return (
    <span
      className="card-arrow text-silver text-base leading-none opacity-80 absolute bottom-5 right-5 md:bottom-6 md:right-6 pointer-events-none"
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
        className="absolute bottom-5 left-5 md:bottom-6 md:left-6 text-silver font-heading tracking-tightest"
        style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}
      >
        <RollLabel>{label}</RollLabel>
      </span>
      <Arrow />
    </CardShell>
  );
}

function ResumeCard() {
  return (
    <CardShell to={SITE.resume} word="Resume" external download ariaLabel="Open résumé (PDF)">
      <span
        className="absolute bottom-4 left-5 md:bottom-5 md:left-6 text-silver font-heading tracking-tightest"
        style={{ fontSize: 'clamp(18px, 1.8vw, 26px)' }}
      >
        <RollLabel>Résumé</RollLabel>
      </span>
      <Arrow />
    </CardShell>
  );
}

function StackCard() {
  const rw = useRollingWord();
  return (
    <div
      {...hoverProps(rw, 'Stack')}
      className="card-tex relative w-full h-full !p-0 flex items-center overflow-hidden"
      aria-label={`Tools stack`}
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
        src={SITE.portraitColor || SITE.portrait}
        alt="Nandini Pillai"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover"
        style={{ objectPosition: 'center 30%', filter: 'contrast(1.08) saturate(1.05)' }}
      />
    </div>
  );
}

export default function BentoNav() {
  return (
    <RollingWordProvider defaultWord={SITE.firstName}>
      <div className="relative w-full h-[calc(100svh-3.5rem)] mt-14 px-4 md:px-6 pt-4 md:pt-6 pb-4 md:pb-6 overflow-hidden">
        <div
          className="relative grid gap-3 md:gap-4 h-full"
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
          <div className="col-span-2 md:col-span-1 grid grid-rows-[1fr_auto] gap-3 md:gap-4">
            <StackCard />
            <ResumeCard />
          </div>
        </div>

        {/* Rolling hover-word — sits ON TOP of the cards, cropped by the outer viewport. */}
        <div className="pointer-events-none absolute inset-x-0 top-14 md:top-16 z-20 flex items-start justify-center">
          <RollingWordBand />
        </div>
      </div>
    </RollingWordProvider>
  );
}
