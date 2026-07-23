'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import BriefPage from '@/components/BriefPage';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#F6C7A0';

function ZoomFig({ src, alt, caption, aspect = '16/9' }) {
  return (
    <figure className="flex flex-col">
      <div
        className="relative rounded-2xl overflow-hidden bg-carbon border border-white/[0.05]"
        style={{ aspectRatio: aspect }}
      >
        <Zoom>
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </Zoom>
      </div>
      {caption && (
        <figcaption className="mt-3 text-[11px] tracking-[0.24em] uppercase text-ash">{caption}</figcaption>
      )}
    </figure>
  );
}

// Headline + optional body, the brief's repeating beat.
function Beat({ headline, children }) {
  return (
    <ScrollReveal>
      <div className="mt-10">
        <p className={`text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug ${children ? 'mb-3' : ''}`}>
          {headline}
        </p>
        {children && (
          <div className="text-fog text-base leading-relaxed max-w-3xl space-y-3">{children}</div>
        )}
      </div>
    </ScrollReveal>
  );
}

function CardGrid({ items }) {
  return (
    <ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {items.map(([label, detail]) => (
          <div key={label} className="border-l-2 pl-4" style={{ borderColor: ACCENT }}>
            <div className="text-silver font-medium text-sm">{label}</div>
            <div className="text-fog text-sm mt-0.5">{detail}</div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

export default function WobblePage() {
  return (
    <BriefPage
      title="Wobble"
      oneLiner="An indoor play centre that gives UK children the outdoors back."
      category="Strategy & Service Design"
      accent={ACCENT}
      meta={[
        ['Role', ['Strategic Design', 'User research']],
        ['Team', ['Sage Studio', '5 Multidisciplinary designers']],
        ['Timeline', '8 weeks'],
        ['Status', 'Client adopted the proposal, seeking funding'],
      ]}
      overview={
        <>
          <p>
            The client arrived with a reference to China&rsquo;s entertainment-scale play
            centres and asked for a UK version. I owned the strategy side — secondary
            research, parent interviews, thematic synthesis, the business model canvas and
            brand positioning — while two teammates carried the spatial design and 3D, and
            two more carried branding and marketing.
          </p>
        </>
      }
    >
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-47.jpg"
          alt="Isometric cutaway of the Wobble floor plan — castle jungle gym, climbing wall, ball pool, pretend-play street"
          caption="The full Wobble floor plan — castle, climbing wall, ball pool, pretend-play street and café in one view."
        />
      </ScrollReveal>

      <Beat headline="The brief was not “build a play centre”. It was “replace what children lose outdoors”.">
        <p>
          UK children average under four hours of exercise a week against 14+ hours of screen
          time, and every alternative fails somewhere — parks work only in summer, homes
          cannot host physical play, and local soft play is overcrowded and offers either
          exercise or education, rarely both.
        </p>
        <p>
          The client wanted a UK version of China&rsquo;s Meland Club. I pushed back on
          replicating the format: the real job was to do what a park does, inside four walls.
          That reframing held every decision that followed, starting with dropping the
          imported entertainment theming entirely.
        </p>
      </Beat>

      <Beat headline="Fifteen parent interviews became binding spatial rules.">
        <p>
          I synthesised eight themes, then held the spatial team to them as constraints.
          Every research finding mapped to a visible decision — which is what earned the
          client&rsquo;s buy-in.
        </p>
      </Beat>

      <ScrollReveal>
        <div className="mt-6">
          <ZoomFig
            src="/assets/wobble/w-16.jpg"
            alt="Radial thematic analysis diagram with 8 themes around 15 participants"
            caption="Thematic analysis — eight themes from fifteen parent interviews."
          />
        </div>
      </ScrollReveal>

      <CardGrid
        items={[
          ['Noise sensitivity', 'Acoustic panelling, neutral tones, quiet sensory zones'],
          ['Hygiene anxiety', 'Cork, recycled HDPE, easy-clean surfaces'],
          ['Supervision needs', 'Café with full sightlines over every zone'],
          ['Safe risk-taking', 'Ball pool at the foot of the climbing wall'],
          ['Cost sensitivity', 'Tiered pricing and memberships'],
        ]}
      />

      <Beat headline="A child-scale UK high street replaced the imported theming.">
        <p>
          Bakery, bookstore, pharmacy — modelled on real London shopfronts at a child&rsquo;s
          height. Children role-play by imitating the adults around them, so the street stages
          the daily life they actually see rather than a borrowed fantasy.
        </p>
      </Beat>

      <ScrollReveal>
        <div className="mt-6">
          <ZoomFig
            src="/assets/wobble/w-29.jpg"
            alt="Child-scale high street render at child height"
            caption="Child-scale high street — built at a child&rsquo;s eye level."
            aspect="16/10"
          />
        </div>
      </ScrollReveal>

      <Beat headline="Then I mined the competition, built the business model, and positioned the brand.">
        <p>
          Reviews of play centres across China, Japan and the UK surfaced the recurring
          failures — understaffing, poor cleanliness, overcrowding, hidden costs — and each
          became an operational requirement, from sanitising stations to timed entry at peak
          hours. The business model canvas spread revenue across six streams. And against a
          competitor set cluttered with clip art, Wobble&rsquo;s calm pastel identity read
          instantly as a different category.
        </p>
      </Beat>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-55.jpg"
            alt="Business Model Canvas"
            caption="Business model canvas — six revenue streams."
          />
        </ScrollReveal>
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-52.jpg"
            alt="Brand positioning and identity comparison"
            caption="Brand positioning — against the cluttered competitor set."
          />
        </ScrollReveal>
      </div>

      <Beat headline="What we deliberately cut." />

      <CardGrid
        items={[
          ['Imported Chinese theming', 'Localisation beat replication'],
          ['VR and screen-based play', 'The problem was screen time, not a shortage of it'],
          ['Premium London-style pricing', 'Parents told us cost decides visit frequency'],
          ['Loud colours and dense decoration', 'Overstimulation was a top parent complaint'],
        ]}
      />

      <Beat headline="The client adopted the entire proposal.">
        <p>
          Strategy, spatial design, brand and business model, accepted in full. The client is
          now seeking funding for the first Wobble location.
        </p>
      </Beat>

      <ScrollReveal>
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/[0.07] bg-carbon">
          <video
            src="/assets/wobble/wobble-cover.mp4"
            aria-label="Animated flythrough of the Wobble play centre"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-auto"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-12">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-4">
            What this proves in digital product design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['Research synthesis', '15 interviews, 8 themes, 5 binding constraints — the same flow that turns user research into feature specs.'],
              ['Competitor mining', 'Review-triaged failure modes, designed out upstream — the same method behind a digital feature audit.'],
              ['Business model design', 'Six revenue streams across five strategic lenses — the same muscle that builds a SaaS pricing ladder or a retention loop.'],
              ['Brand positioning', 'Clean identity as differentiation in a cluttered market — the same craft that sharpens a digital product’s voice and trust signals.'],
            ].map(([label, detail]) => (
              <div key={label} className="border-l-2 pl-4" style={{ borderColor: ACCENT }}>
                <div className="text-silver font-medium text-sm">{label}</div>
                <div className="text-fog text-sm mt-0.5">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </BriefPage>
  );
}
