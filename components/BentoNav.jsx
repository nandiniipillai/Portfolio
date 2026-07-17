'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { RollingWordProvider, RollingWordBand, useRollingWord, hoverProps } from './RollingWord';
import RollLabel from './RollLabel';
import { SITE, TOOLS } from '@/lib/site';

function Arrow({ size = 'text-lg' }) {
  return (
    <span className={`card-arrow text-silver ${size} leading-none`} aria-hidden="true">↗</span>
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
        <div className={contentClass || 'flex flex-col justify-end h-full'}>{children}</div>
      </a>
    );
  }

  return (
    <Link {...commonProps} href={to} onClick={onClick}>
      <div className={contentClass || 'flex flex-col justify-end h-full'}>{children}</div>
    </Link>
  );
}

function StandardCard({ to, word, label, external = false, className = '' }) {
  return (
    <CardShell to={to} word={word} className={className} external={external}>
      <div className="flex items-end justify-between gap-4">
        <div className="text-silver font-heading tracking-tightest" style={{ fontSize: 'clamp(22px, 2.6vw, 34px)' }}>
          <RollLabel>{label}</RollLabel>
        </div>
        <Arrow />
      </div>
    </CardShell>
  );
}

function ResumeCard() {
  return (
    <CardShell to={SITE.resume} word="Resume" external download className="min-h-[90px]" ariaLabel="Open résumé (PDF)">
      <div className="flex items-end justify-between h-full">
        <div className="text-silver font-heading tracking-tightest" style={{ fontSize: 'clamp(22px, 2.6vw, 34px)' }}>
          <RollLabel>Résumé</RollLabel>
        </div>
        <Arrow />
      </div>
    </CardShell>
  );
}

function StackCard() {
  const rw = useRollingWord();
  const featured = TOOLS.slice(0, 3);
  return (
    <div
      {...hoverProps(rw, 'Stack')}
      className="card-tex relative w-full h-full flex items-center justify-center gap-3 md:gap-4"
      aria-label={`Tools: ${TOOLS.map((t) => t.name).join(', ')}`}
    >
      {featured.map((tool) => (
        <div
          key={tool.name}
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl font-heading font-semibold shadow-inner"
          style={{
            background: tool.bg,
            color: tool.fg,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          title={tool.name}
        >
          {tool.glyph}
        </div>
      ))}
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
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
    </div>
  );
}

export default function BentoNav() {
  return (
    <RollingWordProvider defaultWord={SITE.firstName}>
      <div className="relative w-full min-h-[calc(100vh-3.5rem)] mt-14 px-5 md:px-8 pt-6 md:pt-8 pb-8">
        {/* Rolling wordmark — sits above the top row, blurs into the cards */}
        <div className="pointer-events-none absolute left-0 right-0 top-[3.5rem] flex items-start justify-center overflow-hidden">
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
