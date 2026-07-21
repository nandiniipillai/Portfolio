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

export default function WobblePage() {
  return (
    <BriefPage
      title="Wobble"
      oneLiner="Brings the benefits of outdoor play indoors for UK children — Designing for a business"
      category="Strategy & Service Design"
      accent={ACCENT}
      meta={[
        ['Role', ['Strategic Design', 'User research & Analysis', 'Marketing']],
        ['Team', ['Sage Studio', '5 Multidisciplinary designers']],
        ['Timeline', '8 weeks'],
        ['Status', 'Client adopted the proposal, seeking funding'],
      ]}
      overview={
        <>
          <p>
            The client arrived with a reference to China&rsquo;s
            entertainment-scale play centres and asked for a UK version. We had
            barely direct competitors, little to no awareness among users, and a
            whole lot of limitations when designing for kids.
          </p>
          <p>
            The strategic pivot was to stop asking &ldquo;how do we copy?&rdquo;
            and start asking &ldquo;how do we do the developmental job of a park
            inside four walls?&rdquo;
          </p>
          <p>
            I owned the strategy side — secondary research, parent interviews,
            thematic synthesis, the business model canvas, and brand positioning
            — while two teammates carried the spatial design and 3D, and the
            other two carried branding and marketing material.
          </p>
        </>
      }
    >
      {/* Hero isometric */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-47.jpg"
          alt="Isometric cutaway of the Wobble floor plan — castle jungle gym, climbing wall, ball pool, pretend-play street"
          caption="The full Wobble floor plan — castle, climbing wall, ball pool, pretend-play street and café in one view."
        />
      </ScrollReveal>

      {/* The problem */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">The problem</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          UK kids average under 4 hours of exercise a week against 14+ hours
          of screen time. Every alternative fails somewhere: parks work only
          in summer, homes cannot host physical play, and local soft play
          centres are overcrowded, hard to keep clean, and offer either exercise
          or education — rarely both.
        </p>
      </ScrollReveal>

      {/* The founding decision */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">The founding decision</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          The client wanted a UK version of centres like Shenzhen&apos;s Meland
          Club. I pushed back on replicating the format — the real job was
          replacing what UK children lose outdoors. That became the guiding
          rule: the space must do the job of a park. We dropped the imported
          entertainment theming entirely.
        </p>
      </ScrollReveal>

      {/* Research → spatial rules */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">Fifteen parent interviews became binding spatial rules</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl mb-4">
          I ran the interviews and synthesised eight themes, then held the
          spatial team to them as constraints:
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-16.jpg"
          alt="Radial thematic analysis diagram with 8 themes around 15 participants"
          caption="Thematic analysis — eight themes from fifteen parent interviews."
        />
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            ['Noise sensitivity', 'Acoustic panelling, neutral tones, quiet sensory zones'],
            ['Hygiene anxiety', 'Cork, recycled HDPE, easy-clean surfaces'],
            ['Supervision needs', 'Café with full sightlines over every zone'],
            ['Safe risk-taking', 'Ball pool at the foot of the climbing wall'],
            ['Cost sensitivity', 'Tiered pricing and memberships'],
          ].map(([label, detail]) => (
            <div key={label} className="border-l-2 pl-4" style={{ borderColor: ACCENT }}>
              <div className="text-silver font-medium text-sm">{label}</div>
              <div className="text-fog text-sm mt-0.5">{detail}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Zoned plan + annotated factors */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">Graduated zones and circulation routes</div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-21.jpg"
            alt="Zoned isometric plan with colour-coded circulation routes for kids, parents and babies"
            caption="Zoned plan — separate routes for kids 3-10, parents, and babies."
          />
        </ScrollReveal>
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-22.jpg"
            alt="Annotated isometric with callouts for acoustic panels, child-scale openings, visibility"
            caption="Design constraints mapped to spatial decisions."
          />
        </ScrollReveal>
      </div>

      {/* Child-scale high street */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">A child-scale UK high street replaced the imported theming</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          The pretend-play zone recreates a typical UK street — bakery,
          bookstore, pharmacy — modelled on real London shopfronts at a
          child&apos;s height. Children role-play by imitating the adults around
          them, so the street stages the daily life they actually see rather
          than a borrowed fantasy.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-28.jpg"
            alt="London shopfront reference photos"
            caption="London shopfronts — the reference for the pretend-play street."
          />
        </ScrollReveal>
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-29.jpg"
            alt="Child-scale high street render at child height"
            caption="Child-scale high street render — built at a child's height."
          />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-25.jpg"
          alt="Ball pool at the foot of the climbing wall"
          caption="Safe risk-taking — the ball pool at the climbing wall's foot."
          aspect="16/10"
        />
      </ScrollReveal>

      {/* Competitor analysis */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">Review-mining competitors surfaced the failures to design out</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          I mined reviews of play centres across China, Japan and the UK. The
          recurring complaints — understaffing, poor cleanliness, overcrowding,
          hidden costs — were each triaged into an operational requirement, from
          sanitising stations to timed entry at peak hours.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-13.jpg"
            alt="Local competitor pricing table showing the gap Wobble fills"
            caption="Competitor pricing — the gap Wobble fills."
          />
        </ScrollReveal>
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-54.jpg"
            alt="Competitor website comparison against minimal Wobble homepage"
            caption="Competitor sites vs Wobble — clean pastel identity as differentiation."
          />
        </ScrollReveal>
      </div>

      {/* Business model */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">The business model spreads revenue across six streams</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          I built the Business Model Canvas and presented it through five
          strategic lenses. Revenue comes from entry fees, memberships, parties,
          school trips, the café and merchandise. Brand carried the
          differentiation — local competitor sites are cluttered with clip art,
          so Wobble&apos;s clean pastel identity positions it as the option with
          no substitute.
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-55.jpg"
          alt="Business Model Canvas"
          caption="Business Model Canvas — six revenue streams, five strategic lenses."
        />
      </ScrollReveal>

      {/* What was cut */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">What we deliberately cut and why</div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['Imported Chinese theming', 'Localisation beat replication'],
            ['VR and screen-based play', 'The problem was screen time, not a shortage of it'],
            ['Premium London-style pricing', 'Parents told us cost decides visit frequency'],
            ['Loud colours and dense decoration', 'Overstimulation was a top parent complaint'],
          ].map(([label, detail]) => (
            <div key={label} className="border-l-2 pl-4" style={{ borderColor: ACCENT }}>
              <div className="text-silver font-medium text-sm">{label}</div>
              <div className="text-fog text-sm mt-0.5">{detail}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Sensory seating proof */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-26.jpg"
          alt="Light-up musical sensory seating in calm, neutral palette"
          caption="The calm, neutral direction — sensory seating proof point."
          aspect="16/10"
        />
      </ScrollReveal>

      {/* Outcome */}
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">The client adopted the entire proposal</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          The client accepted the complete proposal — strategy, spatial design,
          brand, and business model — and is now seeking funding for the
          Lancaster flagship. Highest grade in the class for the module.
          Entering a UK indoor entertainment market projected at $2.72B by 2031.
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-62.jpg"
          alt="England expansion map with Lancaster flagship pin"
          caption="The Lancaster flagship — first location on the expansion map."
          aspect="16/10"
        />
      </ScrollReveal>
    </BriefPage>
  );
}