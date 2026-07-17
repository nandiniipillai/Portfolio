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
          <p
            className="font-heading tracking-tightest text-silver max-w-3xl"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1 }}
          >
            Dive into a few projects that represent my most fulfilling design experiences.
          </p>
        </BlurReveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CASE_STUDIES.map((s, i) => (
            <PortfolioCard key={s.slug} study={s} featured={i === 0 || i === 3} />
          ))}
        </div>

        <OtherProjects />
      </div>
    </motion.div>
  );
}
