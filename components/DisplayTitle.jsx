'use client';

import { motion } from 'framer-motion';

export default function DisplayTitle({ children, className = '' }) {
  return (
    <motion.h1
      initial={{ opacity: 0, filter: 'blur(18px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className={`font-heading tracking-tightest text-silver ${className}`}
      style={{ fontSize: 'clamp(56px, 10.2vw, 130px)', lineHeight: 0.9, letterSpacing: '-0.05em' }}
    >
      {children}
    </motion.h1>
  );
}
