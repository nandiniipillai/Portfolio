'use client';

import { useEffect, useState } from 'react';
import { useLenis } from './LenisProvider';

// Desktop-only section rail for long case studies. It finds the case study's own
// <h2> headings, tracks which is in view, and scrolls to one on click. Hidden
// below xl (there's no room beside the content until then) and it sits in the
// right margin, so it never overlaps the measure column. Reduced-motion aware.
export default function CaseStudyNav({ accent = '#F4F4F2' }) {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);
  const lenisCtx = useLenis();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('article h2'));
    if (els.length === 0) return undefined;
    setItems(els.map((el) => ({ el, label: el.textContent.trim() })));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  const go = (el) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = lenisCtx?.lenis?.current;
    if (lenis && typeof lenis.scrollTo === 'function') {
      // Lenis owns the scroll; native scrollIntoView is a no-op against it.
      lenis.scrollTo(el, { offset: -72, immediate: reduce });
    } else {
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      aria-label="Case study sections"
      className="hidden xl:block fixed right-5 top-1/2 -translate-y-1/2 z-30"
    >
      <ul className="flex flex-col gap-3 items-end">
        {items.map((item, i) => (
          <li key={i} className="relative flex items-center">
            <span
              className="absolute right-6 top-1/2 -translate-y-1/2 w-max max-w-[240px] whitespace-normal text-right leading-snug text-[11px] text-fog bg-black/85 border border-white/10 rounded-md px-2.5 py-1.5 opacity-0 pointer-events-none transition-opacity duration-200 peer-hover:opacity-100"
            >
              {item.label}
            </span>
            <button
              type="button"
              onClick={() => go(item.el)}
              aria-label={item.label}
              aria-current={active === i ? 'true' : undefined}
              className="peer block p-1.5"
            >
              <span
                className="block w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: active === i ? accent : 'rgba(255,255,255,0.25)',
                  transform: active === i ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
