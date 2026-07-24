# CLAUDE.md

Nandini Pillai's product-design portfolio. Next.js 15 App Router, React 19,
**JavaScript — no TypeScript, do not migrate**. Tailwind 3.4, framer-motion 12,
Lenis smooth scroll. Vercel, no backend, no env vars.

This file is loaded every session. `AGENTS.md` is the full reference — read the
section you need, not the whole file. Map at the bottom.

## Hard rules

- **Never `git push` or `npm run deploy`.** Commit locally on `main`, tell
  Nandini the SHA, stop. She pushes and promotes deploys herself.
- **No sweeping structural rewrites without asking.** Past sessions were spent
  undoing unauthorised redesigns. Ask when unsure.
- **Never ship an `AssetPlaceholder` on a live case study.** Real captures only.
- **A caption must match what the screenshot actually shows.** Open the PNG
  before captioning it — filenames in `public/assets/` are unreliable.
- **Reference files are the source of truth.** Given a design reference, match
  it 1:1 rather than interpreting.
- **Copy preservation**: case-study prose is Nandini's, from her FOLIO copy or
  raw report. Restructure it, never paraphrase it to "improve" it.
- **Professional AI framing.** Baari is a two-person company: Nandini owns
  design + product, her co-founder owns engineering, implementation was
  AI-accelerated under his ownership. Never "no engineering team", "AI as
  labour", or "AI agents built it".

## Voice

Terse and direct. No em-dashes in bio copy (commas and colons). No numbered
lists in chat summaries — bullets. The About bio is qualitative, not a résumé
rehash. Card `oneLiner`s are natural sentences, no em-dash tails.

## Palette

Pure black bg. Text silver `#F4F4F2`, secondary fog `#B4B4B0`, tertiary ash
`#7A7A76` — **ash is a WCAG-AA floor, don't darken it**.
Accents: Baari `#34D399`, LUCA `#F0576B`, iLancaster `#E4002B`, SmartUp `#7C5CFC`.

## Commands

```bash
npm run dev     # turbopack, port 3000 — usually already running
npm run lint
npm run build
```

## Where things live

| Need | File |
| --- | --- |
| Card frames, accents, status lines, meta | `lib/case-studies.js` |
| Site copy, education, experience, tools | `lib/site.js` |
| The portfolio grid card | `components/PortfolioCard.jsx` |
| Case-study header / progress / next-card | `components/CaseStudyShell.jsx` |
| `Section` `Prose` `SubList` `PullQuote` etc. | `components/CaseBits.jsx` |
| Case studies | `app/work/{baari,luca,ilancaster,smartup}/page.jsx` |
| "Other work" briefs | `app/work/{wobble,oracle}/page.jsx` |

All four featured case studies now share one structure: hero → **At-a-glance
band** (role / scope / outcome) → problem → failure story → **Key design
decisions** → build story → cuts → 01/02/03 result timeline → learnings, with a
`CaseStudyNav` section rail and at least one diagram for whatever the copy
*tells* but doesn't *draw*. Copy any of them for a new one.

Decision rows are **scannable pointers** — a headline, 2–3 bullets, then a
one-line `Why` — not `Decision.`/`Why.` prose paragraphs. Nandini asked for this
explicitly: a scroller has to be able to skim them.

**Wobble and Oracle are "Other work" briefs — keep them short.** Wobble had
grown to 997 words and 11 images, longer than a full case study; it was cut to
~650 and 5. Show design judgment, not the blow-by-blow.

## Gotchas that actually cause bugs

- **HTML entities don't decode in JS strings.** `<SubList items={['don&apos;t']} />`
  renders a literal `don&apos;t`. JSX decodes entities in text and attribute
  literals, not inside `{}`. Use `’` `“` `”` in arrays and `lib/case-studies.js`.
  **This is the single most recurrent bug in this repo** — it has shipped live on
  LUCA, iLancaster, Wobble and Oracle. Grep `&apos;` before every commit.
