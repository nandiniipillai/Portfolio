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
      className="fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center justify-between px-4 md:px-5 backdrop-blur-md bg-[#0a0a0a]/70"
      aria-label="Primary"
    >
      <div className="flex items-baseline gap-3 text-[14px]">
        <Link
          href="/"
          className="text-white font-semibold tracking-tight leading-none"
        >
          {onRoot ? SITE.name : <span>← Home</span>}
        </Link>
        <span className="hidden md:inline text-[#999] font-normal tracking-tight leading-none">
          {SITE.title}
        </span>
      </div>
      <div className="flex items-center gap-3 text-[14px] text-[#999]">
        <LiveClock />
        <Link
          href="/contact"
          aria-label="Contact"
          className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-[#7CFF9B] pulse-dot"
        />
      </div>
    </motion.nav>
  );
}
