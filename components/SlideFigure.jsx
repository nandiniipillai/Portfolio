'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ScrollReveal from './ScrollReveal';

export default function SlideFigure({ src, alt, caption, aspect = '16/10', className = '' }) {
  return (
    <ScrollReveal className={`my-8 ${className}`}>
      <figure>
        <div className="rounded-2xl overflow-hidden bg-carbon border border-white/[0.05]" style={{ aspectRatio: aspect }}>
          <Zoom>
            <Image
              src={src}
              alt={alt || caption || ''}
              width={1600}
              height={1000}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </Zoom>
        </div>
        {caption && (
          <figcaption className="mt-3 text-fog/70 text-sm max-w-measure">{caption}</figcaption>
        )}
      </figure>
    </ScrollReveal>
  );
}