- **A `filter` on an ancestor breaks `position: fixed` in its subtree.** Every
  case-study page wraps content in a `motion.div` that animates
  `filter: blur()`, which makes it the containing block for fixed children.
  `CaseStudyNav` therefore sits **outside** that wrapper, as a sibling. Put it
  inside and the rail silently positions ~6,000px down the page.
- **Lenis owns the scroll.** `window.scrollTo`, `scrollIntoView` and
  `scrollTop` are all no-ops. Scroll programmatically via `useLenis()` →
  `lenis.scrollTo(el, { offset: -72, immediate })`.
- **`oneLiner` and `status` are NOT synced** between `lib/case-studies.js` and
  the case-study page. Change both.
- **Inline grid styles don't respond to breakpoints.** Two mobile breakages came
  from this. Use Tailwind bracket classes for anything that changes by viewport.
- **Match a frame's `aspect` to the source image ratio** — these frames are
  `object-cover`, so a 0.88 capture in a `16/10` box loses ~40% of its height.
- **Cap a video's container at its native pixel width** (LUCA's walkthrough is
  1350×760 → `max-w-[1350px]`). Wider only adds blur. Re-encode screen
  recordings before shipping — the LUCA master went 22.6 MB → 1.1 MB with no
  visible text loss. Always set a `poster`.
- **`next/image` with `fill` needs `position: relative` on the parent**, and a
  bare `h-full` against a `min-h` parent resolves to auto and collapses it.
- **Reduced motion** is handled globally by `MotionProvider` for framer-motion
  only. CSS transitions need their own `motion-reduce:` guards.

## Verification loop

1. Dev server usually already on :3000 — `curl -sf` to check. **If a route 500s
   or serves an empty page, it's the OneDrive/`.next` race, not your code**:
   stop the preview, `rm -rf .next`, restart. Happens several times a session.
2. **Screenshots time out in the Browser pane, and it doesn't composite** — so
   `requestAnimationFrame` is frozen there. Anything RAF-driven (Lenis scroll,
   framer-motion) **cannot be behaviour-tested in the pane**; verify it by
   reading the DOM and the API, and say plainly that motion went unverified.
3. After any layout/CSS change, check **375 / 768 / 1280** minimum with an
   overflow probe (`documentElement.scrollWidth - innerWidth`). Only the
   marquees and decorative glows should exceed width. For a full sweep, inject a
   hidden `<iframe>` and resize it — media queries honour iframe width, so all
   routes × all widths can be checked in a few calls without resizing the pane.
4. `read_console_messages onlyErrors=true` must be silent before committing.
   Note it accumulates across a long session — a stale error may reference a
   file you already fixed. Trust `npm run build` over the pane's console.
5. **`innerText` returns CSS-transformed text.** Eyebrow labels are
   `uppercase`, so `includes('My role')` fails while `includes('MY ROLE')`
   passes. Check against the rendered casing or use a case-insensitive match.
6. **CRLF-normalize** any file you write (repo is `core.autocrlf=true`).
7. Commit locally. Never `--amend` unless asked.

## Locked decisions — don't undo without asking

- **No more glassmorphism.** Evaluated across the whole site and deliberately
  declined. Blur only does visible work over high-frequency backdrops; this site
  is flat `#000`, the home wordmark clears the bento cards by 14px, and the
  case-study header glow is already `blur-3xl` (blurring it again is a no-op).
  The only two justified surfaces already have it: the nav, and the
  `CaseStudyNav` tooltip. Adding more costs GPU, threatens the AA floor, and
  dates a deliberately restrained editorial identity.
- **Any translucent surface carrying text must be contrast-checked against its
  worst-case backdrop**, not the usual one. The rail tooltip sits at 75% black
  because that holds 5.0:1 over a white screenshot; going lighter fails AA.

## Read AGENTS.md for

Card cover systems (`cover-spread` vs `flat`) and hover stagger · FOLIO
framework rules · full case-study section spec · `CaseStudyNav` spec · the video
pipeline (re-encode numbers, cropping, posters) · asset-hygiene incidents ·
PhoneFrame / BrowserWindow proportions · capturing live product shots with
headless Chrome + ffmpeg · where each project's source assets live · Lenis /
zoom / texture gotchas.
