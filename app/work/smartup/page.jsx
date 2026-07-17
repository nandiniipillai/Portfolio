'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import OutcomeSpine from '@/components/OutcomeSpine';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, HandNote } from '@/components/CaseBits';
import SlideFigure from '@/components/SlideFigure';
import PhoneFrame from '@/components/PhoneFrame';

const ACCENT = '#7C5CFC';

export default function SmartUpPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="smartup"
        index="04"
        accent={ACCENT}
        title="SmartUp puts stock, sales, and staff management in a retailer’s pocket."
        oneLiner="Stock, sales, and staff management in a retailer’s pocket."
        meta={[
          ['Role', 'Sole designer on a four-person team'],
          ['Team', 'PM + front-end and backend developers'],
          ['Timeline', '~5 months'],
          ['Outcome', 'Built & adopted post-handoff'],
        ]}
      >
        <OutcomeSpine
          outcome="A validated prototype that was used in funding conversations — then built and adopted by real businesses after handoff."
          problem="Retail happens on the shop floor, but the platform only worked at a desk. Every stock check or sales report meant walking back to a computer, and the friction was losing the client customers."
          decisions="Refused desktop parity — cut the financial database from mobile entirely. One filter decided every screen: what does the shop floor need right now? Merged two prototyped products into one, honestly compared."
          change="Test users asked to adopt the app during validation sessions, and the product manager confirmed it shipped and is used by real businesses today."
        />

        <Section>
          <div className="text-center mb-8">
            <HandNote rotate={-2}>a whole desk → a few taps ↘</HandNote>
          </div>
          <PullQuote>
            Retail happens on the shop floor — SmartUp’s job was to follow the people who run it.
          </PullQuote>
          <div className="mt-8 flex justify-center">
            <PhoneFrame
              video="/assets/smartup/onboarding.mp4"
              poster="/assets/smartup/onboarding-poster.jpg"
              className="!max-w-[260px]"
            />
          </div>
        </Section>

        <Section title="Retail happens on the shop floor, but the platform only worked at a desk">
          <Prose>
            SmartUp began as a simple observation — store teams manage operations on the move, and the web-only platform could not follow them. SmartUp is a cloud-based retail management platform for businesses from single storefronts to chains, and every stock check, sales report, or staff review required walking back to a computer. The client’s research showed this friction was losing them clients. I joined as the sole designer on a four-person team and designed the mobile product end to end over roughly five months, working entirely from the client’s research document since I had no direct user access.
          </Prose>
        </Section>

        <Section title="Owners pay for SmartUp, but managers and floor staff use it daily — with opposite needs" tone="sunken">
          <Prose>
            Managers need oversight — sales performance, staff activity, reports. Floor staff need speed — record a sale, check stock, move on. The client initially scoped these as two separate products, a control panel for managers and a POS lite for employees. Understanding both roles shaped every decision that followed, including the biggest one.
          </Prose>
        </Section>

        <Section title="The core design decision was refusing desktop parity">
          <Prose>
            The web platform exposed the full financial and logistics database — spend, budgets, supply data. I cut all of it from mobile. Someone standing in a store does not need the company’s spend breakdown; they need today’s numbers and the task in front of them. That single filter, what the shop floor needs right now, decided the information architecture and the hierarchy of every screen.
          </Prose>
          <PullQuote>
            One sharp filter — what the shop floor needs right now — decided the IA and the hierarchy of every screen.
          </PullQuote>
          <SlideFigure
            src="/assets/smartup/annotated-ui.jpg"
            alt="Annotated UI showing what earned its place and what was removed."
            caption="A key mobile screen with callouts showing what earned its place and what was removed."
          />
        </Section>

        <Section title="Each core job became a short, closed flow" tone="sunken">
          <Prose>
            Recording a sale, updating inventory, and onboarding each work as focused flows — open, finish the task, get out. Mobile shows current state and immediate action; historical depth stayed on desktop. Hierarchy follows urgency on the floor rather than the desktop’s menu structure.
          </Prose>
          <div className="mt-6 flex justify-center">
            <PhoneFrame
              video="/assets/smartup/recording-sales.mp4"
              poster="/assets/smartup/recording-sales-poster.jpg"
              className="!max-w-[260px]"
            />
          </div>
        </Section>

        <Section title="AI helped me read the research; every screen was designed by hand">
          <Prose>
            I used AI to synthesise the client’s research document and to draft the questions I wanted asked in usability sessions. The client explicitly wanted hand-crafted design work, so no generated assets. Specs and prototypes went to one front-end and one backend developer through the product manager.
          </Prose>
          <div className="mt-6 flex justify-center">
            <PhoneFrame
              video="/assets/smartup/updating-stock.mp4"
              poster="/assets/smartup/updating-stock-poster.jpg"
              className="!max-w-[260px]"
            />
          </div>
        </Section>

        <Section title="We prototyped two products before committing to one" tone="sunken">
          <Prose>
            I iterated the control panel and the POS lite far enough to compare them honestly. The product manager chose to merge them into a single app, partly on development cost. With no user access, I attached my questions to every round of the client’s usability testing and fed the answers into the next iteration.
          </Prose>
          <SlideFigure
            src="/assets/smartup/iteration-collage.jpg"
            alt="Early screens from control-panel and POS-lite concepts."
            caption="Early screens from both concepts — control panel and POS lite — converging into the final unified design."
          />
        </Section>

        <Section title="What was deliberately cut">
          <SubList items={[
            'Financial and logistics dashboards — desktop-only, no shop-floor use case',
            'Historical reporting archives — mobile shows today, desktop shows trends',
            'Two specialised apps — one unified app cost less to build and maintain',
            'Feature parity as a goal — context of use decided scope instead',
          ]} />
        </Section>

        <Section title="Test users asked when they could start using it" tone="sunken">
          <Prose>My deliverable was a validated functional prototype, and it earned its keep quickly.</Prose>
          <MetricGrid>
            <MetricCard value="Validated" label="Test users asked to adopt the app during validation sessions" />
            <MetricCard value="Funding" label="The prototype was used internally in partnership and funding discussions" />
            <MetricCard value="Shipped" label="Later built and adopted by real businesses, confirmed by the PM after handoff" />
          </MetricGrid>
          <SlideFigure
            src="/assets/smartup/closing.jpg"
            alt="SmartUp in use in a retail environment."
            caption="The app in use in a real retail environment."
          />
        </Section>

        <Section title="What I learned and what comes next">
          <SubList items={[
            'The client makes the final call; my job is making every direction rigorous enough that the choice is informed.',
            'Secondhand research works if you treat the document as a dataset and extract every signal from it.',
            'One sharp filter beats a list of principles — context of use decided more than any guideline could.',
            'Hand-crafted assets were a client constraint I would renegotiate; AI as a disposable prototyping assistant would have bought more iterations in the same time.',
          ]} />
          <Prose>
            If I picked SmartUp up again, I would instrument the app for the behavioural metrics this project never had — task completion time and error rates on the shop floor.
          </Prose>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
