'use client';

import { LuClock, LuCheck, LuX } from 'react-icons/lu';
import ScrollReveal from './ScrollReveal';
import { anekLatin, anekDevanagari } from '@/lib/fonts-baari';

// Baari's design system ("Mor and Haldi", round six), rebuilt live from its
// own tokens.json, README and decisions.md in the Design System artifact
// (read 2026-10-19). Values are verbatim; every "what it beat" claim is from
// decisions.md with its evidence type. Samples render on Baari's own light
// grounds because it is a light-only system.

const T = {
  paper: '#f3f5f6',
  raised: '#ffffff',
  ink: '#12191c',
  inkMuted: '#5b666b',
  lineControl: '#7c878c',
  action: '#0d7a86',
  actionInk: '#09535b',
  band: '#0a5f69',
  highlight: '#f2b230',
  success: '#009966',
  onSuccess: '#006541',
  warning: '#e17100',
  onWarning: '#8b4600',
  danger: '#e7000b',
  onDanger: '#a20710',
  shadow: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)',
};

const display = anekLatin.style.fontFamily;
const deva = anekDevanagari.style.fontFamily;
const tab = { fontVariantNumeric: 'tabular-nums' };

const ROLES = [
  { hex: T.action, name: 'Peacock teal', token: 'action', job: 'Anything you can tap, or that is on' },
  { hex: T.band, name: 'Band', token: 'brand-band', job: 'The one block of colour: four counts in white' },
  { hex: T.highlight, name: 'Haldi', token: 'highlight', job: 'Next, and your turn. Never text, never a stripe' },
  { hex: T.success, name: 'Green', token: 'success', job: 'Done and good, always as a tick or a dot' },
  { hex: T.warning, name: 'Amber', token: 'warning', job: 'Late, always as a clock, never a fill' },
  { hex: T.danger, name: 'Red', token: 'danger', job: 'No-shows, errors and destructive actions' },
];

const GROUNDS = [
  { hex: T.paper, name: 'paper', job: 'The mist behind everything' },
  { hex: T.raised, name: 'paper-raised', job: 'White surfaces, shadow instead of border' },
  { hex: T.ink, name: 'ink', job: 'Text and active icons' },
];

const STATS = [
  ['6', 'principles every value answers to'],
  ['1', 'colour for action; every other colour is a state'],
  ['2', 'languages, English and हिन्दी, one per screen'],
  ['6', 'rounds, each settled by a comparison or a measurement'],
];

const BEAT = [
  ['Peacock teal #0d7a86', 'three other teals on the booking screen', 'Furthest from done-green for normal vision: ΔE 40.8, against 29.7 for the runner-up', 'compared · measured'],
  ['A 72 / 48 / 26 / 22 / 18 / 16 / 14 / 12 type scale', 'Compact, Big numbers and Modular 1.25', 'Keeps four queue rows visible, the token clearly largest, and meta readable at 14', 'compared'],
  ['Anek Latin for display', 'Inter, Geist and IBM Plex', 'Its width axis fits T1046 in a 56px column at 22px, and it has a Devanagari sibling', 'measured'],
  ['“Next” as a haldi dot and the word', 'a filled tag and an outline tag', 'The quietest cue; the dot grew to 10px with a ring because haldi on white is 1.88:1', 'product decision'],
  ['Row actions as teal text', 'outlined buttons and tonal chips', 'A column of boxes was louder than the names; text gave names about 70px back', 'rendered'],
  ['Light theme only', 'light plus dark', 'Better acuity on light grounds at every age, front desks are bright, and every pair is verified once', 'cited'],
];

const panel = 'rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-7';
const eyebrow = 'text-[11px] tracking-[0.24em] uppercase text-ash';

function Canvas({ title, children, className = '' }) {
  return (
    <div className={`rounded-2xl p-5 md:p-7 h-full ${className}`} style={{ background: T.paper, color: T.ink }}>
      <div className="text-[11px] tracking-[0.24em] uppercase mb-5" style={{ color: T.inkMuted }}>{title}</div>
      {children}
    </div>
  );
}

