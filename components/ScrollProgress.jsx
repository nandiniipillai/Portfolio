'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress({ accent = '#F4F4F2' }) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-14 left-0 right-0 h-[2px] origin-left z-40"
      style={{ background: accent, scaleX: scrollYProgress }}
    />
  );
}
