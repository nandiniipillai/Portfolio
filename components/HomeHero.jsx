'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import LiveClock from './LiveClock';

const meta = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };

function Word({ delay = 0, children, italic = false, amber = false }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ ...meta, delay }}
      className={`inline-block ${italic ? 'font-serif italic' : ''} ${amber ? 'text-amber' : ''}`}
    >
      {children}
    </motion.span>
  );
}

export default function HomeHero() {
  return (
    <section className="relative min-h-[100svh] w-full px-6 md:px-10 pt-20 md:pt-24 flex flex-col">
      {/* Meta strip */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 md:mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] tracking-[0.22em] uppercase text-cream/60 font-mono"
      >
        <span className="flex items-center gap-2">
          <span className="text-amber" aria-hidden="true">◆</span>
          <span>Portfolio</span>
          <span className="text-cream/30">—</span>
          <span>Selected work</span>
        </span>
        <span>Lancaster, United Kingdom</span>
        <span className="flex items-center gap-1.5">
          <span className="text-amber">UK</span>
          <LiveClock timeOnly />
        </span>
      </motion.div>

      {/* Hero title */}
      <div className="flex-1 flex items-center pt-10 md:pt-16">
        <div className="w-full">
          <h1
            className="font-heading font-bold uppercase tracking-tightest text-cream leading-[0.9]"
            style={{ fontSize: 'clamp(56px, 12vw, 172px)' }}
          >
            <Word delay={0.05}>Nandini</Word>{' '}
            <Word delay={0.15}>Pillai</Word>{' '}
            <Word delay={0.3} amber>
              <span className="mr-2">—</span>
            </Word>
            <Word delay={0.4} italic amber>design</Word>
          </h1>

          {/* Sub-headline row */}
          <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16 items-end border-t border-cream/10 pt-6 md:pt-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...meta, delay: 0.55 }}
              className="text-cream/85 max-w-2xl"
              style={{ fontSize: 'clamp(15px, 1.3vw, 20px)', lineHeight: 1.5 }}
            >
              <span className="font-heading font-bold uppercase tracking-tightest text-cream">
                Product &amp; Experience Designer
              </span>{' '}
              <span className="text-cream/50">—</span>{' '}
              <span className="font-serif italic text-amber">bridging creative execution</span>{' '}
              <span>and strategic thinking, from industrial design to digital products.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...meta, delay: 0.7 }}
              className="md:text-right text-[11px] tracking-[0.22em] uppercase text-cream/55 font-mono space-y-1.5"
            >
              <div>MA Design Management <span className="text-cream/30">—</span> Lancaster University</div>
              <div>B.Des Industrial Design <span className="text-cream/30">—</span> Symbiosis, Pune</div>
              <div className="pt-3">
                <Link href="/portfolio" className="group inline-flex items-center gap-2 text-amber hover:text-cream transition-colors">
                  <span aria-hidden="true" className="card-arrow inline-block">↓</span>
                  <span>Scroll for work</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
