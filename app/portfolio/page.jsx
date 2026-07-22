'use client';

import { motion } from 'framer-motion';
import BlurReveal from '@/components/BlurReveal';
import PortfolioCard from '@/components/PortfolioCard';
import OtherProjects from '@/components/OtherProjects';
import { CASE_STUDIES } from '@/lib/case-studies';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="pt-28 md:pt-36 pb-20 px-5 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <BlurReveal>
          <div className="flex items-baseline gap-4 mb-6">
            <span
              className="font-heading text-silver tracking-tightest leading-none"
              style={{ fontSize: 'clamp(56px, 7vw, 96px)', letterSpacing: '-0.05em' }}
            >
              {CASE_STUDIES.length}
            </span>
            <span className="text-silver text-[11px] tracking-[0.24em] uppercase">
              Selected case studies
            </span>
          </div>
          <p
            className="font-heading tracking-tightest text-silver max-w-3xl"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Four products shipped to real users. Built from problem to production.
          </p>
        </BlurReveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 gap-5">
          {CASE_STUDIES.map((s) => (
            <PortfolioCard key={s.slug} study={s} featured />
          ))}
        </div>

        <OtherProjects />
      </div>
    </motion.div>
  );
}
