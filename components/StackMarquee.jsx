'use client';

import { TOOLS } from '@/lib/site';

function Tile({ tool }) {
  const isGradient = tool.bg.startsWith('linear-gradient');
  return (
    <div
      className="shrink-0 flex flex-col items-center gap-1.5 mx-3"
      title={tool.name}
    >
      <div
        className="w-[58px] h-[58px] md:w-[64px] md:h-[64px] rounded-[18px] flex items-center justify-center text-xl font-heading font-semibold shadow-inner"
        style={{
          background: tool.bg,
          color: tool.fg,
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {tool.glyph}
      </div>
      <span className="text-[10px] text-fog/70 tracking-wide uppercase whitespace-nowrap leading-none">{tool.name}</span>
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
