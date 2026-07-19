'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import PhoneFrame from '@/components/PhoneFrame';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#7C5CFC';

function Showcase({ src, alt, aspect = '16/9', tone = 'default' }) {
  const bg = tone === 'sunken' ? 'bg-graphite' : '';
  return (
    <section className={`py-10 md:py-14 px-5 md:px-10 ${bg}`}>
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div
            className="relative rounded-2xl overflow-hidden bg-carbon border border-white/[0.05]"
            style={{ aspectRatio: aspect }}
          >
            <Zoom>
              <Image
                src={src}
                alt={alt || ''}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            </Zoom>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function BeforeAfter({ before, after, beforeLabel, afterLabel }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <ScrollReveal>
        <figure className="flex flex-col items-center">
          <div className="relative w-full max-w-md" style={{ aspectRatio: '4/3' }}>
            <Zoom>
              <Image
                src={before}
                alt={beforeLabel}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain"
              />
            </Zoom>
          </div>
          <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">
            {beforeLabel}
          </figcaption>
        </figure>
      </ScrollReveal>
      <ScrollReveal>
        <figure className="flex flex-col items-center">
          <div className="relative w-full max-w-[240px]" style={{ aspectRatio: '1170/2532' }}>
            <Zoom>
              <Image
                src={after}
                alt={afterLabel}
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-contain"
              />
            </Zoom>
          </div>
          <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">
            {afterLabel}
          </figcaption>
        </figure>
      </ScrollReveal>
    </div>
  );
}

function VideoTile({ video, poster, label }) {
  return (
    <ScrollReveal>
      <figure className="flex flex-col items-center">
        <PhoneFrame video={video} poster={poster} className="!max-w-[240px]" />
        <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">
          {label}
        </figcaption>
      </figure>
    </ScrollReveal>
  );
}

export default function SmartUpPage() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
    >
      <CaseStudyShell
        slug="smartup"
        index="04"
        accent={ACCENT}
        title="SmartUp"
        oneLiner="Inventory Management Retail SaaS App."
        meta={[
          ['Role', 'UX & Product Designer'],
          ['Team', 'Product Manager · Front-end developer · Back-end developer'],
          ['Industry', 'Retail / SaaS'],
          ['Company', 'Detosphere Ltd. - ISS Innovation Hub'],
        ]}
      >
        {/* 1. Hero */}
        <Showcase
          src="/assets/smartup/v2-2.jpg"
          alt="SmartUp mobile screens flatlay"
          aspect="16/9"
        />

        {/* 2. About */}
        <Section>
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">About</div>
          <Prose>
            SmartUp Storefront is a cloud-based retail management platform
            designed to help businesses, both large chains and small
            storefronts, to manage their operations on the go.
          </Prose>
        </Section>

        {/* 3. Pull quote */}
        <PullQuote>
          Access critical business data anytime, anywhere, without sacrificing
          simplicity or usability.
        </PullQuote>

        {/* 4. The challenge — before / after */}
        <Section tone="sunken">
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">The challenge</div>
          <Prose>
            Existing SmartUp Retail users could only access the system on
            desktop, limiting flexibility and efficiency. My task was to design
            a mobile solution that enabled users to access critical business
            data anytime, anywhere, without sacrificing simplicity or usability.
          </Prose>
          <div className="mt-10">
            <BeforeAfter
              before="/assets/smartup/challenge-desktop.png"
              beforeLabel="Was — desktop only"
              after="/assets/smartup/challenge-mobile.png"
              afterLabel="Now — mobile-first"
            />
          </div>
        </Section>

        {/* 5. The goal */}
        <Section>
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">The goal</div>
          <Prose>
            To design a functional, intuitive mobile experience that allowed
            retailers to:
          </Prose>
          <SubList
            items={[
              'Manage inventory and sales data',
              'Oversee staff and performance',
              'Track reports and analytics',
              'Access point-of-sale functionality',
            ]}
          />
        </Section>

        {/* 6. What was deliberately cut — the interesting design decisions */}
        <Section title="What was deliberately cut" tone="sunken">
          <SubList
            items={[
              'Financial and logistics dashboards — desktop-only, no shop-floor use case',
              'Historical reporting archives — mobile shows today, desktop shows trends',
              'Two specialised apps — one unified app cost less to build and maintain',
              'Feature parity as a goal — context of use decided scope instead',
            ]}
          />
        </Section>

        {/* 7. Outcome — big showcase */}
        <Section>
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-6">Outcome</div>
          <div className="relative rounded-2xl overflow-hidden bg-carbon border border-white/[0.05]" style={{ aspectRatio: '16/6' }}>
            <Zoom>
              <Image
                src="/assets/smartup/outcome-screens.png"
                alt="Final high-fidelity screens across the app"
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-contain"
              />
            </Zoom>
          </div>
        </Section>

        {/* 8. Prototype walkthroughs — three phones */}
        <Section title="Prototype walkthrough" tone="sunken">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <VideoTile
              video="/assets/smartup/v2-onboarding-and-hompage.mp4"
              poster="/assets/smartup/onboarding-poster.jpg"
              label="Onboarding & home"
            />
            <VideoTile
              video="/assets/smartup/v2-recording-sales.mp4"
              poster="/assets/smartup/recording-sales-poster.jpg"
              label="Recording a sale"
            />
            <VideoTile
              video="/assets/smartup/v2-mangaging-inventory.mp4"
              poster="/assets/smartup/updating-stock-poster.jpg"
              label="Managing inventory"
            />
          </div>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
