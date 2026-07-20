'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#E4002B';

function DecisionRow({ label, decision, why, src, alt, imgSide = 'left' }) {
  const media = (
    <ScrollReveal>
      <div className="mx-auto w-full max-w-[180px]">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          sizes="200px"
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
        <p className="text-fog text-sm md:text-base leading-relaxed">
          <span className="text-silver font-medium">Decision. </span>
          {decision}
        </p>
        <p className="text-fog text-sm md:text-base leading-relaxed">
          <span className="text-silver font-medium">Why. </span>
          {why}
        </p>
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
          ['Role', 'Product Designer'],
          ['Team', ['Designers', 'Product Manager', 'Team of BE & FE Engineers']],
          ['Industry', 'EdTech · Mobile App Redesign'],
          ['Company', ['ISS Innovation Hub', 'Lancaster University']],
        ]}
      >
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
              <div className="space-y-4">
                <div className="text-[11px] tracking-[0.24em] uppercase text-ash">Design decision</div>
                <p className="text-fog text-sm md:text-base leading-relaxed">
                  <span className="text-silver font-medium">Decision. </span>
                  Surface only today&apos;s timetable, the check-in button and active
                  notifications above the fold.
                </p>
                <p className="text-fog text-sm md:text-base leading-relaxed">
                  <span className="text-silver font-medium">Why. </span>
                  The core complaint was that the most-needed features were the
                  hardest to reach. Everything else lives one deliberate tap away.
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
        </Section>

        {/* 4. Key design decisions — alternating, raw images */}
        <Section title="Key design decisions">
          <div className="divide-y divide-white/[0.06]">
            <DecisionRow
              label="Check-in: three fewer steps"
              decision="Persistent check-in card on the home screen as the primary action."
              why="The most time-sensitive daily action in the app. Students needed it between classes, quickly, on the go."
              src="/assets/ilancaster/checkin-day.png"
              alt="Check-in card on the home screen"
              imgSide="right"
            />
            <DecisionRow
              label="Raise Enquiry: guided, not open-ended"
              decision="Replaced open category selection with a progressive guided flow that narrows options at each step."
              why="Users didn&apos;t know how to classify their own enquiries. Presenting every category at once made the problem worse."
              src="/assets/ilancaster/enquiry-day.png"
              alt="Raise Enquiry — search-first ASK flow"
              imgSide="left"
            />
            <DecisionRow
              label="Notifications: prioritised, not just listed"
              decision="Visual hierarchy inside the notification feed separates urgent alerts from informational updates."
              why="A flat notification list carries the implicit message that everything is equally important. Prioritised treatment lets students triage at a glance."
              src="/assets/ilancaster/notifications-night.png"
              alt="Prioritised notification feed"
              imgSide="right"
            />
            <DecisionRow
              label="Day & Night mode"
              decision="Both modes designed in parallel as equal, first-class experiences from day one."
              why="Designing them together meant every hierarchy and contrast decision was validated in both environments."
              src="/assets/ilancaster/home-night.png"
              alt="Home dashboard — night mode"
              imgSide="left"
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
              'A new visual identity — the redesign stayed inside Lancaster&apos;s existing brand',
            ]}
          />
          <Prose>
            Each cut served the same bet: fewer things visible, every visible
            thing findable.
          </Prose>
        </Section>

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
              'Diagnose the layer before fixing the symptom — round one&apos;s failure looked visual but was architectural.',
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
