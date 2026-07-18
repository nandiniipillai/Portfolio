'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import DisplayTitle from '@/components/DisplayTitle';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Marquee from '@/components/Marquee';
import ScrollReveal from '@/components/ScrollReveal';
import { SITE } from '@/lib/site';

function WordByWord({ text, baseDelay = 0 }) {
  const words = text.split(' ');
  return (
    <p className="text-fog text-xl md:text-2xl leading-relaxed">
      {words.map((w, i) => (
        <span key={i}>
          <motion.span
            initial={{ opacity: 0.16 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: baseDelay + i * 0.015, ease: 'easeOut' }}
            className="inline-block"
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  );
}

function IntroParagraphs({ text }) {
  // Split on sentence-ending punctuation, keep each full sentence intact.
  const sentences = (text.match(/[^.!?]+[.!?]+/g) || [text]).map((s) => s.trim());
  let runningWordCount = 0;
  return (
    <div className="space-y-6">
      {sentences.map((sentence, i) => {
        const delay = runningWordCount * 0.015;
        runningWordCount += sentence.split(' ').length;
        return <WordByWord key={i} text={sentence} baseDelay={delay} />;
      })}
    </div>
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
            <IntroParagraphs text={SITE.aboutIntro} />
            <ScrollReveal>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/20 px-7 py-3.5 text-silver hover:-translate-y-0.5 transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2"
                style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)' }}
              >
                <span className="text-[18px] font-medium tracking-tight leading-none">View Résumé</span>
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
