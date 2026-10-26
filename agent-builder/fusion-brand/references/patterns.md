# Fusion Page Patterns

Layout recipes for full screens, then recipes for patterns Fusion doesn't have yet.

## Observed page patterns

### A. Home / hero landing

- App header (wordmark + profile only, no header search — the hero owns search).
- Hero block: ~55vh, centered, radial white→`#EFF3F8` wash. 56–64px two-line headline, key phrase in blue gradient, sentence case with a period.
- Hero search pill (68px, shadow, Ctrl-K, send button), then a single outlined CTA below it ("Browse Catalog" with grid icon), centered.
- Below: content sections on white. Each: 22px/600 heading + gray subtitle ("Things you can do across the platform"), then a 4-up guide-card grid (`repeat(auto-fill, minmax(280px,1fr))`, 24px gap).
- Section rhythm: 64–72px vertical spacing.

### B. Catalog browse

- Header with centered-right header-search ("Search the catalog…").
- Two-column body: sticky filter sidebar (300px) + main column, 40px gutter, page bg `--fusion-bg` with white cards, or white page with carded rail — either is on-brand.
- Main: "Browse Catalog" 32px H1 left, "Sort by Relevance ⌄" outlined dropdown right.
- Stacked entity sections, each: section header row (blue caps + count + View all) → horizontal card scroller (3 visible, ~520px cards) → scrollbar + ‹ › controls. Repeat per entity type (Data Products, Datasets, …).
- Clicking a card opens the right slide-in panel (pattern 16) without leaving the page; the hovered card shows Preview/View actions.

### C. Entity detail page

- Back link → entity header: 48px light-blue icon chip + blue caps entity label; "Request All" primary button far right.
- 30px/700 title, gray description line.
- Meta row: source (person icon + name) · green Approved status · mono identifier + copy. 24px gaps.
- Tabs (Overview / Datasets / Ownership) on a full-width hairline.
- Tab content sits on `--fusion-bg` gray well with white panel cards:
  - **Overview**: 2-column — Product Details key-value card (~2fr) + Ownership card (~1fr); collapsed "Product Datasets" card full-width below with chevron.
  - **Datasets**: full-width table card (pattern 13).
- Card gap 24px; well padding 32px.

## Net-new patterns (extension recipes)

Fusion has no observed pattern for these. Build them from the DNA below; add an HTML comment noting the derivation.

### Empty state
Centered in a hairline card: 56px pastel icon chip → 18px/700 title ("No datasets yet") → 15px gray line → one `.f-btn--outline` action. Never illustrations or emoji.

### Modal / dialog
White, radius-lg, `--fusion-shadow-pop`, max-width 560px, 28px padding, on `rgba(18,31,48,.45)` scrim. Header: 20px/600 title + gray ✕. Footer right-aligned: ghost Cancel + primary Confirm. Destructive confirm uses `--fusion-red-600` solid — the only time a button isn't blue.

### Toast / inline alert
Bottom-right toast: white, radius-md, `--fusion-shadow-pop`, 4px **left** accent bar in status color, status icon + 15px text + gray ✕. Inline alerts: status-100 tint fill, status-600 text/icon, radius-md, no border.

### Wizard / stepper
Derive from tabs: numbered 26px circles (done = solid blue + white check; current = blue ring + blue number; upcoming = gray ring) joined by hairlines, labels beneath in tab typography. Content in a single panel card; footer: ghost Back left, primary Continue right.

### Agent/status flow (progressive status display)
Derive from the dataset mini-card stack: vertical list of hairline cards, each with a status icon (spinner = blue, done = green check, queued = gray), 15px/600 step name, gray caps sub-label for detail. Active card gets a blue left accent (4px) — the card top-accent rotated to the side to indicate "in progress" rather than "entity".

### Form fields
Inputs mirror the header search minus the icon: 44px, radius-md, 1px `--fusion-border-strong`, focus = `--fusion-blue-700` border + `0 0 0 3px --fusion-blue-50` ring. Labels above: 14px/600 ink; helper text 13px gray below. Selects match the "Sort by Relevance" trigger (label + chevron). Group related fields inside panel cards using the key-value grid geometry.

### Charts / dashboards
White panel card per chart, gray caps eyebrow + 18px/700 title header. Single-series = blue-700 only; multi-series follows the data palette in order. Gridlines `--fusion-border`, axis text 12.5px `--fusion-text-muted`, no chart borders/backgrounds, tooltips styled like toasts. KPI tiles: guide-card shell — caps gray label, 32px/700 value, small status-colored delta with arrow.

### Navigation beyond one level
If a left nav is needed: white rail, 15px/500 gray items, active = `--fusion-blue-50` fill + blue-700 text + 3px blue left accent, radius-md rows — the tab vocabulary rotated vertical.

### Skeleton loading
`--fusion-bg` blocks, radius-sm, subtle shimmer (`#F7F8FA → #EFF1F4`), matching the geometry of the card they replace (accent bar included, in gray).
