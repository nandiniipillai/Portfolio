'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import BriefPage from '@/components/BriefPage';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#D946EF';

function ZoomFig({ src, alt, caption, aspect = '16/9', fit = 'cover' }) {
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
            className={`w-full h-full object-${fit}`}
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

export default function OraclePage() {
  return (
    <BriefPage
      title="Oracle"
      oneLiner="A knowledge-transmission device for a 2071 post-crisis society."
      category="Speculative Design · Design Fiction"
      accent={ACCENT}
      meta={[
        ['Role', ['Team Leader', 'Business strategy', 'Ethical design']],
        ['Team', ['Genesis', '6 designers']],
        ['Type', 'Academic project'],
        ['Year', '2025'],
      ]}
      overview={
        <>
          <p>
            The year is 2071. Humanity survived the ecological crisis of the
            2030s and is spreading across the solar system — settlements on the
            Moon, Mars, and beyond. The Weyland-Yutani Corporation has &pound;800
            billion credits to invest, and our team — Genesis — had one week
            to build a convincing business proposition for a product that
            serves this world.
          </p>
          <p>
            Oracle is a headgear embedded with quantum sensors that monitors
            and records the brain&apos;s neural pathways while performing a
            task. The data transfers directly into another user&apos;s neural
            pathways using deep brain stimulation — compressing years of
            learning into hours. I led the team, shaped the business model
            and value proposition, and addressed the ethical implications of
            neural enhancement and skill sharing.
          </p>
        </>
      }
    >
      {/* Hero — concept render, shown in full */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/oracle-concept.jpeg"
          alt="Oracle concept — headgear with quantum sensors for neural pathway recording"
          aspect="9/16"
          fit="contain"
        />
      </ScrollReveal>

      {/* Synopsis: the brief */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            One week. A speculative world. A business pitch to a fictional corporation.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            The Imagination Lab challenged us to design for 2071 — a world
            after ecological collapse where survivors need tools not only to
            live but to thrive. The brief required a complete business
            proposition: product, context, business model, marketing and
            branding, and ecological impact neutral enough to satisfy the Solar
            System Eco-Police.
          </p>
        </div>
      </ScrollReveal>

      {/* Synopsis: what Oracle does */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Oracle records what the brain does, then teaches it to someone else.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            A skilled operator wears Oracle while performing a task — combat
            manoeuvres, survival techniques, defensive procedures. Quantum
            sensors record the brain&apos;s neural pathways in real time. The
            recording transfers to another user via deep brain stimulation,
            compressing years of physical learning into hours. The recipient
            does not just watch — their brain rehearses the skill at a neural
            level before their body follows.
          </p>
        </div>
      </ScrollReveal>

      {/* Product render */}
      <ScrollReveal>
        <div className="mt-6">
          <ZoomFig
            src="/assets/oracle/oracle-render.png"
            alt="Oracle product render — the headgear in its 2071 context"
            caption="Oracle — the product render in its 2071 context."
          />
        </div>
      </ScrollReveal>

      {/* Concept board */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/oracle-group.jpg"
          alt="Genesis concept board — Oracle world-building and product context"
          caption="Concept board — world-building and product context for Oracle."
        />
      </ScrollReveal>

      {/* Synopsis: the process */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            From chip implants and consciousness transfers to one focused idea.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            We moved through research, define, ideate, sketch and visualise,
            iterate. Early ideas were broad — chip implants, storing memories,
            transferring consciousness to another body or machine. We kept
            narrowing until Oracle was born: skill transfer, not memory.
            Not identity. Skills that help communities rebuild.
          </p>
        </div>
      </ScrollReveal>

      {/* Synopsis: business model — transferable skill */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            A business model for a product that does not exist yet.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I framed revenue across five streams: Weyland-Yutani investment,
            government contracts with specialised features, subscription-based
            software platforms, refit commissions from repair outfits, and IP
            licensing with customised versions. The expansion path scales from
            military and law enforcement into healthcare, education, and space
            industries over 15 years.
          </p>
        </div>
      </ScrollReveal>

      {/* Synopsis: ethical framework — transferable skill */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Neural enhancement demanded an ethical framework.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I explored privacy risks, data ownership, and accessibility —
            developing AI governance frameworks aligned with ethical design
            principles. The question was not just &ldquo;can we transfer
            skills?&rdquo; but &ldquo;who owns a neural recording?&rdquo; and
            &ldquo;who gets access?&rdquo;
          </p>
        </div>
      </ScrollReveal>

      {/* Concept in motion */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            The concept in motion.
          </p>
        </div>
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

      {/* What this proves in digital */}
      <ScrollReveal>
        <div className="mt-10">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-4">
            What this proves in digital product design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['Speculative thinking', 'Designing for a world that does not exist yet — the same skill that shapes visionary product roadmaps and future-facing concepts.'],
              ['Business model design', 'Revenue across five streams for a product with no precedent — the same muscle that builds a pricing strategy for a novel product category.'],
              ['Ethical frameworks', 'Defining what a product refuses to do — the same thinking that shapes AI trust, data ownership, and accessibility design.'],
              ['Team leadership', 'Orchestrating a 6-person team through 5 process phases in one week — the same coordination that drives cross-functional product delivery.'],
            ].map(([label, detail]) => (
              <div key={label} className="border-l-2 pl-4" style={{ borderColor: ACCENT }}>
                <div className="text-silver font-medium text-sm">{label}</div>
                <div className="text-fog text-sm mt-0.5">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* What I learned */}
      <ScrollReveal>
        <div className="mt-10">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-4">
            What I learned.
          </p>
          <div className="space-y-3">
            {[
              'Speculative design is not about certainty — it is about exploring future scenarios and starting discussions about what would be the case.',
              'Making an idea simple doesn’t weaken it. In most cases, it becomes more impactful and digestible.',
              'A product is not just about visual appeal and functionalities — it is about commercial viability and value to users.',
              'Next time: set measurable success criteria at kickoff and communicate openly when feeling overwhelmed or underutilised.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} aria-hidden="true" />
                <p className="text-fog text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </BriefPage>
  );
}