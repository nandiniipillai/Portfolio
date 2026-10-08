'use client';

import { useState } from 'react';
import {
  MdSpaceDashboard, MdOutlineSpaceDashboard, MdCalendarToday, MdOutlineCalendarToday, MdSearch,
  MdLocationOn, MdOutlineLocationOn, MdApps, MdNotifications, MdOutlineNotifications, MdSettings,
  MdOutlineSettings, MdAccessTimeFilled, MdOutlineAccessTime, MdInfo, MdOutlineInfo, MdStar,
  MdStarOutline, MdFavorite, MdFavoriteBorder, MdMail, MdMailOutline, MdMenuBook, MdOutlineMenuBook,
  MdDirectionsBus, MdOutlineDirectionsBus, MdAccountBalance, MdOutlineAccountBalance, MdCheckCircle,
  MdOutlineCheckCircle, MdHelp, MdOutlineHelpOutline,
} from 'react-icons/md';
import ScrollReveal from './ScrollReveal';

// The ISS Innovation Hub design system, rebuilt live from the iLancaster Figma
// library (Nandini's screenshots, 2026-10-08) and checked against the shipped
// iLancaster screens. Values were read from the library — hex labels
// cross-checked against sampled swatch pixels, spacing boxes and button sizes
// measured, night and pressed states sampled. Two deliberate omissions: the
// "dark grey" primary shows no hex because its Figma label and its fill
// disagree, and the light-grey text button is left out because its spec and
// its drawing disagree. Don't fill either in by guessing.

const PRIMARY = [
  { name: 'Red', hex: '#B20F18' },
  { name: 'Blue', hex: '#016587' },
  { name: 'Light grey', hex: '#BEC0C2' },
  { name: 'Dark grey', hex: '#565656', hideHex: true },
  { name: 'Black', hex: '#000000' },
];

