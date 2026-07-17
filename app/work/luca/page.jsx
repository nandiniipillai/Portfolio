'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import OutcomeSpine from '@/components/OutcomeSpine';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, HandNote } from '@/components/CaseBits';
import SlideFigure from '@/components/SlideFigure';
import BrowserFrame from '@/components/BrowserFrame';

const ACCENT = '#F0576B';

export default function LucaPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="luca"
        index="02"
        accent={ACCENT}
        title="LUCA helps Lancaster students land interviews without losing their voice to AI."
        oneLiner="An AI careers coach that helps Lancaster students land interviews without losing their voice."
        meta={[
          ['Role', 'Sole product designer'],
          ['Team', 'Cross-functional · PM + engineers'],
          ['Timeline', '~5–6 iteration rounds'],
          ['Outcome', 'Adopted by students & staff'],
        ]}
      >
        <OutcomeSpine
          outcome="Live in production with 16,000+ students — an AI careers coach that teaches skills instead of writing the application for you."
          problem="The careers service was chronically oversubscribed, and students were outsourcing whole applications to ChatGPT — polishing documents they learned nothing from, in a voice that wasn't theirs."
          decisions="Dropped output generation entirely. Made AI feedback legible with red/amber/green ratings. Made the job upload a mandatory first step. Treated GDPR and safeguarding as the brief, not blockers."
          change="19 features across 6 areas shipped in v1. Students shut out of appointments called it resourceful, staff reported real benefit, and testers said they'd keep using it."
        />

        <Section>
          <div className="text-center mb-6">
            <HandNote rotate={-2}>red = fix it, green = ship it ✎</HandNote>
          </div>
          <BrowserFrame
            src="/assets/luca/cv-optimiser.jpg"
            alt="LUCA CV optimiser with red/amber/green ratings on each section."
            url="luca.lancaster.ac.uk"
          />
        </Section>

        <Section title="Lancaster’s careers service was drowning, and ChatGPT was catching the overflow">
          <Prose>
            I was the sole product designer on a cross-functional team building LUCA, an AI careers platform for Lancaster University. The human careers service was chronically oversubscribed, and the existing tool only tailored CVs and cover letters. Students had quietly abandoned it because ChatGPT did more, and many were outsourcing entire applications to it.
          </Prose>
          <MetricGrid>
            <MetricCard value="16,000+" label="Students on the live platform" />
            <MetricCard value="19 features" label="Across 6 functional areas, shipped in v1" />
            <MetricCard value="40+" label="Research participants across 5+ co-design workshops" />
          </MetricGrid>
          <div className="mt-4">
            <MetricGrid>
              <MetricCard value="4 / 4" label="Trust gaps found in testing, all fixed before v1" />
            </MetricGrid>
          </div>
        </Section>

        <Section title="ChatGPT gave students everything, and their own voice was disappearing" tone="sunken">
          <Prose>
            Generic AI polished applications the students learned nothing from, and staff feared fabricated experience sections. The real problem was not access to AI. It was that no tool taught skills or connected to the humans who could.
          </Prose>
          <PullQuote>
            How might we design an AI careers tool that serves students without undermining the professionals, the institution, or the student’s own voice?
          </PullQuote>
        </Section>

        <Section title="We dropped output generation — the one feature students said they wanted">
          <Prose>
            Market mapping showed every competitor optimised outputs without teaching skills, and none integrated with institutional careers services. So LUCA competes on learning and integration, not output quality. You can fool a CV screen with generated content, but you cannot fool the interview.
          </Prose>
          <p className="text-silver font-medium">Three pillars shaped every decision</p>
          <SubList items={[
            'Guidance over generation — LUCA coaches, it never writes for you, and version control shows learning over time.',
            'Transparency by design — red/amber/green ratings make AI feedback legible and contestable.',
            'Institutional integration — post-interview human coaching, quarterly audits, no AI training mode.',
          ]} />
        </Section>

        <Section title="The uploaded job description is a mandatory first step" tone="sunken">
          <Prose>
            Testing showed students skipping the upload and getting generic feedback, so the job upload became a mandatory first step — the rest of the tools stay disabled until it exists. Every feature then draws from that one role: the CV optimiser, the cover-letter coach, the checklist, and four interview modes.
          </Prose>
          <SlideFigure
            src="/assets/luca/jd-upload.png"
            alt="Mandatory job-description upload gating the rest of the tools."
            caption="Upload the role first — tools stay disabled until it exists."
          />
          <SlideFigure
            src="/assets/luca/interview-modes.png"
            alt="Interview modes renamed to concrete, described use cases."
            caption="Abstract interview-mode labels renamed to concrete use cases after testing."
          />
        </Section>

        <Section title="AI interview simulation — the feature we had to win with arithmetic">
          <Prose>
            No-training mode, 30-day auto-purge and quarterly bias audits shaped almost every major decision. The most contested feature, AI interview simulation, was won with arithmetic: five or six interviews per student across thousands of students can never fit through a human booking system.
          </Prose>
          <SlideFigure
            src="/assets/luca/ai-interview.png"
            alt="LUCA AI interview simulation in progress."
            caption="Interview simulation — designed to earn trust, because it’s the one feature that had to scale past humans."
          />
        </Section>

        <Section title="Employer intelligence was the right feature at the wrong moment" tone="sunken">
          <Prose>
            We front-loaded deep employer research during the application stage, and students pushed back — going deep on every employer while applying to many jobs is too much. As one student put it, &quot;Once I land an interview, it is important for me to understand how they take interviews.&quot; We re-sequenced it to fire after an interview lands. The pattern became depth on demand.
          </Prose>
          <SlideFigure
            src="/assets/luca/employer-insights.png"
            alt="Employer insights, re-sequenced to appear after an interview is landed."
            caption="Employer intelligence moved from the application stage to post-interview."
          />
        </Section>

        <Section title="Usability testing exposed four trust gaps, and every fix shipped in v1">
          <SubList items={[
            'Students treated AI output as final → coach-not-writer framing plus version control that shows learning.',
            'Interview mode labels confused people → renamed to concrete use cases with descriptions.',
            'Students didn’t realise progress was saved → "Continue where you left off" made prominent on home.',
            'Students skipped the job upload → the upload became a mandatory first step.',
          ]} />
          <Prose>
            The biggest surprise was that our hardest problem was never usability. It was students either over-trusting the AI or dismissing it completely.
          </Prose>
        </Section>

        <Section title="What I learned and what comes next" tone="sunken">
          <SubList items={[
            'Designing AI products means designing for appropriate trust. Copy, framing, feedback and feature boundaries all calibrate it.',
            'Institutional constraints are not blockers, they are the brief. GDPR and safeguarding shaped LUCA’s most defensible decisions.',
            'What a product refuses to do matters as much as what it does. LUCA coaches, it never generates.',
            'Next time I’d set team-level must-haves up front with the PM and engineers, instead of negotiating scope round by round.',
          ]} />
          <PullQuote>
            Helping students make themselves a suitable candidate, instead of making the application suitable for the job.
          </PullQuote>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
