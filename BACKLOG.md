# BACKLOG.md

Bugs, stubs, deferred ideas, and multi-session state. Update on task completion:
add what you found, tick what you closed, refresh `>RESUME HERE`.

## >RESUME HERE

**Design audit for Digital Product Design roles, 2026-08-05.** Working the fix
list below one item at a time. Done so far: title → "Product Designer"
everywhere, flip card accessible, contact page reframed for hiring,
right-to-work rendered on contact, resume swapped, ~90% stat replaced with the
sourced SMERGERS figure, mailto silent-failure fixed (honest labels + clipboard
fallback, `components/CopyEmail.jsx`). Open: `whyHere` on cards, dead `tags`,
meta-band consistency, skills marquee, Lenis reduced-motion guard, and
`metadataBase` (blocked on the production domain). Bio rewrite **declined for
now** — leave the About prose alone.

**Incident, 2026-08-05:** OneDrive deleted 7 files from disk between my edits
and `git add -A`, so commit `767d069` recorded deletions instead of changes; it
then re-deleted them once after `git checkout` (tombstone replay) before going
quiet. Restored in `7f8c823` from the index, edits re-applied on top. **Lesson:
verify `git status` shows `M` not `D` before committing here, and re-check
Test-Path after any bulk file write.** The manual CRLF-normalize pass sat in the
destructive window — skip it; `core.autocrlf=true` already normalizes on commit.

## Design audit — fix list (2026-08-05)

Audit covered IA, content, positioning, interaction and code. **Not** visual
craft: the Browser pane doesn't composite, so nothing visual was verifiable.

- [x] **Site title → "Product Designer"** across nav, page titles, OG/twitter.
  `app/layout.jsx` composes from `SITE.title`; three copies had drifted.
- [x] **Education flip card was hover-only** — unreachable on touch/keyboard,
  "Hover to see more" on phones. Now state-driven, overlay button per face,
  `aria-expanded`, `motion-reduce`. List stays outside the button (a `<ul>`
  inside `<button>` is invalid and flattens for screen readers).
- [x] **Contact page reframed for hiring** — was "project inquiries, design
  consultations"; availability now "Open to product design roles".
- [x] **`SITE.rightToWork` renders on the contact page** under Availability —
  wording from the CV, exact visa fact.
- [x] **`/assets/resume.pdf` swapped** for the newer `NandiniPillai_CV.pdf`
  (188,486 bytes, CV dated 29 Jul 2026).
- [x] **The contact form now actually sends** (2026-08-05, second pass —
  Nandini rejected the draft-email/copy pairing as confusing). Submit POSTs to
  FormSubmit's AJAX endpoint (`formsubmit.co/ajax/<email>`, no backend, no
  key), with states idle → Sending… → Sent ✓ / error, `aria-live` hint,
  hidden `_honey` honeypot, `_captcha` off, form cleared on success. Secondary
  action "Or email me directly" is a plain `mailto:`. Case-study CTAs keep the
  copyable address (`CopyEmail.jsx`).
  **⚠ ACTIVATION NEEDED: the first real submission emails Nandini a one-time
  FormSubmit confirm link — until she clicks it, submissions bounce.** Send one
  test message from the live site, click the link, then optionally swap the
  email in the endpoint URL for the random alias FormSubmit issues (the
  address is already public on the page, so no new exposure either way).
  Verified with a stubbed fetch in the pane (all four states); the real
  network path needs that one live test.
- [ ] **`whyHere` never renders on the portfolio cards** — only inside the case
  study, after the click it was meant to earn.
- [x] **`tags` dead data deleted** from all four studies (2026-08-05).
- [x] **"~90% of small Indian clinics" cut** — no published source exists
  (searched 2026-08-05). Replaced with SMERGERS' ~72%-unorganised salon
  figure, linked inline; clinics claim now qualitative. Detail in AGENTS
  metrics section.
