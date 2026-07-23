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

All four featured case studies follow one structure: hero → problem → failure
story → Key Design Decisions gallery (`Decision.`/`Why.` rows, each anchored by
a real screenshot) → build story → cuts → 01/02/03 result timeline → learnings.
Copy any of them for a new one.

## Gotchas that actually cause bugs

- **HTML entities don't decode in JS strings.** `<SubList items={['don&apos;t']} />`
  renders a literal `don&apos;t`. JSX decodes entities in text and attribute
  literals, not inside `{}`. Use `’` `“` `”` in arrays and `lib/case-studies.js`.
- **`oneLiner` and `status` are NOT synced** between `lib/case-studies.js` and
  the case-study page. Change both.
- **Inline grid styles don't respond to breakpoints.** Two mobile breakages came
  from this. Use Tailwind bracket classes for anything that changes by viewport.
- **Match a frame's `aspect` to the source image ratio** — these frames are
  `object-cover`, so a 0.88 capture in a `16/10` box loses ~40% of its height.
- **`next/image` with `fill` needs `position: relative` on the parent**, and a
  bare `h-full` against a `min-h` parent resolves to auto and collapses it.
- **Reduced motion** is handled globally by `MotionProvider` for framer-motion
  only. CSS transitions need their own `motion-reduce:` guards.

## Verification loop

1. Dev server usually already on :3000 — `curl -sf` to check.
2. **Screenshots time out in the Browser pane.** Verify via `javascript_tool`
   DOM inspection (`getBoundingClientRect`, `getComputedStyle`), not the renderer.
3. After any layout/CSS change, check **1280×800, 768×1024, 375×812** with an
   overflow probe (`documentElement.scrollWidth - innerWidth`). Only the marquees
   and decorative glows should exceed width. Reset the pane to a real size after
   — "native" reports 0×0 and makes everything measure as 2px.
4. `read_console_messages onlyErrors=true` must be silent before committing.
5. **CRLF-normalize** any file you write (repo is `core.autocrlf=true`).
6. Commit locally. Never `--amend` unless asked.

## Read AGENTS.md for

Card cover systems (`cover-spread` vs `flat`) and hover stagger · FOLIO
framework rules · full case-study section spec · PhoneFrame / BrowserWindow
proportions · capturing live product shots with headless Chrome + ffmpeg ·
where each project's source assets live · Lenis / zoom / texture gotchas.