function Stats() {
  return (
    <ScrollReveal>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.08]">
        {STATS.map(([v, l]) => (
          <li key={l} className="bg-graphite p-4 md:p-5">
            <div className="font-heading tracking-tightest text-silver text-2xl md:text-3xl leading-none">{v}</div>
            <div className="text-fog text-xs md:text-sm mt-2 leading-snug">{l}</div>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

function Colour() {
  return (
    <ScrollReveal>
      <div className={panel}>
        <div className={`${eyebrow} mb-5`}>Colour · every colour has one job</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {ROLES.map((r) => (
            <li key={r.token} className="flex items-start gap-3">
              <span className="w-11 h-11 rounded-[10px] shrink-0 ring-1 ring-white/10" style={{ background: r.hex }} aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-silver text-sm font-medium">
                  {r.name} <span className="text-ash font-normal tabular-nums">{r.hex}</span>
                </span>
                <span className="block text-fog text-xs md:text-sm leading-snug mt-0.5">{r.job}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4">
          {GROUNDS.map((g) => (
            <div key={g.name} className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-[10px] shrink-0 ring-1 ring-white/15" style={{ background: g.hex }} aria-hidden="true" />
              <span className="text-xs md:text-sm leading-snug">
                <span className="text-silver tabular-nums">{g.name} {g.hex}</span>
                <span className="block text-fog">{g.job}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

// Principle 1, rendered: each state has a shape and a word, so nobody depends
// on colour alone (teal/green are ΔE 10.9 apart under tritanopia, haldi/amber
// 15.7 under deuteranopia — no hue choice fixes both).
function States() {
  const row = (token, name, meta, action) => (
    <div className="flex items-center gap-3 px-4 min-h-[64px] border-b last:border-b-0" style={{ borderColor: '#eef1f3' }}>
      <span className="w-14 shrink-0 text-[22px] leading-7" style={{ fontFamily: display, fontWeight: 600, fontStretch: '85%', ...tab }}>{token}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] leading-6 truncate" style={{ fontWeight: 500 }}>{name}</span>
        <span className="flex items-center gap-1.5 text-[13px] leading-5" style={{ color: T.inkMuted }}>{meta}</span>
      </span>
      {action}
    </div>
  );
  return (
    <Canvas title="Every state says its word">
      <div className="rounded-xl overflow-hidden" style={{ background: T.raised, boxShadow: T.shadow }}>
        {row('T8', 'Divya Mehta', <>
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: T.highlight, boxShadow: '0 0 0 1px rgba(18,25,28,0.35)' }} aria-hidden="true" />
          <span style={{ color: T.ink, fontWeight: 600 }}>Next</span>
          <span>· 11:30 am · Filling</span>
        </>, <span className="text-[14px] shrink-0" style={{ color: T.inkMuted }}>Checked in</span>)}
        {row('T6', 'Pranav Kale', <>
          <LuClock size={14} style={{ color: T.warning }} aria-hidden="true" />
          <span style={{ color: T.onWarning }}>25 min late</span>
          <span>· 11:28 am</span>
        </>, <span className="text-[14px] shrink-0" style={{ color: T.actionInk, fontWeight: 600 }}>Check in</span>)}
        {row('T5', 'Arjun Sharma', <>
          <LuCheck size={14} style={{ color: T.success }} aria-hidden="true" />
          <span style={{ color: T.onSuccess }}>Done</span>
        </>, null)}
        {row('T3', 'Sana Iqbal', <>
          <LuX size={14} style={{ color: T.danger }} aria-hidden="true" />
          <span style={{ color: T.onDanger }}>No-show</span>
        </>, null)}
      </div>
      <p className="text-[13px] leading-relaxed mt-4" style={{ color: T.inkMuted }}>
        A dot, a clock, a tick and a cross, each with its word. Colour-blind pairs are told apart by
        shape, which also meets WCAG 1.4.1.
      </p>
    </Canvas>
  );
}

function Type() {
  return (
    <Canvas title="Type · Anek for our words, the phone's font for theirs">
      <div className="flex items-end gap-5 flex-wrap">
        <span className="leading-none" style={{ fontFamily: display, fontWeight: 600, fontStretch: '85%', fontSize: 72, ...tab }}>T7</span>
        <span className="pb-2">
          <span className="block text-[11px]" style={{ color: T.inkMuted }}>token-hero</span>
          <span className="block text-[13px]" style={{ color: T.inkMuted }}>72 · Anek 600 · width 85</span>
        </span>
      </div>
      <div className="mt-5 grid grid-cols-[56px_1fr] gap-x-3 gap-y-1 items-baseline">
        {['T7', 'T128', 'T1046'].map((t) => (
          <span key={t} className="contents">
            <span className="text-[22px] leading-7" style={{ fontFamily: display, fontWeight: 600, fontStretch: '85%', ...tab }}>{t}</span>
            <span className="text-[13px]" style={{ color: T.inkMuted }}>{t === 'T1046' ? 'still fits the fixed 56px column' : 'names stay lined up'}</span>
          </span>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        <div className="text-[26px] leading-8" style={{ fontFamily: display, fontWeight: 600 }}>Everyone&rsquo;s turn, in order.</div>
        <div className="text-[26px] leading-[40px]" style={{ fontFamily: deva, fontWeight: 600 }}>आपकी बारी</div>
        <div className="text-[16px] leading-6" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}>
          Ramesh Patel <span style={{ color: T.inkMuted }}>· typed by a person, so the system font</span>
        </div>
      </div>
      <p className="text-[13px] leading-relaxed mt-4" style={{ color: T.inkMuted }}>
        Every number is tabular: Anek&rsquo;s default &ldquo;1&rdquo; is 30.4 wide and &ldquo;0&rdquo; is 48.3, so counts would jiggle as they roll.
      </p>
    </Canvas>
  );
}

function Shape() {
  const box = (r, label, w = 72) => (
    <div className="flex flex-col items-center gap-2">
      <span className="h-12 flex items-center justify-center text-[13px]" style={{ width: w, borderRadius: r, background: T.raised, boxShadow: T.shadow, color: T.ink }}>{r}</span>
      <span className="text-[11px] text-center leading-tight" style={{ color: T.inkMuted }}>{label}</span>
    </div>
  );
  return (
    <Canvas title="Shape and surface">
      <div className="flex gap-4 flex-wrap">
        {box(10, 'controls')}
        {box(12, 'surfaces')}
        {box(20, 'sheets')}
      </div>
      <div className="mt-5 flex gap-3">
        <span className="h-11 px-5 inline-flex items-center rounded-[10px] text-[15px] text-white" style={{ background: T.action, fontWeight: 500 }}>Mark done</span>
        <span className="h-11 px-4 inline-flex items-center rounded-[10px] text-[15px]" style={{ border: `1px solid ${T.lineControl}`, background: T.raised }}>Walk-in</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl p-3 text-[12px] leading-snug" style={{ background: T.raised }}>No shadow: white on mist is 1.09:1</div>
        <div className="rounded-xl p-3 text-[12px] leading-snug" style={{ background: T.raised, boxShadow: T.shadow }}>With the card shadow</div>
      </div>
      <p className="text-[13px] leading-relaxed mt-4" style={{ color: T.inkMuted }}>
        No pill buttons or chips: soft pills were the strongest &ldquo;kiddish&rdquo; signal when rendered.
      </p>
    </Canvas>
  );
}

function Logo() {
  return (
    <Canvas title="The mark">
      <div className="flex items-center gap-6 flex-wrap">
        <span className="w-20 h-20 rounded-[18px] flex items-center justify-center" style={{ background: T.raised, boxShadow: T.shadow }}>
          <img src="/assets/baari/brand/baari-mark.svg" alt="" width={52} height={52} />
        </span>
        <span className="w-20 h-20 rounded-[18px] flex items-center justify-center" style={{ background: T.action }}>
          <img src="/assets/baari/brand/baari-mark-white.svg" alt="" width={52} height={52} />
        </span>
        <img src="/assets/baari/brand/baari-lockup.svg" alt="Baari logo" width={170} height={45} />
      </div>
      <p className="text-[13px] leading-relaxed mt-5" style={{ color: T.inkMuted }}>
        A lowercase b whose bowl holds the haldi dot: your turn. On a 64 grid, a 10-wide stem and a
        ring of radius 14. The app icon is the white b on a teal field.
      </p>
    </Canvas>
  );
}

function Beat() {
  return (
    <ScrollReveal>
      <div className={panel}>
        <div className={`${eyebrow} mb-5`}>Every value records what it beat</div>
        <ul className="divide-y divide-white/[0.06]">
          {BEAT.map(([chose, beat, why, ev]) => (
            <li key={chose} className="py-3.5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] gap-1 md:gap-6">
              <div>
                <div className="text-silver text-sm font-medium">{chose}</div>
                <div className="text-ash text-xs mt-0.5">beat {beat}</div>
              </div>
              <div className="text-fog text-sm leading-relaxed">
                {why}
                <span className="ml-2 text-[10px] tracking-[0.18em] uppercase text-ash whitespace-nowrap">{ev}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

export default function BaariDesignSystem() {
  return (
    <div className="space-y-6">
      <Stats />
      <Colour />
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <States />
          <Type />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <Shape />
          <Logo />
        </div>
      </ScrollReveal>
      <Beat />
    </div>
  );
}