- [x] **Lenis now respects `prefers-reduced-motion`** (2026-08-05) — init is
  skipped for those users; a native scroll listener keeps `ScrollProgress`
  fed, route changes fall back to `window.scrollTo`, and `CaseStudyNav`
  already had its own fallback. Reduced-motion path is code-reviewed, not
  behaviour-tested (pane can't emulate the media query) — worth one OS-level
  check.
- [x] **Quick micro-interaction batch** (2026-08-05): Baari's Live status dot
  pulses (only where status starts "Live"); `::selection` is silver-inverse;
  marquees pause on hover; zoomable figures show `cursor: zoom-in` via the
  `[data-rmiz]` wrapper.
- [x] **`metadataBase` unblocked without the domain** — uses Vercel's
  build-time `VERCEL_PROJECT_PRODUCTION_URL`, so OG/twitter images resolve
  against the real production domain on deploy; locally undefined (warning
  stays in dev, harmless). **Verify the OG image URL once after the next
  deploy.**
- [x] **Meta bands aligned** (2026-08-05): all four studies render
  Role/Team/Company/Status in order; Industry slot dropped; statuses are the
  card status lines verbatim.
- [x] **Skills marquee** now uses the CV's skills vocabulary (AI Product
  Design, Design Systems, Design-to-Code, Product Strategy, IA, Usability
  Testing).
- **Declined 2026-08-05, don't re-raise:** placing the AI positioning
  sentence on /portfolio ("not right now"), and reordering case studies to
  lead with iLancaster.

**Declined by Nandini, do not re-raise:** homepage restructure (bento stays a
single non-scrolling viewport, `<h1>` stays sr-only, no work on `/`); About bio
rewrite ("dont change bio for now"); adding CV research evidence (5 pilot
businesses / 40+ workshop participants) to the case studies; fixing the CV↔
portfolio attribution mismatch (CV's ISS entry carries iLancaster's "3 steps" +
"80+ screens" numbers under LUCA — she'll handle it live in interviews if
asked).

**Verified healthy, leave alone:** zero horizontal overflow at 375px across all
ten routes, clean console, green build, 14/14 static.

## Needs Nandini (blocked — don't invent)

- **"15% cost reduction" metric** — she cited it, but it is in **no source
  document** (interview reports, FOLIO, CV). SmartUp's report says no hard
  numbers exist. Get the source before writing it anywhere.
- **Design-system artefact** — the one unclosed portfolio gap. Needs real token
  values or a Figma export (tokens / components / before-after of a governed
  screen). Do not fabricate a token sheet.
- **SmartUp quantified outcome** — none exists in any form. Needs a real number
  from her, or it stays qualitative.
- **AI-framing conflict on Baari** — the raw report (`Baari_Case_Study_Raw_
  Report_V2.md`) says "no engineering team… AI WAS the engineering team". The
  locked rule in CLAUDE.md/AGENTS.md says the opposite (co-founder owns
  engineering, never "no engineering team"). The site currently follows the
  locked rule. Confirm which is canonical before writing more from that report.

## Tech debt / cleanup

- **`metadataBase` is not set** in `app/layout.jsx` — surfaced by the build once
  the `themeColor` warning was cleared. Next falls back to
  `http://localhost:3000` when resolving the `openGraph`/`twitter` image, so
  **live link previews can point at localhost**. One-line fix
  (`metadataBase: new URL('https://<domain>')`) but the production domain is
  recorded nowhere in the repo — **needs the real URL from Nandini**, don't guess.

Earlier items (stray `themeColor`, dead mock components, duplicate assets)
cleared 2026-08-04.

## Deferred decisions (offered, awaiting her call)

- **Wobble** — dropped the "highest grade in the class" line (reads as
  coursework next to "client adopted / seeking funding"). Offered to restore.
- **SmartUp walkthrough** — uses 3 phone-tile videos instead of a single "See it
  in motion" section like the others. Left as-is; could consolidate for
  consistency.
- **Baari hero vs demo** — hero uses the real pilot workspace, decision rows use
  the seeded demo workspace. If she wants everything from the pilot, the trade is
  losing the late-flag / retention / revenue evidence.

## Ideas / future build-out

- **A shareable accessibility artefact** — the portfolio site passed a WCAG
  audit; a written "how I approach accessibility" proof would answer the a11y
  gap more directly than the inline inclusive-design section on Baari.
- **LUCA walkthrough Question Bank** — the lorem-ipsum segment was *cut*, not
  re-recorded. A re-record with real questions would restore that stretch.

## Known environment gotcha (not a code bug)

- **OneDrive / `.next` race**: dev server intermittently 500s or serves an empty
  route with an `ENOENT _buildManifest` storm. Fix: stop preview, `rm -rf .next`,
  restart. Several times a session. Documented in AGENTS.md.
