'use client';

import { useEffect, useRef } from 'react';
import { useLenis } from './LenisProvider';

export default function ScrollProgress({ accent = '#F4F4F2' }) {
  const barRef = useRef(null);
  const { scroll } = useLenis();

  useEffect(() => {
    if (!scroll) return;

    let rafId;
    function tick() {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${scroll.current.progress})`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [scroll]);

  return (
    <div
      ref={barRef}
      className="fixed top-14 left-0 right-0 h-[2px] origin-left z-40"
      style={{ background: accent, transform: 'scaleX(0)' }}
    />
  );
}
