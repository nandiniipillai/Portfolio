'use client';

import BriefPage from '@/components/BriefPage';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#D946EF';

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
      ]}
      overview={
        <>
          <p>
            Oracle is a concept for 2071, a society on the brink of rebirth
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
    </BriefPage>
  );
}
