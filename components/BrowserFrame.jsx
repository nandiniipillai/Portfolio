'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function BrowserFrame({ src, alt, url, children, className = '' }) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-white/[0.06] bg-graphite ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-carbon">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </span>
        {url && (
          <span className="mx-auto text-fog text-xs bg-ink/60 rounded-full px-3 py-1 tracking-wide">
            {url}
          </span>
        )}
      </div>
      <div className="relative">
        {src ? (
          <Zoom>
            <Image
              src={src}
              alt={alt || ''}
              width={1600}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </Zoom>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
