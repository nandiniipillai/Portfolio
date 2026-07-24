# AGENTS.md

Full reference for AI coding agents on this codebase.

**`CLAUDE.md` is loaded automatically every session; this file is not.**
CLAUDE.md carries the rules that apply to every task (hard rules, palette,
verification loop, the gotchas that actually cause bugs). This file is the
deep reference — read the section you need when you need it, rather than
the whole file. CLAUDE.md's map says which section covers what.

When a convention changes, update **both**: the one-liner in CLAUDE.md and
the detail here.

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
| `lib/case-studies.js` | `CASE_STUDIES` (the four featured) + `OTHER_PROJECTS` (Wobble, Oracle). Card frame types, accents, glow positions, status lines, spread images/positions, meta all live here. |
| `components/CaseStudyShell.jsx` | Header (title, oneLiner, whyHere caption, meta strip), scroll progress bar, next-case-study mini-card |
| `components/CaseStudyNav.jsx` | Desktop-only section rail on the four full case studies. Must render **outside** the page's `motion.div` — see its own section below. |
| `components/PortfolioCard.jsx` | The grid card. Frames: `cover-spread` (3 browser-framed screens fanned — Baari, LUCA), `flat` (composed cover image — iLancaster, SmartUp), plus legacy `browser`/`ilancaster`/`phones`. `BrowserWindow` is the shared framed-screenshot primitive (theme light/dark, `pos` crop focus, `priority`). |
| `components/PhoneFrame.jsx` | Shared iPhone chrome — Dynamic Island + home indicator, percentage-sized so it scales |
| `components/BriefPage.jsx` | Lightweight "Other work" page layout — for Wobble / Oracle |
| `components/SplitRow.jsx` | Reusable 2-col image + text row (still used on SmartUp) |
| `components/CaseBits.jsx` | `Section`, `Prose`, `SubList`, `PullQuote`, `MetricCard`, `MetricGrid`, `HandNote`, `AssetPlaceholder` |
| `components/MotionProvider.jsx` | Wraps the app in `<MotionConfig reducedMotion="user">` so framer-motion honours the OS reduced-motion setting. Already in `layout.jsx` — don't add per-component motion guards. |
| `app/layout.jsx` | Root layout, fonts, metadata (incl. `openGraph`/`twitter` image = `/og.png`), MotionProvider + LenisProvider + Nav wrappers |
| `app/icon.png` | Favicon (silver Geist "N" on black). Next App Router auto-serves it — no `<link>` needed. |
| `public/og.png` | 1200×630 social share image (capture of the home page). Referenced by layout metadata. |
| `app/globals.css` | Palette variables, bento `.card-tex` texture, roll animations, marquee keyframes, pulse dot |

**Dead code**: `components/BaariMocks.jsx` (DashboardQueue, TokenCard, LiveStatus, Analytics) is no longer imported anywhere — the Baari case study switched to real product screenshots. Left in place; safe to delete if asked.

## Design conventions — do not break

- **Palette**: pure black body/html (`#000`). Card surfaces are translucent
  white (`rgba(255,255,255,0.03)` to `0.08`). Text is silver `#F4F4F2`,
  secondary fog `#B4B4B0`, tertiary ash `#7A7A76`. **ash is a WCAG-AA
  floor** — it was lightened from `#6E6E6A` (4.06:1, failed AA) to
  `#7A7A76` (4.86:1). Don't darken it back; small labels use it.
- **Accents**: Baari `#34D399` (green), LUCA `#F0576B` (red), iLancaster
  `#E4002B` (dark red), SmartUp `#7C5CFC` (purple). Each case study wears
  its own accent throughout the shell.
- **Nav**: fixed 56px, `bg-black/70` + `backdrop-blur-md`. On `/work/*` the
  back-link reads `← All projects` and goes to `/portfolio`. Elsewhere it
  says `← Home`.
- **Cards on the portfolio grid**: all four share one skeleton — text
  column (year / category / title / oneLiner / accent-dot status line) +
  media column with a shared accent-tinted grid backdrop + accent radial
  glow. Only the cover inside the media column differs. Two cover systems:
  - `cover-spread` (Baari, LUCA): three browser-framed screenshots fanned
    like the phone covers — centre window forward at 66% width carrying the
    URL pill, sides at 52% tilted ∓6° behind. Built from `CoverSpread` +
    `BrowserWindow`. **Show three DIFFERENT features, not one screen thrice.**
  - `flat` (iLancaster, SmartUp): a single composed cover PNG, `object-contain`
    with `card.scale` padding. The two flats are size-matched by tuning
    `scale` (SmartUp `px-4 py-6 md:py-16` vs iLancaster `p-1`) so rendered
    heights are within ~2%.
