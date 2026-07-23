'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import ScrollReveal from '@/components/ScrollReveal';
import CaseStudyNav from '@/components/CaseStudyNav';

const ACCENT = '#34D399';

// Dark browser-framed product shot — matches the live product's own chrome.
function BrowserShot({ src, alt, url, aspect = '16/10', priority = false }) {
  return (
    <div className="w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.14] bg-[#0f0f12] shadow-2xl">
      <div className="flex items-center gap-1 px-2.5 py-2 bg-[#1a1a1e] border-b border-white/[0.06]">
        <span className="flex gap-1" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
        </span>
        {url && (
          <span className="mx-auto text-[10px] text-fog bg-white/[0.06] rounded-full px-2 py-0.5">
            {url}
          </span>
        )}
      </div>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Zoom>
          <Image
            src={src}
            alt={alt || ''}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            priority={priority}
            className="object-cover object-top"
          />
        </Zoom>
      </div>
    </div>
  );
}

// One design decision: product shot on one side, scannable pointers on the other.
// `points` are the decision as short bullets; `why` is a single one-line rationale.
function FeatureRow({ label, points, why, imgSide = 'left', media }) {
  const mediaCol = <ScrollReveal>{media}</ScrollReveal>;
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-8 md:py-10 border-t border-white/[0.06] first:border-t-0">
      {imgSide === 'left' ? (
        <>
          {mediaCol}
          {text}
        </>
      ) : (
        <>
          {text}
          {mediaCol}
        </>
      )}
    </div>
  );
}

