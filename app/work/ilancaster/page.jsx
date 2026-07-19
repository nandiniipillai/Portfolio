'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import SlideFigure from '@/components/SlideFigure';
import SplitRow from '@/components/SplitRow';
import PhoneFrame from '@/components/PhoneFrame';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#E4002B';

// A single "Key design decision" row: screen on one side, decision + why on the other.
function DecisionRow({ label, decision, why, src, alt, imgSide = 'left' }) {
  const media = (
    <ScrollReveal>
      <div className="mx-auto w-full max-w-[200px]">
        <PhoneFrame src={src} alt={alt} />
      </div>
    </ScrollReveal>
  );
  const text = (
    <ScrollReveal>
      <div className="space-y-4">
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash">Design decision</div>
        <h3 className="font-heading tracking-tightest text-silver text-2xl md:text-3xl leading-tight">
          {label}
        </h3>
        <p className="text-fog text-base md:text-lg leading-relaxed">
          <span className="text-silver font-medium">Decision. </span>
          {decision}
        </p>
        <p className="text-fog text-base md:text-lg leading-relaxed">
          <span className="text-silver font-medium">Why. </span>
          {why}
        </p>
      </div>
    </ScrollReveal>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center py-10 md:py-14 border-t border-white/[0.06] first:border-t-0">
      {imgSide === 'left' ? (
        <>
          {media}
          {text}
        </>
      ) : (
        <>
          {text}
          {media}
        </>
      )}
    </div>
  );
}

