'use client';

import {
  SiFigma,
  SiFramer,
  SiMiro,
  SiNotion,
  SiLinear,
  SiLoom,
  SiSketch,
  SiBehance,
  SiDribbble,
} from 'react-icons/si';
import { TOOLS } from '@/lib/site';

// SVGs available in react-icons/si v5. Slack + Adobe brand marks were removed from
// the upstream Simple Icons set for trademark reasons, so those fall back to Adobe's
// own official letter marks (Ps, Ai, Xd, Ae, Id) which ARE the shipping app icons.
const ICON_MAP = {
  Figma: SiFigma,
  Framer: SiFramer,
  Miro: SiMiro,
  Notion: SiNotion,
  Linear: SiLinear,
  Loom: SiLoom,
  Sketch: SiSketch,
  Behance: SiBehance,
  Dribbble: SiDribbble,
};

const LETTER_MARKS = {
  Photoshop: 'Ps',
  Illustrator: 'Ai',
  'Adobe XD': 'Xd',
  'After Effects': 'Ae',
  InDesign: 'Id',
};

function Tile({ tool }) {
  const Icon = ICON_MAP[tool.name];
  const mark = LETTER_MARKS[tool.name];
  if (!Icon && !mark) return null;
  return (
    <div
      className="shrink-0 mx-2.5 flex items-center justify-center w-[58px] h-[58px] md:w-[64px] md:h-[64px] rounded-[18px] shadow-inner"
      style={{
        background: tool.bg,
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      title={tool.name}
    >
      {Icon ? (
        <Icon size={28} color={tool.fg} aria-label={tool.name} />
      ) : (
        <span
          className="font-heading font-semibold leading-none"
          style={{ color: tool.fg, fontSize: '22px' }}
          aria-label={tool.name}
        >
          {mark}
        </span>
      )}
    </div>
  );
}

export default function StackMarquee() {
  const known = TOOLS.filter((t) => ICON_MAP[t.name] || LETTER_MARKS[t.name]);
  const tools = [...known, ...known];
  return (
    <div
      className="w-full overflow-hidden"
      aria-label={`Tools: ${known.map((t) => t.name).join(', ')}`}
    >
      <div className="flex items-center slide-track w-max">
        {tools.map((t, i) => (
          <Tile key={i} tool={t} />
        ))}
      </div>
    </div>
  );
}
