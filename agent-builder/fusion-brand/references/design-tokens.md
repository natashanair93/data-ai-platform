# Fusion Design Tokens

All values extracted from production Fusion screens (home, catalog browse, detail panel, entity detail page, datasets table). Use CSS variables from `assets/fusion-tokens.css` — this file explains what each token is for.

## Color

### Blues (the workhorse scale)

| Token | Hex | Use |
|---|---|---|
| `--fusion-navy-900` | `#12335B` | Deepest navy. Rare — dense text on blue tints. |
| `--fusion-navy-800` | `#1E4E79` | **Card top-accent bars**, table header accents. |
| `--fusion-blue-700` | `#1B5EA6` | **Primary.** Solid buttons, active tab underline, primary icons. |
| `--fusion-blue-600` | `#2166B1` | Links, entity-type labels, "View all" links, interactive icons. |
| `--fusion-blue-500` | `#3C7DC0` | Hover states on links, hero headline accent (light end of gradient). |
| `--fusion-blue-100` | `#E3EAF6` | Light-blue chip backgrounds (entity icon squares, send button circle). |
| `--fusion-blue-50` | `#F0F5FB` | Selected row / hover fills, subtle blue wash. |

Hero headline accent: two-tone text, gradient `--fusion-blue-600 → --fusion-blue-500` applied only to the emphasized phrase (e.g., "Data and AI"); rest of headline is `--fusion-ink`.

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `--fusion-ink` | `#1A1F26` | Headings, primary text. Never `#000`. |
| `--fusion-text-secondary` | `#5B6470` | Descriptions, supporting copy, placeholder text. |
| `--fusion-text-muted` | `#8A93A0` | Caps section labels (DESCRIPTION, GOVERNANCE), timestamps, counts. |
| `--fusion-border` | `#E4E7EC` | Hairline borders on cards, tables, dividers. |
| `--fusion-border-strong` | `#C9CFD8` | Hover borders, input borders, outlined-button borders (with blue text). |
| `--fusion-surface` | `#FFFFFF` | Cards, header, panels. |
| `--fusion-bg` | `#F7F8FA` | Page background behind cards (detail pages, content wells). |
| `--fusion-bg-subtle` | `#FBFCFD` | Very faint fill — table header rows, hero base before gradient wash. |

The home hero sits on a faint radial wash: white fading to `#EFF3F8` toward the edges with barely-visible contour lines. Approximate with `radial-gradient(ellipse at 50% 35%, #FFFFFF 40%, #EFF3F8 100%)`.

### Status

| Token | Hex | Use |
|---|---|---|
| `--fusion-green-600` | `#12805C` | Approved / Available text + check icon. |
| `--fusion-green-100` | `#E4F3EC` | Green badge fill (when a filled badge is needed). |
| `--fusion-amber-600` | `#B25E09` | Pending / Draft. |
| `--fusion-amber-100` | `#FBEFDD` | Amber badge fill. |
| `--fusion-red-600` | `#B42318` | Rejected / Error. |
| `--fusion-red-100` | `#FBE9E7` | Red badge fill. |

### Category pastels (icon chips + eyebrow accents)

Used only as soft backgrounds for guide/category icons and occasional eyebrow labels. Icons inside remain single-color.

| Token | Hex | Pairs with icon/eyebrow color |
|---|---|---|
| `--fusion-lilac-100` / `--fusion-purple-600` | `#F0E7F8` / `#7A4FBF` | Guides (the purple GUIDE eyebrow), prompts |
| `--fusion-blue-100` / `--fusion-blue-600` | `#E3EAF6` / `#2166B1` | Data |
| `--fusion-olive-100` / `--fusion-olive-600` | `#EEEEDA` / `#6B7238` | Assets, knowledge |

### Data-visualization palette (charts only, in order)

`#1B5EA6`, `#7A4FBF`, `#12805C`, `#B25E09`, `#5B6470`, `#3C7DC0`. Muted, no neon. Single-series charts use blue only.

## Typography

Font stack (Fusion uses a clean humanist grotesque; this stack matches it closely in prototypes):

```css
--fusion-font: "Source Sans 3", "Source Sans Pro", -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
--fusion-font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
--fusion-font-wordmark: "Source Serif 4", Georgia, serif; /* the "Fusion" logotype only */
```

| Role | Size / weight / details |
|---|---|
| Hero headline | 56–64px, 600, line-height 1.15, `--fusion-ink`, accent phrase in blue gradient |
| Page title (H1, "Browse Catalog") | 32px, 700 |
| Entity title (H1 on detail page) | 30px, 700 |
| Section heading ("Get started in Fusion", "Product Details") | 22px, 600 |
| Card title | 18px, 700 |
| Body / description | 15–16px, 400, `--fusion-text-secondary`, line-height 1.55 |
| **Caps label — entity type** | 12px, 700, letter-spacing 0.08em, uppercase, `--fusion-blue-600`, with 16px icon |
| **Caps label — section/meta** | 11.5px, 600, letter-spacing 0.07em, uppercase, `--fusion-text-muted` |
| Table header | 15px, 700, `--fusion-ink` |
| Table cell | 15px, 400 |
| Identifier / code | 13.5px mono, `--fusion-text-secondary` |
| Button label | 15px, 600 |
| Tab label | 15.5px, 500 (active: 600, `--fusion-ink`) |

## Spacing, radius, elevation

- Base unit **4px**; common steps: 8, 12, 16, 24, 32, 48, 64.
- Card padding: **24px**. Card gap in grids: 20–24px.
- Page gutter: 40–56px; max content width ~1440px (catalog), hero content ~1200px centered.
- Section spacing on pages: 56–72px.

| Radius token | Value | Use |
|---|---|---|
| `--fusion-radius-sm` | 6px | Chips, badges, small buttons, Ctrl-K hint |
| `--fusion-radius-md` | 10px | Buttons, inputs, icon chips |
| `--fusion-radius-lg` | 14px | Cards, panels, table containers |
| `--fusion-radius-full` | 999px | Search pills, circular icon buttons, toggles |

| Shadow token | Value | Use |
|---|---|---|
| `--fusion-shadow-search` | `0 6px 24px rgba(20,40,70,.08), 0 1px 3px rgba(20,40,70,.06)` | Hero search bar |
| `--fusion-shadow-panel` | `-8px 0 28px rgba(20,40,70,.10)` | Right slide-in detail panel |
| `--fusion-shadow-pop` | `0 8px 28px rgba(20,40,70,.12)` | Dropdowns, modals, toasts |

Cards get **no shadow** — 1px `--fusion-border` only.

## Iconography

- Outline style, 1.5–1.75px stroke, 16–20px, matching Lucide/Feather. No filled or duotone icons.
- Icon color follows its text (blue labels → blue icon; gray meta → gray icon).
- Entity icons: database/cylinder for data products & datasets, open book for guides, person for ownership.
- Icon chips: 48–56px square, `--fusion-radius-md`+ (12px), pastel fill, single-color icon centered.

## Motion

Sparse and quick: 150–200ms ease-out. Hover transitions on border-color/color; side panel slides in 240ms ease-out; no bouncy easing.
