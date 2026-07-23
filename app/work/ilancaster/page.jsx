'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import ScrollReveal from '@/components/ScrollReveal';
import CaseStudyNav from '@/components/CaseStudyNav';

const ACCENT = '#E4002B';

// One design decision: phone screen on one side, scannable pointers on the other.
function DecisionRow({ label, points, why, src, alt, imgSide = 'left' }) {
  const media = (
    <ScrollReveal>
      <div className="mx-auto w-full max-w-[215px]">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          sizes="240px"
          className="w-full h-auto rounded-2xl"
        />
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
      {imgSide === 'left' ? (
        <>{media}{text}</>
      ) : (
        <>{text}{media}</>
      )}
    </div>
  );
}

// Front-loaded summary. The role line is deliberately precise: she owned these
// surfaces as one of two designers, and tested with users rather than running
// the upfront discovery, which the PM supplied.
const GLANCE = [
  ['My role', 'One of two designers splitting the feature set. I owned the navigation and IA, the home dashboard, check-in, Raise Enquiry and notifications.'],
  ['Scope', 'One design system held across 80+ screens, day and night modes in parallel, through three rounds of user testing.'],
  ['Outcome', 'Shipped live to Lancaster students. Navigation went from the primary failure point to resolved; check-in lost three steps.'],
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

// The navigation-first bet drawn, not just told: what earns the fold versus what
// sits one deliberate tap behind it.
const ABOVE_FOLD = [
  ["Today's timetable", 'The one thing checked between every class.'],
  ['Check-in', 'The most time-sensitive daily action.'],
  ['Active notifications', 'Anything that needs a decision now.'],
];

function FoldDiagram() {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-8">
        <div className="grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.9fr)] gap-6 md:gap-0 items-center">
          <div className="space-y-3">
            <div className="text-[11px] tracking-[0.24em] uppercase" style={{ color: ACCENT }}>
              Above the fold — capped at three
            </div>
            {ABOVE_FOLD.map(([what, why]) => (
              <div
                key={what}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 border-l-2"
                style={{ borderLeftColor: ACCENT }}
              >
                <div className="text-silver text-sm md:text-base font-medium">{what}</div>
                <div className="text-fog text-xs md:text-sm mt-0.5 leading-relaxed">{why}</div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-center px-6" aria-hidden="true">
            <span className="text-3xl leading-none text-ash">→</span>
          </div>
          <div className="md:hidden flex justify-center" aria-hidden="true">
            <span className="text-2xl leading-none text-ash">↓</span>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash">
              One deliberate tap away
            </div>
            <div className="font-heading tracking-tightest text-silver text-xl md:text-2xl mt-1">
              Everything else
            </div>
            <p className="text-fog text-sm mt-2 leading-relaxed">
              Maps, explore, news, events, welfare, academic tools — reachable from a
              contextual access point rather than competing for the home screen.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ILancasterPage() {
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
        slug="ilancaster"
        index="03"
        accent={ACCENT}
        title="iLancaster"
        oneLiner="Redesigning the app every Lancaster University student carries."
        meta={[
          ['Role', 'Product Designer'],
          ['Team', ['Designers', 'Product Manager', 'Team of BE & FE Engineers']],
          ['Industry', 'EdTech · Mobile App Redesign'],
          ['Company', ['ISS Innovation Hub', 'Lancaster University']],
        ]}
      >
        {/* At a glance — role, scope, outcome, up front */}
        <AtAGlance />

        {/* 0. The insider arc */}
        <Section title="I was one of the students it was failing">
          <Prose>
            I was studying at Lancaster while this redesign was being built, and I was
            one of the people who struggled with the original app. Then I got to rebuild
            the parts I struggled with — and once it shipped, I watched my own peers
            using it on campus.
          </Prose>
          <PullQuote>
            Once it was live, I could see my peers actually using and appreciating it.
          </PullQuote>
        </Section>

        {/* 1. Problem — before image top-right */}
        <Section title="Most avoided opening it">
          <Prose>
            The app contained everything a student needed. It just presented all
            of it at the same visual weight, with no hierarchy to guide attention
            and no reliable pattern for where features lived between sessions.
            iLancaster is the native mobile companion for Lancaster University.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-start mt-4">
            <div className="space-y-4 max-w-sm">
              {[
                { label: 'No information hierarchy', detail: 'Critical and secondary features competed equally for attention.' },
                { label: 'Clustered interfaces', detail: 'High information density with no visual breathing room.' },
                { label: 'Unpredictable navigation', detail: 'Users couldn\'t consistently locate features across sessions.' },
              ].map((item) => (
                <ScrollReveal key={item.label}>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} aria-hidden="true" />
                      <span className="text-silver font-medium text-sm">{item.label}</span>
                    </div>
                    <p className="text-fog text-sm leading-relaxed pl-5">{item.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <Image
              src="/assets/ilancaster/before-home-v3.png"
              alt="The original iLancaster home screen"
              width={422}
              height={418}
              sizes="400px"
              className="w-[340px] md:w-[380px] h-auto rounded-xl -mt-3"
            />
          </div>
        </Section>

        {/* 2. The failure story */}
        <Section title="Round one testing failed, and the failure was architectural" tone="sunken">
          <Prose>
            The first wireframes clarified visual structure, but users still
            couldn&apos;t reliably predict where features lived. That was an
            information architecture problem surfacing through wireframes, not a
            visual one, and it forced a mid-process navigation restructure
            before continuing.
          </Prose>
          <ScrollReveal>
            <Image
              src="/assets/ilancaster/before-compare.jpg"
              alt="Round one testing comparison"
              width={1920}
              height={805}
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-auto rounded-xl mt-6"
            />
          </ScrollReveal>
          <PullQuote>The failure was in the sitemap, not the wireframe.</PullQuote>
        </Section>

        {/* 3. Home dashboard — day + night screens on right */}
        <Section title="Home dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <ScrollReveal>
              <div className="space-y-3">
                <div className="text-[11px] tracking-[0.24em] uppercase text-ash">Design decision</div>
                <ul className="space-y-2 mt-1">
                  {[
                    'Only today’s timetable, the check-in button and active notifications sit above the fold.',
                    'Every feature was mapped against real usage frequency; secondary ones moved to contextual access points.',
                    'Show what’s needed now, and reveal complexity only when asked.',
                  ].map((p, i) => (
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
                <p className="text-fog text-sm leading-relaxed pt-1">
                  <span className="text-[11px] tracking-[0.24em] uppercase mr-2" style={{ color: ACCENT }}>Why</span>
                  The core complaint was that the most-needed features were the hardest to reach.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex gap-3 justify-end items-start">
                {[
                  { src: '/assets/ilancaster/home-day.png', label: 'Day', alt: 'Home dashboard — day mode' },
                  { src: '/assets/ilancaster/home-night.png', label: 'Night', alt: 'Home dashboard — night mode' },
                ].map((s) => (
                  <figure key={s.label} className="flex flex-col items-center">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      width={390}
                      height={844}
                      sizes="200px"
                      className="w-[160px] md:w-[190px] h-auto rounded-2xl"
                    />
                    <figcaption className="mt-1.5 text-[9px] tracking-[0.2em] uppercase text-ash">{s.label}</figcaption>
                  </figure>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className="mt-8">
            <FoldDiagram />
          </div>
        </Section>

        {/* 4. Key design decisions — alternating, raw images */}
        <Section title="Key design decisions">
          <div className="divide-y divide-white/[0.06]">
            <DecisionRow
              label="Check-in: three fewer steps"
              points={[
                'A persistent check-in card on the home screen, as the primary action.',
                'The flow dropped from five taps to two.',
              ]}
              why="It is the most time-sensitive daily action in the app — students need it between classes, quickly, on the go."
              src="/assets/ilancaster/checkin-day.png"
              alt="Check-in card on the home screen"
              imgSide="right"
            />
            <DecisionRow
              label="Raise Enquiry: guided, not open-ended"
              points={[
                'Open category selection replaced with a progressive flow that narrows the options at each step.',
                'The burden of classifying the problem moved off the student entirely.',
              ]}
              why="Students didn’t know how to categorise their own enquiries, and showing every category at once made that worse. It was the most complex flow in the project."
              src="/assets/ilancaster/enquiry-day.png"
              alt="Raise Enquiry — search-first ASK flow"
              imgSide="left"
            />
            <DecisionRow
              label="Search: scoped, after round two flagged it"
              points={[
                'One search field across the whole app, with scope chips for All, ASK, Apps and Timetable.',
                'Results stay in one list; the chip narrows it rather than sending the student somewhere else.',
                'Raise an enquiry sits inside the ASK scope, so a failed search has an exit.',
              ]}
              why="Round two testing named Search and Raise Enquiry as the remaining friction points once navigation was fixed."
              src="/assets/ilancaster/search-day.png"
              alt="Search with All, ASK, Apps and Timetable scope chips"
              imgSide="right"
            />
            <DecisionRow
              label="Notifications: prioritised, not just listed"
              points={[
                'Visual hierarchy inside the feed separates urgent alerts from informational updates.',
                'Students can triage the list at a glance between lectures.',
              ]}
              why="A flat list carries the implicit message that everything is equally important."
              src="/assets/ilancaster/notifications-night.png"
              alt="Prioritised notification feed"
              imgSide="left"
            />
            <DecisionRow
              label="Day & night designed in parallel"
              points={[
                'Both modes were treated as equal, first-class experiences from day one.',
                'Every hierarchy and contrast decision was validated in both environments as it was made.',
              ]}
              why="Night mode was not colour-inverted at the end and hoped for the best."
              src="/assets/ilancaster/home-night.png"
              alt="Home dashboard — night mode"
              imgSide="right"
            />
          </div>
        </Section>

        {/* 5. Design system — feature lineup as raw screens */}
        <Section title="One design system, held across 80+ screens" tone="sunken">
          <Prose>
            Lancaster&apos;s existing colour and style guidelines were a fixed
            constraint, so the transformation came from structure — not a
            rebrand. Typography, colour, spacing and component rules were
            defined upfront so the system stayed consistent across 80+ screens
            and two designers.
          </Prose>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
            {[
              { src: '/assets/ilancaster/feature-news.png', label: 'News' },
              { src: '/assets/ilancaster/feature-events.png', label: 'Events' },
              { src: '/assets/ilancaster/feature-welfare.png', label: 'Welfare' },
              { src: '/assets/ilancaster/feature-academic.png', label: 'Academic' },
            ].map((f) => (
              <ScrollReveal key={f.label}>
                <figure className="flex flex-col items-center">
                  <div className="relative w-[130px] md:w-[150px] rounded-2xl overflow-hidden" style={{ aspectRatio: '390/844' }}>
                    <Image
                      src={f.src}
                      alt={f.label}
                      fill
                      sizes="150px"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-2 text-[10px] tracking-[0.2em] uppercase text-ash">{f.label}</figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        {/* 6. What was cut */}
        <Section title="What was traded away, on purpose">
          <SubList
            items={[
              'Secondary features lost their home-screen presence and moved to contextual access points',
              'Open category choice in enquiries was replaced by a guided path',
              'Above-the-fold space capped at three elements, whatever else competed for it',
              'A new visual identity — the redesign stayed inside Lancaster’s existing brand',
            ]}
          />
          <Prose>
            Each cut served the same bet: fewer things visible, every visible
            thing findable.
          </Prose>
        </Section>

        {/* 6b. Walkthrough — the prototype in motion */}
        <section className="py-6 md:py-10 px-5 md:px-10">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal as="h2" className="font-heading tracking-tightest text-silver text-3xl md:text-5xl mb-8 md:mb-12">
              See it in motion
            </ScrollReveal>
            <Prose>
              The redesigned timetable and the scoped search, clicked through side by side.
            </Prose>
          </div>
          <ScrollReveal>
            <div className="mx-auto max-w-[900px] mt-8">
              <video
                src="/assets/ilancaster/walkthrough.mp4"
                poster="/assets/ilancaster/walkthrough-poster.jpg"
                aria-label="Walkthrough of the redesigned iLancaster app — the weekly timetable and the search screen with All, ASK, Apps and Timetable scope chips"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="block w-full h-auto rounded-2xl"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* 7. Try it */}
        <Section title="Try the prototype">
          <Prose>
            Click through the redesigned home dashboard and check-in flow
            in full screen.
          </Prose>
          <ScrollReveal>
            <div className="mt-4">
              <a
                href="https://www.figma.com/proto/IWEzxQ7Ft4T5yvHOUD3ax0/iLancaster-Master?node-id=1224-10316&starting-point-node-id=1224%3A10316&t=KIIay9VltCOsBZza-1"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:-translate-y-0.5"
                style={{ background: ACCENT, color: '#0b0b0a' }}
              >
                Open prototype <span aria-hidden="true">↗</span>
              </a>
            </div>
          </ScrollReveal>
        </Section>

        {/* 8. The result */}
        <Section title="The result" tone="sunken">
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {[
              {
                num: '01',
                phase: 'Navigation',
                headline: 'Students found what they needed, without thinking.',
                support:
                  'By round three of testing, navigation tested as resolved — down from the primary failure point at round one.',
              },
              {
                num: '02',
                phase: 'Check-in',
                headline: 'Three fewer steps on the most time-sensitive daily action.',
                support:
                  'Moving check-in to the home screen as a persistent primary card cut the flow from five taps to two.',
              },
              {
                num: '03',
                phase: 'System',
                headline: 'One design system across 80+ screens, day and night.',
                support:
                  'Two designers, one shared system, both modes designed in parallel. Shipped live to Lancaster students.',
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

        {/* 9. What I learned */}
        <Section title="What I learned">
          <SubList
            items={[
              'Diagnose the layer before fixing the symptom — round one’s failure looked visual but was architectural.',
              'Splitting features between two designers works when the design system comes first.',
              'Feasibility checks with engineers mid-process beat discovering problems at handoff.',
              'A brand constraint is not a ceiling — hierarchy and structure changed the experience more than a restyle would have.',
            ]}
          />
        </Section>
      </CaseStudyShell>
      </motion.div>
    </>
  );
}
