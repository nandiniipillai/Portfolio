# AGENTS.md

Working guide for AI coding agents on this codebase. Read before editing.

## What this is

Nandini Pillai's product-design portfolio. Deployed on Vercel at a personal
domain. Single Next.js app, no backend, no auth. Content is authored directly
in JSX + a single data file.

Nandini is a UK-based product & experience designer. She is the sole reviewer
and pushes to `main` / promotes deploys herself.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **JavaScript** — no TypeScript. Do not migrate.
- **Tailwind CSS 3.4** with a custom palette (see `tailwind.config.js`)
- **framer-motion 12** for page transitions and scroll reveals
- `next/font` (Geist + Caveat), `next/image`
- `react-icons ^5` for brand marks in the tools marquee
- `react-medium-image-zoom` for case-study image click-to-zoom
- Vercel single deploy target

## Commands

```bash
npm run dev     # turbopack, port 3000
npm run build
npm run lint
npm run deploy  # vercel --prod (Nandini owns this — don't push or deploy)
```

## Routes

| Path | File | Purpose |
| --- | --- | --- |
| `/` | `app/page.jsx` | Home bento grid |
| `/about` | `app/about/page.jsx` | Intro + résumé + education + experience + tools marquee |
| `/portfolio` | `app/portfolio/page.jsx` | 4-card stacked grid + Other Projects |
| `/contact` | `app/contact/page.jsx` | Form + direct-contact rail |
| `/work/[slug]` | `app/work/*/page.jsx` | Case studies (baari, luca, ilancaster, smartup) + briefs (wobble, oracle) |

Unknown routes redirect to `/` via `next.config.mjs`.

## Key files

| File | Role |
| --- | --- |
| `lib/site.js` | `SITE` object, `EDUCATION`, `EXPERIENCE`, `MARQUEE`, `TOOLS` |
| `lib/case-studies.js` | `CASE_STUDIES` (the four featured) + `OTHER_PROJECTS` (Wobble, Oracle). Card frame types, accents, glow positions, meta all live here. |
| `components/CaseStudyShell.jsx` | Header (title, oneLiner, whyHere caption, meta strip), scroll progress bar, next-case-study mini-card |
| `components/PortfolioCard.jsx` | The grid card. Contains the per-project mocks (TokenMock for Baari, LucaMock, ILancasterMock, PhonesMock) |
| `components/PhoneFrame.jsx` | Shared iPhone chrome — Dynamic Island + home indicator, percentage-sized so it scales |
| `components/BriefPage.jsx` | Lightweight "Other work" page layout — for Wobble / Oracle |
| `components/SplitRow.jsx` | Reusable 2-col image + text row used in several case studies |
| `components/CaseBits.jsx` | `Section`, `Prose`, `SubList`, `PullQuote`, `MetricCard`, `MetricGrid`, `HandNote`, `AssetPlaceholder` |
| `app/globals.css` | Palette variables, bento `.card-tex` texture, roll animations, marquee keyframes, pulse dot |

## Design conventions — do not break

- **Palette**: pure black body/html (`#000`). Card surfaces are translucent
  white (`rgba(255,255,255,0.03)` to `0.08`). Text is silver `#F4F4F2`,
  secondary fog `#B4B4B0`, tertiary ash `#6E6E6A`.
- **Accents**: Baari `#34D399` (green), LUCA `#F0576B` (red), iLancaster
  `#E4002B` (dark red), SmartUp `#7C5CFC` (purple). Each case study wears
  its own accent throughout the shell.
- **Nav**: fixed 56px, `bg-black/70` + `backdrop-blur-md`. On `/work/*` the
  back-link reads `← All projects` and goes to `/portfolio`. Elsewhere it
  says `← Home`.
- **Cards on the portfolio grid**: all four use the same skeleton — text
  column (category / title / oneLiner) + media column with a shared
  accent-tinted grid backdrop + accent radial glow. Only the mock inside
  the media column differs.
