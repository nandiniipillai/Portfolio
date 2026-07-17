'use client';

import { TOOLS } from '@/lib/site';

function Tile({ tool }) {
  return (
    <div className="shrink-0 flex items-center gap-3 mx-5 py-2 pl-2 pr-4 rounded-full border border-cream/10 bg-cream/[0.02]" title={tool.name}>
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-heading font-semibold"
        style={{ background: tool.bg, color: tool.fg, border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {tool.glyph}
      </span>
      <span className="text-[11px] tracking-[0.14em] uppercase text-cream/75 whitespace-nowrap">{tool.name}</span>
    </div>
  );
}

export default function StackMarquee() {
  const tools = [...TOOLS, ...TOOLS];
  return (
    <div
      className="w-full overflow-hidden py-4"
      aria-label={`Tools: ${TOOLS.map((t) => t.name).join(', ')}`}
    >
      <div className="flex slide-track w-max">
        {tools.map((t, i) => (
          <Tile key={i} tool={t} />
        ))}
      </div>
    </div>
  );
}
