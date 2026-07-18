'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { RollingWordProvider, RollingWordBand, useRollingWord, hoverProps } from './RollingWord';
import RollLabel from './RollLabel';
import StackMarquee from './StackMarquee';
import { SITE } from '@/lib/site';

// Reference card: translucent white overlay, 32px radius, generous padding.
const CARD =
  'group relative block w-full h-full rounded-[32px] bg-white/[0.08] hover:bg-white/[0.04] hover:-translate-y-0.5 cursor-pointer transition-all duration-[400ms] ease-out overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2';

// Static (non-link) tiles use the same visual but without the cursor / focus ring.
const CARD_STATIC = 'relative block w-full h-full rounded-[32px] bg-white/[0.08] overflow-hidden';

// Brighter top-edge highlight so the card reads as a raised surface, not a flat panel.
const cardStyle = { boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.03)' };

function CardLabel({ children }) {
  return (
    <span
      className="text-silver font-heading tracking-tight leading-none"
      style={{ fontSize: '17px', fontWeight: 500 }}
    >
      <RollLabel>{children}</RollLabel>
    </span>
  );
}

function CardArrow() {
  return (
    <span
      className="card-arrow text-silver leading-none pointer-events-none"
      style={{ fontSize: '16px' }}
      aria-hidden="true"
    >
      ↗
    </span>
  );
}

function StandardCard({ to, label, external = false, download = false }) {
  const rw = useRollingWord();
  const router = useRouter();
  const onClick = external
    ? undefined
    : (e) => {
        e.preventDefault();
        router.push(to);
      };
  const commonProps = {
    ...hoverProps(rw, label),
    className: CARD,
    style: { ...cardStyle, padding: '24px 32px' },
    'aria-label': label,
  };

  const content = (
    <div className="flex items-end justify-between h-full">
      <CardLabel>{label}</CardLabel>
      <CardArrow />
    </div>
  );

  if (external) {
    return (
      <a
        {...commonProps}
        href={to}
        target="_blank"
        rel="noreferrer noopener"
        {...(download ? { download: 'Nandini-Pillai-Resume.pdf' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link {...commonProps} href={to} onClick={onClick}>
      {content}
    </Link>
  );
}

function StackCard() {
  const rw = useRollingWord();
  return (
    <div
      {...hoverProps(rw, 'Stack')}
      className={`${CARD_STATIC} flex items-center overflow-hidden`}
      style={cardStyle}
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
        style={{ objectPosition: 'center 30%' }}
      />
    </div>
  );
}

export default function BentoNav() {
  return (
    <RollingWordProvider defaultWord={SITE.firstName}>
      <div className="relative w-full min-h-[calc(100svh-56px)] mt-14 pt-[140px] px-4 md:px-5 pb-4 overflow-hidden">
        {/* Wordmark — sits BEHIND the cards; top ~40–50% visible, bottom hidden by row 1 */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[4px] flex justify-center overflow-hidden"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <RollingWordBand />
        </div>

        {/* Bento — 4×2 fixed grid */}
        <div
          className="relative grid gap-4 mx-auto"
          style={{
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gridTemplateRows: '242px 242px',
            zIndex: 2,
          }}
        >
          {/* Row 1 */}
          <div className="col-span-4 md:col-span-1">
            <StandardCard to="/about" label="About" />
          </div>
          <div className="col-span-4 md:col-span-3">
            <StandardCard to="/portfolio" label="Portfolio" />
          </div>

          {/* Row 2 */}
          <div className="col-span-4 md:col-span-2">
            <StandardCard to="/contact" label="Contact" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <PortraitCard />
          </div>
          <div
            className="col-span-2 md:col-span-1 grid gap-4"
            style={{ gridTemplateRows: '1fr 1fr' }}
          >
            <StackCard />
            <StandardCard to={SITE.resume} label="Resume" external download />
          </div>
        </div>

        {/* Bottom pill — subtle scroll/handle affordance under the grid */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-3 w-10 h-[3px] rounded-full bg-white/25"
          aria-hidden="true"
        />
      </div>
    </RollingWordProvider>
  );
}
