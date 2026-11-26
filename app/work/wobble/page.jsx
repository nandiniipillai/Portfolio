'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import BriefPage from '@/components/BriefPage';
import BrowserFrame from '@/components/BrowserFrame';
import PhoneFrame from '@/components/PhoneFrame';
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
      oneLiner="An indoor play centre that gives UK children the outdoors back, and the booking app that runs it."
      category="Strategy, Service & Product Design"
      accent={ACCENT}
      meta={[
        ['Role', ['Strategic Design', 'User research', 'Product design & build']],
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
          alt="Isometric cutaway of the Wobble floor plan, annotated with the sustainable materials used for play structures, paint, cladding and flooring"
          caption="The full floor plan, annotated with the sustainable materials behind each zone."
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

      <ScrollReveal>
        <div className="mt-6">
          <ZoomFig
            src="/assets/wobble/w-55.jpg"
            alt="Business model canvas"
            caption="Business model canvas — six revenue streams."
          />
        </div>
      </ScrollReveal>

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

      <Beat headline="Beyond the brief: the booking product the business model called for.">
        <p>
          The proposal showed the website as a mockup. It wasn&rsquo;t one of our deliverables, so
          I designed and built it as a personal extension of the project: a website and booking
          app, live as a clickable prototype.
        </p>
      </Beat>

      <ScrollReveal>
        <div className="mt-6">
          <BrowserFrame
            src="/assets/wobble/product-home.jpg"
            alt="Wobble homepage: the headline, two actions and a strip of the play zones"
            url="wobble-zeta.vercel.app"
          />
        </div>
      </ScrollReveal>

      <CardGrid
        items={[
          ['Book in under a minute', 'Five steps, one decision each, with the price building as you go'],
          ['Know how busy it is before leaving home', 'A live Lancaster forecast raises predicted busyness on wet days and points families to the calmest session'],
          ['Calm by design', 'Quiet sessions at half capacity, carers free, sensory and step-free needs flagged at booking'],
          ['A reason to come back', 'The Play Passport gives each child a quest per visit across the six kinds of play'],
        ]}
      />

      <ScrollReveal>
        <figure className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <PhoneFrame chrome={false} className="max-w-[240px] sm:max-w-[320px]" src="/assets/wobble/product-visit.jpg" alt="Booking step one: choose a drop-in session, a birthday party or a school trip" />
            <PhoneFrame chrome={false} className="max-w-[240px] sm:max-w-[320px]" src="/assets/wobble/product-who.jpg" alt="Booking step three: the saved family is already selected and the Wobble Pass covers both children" />
            <PhoneFrame chrome={false} className="max-w-[240px] sm:max-w-[320px]" src="/assets/wobble/product-passport.jpg" alt="The Play Passport: each child’s stamps across the six kinds of play" />
          </div>
          <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-ash">Choose a visit, confirm who&rsquo;s coming, collect the stamps.</figcaption>
        </figure>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="https://wobble-zeta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Try the live prototype <span aria-hidden="true">↗</span>
          </a>
          <span className="text-ash text-sm">Next.js · React · TypeScript · Tailwind · live weather from Open-Meteo</span>
        </div>
      </ScrollReveal>
    </BriefPage>
  );
}
