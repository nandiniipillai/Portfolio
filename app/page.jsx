import HomeHero from '@/components/HomeHero';
import StackMarquee from '@/components/StackMarquee';
import { SITE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        {SITE.name} — {SITE.title}. {SITE.positioning}
      </h1>
      <HomeHero />
      <section className="border-t border-cream/10 py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-4 flex items-baseline justify-between">
          <span className="text-[11px] tracking-[0.24em] uppercase text-cream/55 font-mono flex items-center gap-2">
            <span className="text-amber" aria-hidden="true">◆</span>
            <span>Toolbelt</span>
          </span>
          <span className="text-[11px] tracking-[0.24em] uppercase text-cream/40 font-mono hidden sm:inline">
            Design · Prototype · Ship
          </span>
        </div>
        <StackMarquee />
      </section>
    </>
  );
}
