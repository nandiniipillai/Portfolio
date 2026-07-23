'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import SlideFigure from '@/components/SlideFigure';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#F0576B';

// Light browser chrome — LUCA is a light UI, so the frame matches the product.
// aspect is set per shot so tall captures are not cropped to a generic 16:10.
function BrowserShot({ src, alt, url, aspect = '16/10', pos = 'top', priority = false }) {
  return (
    <div className="w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.1] bg-white shadow-2xl">
      <div className="flex items-center gap-1 px-2.5 py-2 bg-gray-100 border-b border-gray-200">
        <span className="flex gap-1" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
        </span>
        {url && (
          <span className="mx-auto text-[10px] text-gray-500 bg-white/60 rounded-full px-2 py-0.5">
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
            className="object-cover"
            style={{ objectPosition: pos }}
          />
        </Zoom>
      </div>
    </div>
  );
}

// One design decision: product shot on one side, Decision + Why on the other.
function DecisionRow({ label, decision, why, imgSide = 'left', media }) {
  const mediaCol = <ScrollReveal>{media}</ScrollReveal>;
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

const RESULTS = [
  {
    num: '01',
    phase: 'Adopted',
    headline: 'Students blocked from careers appointments started using LUCA and called it “resourceful”.',
    support:
      'Hard conversion numbers stayed with the university, but the behavioural signal was clear.',
  },
  {
    num: '02',
    phase: 'Reported',
    headline: 'Careers staff reported “a significant number of people getting benefits out of it”.',
    support:
      'They wanted help with overflow demand, not a replacement, and that is what shipped.',
  },
  {
    num: '03',
    phase: 'Permanent',
    headline: 'Testing participants said they would use it as a permanent solution.',
    support: 'The overflow demand found a home.',
  },
];

export default function LucaPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="luca"
        index="02"
        accent={ACCENT}
        title="LUCA"
        oneLiner="An AI careers coach for Lancaster University students."
        meta={[
          ['Role', 'Sole Product Designer'],
          ['Team', ['Product Manager', 'Front-end developer', 'Back-end developer']],
          ['Industry', ['EdTech', 'SAAS', 'AI']],
          ['Company', ['ISS Innovation Hub', 'Lancaster University']],
        ]}
      >
        {/* 1. Hero — the live product */}
        <section className="py-8 md:py-12 px-5 md:px-10">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <BrowserShot
                src="/assets/luca/landing-existing-user.png"
                alt="LUCA application dashboard — CV optimiser, cover letter coach and interview practice for one uploaded role"
                url="luca.lancaster.ac.uk"
                aspect="10/7"
                priority
              />
              <p className="mt-3 text-[11px] tracking-[0.24em] uppercase text-ash text-center">
                One uploaded role, and every tool hanging off it
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 2. Problem */}
        <Section title="Lancaster’s careers service was drowning, and ChatGPT was catching the overflow">
          <Prose>
            The human careers service was chronically oversubscribed, and the university’s
            existing tool, Smart Statement, only tailored CVs and cover letters. Students had
            quietly abandoned it because ChatGPT did more, and many were outsourcing entire
            applications to it.
          </Prose>
          <PullQuote>
            How might we design an AI careers tool that serves students without
            undermining the professionals, the institution, or the student’s own voice?
          </PullQuote>
        </Section>

        {/* 3. The failure story — Smart Statement */}
        <Section title="Before LUCA, students had Smart Statement, and most had stopped using it" tone="sunken">
          <Prose>
            Lancaster’s existing careers tool only tailored CVs and cover letters with basic
            templates. The interface felt like a university portal: dense forms, no guidance,
            no coaching. You uploaded a document, waited, and got a templated response.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure
              src="/assets/luca/smart-statement-1.png"
              alt="Smart Statement, the old Lancaster careers tool"
              aspect="14/9"
              caption="Smart Statement — the tool students abandoned for ChatGPT."
            />
            <SlideFigure
              src="/assets/luca/smart-statement-2.png"
              alt="Smart Statement output generation screen"
              aspect="14/9"
              caption="Template-based output — no coaching, no skills built."
            />
          </div>
        </Section>

        {/* 4. Three-way tension */}
        <Section title="The careers problem surfaced in workshops that were never about careers">
          <Prose>
            We ran hypothetical-scenario workshops with students and staff covering everyday
            situations, from exam prep to campus navigation. The careers pain surfaced loudest,
            and it exposed three voices pulling in different directions.
          </Prose>
          <SubList items={[
            'Students: “We don’t want to completely rely on them, but we don’t have any other means.”',
            'Careers staff: wanted help with overflow demand, not a replacement.',
            'The institution: feared shipping “just another AI” would look hypocritical next to its anti-AI academic policies.',
          ]} />
        </Section>

        {/* 5. The bet */}
        <Section title="We dropped output generation, the one feature students said they wanted" tone="sunken">
          <Prose>
            Market mapping showed every competitor optimised outputs without teaching skills,
            and none integrated with institutional careers services. So LUCA competes on
            learning and integration, not output quality. You can fool a CV screen with
            generated content, but you cannot fool the interview.
          </Prose>
          <p className="text-silver font-medium mt-6">Three pillars shaped every decision</p>
          <SubList items={[
            'Guidance over generation — LUCA coaches, it never writes for you, and version control shows learning over time.',
            'Transparency by design — red, amber and green ratings make AI feedback legible and contestable.',
            'Institutional integration — post-interview human coaching, quarterly audits, no AI training mode.',
          ]} />
        </Section>

        {/* 6. Constraints as the brief */}
        <Section title="UK GDPR and safeguarding became the brief, not the blockers">
          <Prose>
            No-training mode, 30-day auto-purge, and quarterly bias audits shaped almost every
            major decision, and treating them as the brief is what made LUCA defensible to a
            wary institution. The most contested feature, AI interview simulation, was won with
            arithmetic. Five or six interviews per student across thousands of students can
            never fit through a human booking system.
          </Prose>
          <SlideFigure
            src="/assets/luca/interview-populated.png"
            alt="Interview simulation with safeguards visible"
            aspect="16/9"
            caption="Interview simulation — the feature the arithmetic won."
          />
        </Section>

        {/* 7. Key design decisions */}
        <Section title="Key design decisions" tone="sunken">
          <Prose>
            Every decision below answers the same question: how does the product help a student
            build the skill, rather than hand them the output?
          </Prose>
          <div className="mt-6">
            <DecisionRow
              label="The uploaded job description became the spine"
              decision="Every feature draws from the same uploaded role. The CV optimiser and cover letter coach analyse what is working against that specific job, and four interview modes scale to the student’s confidence level with live tips."
              why="Students skipped the job upload and got generic feedback, so the upload became a mandatory first step with tools disabled until it is provided. State persistence means students come back."
              imgSide="left"
              media={
                <BrowserShot
                  src="/assets/luca/dashboard-existing.png"
                  alt="LUCA home — job description paste gate with Continue disabled, and Continue where you left off cards"
                  aspect="10/7"
                />
              }
            />
            <DecisionRow
              label="A checklist instead of a wall of feedback"
              decision="The checklist breaks paralysing open-ended tasks into completable steps, tracked as a percentage and a task count rather than a page of AI prose."
              why="Students treated AI output as final, so we introduced coach-not-writer framing plus version control that shows learning over time."
              imgSide="right"
              media={
                <div className="mx-auto w-full max-w-[420px]">
                  <BrowserShot
                    src="/assets/luca/cv-checklist.png"
                    alt="CV optimiser checklist — 40% complete, 5 of 27 tasks, with a skill expanded"
                    aspect="41/50"
                  />
                </div>
              }
            />
            <DecisionRow
              label="Interview modes named for what students actually do"
              decision="Abstract mode labels were renamed to concrete use cases, each with a description: Real, Training, and graduate video submission practice."
              why="Interview mode labels confused people, and a student picking a practice mode should not have to decode product vocabulary first."
              imgSide="left"
              media={
                <BrowserShot
                  src="/assets/luca/interview-setup.png"
                  alt="Interview type selection — Real, Training, and graduate video submission practice"
                  aspect="16/9"
                />
              }
            />
            <DecisionRow
              label="Employer intelligence fires after the interview lands"
              decision="We front-loaded deep employer research during the application stage, and students pushed back. We re-sequenced the feature to fire after an interview lands, and the pattern became depth on demand."
              why="When you are applying to many jobs at once, going deep on every employer is too much. As one student put it, “Once I land an interview, it is important for me to understand how they take interviews.”"
              imgSide="right"
              media={
                <BrowserShot
                  src="/assets/luca/employer-insights-v2.png"
                  alt="Employer insights — company profile, role-specific advice, salary benchmarks and location"
                  aspect="9/8"
                />
              }
            />
          </div>
        </Section>

        {/* 8. How it was built */}
        <Section title="A verbal pitch and a quick prototype killed weak features fast">
          <Prose>
            We started with six functional areas and nineteen features, then pruned across five
            to six iteration rounds with students and careers staff in the loop. I would pitch a
            feature verbally, turn it into a quick prototype with AI tools like Google Stitch,
            and watch people use it. I used AI the same way LUCA uses it with students, as an
            assistant that accelerates, never a replacement that generates.
          </Prose>
          <PullQuote>
            Helping students make themselves a suitable candidate, instead of making the
            application suitable for the job.
          </PullQuote>
        </Section>

        {/* 9. Deliberate cuts */}
        <Section title="What I traded away, on purpose" tone="sunken">
          <SubList items={[
            'Output generation, the one feature students said they wanted',
            'Nineteen features down to the shipped v1, pruned across five to six iteration rounds',
            'Deep employer research at the application stage, re-sequenced to fire after an interview lands',
            'An AI training mode, ruled out by the institutional integration pillar',
          ]} />
          <Prose>
            LUCA taught me that the most important design decisions were about where the product
            stops.
          </Prose>
        </Section>

        {/* 10. Walkthrough — capped at the recording's native 1350px so it never upscales */}
        <section className="py-6 md:py-10 px-5 md:px-10">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal as="h2" className="font-heading tracking-tightest text-silver text-3xl md:text-5xl mb-8 md:mb-12">
              See LUCA in motion
            </ScrollReveal>
            <Prose>
              The full flow, from job description upload through CV optimisation, cover letter
              coaching, and interview practice.
            </Prose>
          </div>
          <ScrollReveal>
            <div className="mx-auto max-w-[1350px] mt-8">
              {/* Dark chrome on a black stage: the recording is pillarboxed with pure #000
                  on some segments, so a black stage absorbs the bars instead of showing
                  them as bands against a white frame. */}
              <div className="w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.14] bg-black shadow-2xl">
                <div className="flex items-center gap-1 px-2.5 py-2 bg-[#1a1a1e] border-b border-white/[0.06]">
                  <span className="flex gap-1" aria-hidden="true">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
                  </span>
                  <span className="mx-auto text-[10px] text-fog bg-white/[0.06] rounded-full px-2 py-0.5">
                    luca.lancaster.ac.uk
                  </span>
                </div>
                <video
                  src="/assets/luca/walkthrough.mp4"
                  poster="/assets/luca/walkthrough-poster.jpg"
                  aria-label="Walkthrough of LUCA, from job description upload through CV optimisation, cover letter coaching and interview feedback"
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

        {/* 11. The result */}
        <Section title="Students shut out of appointments finally had somewhere real to go" tone="sunken">
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {RESULTS.map((row) => (
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
          <PullQuote>
            The biggest surprise: our hardest problem was never usability. It was students
            either over-trusting the AI or dismissing it completely.
          </PullQuote>
        </Section>

        {/* 12. What I learned */}
        <Section title="What I learned">
          <SubList items={[
            'Designing AI products means designing for appropriate trust. Copy, framing, feedback and feature boundaries all calibrate it.',
            'Institutional constraints are not blockers, they are the brief. GDPR and safeguarding shaped LUCA’s most defensible decisions.',
            'What a product refuses to do matters as much as what it does. LUCA coaches, it never generates, and it hands students back to humans at the moments that matter.',
            'Next time: set team-level must-haves up front with the PM and engineers, instead of negotiating scope round by round.',
          ]} />
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
