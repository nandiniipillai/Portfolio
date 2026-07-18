'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ScrollReveal from './ScrollReveal';

function ZoomImage({ src, alt, aspect = '16/9', fit = 'contain' }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-carbon border border-white/[0.05]"
      style={{ aspectRatio: aspect }}
    >
      <Zoom>
        <Image
          src={src}
          alt={alt || ''}
          width={1600}
          height={1000}
          className={`w-full h-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`}
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </Zoom>
    </div>
  );
}

export default function SplitRow({
  src,
  alt,
  aspect = '16/9',
  fit = 'contain',
  media,
  imgSide = 'left',
  tone = 'default',
  label,
  title,
  children,
}) {
  const bg = tone === 'sunken' ? 'bg-graphite' : '';
  const mediaEl = media ?? (src ? <ZoomImage src={src} alt={alt} aspect={aspect} fit={fit} /> : null);

  const mediaCol = <ScrollReveal>{mediaEl}</ScrollReveal>;
  const textCol = (
    <ScrollReveal>
      <div className="space-y-4 max-w-measure">
        {label && (
          <div className="text-[11px] tracking-[0.24em] uppercase text-ash">{label}</div>
        )}
        {title && (
          <h2 className="font-heading tracking-tightest text-silver text-2xl md:text-4xl leading-tight">
            {title}
          </h2>
        )}
        <div className="text-fog text-base md:text-lg leading-relaxed">{children}</div>
      </div>
    </ScrollReveal>
  );

  return (
    <section className={`py-14 md:py-20 px-5 md:px-10 ${bg}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          {imgSide === 'left' ? (
            <>
              {mediaCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {mediaCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
