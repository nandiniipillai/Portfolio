'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import BriefPage from '@/components/BriefPage';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#D946EF';

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

export default function OraclePage() {
  return (
    <BriefPage
      title="Oracle"
      oneLiner="A speculative knowledge-transmission device for a 2071 post-crisis society."
      category="Speculative Design"
      accent={ACCENT}
      meta={[
        ['Role', 'Concept · storyboarding · business strategy'],
        ['Team', 'Genesis · 5 designers'],
        ['Type', 'Academic project'],
        ['Year', '2024'],
      ]}
      overview={
        <>
          <p>
            Oracle is a concept for 2071 — a society on the brink of rebirth
            where survivors need tools not only to live, but to thrive. The
            device transmits skills and knowledge across communities recovering
            from ecological devastation, compressing years of learning into
            hours.
          </p>
          <p>
            The five of us — Genesis studio — worked through four phases:
            research and ideation on post-crisis needs, concept definition
            balancing speculative fiction against feasible advancement,
            storyboarding and 3D visualisation, and a business strategy
            grounded in cost and market analysis.
          </p>
        </>
      }
    >
      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4">The premise</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          By 2071, ecological collapse has fragmented communities. Schools,
          internet infrastructure, and institutional knowledge are gone.
          Survivors need to rebuild skills — farming, engineering, medicine —
          but have no teachers and no time. Oracle is the answer: a wearable
          device that transmits tacit knowledge directly, learned through
          guided physical practice rather than abstract study.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">How it works</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          Oracle pairs a wearable with a community knowledge hub. A learner
          selects a skill, performs the physical motions guided by haptic
          feedback and projected instructions, and the device records their
          progression. Knowledge is shared peer-to-peer between devices, so
          one community&apos;s mastery becomes the next&apos;s starting point.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">The concept in motion</div>
      </ScrollReveal>
      <ScrollReveal>
        <div
          className="relative rounded-2xl overflow-hidden bg-carbon border border-white/[0.05]"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/oracle/oracle-walkthrough.mp4"
            poster="/assets/oracle/oracle-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-[11px] tracking-[0.24em] uppercase text-ash mb-4 mt-8">What I contributed</div>
        <p className="text-fog text-base leading-relaxed max-w-3xl">
          I led concept definition and storyboarding, balancing speculative
          fiction against plausible technology. I also built the business
          strategy — cost analysis, market positioning, and the peer-to-peer
          knowledge model that makes Oracle defensible in a world without
          institutions.
        </p>
      </ScrollReveal>
    </BriefPage>
  );
}