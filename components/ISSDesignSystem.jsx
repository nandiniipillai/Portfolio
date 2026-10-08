'use client';

import ScrollReveal from './ScrollReveal';

// The ISS Innovation Hub design system, rebuilt live from the iLancaster Figma
// library (Nandini's screenshots, 2026-10-08). Every value below was read from
// the library — hex labels cross-checked against sampled swatch pixels, spacing
// boxes measured. Two deliberate omissions: the "dark grey" primary shows no hex
// because its Figma label and its actual fill disagree, and the light-grey text
// button is left out because its spec and its drawing disagree. Don't fill
// either in by guessing.

const PRIMARY = [
  { name: 'Red', hex: '#B20F18' },
  { name: 'Blue', hex: '#016587' },
  { name: 'Light grey', hex: '#BEC0C2' },
  { name: 'Dark grey', hex: '#565656', hideHex: true },
  { name: 'Black', hex: '#000000' },
];

// Day order, 50 → 000. Night mode re-maps the same ten steps in reverse.
const GREYSCALE = [
  ['50', '#F9FBFC'],
  ['200', '#EEF0F2'],
  ['300', '#E1E3E5'],
  ['400', '#BFC1C2'],
  ['500', '#9FA1A3'],
  ['600', '#76787A'],
  ['700', '#636566'],
  ['800', '#434547'],
  ['900', '#212325'],
  ['000', '#000000'],
];

const SECONDARY = [
  '#391956', '#B6D6E1', '#008375', '#56786A', '#869978', '#7DC59A', '#EE578D', '#64606C', '#0E6ACE',
  '#6490B5', '#324147', '#C26763', '#E3214B', '#FF7372', '#E1302D', '#62BF6D', '#9AC8DC', '#1696B9',
  '#9900EF', '#64D2FF', '#0693E3',
];

const SEMANTIC = [
  { name: 'Error', hex: '#E1302D' },
  { name: 'Approved', hex: '#62BF6D' },
];

// Effra is the primary face; sizes and weights straight from the library.
const TYPE = [
  { token: 'LUH1', role: 'Heading One', size: 30, weights: 'Reg · Bold' },
  { token: 'LUH2', role: 'Heading Two', size: 24, weights: 'Reg · Bold' },
  { token: 'LUH3', role: 'Heading Three', size: 18, weights: 'Reg · Bold' },
  { token: 'LUH4', role: 'Heading Four', size: 15, weights: 'Bold', bold: true },
  { token: 'LU Body', role: 'Text One', size: 15, weights: 'Reg' },
  { token: 'LU Caption', role: 'Text One', size: 12, weights: 'Reg · Bold' },
];

const BUTTONS = [
  { label: 'Filled · Blue', bg: '#1696B9', fg: '#FFFFFF', w: 292, h: 46, r: 4, text: 'LUH2 Regular' },
  { label: 'Filled · Red', bg: '#B20F18', fg: '#FFFFFF', w: 267, h: 36, r: 4, text: 'LU Body' },
  { label: 'Filled · Sky Blue', bg: '#0E6ACE', fg: '#FFFFFF', w: 322, h: 75, r: 8, text: 'LUH1 Bold', bold: true },
  { label: 'Outlined · Blue', bg: '#FFFFFF', fg: '#016587', border: '#016587', w: 80, h: 29, r: 4, text: 'LU Body', specHex: '#016587' },
];

const SPACING = [2, 4, 6, 8, 12, 16, 24, 32, 40];

const STATS = [
  ['80+', 'screens built on one system'],
  ['2', 'modes, each first-class: day and night'],
  ['13 × 4', 'button variants × states'],
  ['56', 'icons, outlined and filled, in both modes'],
];

const eyebrow = 'text-[11px] tracking-[0.24em] uppercase text-ash';
const panel = 'rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-7';

function Ramp({ steps, label }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.2em] uppercase text-ash mb-1.5">{label}</div>
      <div className="grid grid-cols-10 rounded-lg overflow-hidden ring-1 ring-white/10" aria-hidden="true">
        {steps.map(([, hex], i) => (
          <div key={i} className="h-7 md:h-8" style={{ background: hex }} />
        ))}
      </div>
      <div className="grid grid-cols-10 mt-1">
        {steps.map(([step], i) => (
          <span key={i} className="text-[9px] md:text-[10px] text-ash text-center tabular-nums">{step}</span>
        ))}
      </div>
    </div>
  );
}

