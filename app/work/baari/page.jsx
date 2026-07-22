'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, HandNote } from '@/components/CaseBits';
import { DashboardQueue, TokenCard, LiveStatus, Analytics } from '@/components/BaariMocks';

const ACCENT = '#34D399';

export default function BaariPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="baari"
        index="01"
        accent={ACCENT}
        title="Baari"
        oneLiner="A live queue for India’s clinics and salons, shipped to production."
        meta={[
          ['Role', 'Founding Product Designer'],
          ['Team', ['Product Designer', 'Software Developer']],
          ['Industry', 'B2C SAAS'],
          ['Status', 'Pilot stage'],
          ['URL', <a key="url" href="https://getbaari.in" target="_blank" rel="noreferrer noopener" style={{ color: ACCENT, textDecoration: 'underline' }}>getbaari.in ↗</a>],
        ]}
      >
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardQueue />
            <TokenCard />
          </div>
          <div className="mt-4 text-center">
            <HandNote rotate={-2}>same booking, both surfaces ↘</HandNote>
          </div>
        </Section>

        <Section title="Clinics and salons still run their day on paper, a landline and WhatsApp screenshots" tone="sunken">
          <Prose>
            Baari began as a simple observation — customers routinely lose hours waiting for sequential services because the front desk has no system beyond a notebook. Around 90% of small Indian clinics, salons, spas and vets track nothing: no-shows go uncounted, quiet regulars are forgotten, and yesterday’s revenue is a guess. The alternatives are Practo-style suites that push paid listings and take per-consultation cuts, or tools like Calendly built for solo consultants rather than walk-in-heavy desks.
          </Prose>
        </Section>

        <Section title="Three roles, one booking">
          <Prose>
            The receptionist runs the product all day. The owner signs up, pays, and reads the reports. The customer just wants to know when their turn comes. Each role got its own surface and language, but every booking is one shared record on one backend — created at the desk or in the app, visible everywhere within a 15-second poll.
          </Prose>
        </Section>

        <Section title="The queue board puts the receptionist’s whole day on one screen" tone="sunken">
          <Prose>
            The core design decision was refusing navigation. Waiting and in-consult panels sit side by side with live timers, a stats bar on top, and the three actions that cover a front desk — walk-in, new booking, close day — always visible. A walk-in takes one tap and joins the same queue as app bookings.
          </Prose>
          <div className="mt-6">
            <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-3">Language that matches the business</div>
            <Prose>
              A dental receptionist sees “in chair,” a clinic sees “in consult,” a spa sees “in session.” Labels adapt to business type instead of forcing generic software vocabulary onto the desk.
            </Prose>
          </div>
          <div className="mt-8">
            <DashboardQueue />
          </div>
        </Section>

        <Section title="For customers, every screen answers one question — when is my turn?">
          <Prose>
            The token is the app’s core object, rendered as the biggest text on screen. Live status is gated into four states so the app never lies: a calm “your booking is tomorrow” for future bookings, position and rough wait for today, the loudest treatment only when three tokens remain, and a quiet close after. An active booking pins to the opening screen, so the answer costs zero taps.
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <TokenCard />
            <LiveStatus />
          </div>
        </Section>

        <Section title="I designed in specifications, and AI agents built both codebases" tone="sunken">
          <Prose>
            There was no engineering team. Screens were defined as numbered specs with exact layout order, verbatim UI copy, state gates and acceptance criteria, then implemented by AI coding agents. The UI was built against theme tokens — one primary color, one radius, one type scale — so the eventual rebrand is a token swap, not a repaint.
          </Prose>
          <PullQuote>
            When AI builds, the spec is the design. My highest-leverage artifact was the written specification, not the mockup.
          </PullQuote>
        </Section>

        <Section title="Screen-recording audits surfaced 20+ issues, ranked by trust damage">
          <Prose>
            Acting as my own QA, I walked both surfaces from recordings and triaged every finding by one question — can this make a booking wrong, lost, or dishonest? A vanished booking and a silent double-booking ranked P0; a missing skeleton screen ranked P2. Ten must-fix items came out, each specified to acceptance criteria, including a timezone bug where one diagnosis collapsed four reports into a single root cause.
          </Prose>
        </Section>

        <Section title="What I traded away, on purpose" tone="sunken">
          <SubList items={[
            'Payment integration, until real signups show which market converts',
            'WhatsApp reminders and broadcasts, pending a Meta BSP contract',
            'Multi-location support, deferred until chains ask',
            'Reviews, loyalty and granular notification settings',
          ]} />
          <Prose>
            Every cut is recorded with its reasoning, which kept scope from being relitigated and made the product’s restraint deliberate.
          </Prose>
        </Section>

        <Section title="Live in production with a real clinic on the queue">
          <Prose>
            Baari runs at getbaari.in on Railway with Cloudflare serving 90% of anonymous traffic from the edge, on infrastructure under $50/month. Billing works end-to-end: Free, Growth (₹999/mo) and Pro (₹1,999/mo) tiers with a 60-day Pro trial, no card required, and automatic INR/USD regional pricing. One real clinic runs live bookings; the Android app is in internal testing.
          </Prose>
          <MetricGrid>
            <MetricCard value="1 pilot" label="Live clinic on the queue with real bookings" />
            <MetricCard value="3 tiers" label="Billing live with feature gates and quotas" />
            <MetricCard value="< $50/mo" label="Total infrastructure across web + edge" />
          </MetricGrid>
          <div className="text-center mt-4">
            <HandNote rotate={2}>the number the notebook decides ✦</HandNote>
          </div>
          <div className="mt-8">
            <Analytics />
          </div>
        </Section>

        <Section title="What I learned and where it goes next" tone="sunken">
          <SubList items={[
            'When AI builds, the spec is the design. The written specification was my highest-leverage artifact, not the mockup.',
            'Audit like an outsider. Screen recordings on real devices caught what design tools never showed.',
            'Triage by trust. “Can this lie to a user?” outranks “is this ugly?”',
            'Involve real customers at more checkpoints — earlier input would have prevented failures we had to live through.',
          ]} />
          <Prose>
            Next: outreach to 20–30 clinics and salons, 30–50 trial workspaces, Play Store release, and payments for whichever market shows real intent.
          </Prose>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
