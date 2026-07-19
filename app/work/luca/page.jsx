'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, HandNote, AssetPlaceholder } from '@/components/CaseBits';
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
        title="LUCA"
        oneLiner="An AI careers coach that helps Lancaster students land interviews without losing their voice."
        meta={[
          ['Role', 'Sole Product Designer'],
          ['Team', ['Product Manager', 'Front-end developer', 'Back-end developer']],
          ['Industry', 'EdTech · AI'],
          ['Company', ['ISS Innovation Hub', 'Lancaster University']],
        ]}
      >
        <Section>
          <BrowserFrame
            src="/assets/luca/dashboard-existing.png"
            alt="LUCA's home screen: 'Continue where you left off' card + checklist"
            url="luca.lancaster.ac.uk"
          />
        </Section>

        <Section title="Lancaster’s careers service was drowning, and ChatGPT was catching the overflow">
          <Prose>
            I was the sole product designer on a cross-functional team building LUCA, an AI careers platform for Lancaster University. The human careers service was chronically oversubscribed, and the university’s existing tool, Smart Statement, only tailored CVs and cover letters. Students had quietly abandoned it because ChatGPT did more, and many were outsourcing entire applications to it.
          </Prose>
          <AssetPlaceholder label="Before/After — Smart Statement's output generation vs LUCA's coaching flow" />
        </Section>

        <Section title="The careers problem surfaced in workshops that were never about careers" tone="sunken">
          <Prose>
            We ran hypothetical-scenario workshops with students and staff covering everyday situations, from exam prep to campus navigation. The careers pain surfaced loudest, and it exposed three voices pulling in different directions.
          </Prose>
          <SubList items={[
            'Students: “We don’t want to completely rely on them, but we don’t have any other means.”',
            'Careers staff: wanted help with overflow demand, not a replacement.',
            'The institution: feared shipping “just another AI” would look hypocritical next to its anti-AI academic policies.',
          ]} />
        </Section>

        <Section title="ChatGPT gave students everything, and their own voice was disappearing">
          <Prose>
            Generic AI polished applications the students learned nothing from, and staff feared fabricated experience sections. The real problem was not access to AI. It was that no tool taught skills or connected to the humans who could.
          </Prose>
          <PullQuote>
            How might we design an AI careers tool that serves students without undermining the professionals, the institution, or the student’s own voice?
          </PullQuote>
        </Section>

        <Section title="We dropped output generation, the one feature students said they wanted" tone="sunken">
          <Prose>
            Market mapping showed every competitor optimised outputs without teaching skills, and none integrated with institutional careers services. So LUCA competes on learning and integration, not output quality. You can fool a CV screen with generated content, but you cannot fool the interview.
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

        <Section title="UK GDPR and safeguarding rules became the brief, not the blockers">
          <Prose>
            No-training mode, 30-day auto-purge, and quarterly bias audits shaped almost every major decision, and treating them as the brief is what made LUCA defensible to a wary institution. The most contested feature, AI interview simulation, was won with arithmetic. Five or six interviews per student across thousands of students can never fit through a human booking system.
          </Prose>
          <SlideFigure
            src="/assets/luca/interview-populated.png"
            alt="Interview simulation with safeguards"
            caption="Interview simulation — every safeguard visible: data purge, no-training mode, human handoff."
          />
        </Section>

        <Section title="A verbal pitch and a quick prototype killed weak features fast" tone="sunken">
          <Prose>
            We started with six functional areas and nineteen features, then pruned across five to six iteration rounds with students and careers staff in the loop. I would pitch a feature verbally, turn it into a quick prototype with AI tools like Google Stitch, and watch people use it. I used AI the same way LUCA uses it with students, as an assistant that accelerates, never a replacement that generates.
          </Prose>
          <AssetPlaceholder label="Iteration collage — rapid prototypes across the 5–6 rounds, shrinking from 19 features to shipped v1" />
        </Section>

        <Section title="Usability testing exposed four trust gaps, and every fix shipped in v1">
          <Prose>Testing focused on the highest-risk interactions — the moments where students might disengage, misunderstand the AI’s role, or lose trust.</Prose>
          <SubList items={[
            'Students treated AI output as final → coach-not-writer framing plus version control that shows learning.',
            'Interview mode labels confused people → renamed to concrete use cases with descriptions.',
            'Students didn’t realise progress was saved → “Continue where you left off” became prominent on home.',
            'Students skipped the job upload and got generic feedback → the upload became a mandatory first step with tools disabled until it’s provided.',
          ]} />
          <SlideFigure
            src="/assets/luca/interview-setup.png"
            alt="Interview mode labels renamed to concrete use cases"
            caption="Interview modes — abstract labels replaced by concrete use cases after testing."
          />
        </Section>

        <Section title="Employer intelligence was the right feature at the wrong moment" tone="sunken">
          <Prose>
            We front-loaded deep employer research during the application stage, and students pushed back. When you are applying to many jobs at once, going deep on every employer is too much. As one student put it, “Once I land an interview, it is important for me to understand how they take interviews.” We re-sequenced the feature to fire after an interview lands, and the pattern became depth on demand.
          </Prose>
          <SlideFigure
            src="/assets/luca/employer-insights-v2.png"
            alt="Employer intelligence moved post-interview"
            caption="Employer intelligence — re-sequenced from application stage to post-interview-offer."
          />
        </Section>

        <Section title="The uploaded job description became the spine of the whole product">
          <Prose>
            Every feature draws from the same uploaded role. The CV optimiser and cover letter coach analyse what is working against that specific job, the checklist breaks paralysing open-ended tasks into completable steps, and four interview modes scale to the student’s confidence level with live tips. State persistence means students come back.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure src="/assets/luca/jd-upload.png" alt="Mandatory JD upload" caption="JD upload — gates every downstream tool." />
            <SlideFigure src="/assets/luca/cover-letter.png" alt="Cover letter coach" caption="Cover letter coach — analyses against the specific role." />
            <SlideFigure src="/assets/luca/practice-questions.png" alt="Practice question generator" caption="Practice questions — scale to student’s confidence." />
            <SlideFigure src="/assets/luca/interview-modes.png" alt="Interview modes" caption="Four interview modes with live tips." />
          </div>
        </Section>

        <Section title="Students shut out of appointments finally had somewhere real to go" tone="sunken">
          <Prose>Hard conversion numbers stayed with the university, but the behavioural signal was clear, and the overflow demand found a home.</Prose>
          <MetricGrid>
            <MetricCard value="Adopted" label="Students blocked from careers appointments called LUCA “resourceful”" />
            <MetricCard value="Reported" label="Careers staff reported a significant number of people benefiting" />
            <MetricCard value="Permanent" label="Testing participants said they’d keep using it" />
          </MetricGrid>
          <Prose>
            The biggest surprise was that our hardest problem was never usability. It was students either over-trusting the AI or dismissing it completely.
          </Prose>
        </Section>

        <Section title="What I learned and what comes next">
          <SubList items={[
            'Designing AI products means designing for appropriate trust. Copy, framing, feedback and feature boundaries all calibrate it.',
            'Institutional constraints are not blockers, they are the brief. GDPR and safeguarding shaped LUCA’s most defensible decisions.',
            'What a product refuses to do matters as much as what it does. LUCA coaches, it never generates, and it hands students back to humans at the moments that matter.',
            'Next time I would set team-level must-haves up front with the PM and engineers, instead of negotiating scope round by round.',
            'Next: use AI for ongoing competitive intelligence, so positioning stays ahead of a fast-moving market instead of being mapped by hand.',
          ]} />
          <PullQuote>
            Helping students make themselves a suitable candidate, instead of making the application suitable for the job.
          </PullQuote>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
