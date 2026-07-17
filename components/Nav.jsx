'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/site';

const LINKS = [
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 backdrop-blur-md bg-ink/60"
      aria-label="Primary"
    >
      <Link href="/" className="group text-cream leading-none">
        <span className="font-heading font-bold uppercase tracking-tightest text-[15px] md:text-base">Nandini</span>{' '}
        <span className="font-serif italic text-[15px] md:text-base text-cream/95">Pillai</span>
      </Link>

      <div className="flex items-center gap-6 md:gap-10">
        <ul className="hidden sm:flex items-center gap-6 md:gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[11px] tracking-[0.24em] uppercase text-cream/85 hover:text-amber transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`mailto:${SITE.email}`}
          className="group inline-flex items-center gap-2 rounded-full border border-cream/15 pl-3 pr-3.5 py-1.5 text-[10px] tracking-[0.22em] uppercase text-cream/90 hover:border-amber/60 transition-colors"
        >
          <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#E8A55C' }} />
          <span>Available for work</span>
        </Link>
      </div>
    </motion.nav>
  );
}