export default function ILancasterPage() {
  return (
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
        oneLiner="Redesigning the app every Lancaster University student carries daily."
        meta={[
          ['Role', '2 Product Designers'],
          ['Team', ['Product Manager', 'Team of BE & FE Engineers']],
          ['Industry', 'EdTech · Mobile App Redesign'],
          ['Company', ['ISS Innovation Hub', 'Lancaster University']],
        ]}
      >
        {/* 1. Problem context — before image constrained, not full-bleed */}
        <Section title="Every Lancaster student had the app, and most avoided opening it">
          <Prose>
            The app contained everything a student needed. It just presented all
            of it at the same visual weight, with no hierarchy to guide attention
            and no reliable pattern for where features lived between sessions.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-center mt-8">
            <ScrollReveal>
              <div className="mx-auto w-full max-w-[240px]">
                <PhoneFrame src="/assets/ilancaster/before-home.jpg" alt="The original iLancaster home screen" />
              </div>
            </ScrollReveal>
            <div className="space-y-6">
              {[
                { label: 'No information hierarchy', detail: 'Critical and secondary features competed equally for attention.' },
                { label: 'Clustered interfaces', detail: 'High information density with no visual breathing room.' },
                { label: 'Unpredictable navigation', detail: 'Users couldn\'t consistently locate features across sessions.' },
              ].map((item) => (
                <ScrollReveal key={item.label}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} aria-hidden="true" />
                      <span className="text-silver font-medium text-sm">{item.label}</span>
                    </div>
                    <p className="text-fog text-sm leading-relaxed pl-5">{item.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        {/* 2. About — one-sentence framing */}
        <Section>
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">About</div>
          <Prose>
            iLancaster is the native mobile companion for Lancaster University —
            a live campus hub that puts timetable, check-in, enquiries,
            notifications, and welfare resources into one app every student
            already carries.
          </Prose>
        </Section>

        {/* 3. The failure story */}
        <Section title="Round one testing failed, and the failure was architectural" tone="sunken">
          <Prose>
            The first wireframes clarified visual structure, but users still
            couldn’t reliably predict where features lived. That was an
            information architecture problem surfacing through wireframes, not a
            visual one, and it forced a mid-process navigation restructure
            before continuing.
          </Prose>
          <SlideFigure
            src="/assets/ilancaster/wireframes-round-one.jpg"
            alt="Round-one wireframes tiled together"
            caption="Round one — the wireframes read cleanly on paper and still failed in testing."
            aspect="16/9"
          />
          <PullQuote>The failure was in the sitemap, not the wireframe.</PullQuote>
        </Section>

        {/* 4. Before / After — the visual transformation */}
        <Section tone="sunken">
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">Before &amp; after</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <SlideFigure
              src="/assets/ilancaster/before-tile-grid-v2.png"
              alt="The original iLancaster home screen — a tile grid with no hierarchy"
              caption="Before — every feature at equal weight, no clear next step."
              aspect="9/16"
            />
            <SlideFigure
              src="/assets/ilancaster/home-day.png"
              alt="The redesigned iLancaster home dashboard"
              caption="After — today's timetable, check-in, and notifications above the fold."
              aspect="9/16"
            />
          </div>
        </Section>

        {/* 5. Marquee decision — Home dashboard, pulled out as SplitRow */}
        <SplitRow
          src="/assets/ilancaster/home-day.png"
          alt="Home dashboard — day mode"
          aspect="9/16"
          imgSide="right"
          label="Design decision"
          title="Home dashboard"
        >
          <p>
            <span className="text-silver font-medium">Decision. </span>
            Surface only today&apos;s timetable, the check-in button and active
            notifications above the fold.
          </p>
          <p>
            <span className="text-silver font-medium">Why. </span>
            The core complaint was that the most-needed features were the
            hardest to reach. Everything else lives one deliberate tap away.
          </p>
        </SplitRow>

        {/* 6. Key design decisions — remaining four as DecisionRows */}
        <Section title="Key design decisions">
          <Prose>
            Every decision below is a direct response to a specific research
            finding or a failure caught in wireframe testing — not a visual
            preference.
          </Prose>
          <div className="mt-6">
            <DecisionRow
              label="Check-in: three fewer steps"
              decision="Persistent check-in card on the home screen as the primary action."
              why="The most time-sensitive daily action in the app. Students needed it between classes, quickly, on the go — removing three steps from a daily flow has a disproportionate effect."
              src="/assets/ilancaster/checkin-day.png"
              alt="Check-in card on the home screen"
              imgSide="right"
            />
            <DecisionRow
              label="Raise Enquiry: guided, not open-ended"
              decision="Replaced open category selection with a progressive guided flow that narrows options at each step."
              why="Users didn’t know how to classify their own enquiries. Presenting every category at once made the problem worse; the guided pattern removes categorisation from the user entirely."
              src="/assets/ilancaster/enquiry-day.png"
              alt="Raise Enquiry — search-first ASK flow"
              imgSide="left"
            />
            <DecisionRow
              label="Notifications: prioritised, not just listed"
              decision="Visual hierarchy inside the notification feed separates urgent alerts from informational updates."
              why="A flat notification list carries the implicit message that everything is equally important. Prioritised treatment lets students triage at a glance between lectures."
              src="/assets/ilancaster/notifications-night.png"
              alt="Prioritised notification feed"
              imgSide="right"
            />
            <DecisionRow
              label="Day & Night mode"
              decision="Both modes designed in parallel as equal, first-class experiences from day one."
              why="Designing them together meant every hierarchy and contrast decision was validated in both environments — not colour-inverted at the end and hoped for the best."
              src="/assets/ilancaster/home-night.png"
              alt="Home dashboard — night mode"
              imgSide="left"
            />
          </div>
        </Section>

        {/* 7. Design system — brand constraint */}
        <Section title="One design system, held across 80+ screens" tone="sunken">
          <Prose>
            Lancaster’s existing colour and style guidelines were a fixed
            constraint, so the transformation came from structure — not a
            rebrand. Typography, colour, spacing and component rules were
            defined upfront so the system stayed consistent across 80+ screens
            and two designers.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <ScrollReveal>
              <figure className="flex flex-col items-center">
                <div className="mx-auto w-full max-w-[200px]">
                  <PhoneFrame src="/assets/ilancaster/timetable-day.png" alt="Timetable, day mode" />
                </div>
                <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">
                  Timetable, day.
                </figcaption>
              </figure>
            </ScrollReveal>
            <ScrollReveal>
              <figure className="flex flex-col items-center">
                <div className="mx-auto w-full max-w-[200px]">
                  <PhoneFrame src="/assets/ilancaster/timetable-night.png" alt="Timetable, night mode" />
                </div>
                <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">
                  Timetable, night.
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </Section>

        {/* 8. What was cut */}
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

        {/* 9. Prototype walkthrough */}
        <Section title="Prototype walkthrough">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <ScrollReveal>
              <figure className="flex flex-col items-center">
                <PhoneFrame
                  video="/assets/ilancaster/walkthrough-home.mp4"
                  poster="/assets/ilancaster/home-day.png"
                  className="!max-w-[240px]"
                />
                <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">
                  Home dashboard
                </figcaption>
              </figure>
            </ScrollReveal>
            <ScrollReveal>
              <figure className="flex flex-col items-center">
                <PhoneFrame
                  video="/assets/ilancaster/walkthrough-checkin.mp4"
                  poster="/assets/ilancaster/checkin-day.png"
                  className="!max-w-[240px]"
                />
                <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">
                  Check-in flow
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </Section>

        {/* 10. Result — timeline of impact, matching SmartUp style */}
        <Section title="The result" tone="sunken">
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {[
              {
                num: '01',
                phase: 'Navigation',
                headline: 'The top complaint stopped being the top complaint.',
                support:
                  'By round three of testing, navigation logic tested as resolved. It had been the primary failure point at round one.',
              },
              {
                num: '02',
                phase: 'Check-in',
                headline: 'Three fewer steps on the daily action.',
                support:
                  'Moving check-in to the home screen as a persistent primary action cut the most time-sensitive flow to its minimum.',
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

        {/* 11. What I learned */}
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
  );
}
