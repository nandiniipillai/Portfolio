# BACKLOG.md

Bugs, stubs, deferred ideas, and multi-session state. Update on task completion:
add what you found, tick what you closed, refresh `>RESUME HERE`.

## >RESUME HERE

Nothing in flight. Tech-debt section cleared 2026-08-04 (stray `themeColor`, two
dead mock components, four duplicate assets — all deleted, build clean). Every
remaining item needs a decision from Nandini: **Needs Nandini** is blocked on
source material, **Deferred decisions** on her call. The design-system artefact
is still the biggest portfolio gap.

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
