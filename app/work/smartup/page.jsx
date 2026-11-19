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

// A recording inside a phone frame. Autoplays muted and loops, except for
// people with reduced motion on: they get a still poster and controls.
function DecisionVideo({ video, poster, caption }) {
  const reduce = useReducedMotion();
  return (
    <ScrollReveal>
      <figure className="flex flex-col items-center">
        <PhoneFrame className="!max-w-[260px]">
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
            aria-label={caption}
          />
        </PhoneFrame>
        <figcaption className={`mt-4 ${EYEBROW} text-ash text-center`}>{caption}</figcaption>
      </figure>
    </ScrollReveal>
  );
}

// A still screen in the same phone frame, for a decision about one screen.
function DecisionStill({ src, alt, caption }) {
  return (
    <ScrollReveal>
      <figure className="flex flex-col items-center">
        <PhoneFrame src={src} alt={alt} className="!max-w-[260px]" />
        <figcaption className={`mt-4 ${EYEBROW} text-ash text-center`}>{caption}</figcaption>
      </figure>
    </ScrollReveal>
  );
}

// One design decision: a recording on one side, scannable pointers on the other.
function DecisionRow({ label, points, why, media, imgSide = 'left' }) {
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-10 border-t border-white/[0.06] first:border-t-0">
      {imgSide === 'left' ? <>{media}{text}</> : <><div className="order-2 md:order-1">{text}</div><div className="order-1 md:order-2">{media}</div></>}
    </div>
  );
}

// Front-loaded summary: freelance reality, own interviews, PM holding the call.
const GLANCE = [
  ['My role', 'Sole designer on a four-person team, brought in as a freelancer. I ran the user interviews and owned journey mapping, IA, wireframes and the final prototype.'],
  ['Scope', 'Inventory, sales, staff, reports and point of sale, moved from a desktop platform onto one phone app with a switch between modes.'],
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

function Showcase({ src, alt, aspect = '16/9' }) {
  return (
    <section className="py-10 md:py-14 px-5 md:px-10">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.05]"
            style={{ aspectRatio: aspect, background: `radial-gradient(60% 70% at 50% 45%, ${ACCENT}38, #0b0b0c 72%)` }}
          >
            <Image src={src} alt={alt} fill priority sizes="(max-width: 768px) 100vw, 90vw" className="object-contain p-6 md:p-10" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

// The desktop home against the mobile home, with the counts that make the cut visible.
function DeskVsPhone() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12 items-end">
      <ScrollReveal>
        <figure>
          <div className="relative w-full max-w-[481px] mx-auto md:mx-0" style={{ aspectRatio: '481/279' }}>
            <Zoom>
              <Image src="/assets/smartup/desktop-dashboard.png" alt="The SmartUp desktop home: six panels of payments, customers, transfers, purchases, sales and top products" fill sizes="481px" className="object-contain" />
            </Zoom>
          </div>
          <figcaption className="mt-5 border-t border-white/[0.12] pt-3">
            <div className="font-heading text-silver text-2xl md:text-3xl tracking-tightest">6 panels, 4 counters</div>
            <div className="text-ash text-sm mt-1">Desktop home, more than 30 figures</div>
          </figcaption>
        </figure>
      </ScrollReveal>
      <ScrollReveal>
        <figure className="max-w-[220px] mx-auto md:mx-0">
          <div className="relative w-full rounded-[28px] overflow-hidden border border-white/[0.12]" style={{ aspectRatio: '468/1013' }}>
            <Zoom>
              <Image src="/assets/smartup/screen-home.png" alt="The SmartUp mobile Home: three numbers for today, recent sales, a stock request and a New Sale card" fill sizes="220px" className="object-cover" />
            </Zoom>
          </div>
          <figcaption className="mt-5 border-t border-white/[0.12] pt-3">
            <div className="font-heading text-2xl md:text-3xl tracking-tightest" style={{ color: ACCENT }}>3 numbers</div>
            <div className="text-ash text-sm mt-1">Then 2 lists and 1 action</div>
          </figcaption>
        </figure>
      </ScrollReveal>
    </div>
  );
}

// How research worked when testing belonged to the client.
const LOOP = [
  ['Three user interviews', 'plus the client’s research document'],
  ['Needs, split by role', 'what each person must do in the moment'],
  ['Prototype round', 'both concepts first, then one app'],
  ['Client test, with my question list', 'answers came back through the product manager'],
];

