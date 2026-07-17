'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import OutcomeSpine from '@/components/OutcomeSpine';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, HandNote, AssetPlaceholder } from '@/components/CaseBits';
import { DashboardQueue, TokenCard, LiveStatus, Analytics } from '@/components/BaariMocks';

const ACCENT = '#34D399';

export default function BaariPage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="baari"
        index="01"
        accent={ACCENT}
        title={'Baari means "your turn" — a live queue for India’s clinics and salons.'}
        oneLiner="A live queue for India’s clinics and salons, shipped to production."
        meta={[
          ['Role', 'Co-founder · Entire product team'],
          ['Team', 'Two co-founders — product + infrastructure'],
          ['Build', 'AI coding agents as the engineering team'],
          ['Status', 'Live · getbaari.in'],
        ]}
      >
        <OutcomeSpine
          outcome="Two production products, shipped by two people — the receptionist dashboard live at getbaari.in, and a bilingual Android app in closed testing."
          problem="Front desks run on a paper register and the receptionist's memory. Existing software serves the owner who buys it, not the receptionist who uses it — and one lost booking destroys trust."
          decisions="Receptionist first in every decision. Screens written as numbered specs with acceptance criteria. Offline states treated as launch blockers. A v1 defined by what we said no to, recorded in writing."
          change="A live product validated through user testing and owner conversations, with pilot metrics defined — anchored on the number of days the paper register never comes back out."
        />

        {/* Paired hero mockups */}
        <Section>
          <div className="text-center mb-8">
            <HandNote rotate={-2}>same token, both surfaces ↘</HandNote>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardQueue />
            <TokenCard />
          </div>
        </Section>

        <Section title="It started with a four-hour wait at a doctor’s visit">
          <Prose>
            I was accompanying a family member to a doctor’s appointment and we spent nearly four hours waiting. Friends told me the same story. We jokingly said &quot;why not build a solution for this,&quot; and the joke refused to die. My co-founder took infrastructure and deployments; I took everything else. The name was sitting inside the problem the whole time — queue in Hindi is &quot;baari,&quot; and baari means &quot;your turn.&quot;
          </Prose>
        </Section>

        <Section title="The real competitor was a paper notebook that has worked for forty years" tone="sunken">
          <Prose>
            Indian clinics, salons and spas run their front desk on a paper register and the receptionist’s memory. Existing software is English-first, billing-suite heavy, and built for the owner who buys it rather than the receptionist who uses it. The register is fast, trusted, and never crashes. One vanished booking and it comes back out of the drawer. The central risk was never features. It was trust.
          </Prose>
        </Section>

        <Section title="One designer, no engineers, and a market that punishes assumptions">
          <Prose>
            I was the entire product team — research, positioning, IA, interaction design, UI copy, QA and go-to-market. There was no engineering hire at any point.
          </Prose>
          <p className="text-silver font-medium">Constraints I designed within:</p>
          <SubList items={[
            'Database transactions disabled on the free-tier stack, so atomic flows had to be redesigned around database constraints',
            'Live updates via 15-second polling, not websockets',
            'Patchy clinic wifi and power cuts, making offline states a launch blocker rather than polish',
            'Shared family phones, dual SIMs and recycled numbers, making "identity = phone number" dangerous',
            'SMS legally gated behind TRAI DLT registration, forcing a push-only launch',
          ]} />
        </Section>

        <Section title="Receptionist first, owner second, customer third" tone="sunken">
          <Prose>
            The receptionist is the linchpin — the one person holding the chaos between a doctor who cannot see the line and customers stuck inside it. Every decision was tested against her reality first: speed, zero ambiguity, works during a power cut.
          </Prose>
          <p className="text-silver font-medium">What I said no to in v1:</p>
          <SubList items={[
            'In-app payments, since Indian counters run on cash and UPI',
            'Loyalty programs, reviews and ratings',
            'WhatsApp as a booking channel',
            'A manual language switcher',
          ]} />
          <Prose>
            Every cut was recorded in writing with its reasoning, which stopped scope from being relitigated later.
          </Prose>
        </Section>

        <Section title="The decisions were mine, the labor was AI’s">
          <Prose>
            AI coding agents were my engineering team. I designed screens as numbered specs with exact layout order, verbatim UI copy and acceptance criteria, written so an agent could implement them without interpretation drift. AI also ran my market research, regulatory homework (DLT, DPDP, Play Console) and sales deck drafts. My leverage came from writing better inputs.
          </Prose>
          <PullQuote>
            When AI builds, the spec is the design. My highest-leverage artifact was the written specification, not the mockup.
          </PullQuote>
        </Section>

        <Section title="I audited my own product like an outsider and found 20+ issues" tone="sunken">
          <Prose>
            With no QA team, I walked through both surfaces from screen recordings and produced prioritised findings. The worst one: a just-created booking not appearing in My Bookings, silently breaking the app’s core loop. Another: a silent double-booking where the second booking vanished with no error. The first drafts looked rough, requirements collided, and we genuinely doubted whether people would use it. We figured it out along the way.
          </Prose>
          <AssetPlaceholder label="Audit board — P0–P3 findings triaged, trust-breaking bugs highlighted" />
        </Section>

        <Section title="Moving to the UK accidentally exposed the app’s worst bug class">
          <Prose>
            I built Baari entirely in India, then relocated to the UK during testing. Suddenly the app showed clinics opening at 4:30 AM. The exact 4-hour-30-minute gap was the fingerprint of my device re-interpreting IST times, and that one diagnosis collapsed four separate bug reports into a single root cause. Indian users on IST devices would never see it, but my move made me the product’s accidental edge-case tester.
          </Prose>
        </Section>

        <Section title="I triaged fixes by trust damage, not by effort" tone="sunken">
          <Prose>
            The release-blocking list ranked issues by one question: can this make a booking wrong, lost, or dishonest? A missing skeleton screen ranked P2. An app telling a customer with a booking tomorrow &quot;You’re next, be at the location now&quot; ranked P0. Ten must-fix items came out of that lens, each specified to acceptance-criteria level.
          </Prose>
          <LiveStatus />
        </Section>

        <Section title="Two production products shipped, zero engineering hires">
          <Prose>
            Baari is live: the receptionist dashboard at getbaari.in and a bilingual native Android app in closed testing, honest status pre-first-customer. We have validated through user testing and owner conversations, not sales yet. The pilot metrics are defined and waiting:
          </Prose>
          <MetricGrid>
            <MetricCard value="Bookings / day" label="At the first clinic" />
            <MetricCard value="% via app" label="Of bookings, vs desk and walk-in" />
            <MetricCard value="0 days" label="Days the paper register comes back out — target: zero" />
          </MetricGrid>
          <div className="text-center mt-4">
            <HandNote rotate={2}>the one that actually matters ✦</HandNote>
          </div>
          <div className="mt-8">
            <Analytics />
          </div>
        </Section>

        <Section title="What I learned and what comes next" tone="sunken">
          <Prose>
            Building something from nothing with two people taught me more than any brief could.
          </Prose>
          <SubList items={[
            'When AI builds, the spec is the design. My highest-leverage artifact was the written specification, not the mockup.',
            'Audit like an outsider. Screen recordings on real devices caught what design tools never showed.',
            'Triage by trust. "Can this lie to a user?" beats "is this ugly?" every time.',
            'Cut in writing. Recorded reasoning made the product’s restraint a feature.',
            'Next time I would involve real stakeholders at more checkpoints. Two brains figured it out along the way, but customer input earlier would have prevented failures we had to live through.',
          ]} />
          <Prose>
            Next: the first pilot clinic, a 15-minute receptionist training test, and the number that matters most — how many days the notebook stays in the drawer.
          </Prose>
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