// Front-loaded summary: role (who owns what), scope (the honest numbers), outcome.
const GLANCE = [
  ['My role', 'Founding product designer. I own design and product; my co-founder owns engineering. I designed the system as written specifications.'],
  ['Scope', 'A web dashboard, an Android customer app and end-to-end billing — three surfaces on one backend, shipped in months.'],
  ['Outcome', 'Live at getbaari.in. A real clinic runs its day on the queue; the Android app is in internal testing.'],
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

// The framing insight drawn, not just told: three role-specific surfaces, one
// shared booking record. Middle arrow is desktop-only; on mobile the grid
// collapses so the three surfaces sit above the record they share.
const SURFACES = [
  ['Receptionist', 'Runs the day on the queue board.'],
  ['Owner', 'Signs up, pays, reads the reports.'],
  ['Customer', 'Opens the app to see their turn.'],
];

function ThreeRolesDiagram() {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-8">
        <div className="grid md:grid-cols-[minmax(0,1.05fr)_auto_minmax(0,1fr)] gap-6 md:gap-0 items-center">
          <div className="space-y-3">
            {SURFACES.map(([who, what]) => (
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
              One shared record
            </div>
            <div className="font-heading tracking-tightest text-silver text-xl md:text-2xl mt-1">
              One booking, one backend
            </div>
            <p className="text-fog text-sm mt-2 leading-relaxed">
              Created at the desk or in the app, it&apos;s the same record — visible on every
              surface within a 15-second poll.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function BaariPage() {
  return (
    <>
      {/* CaseStudyNav sits outside the motion.div: its `filter` animation makes it
          the containing block for position:fixed, which would break the rail. */}
      <CaseStudyNav accent={ACCENT} />
      <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="baari"
        index="01"
        accent={ACCENT}
        title="Baari"
        oneLiner="A live queue for India’s clinics and salons, shipped to production."
        meta={[
          ['Role', 'Founding Product Designer'],
          ['Team', ['Product Designer', 'Software Developer']],
          ['Industry', 'B2C SaaS'],
          ['Status', 'Pilot stage'],
          ['URL', <a key="url" href="https://getbaari.in" target="_blank" rel="noreferrer noopener" style={{ color: ACCENT, textDecoration: 'underline' }}>getbaari.in ↗</a>],
        ]}
      >
        {/* 1. Hero — the live product */}
        <section className="py-8 md:py-12 px-5 md:px-10">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <BrowserShot
                src="/assets/baari/queue-dashboard.png"
                alt="Baari queue dashboard — a clinic's live day: waiting list and in-consult panel"
                url="getbaari.in"
                priority
              />
              <p className="mt-3 text-[11px] tracking-[0.24em] uppercase text-ash text-center">
                The live product — a real clinic&apos;s queue running on Baari
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* At a glance — role, scope, outcome, up front */}
        <AtAGlance />

        {/* 2. The problem */}
        <Section title="Clinics and salons still run their day on paper, a landline and WhatsApp screenshots" tone="sunken">
          <Prose>
            Baari began as a simple observation — customers routinely lose hours waiting for sequential services because the front desk has no system beyond a notebook. Around 90% of small Indian clinics, salons, spas and vets track nothing: no-shows go uncounted, quiet regulars are forgotten, and yesterday’s revenue is a guess. The alternatives are Practo-style suites that push paid listings and take per-consultation cuts, or tools like Calendly built for solo consultants rather than walk-in-heavy desks.
          </Prose>
        </Section>

        {/* 3. The framing insight */}
        <Section title="Three roles, one booking">
          <Prose>
            The receptionist runs the product all day. The owner signs up, pays, and reads the reports. The customer just wants to know when their turn comes. Each role got its own surface and language, but every booking is one shared record on one backend — created at the desk or in the app, visible everywhere within a 15-second poll.
          </Prose>
          <div className="mt-8">
            <ThreeRolesDiagram />
          </div>
        </Section>

        {/* 4. Key design decisions — real product shots */}
        <Section title="Key design decisions" tone="sunken">
          <Prose>
            Every decision below serves one of the three roles — and the same
            rule: the front desk is busy, so the product must never make it
            think.
          </Prose>
          <div className="mt-6">
            <FeatureRow
              label="The queue board refuses navigation"
              points={[
                'The whole day on one screen: waiting and in-consult panels side by side, live timers, a stats bar on top.',
                'The three actions a front desk needs — walk-in, new booking, close day — are always visible.',
                'Labels adapt to the business: “in chair” for a dental desk, “in consult” for a clinic, “in session” for a spa.',
              ]}
              why="A receptionist mid-rush cannot tab-hunt, and should not have to translate generic software vocabulary."
              imgSide="left"
              media={
                <BrowserShot
                  src="/assets/baari/queue-dashboard.png"
                  alt="Queue board with waiting list and in-consult panel side by side"
                />
              }
            />
            <FeatureRow
              label="Every action is one tap"
              points={[
                'A walk-in joins the queue in one tap; marking a visit done is one tap.',
                'Each tap lands in the day’s record automatically — no separate data entry.',
              ]}
              why="The paper register survived because it was fast. Baari had to be faster, and turn the same gesture into data the notebook never gave back."
              imgSide="right"
              media={
                <BrowserShot
                  src="/assets/baari/checkin-card.png"
                  alt="One-tap check-in card — Emma Wilson, in consult, Mark done"
                />
              }
            />
            <FeatureRow
              label="The customer app answers one question"
              points={[
                '“When is my turn?” — the token is the biggest text on every screen.',
                'Live status is gated into four states: a calm “tomorrow”, position and rough wait today, the loudest treatment only when three tokens remain, a quiet close after.',
                'An active booking pins to the opening screen, so the answer costs zero taps.',
              ]}
              why="The gates exist so the app never lies — it will not show a live position for a booking that is not today."
              imgSide="left"
              media={
                <div className="mx-auto w-full max-w-[240px]">
                  <Zoom>
                    <Image
                      src="/assets/baari/customer-app.png"
                      alt="Customer app — Discover nearby businesses with live next-slot times"
                      width={300}
                      height={534}
                      sizes="240px"
                      className="w-full h-auto rounded-2xl border border-white/[0.1]"
                    />
                  </Zoom>
                </div>
              }
            />
            <FeatureRow
              label="The register that reads itself"
              points={[
                'Reports the owner acts on: silent churn (regulars who stopped coming), category revenue (what actually pays), no-show rate, busiest hours.',
                'Every number is a byproduct of the taps the receptionist already makes — no extra bookkeeping.',
              ]}
              why="This is the picture the paper register never showed — and it is what the owner, who signs up and pays, is buying."
              imgSide="right"
              media={
                <BrowserShot
                  src="/assets/baari/signal-analytics.png"
                  alt="Analytics — silent churn and category revenue cards"
                />
              }
            />
          </div>
        </Section>

        {/* 4b. Walkthrough — the core loop, live. Capped at the recording's native
             1440px so it never upscales; dark chrome on a black stage matches the
             product's own dark UI. */}
        <section className="py-6 md:py-10 px-5 md:px-10">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal as="h2" className="font-heading tracking-tightest text-silver text-3xl md:text-5xl mb-8 md:mb-12">
              See Baari in motion
            </ScrollReveal>
            <Prose>
              The loop the whole product turns on: the receptionist takes a booking at the
              desk, and it lands live in the queue — a new token, the day&apos;s counts
              updated, no second step.
            </Prose>
          </div>
          <ScrollReveal>
            <div className="mx-auto max-w-[1440px] mt-8">
              <div className="w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.14] bg-black shadow-2xl">
                <div className="flex items-center gap-1 px-2.5 py-2 bg-[#1a1a1e] border-b border-white/[0.06]">
                  <span className="flex gap-1" aria-hidden="true">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
                  </span>
                  <span className="mx-auto text-[10px] text-fog bg-white/[0.06] rounded-full px-2 py-0.5">
                    getbaari.in
                  </span>
                </div>
                <video
                  src="/assets/baari/baari-walkthrough.mp4"
                  poster="/assets/baari/baari-walkthrough-poster.jpg"
                  aria-label="Walkthrough of the Baari queue: a receptionist creates a booking at the desk and it appears live in the waiting list as a new token"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="block w-full h-auto bg-black"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 5. How two people shipped it */}
        <Section title="Two people, spec-driven, shipped in months">
          <Prose>
            Baari is a two-person company — I own design and product, my co-founder owns engineering. I designed in specifications: every screen defined as a numbered spec with exact layout order, verbatim UI copy, state gates and acceptance criteria. Implementation was AI-accelerated under my co-founder’s engineering ownership, which is how two people shipped a web dashboard, a mobile app and end-to-end billing. The UI was built against theme tokens — one primary color, one radius, one type scale — so the eventual rebrand is a token swap, not a repaint.
          </Prose>
          <PullQuote>
            The spec is the design. My highest-leverage artifact was the written specification, not the mockup.
          </PullQuote>
        </Section>

        {/* 6. Rigour — the audits */}
        <Section title="Screen-recording audits surfaced 20+ issues, ranked by trust damage" tone="sunken">
          <Prose>
            Acting as my own QA, I walked both surfaces from recordings and triaged every finding by one question — can this make a booking wrong, lost, or dishonest? A vanished booking and a silent double-booking ranked P0; a missing skeleton screen ranked P2. Ten must-fix items came out, each specified to acceptance criteria, including a timezone bug where one diagnosis collapsed four reports into a single root cause.
          </Prose>
        </Section>

        {/* 7. Deliberate cuts */}
        <Section title="What I traded away, on purpose">
          <SubList items={[
            'Payment integration, until real signups show which market converts',
            'WhatsApp reminders and broadcasts, pending a Meta BSP contract',
            'Multi-location support, deferred until chains ask',
            'Reviews, loyalty and granular notification settings',
          ]} />
          <Prose>
            Every cut is recorded with its reasoning, which kept scope from being relitigated and made the product’s restraint deliberate.
          </Prose>
        </Section>

        {/* 8. The result — timeline */}
        <Section title="The result" tone="sunken">
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {[
              {
                num: '01',
                phase: 'Live',
                headline: 'Shipped publicly at getbaari.in.',
                support:
                  'Dashboard, marketing site and three billing tiers with a 60-day Pro trial and automatic INR/USD regional pricing — running end-to-end on infrastructure under $50/month, with Cloudflare serving 90% of anonymous traffic from the edge.',
              },
              {
                num: '02',
                phase: 'In real use',
                headline: 'A real clinic runs its day on the queue.',
                support:
                  'One live pilot workspace serving real bookings. The Android customer app is in internal testing ahead of its Play Store release.',
              },
              {
                num: '03',
                phase: 'Next',
                headline: 'Traffic decides the roadmap.',
                support:
                  'Outreach to 20–30 clinics and salons, 30–50 trial workspaces, and payments built for whichever market shows real intent.',
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

        {/* 9. Learnings */}
        <Section title="What I learned">
          <SubList items={[
            'The spec is the design. The written specification was my highest-leverage artifact, not the mockup.',
            'Audit like an outsider. Screen recordings on real devices caught what design tools never showed.',
            'Triage by trust. “Can this lie to a user?” outranks “is this ugly?”',
            'Involve real customers at more checkpoints — earlier input would have prevented failures we had to live through.',
          ]} />
        </Section>
      </CaseStudyShell>
      </motion.div>
    </>
  );
}
