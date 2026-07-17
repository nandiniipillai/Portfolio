'use client';

import Image from 'next/image';

export default function PhoneFrame({
  src,
  video,
  poster,
  alt,
  children,
  className = '',
}) {
  return (
    <div
      className={`relative mx-auto rounded-[36px] bg-black border border-white/[0.08] shadow-2xl overflow-hidden ${className}`}
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
    </div>
  );
}
