'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid } from '@/components/CaseBits';
import SlideFigure from '@/components/SlideFigure';

const ACCENT = '#F0576B';

export default function LucaPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="luca"
        index="02"
        accent={ACCENT}
        title="LUCA"
        oneLiner="An AI careers coach that helps Lancaster students land interviews without losing their voice."
        meta={[
          ['Role', 'Sole Product Designer'],
          ['Team', ['Product Manager', 'Front-end developer', 'Back-end developer']],
          ['Industry', 'EdTech · AI'],
          ['Company', ['ISS Innovation Hub', 'Lancaster University']],
        ]}
      >
        {/* 1. Problem */}
        <Section title="ChatGPT was catching the overflow, and students were losing their voice">
          <Prose>
            I was the sole product designer on a cross-functional team building LUCA,
            an AI careers platform for Lancaster University. The human careers service
            was chronically oversubscribed, and the university&apos;s existing tool, Smart
            Statement, only tailored CVs and cover letters. Students had quietly
            abandoned it because ChatGPT did more — and many were outsourcing entire
            applications to it. Generic AI polished applications the students learned
            nothing from, and staff feared fabricated experience sections.
          </Prose>
          <PullQuote>
            How might we design an AI careers tool that serves students without
            undermining the professionals, the institution, or the student&apos;s own voice?
          </PullQuote>
          <SlideFigure
            src="/assets/luca/dashboard-existing.png"
            alt="LUCA's main dashboard for existing users"
            caption="LUCA&apos;s coach-not-writer interface — every feature draws from the uploaded job description."
          />
        </Section>

        {/* 2. Before LUCA — Smart Statement */}
        <Section title="Before LUCA, students had Smart Statement — and most had stopped using it" tone="sunken">
          <Prose>
            Lancaster&apos;s existing careers tool only tailored CVs and cover letters with
            basic templates. ChatGPT did more, so students quietly abandoned it. The
            interface felt like a university portal — dense forms, no guidance, no
            coaching. You uploaded a document, waited, and got a templated response.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure
              src="/assets/luca/smart-statement-1.png"
              alt="Smart Statement — the old Lancaster careers tool"
              caption="Smart Statement — the tool students abandoned for ChatGPT."
            />
            <SlideFigure
              src="/assets/luca/smart-statement-2.png"
              alt="Smart Statement output generation screen"
              caption="Template-based output — no coaching, no skills built."
            />
          </div>
        </Section>

        {/* 3. Three-way tension */}
        <Section title="The careers problem surfaced in workshops that were never about careers" tone="sunken">
          <Prose>
            We ran hypothetical-scenario workshops with students and staff covering
            everyday situations, from exam prep to campus navigation. The careers pain
            surfaced loudest — three voices pulling in different directions.
          </Prose>
          <SubList items={[
            'Students: “We don&apos;t want to completely rely on them, but we don&apos;t have any other means.”',
            'Careers staff: wanted help with overflow demand, not a replacement.',
            'The institution: feared shipping “just another AI” would look hypocritical next to its anti-AI academic policies.',
          ]} />
        </Section>

        {/* 3. The bet — dropping output generation + three pillars */}
        <Section title="We dropped output generation, the one feature students said they wanted">
          <Prose>
            Market mapping showed every competitor optimised outputs without
            teaching skills, and none integrated with institutional careers services.
            LUCA competes on learning and integration, not output quality. You can
            fool a CV screen with generated content, but you cannot fool the interview.
          </Prose>
          <p className="text-silver font-medium mt-6">Three pillars shaped every decision</p>
          <SubList items={[
            'Guidance over generation — LUCA coaches, it never writes for you, and version control shows learning over time.',
            'Transparency by design — red/amber/green ratings make AI feedback legible and contestable.',
            'Institutional integration — post-interview human coaching, quarterly audits, no AI training mode.',
          ]} />
          <SlideFigure
            src="/assets/luca/cv-optimiser-2.png"
            alt="RAG rating component on a CV section"
            caption="Red / amber / green ratings — legible, contestable feedback beats walls of text."
          />
        </Section>

        {/* 4. GDPR as brief + interview simulation */}
        <Section title="UK GDPR and safeguarding became the brief, not the blockers" tone="sunken">
          <Prose>
            No-training mode, 30-day auto-purge, and quarterly bias audits shaped
            almost every major decision. Treating them as the brief made LUCA
            defensible to a wary institution. The most contested feature, AI interview
            simulation, was won with arithmetic — five or six interviews per student
            across thousands of students can never fit through a human booking system.
          </Prose>
          <SlideFigure
            src="/assets/luca/interview-populated.png"
            alt="Interview simulation with safeguards"
            caption="Interview simulation — every safeguard visible: data purge, no-training mode, human handoff."
          />
        </Section>

        {/* 5. Rapid iteration */}
        <Section title="A verbal pitch and a quick prototype killed weak features fast">
          <Prose>
            We started with six functional areas and nineteen features, then pruned
            across five to six iteration rounds with students and careers staff in the
            loop. I pitched features verbally, turned them into quick prototypes with
            AI tools like Google Stitch, and watched people use them. I used AI the
            same way LUCA uses it with students — as an assistant that accelerates,
            never a replacement that generates.
          </Prose>
        </Section>

        {/* 6. Trust gaps + employer intelligence + product spine — consolidated */}
        <Section title="Usability testing exposed four trust gaps, and every fix shipped" tone="sunken">
          <Prose>
            Testing focused on the highest-risk interactions — the moments where
            students might disengage, misunderstand the AI&apos;s role, or lose trust.
          </Prose>
          <SubList items={[
            'Students treated AI output as final → coach-not-writer framing plus version control that shows learning.',
            'Interview mode labels confused people → renamed to concrete use cases with descriptions.',
            'Students didn&apos;t realise progress was saved → “Continue where you left off” became prominent on home.',
            'Students skipped the job upload and got generic feedback → the upload became a mandatory first step.',
          ]} />
          <SlideFigure
            src="/assets/luca/interview-setup.png"
            alt="Interview mode labels renamed to concrete use cases"
            caption="Interview modes — abstract labels replaced by concrete use cases after testing."
          />
        </Section>

        <Section title="The uploaded job description became the spine, and employer intelligence found its moment">
          <Prose>
            Every feature draws from the same uploaded role. The CV optimiser and
            cover letter coach analyse against that specific job, the checklist
            breaks open-ended tasks into completable steps, and four interview modes
            scale to the student&apos;s confidence level. We front-loaded employer
            research during application — students pushed back, so we re-sequenced
            it to fire after an interview lands. Depth on demand.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure src="/assets/luca/jd-upload.png" alt="Mandatory JD upload" caption="JD upload — gates every downstream tool." />
            <SlideFigure src="/assets/luca/cover-letter.png" alt="Cover letter coach" caption="Cover letter coach — analyses against the specific role." />
            <SlideFigure src="/assets/luca/practice-questions.png" alt="Practice question generator" caption="Practice questions — scale to student&apos;s confidence." />
            <SlideFigure src="/assets/luca/interview-modes.png" alt="Interview modes" caption="Four interview modes with live tips." />
          </div>
        </Section>

        {/* 7. Walkthrough */}
        <Section title="See LUCA in motion">
          <Prose>
            Watch the full flow — from job description upload through CV optimisation,
            cover letter coaching, and interview practice.
          </Prose>
          <div className="mt-4">
            <div className="w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden border border-white/[0.08] shadow-lg">
              <video
                src="/assets/luca/walkthrough.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Section>

        {/* 8. Result */}
        <Section title="Students shut out of appointments finally had somewhere real to go" tone="sunken">
          <Prose>
            Hard conversion numbers stayed with the university, but the behavioural
            signal was clear, and the overflow demand found a home.
          </Prose>
          <MetricGrid>
            <MetricCard value="Adopted" label="Students blocked from careers appointments called LUCA “resourceful”" />
            <MetricCard value="Reported" label="Careers staff reported a significant number of people benefiting" />
            <MetricCard value="Permanent" label="Testing participants said they&apos;d keep using it" />
          </MetricGrid>
          <PullQuote>
            The biggest surprise: our hardest problem was never usability. It was
            students either over-trusting the AI or dismissing it completely.
          </PullQuote>
        </Section>

        {/* 9. What I learned */}
        <Section title="What I learned">
          <SubList items={[
            'Designing AI products means designing for appropriate trust. Copy, framing, feedback and feature boundaries all calibrate it.',
            'Institutional constraints are not blockers, they are the brief. GDPR and safeguarding shaped LUCA&apos;s most defensible decisions.',
            'What a product refuses to do matters as much as what it does. LUCA coaches, it never generates, and hands students back to humans at the moments that matter.',
            'Next time: set team-level must-haves up front instead of negotiating scope round by round. Use AI for ongoing competitive intelligence so positioning stays ahead.',
          ]} />
          <PullQuote>
            Helping students make themselves a suitable candidate, instead of making
            the application suitable for the job.
          </PullQuote>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
