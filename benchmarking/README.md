# Firm Platform — Model Benchmarking

React implementation of the **Model Benchmarking v2** prototype (`Model Benchmarking v2.dc.html`, exported from
Claude Design), skinned with the **Fusion design system** tokens.

## Stack

- **React 18 + TypeScript**, built with **Vite**
- **No UI framework** — layout and components are built directly on the Fusion (Salt) CSS token set, so the visual
  output matches the prototype exactly and nothing has to be un-themed later
- **No router / no server** — a single `view` field in one context store drives navigation, matching the prototype's
  single-page flow. Swapping in React Router later means replacing `go()`/`openModel()` with route pushes.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run typecheck
```

## Structure

```
src/
  App.tsx                    shell: top bar, optional filter sidebar, view switch, shortlist tray
  state/store.tsx            the whole app state: view, shortlist, filters, recently viewed, search
  data/models.ts             16-model catalog + firm approval status
  data/benchmarks.ts         6 benchmark tasks with methodology + version history
  lib/derive.ts              blended cost, overall score, labels, approval color encoding
  ui/primitives.tsx          Bar, AddButton, ComparingButton, CheckBox, RadioDot, ApprovalLegend, Card
  components/
    TopBar.tsx               wordmark + centered global model search with View / Compare per result
    FilterSidebar.tsx        accordion filters (All models only)
    FirmIndexChart.tsx       top-10 bar chart, hover highlight + tooltip, production bar at 80.0
    WhatsNew.tsx             two featured cards + three-card stream (curated content)
    TopModels.tsx            ranked list with the Accuracy / Latency / Cost switcher
    CoreMetricsCharts.tsx    cost / latency / accuracy for the shortlist
  pages/
    Landing.tsx              What's new → Firm Index → Top models
    AllModels.tsx            explorer: chips, ranked grid, benchmark accordion
    ModelDetail.tsx          header actions, key metrics, scores, filter-aware alternatives
    Comparison.tsx           split view: picker + matrix with best-in-row highlighting
    Methodology.tsx          "what does it measure?" + version history
    Stub.tsx                 Agents / Skills placeholders
  theme/                     Fusion design system tokens (verbatim copies) + app-level aliases
```

## Behavior rules worth knowing

- **One shortlist, max 4 models**, shared by every surface. Every Compare control is the same
  `Compare / ✓ Comparing / Max 4` button, and the floating tray is the single selection summary.
- **Color encodes approval status** in every chart: solid accent = approved, light blue = pending review,
  gray = not approved. Model identity colors (`--c1`…`--c4`) are reserved for comparison charts, where each
  shortlist slot keeps its color across all three charts.
- **Public / proprietary is a benchmark property, never a model one.** The Benchmarks filter only scopes the Task
  list (greying the opposite scope) and the grid's benchmark column tag — it never filters models.
- **Task filter** re-ranks the grid, renames the benchmark column, and collapses each row's benchmark accordion to
  that single task.
- **Alternatives** are the nearest models by overall score with a slight same-type preference; their sub-line
  reflects whichever filters are active (`86% math · 3.1s latency`), falling back to `{overall}% overall`.
- **Search** is one query: the global box and the sidebar box stay in sync, and Enter (or the dropdown footer)
  lands on All models with the query applied as a removable chip.

## Deviations from the prototype

- The comparison page implements the **split view only** — the "Alternative UX" switcher (model strip,
  per-column search) was removed during design and is unreachable in the exported prototype, so the dead modes
  are not carried over.
- `Model Benchmarking v2 - Decisions.md` (in the design bundle) lists the assumptions behind the data and the
  open questions — index weighting, What's new sourcing, personalization, selection persistence — that are
  unchanged here.

Fonts load from Google Fonts via the token stylesheet, so the app needs network access for type to render as
designed.
