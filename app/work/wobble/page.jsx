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
        ['Role', ['Strategic Design', 'User research']],
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
      {/* Opening — the space we designed */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-47.jpg"
          alt="Isometric cutaway of the Wobble floor plan — castle jungle gym, climbing wall, ball pool, pretend-play street"
          caption="The full Wobble floor plan — castle, climbing wall, ball pool, pretend-play street and café in one view."
        />
      </ScrollReveal>

      {/* Story: the problem */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            UK kids average under 4 hours of exercise a week against 14+ hours of
            screen time.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            Every alternative fails somewhere. Parks work only in summer, homes
            cannot host physical play, and local soft play centres are
            overcrowded, hard to keep clean, and offer either exercise or
            education — rarely both. Toddlers miss over 1,000 adult-spoken words
            a day to screens. The brief was not &ldquo;build a play centre.&rdquo;
            It was &ldquo;replace what children lose outdoors.&rdquo;
          </p>
        </div>
      </ScrollReveal>

      {/* Story: the founding decision */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            The client wanted a UK version of China&rsquo;s Meland Club.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I pushed back on replicating the format. The real job was replacing
            what UK children lose outdoors — so the space must do what a park
            does, inside. We dropped the imported entertainment theming entirely,
            and that &ldquo;park job&rdquo; framing held every later decision.
          </p>
        </div>
      </ScrollReveal>

      {/* Research → spatial rules */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Fifteen parent interviews became binding spatial rules.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl mb-4">
            I synthesised eight themes, then held the spatial team to them as
            constraints. Every research finding mapped directly to a visible
            decision — that is what earned client buy-in.
          </p>
        </div>
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

      {/* The zones flow into imagery */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Graduated zones, separate circulation, the café as a vantage point.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            Kids aged 3 to 10 get the adventure zones, babies get their own wing,
            and parents get a café with full sightlines over everything.
            Supervision feels effortless, and birthday-party rooms triaged peak
            demand keep weekdays full.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-21.jpg"
            alt="Zoned isometric plan with colour-coded circulation routes"
            caption="Zoned plan — separate routes for kids 3-10, parents, and babies."
          />
        </ScrollReveal>
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/w-22.jpg"
            alt="Annotated isometric with callouts for acoustic panels, child-scale openings"
            caption="Design constraints mapped to spatial decisions."
          />
        </ScrollReveal>
      </div>

      {/* Story: the high street */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            A child-scale UK high street replaced the imported theming.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            Bakery, bookstore, pharmacy — modelled on real London shopfronts at a
            child&apos;s height. Children role-play by imitating the adults
            around them, so the street stages the daily life they actually see
            rather than a borrowed fantasy.
          </p>
        </div>
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

      {/* Story: competitor mining — transferable research skill */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Review-mining competitors surfaced the failures to design out.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I mined reviews of play centres across China, Japan and the UK.
            The recurring complaints — understaffing, poor cleanliness,
            overcrowding, hidden costs — were each triaged into an operational
            requirement, from sanitising stations to timed entry at peak hours.
            The same skill that drives a digital feature audit: find the failure
            modes, design them out upstream.
          </p>
        </div>
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
            caption="Competitor sites vs Wobble — clean identity as differentiation."
          />
        </ScrollReveal>
      </div>

      {/* Story: business model — image 53 for transferable business thinking */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            The business model spreads revenue across six streams.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I built the Business Model Canvas and presented it through five
            strategic lenses — entry fees, memberships, parties, school trips,
            the café and merchandise. The same muscle that informs a SaaS
            pricing ladder or a retention loop in a digital product: design the
            business, not just the surface.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-53.jpg"
          alt="Business model strategic breakdown"
          caption="Business model — six revenue streams, five strategic lenses."
        />
      </ScrollReveal>

      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-55.jpg"
          alt="Business Model Canvas"
          caption="Business Model Canvas — the operating model."
        />
      </ScrollReveal>

      {/* Story: brand — image 52 for transferable brand-thinking */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Brand positioned Wobble as the option with no substitute.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            Local competitor sites are cluttered with clip art. Wobble&apos;s
            clean pastel identity — calm, neutral, developmental — read
            instantly as a different category. Per Neumeier, the brand is the
            thing that distinguishes, and that is the same craft that sharpens
            a digital product&apos;s voice and trust signals.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-52.jpg"
          alt="Brand positioning and identity comparison"
          caption="Brand positioning — Wobble's clean identity vs the cluttered competitor set."
        />
      </ScrollReveal>

      {/* Story: what was cut */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            What we deliberately cut — and why.
          </p>
        </div>
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

      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/w-26.jpg"
          alt="Light-up musical sensory seating in calm neutral palette"
          caption="The calm, neutral direction — sensory seating proof point."
          aspect="16/10"
        />
      </ScrollReveal>

      {/* Story: outcome */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            The client adopted the entire proposal.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            Strategy, spatial design, brand, and business model — accepted in
            full. The client is now seeking funding for the first Wobble
            location. Highest grade in the class for the module, entering a
            UK indoor entertainment market projected at $2.72B by 2031.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-carbon">
          <video
            src="/assets/wobble/wobble-cover.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-auto"
          />
        </div>
      </ScrollReveal>
    </BriefPage>
  );
}