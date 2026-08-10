export type ScoreKey = 'm' | 'c' | 'ch' | 'ct' | 'r' | 't';
export type ModelType = 'Frontier' | 'Open' | 'Internal';
export type Scope = 'Public' | 'Proprietary';
export type Approval = 'approved' | 'pending' | 'na';
export type View = 'landing' | 'home' | 'model' | 'compare' | 'method' | 'agents' | 'skills';

export interface Model {
  id: string;
  name: string;
  prov: string;
  type: ModelType;
  status: string;
  mod: string[];
  host: string[];
  params: number | null;
  rel: string;
  ctx: number;
  cin: number;
  cout: number;
  lat: number;
  s: Record<ScoreKey, number>;
}

export interface BenchmarkVersion {
  v: string;
  date: string;
  note: string;
}

export interface Benchmark {
  id: string;
  sk: ScoreKey;
  label: string;
  metric: string;
  scope: Scope;
  measures: string;
  scoring: string;
  dataset: string;
  version: string;
  updated: string;
  history: BenchmarkVersion[];
}
