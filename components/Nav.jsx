'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import LiveClock from './LiveClock';
import RollLabel from './RollLabel';
import { SITE } from '@/lib/site';

export default function Nav() {
  const pathname = usePathname();
  const onRoot = pathname === '/';
  const onCaseStudy = pathname.startsWith('/work/');
  const backHref = onCaseStudy ? '/portfolio' : '/';
  const backLabel = onCaseStudy ? '← All projects' : '← Home';

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 md:px-8 backdrop-blur-md bg-black/70"
      aria-label="Primary"
    >
      <div className="flex items-baseline gap-4 text-[15px]">
        <Link
          href={backHref}
          className="group text-silver font-medium tracking-tight leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2 rounded-sm"
        >
          {onRoot ? <RollLabel>{SITE.name}</RollLabel> : <span>{backLabel}</span>}
        </Link>
        <span className="hidden md:inline text-fog tracking-tight leading-none">
          {SITE.title}
        </span>
      </div>
      <div className="flex items-center gap-2 text-[15px] text-fog leading-none">
        <span className="hidden sm:inline">{SITE.location}</span>
        <span className="hidden sm:inline text-ash">•</span>
        <LiveClock timeOnly />
      </div>
    </motion.nav>
  );
}
