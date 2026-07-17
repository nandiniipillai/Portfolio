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
    <span className="card-arrow text-silver text-lg leading-none" aria-hidden="true">↗</span>
  );
}

function CardShell({ to, word, ariaLabel, className = '', external = false, download = false, children, contentClass = '' }) {
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
    className: `card-tex block relative w-full h-full p-6 md:p-7 ${className}`,
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
        <div className={contentClass || 'flex flex-col justify-between h-full'}>{children}</div>
      </a>
    );
  }

  return (
    <Link {...commonProps} href={to} onClick={onClick}>
      <div className={contentClass || 'flex flex-col justify-between h-full'}>{children}</div>
    </Link>
  );
}

function StandardCard({ to, word, label, external = false, className = '' }) {
  return (
    <CardShell to={to} word={word} className={className} external={external}>
      <div className="flex items-start justify-end">
        <Arrow />
      </div>
      <div className="text-silver font-heading tracking-tightest" style={{ fontSize: 'clamp(28px, 3.8vw, 48px)' }}>
        <RollLabel>{label}</RollLabel>
      </div>
    </CardShell>
  );
}

function ResumeCard() {
  return (
    <CardShell to={SITE.resume} word="Resume" external download className="min-h-[90px]" ariaLabel="Open résumé (PDF)">
      <div className="flex items-center justify-between h-full">
        <div className="text-silver font-heading tracking-tightest" style={{ fontSize: 'clamp(22px, 2.2vw, 34px)' }}>
          <RollLabel>Résumé</RollLabel>
        </div>
        <Arrow />
      </div>
    </CardShell>
  );
}

function StackCard() {
  const rw = useRollingWord();
  return (
    <div
      {...hoverProps(rw, 'Stack')}
      className="card-tex relative w-full h-full !p-0 flex items-center overflow-hidden"
      aria-label="Tools: Figma, Claude, Adobe XD, Illustrator, Miro, FigJam, Framer, Notion"
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
      <div className="absolute inset-0">
        <Image
          src={SITE.portrait}
          alt="Nandini Pillai"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
          style={{ objectPosition: 'center 32%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
        <div className="flex items-center gap-2 text-[12px] text-silver">
          <span className="inline-block w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#7CFF9B' }} />
          <span>{SITE.availability}</span>
        </div>
      </div>
    </div>
  );
}

export default function BentoNav() {
  return (
    <RollingWordProvider defaultWord={SITE.firstName}>
      <div className="relative w-full min-h-[calc(100vh-3.5rem)] mt-14 px-5 md:px-8 pt-6 md:pt-8 pb-8">
        {/* blurred background wordmark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <RollingWordBand />
        </div>

        <div
          className="relative grid gap-4 md:gap-5 min-h-[calc(100vh-6rem)]"
          style={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gridTemplateRows: '1fr 1fr',
          }}
        >
          {/* Row 1 */}
          <div className="col-span-4 md:col-span-1 min-h-[220px]">
            <StandardCard to="/about" word="About" label="About" />
          </div>
          <div className="col-span-4 md:col-span-3 min-h-[220px]">
            <StandardCard to="/portfolio" word="Portfolio" label="Portfolio" />
          </div>

          {/* Row 2 */}
          <div className="col-span-4 md:col-span-2 min-h-[220px]">
            <StandardCard to="/contact" word="Contact" label="Contact" />
          </div>
          <div className="col-span-4 md:col-span-1 min-h-[220px]">
            <PortraitCard />
          </div>
          <div className="col-span-4 md:col-span-1 min-h-[220px] flex flex-col gap-4 md:gap-5">
            <div className="flex-1 min-h-[110px]">
              <StackCard />
            </div>
            <div>
              <ResumeCard />
            </div>
          </div>
        </div>
      </div>
    </RollingWordProvider>
  );
}
