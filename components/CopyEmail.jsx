'use client';

import { useRef, useState } from 'react';
import { SITE } from '@/lib/site';

// Guaranteed-path fallback for the mailto: links — a visitor with no configured
// mail client can still copy the address with one tap. Falls back silently to
// showing the address (which is always visible anyway) if the clipboard API is
// unavailable.
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the address is the button label, so it stays readable.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="underline decoration-ash/60 underline-offset-2 hover:decoration-fog hover:text-silver transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 focus-visible:outline-offset-2 rounded-sm"
    >
      {copied ? 'Copied ✓' : SITE.email}
    </button>
  );
}