- **PhoneFrame chrome**: proportioned close to a real iPhone —
  Dynamic Island 22% × 2.4%, home indicator 26% × 0.5%. Don't change these
  ratios; they were tuned to scale from 100px card thumbs up to 240px
  walkthrough phones.

## FOLIO framework — the copy standard

Case studies follow the FOLIO framework (`E:\Z FOLIO\portfolio-developer\portfolio-developer\SKILL.md`
on Nandini's machine — copy from there, don't invent). Key rules:

- **Copy preservation**: use Nandini's words verbatim from her FOLIO copy
  or raw report. Structural / typographic / visual transformations are OK.
  Do not paraphrase her prose to "improve" it.
- **Layout variety**: at least two different section patterns per case
  study. Full-bleed hero, centered prose, pull quote, split row, before/
  after, thumb grid, timeline, metric grid, video row, etc.
- **Section weights**: mix Hero (full viewport), Heavy (metric cards, large
  imagery), Medium (standard prose + image), Light (dense bullets).
- **Editorial standard**: every case study should have at least one moment
  of visual drama — a full-bleed hero, an oversized pull quote, an
  unexpected layout shift.

## Case study structure — what works

The SmartUp and iLancaster case studies are the reference for what a
production case study looks like on this site:

1. Hero — full-bleed image or fanned cover PNG
2. About / Problem context — short prose (2 sentences max), not a wall of text
3. Failure or constraint story — before Key Design Decisions
4. Key Design Decisions gallery — one section, several rows, each row =
   screen + `Decision.` + `Why.` paragraphs (see `DecisionRow` in
   `app/work/ilancaster/page.jsx`)
5. Design system / brand constraints — kept short
6. What was traded away — bullet list of deliberate cuts
7. The result — 01/02/03 timeline rows, not three parallel MetricCards
   (see `app/work/smartup/page.jsx` and `app/work/ilancaster/page.jsx`)
8. What I learned — 4 bullets max

## Content voice — what Nandini prefers

- **No em-dashes in bio copy** (About intro, résumé button etc). Uses
  commas and colons. `lib/site.js` respects this.
- **No numbered lists in chat summaries** — use bullets.
- **About page bio is not a résumé rehash** — qualitative, no numbers.
- **Terse and direct**. Cut narrative connective tissue. Say what you
  did, why, what happened.
- **Read `MEMORY.md` in `C:\Users\Admin\.claude\projects\C--Users-Admin\memory\`**
  before making judgment calls on tone or scope. Feedback memories capture
  hard-won lessons from prior sessions.

## Nandini's collaboration preferences

- **Do NOT do sweeping structural rewrites without asking.** Prior
  sessions were spent recovering from unauthorized redesigns. Ask when
  unsure.
- **Reference files are the source of truth.** When she gives you a
  design reference file, measure and match it 1:1 rather than
  interpreting.
- **She pushes / deploys.** Commit locally on `main`, tell her the SHA,
  and stop. Do not `git push` unless she explicitly asks.
- **She flags issues from screenshots.** When she pastes a screenshot,
  compare the described issue to the actual DOM before proposing a fix.
- **Text-only edits to `lib/site.js` do NOT need dev-server verification.**
  Build + commit is enough. Preview only for structural / CSS changes.
- **Screenshots time out in the CCD Browser pane.** When they do, verify
  via `read_page` and JS DOM inspection (`getBoundingClientRect`,
  `getComputedStyle`) rather than fighting the renderer.

## Windows / git specifics

- The repo lives on OneDrive at
  `C:\Users\Admin\OneDrive\Documents\GitHub\Portfolio`.
- Git is configured with `core.autocrlf=true`. **Always CRLF-normalize
  files you write** (PowerShell one-liner or hook) or git will nag on
  next checkout.
- Bash (Git Bash) and PowerShell are both available. Prefer PowerShell
  for CRLF work and file inspection; Bash for git and ffmpeg.

## Verification workflow

1. **Dev server**: usually already running from the previous session —
   `curl -sf -o /dev/null http://localhost:3000/…` to check. Only start
   a new one if it's down.