- **Card cover parity**: keep all four covers at roughly the same rendered
  area (~45–50% of the card). Mismatched cover weight is the thing Nandini
  flags fastest.
- **Card hover**: the cover scales `1.02` over 500ms (on the spread container
  and the flat image); the accent glow is the colour accent, not the motion.
  On `cover-spread` the scale is layered with a **stagger**: the centre
  window lifts 6px immediately, the sides follow at 100ms / 150ms, lifting
  3px, sliding 8px outward and fanning 2° wider. The static fan transform
  lives on an outer wrapper (inline `style`, so utilities can't override it)
  and the hover transform on an inner wrapper — nested transforms compose.
  Delays are static utilities, not `group-hover:` ones, so the stagger plays
  on exit too. These wrappers carry `motion-reduce:` guards; this is CSS
  motion, which `MotionProvider` does **not** cover.
- **Card status line**: each study has a `status` string in `case-studies.js`
  (`Live · getbaari.in`, `Adopted by students & staff`, etc.), rendered
  under the oneLiner with an accent dot. It proves the "shipped" claim the
  intro makes.
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

All four featured case studies now follow this structure — Baari, LUCA,
iLancaster and SmartUp have each had the full pass, so any of them is a
valid reference for a new one:

1. Hero — full-bleed image, fanned cover PNG, or a browser-framed live
   product shot (Baari opens on the real getbaari.in dashboard).
2. **At-a-glance band** — three columns: `My role`, `Scope`, `Outcome`,
   under a `border-y` rule. Front-loads what a scanner needs before the
   2,000 words. The role line is where contribution gets stated precisely:
   iLancaster names her as one of two designers who *tested with* users
   rather than running discovery; SmartUp names the freelance reality and
   the PM holding final say. Be exact here — it reads as maturity, and
   overstating is the fastest way to lose a reader who checks.
3. About / Problem context — short prose (2 sentences max), not a wall of text
4. Failure or constraint story — before Key Design Decisions
5. Key design decisions — one section, several rows, each row = a real
   screen plus **scannable pointers**: a headline, 2–3 bullets, then a
   one-line `Why` with an accent eyebrow. **Not** `Decision.`/`Why.`
   prose paragraphs — that was the old pattern and Nandini asked for
   pointers explicitly so a scroller can skim. Each page owns a small
   local `DecisionRow`/`FeatureRow` that alternates `imgSide`.
   Baari also has `WideFeature` for decisions whose evidence is a wide
   product screen: pointers first, then the shot full-width, because a
   1,400px screenshot squeezed into a half column is illegible.
   **Anchor every row with a real product screenshot**, not a placeholder.
6. **A diagram for whatever the copy tells but doesn't draw.** Every case
   study has one now: LUCA's job-description spine feeding four tools,
   Baari's three roles converging on one booking record, iLancaster's
   above-the-fold trio vs everything one tap behind it, SmartUp's Control
   Panel + POS Lite merging into one role-aware app. They're plain
   flex/grid — a `→` on desktop, `↓` on mobile — and they give the page
   its only non-screenshot visual.
7. Design system / brand constraints / build story — kept short
8. What was traded away — bullet list of deliberate cuts
9. The result — 01/02/03 timeline rows (phase / headline / support), not
   three parallel MetricCards (see all four reference pages)
10. What I learned — 4 bullets max

Also standard: a **`CaseStudyNav` rail** (see below) and a **"See it in
motion"** walkthrough where a recording exists.

**Wobble and Oracle are briefs, not case studies.** They use `BriefPage`
and must stay materially shorter. Wobble had drifted to 997 words / 8,450px
/ 11 images — longer than Baari — and was cut to ~650 words and 5 images.
Both also stated each transferable-skill claim twice: once inline after the
section and again verbatim in the closing "What this proves in digital
product design" grid. Keep the grid, drop the inline repeats.

**Never ship an `AssetPlaceholder` on a live case study.** They're a
drafting aid only; a production page uses real captures. (Baari shipped
three placeholder boxes for a while — caught in audit, removed.)

## CaseStudyNav — the section rail

`components/CaseStudyNav.jsx`. A desktop-only dot rail on the four full
case studies (not the briefs). It finds the page's own `article h2`
headings at mount, tracks the one in view with an `IntersectionObserver`,
and scrolls to a section on click. Three things it depends on:

- **It must render OUTSIDE the page's `motion.div`.** That wrapper
  animates `filter: blur()`, and *any* non-`none` filter makes an element
  the containing block for `position: fixed` descendants — so inside it,
  the rail positions against the 12,000px page instead of the viewport
  and lands ~6,000px down. Every case-study page therefore returns a
  fragment: `<><CaseStudyNav /><motion.div>…</motion.div></>`. This cost
  a debugging session; don't "tidy" it back inside.
- **Scrolling must go through Lenis.** Lenis owns the scroll position, so
  `scrollIntoView`, `window.scrollTo` and `scrollTop` are all silently
  no-ops. Use `useLenis()` from `LenisProvider` and call
  `lenis.scrollTo(el, { offset: -72, immediate: reducedMotion })`. The
  API is Lenis 1.3.x: `scrollTo(number | string | HTMLElement, opts)`.
- **Hidden below `xl`** (`hidden xl:block`) and pinned in the right
  margin at `right-5`, clear of the `max-w-5xl` content column. Its hover
  tooltip is the one deliberate glassmorphism surface on the site.

## Video pipeline

Every walkthrough on this site arrived far too heavy and was re-encoded.
Treat an unprocessed recording as a draft asset:

| Case study | Before | After |
| --- | --- | --- |
| LUCA | 22.6 MB | 1.1 MB |
| Baari | 186 MB source | 320 KB |
| iLancaster | 57 MB (3 files, 2 byte-identical) | 2 MB |
| SmartUp | 36 MB (3 files) | 3.4 MB |
| Oracle | 3.2 MB + 8.7 MB unused | 483 KB |

The recipe: trim to the segment that carries the story, `crop` off
recording chrome and pillarbox, scale so the rendered width never
upscales, `-an` (these tracks are silent or irrelevant), `libx264` at
CRF 22–26, `-movflags +faststart`. Always generate a **poster from the
actual video** — and always cap the container at the encode's native
width. Check `videoWidth` against `getBoundingClientRect().width`.

**Watch the content, not just the file size.** LUCA's walkthrough had
lorem ipsum in two tabs (Per Answer Analysis and Question Bank); the fix
was cutting that 17–21s window and letting Overall Feedback jump to the
dashboard. Sample frames across a recording before shipping it.

## Asset hygiene — filenames lie here

This has now caused real, shipped defects on four separate case studies.
Open every file before you use or caption it:

- **Oracle**: *all three* page images were wrong. The hero was a comic
  whose final panel showed the concept the copy says was abandoned; the
  "product render" was a bullet slide titled Benefits; the "concept
  board" was a class photo of ~25 people. The actual 3D render sat unused
  in `slide-use-case.png`.
- **SmartUp**: one 12,213-byte QR-confirmation screen was serving as five
  different assets — all three video posters, `annotated-ui.jpg` and
  `smartup-card.jpg`.
- **LUCA**: `jd-upload.png` is a duplicate of the CV-optimiser checklist;
  `dashboard-existing` / `landing-existing-user` are the same screen.
- **Cross-project**: `wobble/wobble-card.jpg` ≡ `smartup/iteration-collage.jpg`,
  `wobble/wobble-tile.jpg` ≡ `smartup/closing.jpg`.

`md5sum` is the fast check for duplicates; identical file sizes across
projects are the tell.

## Content voice — what Nandini prefers

- **No em-dashes in bio copy** (About intro, résumé button etc). Uses
  commas and colons. `lib/site.js` respects this.
- **No numbered lists in chat summaries** — use bullets.
- **About page bio is not a résumé rehash** — qualitative, no numbers.
- **Terse and direct**. Cut narrative connective tissue. Say what you
  did, why, what happened.
- **Professional framing on AI and team size.** Don't write "AI as labour",
  "no engineering team", or "AI agents built it". Baari is a two-person
  company: Nandini owns design + product, her co-founder owns engineering;
  implementation was *AI-accelerated under his engineering ownership*.
  Frame AI as a tool she directed via specs ("the spec is the design"),
  never as a replacement for people or a gimmick.
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

## Dev-server flakiness on OneDrive

The repo lives under OneDrive, which syncs the `.next` build cache out from
under Turbopack. Symptom: the dev server starts fine but a route serves an
empty document (`document.body.innerText.length` near zero, no `h2`/`img`),
and `preview_logs` shows a storm of `ENOENT ... _buildManifest.js.tmp` /
`app-build-manifest.json` errors. It is not a code error — `npm run build`
still passes. Fix: stop the preview, `rm -rf .next`, start it again. If it
recurs often, pause OneDrive sync while developing.

## Windows / git specifics

- The repo lives on OneDrive at
  `C:\Users\Admin\OneDrive\Documents\GitHub\Portfolio`.
- Git is configured with `core.autocrlf=true`. **Always CRLF-normalize
  files you write** (PowerShell one-liner or hook) or git will nag on
  next checkout.
- Bash (Git Bash) and PowerShell are both available. Prefer PowerShell
  for CRLF work and file inspection; Bash for git and ffmpeg.

## Glassmorphism — evaluated and declined (2026-07)

Nandini asked whether the site should adopt it. Answer, after measuring:
**no, beyond the two surfaces that already have it.** Recorded so it
isn't relitigated:

- Backdrop blur only does visible work over **high-frequency** backdrops
  — text, edges, imagery, video. This site's canvas is flat `#000`.
  Blurring black returns black, at GPU cost.
- The home wordmark band spans y60–210 while the first bento card starts
  at y196: **14px of overlap**. There is nothing behind those cards.
- The case-study header glow is already `blur-3xl`, so frosting over it
  is close to a no-op — you'd get the fill-plus-hairline look the site
  already uses everywhere.
- Text on glass sits over a *variable* backdrop, which makes contrast
  non-deterministic and threatens the `ash` AA floor.
- Strategically it's a recognisable 2020-era OS idiom; the restraint here
  is the statement.

The two justified surfaces: **`Nav.jsx`** (`backdrop-blur-md bg-black/70`
— content scrolls under a fixed bar) and the **`CaseStudyNav` tooltip**
(floats over live copy and screenshots). The tooltip is applied behind
`supports-[backdrop-filter]` with the solid `bg-black/85` as fallback,
and held at 75% fill because that measures 5.0:1 for the 11px label over
a white screenshot — under the 4.5:1 AA floor if pushed lighter.

## Verification workflow

1. **Dev server**: usually already running from the previous session —
   `curl -sf -o /dev/null http://localhost:3000/…` to check. Only start
   a new one if it's down.
2. **Structural / CSS changes**: verify via `read_page` or `javascript_tool`
   (query the DOM directly). Screenshots time out.
3. **The pane does not composite**, so `requestAnimationFrame` is frozen
   in it. Anything RAF-driven — Lenis scrolling, framer-motion — cannot
   be behaviour-tested there; even `window.scrollTo` appears to do
   nothing. Verify such code by reading the DOM and confirming the API
   against `node_modules`, then say plainly that the motion itself went
   unverified. Don't chase it as a bug.
4. **Full-site responsive sweeps**: inject a hidden `<iframe>`, set its
   width, and load each route into it. Media queries evaluate against
   iframe width, so all routes × all widths can be swept in a few calls
   without resizing the pane. Keep each call under ~10 loads or the
   30s tool timeout bites. Probe
   `documentElement.scrollWidth - innerWidth`, and filter offenders by
   skipping `pointer-events: none` (decorative glows) and anything inside
   an `overflow-x` clip.
5. **`innerText` returns CSS-transformed text.** Eyebrow labels are
   `uppercase`, so a `includes('My role')` check fails while the element
   renders fine. Match the rendered casing or lowercase both sides.
6. **After edits**: check `read_console_messages` with `onlyErrors=true`
   before committing. Silence means no runtime errors — but it
   accumulates across a session and can surface stale errors for files
   already fixed, and `nextjs-portal` exists on every dev page (its
   presence is not an error). `npm run build` is the arbiter.
4. **Commit**: create a NEW commit (never `--amend` unless asked). Use a
   HEREDOC for the message. Sign off with the co-author trailer.

## Common gotchas

- **HTML entities do not decode inside JS strings.** `&apos;` / `&amp;` are
  decoded by JSX in *text* and in *attribute string literals*, but NOT in a
  JavaScript string inside an expression container. So
  `<SubList items={['don&apos;t']} />` renders a literal `don&apos;t` on the
  page. Three of these shipped on LUCA before being caught. Use typographic
  characters (`’` `“` `”`) in `SubList` / `MetricCard` arrays and in
  `lib/case-studies.js` — never entities.
- **Asset filenames lie. Open the image before you caption it.** The LUCA
  folder is the worst offender: `jd-upload.png` is actually a duplicate of
  the CV-optimiser checklist, and `dashboard-existing.png` /
  `landing-existing-user.png` are swapped relative to what they show. Two
  wrong captions shipped because the filename was trusted. Read the PNG,
  then write the caption. A caption that claims something the screenshot
  does not show is the same class of error as an `AssetPlaceholder`.
- **Size a walkthrough video to its native width, never beyond.** Past its
  own pixel width a screen recording only gains blur. `luca/walkthrough.mp4`
  is 1350×760, so its container is `max-w-[1350px]` — 1:1 on a large screen,
  scaling down gracefully below. It was previously boxed at
  `max-w-[300px]` (22% scale), which made every word in it unreadable.
  Check `videoWidth` vs `getBoundingClientRect().width` in the pane.
- **Screen recordings need re-encoding before they ship.** The LUCA master
  was 22.6 MB for 41s, with a silent AAC track and 2px of black on the top
  and bottom edges. `ffmpeg -an -vf "crop=W:H:X:Y" -c:v libx264 -crf 22
  -preset slow -pix_fmt yuv420p -movflags +faststart` took it to 1.1 MB with
  no visible text degradation at 1:1. Always give a video a `poster` (pull a
  content-rich frame with `-ss`) and `preload="metadata"`.
- **Pillarboxed recordings want a dark stage, not a light one.** LUCA's
  walkthrough switches between a full-bleed 1350px capture and a 1080px one
  padded with pure `#000`. Inside a white browser frame those bars read as a
  defect; on a black stage with dark chrome they vanish, and a light UI in a
  dark browser window just reads as dark mode. Run `cropdetect` across the
  timeline before choosing a frame treatment.
- **Match the frame's `aspect` to the source image ratio.** These frames
  use `object-cover`, so a 0.88-ratio capture in a `16/10` box loses ~40%
  of its height. Measure first (PowerShell + `System.Drawing`), then set
  `aspect` per shot, or `ffmpeg -vf "crop=W:H:X:Y"` the panel you actually
  want (that is how `luca/cv-checklist.png` was made). Constrain portrait
  shots with a `max-w-*` wrapper so rows do not become towers.
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
- **`oneLiner` AND `status` must match between `lib/case-studies.js` and
  the case study page.** The card reads from `case-studies.js`; the case
  study header takes its own prop. They are NOT synced — change both.
- **Flat-frame images on portfolio cards** use `card.scale` to control
  padding (e.g. `scale: 'p-1'` to reduce padding and make the image
  appear larger). Default is `p-4`. The `mixBlendMode: 'lighten'` style
  blends black backgrounds into the card's dark backdrop.
- **Capturing live product shots**: use local headless Chrome, not the
  Browser pane. `"/c/Program Files/Google/Chrome/Application/chrome.exe"
  --headless=new --disable-gpu --window-size=1440,900 --hide-scrollbars
  --virtual-time-budget=8000 --screenshot=out.png URL`. Bump
  `--virtual-time-budget` to let animations settle; use a tall
  `--window-size` height to capture a full page, then crop feature panels
  with `ffmpeg -vf "crop=W:H:X:Y"`. This is how the Baari (`queue-dashboard`,
  `checkin-card`, `signal-analytics`, `customer-app`) and `og.png` images
  were made. Crop to EXACTLY 16:10 for `BrowserWindow`/`CoverShot` so
  nothing refits inside the aspect box.
- **Frame screenshots in DARK browser chrome, even for light-UI products.**
  The instinct is to match chrome to the product (dark for Baari, light for
  LUCA), and the `PortfolioCard` `BrowserWindow` still supports both for the
  card covers. But on a full case-study page, light chrome around a
  light-UI capture turns every screenshot into a glaring white slab against
  the black editorial body, and it clashes with any walkthrough video
  (which is forced dark by its pillarbox — see the video notes above). LUCA
  shipped that way and Nandini flagged the whole gallery as not reading as
  a portfolio. The fix was one dark frame (`bg-[#0f0f12]`, `#1a1a1e`
  toolbar) for every product shot on the page, so the stills and the video
  form one system; a light UI in a dark browser just reads as dark mode.
  See `LucaPage`'s `BrowserShot`.
- **Feed browser frames feature-focused CROPS, not whole shrunk pages.** A
  full app screen (sidebar + header + dense body + footer) at ~490px reads
  as a screenshot dump — the single fastest way a case study stops looking
  like design work. Crop each decision-row shot to the one feature the row
  is about (`ffmpeg -vf crop`), then set the frame's `aspect` to the crop's
  EXACT ratio (e.g. `aspect="520/850"`) so `object-cover` shows it uncut.
  Cap portrait crops with a `max-w-[360px]` wrapper so a row doesn't become
  a tower. cv-checklist / cv-rolesummary / employer-salary / interview-
  feedback on LUCA are all crops, not raw captures.
- **Open every asset before captioning it — the filename is not the
  content.** On LUCA, `interview-populated.png` is the mock-interview LIST
  (placeholder avatars, empty "start" pane), not a simulation, yet it was
  captioned "Interview simulation". `dashboard-existing` / `landing-
  existing-user` are the same home screen under two names. The interview-
  feedback still now used in the safeguarding section was pulled from the
  walkthrough (`ffmpeg -ss 10`), which is often the cleanest source for a
  screen no standalone capture exists for.
- **`pos`** overrides the crop focus for tall screenshots (e.g.
  `'center 22%'`). With exact-ratio crops it rarely matters, but it is
  there for shots framed to a generic aspect.
- **PhoneFrame's max-width is a Tailwind class** (`max-w-[320px]`) not an
  inline style. This means wrapper `<div>` elements can constrain it with
  their own `max-w-*` class. The `fit` prop controls `object-cover` vs
  `object-contain` — default `cover`, use `contain` when source content
  doesn't match the 1170:2532 iPhone ratio.
- **`next/image` with `fill` requires `position: relative` on the parent**
  or the image will escape the container and break the layout.
- **Responsive: inline grid styles don't respond to breakpoints.** Two
  mobile breakages traced to this: the home bento used inline
  `gridTemplateRows: '242px 242px'` (only sized 2 rows, so mobile rows 3+
  collapsed) and the About experience timeline used an inline 3-col
  `gridTemplateColumns` that overflowed 375px. Both now use responsive
  utility classes (`auto-rows-[220px] md:[grid-template-rows:...]`,
  `grid-cols-1 md:[grid-template-columns:...]`). Prefer Tailwind bracket
  classes over the `style` prop for anything that must change by viewport.
- **Portfolio card is in-flow on mobile, absolute on desktop.** The inner
  container is `relative md:absolute md:inset-0` and the card link drops
  its `aspect-[16/10]` on mobile — otherwise the fixed aspect clipped the
  stacked text + media. The media column has `min-h-[250px]` and the
  frame wrapper `min-h-[218px] md:min-h-0` (a bare `h-full` resolves to
  auto against a min-h parent and collapses `fill` images). **Always
  re-check the portfolio grid at 375px after touching card layout.**
- **Verify at all three widths.** After any layout/CSS change, check
  1280×800, 768×1024, and 375×812 via `resize_window` + a DOM overflow
  probe (`documentElement.scrollWidth - innerWidth`). The intentional
  offenders are the marquees and decorative glows; anything else is a bug.
  Reset the pane to a real size when done — leaving it at "native" can
  report a 0×0 viewport and make every element measure as 2px.
- **BriefPage meta grid** auto-adjusts: `md:grid-cols-4` when 4 meta
  items, otherwise `md:grid-cols-3`. Array meta values render each on
  its own line via `block` spans.
- **Case study assets are in multiple source folders.** LUCA: `E:\Z
  FOLIO\portfolio-developer\portfolio-developer\assets\LUCA\`,
  iLancaster: same path under `iLancaster\`, Wobble: `D:\Newportfolio
  materials\Wobbles\`, Oracle: `D:\MA Design Management\Lancaster\LICA
  429 Imagination Lab\`. Baari has no asset folder — its images are
  captured live from getbaari.in (see the headless-Chrome note above).
  Check the original source before copying.
- **`priority` on portfolio images**: only the first card
  (`PortfolioCard priority={i === 0}`) loads eager + preloaded for LCP.
  Don't set priority on all cards — it defeats the purpose. New Image
  components below the fold stay lazy by default.
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
