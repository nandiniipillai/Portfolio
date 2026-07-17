'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, AssetPlaceholder } from '@/components/CaseBits';
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
        title="SmartUp puts stock, sales and staff management in a retailer’s pocket."
        oneLiner="Stock, sales, and staff management in a retailer’s pocket."
        meta={[
          ['Role', 'Sole designer on a four-person team'],
          ['Team', 'PM + front-end + back-end'],
          ['Timeline', '~5 months'],
          ['Outcome', 'Built & adopted post-handoff'],
        ]}
      >
        <Section>
          <div className="flex justify-center">
            <PhoneFrame
              video="/assets/smartup/v2-onboarding-and-hompage.mp4"
              poster="/assets/smartup/onboarding-poster.jpg"
              className="!max-w-[300px]"
            />
          </div>
          <PullQuote>Retail happens on the shop floor — SmartUp’s job was to follow the people who run it.</PullQuote>
        </Section>

        <Section title="Retail happens on the shop floor, but the platform only worked at a desk">
          <Prose>
            SmartUp began as a simple observation — store teams manage operations on the move, and the web-only platform could not follow them. SmartUp is a cloud-based retail management platform for businesses from single storefronts to chains, and every stock check, sales report, or staff review required walking back to a computer. The client’s research showed this friction was losing them clients. I joined as the sole designer on a four-person team and designed the mobile product end to end over roughly five months, working entirely from the client’s research document since I had no direct user access.
          </Prose>
          <SlideFigure
            src="/assets/smartup/v2-3.jpg"
            alt="Dense desktop dashboard beside one clean mobile screen"
            caption="Before / after — desktop density compressed into a shop-floor mobile screen."
          />
        </Section>

        <Section title="Owners pay for SmartUp, but managers and floor staff use it daily — with opposite needs" tone="sunken">
          <Prose>
            Managers need oversight — sales performance, staff activity, reports. Floor staff need speed — record a sale, check stock, move on. The client initially scoped these as two separate products, a control panel for managers and a POS lite for employees. Understanding both roles shaped every decision that followed, including the biggest one.
          </Prose>
          <SlideFigure
            src="/assets/smartup/v2-2.jpg"
            alt="Value proposition map"
            caption="Value proposition map — each user role mapped to the features that serve it."
          />
        </Section>

        <Section title="The core design decision was refusing desktop parity">
          <Prose>
            The web platform exposed the full financial and logistics database — spend, budgets, supply data. I cut all of it from mobile. Someone standing in a store does not need the company’s spend breakdown; they need today’s numbers and the task in front of them. That single filter, what the shop floor needs right now, decided the information architecture and the hierarchy of every screen.
          </Prose>
          <PullQuote>
            One sharp filter — what the shop floor needs right now — decided the IA and the hierarchy of every screen.
          </PullQuote>
          <SlideFigure
            src="/assets/smartup/v2-4.jpg"
            alt="A key mobile screen with callouts"
            caption="A key mobile screen — what earned its place and what was removed."
          />
        </Section>

        <Section title="Each core job became a short, closed flow" tone="sunken">
          <Prose>
            Recording a sale, updating inventory, and onboarding each work as focused flows — open, finish the task, get out. Mobile shows current state and immediate action; historical depth stayed on desktop. Hierarchy follows urgency on the floor rather than the desktop’s menu structure.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-end">
            <PhoneFrame
              video="/assets/smartup/v2-recording-sales.mp4"
              poster="/assets/smartup/recording-sales-poster.jpg"
              className="!max-w-[260px]"
            />
            <PhoneFrame
              video="/assets/smartup/v2-mangaging-inventory.mp4"
              poster="/assets/smartup/updating-stock-poster.jpg"
              className="!max-w-[260px]"
            />
          </div>
        </Section>

        <Section title="AI helped me read the research; every screen was designed by hand">
          <Prose>
            I used AI to synthesise the client’s research document and to draft the questions I wanted asked in usability sessions. The client explicitly wanted hand-crafted design work, so no generated assets. Specs and prototypes went to one front-end and one backend developer through the product manager.
          </Prose>
        </Section>

        <Section title="We prototyped two products before committing to one" tone="sunken">
          <Prose>
            I iterated the control panel and the POS lite far enough to compare them honestly. The product manager chose to merge them into a single app, partly on development cost. With no user access, I attached my questions to every round of the client’s usability testing and fed the answers into the next iteration.
          </Prose>
          <SlideFigure
            src="/assets/smartup/v2-5.jpg"
            alt="Early screens from both concepts converging into the final unified design"
            caption="Iteration collage — control panel + POS lite converged into one unified app."
          />
        </Section>

        <Section title="What was deliberately cut">
          <SubList items={[
            'Financial and logistics dashboards — desktop-only, no shop-floor use case',
            'Historical reporting archives — mobile shows today, desktop shows trends',
            'Two specialised apps — one unified app cost less to build and maintain',
            'Feature parity as a goal — context of use decided scope instead',
          ]} />
          <AssetPlaceholder label="Component closeup — dense desktop module beside its minimal mobile counterpart" />
        </Section>

        <Section title="Test users asked when they could start using it" tone="sunken">
          <Prose>My deliverable was a validated functional prototype, and it earned its keep quickly.</Prose>
          <MetricGrid>
            <MetricCard value="Validated" label="Test users asked to adopt the app during validation sessions" />
            <MetricCard value="Funding" label="Prototype used internally in partnership and funding discussions" />
            <MetricCard value="Shipped" label="Later built and adopted by real businesses, confirmed post-handoff" />
          </MetricGrid>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <SlideFigure src="/assets/smartup/v2-6.jpg" alt="Home" caption="Home." aspect="9/16" />
            <SlideFigure src="/assets/smartup/v2-7.jpg" alt="Sales" caption="Sales." aspect="9/16" />
            <SlideFigure src="/assets/smartup/v2-8.jpg" alt="Inventory" caption="Inventory." aspect="9/16" />
          </div>
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
