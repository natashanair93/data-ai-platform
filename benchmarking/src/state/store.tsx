import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { APPROVALS, HOSTS, MODELS, PARAM_BUCKETS, PUBLISHERS, modelById } from '../data/models';
import { BENCHMARKS, benchmarkById } from '../data/benchmarks';
import { MAX_COMPARE, blended, overall, paramBucket } from '../lib/derive';
import type { Model, View } from '../types';

export interface Filters {
  search: string;
  task: string; // benchmark id or 'all'
  scope: 'all' | 'Public' | 'Proprietary';
  pub: Record<string, boolean>;
  host: Record<string, boolean>;
  param: Record<string, boolean>;
  cost: number;
  lat: number;
}

const EMPTY_FILTERS: Filters = {
  search: '', task: 'all', scope: 'all', pub: {}, host: {}, param: {}, cost: 50, lat: 8,
};

export interface Chip {
  label: string;
  remove: () => void;
}

interface AppState {
  view: View;
  modelId: string;
  methodId: string;
  shortlist: string[];
  filters: Filters;
  recentViewed: string[];
  globalQuery: string;
  landingMetric: 'acc' | 'lat' | 'cost';
  pickSearch: string;
  expanded: Record<string, boolean>;
  cameFrom: View;
}

interface AppApi extends AppState {
  models: Model[];
  benchmarks: typeof BENCHMARKS;
  filtered: Model[];
  taskBenchmark: ReturnType<typeof benchmarkById> | undefined;
  activeChips: Chip[];
  inShortlist: (id: string) => boolean;
  colorOf: (id: string) => string;
  toggleShortlist: (id: string) => void;
  addToShortlist: (id: string) => void;
  addMany: (ids: string[]) => void;
  swapAt: (index: number, id: string) => void;
  clearShortlist: () => void;
  go: (view: View) => void;
  openModel: (id: string) => void;
  openBenchmarkTask: (id: string) => void;
  openMethod: (id: string) => void;
  openCompare: () => void;
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  toggleFilterKey: (key: 'pub' | 'host' | 'param', value: string) => void;
  resetFilters: () => void;
  setGlobalQuery: (q: string) => void;
  setSearch: (q: string) => void;
  setLandingMetric: (m: AppState['landingMetric']) => void;
  setPickSearch: (q: string) => void;
  toggleExpanded: (id: string) => void;
}

const Ctx = createContext<AppApi | null>(null);

