'use client';

import { useEffect, useRef, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const scrollRef = useRef({ y: 0, limit: 0, progress: 0 });
  const pathname = usePathname();

  useEffect(() => {
    // Scroll hijacking is exactly what reduced-motion users opted out of.
    // Skip Lenis entirely for them — every consumer already falls back to
    // native APIs when lenis is absent (CaseStudyNav → scrollIntoView), and
    // the native listener below keeps ScrollProgress fed.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const onScroll = () => {
        const limit = document.documentElement.scrollHeight - window.innerHeight;
        scrollRef.current = {
          y: window.scrollY,
          limit,
          progress: limit > 0 ? window.scrollY / limit : 0,
        };
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ({ scroll: s, limit: l }) => {
      scrollRef.current = { y: s, limit: l, progress: l > 0 ? s / l : 0 };
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef, scroll: scrollRef }}>
      {children}
    </LenisContext.Provider>
  );
}
