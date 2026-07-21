'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import BriefPage from '@/components/BriefPage';
import ScrollReveal from '@/components/ScrollReveal';

const ACCENT = '#D946EF';

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

export default function OraclePage() {
  return (
    <BriefPage
      title="Oracle"
      oneLiner="A speculative knowledge-transmission device for a 2071 post-crisis society — Designing beyond human-centred design"
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
      {/* 1. The world — 2071 context */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/slide-title.png"
          alt="Oracle — 2071 speculative world context"
          caption="2071 — humanity spreading across the solar system after surviving the ecological crisis."
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            One week. A speculative world. A business pitch to a fictional corporation.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            The Imagination Lab module challenged us to design for 2071 — a
            world after ecological collapse, where survivors need tools not only
            to live but to thrive. The brief required a full business
            proposition: the product, the context, the business model, marketing
            and branding, and ecological impact neutral enough to satisfy the
            Solar System Eco-Police. We pitched to the Weyland-Yutani
            Corporation, who had &pound;800 billion credits to invest.
          </p>
        </div>
      </ScrollReveal>

      {/* 2. The product — Oracle */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/slide-product.png"
          alt="Oracle product concept — headgear with quantum sensors"
          caption="Oracle — headgear with quantum sensors for neural pathway recording and transfer."
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Oracle records what the brain does, then teaches it to someone else.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            A skilled operator wears Oracle while performing a task — combat
            manoeuvres, survival techniques, defensive procedures. Quantum
            sensors monitor and record the brain&apos;s neural pathways in real
            time. The recording transfers to another user via deep brain
            stimulation, compressing years of physical learning into hours of
            guided neural practice. The recipient does not just watch — their
            brain rehearses the skill at a neural level before their body
            follows.
          </p>
        </div>
      </ScrollReveal>

      {/* 3. The process — how we got there */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            From chip implants and consciousness transfers to one focused idea.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            Our process moved through five phases: research, define, ideate,
            sketch and visualise, iterate. Early ideas were broad — chip
            implants in the brain, storing memories, transferring consciousness
            to another body or machine. We kept narrowing until Oracle was born:
            skill transfer via neural pathway recording and deep brain
            stimulation. Not memories. Not identity. Skills.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/process.png"
          alt="Design process diagram: Research, Define, Ideate, Sketch, Iterate, Visualise"
          caption="The process — five phases from research to visualization."
          aspect="3/4"
        />
      </ScrollReveal>

      {/* 4. Ideation — narrowing down */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Initial ideas, iterations, mockups.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            We started with everything — AI detective systems, memory storage,
            consciousness transfer. Each round of research and feedback cut the
            scope tighter until we landed on skill transfer as the sharpest
            value proposition: a product that teaches combat and survival skills
            to communities recovering from ecological devastation.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/ideation-mockups.png"
          alt="Initial ideas, iterations, and mockups progression"
          caption="From broad concepts to focused mockups — the narrowing process."
          aspect="3/4"
        />
      </ScrollReveal>

      {/* 5. Application — how it's used */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Where Oracle fits in the world.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            Oracle starts where the need is sharpest — military and law
            enforcement, where skill transfer is the difference between life
            and death. The expansion path moves into healthcare (training
            surgeons), education (accelerating apprenticeships), and space
            industries (preparing colonists for hazardous environments) over
            15 years.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <ScrollReveal>
          <ZoomFig
            src="/assets/oracle/slide-application.png"
            alt="Oracle application scenarios"
            caption="Application — where Oracle fits across 2071 society."
          />
        </ScrollReveal>
        <ScrollReveal>
          <ZoomFig
            src="/assets/oracle/slide-use-case.png"
            alt="Oracle use case — skill transfer in action"
            caption="Use case — skill transfer in action."
          />
        </ScrollReveal>
      </div>

      {/* 6. Business model — transferable skill */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            A business model for a product that does not exist yet.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I framed revenue across five streams: Weyland-Yutani investment,
            government contracts (offering specialised features for a 20%
            annual increase), subscription-based software platforms, refit
            commission from repair outfits, and intellectual property licensing
            with customised versions. The model projected a path from 2071 to
            2073, scaling from a military wedge into healthcare, education, and
            space industries by year 15.
          </p>
          <p className="text-silver text-sm font-medium mt-4">
            This is the same muscle that builds a pricing strategy for a product
            with no precedent — design the business model, not just the artifact.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/slide-scenario.png"
          alt="Oracle business model and revenue streams"
          caption="Business model — five revenue streams and a 15-year expansion path."
        />
      </ScrollReveal>

      {/* 7. Ethical framework — transferable skill */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Neural enhancement demanded an ethical framework, not just a feature list.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I explored privacy risks, data ownership, and accessibility concerns,
            helping the team develop AI governance frameworks aligned with ethical
            design principles. The question was not just &ldquo;can we transfer
            skills?&rdquo; but &ldquo;who owns a neural recording?&rdquo; and
            &ldquo;who gets access?&rdquo;
          </p>
          <p className="text-silver text-sm font-medium mt-4">
            This is the same thinking that shapes AI trust design — defining
            what a product refuses to do before shipping what it does.
          </p>
        </div>
      </ScrollReveal>

      {/* 8. Marketing & brand */}
      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/slide-marketing.png"
          alt="Oracle marketing and brand strategy"
          caption="Marketing — positioning Oracle for the Weyland-Yutani pitch."
        />
      </ScrollReveal>

      {/* 9. Team */}
      <ScrollReveal>
        <div className="mt-8">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-3">
            Genesis — six designers, one week, one pitch.
          </p>
          <p className="text-fog text-base leading-relaxed max-w-3xl">
            I led the team from planning to execution — facilitating brainstorming
            sessions, delegating tasks, and synchronising efforts across product
            development, business strategy, branding, and presentation. The team
            pulled together through time pressure and evolving ideas, and we
            pitched Oracle as a cohesive, strategically sound proposition.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ZoomFig
          src="/assets/oracle/team.png"
          alt="Genesis team — six designers across product, business, and marketing"
          caption="Genesis — team across product, business, and marketing."
          aspect="3/4"
        />
      </ScrollReveal>

      {/* 10. Concept in motion */}
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

      {/* 11. What this proves in digital */}
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

      {/* 12. What I learned */}
      <ScrollReveal>
        <div className="mt-10">
          <p className="text-silver font-heading tracking-tightest text-lg md:text-xl leading-snug mb-4">
            What I learned.
          </p>
          <div className="space-y-3">
            {[
              'Speculative design is not about certainty — it is about exploring future scenarios and starting discussions about what would be the case.',
              'Making an idea simple doesn&apos;t weaken it. In most cases, it becomes more impactful and digestible.',
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