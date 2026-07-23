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
import CaseStudyNav from '@/components/CaseStudyNav';

const ACCENT = '#7C5CFC';

// One design decision: phone screen on one side, scannable pointers on the other.
function DecisionRow({ label, points, why, src, alt, imgSide = 'left' }) {
  const media = (
    <ScrollReveal>
      <div className="mx-auto w-full max-w-[215px]">
        <Zoom>
          <Image
            src={src}
            alt={alt}
            width={468}
            height={1013}
            sizes="240px"
            className="w-full h-auto rounded-2xl border border-white/[0.08]"
          />
        </Zoom>
      </div>
    </ScrollReveal>
  );
  const text = (
    <ScrollReveal>
      <div className="space-y-3">
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash">Design decision</div>
        <h3 className="font-heading tracking-tightest text-silver text-xl md:text-2xl leading-tight">
          {label}
        </h3>
        <ul className="space-y-2 mt-1">
          {points.map((p, i) => (
            <li key={i} className="pl-5 relative text-fog text-sm md:text-base leading-relaxed">
              <span
                className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT }}
                aria-hidden="true"
              />
              {p}
            </li>
          ))}
        </ul>
        {why && (
          <p className="text-fog text-sm leading-relaxed pt-1">
            <span className="text-[11px] tracking-[0.24em] uppercase mr-2" style={{ color: ACCENT }}>Why</span>
            {why}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-6 md:py-8 border-t border-white/[0.06] first:border-t-0">
      {imgSide === 'left' ? <>{media}{text}</> : <>{text}{media}</>}
    </div>
  );
}

// Front-loaded summary. The role line is precise about the freelance reality:
// sole designer, end-to-end, but working from a supplied research document with
// no direct user access and the PM holding the final call.
const GLANCE = [
  ['My role', 'Sole designer on a four-person squad, brought in as an outsourced freelancer. I owned discovery, journey mapping, IA, wireframes and the final prototype.'],
  ['Scope', 'An information-heavy desktop retail platform compressed onto a phone — inventory, sales, staff, reports and point of sale in one role-aware app.'],
  ['Outcome', 'A validated prototype that test users asked to keep. Detosphere used it to raise funding, and engineers built it out after handoff.'],
];

function AtAGlance() {
  return (
    <section className="px-5 md:px-10">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-y border-white/[0.08] py-8 md:py-10">
        {GLANCE.map(([label, body]) => (
          <ScrollReveal key={label}>
            <div className="text-[11px] tracking-[0.24em] uppercase mb-2" style={{ color: ACCENT }}>
              {label}
            </div>
            <p className="text-fog text-sm md:text-base leading-relaxed">{body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// The merge drawn, not just told: two scoped products collapsing into one app
// that changes what it shows by role.
const MERGED = [
  ['Control Panel', 'For managers — oversight, staff, reports.'],
  ['POS Lite', 'For floor staff — take a sale, close it.'],
];

function MergeDiagram() {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-6 md:gap-0 items-center">
          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash">Originally scoped as two</div>
            {MERGED.map(([who, what]) => (
              <div
                key={who}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 border-l-2"
                style={{ borderLeftColor: ACCENT }}
              >
                <div className="text-silver text-sm md:text-base font-medium">{who}</div>
                <div className="text-fog text-xs md:text-sm mt-0.5 leading-relaxed">{what}</div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-center px-6" aria-hidden="true">
            <span className="text-3xl leading-none" style={{ color: ACCENT }}>→</span>
          </div>
          <div className="md:hidden flex justify-center" aria-hidden="true">
            <span className="text-2xl leading-none" style={{ color: ACCENT }}>↓</span>
          </div>
          <div
            className="rounded-xl border p-5"
            style={{ borderColor: `${ACCENT}55`, background: `${ACCENT}0f` }}
          >
            <div className="text-[11px] tracking-[0.24em] uppercase" style={{ color: ACCENT }}>
              Shipped as one
            </div>
            <div className="font-heading tracking-tightest text-silver text-xl md:text-2xl mt-1">
              One role-aware app
            </div>
            <p className="text-fog text-sm mt-2 leading-relaxed">
              Same install, same nav — what it surfaces changes by who signed in. Cheaper to
              build, one thing to learn, no compromise on either audience.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

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
    <>
      {/* Outside the motion.div: its `filter` animation would become the
          containing block for the rail's position:fixed. */}
      <CaseStudyNav accent={ACCENT} />
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
        oneLiner="Stock, sales and staff, in a retailer’s pocket."
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

        {/* At a glance — role, scope, outcome, up front */}
        <AtAGlance />

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
          src="/assets/smartup/mid-fi-exploration.jpg"
          alt="Mid-fidelity exploration — five inventory screens across the app"
          aspect="1920/826"
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

        <section className="py-6 md:py-10 px-5 md:px-10">
          <div className="mx-auto max-w-5xl">
            <MergeDiagram />
          </div>
        </section>

        {/* 7b. Key design decisions */}
        <Section title="Key design decisions">
          <Prose>
            Every screen had to answer the same question before it earned a place:
            if someone is standing in the store, what do they need right now?
          </Prose>
          <div className="mt-6">
            <DecisionRow
              label="Home opens on today, not on everything"
              points={[
                'Today’s numbers first — purchases made, customers served, net sales processed.',
                'Then only what needs a response: recent sales, and open stock requests from other branches.',
                'One button starts a sale, so the most common action never needs a menu.',
              ]}
              why="The desktop platform’s completeness was the problem, not the goal. A shop floor doesn’t need the company’s spend breakdown."
              src="/assets/smartup/screen-home.png"
              alt="SmartUp home — today's totals, recent sales, stock requests and a New Sale button"
              imgSide="right"
            />
            <DecisionRow
              label="Point of sale, designed to be closed"
              points={[
                'Charging a walk-in is one sheet: payment method, amount tendered, and the change owed calculated as you type.',
                'Discounts and sale notes stay collapsed until someone asks for them.',
                '“Record as old sale” covers the transaction that happened on paper and gets entered later.',
              ]}
              why="This is a transaction under time pressure with a customer waiting, not an admin session."
              src="/assets/smartup/screen-sale.png"
              alt="Charge Walk-In Customer — payment option, amount tendered, remainder, and Record Sale"
              imgSide="left"
            />
            <DecisionRow
              label="Stock that says who changed it, and why"
              points={[
                'Inventory splits into warehouse stock, transfers, requests and adjustments.',
                'Every adjustment carries the person, the timestamp, the branch, the quantity and the reason — breakages, theft.',
                'Items carry a plain stock state — safe, warning, unknown — instead of asking anyone to read a number.',
              ]}
              why="Stock disputes are questions of accountability. The record has to answer them without a phone call."
              src="/assets/smartup/screen-inventory.png"
              alt="Inventory stock adjustments — each entry showing who adjusted it, when, quantity and reason"
              imgSide="right"
            />
          </div>
        </Section>

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
              video="/assets/smartup/onboarding.mp4"
              poster="/assets/smartup/onboarding-poster.jpg"
              label="Onboarding & home"
            />
            <VideoTile
              video="/assets/smartup/recording-sales.mp4"
              poster="/assets/smartup/recording-sales-poster.jpg"
              label="Recording a sale"
            />
            <VideoTile
              video="/assets/smartup/managing-inventory.mp4"
              poster="/assets/smartup/managing-inventory-poster.jpg"
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
    </>
  );
}
