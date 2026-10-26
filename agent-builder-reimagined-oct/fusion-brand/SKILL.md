---
name: fusion-brand
description: The Fusion design system — brand tokens, components, and page patterns for building UI prototypes for the firm-wide Data & AI platform (Fusion). Use this skill whenever the user asks to build, prototype, mock up, or redesign ANY Fusion screen, feature, or component — catalog pages, agent builder surfaces, model enablement, evaluations, dashboards, detail pages, side panels, tables, cards — or mentions "Fusion", "the platform", "our design system", "on-brand", or asks for a new component "in our style". Also use when extending the brand with net-new components so they match the existing visual language.
---

# Fusion Brand Skill

Fusion is an enterprise Data & AI platform for a regulated bank. Its visual language is: **calm, credible, editorial**. White surfaces, one confident blue, generous whitespace, quiet typography, and restrained ornamentation. It should feel like a well-set financial publication, not a flashy SaaS product.

## Workflow

1. Read `references/design-tokens.md` first — every color, font size, radius, and shadow. Never invent hex values; use the tokens.
2. Read `references/components.md` for the component you need (buttons, cards, search, tabs, tables, badges, side panel, filters, etc.). Copy the documented HTML/CSS patterns.
3. Read `references/patterns.md` when composing a full page (home/hero, catalog browse, entity detail, tabbed detail with table).
4. If the component doesn't exist yet, follow **Extending the brand** below.
5. Link or inline `assets/fusion-tokens.css` in every prototype — it defines all CSS variables and base styles.

## The brand in one paragraph

One primary blue (`--fusion-blue-700`) does almost all the work: solid buttons, active tab underlines, entity-type labels, links, and the signature **navy top-accent bar on cards**. Everything else is neutral: near-black text, mid-gray secondary text, hairline gray borders, white cards on a faint gray page. Color beyond blue appears only in tiny, meaningful doses — green for approved/available status, soft pastel chips behind icons, muted purple for GUIDE eyebrows. Corners are softly rounded (8–12px; search bars are full pills). Depth comes from hairline borders, not shadows — shadows are reserved for the hero search bar and slide-in panels. Labels are ALL-CAPS, letter-spaced, and small; headings are large, tight, and near-black.

## Hard rules

- **Never invent colors.** If you need a new tint, derive it by mixing an existing token with white (backgrounds) or using the defined scale.
- **One accent per surface.** Blue is the accent. Don't add teal, orange, or multi-color charts unless data requires categorical color — then use the muted data palette in the tokens file.
- **Borders over shadows** for cards and tables. Shadow only on floating elements (hero search, overlays, side panels).
- **Caps labels everywhere metadata appears**: entity types (blue), section labels (gray), table sub-labels (gray). 11–12px, 0.06–0.08em letter-spacing, 600 weight.
- **The card top-accent bar** (4px, `--fusion-navy-800`) marks catalog entity cards. Don't put it on every container — utility cards (Product Details, Ownership) have plain hairline borders.
- **Identifiers are monospace**, gray, with a copy-icon affordance.
- **No pure black, no pure saturated blue.** Text is `--fusion-ink`; blues come from the scale.
- **Density is enterprise-comfortable**: 24px card padding, 16–20px table cell padding, 64px+ between page sections.

## Extending the brand (new components)

When Fusion has no existing pattern for what you're building:

1. **Find the nearest relative.** A new "prompt card" inherits from the entity card. A new wizard step header inherits from tabs + section labels. A new toast inherits from the status badge + panel shadow.
2. **Reuse the anatomy, not just the colors.** Fusion components share a skeleton: caps eyebrow label → bold title → gray supporting text → quiet metadata footer. New components should follow that hierarchy.
3. **Pick states from the existing vocabulary:** hover = border darkens to `--fusion-border-strong` + title turns blue; active/selected = blue underline or blue left/top accent; disabled = 45% opacity.
4. **Interactive elements get the button system** — solid blue (primary), outlined blue (secondary), gray pill (tertiary). Don't create a fourth button style.
5. **Status semantics:** green = approved/available/success, amber = pending/draft, red = rejected/error, gray = inactive/archived. Always dot-or-check + text, never color alone.
6. Document the decision in a one-line HTML comment at the top of the new component (`<!-- New pattern: derived from entity card + status badge -->`) so the design rationale travels with the code.

Detailed extension recipes (empty states, modals, wizards, toasts, agent-builder-style status flows, charts) are in `references/patterns.md` § "Net-new patterns".

## References

- `references/design-tokens.md` — colors, typography, spacing, radius, shadows, icon style. **Always read.**
- `references/components.md` — copy-paste HTML/CSS for all observed components. Read the sections you need (has a table of contents).
- `references/patterns.md` — page-level layouts and net-new pattern recipes.
- `assets/fusion-tokens.css` — the drop-in stylesheet. Inline it into single-file prototypes.
