# BACKLOG.md

Bugs, stubs, deferred ideas, and multi-session state. Update on task completion:
add what you found, tick what you closed, refresh `>RESUME HERE`.

## >RESUME HERE

Nothing in flight. Working tree clean, `origin/main` caught up (all case studies
crafted to standard, docs current). Next work is whatever Nandini picks — the
highest-value open threads are **Needs Nandini** below (design-system artefact is
the biggest remaining portfolio gap).

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

## Tech debt / cleanup (safe, do anytime)

- **`app/layout.jsx` line 15**: `themeColor` is in the `metadata` export — it
  belongs only in `viewport` (already present at line 31). The stray line causes
  a build warning on every route. Delete `themeColor` from `metadata`.
- **Dead components**: `components/BaariMocks.jsx` and
  `components/ILancasterMocks.jsx` are unused. Safe to delete.
- **Unused duplicate assets** (byte-identical placeholders, `md5sum`-confirmed):
  `smartup/annotated-ui.jpg`, `smartup/smartup-card.jpg`, `wobble/wobble-card.jpg`,
  `wobble/wobble-tile.jpg`. Remove.

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
