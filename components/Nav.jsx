'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import LiveClock from './LiveClock';
import { SITE } from '@/lib/site';

export default function Nav() {
  const pathname = usePathname();
  const onRoot = pathname === '/';

  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 md:px-8 backdrop-blur-md bg-ink/40 border-b border-white/[0.04]"
      aria-label="Primary"
    >
      <div className="flex items-baseline gap-4 text-[13px]">
        <Link
          href="/"
          className="group text-silver hover:text-lime transition-colors font-medium tracking-tight"
        >
          {onRoot ? SITE.name : (<span>← Home</span>)}
        </Link>
        <span className="hidden md:inline text-fog/70 tracking-tight">{SITE.title}</span>
      </div>
      <div className="flex items-center gap-3 text-[13px] text-fog">
        <span className="hidden sm:inline">{SITE.location}</span>
        <span className="hidden sm:inline text-ash">·</span>
        <LiveClock />
        <Link
          href="/contact"
          aria-label="Contact"
          className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-silver hover:bg-lime transition-colors"
        />
      </div>
    </motion.nav>
  );
}
