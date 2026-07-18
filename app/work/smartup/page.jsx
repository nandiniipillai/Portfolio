'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import SplitRow from '@/components/SplitRow';
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

function ThumbGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {items.map((it) => (
        <ScrollReveal key={it.src}>
          <figure>
            <div
              className="relative rounded-xl overflow-hidden bg-carbon border border-white/[0.05]"
              style={{ aspectRatio: '16/9' }}
            >
              <Zoom>
                <Image
                  src={it.src}
                  alt={it.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover"
                />
              </Zoom>
            </div>
            <figcaption className="mt-3 text-[11px] tracking-[0.24em] uppercase text-ash">
              {it.label}
            </figcaption>
          </figure>
        </ScrollReveal>
      ))}
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
        {/* 1. Hero showcase */}
        <Showcase
          src="/assets/smartup/v2-2.jpg"
          alt="SmartUp mobile screens flatlay"
          aspect="16/9"
        />

        {/* 2. About — her copy, centered prose */}
        <Section>
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">About</div>
          <Prose>
            SmartUp Storefront is a cloud-based retail management platform
            designed to help businesses, both large chains and small
            storefronts, to manage their operations on the go.
          </Prose>
        </Section>

        {/* 3. Pull quote for a moment of drama */}
        <PullQuote>
          Access critical business data anytime, anywhere, without sacrificing
          simplicity or usability.
        </PullQuote>

        {/* 4. The challenge — split */}
        <SplitRow
          src="/assets/smartup/v2-3.jpg"
          alt="Desktop-only platform, redesigned for mobile"
          imgSide="right"
          tone="sunken"
          label="The challenge"
        >
          Existing SmartUp Retail users could only access the system on
          desktop, limiting flexibility and efficiency. My task was to design
          a mobile solution that enabled users to access critical business
          data anytime, anywhere, without sacrificing simplicity or usability.
        </SplitRow>

        {/* 5. The goal — centered prose + list */}
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

        {/* 6. Process artefacts — thumb grid, no prose */}
        <Section title="Process" tone="sunken">
          <ThumbGrid
            items={[
              { src: '/assets/smartup/v2-5.jpg', label: 'User flow' },
              { src: '/assets/smartup/v2-6.jpg', label: 'Wireframes' },
              { src: '/assets/smartup/v2-7.jpg', label: 'Mid-fidelity exploration' },
            ]}
          />
        </Section>

        {/* 7. Outcome — big showcase */}
        <Section>
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-6">Outcome</div>
          <div className="relative rounded-2xl overflow-hidden bg-carbon border border-white/[0.05]" style={{ aspectRatio: '16/9' }}>
            <Zoom>
              <Image
                src="/assets/smartup/v2-8.jpg"
                alt="Final high-fidelity screens"
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
              />
            </Zoom>
          </div>
        </Section>

        {/* 8. Prototype walkthroughs — three phones in a row */}
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