const anyOn = (o: Record<string, boolean>) => Object.keys(o).some((k) => o[k]);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>({
    view: 'landing',
    modelId: 'claude-opus-4-1',
    methodId: 'math',
    shortlist: [],
    filters: EMPTY_FILTERS,
    recentViewed: [],
    globalQuery: '',
    landingMetric: 'acc',
    pickSearch: '',
    expanded: {},
    cameFrom: 'landing',
  });

  const patch = useCallback((p: Partial<AppState>) => setState((s) => ({ ...s, ...p })), []);

  const scrollTop = () => {
    const main = document.querySelector('main');
    if (main) main.scrollTop = 0;
  };

  const go = useCallback((view: View) => { patch({ view }); scrollTop(); }, [patch]);

  const openModel = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      view: 'model',
      modelId: id,
      cameFrom: s.view === 'model' ? s.cameFrom : s.view,
      recentViewed: [id, ...s.recentViewed.filter((x) => x !== id)].slice(0, 12),
    }));
    scrollTop();
  }, []);

  const openBenchmarkTask = useCallback((id: string) => {
    setState((s) => ({ ...s, view: 'home', filters: { ...s.filters, task: id } }));
    scrollTop();
  }, []);

  const openMethod = useCallback((id: string) => { patch({ view: 'method', methodId: id }); scrollTop(); }, [patch]);
  const openCompare = useCallback(() => { patch({ view: 'compare' }); scrollTop(); }, [patch]);

  const toggleShortlist = useCallback((id: string) => {
    setState((s) => {
      if (s.shortlist.includes(id)) return { ...s, shortlist: s.shortlist.filter((x) => x !== id) };
      if (s.shortlist.length >= MAX_COMPARE) return s;
      return { ...s, shortlist: [...s.shortlist, id] };
    });
  }, []);

  const addToShortlist = useCallback((id: string) => {
    setState((s) =>
      s.shortlist.includes(id) || s.shortlist.length >= MAX_COMPARE
        ? s
        : { ...s, shortlist: [...s.shortlist, id] },
    );
  }, []);

  const addMany = useCallback((ids: string[]) => {
    setState((s) => {
      const next = s.shortlist.slice();
      ids.forEach((id) => { if (!next.includes(id) && next.length < MAX_COMPARE) next.push(id); });
      return { ...s, shortlist: next };
    });
  }, []);

  const swapAt = useCallback((index: number, id: string) => {
    setState((s) => {
      if (s.shortlist.includes(id)) return s;
      const next = s.shortlist.slice();
      next[index] = id;
      return { ...s, shortlist: next };
    });
  }, []);

  const clearShortlist = useCallback(() => patch({ shortlist: [] }), [patch]);

  const setFilter = useCallback(<K extends keyof Filters>(key: K, value: Filters[K]) => {
    setState((s) => ({ ...s, filters: { ...s.filters, [key]: value } }));
  }, []);

  const toggleFilterKey = useCallback((key: 'pub' | 'host' | 'param', value: string) => {
    setState((s) => ({
      ...s,
      filters: { ...s.filters, [key]: { ...s.filters[key], [value]: !s.filters[key][value] } },
    }));
  }, []);

  const resetFilters = useCallback(() => patch({ filters: EMPTY_FILTERS, globalQuery: '' }), [patch]);

  const setGlobalQuery = useCallback((q: string) => {
    setState((s) => ({
      ...s,
      globalQuery: q,
      filters: s.view === 'home' ? { ...s.filters, search: q } : s.filters,
    }));
  }, []);

  /** The sidebar search and the global search box stay in sync both ways. */
  const setSearch = useCallback((q: string) => {
    setState((s) => ({ ...s, globalQuery: q, filters: { ...s.filters, search: q } }));
  }, []);

  const toggleExpanded = useCallback((id: string) => {
    setState((s) => ({ ...s, expanded: { ...s.expanded, [id]: !s.expanded[id] } }));
  }, []);

  const { filters } = state;

  const passes = useCallback(
    (m: Model) => {
      const q = filters.search.trim().toLowerCase();
      if (q && !(m.name.toLowerCase().includes(q) || m.prov.toLowerCase().includes(q))) return false;
      if (anyOn(filters.pub) && !filters.pub[m.prov]) return false;
      if (anyOn(filters.host) && !m.host.some((h) => filters.host[h])) return false;
      if (anyOn(filters.param) && !filters.param[paramBucket(m)]) return false;
      if (blended(m) > filters.cost) return false;
      if (m.lat > filters.lat) return false;
      return true;
    },
    [filters],
  );

  const taskBenchmark = filters.task === 'all' ? undefined : benchmarkById(filters.task);

  const filtered = useMemo(() => {
    const list = MODELS.filter(passes);
    const sk = taskBenchmark?.sk;
    return list.sort((a, b) => (sk ? b.s[sk] - a.s[sk] : overall(b) - overall(a)));
  }, [passes, taskBenchmark]);

  const activeChips = useMemo(() => {
    const chips: Chip[] = [];
    if (taskBenchmark) chips.push({ label: `Task: ${taskBenchmark.label}`, remove: () => setFilter('task', 'all') });
    if (filters.scope !== 'all') chips.push({ label: filters.scope, remove: () => setFilter('scope', 'all') });
    PUBLISHERS.forEach((p) => { if (filters.pub[p]) chips.push({ label: p, remove: () => toggleFilterKey('pub', p) }); });
    HOSTS.forEach((h) => { if (filters.host[h]) chips.push({ label: h, remove: () => toggleFilterKey('host', h) }); });
    PARAM_BUCKETS.forEach((b) => { if (filters.param[b]) chips.push({ label: b, remove: () => toggleFilterKey('param', b) }); });
    if (filters.cost < 50) chips.push({ label: `≤ $${filters.cost}`, remove: () => setFilter('cost', 50) });
    if (filters.lat < 8) chips.push({ label: `≤ ${filters.lat}s`, remove: () => setFilter('lat', 8) });
    if (filters.search.trim()) {
      chips.unshift({ label: `Search: "${filters.search.trim()}"`, remove: () => { setFilter('search', ''); patch({ globalQuery: '' }); } });
    }
    return chips;
  }, [filters, taskBenchmark, setFilter, toggleFilterKey, patch]);

  const api: AppApi = {
    ...state,
    models: MODELS,
    benchmarks: BENCHMARKS,
    filtered,
    taskBenchmark,
    activeChips,
    inShortlist: (id) => state.shortlist.includes(id),
    colorOf: (id) => {
      const i = state.shortlist.indexOf(id);
      return i < 0 ? 'var(--ink)' : ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)'][i % 4];
    },
    toggleShortlist,
    addToShortlist,
    addMany,
    swapAt,
    clearShortlist,
    go,
    openModel,
    openBenchmarkTask,
    openMethod,
    openCompare,
    setFilter,
    toggleFilterKey,
    resetFilters,
    setGlobalQuery,
    setSearch,
    setLandingMetric: (m) => patch({ landingMetric: m }),
    setPickSearch: (q) => patch({ pickSearch: q }),
    toggleExpanded,
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}

export { APPROVALS, modelById };
