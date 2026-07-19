'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, AssetPlaceholder, HandNote } from '@/components/CaseBits';
import SlideFigure from '@/components/SlideFigure';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#E4002B';

export default function ILancasterPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="ilancaster"
        index="03"
        accent={ACCENT}
        title="iLancaster"
        oneLiner="Redesigning the app every Lancaster University student carries daily."
        meta={[
          ['Role', 'Product Designer'],
          ['Team', ['One other designer', 'Product Manager', 'Engineers']],
          ['Industry', 'EdTech · Mobile'],
          ['Company', 'Lancaster University'],
        ]}
      >
        {/* Hero — three phones fanned */}
        <section className="py-8 md:py-12 px-5 md:px-10">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <div className="relative w-full" style={{ aspectRatio: '691/361' }}>
                <Zoom>
                  <Image
                    src="/assets/ilancaster/cover-hero.png"
                    alt="Three iLancaster phones — Notifications, Home (Hello Naa), Event Details"
                    fill
                    sizes="(max-width: 768px) 100vw, 1100px"
                    className="object-contain"
                    priority
                  />
                </Zoom>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SlideFigure src="/assets/ilancaster/home-day.png" alt="iLancaster home dashboard (day mode)" caption="Day mode." aspect="9/16" />
            <SlideFigure src="/assets/ilancaster/home-night.png" alt="iLancaster home dashboard (night mode)" caption="Night mode — designed in parallel, not inverted." aspect="9/16" />
          </div>
          <div className="text-center mt-4">
            <HandNote rotate={-2}>same screen, both modes — designed as equals ✦</HandNote>
          </div>
        </Section>

        <Section title="Every Lancaster student had the app, and most avoided opening it">
          <Prose>
            The redesign began as a simple observation — the app contained everything a student needed, yet students avoided it, a pain I knew firsthand as a Lancaster student at the time. Every feature sat at the same visual weight, screens packed information with no breathing room, and nobody could predict where features lived between sessions. Complaints about navigation and the dated interface piled up until the university invested in a full redesign. I owned the navigation, home, check-in, enquiry and notification flows, splitting the feature set with one other designer alongside a product designer, engineers and a product manager.
          </Prose>
          <AssetPlaceholder label="Before — the original tile-grid home screen with three callouts: equal visual weight, information density, unpredictable navigation" aspect="16/9" />
        </Section>

        <Section title="Features were re-ranked by how often a student actually needs them" tone="sunken">
          <Prose>
            Research named navigation as the primary failure point, so the information architecture was rebuilt before any screen was designed. Daily actions like check-in and timetable were elevated, occasional tasks moved to contextual access points, and everything else sat behind one deliberate tap. One rule governed every screen — show what is needed now, reveal complexity only when asked.
          </Prose>
          <PullQuote>Show what is needed now, and reveal complexity only when asked.</PullQuote>
        </Section>

        <Section title="The home screen shows today and nothing else">
          <Prose>
            Only today’s timetable, the check-in button and active notifications appear above the fold, answering the complaint that the most-needed features were hardest to reach.
          </Prose>
          <div className="mt-6">
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-3">Check-in lost three steps because it happens between classes</div>
            <Prose>
              Check-in is the most time-sensitive daily action in the app, done on the move between lectures. Making it a persistent home-screen action removed three steps from a flow students run every day.
            </Prose>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure src="/assets/ilancaster/checkin-day.png" alt="Check-in card, day mode" caption="Persistent check-in card, day mode." aspect="9/16" />
            <SlideFigure src="/assets/ilancaster/timetable-day.png" alt="Timetable week view" caption="Today’s timetable — above the fold." aspect="9/16" />
          </div>
        </Section>

        <Section title="Raise Enquiry stopped asking students to classify their own problem" tone="sunken">
          <Prose>
            Users did not know which category their enquiry belonged to, and presenting every category at once made it worse. Open selection became a progressive guided flow that narrows options at each step, removing the categorisation burden entirely.
          </Prose>
          <div className="mt-6">
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-3">Notifications triage themselves</div>
            <Prose>
              A flat feed told students everything was equally important. Visual hierarchy now separates urgent alerts from informational updates, letting students triage at a glance between lectures.
            </Prose>
          </div>
          <SlideFigure src="/assets/ilancaster/notifications-night.png" alt="Prioritised notification feed" caption="Prioritised feed — urgency separated from informational noise." aspect="9/16" />
        </Section>

        <Section title="One design system, defined once, held across 80+ screens">
          <Prose>
            Lancaster’s existing colour and style guidelines were a fixed constraint, so the transformation came from structure, not a rebrand. Typography, colour, spacing and component rules were defined upfront and applied across 80+ screens, with day and night mode designed in parallel so every contrast decision was validated in both environments, never colour-inverted at the end. Engineers and stakeholders reviewed work mid-process to flag anything broken or hard to build.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure src="/assets/ilancaster/timetable-night.png" alt="Timetable, night mode" caption="Timetable, night mode." aspect="9/16" />
            <SlideFigure src="/assets/ilancaster/events-day.png" alt="Events tab, day mode" caption="Events tab, day mode." aspect="9/16" />
          </div>
        </Section>

        <Section title="Round one testing failed, and the failure was architectural" tone="sunken">
          <Prose>
            The first wireframes clarified visual structure, but users still could not predict where features lived. That was an information architecture problem surfacing through wireframes, not a visual one, and it forced a mid-process navigation restructure. Round two flagged enquiry and search as remaining friction; by round three, navigation logic tested as resolved.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure src="/assets/ilancaster/search-day.png" alt="Search results, day mode" caption="Search, day." aspect="9/16" />
            <SlideFigure src="/assets/ilancaster/search-night.png" alt="Search results, night mode" caption="Search, night." aspect="9/16" />
          </div>
        </Section>

        <Section title="What was traded away, on purpose">
          <SubList items={[
            'Secondary features lost their home-screen presence and moved to contextual access points',
            'Open category choice in enquiries was removed in favour of a guided path',
            'Above-the-fold space capped at three elements, whatever else competed for it',
            'A new visual identity — the redesign stayed inside Lancaster’s existing brand',
          ]} />
          <Prose>Each cut served the same bet: fewer things visible, every visible thing findable.</Prose>
        </Section>

        <Section title="Navigation went from the top student complaint to resolved" tone="sunken">
          <Prose>The redesign shipped live to Lancaster students, who responded well to the new look and feel.</Prose>
          <MetricGrid>
            <MetricCard value="3 fewer" label="Steps to check in" />
            <MetricCard value="80+" label="Screens on one consistent design system" />
            <MetricCard value="3 rounds" label="Navigation went from unclear to resolved" />
          </MetricGrid>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <SlideFigure src="/assets/ilancaster/welfare-day.png" alt="Welfare tab, day mode" caption="Welfare, day." aspect="9/16" />
            <SlideFigure src="/assets/ilancaster/academic-day.png" alt="Academic tab, day mode" caption="Academic, day." aspect="9/16" />
            <SlideFigure src="/assets/ilancaster/news-day.png" alt="News tab, day mode" caption="News, day." aspect="9/16" />
          </div>
        </Section>

        <Section title="What I learned and where it goes next">
          <SubList items={[
            'Diagnose the layer before fixing the symptom — our round-one failure looked visual but was architectural.',
            'Splitting features between two designers works when the design system comes first.',
            'Feasibility checks with engineers mid-process beat discovering problems at handoff.',
            'A brand constraint is not a ceiling — hierarchy and structure changed the experience more than a restyle would have.',
            'This project was fully manual; next time AI handles research synthesis, ideation and prototype variants.',
          ]} />
          <Prose>Next: apply the same frequency-first logic to the untouched flows, starting with search.</Prose>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
