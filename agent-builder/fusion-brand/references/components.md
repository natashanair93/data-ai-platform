# Fusion Components

Copy-paste HTML for each component. All classes are defined in `assets/fusion-tokens.css`. Contents:

1. [App header](#1-app-header)
2. [Search](#2-search) — hero pill + header search
3. [Buttons](#3-buttons)
4. [Caps labels & eyebrows](#4-caps-labels--eyebrows)
5. [Entity card](#5-entity-card) (the signature card)
6. [Guide card](#6-guide-card)
7. [Status badge](#7-status-badge)
8. [Identifier](#8-identifier)
9. [Tabs](#9-tabs)
10. [Section header row](#10-section-header-row) (icon + caps + count + View all)
11. [Filter sidebar](#11-filter-sidebar)
12. [Toggle switch](#12-toggle-switch)
13. [Data table](#13-data-table)
14. [Key-value details card](#14-key-value-details-card)
15. [Ownership / person card](#15-ownership--person-card)
16. [Right slide-in panel](#16-right-slide-in-panel)
17. [Carousel controls](#17-carousel-controls)
18. [Back link](#18-back-link)

---

## 1. App header

White bar, hairline bottom border. Wordmark left (serif, 26px, 600). Optional centered/right search. Profile icon far right (outline person, gray).

```html
<header class="f-header">
  <div class="f-wordmark">Fusion</div>
  <div class="f-header-search"><!-- header search, optional --></div>
  <button class="f-icon-btn" aria-label="Profile">☺︎<!-- person icon --></button>
</header>
```

Height 64px, padding 0 32px, `display:flex; align-items:center; justify-content:space-between`.

## 2. Search

**Hero search** (home page): full-width pill, max-width 1200px, height 68px, `--fusion-shadow-search`, gray search icon left, placeholder `--fusion-text-muted`, right side has a bordered "Ctrl K" hint chip and a circular send button (`--fusion-blue-100` fill, blue paper-plane icon).

```html
<div class="f-search f-search--hero">
  <svg class="f-search-icon"><!-- search icon --></svg>
  <input placeholder="Search" />
  <kbd class="f-kbd">Ctrl K</kbd>
  <button class="f-send" aria-label="Submit"><!-- paper-plane icon --></button>
</div>
```

**Header search** (catalog pages): same pattern, height 48px, radius `--fusion-radius-lg` (not full pill), 1px `--fusion-border-strong` border, no shadow, placeholder "Search the catalog…". No kbd/send by default.

## 3. Buttons

Three styles only. Height 42px (36px small), radius `--fusion-radius-md`, 15px/600 label, icon+label gap 8px.

| Class | Look | Use |
|---|---|---|
| `.f-btn` (primary) | Solid `--fusion-blue-700`, white text. Hover: `--fusion-navy-800`. | View, Request All, main CTA |
| `.f-btn--outline` | White fill, 1px `--fusion-border-strong`, **blue** text/icon. Hover: `--fusion-blue-50` fill. | Browse Catalog, Favorited, secondary actions |
| `.f-btn--ghost` | `#EFF1F4` fill, no border, `--fusion-ink` text. Pill or md radius. | Preview, tertiary |

```html
<button class="f-btn"><svg><!-- icon --></svg> View</button>
<button class="f-btn f-btn--outline"><svg><!-- star --></svg> Favorited</button>
<button class="f-btn f-btn--ghost"><svg><!-- eye --></svg> Preview</button>
```

Primary buttons may carry a trailing arrow (`View →`) or leading external-link/grid icon. Circular icon buttons (`.f-icon-btn--circle`): 36px, 1px border, used for carousel arrows.

## 4. Caps labels & eyebrows

```html
<!-- Entity type: blue, with icon -->
<div class="f-entity-label"><svg><!-- db icon --></svg> DATA PRODUCT</div>

<!-- Section/meta label: gray -->
<div class="f-caps">DESCRIPTION</div>

<!-- Category eyebrow (guide cards): purple -->
<div class="f-eyebrow f-eyebrow--purple">GUIDE</div>
```

Entity label: 12px/700/0.08em, `--fusion-blue-600`. Gray caps: 11.5px/600/0.07em, `--fusion-text-muted`. Eyebrow colors come from the category pastel pairs.

## 5. Entity card

The signature Fusion card: white, 1px border, `--fusion-radius-lg`, **4px navy top-accent bar** flush with the rounded top, 24px padding. Anatomy top-to-bottom: entity label → title (18px/700) → 2-line clamped description (gray) → spacer → source footer (small icon + source name, 14px gray). Hover: border → `--fusion-border-strong`, title → `--fusion-blue-600`, action buttons (Preview / View) fade in above the footer.

```html
<article class="f-card">
  <div class="f-card-accent"></div>
  <div class="f-entity-label"><svg></svg> DATA PRODUCT</div>
  <h3 class="f-card-title">FX Net Flows Data</h3>
  <p class="f-card-desc">FX Net Flows calculated from Execution Data for the global Macro FX LOB.</p>
  <div class="f-card-actions"><!-- shown on hover -->
    <button class="f-btn f-btn--ghost">Preview</button>
    <button class="f-btn">View →</button>
  </div>
  <div class="f-card-source"><svg></svg> CIB Data Catalog</div>
</article>
```

Cards sit in horizontal scrollers (fixed width ~520px) or responsive grids (`minmax(340px,1fr)`). Height is uniform per row; description clamps at 2 lines (`-webkit-line-clamp:2`).

## 6. Guide card

Home-page "Get started" cards. Same card shell **without** the navy accent bar. Anatomy: pastel icon chip (56px, 12px radius, category pastel fill, single-color icon) → category eyebrow (GUIDE, purple) → bold title (19px/700). Vertical, lots of air, hover raises border contrast.

```html
<article class="f-card f-card--guide">
  <div class="f-chip f-chip--lilac"><svg><!-- book icon --></svg></div>
  <div class="f-eyebrow f-eyebrow--purple">GUIDE</div>
  <h3 class="f-card-title">Build an Agent</h3>
</article>
```

## 7. Status badge

Text-first, never color-only. Inline check-circle (filled green circle, white check) + 15px/600 text.

```html
<span class="f-status f-status--approved"><svg><!-- check-circle --></svg> Approved</span>
```

Variants: `--approved`/`--available` (green), `--pending` (amber, clock icon), `--rejected` (red, x-circle), `--inactive` (gray, dash-circle). For pill-style badges (table chips), add `.f-status--pill`: tint fill (`--fusion-green-100` etc.), 4px 10px padding, radius-sm.

## 8. Identifier

Monospace, 13.5px, `--fusion-text-secondary`, truncates with ellipsis, always paired with a copy icon button that flashes a check on click.

```html
<div class="f-identifier">
  <code>com.jpmc.cib.data-catalog::48e56ae9-c18c-491f-b659-28ba890a9b14</code>
  <button class="f-copy" aria-label="Copy"><svg><!-- copy icon --></svg></button>
</div>
```

## 9. Tabs

Horizontal, text-only, 32px gap, full-width hairline under the row. Active: `--fusion-ink`, 600 weight, 3px `--fusion-blue-700` underline sitting on the hairline. Inactive: `--fusion-text-secondary`, 500.

```html
<nav class="f-tabs">
  <button class="f-tab is-active">Overview</button>
  <button class="f-tab">Datasets</button>
  <button class="f-tab">Ownership</button>
</nav>
```

## 10. Section header row

Catalog section pattern: blue db icon + blue caps title + gray count, right-aligned "View all ›" link (15px/600 blue with chevron).

```html
<div class="f-section-row">
  <div class="f-entity-label" style="font-size:14px"><svg></svg> DATA PRODUCTS <span class="f-count">(746)</span></div>
  <a class="f-viewall" href="#">View all <svg><!-- chevron --></svg></a>
</div>
```

Content sections ("Get started in Fusion") instead use a 22px/600 heading + 15px gray subtitle.

## 11. Filter sidebar

Left rail, white card (radius-lg, hairline border), 280–320px wide, sticky. "Filters" title 20px/700 with hairline divider. Collapsible group ("Entity Type") with chevron. Inside: gray caps sub-group labels (DATA, AI/ML, GOVERNANCE, TECHNICAL ASSETS) and radio rows (18px radio circle, 15px label, 12px row gap). Bottom pinned row: "View my favorites" + toggle.

```html
<aside class="f-filters">
  <h2 class="f-filters-title">Filters</h2>
  <details open class="f-filter-group">
    <summary>Entity Type</summary>
    <div class="f-caps">Data</div>
    <label class="f-radio"><input type="radio" name="et"> Data Product</label>
    <label class="f-radio"><input type="radio" name="et"> Dataset</label>
    ...
  </details>
  <div class="f-filters-footer">View my favorites <button class="f-toggle" role="switch" aria-checked="false"></button></div>
</aside>
```

## 12. Toggle switch

44×26px track, radius-full. Off: `#2A3440` dark track, white knob left (Fusion's toggles read dark even when off). On: `--fusion-blue-700` track, knob right. 150ms transition.

## 13. Data table

Container: white card, radius-lg, hairline border, header area above may hold a caps/db-icon section title ("Product Datasets"). Table itself: header row 15px/700 ink with 2px bottom border (`--fusion-border-strong`); body rows 15px with 1px `--fusion-border` dividers; cell padding 18px 16px; row hover `--fusion-blue-50`. Identifiers in mono. Status column uses status text (green "Approved", "Available").

```html
<div class="f-table-card">
  <div class="f-table-title"><svg></svg> Product Datasets</div>
  <table class="f-table">
    <thead><tr><th>Name</th><th>Identifier</th><th>Publisher</th><th>Type</th><th>Status</th></tr></thead>
    <tbody>
      <tr>
        <td class="f-td-strong">FX Cash Net Flows Client Impact Report</td>
        <td><code class="f-mono">com.jpmc.cib.data-catalog::43b0ae08-…</code></td>
        <td>CIB Data Catalog</td><td>Source</td>
        <td><span class="f-status f-status--approved">Approved</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

Name column is 600 weight; everything else regular.

## 14. Key-value details card

Detail-page "Product Details" pattern: white card, icon + 20px/600 title header, then a **two-column key-value grid** split by a vertical hairline. Keys: 15px `--fusion-text-secondary`; values: 15px/600 ink (identifiers mono + copy icon). Rows ~64px apart.

```html
<section class="f-panel-card">
  <h2 class="f-panel-title"><svg></svg> Product Details</h2>
  <div class="f-kv-grid">
    <div class="f-kv"><div class="f-kv-key">Type</div><div class="f-kv-val">Source</div></div>
    <div class="f-kv"><div class="f-kv-key">Lifecycle Status</div><div class="f-kv-val">Approved</div></div>
    <div class="f-kv"><div class="f-kv-key">Publisher</div><div class="f-kv-val">CIB Data Catalog</div></div>
    <div class="f-kv"><div class="f-kv-key">Version</div><div class="f-kv-val">4</div></div>
  </div>
</section>
```

## 15. Ownership / person card

Card-in-card: outer `f-panel-card` titled "Ownership" (person icon, chevron top-right), inner bordered card with name 17px/700 + "(SID)" and role in gray below. "Show More" underlined link (ink color) beneath.

## 16. Right slide-in panel

Preview panel over the catalog: fixed right, ~420–480px wide, full height under the header, white, `--fusion-shadow-panel`, 28px padding, close ✕ top-right (gray icon button). Anatomy: entity label → 26px/700 title → mono identifier + copy → action row (`.f-btn` View w/ external icon, `.f-btn--outline` Request All, `.f-btn--outline` Favorited w/ star) → hairline → gray caps DESCRIPTION + body → gray caps DATASETS + stacked mini-cards (hairline border, radius-md, db icon, 15px/700 name, gray caps "SOURCE" sub-label). Slides in 240ms ease-out.

## 17. Carousel controls

Horizontal scrollers get: thin gray scrollbar track under the row, plus two circular outline icon-buttons (‹ ›) below-left. Disabled arrow at 40% opacity.

## 18. Back link

`‹ Search Results` — chevron + 16px/600 ink text, top-left of detail pages, 24px above the entity header.