// Day order, 50 → 000. Night mode re-maps the same ten steps in reverse.
const GREYSCALE = [
  ['50', '#F9FBFC'], ['200', '#EEF0F2'], ['300', '#E1E3E5'], ['400', '#BFC1C2'], ['500', '#9FA1A3'],
  ['600', '#76787A'], ['700', '#636566'], ['800', '#434547'], ['900', '#212325'], ['000', '#000000'],
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

const TYPE = [
  { token: 'LUH1', role: 'Heading One', size: 30, weights: 'Reg · Bold' },
  { token: 'LUH2', role: 'Heading Two', size: 24, weights: 'Reg · Bold' },
  { token: 'LUH3', role: 'Heading Three', size: 18, weights: 'Reg · Bold' },
  { token: 'LUH4', role: 'Heading Four', size: 15, weights: 'Bold', bold: true },
  { token: 'LU Body', role: 'Text One', size: 15, weights: 'Reg' },
  { token: 'LU Caption', role: 'Text One', size: 12, weights: 'Reg · Bold' },
];

// Pressed states, sampled from the library: blue presses to the darker blue
// token, sky blue to dark grey, red and outlined to 50% opacity (the samples
// match exactly half strength over each canvas).
const BUTTONS = [
  { label: 'Filled · Blue', bg: '#1696B9', fg: '#FFFFFF', w: 292, h: 46, r: 4, text: 'LUH2 Regular', pressed: { bg: '#016587' } },
  { label: 'Filled · Red', bg: '#B20F18', fg: '#FFFFFF', w: 267, h: 36, r: 4, text: 'LU Body', pressed: { fade: true } },
  { label: 'Filled · Sky Blue', bg: '#0E6ACE', fg: '#FFFFFF', w: 322, h: 75, r: 8, text: 'LUH1 Bold', bold: true, pressed: { bg: '#363938' } },
  { label: 'Outlined · Blue', bg: '#FFFFFF', fg: '#016587', border: '#016587', w: 80, h: 29, r: 4, text: 'LU Body', specHex: '#016587', pressed: { fade: true } },
];

const SPACING = [2, 4, 6, 8, 12, 16, 24, 32, 40];

const STATS = [
  ['80+', 'iLancaster screens built on it'],
  ['2', 'modes, each first-class: day and night'],
  ['13 × 4', 'button variants × states'],
  ['56', 'icons, outlined and filled, in both modes'],
];

// Canvas colours per mode — the library's own day and night grounds.
const MODE = {
  day: { canvas: '#F9FBFC', ink: '#212325', soft: '#434547', eyebrow: '#636566' },
  night: { canvas: '#171717', ink: '#F9FBFC', soft: '#BFC1C2', eyebrow: '#9FA1A3' },
};

const TABS = [
  ['Home', MdOutlineSpaceDashboard, MdSpaceDashboard],
  ['Timetable', MdOutlineCalendarToday, MdCalendarToday],
  ['Search', MdSearch, MdSearch],
  ['Map', MdOutlineLocationOn, MdLocationOn],
  ['Explore', MdApps, MdApps],
];

const SCOPES = ['All', 'ASK', 'Apps', 'Timetable'];
const CATEGORIES = ['Overview', 'Academic', 'Welfare', 'News', 'Events'];

const ICONS = [
  [MdOutlineNotifications, MdNotifications], [MdOutlineSettings, MdSettings],
  [MdOutlineAccessTime, MdAccessTimeFilled], [MdOutlineInfo, MdInfo], [MdStarOutline, MdStar],
  [MdFavoriteBorder, MdFavorite], [MdMailOutline, MdMail], [MdOutlineMenuBook, MdMenuBook],
  [MdOutlineDirectionsBus, MdDirectionsBus], [MdOutlineAccountBalance, MdAccountBalance],
  [MdOutlineCheckCircle, MdCheckCircle], [MdOutlineHelpOutline, MdHelp],
];

const eyebrow = 'text-[11px] tracking-[0.24em] uppercase text-ash';
const panel = 'rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-7';

function Canvas({ mode, title, children, className = '' }) {
  const m = MODE[mode];
  return (
    <div
      className={`rounded-2xl p-5 md:p-7 h-full border border-white/[0.08] transition-colors duration-300 motion-reduce:transition-none ${className}`}
      style={{ background: m.canvas }}
    >
      <div className="text-[11px] tracking-[0.24em] uppercase mb-5" style={{ color: m.eyebrow }}>
        {title} · {mode} mode
      </div>
      {children}
    </div>
  );
}

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

function ISSStats() {
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

function ISSColour() {
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

function ISSType() {
  return (
    <div className={`${panel} h-full`}>
      <div className={`${eyebrow} mb-5`}>Type · Effra, Aktiv Grotesk</div>
      <ul className="divide-y divide-white/[0.06]">
        {TYPE.map((t) => (
          <li key={t.token + t.size} className="py-2.5 first:pt-0 grid grid-cols-[72px_1fr] items-baseline gap-3">
            <span className="text-ash text-[11px] tabular-nums">{t.token}</span>
            <span className="min-w-0">
              <span className={`block text-silver leading-tight truncate ${t.bold ? 'font-semibold' : ''}`} style={{ fontSize: t.size }}>
                {t.role}
              </span>
              <span className="block text-ash text-[11px] mt-0.5">Effra {t.weights} · {t.size}px</span>
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
  );
}

function ISSButtons({ mode }) {
  const m = MODE[mode];
  return (
    <Canvas mode={mode} title="Buttons">
      <ul className="space-y-5">
        {BUTTONS.map((b) => (
          <li key={b.label}>
            <button
              type="button"
              aria-label={`${b.label} button — press to see its pressed state`}
              className={`flex items-center justify-center max-w-full select-none transition-[background-color,opacity] duration-100 motion-reduce:transition-none bg-[var(--b)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                b.pressed.fade ? 'active:opacity-50' : 'active:bg-[var(--p)]'
              }`}
              style={{
                '--b': b.bg,
                '--p': b.pressed.bg,
                width: b.w,
                height: b.h,
                borderRadius: b.r,
                color: b.fg,
                border: b.border ? `1px solid ${b.border}` : undefined,
                outlineColor: m.ink,
                fontSize: b.h > 60 ? 18 : 13,
                fontWeight: b.bold ? 600 : 500,
              }}
            >
              Button
            </button>
            <div className="text-[11px] mt-1.5 tabular-nums leading-snug" style={{ color: m.soft }}>
              <span className="font-medium" style={{ color: m.ink }}>{b.label}</span>
              {' · '}{b.specHex || b.bg} · {b.text} · radius {b.r} · {b.w}×{b.h}
            </div>
          </li>
        ))}
      </ul>
      <p className="text-[11px] mt-5" style={{ color: m.soft }}>Press any button to see its pressed state.</p>
    </Canvas>
  );
}

function TabBar({ mode }) {
  const [active, setActive] = useState('Home');
  const night = mode === 'night';
  return (
    <div
      className="w-full max-w-[340px] rounded-xl px-2 pt-2.5 pb-2 grid grid-cols-5"
      style={{ background: night ? '#76787A' : '#F9FBFC', boxShadow: night ? undefined : 'inset 0 1px 0 #E1E3E5, 0 0 0 1px #E1E3E5' }}
      role="tablist"
      aria-label="iLancaster tab bar"
    >
      {TABS.map(([name, Outline, Filled]) => {
        const on = active === name;
        const Icon = on ? Filled : Outline;
        const color = night ? '#FFFFFF' : on ? '#B20F18' : '#636566';
        return (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => setActive(name)}
            className="flex flex-col items-center gap-0.5 py-1 rounded-md focus-visible:outline focus-visible:outline-2"
            style={{ color, outlineColor: night ? '#FFFFFF' : '#212325' }}
          >
            <Icon size={24} aria-hidden="true" />
            <span className="text-[10px] leading-none" style={{ fontWeight: on ? 700 : 500 }}>{name}</span>
          </button>
        );
      })}
    </div>
  );
}

function WeekMonth({ mode }) {
  const [sel, setSel] = useState('Week');
  const night = mode === 'night';
  return (
    <div
      className="inline-flex rounded-full p-1"
      style={{ background: night ? '#565656' : '#DEEAEF' }}
      role="radiogroup"
      aria-label="Timetable range"
    >
      {['Week', 'Month'].map((v) => {
        const on = sel === v;
        return (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => setSel(v)}
            className="px-4 py-1 rounded-full text-xs transition-colors duration-150 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2"
            style={{
              background: on ? '#016587' : 'transparent',
              color: on || night ? '#FFFFFF' : '#016587',
              fontWeight: on ? 600 : 500,
              outlineColor: night ? '#FFFFFF' : '#212325',
            }}
          >
            {v}
          </button>
        );
      })}
    </div>
  );
}

function ScopeChips({ mode }) {
  const [sel, setSel] = useState('All');
  const night = mode === 'night';
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Search scope">
      {SCOPES.map((s) => {
        const on = sel === s;
        return (
          <button
            key={s}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => setSel(s)}
            className="min-w-[64px] px-3.5 py-1.5 rounded text-[13px] transition-colors duration-150 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2"
            style={{
              background: on ? '#016587' : night ? '#F9FBFC' : 'transparent',
              color: on ? '#FFFFFF' : '#016587',
              fontWeight: on ? 600 : 500,
              outlineColor: night ? '#FFFFFF' : '#212325',
            }}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
}

// The shipped app marks the current category by dropping its pill: the
// selected chip is plain text, the rest stay as gunmetal pills.
function CategoryChips({ mode }) {
  const [sel, setSel] = useState('News');
  const night = mode === 'night';
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Feature categories">
      {CATEGORIES.map((c) => {
        const on = sel === c;
        return (
          <button
            key={c}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => setSel(c)}
            className="px-3.5 py-1.5 rounded-full text-[13px] transition-colors duration-150 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2"
            style={{
              background: on ? 'transparent' : '#324147',
              color: on ? (night ? '#F9FBFC' : '#212325') : '#F9FBFC',
              fontWeight: on ? 600 : 500,
              outlineColor: night ? '#FFFFFF' : '#212325',
            }}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}

function ISSNavigation({ mode }) {
  const m = MODE[mode];
  const label = (t) => (
    <div className="text-[11px] font-medium mb-2.5" style={{ color: m.soft }}>{t}</div>
  );
  return (
    <Canvas mode={mode} title="Navigation">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
        <div className="space-y-6">
          <div>
            {label('Tab bar — the active tab fills')}
            <TabBar mode={mode} />
          </div>
          <div>
            {label('Week / Month toggle')}
            <WeekMonth mode={mode} />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            {label('Search scope chips')}
            <ScopeChips mode={mode} />
          </div>
          <div>
            {label('Category chips — the current one drops its pill')}
            <CategoryChips mode={mode} />
          </div>
        </div>
      </div>
      <p className="text-[11px] mt-6" style={{ color: m.soft }}>All live — tap a tab, a toggle or a chip.</p>
    </Canvas>
  );
}

function ISSIcons({ mode }) {
  const m = MODE[mode];
  const row = (label, idx) => (
    <div>
      <div className="text-[11px] font-medium mb-2.5" style={{ color: m.soft }}>{label}</div>
      <div className="grid grid-cols-6 gap-y-3 gap-x-2 justify-items-start" aria-hidden="true">
        {ICONS.map((pair, i) => {
          const Icon = pair[idx];
          return <Icon key={i} size={22} style={{ color: m.ink }} />;
        })}
      </div>
    </div>
  );
  return (
    <Canvas mode={mode} title="Icons">
      <div className="space-y-5">
        {row('Outlined', 0)}
        {row('Filled', 1)}
      </div>
      <p className="text-[11px] mt-5 leading-relaxed" style={{ color: m.soft }}>
        A sample of the 56-icon set, re-drawn with Material icons.
      </p>
    </Canvas>
  );
}

function ISSSpacing() {
  return (
    <div className={`${panel} h-full`}>
      <div className={`${eyebrow} mb-5`}>Spacing · 8-point grid with half-steps</div>
      <ul className="flex items-end gap-3 md:gap-4 overflow-hidden" aria-label="Spacing scale: 2, 4, 6, 8, 12, 16, 24, 32 and 40 pixels">
        {SPACING.map((s) => (
          <li key={s} className="flex flex-col items-center gap-1.5">
            <span className="block bg-white/25 ring-1 ring-white/20" style={{ width: s, height: s }} aria-hidden="true" />
            <span className="text-[10px] text-ash tabular-nums">{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-fog text-xs leading-relaxed mt-5">
        Nine steps from 2px to 40px, defined for both horizontal and vertical spacing.
      </p>
    </div>
  );
}

function ModeSwitch({ mode, setMode }) {
  return (
    <div className="inline-flex rounded-full border border-white/[0.12] p-1" role="radiogroup" aria-label="Preview the components in day or night mode">
      {['day', 'night'].map((v) => {
        const on = mode === v;
        return (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => setMode(v)}
            className={`px-4 py-1.5 rounded-full text-xs capitalize transition-colors duration-150 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80 ${
              on ? 'bg-silver text-black font-medium' : 'text-fog hover:text-silver'
            }`}
          >
            {v}
          </button>
        );
      })}
    </div>
  );
}

// The whole library, in one block — used on iLancaster (where it was built)
// and LUCA (which was built on it), so either case study stands on its own.
export function ISSSystemBoard() {
  const [mode, setMode] = useState('day');
  return (
    <div className="space-y-6">
      <ISSStats />
      <ISSColour />
      <ScrollReveal>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className={eyebrow}>Components</div>
          <ModeSwitch mode={mode} setMode={setMode} />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <ISSType />
          <ISSButtons mode={mode} />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <ISSNavigation mode={mode} />
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <ISSIcons mode={mode} />
          <ISSSpacing />
        </div>
      </ScrollReveal>
    </div>
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
