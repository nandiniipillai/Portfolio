'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import BriefPage from '@/components/BriefPage';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#F6C7A0';

function ZoomFig({ src, alt, aspect = '16/9' }) {
  return (
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
        ['Role', 'Strategy · research · marketing'],
        ['Team', 'Sage Studio · 5 designers'],
        ['Timeline', '8 weeks'],
        ['Status', 'Client accepted, seeking funding'],
      ]}
      overview={
        <>
          <p>
            The client arrived with a reference to China&rsquo;s
            entertainment-scale play centres and asked for a UK version. The
            strategic pivot was to stop asking &ldquo;how do we copy
            Meland?&rdquo; and start asking &ldquo;how do we do the
            developmental job of a park inside four walls?&rdquo;
          </p>
          <p>
            I owned the strategy side — parent interviews, thematic synthesis,
            the business model canvas, and brand positioning — while four
            teammates carried the spatial design and 3D. The client accepted
            the full proposal and is now building the startup, currently
            seeking funding.
          </p>
        </>
      }
    >
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">The challenge</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          UK children spend less time outdoors than ever before. Parents want
          safe, developmental play, but existing indoor centres copy Asian
          entertainment models — bright lights, passive rides, no developmental
          purpose. Wobble needed to be the opposite: a space that does what a
          park does, inside.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">The strategy</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          I interviewed parents across three UK cities, ran thematic synthesis
          on the findings, and built the business model canvas. The positioning
          we landed on was simple: Wobble is not entertainment, it is
          developmental play in a safe, weather-proof environment. Every zone
          maps to a skill the outdoor world builds naturally — climbing, risk
          assessment, pretend play, social mixing.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">The space</div>
      </ScrollReveal>
      <ScrollReveal>
        <ZoomFig
          src="/assets/wobble/v2-3.jpg"
          alt="Isometric cutaway of the Wobble floor plan"
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/v2-6.jpg"
            alt="Climbing wall landing in the ball pool"
          />
        </ScrollReveal>
        <ScrollReveal>
          <ZoomFig
            src="/assets/wobble/v2-8.jpg"
            alt="Child-scale UK high-street pretend-play zone"
          />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">Outcome</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          The client accepted the full proposal — strategy, spatial design,
          brand, and business model. The startup is now seeking funding to
          build the first location.
        </p>
      </ScrollReveal>
    </BriefPage>
  );
}