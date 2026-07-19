'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid } from '@/components/CaseBits';
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

function BeforeAfter({ before, after, beforeLabel, afterLabel }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 md:gap-10 items-end">
      <ScrollReveal>
        <figure className="flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-xl" style={{ aspectRatio: '2272/1888' }}>
            <Zoom>
              <Image
                src={before}
                alt={beforeLabel}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-contain"
              />
            </Zoom>
          </div>
          <figcaption className="mt-3 text-[11px] tracking-[0.24em] uppercase text-ash">
            {beforeLabel}
          </figcaption>
        </figure>
      </ScrollReveal>
      <ScrollReveal>
        <figure className="flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-[220px]" style={{ aspectRatio: '1440/2932' }}>
            <Zoom>
              <Image
                src={after}
                alt={afterLabel}
                fill
                sizes="(max-width: 768px) 100vw, 220px"
                className="object-contain"
              />
            </Zoom>
          </div>
          <figcaption className="mt-3 text-[11px] tracking-[0.24em] uppercase text-ash">
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
          ['Team', ['Product Manager', 'Front-end developer', 'Back-end developer']],
          ['Industry', 'Retail / SaaS'],
          ['Company', ['Detosphere Ltd.', 'ISS Innovation Hub']],
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

        {/* 3. Challenge — before / after */}
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

        {/* 4. Pull quote — the design insight, not the brief */}
        <PullQuote>
          One sharp filter — what the shop floor needs right now — decided the
          IA and the hierarchy of every screen.
        </PullQuote>

        {/* 5. The bet (was Goal) — designer's framing */}
        <Section>
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">The bet</div>
          <Prose>
            What does the shop floor need <em>right now</em>? Everything else
            could stay on desktop. That single question decided the scope, and
            it kept mobile from becoming a smaller copy of the web platform.
          </Prose>
          <div className="mt-6">
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-3">
              What earned its place on mobile
            </div>
            <SubList
              items={[
                'Inventory and sales data at a glance',
                'Staff and performance oversight',
                'Reports and analytics for the day',
                'Point-of-sale — record a sale, close it, move on',
              ]}
            />
          </div>
        </Section>

        {/* 6. Working from research, without users — the constraint story */}
        <Section title="Working from research, without users" tone="sunken">
          <Prose>
            I joined as the sole designer on a four-person team and had no
            direct access to SmartUp&apos;s retail users. The client&apos;s
            existing research document became the dataset. I treated it that
            way — extracting every signal from it, then attaching my questions
            to every round of the client&apos;s usability testing so the
            answers flowed back into the next iteration.
          </Prose>
          <Prose>
            AI helped me synthesise the research faster and draft the
            questions I wanted asked. The client explicitly wanted hand-crafted
            design work, so every screen was designed by hand.
          </Prose>
        </Section>

        {/* 7. Two products into one — the merge decision */}
        <SplitRow
          src="/assets/smartup/v2-7.jpg"
          alt="Mid-fidelity exploration — Control Panel and POS Lite converging"
          imgSide="right"
          label="Two products into one"
          title="Prototyped both, committed to one."
        >
          SmartUp was originally scoped as two apps — a Control Panel for
          managers and a POS Lite for floor staff. I iterated both far enough
          to compare them honestly. Understanding both roles shaped every
          decision that followed, including the biggest one: the product
          manager and I merged them into a single, role-aware app. Cheaper
          to build, one thing to learn, no compromise on either audience.
        </SplitRow>

        {/* 8. What was deliberately cut — the interesting design decisions */}
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

        {/* 9. Prototype walkthroughs — three phones */}
        <Section title="Prototype walkthrough">
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

        {/* 10. Result — timeline of impact, not parallel labels */}
        <Section title="The result" tone="sunken">
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {[
              {
                num: '01',
                phase: 'At validation',
                headline: 'Users didn’t want the demo to end.',
                support:
                  'Test participants asked when they could start using the prototype for real.',
              },
              {
                num: '02',
                phase: 'With stakeholders',
                headline: 'The prototype outlived the design phase.',
                support:
                  'Detosphere used it internally in partnership and funding conversations.',
              },
              {
                num: '03',
                phase: 'After handoff',
                headline: 'It shipped, and it stayed shipped.',
                support:
                  'Built out by the engineers post-handoff and adopted by real retail businesses.',
              },
            ].map((row) => (
              <ScrollReveal key={row.num}>
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-8 md:py-10">
                  <div>
                    <span
                      className="font-heading tracking-tightest leading-none"
                      style={{ color: ACCENT, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.04em' }}
                    >
                      {row.num}
                    </span>
                    <div className="text-[11px] tracking-[0.24em] uppercase text-ash mt-2">
                      {row.phase}
                    </div>
                  </div>
                  <div>
                    <p className="font-heading tracking-tight text-silver text-xl md:text-2xl leading-tight">
                      {row.headline}
                    </p>
                    <p className="text-fog text-base md:text-lg leading-relaxed mt-3 max-w-2xl">
                      {row.support}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        {/* 11. What I learned — reflection */}
        <Section title="What I learned">
          <SubList
            items={[
              'The client makes the final call; my job is making every direction rigorous enough that the choice is informed.',
              'Secondhand research works if you treat the document as a dataset and extract every signal from it.',
              'One sharp filter beats a list of principles — context of use decided more than any guideline could.',
              'Hand-crafted assets were a client constraint I would renegotiate; AI as a disposable prototyping assistant would have bought more iterations in the same time.',
            ]}
          />
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
