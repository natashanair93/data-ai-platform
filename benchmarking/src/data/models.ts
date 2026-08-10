import type { Approval, Model } from '../types';

export const MODELS: Model[] = [
  { id: 'claude-fable-5', name: 'Claude Fable 5', prov: 'Anthropic', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision'], host: ['AWS', 'GCP', 'Vendor API'], params: null, rel: '2026-07', ctx: 500, cin: 18, cout: 80, lat: 5.8, s: { m: 92, c: 90, ch: 95, ct: 92, r: 91, t: 90 } },
  { id: 'claude-opus-4-1', name: 'Claude Opus 4.1', prov: 'Anthropic', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision'], host: ['AWS', 'GCP', 'Vendor API'], params: null, rel: '2026-05', ctx: 200, cin: 15, cout: 75, lat: 6.2, s: { m: 88, c: 82, ch: 94, ct: 91, r: 86, t: 89 } },
  { id: 'claude-sonnet-4-5', name: 'Claude Sonnet 4.5', prov: 'Anthropic', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision'], host: ['AWS', 'Azure', 'GCP', 'Vendor API'], params: null, rel: '2026-05', ctx: 200, cin: 3, cout: 15, lat: 3.1, s: { m: 85, c: 79, ch: 92, ct: 88, r: 83, t: 86 } },
  { id: 'gpt-5', name: 'GPT-5', prov: 'OpenAI', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision'], host: ['Azure', 'Vendor API'], params: null, rel: '2026-04', ctx: 256, cin: 10, cout: 40, lat: 5.4, s: { m: 91, c: 84, ch: 93, ct: 86, r: 90, t: 85 } },
  { id: 'gpt-5-mini', name: 'GPT-5 mini', prov: 'OpenAI', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision'], host: ['Azure', 'Vendor API'], params: null, rel: '2026-04', ctx: 128, cin: 0.6, cout: 2.4, lat: 2.2, s: { m: 80, c: 71, ch: 87, ct: 76, r: 78, t: 75 } },
  { id: 'gemini-2-5-pro', name: 'Gemini 2.5 Pro', prov: 'Google', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision', 'Audio'], host: ['GCP', 'Vendor API'], params: null, rel: '2026-03', ctx: 1000, cin: 2.5, cout: 15, lat: 4.0, s: { m: 86, c: 78, ch: 90, ct: 95, r: 85, t: 80 } },
  { id: 'gemini-2-5-flash', name: 'Gemini 2.5 Flash', prov: 'Google', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision'], host: ['GCP', 'Vendor API'], params: null, rel: '2026-03', ctx: 1000, cin: 0.3, cout: 2.5, lat: 1.6, s: { m: 76, c: 66, ch: 85, ct: 90, r: 72, t: 70 } },
  { id: 'grok-4', name: 'Grok 4', prov: 'xAI', type: 'Frontier', status: 'GA', mod: ['Text', 'Vision'], host: ['Azure', 'Vendor API'], params: null, rel: '2026-02', ctx: 256, cin: 5, cout: 25, lat: 5.0, s: { m: 89, c: 77, ch: 88, ct: 82, r: 88, t: 78 } },
  { id: 'llama-4-maverick', name: 'Llama 4 Maverick', prov: 'Meta', type: 'Open', status: 'GA', mod: ['Text', 'Vision'], host: ['AWS', 'GCP', 'Together'], params: 400, rel: '2026-01', ctx: 1000, cin: 0.35, cout: 1.15, lat: 2.0, s: { m: 73, c: 68, ch: 83, ct: 84, r: 71, t: 69 } },
  { id: 'llama-4-scout', name: 'Llama 4 Scout', prov: 'Meta', type: 'Open', status: 'GA', mod: ['Text', 'Vision'], host: ['AWS', 'Together'], params: 109, rel: '2026-01', ctx: 10000, cin: 0.15, cout: 0.6, lat: 1.4, s: { m: 64, c: 58, ch: 78, ct: 88, r: 62, t: 60 } },
  { id: 'mistral-large-2', name: 'Mistral Large 2', prov: 'Mistral', type: 'Open', status: 'GA', mod: ['Text'], host: ['Azure', 'Together', 'Vendor API'], params: 123, rel: '2025-11', ctx: 128, cin: 2, cout: 6, lat: 2.6, s: { m: 74, c: 70, ch: 82, ct: 74, r: 70, t: 72 } },
  { id: 'deepseek-v3-1', name: 'DeepSeek-V3.1', prov: 'DeepSeek', type: 'Open', status: 'GA', mod: ['Text'], host: ['Together', 'Vendor API'], params: 671, rel: '2026-01', ctx: 128, cin: 0.27, cout: 1.1, lat: 2.4, s: { m: 84, c: 80, ch: 84, ct: 78, r: 82, t: 76 } },
  { id: 'qwen3-235b', name: 'Qwen3 235B', prov: 'Alibaba', type: 'Open', status: 'GA', mod: ['Text'], host: ['Together', 'Vendor API'], params: 235, rel: '2025-12', ctx: 256, cin: 0.2, cout: 0.9, lat: 2.3, s: { m: 82, c: 75, ch: 83, ct: 80, r: 79, t: 71 } },
  { id: 'atlas-core-70b', name: 'Atlas-Core 70B', prov: 'In-house', type: 'Internal', status: 'Internal', mod: ['Text'], host: ['Internal'], params: 70, rel: '2026-02', ctx: 128, cin: 0.4, cout: 0.4, lat: 1.9, s: { m: 78, c: 72, ch: 81, ct: 79, r: 75, t: 73 } },
  { id: 'helios-support-ft', name: 'Helios-Support FT', prov: 'In-house', type: 'Internal', status: 'Internal', mod: ['Text'], host: ['Internal'], params: 70, rel: '2026-04', ctx: 200, cin: 3.2, cout: 15, lat: 3.0, s: { m: 60, c: 55, ch: 96, ct: 85, r: 68, t: 88 } },
  { id: 'orion-mini', name: 'Orion-Mini', prov: 'In-house', type: 'Internal', status: 'Internal', mod: ['Text'], host: ['Internal'], params: 8, rel: '2025-10', ctx: 32, cin: 0.1, cout: 0.3, lat: 0.9, s: { m: 55, c: 48, ch: 74, ct: 60, r: 52, t: 58 } },
  { id: 'vega-code-ft', name: 'Vega-Code FT', prov: 'In-house', type: 'Internal', status: 'Internal', mod: ['Text'], host: ['Internal'], params: 34, rel: '2026-03', ctx: 128, cin: 0.5, cout: 1.5, lat: 2.1, s: { m: 70, c: 88, ch: 72, ct: 76, r: 72, t: 80 } },
];

export const PUBLISHERS = ['Anthropic', 'OpenAI', 'Google', 'xAI', 'Meta', 'Mistral', 'DeepSeek', 'Alibaba', 'In-house'];
export const HOSTS = ['AWS', 'Azure', 'GCP', 'Vendor API', 'Together', 'Internal'];
export const PARAM_BUCKETS = ['<10B', '10–100B', '>100B', 'Undisclosed'];

/** Firm approval status — drives the shared color encoding across every chart. */
export const APPROVALS: Record<string, Approval> = {
  'claude-fable-5': 'approved',
  'claude-opus-4-1': 'approved',
  'claude-sonnet-4-5': 'approved',
  'gemini-2-5-pro': 'approved',
  'atlas-core-70b': 'approved',
  'gpt-5': 'pending',
  'grok-4': 'pending',
  'gpt-5-mini': 'pending',
  'gemini-2-5-flash': 'pending',
  'deepseek-v3-1': 'na',
  'qwen3-235b': 'na',
};

export const modelById = (id: string) => MODELS.find((m) => m.id === id);