function ResearchLoop() {
  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-8">
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {LOOP.map(([title, sub], i) => {
            const hot = i === LOOP.length - 1;
            return (
              <li
                key={title}
                className="rounded-xl border p-4 flex md:flex-col gap-3"
                style={hot ? { borderColor: `${ACCENT}8c`, background: `${ACCENT}1f` } : { borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full grid place-items-center text-xs font-medium"
                  style={hot ? { background: ACCENT, color: '#fff' } : { background: 'rgba(255,255,255,0.06)', color: '#B4B4B0' }}
                >
                  {i + 1}
                </span>
                <span>
                  <span className="block text-silver text-sm md:text-base font-medium leading-snug">{title}</span>
                  <span className="block text-ash text-sm mt-1 leading-snug">{sub}</span>
                </span>
              </li>
            );
          })}
        </ol>
        <div className="mt-4 text-right text-xs tracking-[0.12em] uppercase" style={{ color: ACCENT }}>↺ into the next round</div>
      </div>
    </ScrollReveal>
  );
}

const ROLES = [
  ['O', 'Owner', 'Pays for SmartUp · away from the shop', 'Is today on track?', 'The full spend breakdown'],
  ['M', 'Manager', 'Runs a branch · on the floor', 'Stock, staff and requests waiting', 'Logistics reports'],
  ['S', 'Floor staff', 'Mid-sale · customer waiting', 'Find it, charge it, give change', 'Everything else'],
];

function RoleCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {ROLES.map(([initial, who, where, need, never]) => (
        <ScrollReveal key={who}>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full grid place-items-center font-medium" style={{ background: `${ACCENT}24`, color: '#A48BFF' }}>{initial}</span>
              <div>
                <div className="font-heading text-silver text-lg tracking-tight">{who}</div>
                <div className="text-ash text-sm">{where}</div>
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.04] p-4">
              <div className={`${EYEBROW} text-ash mb-1`}>Needs in 10 seconds</div>
              <p className="text-silver text-base">{need}</p>
            </div>
            <div className="px-1">
              <div className={`${EYEBROW} text-ash mb-1`}>Never on a phone</div>
              <p className="text-ash text-base line-through decoration-white/30">{never}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
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
                <div className="font-heading text-5xl tracking-tightest leading-none" style={{ color: phone ? '#A48BFF' : desk ? '#7A7A76' : '#F4F4F2' }}>
                  {col.items.length}
                </div>
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
            <text x="0" y="268" fill="#7A7A76" fontSize="13.5">one app, a mode switch</text>
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

// The 2025 system as it shipped, documented from the screens, with an honest audit.
const PALETTE = [
  ['Primary purple', '#8778F7'],
  ['Primary green', '#00A16B'],
  ['Light purple', '#C8C8F8'],
  ['Light green', '#C7F4CE'],
  ['Secondary', '#505480'],
  ['Neutral', '#E7E7E7'],
];
const GRADIENTS = [['Stat card', '#A178F7', '#4C60DD'], ['Splash', '#59519A', '#7268C4']];
const AUDIT = [
  ['White text on the primary button', '#FFFFFF', '#8778F7', '3.5'],
  ['Purple prices and links on white', '#8778F7', '#FFFFFF', '3.5'],
  ['Green text on the green change tiles', '#00A16B', '#C7F4CE', '2.7'],
  ['White text on the stat card, light end', '#FFFFFF', '#A178F7', '3.2'],
  ['White text on the stat card, dark end', '#FFFFFF', '#4C60DD', '5.2'],
  ['Secondary colour on white', '#505480', '#FFFFFF', '7.2'],
];

function Chip({ fg, bg, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ color: fg, background: bg }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: fg }} aria-hidden="true" />
      {children}
    </span>
  );
}

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ScrollReveal>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6 space-y-5">
            <div className={`${EYEBROW} text-ash`}>Colour, named and checked</div>
            <div className="grid grid-cols-3 gap-3">
              {PALETTE.map(([name, hex]) => (
                <div key={hex}>
                  <div className="h-12 rounded-lg border border-white/[0.08]" style={{ background: hex }} />
                  <div className="text-silver text-xs mt-2">{name}</div>
                  <div className="text-ash text-xs font-mono">{hex}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {GRADIENTS.map(([name, a, b]) => (
                <div key={name}>
                  <div className="h-10 rounded-lg" style={{ background: `linear-gradient(120deg, ${a}, ${b})` }} />
                  <div className="text-silver text-xs mt-2">{name} gradient</div>
                  <div className="text-ash text-xs font-mono">{a} → {b}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="h-full rounded-2xl border border-white/[0.08] p-5 md:p-6 space-y-5" style={{ background: '#F6F5F8', color: '#1B1A3A' }}>
            <div className={`${EYEBROW}`} style={{ color: '#5F6183' }}>Components, rebuilt from the screens</div>
            <div className="rounded-2xl p-4 text-white grid grid-cols-3 gap-2" style={{ background: 'linear-gradient(120deg, #8062EC, #5D58D4)' }}>
              {[['Purchases', '6,150.00'], ['Customers', '102'], ['Sales', '16']].map(([k, v], i) => (
                <div key={k} className={i ? 'border-l border-white/25 pl-2' : ''}>
                  <div className="text-[11px] opacity-90">{k}</div>
                  <div className="text-lg font-bold leading-tight">{v}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip fg="#00845A" bg="#C7F4CE">Safe</Chip>
              <Chip fg="#C4373B" bg="#FBDADA">Warning</Chip>
              <Chip fg="#6B6E80" bg="#E7E7E7">Unknown</Chip>
              <Chip fg="#00845A" bg="#C7F4CE">Active</Chip>
              <Chip fg="#6E5FE0" bg="#ECEAFE">Fully paid</Chip>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-grid place-items-center h-11 px-6 rounded-xl text-white font-bold text-sm whitespace-nowrap shrink-0" style={{ background: '#8778F7' }}>Record Sale</span>
              <span
                className="w-14 h-14 shrink-0 grid place-items-center text-white text-3xl leading-none"
                style={{ background: '#7C6BF5', clipPath: 'polygon(50% 0, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
                aria-label="The hexagon New Sale button"
              >+</span>
              <span className="text-xs min-w-0" style={{ color: '#5F6183' }}>The hexagon sale button, centre of the tab bar</span>
            </div>
          </div>
        </ScrollReveal>
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
        {/* Hero */}
        <Showcase
          src="/assets/smartup/smartup-hero.png"
          alt="Three SmartUp phone screens: Home with today’s numbers, the splash screen, and the Sales list"
          aspect="16/9"
        />

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

        {/* Constraint story */}
        <Section title="I interviewed three active users, and the client ran the usability tests.">
          <Prose>
            The interviews gave one clear finding: people couldn’t run their
            shop once they left it. Testing ran through the client, so I sent
            my questions into every round. The product manager made the final
            calls, and two engineers on a tight budget made build cost a design
            input.
          </Prose>
          <div className="pt-4">
            <ResearchLoop />
          </div>
        </Section>

        {/* Roles */}
        <Section title="Owners, managers and floor staff each needed a different minute of the app." tone="sunken">
          <RoleCards />
          <p className="text-ash text-sm">One phone had to serve all three.</p>
        </Section>

        {/* The guiding rule */}
        <Section title="One question decided what made it to the phone.">
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
        <Section title="Two planned apps became one." tone="sunken">
          <Prose>
            The brief planned a Control Panel for managers and a POS Lite for
            floor staff. I took both far enough to compare. The product manager
            chose to merge them: one install, one thing to learn, one codebase
            for two engineers. My job became one navigation for both, with a
            switch between modes.
          </Prose>
          <div className="pt-4">
            <NavEvolution />
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

        {/* Key design decisions */}
        <Section title="Home opens on today, a sale closes in one sheet, and every stock change has a name on it.">
          <div>
            <DecisionRow
              label="Home opens on today"
              points={[
                'Today’s numbers first, then only what needs a reply: recent sales and stock requests from other branches.',
                'The sale button sits in the centre of the navigation, never inside a menu.',
              ]}
              why="A shop floor doesn’t need the company’s spend breakdown."
              media={<DecisionStill src="/assets/smartup/screen-home.png" alt="SmartUp Home: three numbers for today, recent sales, a stock request, and the hexagon sale button in the centre of the tab bar" caption="Home" />}
              imgSide="right"
            />
            <DecisionRow
              label="A sale closes with a customer waiting"
              points={[
                'One sheet takes the payment and works out the change as the cashier types.',
                'Discounts and notes stay folded away until needed.',
              ]}
              why="This is a transaction under time pressure, not an admin session."
              media={<DecisionVideo video="/assets/smartup/recording-sales.mp4" poster="/assets/smartup/recording-sales-poster.jpg" caption="Recording a sale" />}
              imgSide="left"
            />
            <DecisionRow
              label="Stock records answer “who changed this?”"
              points={[
                'Each adjustment carries who, when, where, how many and why.',
                'Items show Safe, Warning or Unknown instead of a number to read.',
              ]}
              why="A stock dispute gets settled from the record, not a phone call."
              media={<DecisionVideo video="/assets/smartup/managing-inventory.mp4" poster="/assets/smartup/managing-inventory-poster.jpg" caption="Managing inventory" />}
              imgSide="right"
            />
          </div>
        </Section>

        {/* Cuts */}
        <Section title="What was deliberately cut" tone="sunken">
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
        <Section title="Test users asked when they could start using it.">
          <div className="space-y-0 divide-y divide-white/[0.06]">
            {RESULTS.map((row) => (
              <ScrollReveal key={row.num}>
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-8 md:py-10">
                  <div>
                    <span className="font-heading tracking-tightest leading-none" style={{ color: ACCENT, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.04em' }}>
                      {row.num}
                    </span>
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
        <Section title="One small system ran every screen." tone="sunken">
          <Prose>
            The visual system lived on one style tile: a palette, two gradients,
            one icon set and Albert Sans. I documented the system the screens
            actually used,
            then audited it a year later. Four of the six text pairings fail
            contrast, starting with the main button, which is the first thing I
            would fix.
          </Prose>
          <div className="pt-4">
            <SystemBoard />
          </div>
        </Section>

        {/* Reflection */}
        <Section title="What I learned">
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
