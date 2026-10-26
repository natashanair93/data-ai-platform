# Platform — Design System

A design system for **Platform**, an enterprise **Data & AI Platform**: a catalog and workspace where
teams discover, build and manage **data products, datasets, dashboards, models, agents, skills and
GenAI capabilities**. Platform is a light-theme, enterprise-professional web app: clean white
surfaces, generous whitespace, a blue accent, rounded cards, domain-colored category pills, a
left-hand filter sidebar and a prominent global search. (Product name and look confirmed from
screenshots of the live "Platform" preview environment.)

It is built on the **Salt design system** (JPMorgan Chase's open-source React component library).
Foundations here (color, type, spacing, radius, elevation) are lifted from Salt's "next" theme,
**light mode**, at the comfortable **"low" density** — the best fit for a spacious web catalog.

## Sources

- **Salt design system** — https://github.com/jpmorganchase/salt-ds
  - Tokens: `packages/theme/css/` (foundations + `next/palette` + `next/characteristics`).
  - Icons: `packages/icons/src/SVG/` — 548 SVG glyphs; a curated 48 are copied into `assets/icons/`.
  - Content style guide: `content-style-guide.md` (drives the Content Fundamentals below).
  - Explore the repo further to recreate Salt components with higher fidelity.

Nothing above is assumed to be accessible to the reader; paths are recorded so they can be
re-fetched if access is available.

---

## Content Fundamentals

Voice follows Salt's content style guide: **American English, clear, concise, active voice,
second person, present tense.**

- **Tone** — plain and functional, never marketing-fluffy. "Request access", "Refreshed 2 hours
  ago", "4.2M rows". State the fact; drop hedges ("approximately", "if you would like to").
- **Person & voice** — address the user as *you*; use the imperative for actions ("Deploy a model",
  "Browse guides"). Active voice throughout.
- **Casing** — sentence case for headings, labels and body ("Owning team", "Recommended for you").
  UPPERCASE is reserved for two things: **button/action labels** (with +0.6px tracking — a Salt
  signature) and **category/entity pills** (DATASET, MODEL).
- **Component names** — Pascal case in backticks when referring to the component itself
  (`Button`, `SearchInput`); sentence case for instances ("this button").
- **Props** — say "prop", wrap in backticks, and show the complete statement: "Set `wrap={true}`".
- **Numbers & units** — concrete and compact: "128 results", "AUC 0.87", "s3://lake/curated/…".
- **Keys** — wrap keyboard keys in `<kbd>`; combine with " + " (e.g. Ctrl + K). Global search shows
  a Ctrl + K hint.
- **Emoji** — not used. Meaning is carried by the Salt icon set, status dots and category color.

---

## Visual Foundations

**Color.** Light theme only. Canvas and cards are **Snow #FFFFFF**; subtle panels and the filter
sidebar are **Marble #F5F7F8**. The accent is **blue-500 #0078CF** (primary CTA, active states,
links, entity-type pills), darkening to **blue-600 #005EA6** on hover and for heading emphasis.
Text is near-black on Snow, secondary text is **gray-700 #4C5157**. Status uses green (success),
orange (warning), red (error), blue (info).