export function ISSStats() {
  return (
    <ScrollReveal>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.08]">
        {STATS.map(([value, label]) => (
          <li key={label} className="bg-graphite p-4 md:p-5">
            <div className="font-heading tracking-tightest text-silver text-2xl md:text-3xl leading-none">{value}</div>
            <div className="text-fog text-xs md:text-sm mt-2 leading-snug">{label}</div>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

export function ISSColour() {
  return (
    <ScrollReveal>
      <div className={panel}>
        <div className={`${eyebrow} mb-5`}>Colour · Figma variables</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
          <div>
            <div className="text-silver text-sm font-medium mb-3">Primary</div>
            <ul className="grid grid-cols-5 gap-2 md:gap-3">
              {PRIMARY.map((c) => (
                <li key={c.name}>
                  <div className="h-12 md:h-14 rounded-lg ring-1 ring-white/10" style={{ background: c.hex }} aria-hidden="true" />
                  <div className="text-silver text-[11px] md:text-xs mt-1.5 leading-tight">{c.name}</div>
                  {!c.hideHex && <div className="text-ash text-[10px] md:text-[11px] tabular-nums">{c.hex}</div>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-silver text-sm font-medium mb-3">Greyscale — ten steps, re-mapped per mode</div>
            <div className="space-y-2">
              <Ramp steps={GREYSCALE} label="Day" />
              <Ramp steps={[...GREYSCALE].reverse()} label="Night" />
            </div>
          </div>
        </div>

        <div className="text-silver text-sm font-medium mt-7 mb-3">Secondary — 21 colours, two with a job</div>
        <div className="flex flex-wrap gap-1.5" role="img" aria-label="21 secondary colours">
          {SECONDARY.map((hex) => (
            <span key={hex} className="w-6 h-6 md:w-7 md:h-7 rounded-md ring-1 ring-white/10" style={{ background: hex }} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {SEMANTIC.map((s) => (
            <span key={s.name} className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-3 py-1 text-xs text-fog">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.hex }} aria-hidden="true" />
              {s.name} <span className="text-ash tabular-nums">{s.hex}</span>
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export function ISSType() {
  return (
    <ScrollReveal className="h-full">
      <div className={`${panel} h-full`}>
        <div className={`${eyebrow} mb-5`}>Type · Effra, Aktiv Grotesk</div>
        <ul className="divide-y divide-white/[0.06]">
          {TYPE.map((t) => (
            <li key={t.token + t.size} className="py-2.5 first:pt-0 grid grid-cols-[72px_1fr] items-baseline gap-3">
              <span className="text-ash text-[11px] tabular-nums">{t.token}</span>
              <span className="min-w-0">
                <span
                  className={`block text-silver leading-tight truncate ${t.bold ? 'font-semibold' : ''}`}
                  style={{ fontSize: t.size }}
                >
                  {t.role}
                </span>
                <span className="block text-ash text-[11px] mt-0.5">
                  Effra {t.weights} · {t.size}px
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-fog text-xs leading-relaxed mt-4">
          Secondary face, Aktiv Grotesk: H1 24px Bold, H2 18px Bold, Body 12px Medium and Regular.
        </p>
        <p className="text-ash text-[11px] leading-relaxed mt-2">
          Samples are set in this site&rsquo;s typeface — Effra and Aktiv Grotesk are licensed.
        </p>
      </div>
    </ScrollReveal>
  );
}

// Rendered on a light day-mode canvas, as in the library: these are day-mode
// specs, and red or teal text on the site's black would misrepresent them.
export function ISSButtons() {
  return (
    <ScrollReveal className="h-full">
      <div className="rounded-2xl p-5 md:p-7 h-full" style={{ background: '#F9FBFC' }}>
        <div className="text-[11px] tracking-[0.24em] uppercase mb-5" style={{ color: '#636566' }}>
          Buttons · anatomy, day mode
        </div>
        <ul className="space-y-5">
          {BUTTONS.map((b) => (
            <li key={b.label}>
              <div
                aria-hidden="true"
                className="flex items-center justify-center max-w-full"
                style={{
                  width: b.w,
                  height: b.h,
                  borderRadius: b.r,
                  background: b.bg,
                  color: b.fg,
                  border: b.border ? `1px solid ${b.border}` : undefined,
                  fontSize: b.h > 60 ? 18 : 13,
                  fontWeight: b.bold ? 600 : 500,
                }}
              >
                Button
              </div>
              <div className="text-[11px] mt-1.5 tabular-nums leading-snug" style={{ color: '#434547' }}>
                <span className="font-medium" style={{ color: '#212325' }}>{b.label}</span>
                {' · '}{b.specHex || b.bg} · {b.text} · radius {b.r} · {b.w}×{b.h}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

// From the library's Navigation page — every item is a component there.
const NAV_COMPONENTS = [
  ['Bottom tab bar', 'Home, Timetable, Search, Map, Explore — an active state for each, day and night'],
  ['Search scope chips', 'All, ASK, Apps, Timetable — the scoped search, as a component'],
  ['Category chips', 'Overview, Academic, Welfare, News, Events'],
  ['Toggles and tabs', 'Week / Month, All / Unread, Timetables / Deadlines, a term stepper'],
];

export function ISSNavigation() {
  return (
    <ScrollReveal className="h-full">
      <div className={`${panel} h-full`}>
        <div className={`${eyebrow} mb-5`}>Navigation · components</div>
        <ul className="space-y-3">
          {NAV_COMPONENTS.map(([name, detail]) => (
            <li key={name}>
              <div className="text-silver text-sm font-medium">{name}</div>
              <div className="text-fog text-xs md:text-sm leading-relaxed mt-0.5">{detail}</div>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

export function ISSSpacing() {
  return (
    <ScrollReveal className="h-full">
      <div className={`${panel} h-full`}>
        <div className={`${eyebrow} mb-5`}>Spacing · 8-point grid with half-steps</div>
        <ul className="flex items-end gap-3 md:gap-5 overflow-hidden" aria-label="Spacing scale: 2, 4, 6, 8, 12, 16, 24, 32 and 40 pixels">
          {SPACING.map((s) => (
            <li key={s} className="flex flex-col items-center gap-1.5">
              <span className="block bg-white/25 ring-1 ring-white/20" style={{ width: s, height: s }} aria-hidden="true" />
              <span className="text-[10px] text-ash tabular-nums">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

// Compact "inherited" strip for products built on the shared system (LUCA).
export function ISSCoreStrip() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      {PRIMARY.map((c) => (
        <span key={c.name} className="w-7 h-7 rounded-md ring-1 ring-white/10" style={{ background: c.hex }} />
      ))}
    </div>
  );
}
