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

// A decision whose evidence is a wide product screen: pointers first, then the
// shot full-width, so dense UI stays legible instead of being squeezed into a
// half column.
function WideFeature({ label, points, why, media }) {
  return (
    <div className="py-8 md:py-10 border-t border-white/[0.06]">
      <ScrollReveal>
        <div className="max-w-measure space-y-3">
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
      <ScrollReveal className="mt-6">{media}</ScrollReveal>
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
          ['Status', ['Pilot stage', <a key="url" href="https://getbaari.in" target="_blank" rel="noreferrer noopener" style={{ color: ACCENT, textDecoration: 'underline' }}>getbaari.in ↗</a>]],
        ]}
      >
        {/* 1. Hero — the live product */}
        <section className="py-8 md:py-12 px-5 md:px-10">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <BrowserShot
                src="/assets/baari/live-queue.png"
                alt="Baari queue board at a live dental clinic — waiting list of tokens on the left, the patient currently in consult on the right"
                url="getbaari.in"
                aspect="1660/760"
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
            <WideFeature
              label="The queue board refuses navigation"
              points={[
                'The whole day on one screen: waiting and in-consult side by side, under a stats bar reading Today, Waiting, In consult and Late.',
                'Each row carries what the desk needs to triage at a glance — token, time, reason for visit, and a returning-customer visit count.',
                'The consult card carries a live timer, so “how long has this been running?” is answered without asking.',
                'Labels adapt to the business: “in chair” for a dental desk, “in consult” for a clinic, “in session” for a spa.',
              ]}
              why="A receptionist mid-rush cannot tab-hunt, and should not have to translate generic software vocabulary."
              media={
                <BrowserShot
                  src="/assets/baari/demo-queue-full.png"
                  alt="The queue board — waiting list on the left with tokens, reasons and late flags, the patient in consult on the right with a live timer"
                  aspect="1340/610"
                />
              }
            />
            <FeatureRow
              label="The whole booking is one panel"
              points={[
                'Name, mobile with country code, reason, party size and a first-visit flag in a single side panel — never a multi-step wizard.',
                'The slot grid carries the day’s real availability inline — “13 of 20 slots free today” — with taken slots struck through rather than hidden.',
                '“Save & add another” keeps the desk moving when a family books back to back.',
              ]}
              why="The desk is taking the booking while the customer stands there. Every extra screen is a queue forming behind them."
              imgSide="right"
              media={
                <div className="mx-auto w-full max-w-[380px]">
                  <BrowserShot
                    src="/assets/baari/live-booking-panel.png"
                    alt="New booking panel — patient name, mobile, reason, party size, first visit, and a slot grid showing 13 of 20 slots free today"
                    aspect="580/744"
                  />
                </div>
              }
            />
            <FeatureRow
              label="Every action is one tap, and the tap is the record"
              points={[
                'Check in, mark done, walk in and no-show are the only gestures the desk needs all day.',
                'Each one lands in the day’s record automatically, so the receptionist never does data entry.',
                'Anyone past their slot is flagged automatically; one tap marks a no-show and the next customer moves up.',
              ]}
              why="The paper register survived because it was fast. Baari had to be faster, and turn the same gesture into data the notebook never gave back."
              imgSide="left"
              media={
                <div className="mx-auto w-full max-w-[440px]">
                  <BrowserShot
                    src="/assets/baari/demo-queue-rows.png"
                    alt="Queue rows — a patient automatically flagged LATE eight minutes past their slot, and returning customers carrying a visit count"
                    aspect="712/330"
                  />
                </div>
              }
            />
            <WideFeature
              label="Search is a first-class surface, not a filter"
              points={[
                'Find anyone by name or 10-digit mobile, with recent patients already listed before a single key is pressed.',
                'A walk-in with no record can be added as a guest on the spot, so an unknown face never blocks the queue.',
                'Every result opens a profile with that person’s history behind it.',
              ]}
              why="After the queue, looking someone up is the thing a front desk does most — so it earns its own tab, not a filter buried in a table."
              media={
                <BrowserShot
                  src="/assets/baari/live-search.png"
                  alt="Search — find a patient by name or 10-digit mobile, with a list of recent patients below"
                  aspect="1432/470"
                />
              }
            />
            <WideFeature
              label="The register that reads itself"
              points={[
                'Silent churn names the regulars who stopped coming, with how many visits they used to make and how long it has been.',
                'Category revenue shows what actually pays — consultation against pharmacy against procedure, in rupees and share.',
                'Cohort retention tracks whether each month’s new customers came back, which is the number a paper register could never produce.',
              ]}
              why="This is the picture the paper register never showed — and it is what the owner, who signs up and pays, is buying."
              media={
                <BrowserShot
                  src="/assets/baari/demo-signal-reports.png"
                  alt="Signal reports — silent churn listing lapsed regulars, category revenue split across consultation, pharmacy and procedure, and a cohort retention matrix"
                  aspect="1340/330"
                />
              }
            />
            <WideFeature
              label="Every booking carries where it came from"
              points={[
                'The month resolves into one line: bookings, completed, no-show rate, cancellations, average wait and average session.',
                'Revenue is reported with its own coverage figure, so the owner knows how much of the total is actually tracked rather than assumed.',
                'Bookings split by source — app, front desk, walk-in — which turns “are we busy?” into a question with an answer.',
              ]}
              why="Every one of these is a byproduct of taps the receptionist already makes. Nothing here asks anyone to do bookkeeping."
              media={
                <BrowserShot
                  src="/assets/baari/demo-signal-stats.png"
                  alt="Signal overview — total bookings, completed, no-show rate, cancellations, average wait and session, with revenue coverage and bookings split by app, front desk and walk-in"
                  aspect="1340/420"
                />
              }
            />
            <WideFeature
              label="Empty states that name the next action"
              points={[
                'A report with no data yet explains itself: “Not enough history yet — this chart fills in after a couple of months of visits.”',
                'Where the owner has to do something to fill it, the empty state says exactly what: “tag categories when you tap Mark done to see the split here.”',
                'A genuinely good result reads as good news, not as missing data: “No silent churn — every returning patient has been in recently.”',
              ]}
              why="A blank chart reads as broken software. An empty state that names the next action turns a gap into an instruction."
              media={
                <BrowserShot
                  src="/assets/baari/live-empty-states.png"
                  alt="Three report cards with instructional empty states for silent churn, category revenue and cohort retention"
                  aspect="1432/530"
                />
              }
            />
            <FeatureRow
              label="The promises are part of the product"
              points={[
                'No paid ranking, ever — app listings rank by distance, rating and response time, and changing that policy carries 30 days’ notice.',
                'No lock-in: the patient list, booking history and revenue reports export at any time.',
                'A 30-day billing notice, and nothing gets paywalled retroactively once a plan is picked.',
              ]}
              why="The incumbents sell placement and take a cut per consultation. Writing the opposite down, inside the product, is the positioning."
              imgSide="right"
              media={
                <div className="mx-auto w-full max-w-[400px]">
                  <BrowserShot
                    src="/assets/baari/live-promises.png"
                    alt="Written promises — no paid ranking ever, and a 30-day billing notice"
                    aspect="480/494"
                  />
                </div>
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