**Domain categorical colors.** Beyond the blue accent, catalog areas are color-coded from Salt's
categorical palette (the platform's "Cat-1…20" swatches map 1:1 to Salt categorical colors):
**Data = teal** (ocean/aqua), **AI/ML = purple** (plum/lavender/rose/fuchsia/indigo/violet),
**Governance = green** (olive/lime/jade/forest), **Technical Assets = brown** (autumn/cider/fur),
**Documentation = slate** (slate/smoke). Each domain exposes three treatments — `-fill` (light
tinted background), `-text` (mid, for label/outline) and `-bold` (solid) — surfaced through the
`Pill` component's `variant` (fill / outline / solid). See the "Domain categorical colors" specimen.

**Type.** UI and body are **Open Sans**. Display/headings use **Amplitude** — a commercial
JPMorgan typeface **not freely available**, so it is **substituted with Archivo** (nearest grotesque
on Google Fonts; see Caveats). Code is **PT Mono**. An occasional large marketing serif heading uses
**PT Serif**. Scale (low density): display 42–84px, h1 32, h2 24, h3 18, h4 14, body 14, label 12.

**Spacing & layout.** 12px base unit; semantic steps xs 3 · sm 6 · md 12 · lg 18 · xl 24 · 2xl 36 ·
3xl 48. Default control height 36px. Layouts are max-width (~1040–1440px), centered, with a fixed
264px filter sidebar and a 56px sticky header. Whitespace is generous.

**Corners.** Rounded, never sharp. Controls 6px, cards/tiles/panels 9px, large surfaces/dialogs
12px, pills/tags fully round (999px), small in-table chips 3px.

**Borders vs. shadow.** Resting cards use a **1px subtle border** (`rgba(0,0,0,0.1)`) and **no
shadow** — a flat, bordered look. Search-result cards additionally carry a **4px blue left-accent
border** (`Card accentBorder`), a Platform signature. Elevation appears only on interaction (hover
lift), overlays (menus → shadow-low) and dialogs (shadow-medium). Inputs carry a subtle border plus
a stronger 2px bottom activation indicator that turns accent-blue on focus, with a soft accent
focus ring.

**Motion.** Restrained and functional. Fast (150ms) transitions on hover/focus/color with a
standard ease `cubic-bezier(0.4,0,0.2,1)`; cards lift ~1px on hover. No bounces, no decorative
loops, no parallax.

**Interaction states.** Hover — solid buttons darken to the "strong" shade; bordered/ghost buttons
gain a faint tinted background; cards lift + border darkens. Focus — accent outline / ring. Selected
— accent border + light-blue fill (`--surface-selected`). Disabled — 40% opacity.

**Wordmark.** No brand logo was supplied. "Platform" is set in the heading family (Archivo), near-black,
top-left — no icon or tile. Big hero headings use blue for the emphasized fragment ("Data and AI").

**Imagery & decoration.** Largely icon- and type-led — no photography or illustrations. The two
exceptions seen in the product: the hero sits on a subtle white→marble vertical gradient, and
"New arrivals" tiles use soft domain-tinted diagonal gradients (lavender, teal) behind a large
glyph. Use gradients only in those two contexts; everywhere else is flat.

---

## Iconography

- The **Salt icon set** is the single icon system. Glyphs are line icons on a 12×12 base grid
  (some larger), single-color, drawn to inherit `currentColor`.
- **48 SVGs are copied into `assets/icons/`** (search, filter, database, dashboard, charts,
  hierarchy, layers, document, tag, favorite, user, settings, notification, status glyphs,
  chevrons, arrows, grid/list, share, export, copy, edit, api, key, and more) and normalized to
  `fill="currentColor"`.
- Use the **`Icon`** component, which inlines all 48 glyphs so it is self-contained and colorable:
  `<Icon name="database" />`. Import `iconNames` for the full list.
- **No emoji and no Unicode-glyph icons.** Status is shown with `StatusIndicator` dots; entity type
  with `Pill` color.
- The full 548-glyph Salt set lives in the repo above if more coverage is needed.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import` list only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius-elevation.css`, `base.css`.
- `assets/icons/` — 48 Salt SVG glyphs.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable primitives (below).
- `ui_kits/data-ai-platform/` — interactive catalog + entity-detail recreation.
- `SKILL.md` — Agent-Skill entry point.

**Components** (`window.DataAIPlatformDesignSystem_fa7517`)
- **actions/** — `Button`, `IconButton`
- **foundations/** — `Icon` (+ `iconNames`)
- **forms/** — `Input`, `SearchInput`, `Checkbox`, `Dropdown`
- **display/** — `Card`, `Pill`, `Badge`, `StatusIndicator`, `Tabs`

Each component ships a `.jsx` implementation, a `.d.ts` props contract, a `.prompt.md` usage note,
and a directory `@dsCard` demo. Consume tokens via the CSS custom properties in `styles.css`; prefer
the semantic aliases (`--accent`, `--text-secondary`, `--surface-secondary`, `--radius-card`, …).

**Intentional additions.** `Icon` is a thin wrapper over the copied Salt SVGs (Salt ships icons as
generated React components, which don't run in this raw browser environment) — added so glyphs are
usable and colorable without a build step.

---

## Caveats

- **Amplitude → Archivo.** The heading/display typeface Amplitude is proprietary and unavailable; a
  visually close Google font (Archivo) stands in. **Provide Amplitude web font files** to make
  headings pixel-accurate.
- **No brand logo** was provided. The Platform wordmark is set in plain type (near-black, top-left,
  no icon/tile); swap in the official mark when available.
- Components are **cosmetic recreations** grounded in Salt tokens — faithful to look and states, not
  the full Salt API surface.
