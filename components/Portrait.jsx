import Image from 'next/image';
import { SITE } from '@/lib/site';

export default function Portrait({ priority = false, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] bg-carbon ${className}`}>
      <Image
        src={SITE.portrait}
        alt="Nandini Pillai"
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover"
        style={{ objectPosition: 'center 32%' }}
      />
    </div>
  );
}
