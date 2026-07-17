'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import DisplayTitle from '@/components/DisplayTitle';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Marquee from '@/components/Marquee';
import ScrollReveal from '@/components/ScrollReveal';
import { SITE } from '@/lib/site';

function WordByWord({ text }) {
  const words = text.split(' ');
  return (
    <p className="text-fog text-xl md:text-2xl leading-relaxed">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.16 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.015, ease: 'easeOut' }}
          className="inline-block"
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </p>
  );
}

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="pt-28 md:pt-36 pb-20 px-5 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <DisplayTitle>About</DisplayTitle>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-start">
          <div className="md:pt-8">
            <WordByWord text={SITE.aboutIntro} />
            <ScrollReveal>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 text-cream hover:text-amber transition-colors group"
              >
                View résumé <span className="card-arrow" aria-hidden="true">↗</span>
              </a>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div
              className="relative w-full rounded-[32px] overflow-hidden bg-carbon"
              style={{ aspectRatio: '546/685' }}
            >
              <Image
                src={SITE.portrait}
                alt="Nandini Pillai"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                style={{ objectPosition: 'center 32%' }}
              />
            </div>
          </ScrollReveal>
        </div>

        <ExperienceTimeline />
      </div>

      <div className="mt-24">
        <Marquee />
      </div>
    </motion.div>
  );
}
