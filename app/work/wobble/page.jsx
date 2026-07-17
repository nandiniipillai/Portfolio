'use client';

import { motion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote, MetricCard, MetricGrid, AssetPlaceholder } from '@/components/CaseBits';
import SlideFigure from '@/components/SlideFigure';

const ACCENT = '#F6C7A0';

export default function WobblePage() {
  return (
    <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
      <CaseStudyShell
        slug="wobble"
        index="05"
        accent={ACCENT}
        title="Wobble — an indoor play centre that gives UK kids the outdoors back."
        oneLiner="An indoor play centre that gives UK kids the outdoors back."
        meta={[
          ['Role', 'Strategy, research & marketing'],
          ['Team', 'Five-person studio'],
          ['Timeline', '8 weeks'],
          ['Outcome', 'Client-adopted · in development'],
        ]}
      >
        <Section>
          <SlideFigure
            src="/assets/wobble/v2-3.jpg"
            alt="Isometric cutaway of the full Wobble floor plan"
            caption="One indoor space designed to do the developmental job of the outdoors — zoned by type of play."
          />
        </Section>

        <Section title="A founder asked us to bring China’s indoor play centres to the UK">
          <Prose>
            The client was starting a business and came to our five-person studio with a reference point: the large-scale indoor play centres of China, like Meland Club in Shenzhen. The brief was to design a revolutionary indoor soft play centre in Lancaster. I owned the strategic side of the project — user research and synthesis, business strategy, and marketing — while my teammates carried the spatial and brand execution.
          </Prose>
          <SlideFigure
            src="/assets/wobble/v2-4.jpg"
            alt="Design brief paired with Chinese play centre reference"
            caption="Starting point — the brief’s reference paired with the market study that questioned it."
          />
        </Section>

        <Section title="The real problem was lost outdoor play, not a missing venue" tone="sunken">
          <Prose>
            UK children get under 4 hours of exercise a week against 14+ hours of screen time, and the average toddler misses over 1,000 adult-spoken words a day to screens. With Met Office data pointing to ever wetter winters, parks are only reliably usable in summer. Kids were losing the developmental benefits of outdoor play, and a living room cannot replace them.
          </Prose>
          <MetricGrid>
            <MetricCard value="< 4 hrs" label="Exercise per week for UK children" />
            <MetricCard value="14+ hrs" label="Screen time per week" />
            <MetricCard value="1,000+" label="Adult-spoken words a day lost to screens" />
          </MetricGrid>
        </Section>

        <Section title="Fifteen parent interviews defined the constraints">
          <Prose>
            I ran a thematic analysis on interviews with 15 parents and synthesised eight themes. Parents wanted quieter, calmer environments over loud colours and noise, worried constantly about hygiene, and needed to supervise from a comfortable place. Competitor research across national and local players showed most venues offered either physical play or education, rarely both.
          </Prose>
          <SlideFigure
            src="/assets/wobble/v2-5.jpg"
            alt="Radial thematic analysis diagram — 8 themes around 15 participants"
            caption="Radial thematic analysis — eight themes drawn from fifteen parent interviews."
          />
        </Section>

        <Section title="Our strategy: build an indoor space that does the job of the outdoors" tone="sunken">
          <Prose>
            Instead of asking how to copy the Chinese model, I asked why we were replicating it at all. The answer became our guiding policy — recreate the benefits of park play indoors, tuned to UK research, and drop the imported entertainment-centre format. Every spatial and business decision was tested against that logic.
          </Prose>
          <PullQuote>
            Adaptation is about function, not geography — keep the benefit, rebuild the form for the local context.
          </PullQuote>
        </Section>

        <Section title="Every research theme became a design decision">
          <Prose>The synthesis translated directly into the space my teammates designed:</Prose>
          <SubList items={[
            'Noise sensitivity became acoustic panelling and dedicated quiet and sensory zones',
            'Hygiene anxiety became cork, recycled HDPE and easy-clean surfaces',
            'Supervision needs made the café a vantage point with full sightlines',
            'Safe risk-taking put the ball pool at the foot of the climbing wall',
            'Cost sensitivity shaped tiered pricing and membership models',
          ]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SlideFigure src="/assets/wobble/v2-6.jpg" alt="Climbing wall landing in the ball pool" caption="Climbing wall landing in the ball pool — safe risk-taking made spatial." />
            <SlideFigure src="/assets/wobble/v2-7.jpg" alt="Light-up musical sensory seating render" caption="Quiet + sensory zones — a direct answer to the noise theme from research." />
          </div>
        </Section>

        <Section title="A child-scale UK high street made the localisation tangible" tone="sunken">
          <Prose>
            The pretend-play zone recreates a typical UK street — bakery, bookstore, pharmacy — modelled on real London shopfronts and scaled to a child’s height. Children imitate adults when they role-play, so the street lets them act out the daily life they actually see, not a borrowed fantasy.
          </Prose>
          <SlideFigure
            src="/assets/wobble/v2-8.jpg"
            alt="London shopfront references beside the child-scale street render"
            caption="London shopfront references translated to a child-scale UK street."
          />
        </Section>

        <Section title="The business model had to work as hard as the space">
          <Prose>
            I built the full Business Model Canvas and presented it through five strategic lenses, from services to partnerships. Revenue spreads across entry fees, memberships, parties and school trips, the café, and merchandise. On the brand side, we positioned Wobble’s clean pastel identity directly against competitors’ cluttered, clip-art websites, borrowing Neumeier’s argument that a charismatic brand leaves no substitute.
          </Prose>
          <AssetPlaceholder label="Business Model Canvas — services / customers / channels / partnerships / cost + revenue" />
        </Section>

        <Section title="The client accepted the entire proposal and is building the startup" tone="sunken">
          <Prose>
            The concept moved beyond the module. The client took the full proposal forward and the venture is now in motion, currently seeking funding.
          </Prose>
          <MetricGrid>
            <MetricCard value="Adopted" label="Client accepted the complete proposal — now in development as a startup" />
            <MetricCard value="Highest grade" label="In the class for the module" />
          </MetricGrid>
        </Section>

        <Section title="What eight weeks of strategic design taught me">
          <Prose>This project settled how I think about adapting ideas across markets.</Prose>
          <SubList items={[
            'Adaptation is about function, not geography — keep the benefit, rebuild the form for the local context',
            'Research earns client buy-in when every finding maps visibly to a decision',
            'Working at the strategy step of the Design Ladder means the business case and the floor plan argue for each other',
            'Next time I would define measurable success criteria with the client up front, so impact can be tracked past handover',
          ]} />
        </Section>
      </CaseStudyShell>
    </motion.div>
  );
}
