# SNAPSHOT.md — architecture blueprint

Read this before a task instead of scanning the tree. Trust it; verify only what
you touch. Update it when structure changes (new route, component, data shape).
Last updated: 2026-07 (after the Baari trim + doc pass).

## Stack

Next.js 15 (App Router) · React 19 · **JavaScript, no TypeScript** · Tailwind 3.4
· framer-motion 12 · Lenis smooth scroll · `next/font` (Geist + Caveat) ·
`react-medium-image-zoom` · `react-icons`. Deploy: Vercel, single target, no
backend, no env vars. Nandini pushes / promotes deploys herself.

Scripts: `dev` (turbopack :3000) · `lint` · `build` · `deploy` (`vercel --prod`).

## Layout / providers

`app/layout.jsx` → `<html lang="en">` → body → **LenisProvider → MotionProvider →
Nav + ChromeShell({children})**. Root metadata sets OG/twitter to `/og.png`.
`ChromeShell` renders `<main>` + `Footer` (footer hidden on `/`).

## Routes

| Path | File | What |
| --- | --- | --- |
| `/` | `app/page.jsx` → `BentoNav` | Home bento grid, wordmark rising behind |
| `/about` | `app/about/page.jsx` | Intro, résumé, education, experience timeline, tools marquee |
| `/portfolio` | `app/portfolio/page.jsx` | 4 featured cards (`PortfolioCard`) + `OtherProjects` |
| `/contact` | `app/contact/page.jsx` → `ContactForm` | mailto form + direct-contact rail |
| `/work/baari` `luca` `ilancaster` `smartup` | `app/work/*/page.jsx` | Four full case studies |
| `/work/wobble` `oracle` | `app/work/*/page.jsx` → `BriefPage` | Two "Other work" briefs |

Unknown routes redirect to `/` (`next.config.mjs`).

## Data

- `lib/case-studies.js` — `CASE_STUDIES` (4 featured) + `OTHER_PROJECTS` (wobble,
  oracle). Card frame types, accents, glow positions, status lines, spread
  images, meta, `readTime`, `whyHere`.
- `lib/site.js` — `SITE`, `EDUCATION`, `EXPERIENCE`, `MARQUEE`, `TOOLS`.
- `lib/caseStudyTheme.js` — `AccentProvider` / `useAccent` for per-study accent.

## Components (by role)

- **Chrome:** `Nav` (glass, fixed) · `ChromeShell` · `Footer` · `LenisProvider`
  (`useLenis`) · `MotionProvider`.
- **Home:** `BentoNav` · `RollingWord` / `RollLabel` · `StackMarquee` / `Marquee`
  · `Portrait` · `LiveClock` · `DisplayTitle` · `BlurReveal` · `ScrollReveal` ·
  `ScrollProgress`.
- **Portfolio grid:** `PortfolioCard` (frames: `cover-spread`, `flat`, legacy
  `browser`/`ilancaster`/`phones`; `BrowserWindow` primitive) · `OtherProjects` ·
  `BrowserFrame` · `PhoneFrame`.
- **Case study:** `CaseStudyShell` (header/meta/progress/next-card) ·
  `CaseStudyNav` (desktop section rail, **renders outside the page `motion.div`**)
  · `CaseBits` (`Section`, `Prose`, `SubList`, `PullQuote`, `MetricCard`,
  `MetricGrid`, `HandNote`, `AssetPlaceholder`) · `SplitRow` · `SlideFigure` ·
  `OutcomeSpine`. Each case-study page also defines small **local** components
  (`AtAGlance`, `DecisionRow`/`FeatureRow`, `WideFeature`, a diagram).
- **Brief:** `BriefPage` (wobble/oracle).
- **About/contact:** `ExperienceTimeline` · `ContactForm`.

## Case-study status

All four featured studies now share: hero → at-a-glance band → problem → failure
story → ~6 pointer decisions → a diagram → build/cuts → 01/02/03 result timeline →
learnings, with a `CaseStudyNav` rail and a walkthrough where a recording exists.

| Study | Accent | Walkthrough | Notes |
| --- | --- | --- | --- |
| Baari | `#34D399` | yes (queue loop) | 6 decisions; hero = pilot workspace, rows = demo workspace; multi-user/async/access gaps closed |
| LUCA | `#F0576B` | yes | outcome leads with "16,000+ students" (deployment scale) |
| iLancaster | `#E4002B` | yes | insider arc; 5 decisions incl. Search |
| SmartUp | `#7C5CFC` | 3 phone tiles (no single walkthrough) | no quantified outcome exists |
| Wobble | `#F6C7A0` | cover video | brief; ~650 words |
| Oracle | `#D946EF` | yes | brief |

## Palette

Pure black bg. Text silver `#F4F4F2` / fog `#B4B4B0` / **ash `#7A7A76` (AA floor,
don't darken)**. Accents per study above.

## Conventions live in

`CLAUDE.md` (per-turn rules) and `AGENTS.md` (deep reference: FOLIO, decision
count, video pipeline, crop cohesion, metrics honesty, a11y, asset hygiene,
CaseStudyNav spec, glassmorphism decision, OneDrive/.next race).