2. **Structural / CSS changes**: verify via `read_page` or `javascript_tool`
   (query the DOM directly). Screenshots time out.
3. **After edits**: check `read_console_messages` with `onlyErrors=true`
   before committing. Silence means no runtime errors.
4. **Commit**: create a NEW commit (never `--amend` unless asked). Use a
   HEREDOC for the message. Sign off with the co-author trailer.

## Common gotchas

- **`PhoneFrame` needs a sized parent.** It uses `w-full` with a
  `max-width` cap; if you put it in a flex/grid context without a defined
  width on the parent, it collapses to zero.
- **Gemini-generated PNGs bake the "transparency checker" in as pixels.**
  If a "transparent" PNG shows a checker on the dark bg, it's not
  transparent — you'll need to crop or ask Nandini to re-export.
- **Zoom (`react-medium-image-zoom`) needs an aspect-ratio parent** or
  the child image collapses.
- **`card-tex` texture repeats visibly** when you stack four identical
  full-width cards. On the portfolio grid we swapped to
  `bg-white/[0.03]` + inset top highlight for that reason. Keep
  `card-tex` for varied bento cards.
- **Case-study `whyHere`** surfaces automatically from
  `lib/case-studies.js` via `CaseStudyShell` (reads via `getCaseStudy`).
  You don't need to pass it as a prop.
- **Portfolio card `oneLiner` must match between `lib/case-studies.js` and
  the case study page.** They are not automatically synced — update both
  files when changing a oneLiner.
- **Flat-frame images on portfolio cards** use `card.scale` to control
  padding (e.g. `scale: 'p-1'` to reduce padding and make the image
  appear larger). Default is `p-4`. The `mixBlendMode: 'lighten'` style
  blends black backgrounds into the card's dark backdrop.
- **PhoneFrame's max-width is a Tailwind class** (`max-w-[320px]`) not an
  inline style. This means wrapper `<div>` elements can constrain it with
  their own `max-w-*` class. The `fit` prop controls `object-cover` vs
  `object-contain` — default `cover`, use `contain` when source content
  doesn't match the 1170:2532 iPhone ratio.
- **`next/image` with `fill` requires `position: relative` on the parent**
  or the image will escape the container and break the layout.
- **BriefPage meta grid** auto-adjusts: `md:grid-cols-4` when 4 meta
  items, otherwise `md:grid-cols-3`. Array meta values render each on
  its own line via `block` spans.
- **Case study assets are in multiple source folders.** LUCA: `E:\Z
  FOLIO\portfolio-developer\portfolio-developer\assets\LUCA\`,
  iLancaster: same path under `iLancaster\`, Wobble: `D:\Newportfolio
  materials\Wobbles\`, Oracle: `D:\MA Design Management\Lancaster\LICA
  429 Imagination Lab\`. Check the original source before copying.
- **OtherProjects cards** support a `video` field (in addition to `image`)
  for background video tiles. Used by the Wobble card on `/portfolio`.
- **Transferable skills sections** ("What this proves in digital product
  design") are used on Wobble and Oracle to bridge strategic/speculative
  work back to Nandini's digital product design profile. Keep this
  pattern when adding non-digital projects.
- **Lenis smooth scroll** was added via `components/LenisProvider.jsx`.
  It wraps the root layout. On route changes it resets to top via
  `usePathname`. If scroll issues appear, check the Lenis config in
  that file and the `ScrollProgress` component which reads from the
  Lenis ref instead of framer-motion's `useScroll()`.

## When in doubt

- Ask before deleting, rewriting, or moving files.
- Prefer editing existing files over creating new ones.
- Match the SmartUp and iLancaster case study patterns for new case
  studies rather than inventing.
- Follow the FOLIO framework rather than templates found online.
