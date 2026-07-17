import { MARQUEE } from '@/lib/site';

export default function Marquee({ items = MARQUEE, className = '' }) {
  const track = [...items, ...items];
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex slide-track w-max whitespace-nowrap font-heading tracking-tightest">
        {track.map((s, i) => (
          <span
            key={i}
            className="text-silver mx-6"
            style={{ fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 1 }}
          >
            {s} <span className="text-fog/50 mx-3">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
