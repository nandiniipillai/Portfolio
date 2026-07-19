'use client';

import Image from 'next/image';

export default function PhoneFrame({
  src,
  video,
  poster,
  alt,
  children,
  chrome = true,
  className = '',
}) {
  return (
    <div
      className={`relative mx-auto w-full rounded-[36px] bg-black border-[3px] border-black ring-1 ring-white/[0.08] shadow-2xl overflow-hidden ${className}`}
      style={{ aspectRatio: '1170/2532', maxWidth: '320px' }}
    >
      {video ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : src ? (
        <Image
          src={src}
          alt={alt || ''}
          fill
          sizes="320px"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      )}
      {chrome && (
        <>
          {/* Dynamic Island */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-10 pointer-events-none"
            style={{ top: '1.6%', width: '30%', height: '3.4%' }}
            aria-hidden="true"
          />
          {/* Home indicator */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full z-10 pointer-events-none"
            style={{
              bottom: '1%',
              width: '32%',
              height: '0.5%',
              background: 'rgba(255,255,255,0.85)',
            }}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}
