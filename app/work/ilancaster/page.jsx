'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import OutcomeSpine from '@/components/OutcomeSpine';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, HandNote } from '@/components/CaseBits';
import { HomeNight, HomeDay, GuidedEnquiry } from '@/components/ILancasterMocks';

const ACCENT = '#E4002B';

export default function ILancasterPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="ilancaster"
        index="03"
        accent={ACCENT}
        title="I helped redesign iLancaster — the app every Lancaster University student carries daily."
        oneLiner="Redesigning the app every Lancaster University student carries daily."
        meta={[
          ['Role', 'Product designer (with one other designer)'],
          ['Team', 'Designers, engineers, product manager'],
          ['Timeline', '4–6 months'],
          ['Scope', 'Nav, home, check-in, enquiry, notifications'],
        ]}
      >
        <OutcomeSpine
          outcome="80+ screens shipped on one design system, day and night mode as equals — and check-in, the most-used daily action, three steps shorter."
          problem="The app had every feature students needed and they avoided it anyway. Everything sat at the same visual weight, and nobody could predict where features lived from one session to the next."
          decisions="Fixed navigation before designing a single screen. Stopped mid-process to rebuild a broken IA when testing exposed it. Worked strictly within Lancaster's brand — structure did the transforming."
          change="Navigation tested as resolved by round three, complaints dropped after launch, and I watched classmates actually use an app they used to avoid."
        />

        <Section>
          <div className="text-center mb-8">
            <HandNote rotate={-2}>same screen, both modes — designed as equals ✦</HandNote>
          </div>
          <div className="flex items-end justify-center gap-6 md:gap-10">
            <HomeNight />
            <HomeDay />
          </div>
        </Section>

        <Section title="I was one of the students the old app was failing">
          <Prose>
            Before I joined this project, I was an iLancaster user myself, and I struggled with it like everyone else. So when Lancaster University invested in redesigning the app, I came in with a rare advantage. I knew exactly where it hurt. I worked alongside another designer, a product designer, engineers, and a product manager over four to six months, owning the navigation, home dashboard, check-in, enquiry, and notification flows.
          </Prose>
        </Section>

        <Section title="The app had everything students needed, and they avoided it anyway" tone="sunken">
          <Prose>
            Timetables, check-in, support requests, campus tools. All of it was in there. The problem was never missing features. Every feature sat at the same visual weight, screens were dense with no breathing room, and users could not predict where anything lived from one session to the next. Students complained constantly about navigation and how dated the app felt.
          </Prose>
        </Section>

        <Section title="We fixed navigation before designing a single screen">
          <Prose>
            Research identified navigation as the primary failure point, so we resolved it first. We mapped every existing feature against actual usage frequency, elevated high-frequency actions, and moved secondary features to contextual access points. One rule guided everything. Show what is needed now, and reveal complexity only when asked.
          </Prose>
          <PullQuote>Show what is needed now, and reveal complexity only when asked.</PullQuote>
        </Section>

        <Section title="The brand had to stay, so the transformation came from structure" tone="sunken">
          <Prose>
            We worked within Lancaster’s existing colour and style guidelines. No new identity, no rebrand. Typography, colour, spacing, and component rules were defined once upfront and applied across 80+ screens, with day and night mode designed in parallel as equal first-class experiences rather than an inverted afterthought.
          </Prose>
          <div className="flex items-end justify-center gap-6 md:gap-10 mt-6">
            <HomeNight />
            <HomeDay />
          </div>
        </Section>

        <Section title="Round one testing exposed a broken IA, so we restructured mid-process">
          <Prose>
            Our first layouts clarified visual structure, but users still could not predict where features lived. The wireframes were surfacing an information architecture problem, not a visual one. We stopped, rebuilt the navigation logic, and only then continued. Round two flagged the enquiry and search flows as remaining friction, and by round three navigation tested as resolved.
          </Prose>
        </Section>

        <Section title="The home screen now shows only what a student needs right now" tone="sunken">
          <Prose>
            Today’s timetable, the check-in button, and active notifications sit above the fold. Everything else is one deliberate tap away. Check-in, the most time-sensitive daily action, moved to the home screen and lost three steps in the process.
          </Prose>
          <p className="text-silver font-medium">Check-in: 3 fewer steps, now a persistent primary action.</p>
        </Section>

        <Section title="Students could not classify their own enquiries, so we stopped asking them to">
          <Prose>
            Raise Enquiry was the most complex flow to design. Presenting all categories at once made the problem worse, so we replaced open category selection with a progressive guided flow that narrows options at every step. Notifications got the same treatment, with visual hierarchy separating urgent alerts from informational noise so students can triage at a glance between lectures.
          </Prose>
          <div className="flex justify-center mt-6">
            <GuidedEnquiry />
          </div>
        </Section>

        <Section title="Then it went live, and I watched my classmates actually use it" tone="sunken">
          <Prose>
            The clearest validation was personal. Students responded well to the look and feel, navigation complaints dropped, and I saw my peers using and appreciating an app they used to avoid.
          </Prose>
          <MetricGrid>
            <MetricCard value="3 fewer" label="Steps to check in" />
            <MetricCard value="80+" label="Screens on one consistent design system" />
            <MetricCard value="3 rounds" label="Navigation went from unclear to resolved" />
          </MetricGrid>
        </Section>

        <Section title="What I learned and what comes next">
          <Prose>
            This project taught me more about working within constraints than any greenfield project could.
          </Prose>
          <SubList items={[
            'Splitting features with another designer and syncing constantly kept 80+ screens coherent between two people.',
            'Involving engineers and stakeholders mid-process, checking whether something was broken or hard to build, beat discovering feasibility problems at handoff.',
            'When testing fails, diagnose the layer. Our round one failure looked visual but was architectural.',
            'A brand constraint is not a ceiling. Hierarchy and structure changed the experience more than any restyle would have.',
            'We did everything manually. Next time I would use AI for research synthesis, ideation, and generating prototype variants to move faster between testing rounds.',
          ]} />
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
