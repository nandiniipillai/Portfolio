'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { motion, useReducedMotion } from 'framer-motion';
import CaseStudyShell from '@/components/CaseStudyShell';
import { Section, Prose, SubList, PullQuote } from '@/components/CaseBits';
import PhoneFrame from '@/components/PhoneFrame';
import ScrollReveal from '@/components/ScrollReveal';
import CaseStudyNav from '@/components/CaseStudyNav';

const ACCENT = '#7C5CFC';
const EYEBROW = 'text-[11px] tracking-[0.24em] uppercase';
const V4 = '/assets/smartup/v4';

// A real screen in a phone frame, with an optional caption underneath.
function Screen({ src, alt, caption, className = '' }) {
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <PhoneFrame src={src} alt={alt} className="!max-w-none" />
      {caption && <figcaption className="mt-3 text-ash text-xs md:text-sm text-center leading-snug max-w-[220px]">{caption}</figcaption>}
    </figure>
  );
}

// A recording in a phone frame. Muted loop, or a still with controls for reduced motion.
function Recording({ video, poster, label }) {
  const reduce = useReducedMotion();
  return (
    <figure className="flex flex-col items-center">
      <PhoneFrame className="!max-w-[300px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          poster={poster}
          autoPlay={!reduce}
          controls={!!reduce}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Screen recording: ${label}`}
        />
      </PhoneFrame>
      <figcaption className={`mt-4 ${EYEBROW} text-ash`}>{label}</figcaption>
    </figure>
  );
}

// Hero: three real, flat screens at full width, the way the other studies open on their product.
function Hero() {
  return (
    <section className="py-10 md:py-14 px-5 md:px-10">
      <ScrollReveal>
        <div
          className="mx-auto max-w-7xl rounded-2xl border border-white/[0.05] px-6 md:px-16 pt-10 md:pt-14 pb-0 overflow-hidden"
          style={{ background: `radial-gradient(70% 80% at 50% 30%, ${ACCENT}40, #0b0b0c 75%)` }}
        >
          <div className="grid grid-cols-3 gap-3 md:gap-10 max-w-4xl mx-auto items-end">
            <div className="translate-y-6 md:translate-y-10"><PhoneFrame src={`${V4}/home.jpg`} alt="SmartUp Home: today’s numbers, recent sales and a stock request" className="!max-w-none" /></div>
            <div><PhoneFrame src={`${V4}/process-sale.jpg`} alt="SmartUp Point of Sale: the Process Sale sheet" className="!max-w-none" /></div>
            <div className="translate-y-6 md:translate-y-10"><PhoneFrame src={`${V4}/stock-list.jpg`} alt="SmartUp Inventory: warehouse stock with Safe, Warning and Unknown labels" className="!max-w-none" /></div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// Front-loaded summary: freelance reality, own interviews, PM holding the call.
const GLANCE = [
  ['My role', 'Sole designer on a four-person team, brought in as a freelancer. I ran the user interviews and owned journey mapping, IA, wireframes and the final prototype.'],
  ['Scope', 'Inventory, sales, staff, reports and point of sale, moved from a desktop platform onto one phone app for managers and floor staff.'],
  ['Outcome', 'A validated prototype that test users asked to keep. The client used it in funding talks, and engineers built it out after handoff.'],
];

function AtAGlance() {
  return (
    <section className="px-5 md:px-10">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-y border-white/[0.08] py-8 md:py-10">
        {GLANCE.map(([label, body]) => (
          <ScrollReveal key={label}>
            <div className={`${EYEBROW} mb-2`} style={{ color: ACCENT }}>{label}</div>
            <p className="text-fog text-sm md:text-base leading-relaxed">{body}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// The 2025 desktop home, redrawn as a schematic of its real layout.
const DESK_COUNTERS = ['Open branches', 'Closed branches', 'Active staff', 'Inactive staff'];
const DESK_PANELS = [
  ['Payment modes by sales', 'row-span-2'],
  ['Last 30 days', ''],
  ['Your business at a glance', 'row-span-2'],
  ['Transfer requests', ''],
  ['Transfers', ''],
  ['Top products by sales', ''],
];

function DeskSchematic() {
  return (
    <div className="rounded-xl border border-white/[0.12] bg-white/[0.03] p-3 md:p-4">
      <div className="flex gap-3">
        <div className="hidden sm:flex flex-col gap-2 w-8 shrink-0 pt-1" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => <span key={i} className="h-5 rounded bg-white/[0.07]" />)}
        </div>
        <div className="flex-1 min-w-0 space-y-3">
          <div className="text-center text-fog text-xs">Good morning</div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {DESK_COUNTERS.map((c) => <span key={c} className="text-[10px] md:text-[11px] text-fog rounded-full border border-white/[0.14] px-2 py-0.5">{c}</span>)}
          </div>
          <div className="grid grid-cols-3 auto-rows-[52px] md:auto-rows-[64px] gap-2">
            {DESK_PANELS.map(([name, span]) => (
              <div key={name} className={`rounded-lg border border-white/[0.12] bg-white/[0.04] p-2 ${span}`}>
                <div className="text-[10px] md:text-xs text-silver leading-tight">{name}</div>
                <div className="mt-1.5 space-y-1" aria-hidden="true">
                  <span className="block h-1 rounded bg-white/[0.1] w-4/5" />
                  <span className="block h-1 rounded bg-white/[0.1] w-3/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeskVsPhone() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12 items-end">
      <ScrollReveal>
        <figure>
          <DeskSchematic />
          <figcaption className="mt-5 border-t border-white/[0.12] pt-3">
            <div className="font-heading text-silver text-2xl md:text-3xl tracking-tightest">6 panels, 4 counters</div>
            <div className="text-ash text-sm mt-1">The desktop home, redrawn from the 2025 product</div>
          </figcaption>
        </figure>
      </ScrollReveal>
      <ScrollReveal>
        <figure className="max-w-[220px] mx-auto md:mx-0 w-full">
          <PhoneFrame src={`${V4}/home.jpg`} alt="The SmartUp mobile Home: three numbers for today, recent sales, a stock request and a New Sale card" className="!max-w-none" />
          <figcaption className="mt-5 border-t border-white/[0.12] pt-3">
            <div className="font-heading text-2xl md:text-3xl tracking-tightest" style={{ color: ACCENT }}>3 numbers</div>
            <div className="text-ash text-sm mt-1">Then 2 lists and 1 action</div>
          </figcaption>
        </figure>
      </ScrollReveal>
    </div>
  );
}

// The 2025 journey map, rebuilt from its own stages, feelings and opportunities.
const JOURNEY = [
  ['Onboarding', 'Excited and curious', 'Brief information to get started, and a simple log-in.'],
  ['Home', 'Expectant and eager to explore', 'Show the key navigation well, with quick ways to explore.'],
  ['Track inventory', 'Productive and in control', 'Simple ways to show data without overwhelming anyone.'],
  ['Track sales', 'Anxious but open-minded', 'Clear tips and help in context, through the process.'],
  ['Point of sale', 'Confused', 'Keep the flow simple, straightforward and informative.'],
];

function JourneyMap() {
  return (
    <ScrollReveal>
      <figure className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-7">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-10 rounded-full grid place-items-center font-medium" style={{ background: `${ACCENT}24`, color: '#A48BFF' }}>SO</span>
          <div>
            <div className="text-silver font-medium">Store owner</div>
            <div className="text-ash text-sm">The persona on my 2025 journey map</div>
          </div>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {JOURNEY.map(([stage, feeling, opportunity], i) => {
            const low = i === JOURNEY.length - 1;
            return (
              <li key={stage} className="rounded-xl border p-4 flex flex-col gap-3" style={low ? { borderColor: `${ACCENT}8c`, background: `${ACCENT}1a` } : { borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className={`${EYEBROW} text-ash`}>{String(i + 1).padStart(2, '0')}</div>
                <div className="text-silver font-medium leading-tight">{stage}</div>
                <div className="text-sm leading-snug" style={{ color: low ? '#C9B8FF' : '#A48BFF' }}>{feeling}</div>
                <div className="mt-auto rounded-lg bg-white/[0.04] p-3 text-fog text-sm leading-snug">{opportunity}</div>
              </li>
            );
          })}
        </ol>
        <figcaption className="mt-4 text-ash text-sm">Rebuilt from my 2025 journey map: its stages, the feeling at each, and the opportunity I wrote for it.</figcaption>
      </figure>
    </ScrollReveal>
  );
}

// Every desktop module lands in exactly one column.
const TRIAGE = [
  {
    key: 'phone', title: 'On the phone', note: 'Needed for a decision on the spot.',
    items: [['Today’s numbers', 'Purchases, customers, sales processed'], ['Recent sales'], ['Point of sale', 'Start and record a sale'], ['Sales transactions'], ['Warehouse stock'], ['Stock transfers'], ['Stock requests from other branches'], ['Stock adjustments', 'Who, when, where, how many, why'], ['Staff members and activity logs']],
  },
  {
    key: 'simpler', title: 'Made simpler', note: 'Came across, in a lighter form.',
    items: [['Stock level', 'A number to read → Safe, Warning or Unknown'], ['Dashboard', 'Six panels → three numbers and what needs a reply'], ['Reports', 'Full reporting → overview, payment modes, last 30 days']],
  },
  {
    key: 'desk', title: 'Stayed on desktop', note: 'For planning, at a desk.',
    items: [['Financial dashboards', 'How much money is used, and where'], ['Logistics'], ['Spend breakdowns'], ['Report archives']],
  },
];

function TriageBoard() {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden grid grid-cols-1 md:grid-cols-[1.25fr_1fr_1fr]">
        {TRIAGE.map((col) => {
          const phone = col.key === 'phone';
          const desk = col.key === 'desk';
          return (
            <div
              key={col.key}
              className="p-5 md:p-6 space-y-4 border-b md:border-b-0 md:border-r last:border-0 border-white/[0.08]"
              style={desk ? { background: 'repeating-linear-gradient(135deg, transparent 0 10px, rgba(255,255,255,0.03) 10px 11px)' } : undefined}
            >
              <div>
                <div className="font-heading text-5xl tracking-tightest leading-none" style={{ color: phone ? '#A48BFF' : desk ? '#7A7A76' : '#F4F4F2' }}>{col.items.length}</div>
                <div className="font-heading text-silver text-lg mt-2">{col.title}</div>
                <div className="text-ash text-sm">{col.note}</div>
              </div>
              <ul className="space-y-2">
                {col.items.map(([name, sub]) => (
                  <li
                    key={name}
                    className={`rounded-lg px-3 py-2.5 text-sm ${desk ? 'border border-dashed border-white/20 text-fog' : 'text-silver border'}`}
                    style={phone ? { background: `${ACCENT}24`, borderColor: `${ACCENT}8c` } : desk ? undefined : { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}
                  >
                    {name}
                    {sub && <span className="block text-ash text-xs mt-0.5">{sub}</span>}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
}

// The merge drawn in the one place a reader can check it: the tab bar.
function NavEvolution() {
  const tab = (x, y, label, moved) => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width="126" height="56" rx="14" fill={moved ? `${ACCENT}24` : '#18181B'} stroke={moved ? ACCENT : 'rgba(255,255,255,0.12)'} strokeWidth="1.5" />
      <text x={x + 63} y={y + 34} textAnchor="middle" fill="#F4F4F2" fontSize="17" fontWeight="500">{label}</text>
    </g>
  );
  const plus = (y) => (
    <g key={`plus-${y}`}>
      <rect x="582" y={y} width="56" height="56" rx="18" fill={ACCENT} />
      <path d={`M610 ${y + 16}v24M598 ${y + 28}h24`} stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
  const link = (d, hot) => <path key={d} d={d} fill="none" stroke={hot ? ACCENT : 'rgba(255,255,255,0.18)'} strokeWidth={hot ? 2.5 : 1.5} />;
  return (
    <ScrollReveal>
      <figure className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
        <div className="overflow-x-auto px-4 md:px-6 pt-6 pb-2">
          <svg viewBox="0 0 1020 500" className="block w-full min-w-[680px] h-auto" role="img" aria-label="Three tab bars. Control Panel: Home, Inventory, Sales, Staff, Reports. POS Lite: Home, a sale button, Sales. Shipped app: Home, Inventory, a centre sale button, Sales, More. The sale button came from POS Lite; Staff and Reports moved under More.">
            {link('M290 108 V222')}{link('M450 108 V222')}{link('M610 108 C610 170 770 160 770 222')}
            {link('M770 108 C770 170 918 160 918 222', true)}{link('M930 108 C930 154 942 176 942 222', true)}
            {link('M290 392 V278')}{link('M610 392 V278', true)}{link('M770 392 V278')}
            <text x="0" y="74" fill="#F4F4F2" fontSize="19" fontWeight="600">Control Panel</text>
            <text x="0" y="96" fill="#7A7A76" fontSize="13.5">for managers</text>
            {tab(227, 52, 'Home')}{tab(387, 52, 'Inventory')}{tab(547, 52, 'Sales')}{tab(707, 52, 'Staff', true)}{tab(867, 52, 'Reports', true)}
            <text x="0" y="246" fill="#F4F4F2" fontSize="19" fontWeight="600">Shipped app</text>
            <text x="0" y="268" fill="#7A7A76" fontSize="13.5">one app, both roles</text>
            <rect x="213" y="206" width="794" height="88" rx="22" fill="none" stroke={ACCENT} strokeWidth="1.5" />
            {tab(227, 222, 'Home')}{tab(387, 222, 'Inventory')}{plus(222)}{tab(707, 222, 'Sales')}{tab(867, 222, 'More', true)}
            <text x="1004" y="320" textAnchor="end" fill="#A48BFF" fontSize="13.5">holds Staff and Reports</text>
            <text x="574" y="346" textAnchor="end" fill="#A48BFF" fontSize="13.5">the sale button, centred</text>
            <text x="0" y="414" fill="#F4F4F2" fontSize="19" fontWeight="600">POS Lite</text>
            <text x="0" y="436" fill="#7A7A76" fontSize="13.5">for floor staff</text>
            {tab(227, 392, 'Home')}{plus(392)}{tab(707, 392, 'Sales')}
          </svg>
        </div>
        <figcaption className="px-5 md:px-6 py-4 border-t border-white/[0.08] text-fog text-sm">
          <span className="text-silver">Two navigations, merged into one.</span> The sale button came across from POS Lite and took the centre. Staff and Reports moved under More, which left room for it.
        </figcaption>
      </figure>
    </ScrollReveal>
  );
}

// The 2025 IA map, rebuilt from its own labels.
const IA = [
  ['Home', ['Search', 'Summary report', 'Recent sales', 'Requests', 'New sale']],
  ['Inventory', ['Warehouse stock', 'Stock transfer', 'Stock requests', 'Stock adjustments', 'Filter']],
  ['Sales', ['Sales summary', 'Sales transactions', 'Individual sale items']],
  ['More', ['Staff', 'Reports', 'Notifications', 'Display settings', 'Sync data', 'Help centre', 'Feedback', 'Log out']],
];

function IAMap() {
  return (
    <ScrollReveal>
      <figure className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {IA.map(([tab, items]) => (
            <div key={tab} className="rounded-xl border border-white/[0.08] overflow-hidden">
              <div className="px-4 py-3 text-silver font-medium border-b border-white/[0.08]" style={tab === 'More' ? { background: `${ACCENT}24`, color: '#C9B8FF' } : undefined}>{tab}</div>
              <ul className="p-4 space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="text-sm" style={tab === 'More' && (it === 'Staff' || it === 'Reports') ? { color: '#A48BFF' } : { color: '#B4B4B0' }}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <figcaption className="mt-4 text-ash text-sm">Rebuilt from my 2025 IA map. Staff and Reports, two whole tabs in the Control Panel, became two rows under More.</figcaption>
      </figure>
    </ScrollReveal>
  );
}

// The hardest flow, five real screens in order.
const SALE_FLOW = [
  ['pos-list', 'Pick items', 'Tap + to add. A bar counts what is selected.'],
  ['process-sale', 'Process the sale', 'Quantity and discount per item, then the customer type.'],
  ['charge', 'Charge the customer', 'Payment method and amount; the tiles work out the change.'],
  ['recorded', 'Sale recorded', 'A clear confirmation before anything else.'],
  ['receipt', 'Receipt', 'Print or email it, then straight into a new sale.'],
];

function SaleFlow() {
  return (
    <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-5 gap-y-10">
      {SALE_FLOW.map(([file, step, line], i) => (
        <li key={file} className="min-w-0">
          <ScrollReveal>
            <div className={`${EYEBROW} mb-3`} style={{ color: ACCENT }}>{String(i + 1).padStart(2, '0')} · {step}</div>
            <PhoneFrame src={`${V4}/${file}.jpg`} alt={`Point of sale, step ${i + 1}: ${step}`} className="!max-w-none" />
            <p className="mt-3 text-fog text-sm leading-snug">{line}</p>
          </ScrollReveal>
        </li>
      ))}
    </ol>
  );
}

// One design decision: real screens on one side, scannable pointers on the other.
function DecisionRow({ label, points, why, media, imgSide = 'left', wide = false }) {
  const text = (
    <ScrollReveal>
      <div className="space-y-3">
        <div className={`${EYEBROW} text-ash`}>Design decision</div>
        <h3 className="font-heading tracking-tightest text-silver text-xl md:text-2xl leading-tight">{label}</h3>
        <ul className="space-y-2 mt-1">
          {points.map((p, i) => (
            <li key={i} className="pl-5 relative text-fog text-sm md:text-base leading-relaxed">
              <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
        {why && (
          <p className="text-fog text-sm leading-relaxed pt-1">
            <span className={`${EYEBROW} mr-2`} style={{ color: ACCENT }}>Why</span>
            {why}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
  if (wide) {
    // Pointers first, then the screens across the full width, so three phones stay readable.
    return (
      <div className="py-10 md:py-12 border-t border-white/[0.06] first:border-t-0 space-y-8">
        <div className="max-w-2xl">{text}</div>
        {media}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-8 md:gap-12 items-center py-10 md:py-12 border-t border-white/[0.06] first:border-t-0">
      {imgSide === 'left' ? <>{media}{text}</> : <><div className="order-2 md:order-1">{text}</div><div className="order-1 md:order-2">{media}</div></>}
    </div>
  );
}

// The 2025 system as it shipped: the tile, four real crops, and an honest audit.
const AUDIT = [
  ['White text on the primary button', '#FFFFFF', '#8778F7', '3.5'],
  ['Purple prices and links on white', '#8778F7', '#FFFFFF', '3.5'],
  ['Green text on the green change tiles', '#00A16B', '#C7F4CE', '2.7'],
  ['White text on the stat card, light end', '#FFFFFF', '#A178F7', '3.2'],
  ['White text on the stat card, dark end', '#FFFFFF', '#4C60DD', '5.2'],
  ['Secondary colour on white', '#505480', '#FFFFFF', '7.2'],
];
const CROPS = [
  ['ds-stat-card.png', 600, 174, 'Stat card', 'Three numbers for today. The only gradient in the app.'],
  ['ds-tab-bar.png', 620, 136, 'Tab bar', 'The hexagon lifts the sale above the bar.'],
  ['ds-stock-rows.png', 600, 509, 'Status labels', 'Safe, Warning, Unknown: a word instead of a count.'],
  ['ds-button-pair.png', 556, 90, 'Button pair', 'Two equal buttons. White on this purple is 3.5 to 1.'],
];

function SystemBoard() {
  return (
    <div className="space-y-4">
      <ScrollReveal>
        <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white">
          <Zoom>
            <Image src="/assets/smartup/style-tile-2025.png" alt="The original SmartUp style tile: colour swatches, filled and outlined icons, logo variations and the Albert Sans typeface" width={1349} height={506} sizes="(max-width: 1024px) 100vw, 1024px" className="w-full h-auto" />
          </Zoom>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CROPS.map(([file, w, h, name, note]) => (
          <ScrollReveal key={file}>
            <figure className="h-full rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col">
              <div className="flex-1 grid place-items-center p-5" style={{ background: '#F6F5F8' }}>
                <Image src={`${V4}/${file}`} alt={`${name}, cropped from the 2025 screens`} width={w} height={h} sizes="(max-width: 768px) 90vw, 440px" className="w-full h-auto max-w-[440px] rounded-md" />
              </div>
              <figcaption className="px-5 py-4 border-t border-white/[0.08]">
                <div className="text-silver font-medium">{name}</div>
                <div className="text-fog text-sm mt-0.5">{note}</div>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <caption className={`text-left px-5 pt-5 pb-2 ${EYEBROW} text-ash`}>Audit, a year later: text needs 4.5 to 1</caption>
            <tbody>
              {AUDIT.map(([where, fg, bg, ratio]) => {
                const pass = parseFloat(ratio) >= 4.5;
                return (
                  <tr key={where} className="border-t border-white/[0.06]">
                    <td className="px-5 py-3 w-14">
                      <span className="inline-grid place-items-center w-9 h-7 rounded-md text-xs font-bold border border-white/[0.08]" style={{ color: fg, background: bg }}>Aa</span>
                    </td>
                    <td className="py-3 pr-4 text-fog">{where}</td>
                    <td className="py-3 pr-4 text-silver font-mono whitespace-nowrap">{ratio} : 1</td>
                    <td className="py-3 pr-5 text-right">
                      <span className={`${EYEBROW} rounded px-2 py-1 border`} style={pass ? { color: '#7FD1A4', borderColor: '#7FD1A466' } : { color: '#F08A7A', borderColor: '#F08A7A66' }}>
                        {pass ? 'Pass' : 'Fails'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ScrollReveal>
    </div>
  );
}

const RESULTS = [
  { num: '01', phase: 'At validation', headline: 'Users didn’t want the demo to end.', support: 'In client testing, participants asked when they could start using the prototype for real.' },
  { num: '02', phase: 'With stakeholders', headline: 'The prototype outlived the design phase.', support: 'The client used it in partnership and funding conversations.' },
  { num: '03', phase: 'After handoff', headline: 'It was built and put to work.', support: 'Engineers built it out after handoff, and retail businesses use it, as reported by the product manager.' },
];

export default function SmartUpPage() {
  return (
    <>
      {/* Outside the motion.div: its `filter` animation would become the
          containing block for the rail's position:fixed. */}
      <CaseStudyNav accent={ACCENT} />
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.5 }}
      >
      <CaseStudyShell
        slug="smartup"
        index="04"
        accent={ACCENT}
        title="SmartUp"
        oneLiner="Stock, sales and staff, in a retailer’s pocket."
        meta={[
          ['Role', 'UX & Product Designer'],
          ['Team', ['Product Manager', 'Front-end developer', 'Back-end developer']],
          ['Type', ['Freelance', 'B2B retail SaaS']],
          ['Status', 'Built & adopted post-handoff'],
        ]}
      >
        <Hero />

        <AtAGlance />

        {/* Problem */}
        <Section title="Every decision waited for someone at a desk." tone="sunken">
          <Prose>
            SmartUp Retail ran stock, sales, staff and spend, but only on a
            computer. Anyone on the shop floor had to walk back to a screen to
            check stock or see the day’s sales. The client’s research showed
            customers leaving, and teams on the move were stuck at a desk. I
            joined as the sole designer to put the product on a phone.
          </Prose>
          <div className="pt-6">
            <DeskVsPhone />
          </div>
        </Section>

        {/* Research */}
        <Section title="I interviewed three active users, and the client ran the usability tests.">
          <Prose>
            The interviews gave one clear finding: people couldn’t run their
            shop once they left it. I mapped a store owner’s journey through the
            app, stage by stage. Testing ran through the client, so I sent my
            questions into every round, and the product manager made the final
            calls.
          </Prose>
          <div className="pt-4">
            <JourneyMap />
          </div>
        </Section>

        {/* The guiding rule */}
        <Section title="One question decided what made it to the phone." tone="sunken">
          <PullQuote>
            If someone is standing in the store, what do they need right now?
          </PullQuote>
          <Prose>
            I put every desktop module through that test. Anything needed for a
            decision on the spot came to the phone. Anything for planning stayed
            on the desk.
          </Prose>
          <div className="pt-4">
            <TriageBoard />
          </div>
        </Section>

        {/* The merge */}
        <Section title="Two planned apps became one.">
          <Prose>
            The brief planned a Control Panel for managers and a POS Lite for
            floor staff. I took both far enough to compare. The product manager
            chose to merge them: one install, one thing to learn, one codebase
            for two engineers. My job became one navigation that worked for both.
          </Prose>
          <div className="pt-4 space-y-4">
            <NavEvolution />
            <IAMap />
          </div>
          <ScrollReveal>
            <figure className="pt-4">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white">
                <Zoom>
                  <Image src="/assets/smartup/wireframes-concepts.jpg" alt="Wireframes of both concepts: five Control Panel screens, then two POS Lite screens with a centre sale button" width={1816} height={522} sizes="(max-width: 1024px) 100vw, 1024px" className="w-full h-auto" />
                </Zoom>
              </div>
              <figcaption className={`mt-3 ${EYEBROW} text-ash`}>Both concepts in wireframe. POS Lite is the two outlined screens on the right.</figcaption>
            </figure>
          </ScrollReveal>
        </Section>

        {/* The hardest flow */}
        <Section title="The hardest flow was the sale." tone="sunken">
          <Prose>
            Point of sale started life as a desktop form. On the phone it had to
            work with a customer waiting at the counter, and it was the one stage
            of my journey map marked confused. I broke it into five screens,
            each with one job.
          </Prose>
          <div className="pt-6">
            <SaleFlow />
          </div>
          <SubList
            items={[
              'Change is worked out on the charge sheet, so nobody counts it in their head.',
              'Discounts and notes stay folded away until someone needs them.',
              '“Record as old sale” covers a sale first written on paper.',
            ]}
          />
        </Section>

        {/* Decisions */}
        <Section title="Home opens on today. Stock changes carry a name.">
          <div>
            <DecisionRow
              label="Home opens on today"
              points={[
                'Today’s numbers first, then only what needs a reply: recent sales and stock requests from other branches.',
                'From mid-fi to final, the dark stat card took the brand gradient, a stock promo became the New sale card, and the round sale button became the hexagon.',
              ]}
              why="A shop floor doesn’t need the company’s spend breakdown."
              media={
                <ScrollReveal>
                  <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-[520px] mx-auto">
                    <Screen src={`${V4}/midfi-home.jpg`} alt="Mid-fidelity Home in greyscale, with a dark stat card, a stock promo and a round sale button" caption="Mid-fi" />
                    <Screen src={`${V4}/home.jpg`} alt="Final Home with the gradient stat card, the New sale card and the hexagon sale button" caption="Final" />
                  </div>
                </ScrollReveal>
              }
              imgSide="left"
            />
            <DecisionRow
              label="Stock records answer “who changed this?”"
              points={[
                'Items show Safe, Warning or Unknown instead of a number to read.',
                'Requests from other branches are accepted or declined in place, and every adjustment carries who, when, where, how many and why.',
              ]}
              why="A stock dispute gets settled from the record, not a phone call."
              wide
              media={
                <ScrollReveal>
                  <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-[820px] mx-auto">
                    <Screen src={`${V4}/stock-list.jpg`} alt="Warehouse stock with Safe, Warning and Unknown labels" caption="Stock" />
                    <Screen src={`${V4}/stock-requests.jpg`} alt="A stock request from East Legon branch with Accept and Decline" caption="Requests" />
                    <Screen src={`${V4}/stock-adjustments.jpg`} alt="Stock adjustments, each with who, timestamp, location, quantity and reason" caption="Adjustments" />
                  </div>
                </ScrollReveal>
              }
              imgSide="right"
            />
          </div>
        </Section>

        {/* Motion */}
        <Section title="See it in motion" tone="sunken">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 md:gap-10 items-start">
            <ScrollReveal><Recording video="/assets/smartup/onboarding.mp4" poster="/assets/smartup/onboarding-poster.jpg" label="Onboarding and Home" /></ScrollReveal>
            <ScrollReveal><Recording video="/assets/smartup/recording-sales.mp4" poster="/assets/smartup/recording-sales-poster.jpg" label="Recording a sale" /></ScrollReveal>
            <ScrollReveal><Recording video="/assets/smartup/managing-inventory.mp4" poster="/assets/smartup/managing-inventory-poster.jpg" label="Managing inventory" /></ScrollReveal>
          </div>
        </Section>

        {/* Cuts */}
        <Section title="What was deliberately cut">
          <SubList
            items={[
              'Financial and logistics dashboards. The cost: owners can’t review spend on the go.',
              'Report archives. The cost: trend questions need a laptop.',
              'Two specialised apps. The cost: one shared navigation has to work for both roles.',
              'Feature parity. The cost: some users will ask for what’s missing.',
            ]}
          />
        </Section>

        {/* Result */}
        <Section title="Test users asked when they could start using it." tone="sunken">
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {RESULTS.map((row) => (
              <ScrollReveal key={row.num}>
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-8 md:py-10">
                  <div>
                    <span className="font-heading tracking-tightest leading-none" style={{ color: ACCENT, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.04em' }}>{row.num}</span>
                    <div className={`${EYEBROW} text-ash mt-2`}>{row.phase}</div>
                  </div>
                  <div>
                    <p className="font-heading tracking-tight text-silver text-xl md:text-2xl leading-tight">{row.headline}</p>
                    <p className="text-fog text-base md:text-lg leading-relaxed mt-3 max-w-2xl">{row.support}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        {/* Design system, as shipped */}
        <Section title="One small system ran every screen.">
          <Prose>
            The visual system lived on one style tile: a palette, two gradients,
            one icon set and Albert Sans. I documented the system the screens
            actually used, then audited it a year later. Four of the six text
            pairings fail contrast, starting with the main button, which is the
            first thing I would fix.
          </Prose>
          <div className="pt-4">
            <SystemBoard />
          </div>
        </Section>

        {/* Reflection */}
        <Section title="What I learned" tone="sunken">
          <SubList
            items={[
              'When the decision isn’t mine, my job is to make every option strong enough to choose between.',
              'When I can’t run the tests, I can still shape them with my questions.',
              'I designed the tidy sale first. Next time I start with the day everything goes wrong: a declined card, no signal, a refund.',
              'Next time I’d agree measures at kickoff, starting with the time to close a sale.',
            ]}
          />
        </Section>
      </CaseStudyShell>
      </motion.div>
    </>
  );
}
