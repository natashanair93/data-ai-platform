import type { Benchmark } from '../types';

export const BENCHMARKS: Benchmark[] = [
  {
    id: 'math', sk: 'm', label: 'Math', metric: 'AIME 2025 + MATH-500', scope: 'Public',
    measures: 'Multi-step quantitative reasoning: competition math, symbolic manipulation, and word problems where one wrong step fails the whole answer.',
    scoring: 'Exact-match accuracy, pass@1 at temperature 0. No tools, no calculator.',
    dataset: 'AIME 2025 + MATH-500 (1,000 problems)', version: 'v4.2', updated: 'May 2026',
    history: [
      { v: 'v4.2', date: 'May 2026', note: 'Added AIME 2025; retired 12 leaked items.' },
      { v: 'v4.0', date: 'Jan 2026', note: 'Switched to pass@1 from maj@8.' },
      { v: 'v3.5', date: 'Sep 2025', note: 'Initial MATH-500 subset.' },
    ],
  },
  {
    id: 'coding', sk: 'c', label: 'Coding', metric: 'SWE-bench Verified', scope: 'Public',
    measures: 'Resolving real GitHub issues end to end: read a repo, write a patch, pass the hidden tests. Agentic, not single-shot completion.',
    scoring: '% of issues whose patch passes all tests, single attempt, standard agent harness.',
    dataset: '500 human-verified GitHub issues', version: 'v2.1', updated: 'Apr 2026',
    history: [
      { v: 'v2.1', date: 'Apr 2026', note: 'Refreshed harness; pinned dependency versions.' },
      { v: 'v2.0', date: 'Dec 2025', note: 'Moved to Verified split.' },
      { v: 'v1.4', date: 'Aug 2025', note: 'Full SWE-bench.' },
    ],
  },
  {
    id: 'chat', sk: 'ch', label: 'Chat', metric: 'Arena preference', scope: 'Public',
    measures: 'Human preference in open-ended conversation: helpfulness, tone, instruction-following on everyday prompts.',
    scoring: 'Crowd pairwise votes, Elo normalized to a 0–100 scale.',
    dataset: '~80k crowd pairwise comparisons', version: '2026-Q2', updated: 'Jun 2026',
    history: [
      { v: '2026-Q2', date: 'Jun 2026', note: 'Quarterly recompute.' },
      { v: '2026-Q1', date: 'Mar 2026', note: 'Added style-control normalization.' },
      { v: '2025-Q4', date: 'Dec 2025', note: 'Baseline.' },
    ],
  },
  {
    id: 'context', sk: 'ct', label: 'Long context', metric: 'RULER 128k + internal needle', scope: 'Proprietary',
    measures: 'Retrieval and reasoning over long inputs: find the needle, then reason over several needles spread across 128k tokens.',
    scoring: 'Average accuracy across depths and lengths, internal suite.',
    dataset: 'Internal 128k retrieval suite (1,200 docs)', version: 'v1.6', updated: 'May 2026',
    history: [
      { v: 'v1.6', date: 'May 2026', note: 'Added multi-hop needle tasks.' },
      { v: 'v1.4', date: 'Feb 2026', note: 'Extended to 128k.' },
      { v: 'v1.0', date: 'Oct 2025', note: '32k baseline.' },
    ],
  },
  {
    id: 'reasoning', sk: 'r', label: 'Reasoning', metric: 'GPQA Diamond', scope: 'Public',
    measures: 'Graduate-level science questions written to be Google-proof — biology, physics, chemistry that demand real reasoning, not recall.',
    scoring: 'Pass@1 accuracy on the Diamond split.',
    dataset: '448 expert-written questions', version: 'v1.3', updated: 'Mar 2026',
    history: [
      { v: 'v1.3', date: 'Mar 2026', note: 'Rephrased 9 ambiguous items.' },
      { v: 'v1.1', date: 'Nov 2025', note: 'Diamond split only.' },
      { v: 'v1.0', date: 'Jul 2025', note: 'Baseline.' },
    ],
  },
  {
    id: 'tooluse', sk: 't', label: 'Tool use', metric: 'τ-bench + internal tools', scope: 'Proprietary',
    measures: 'Correct multi-step tool calling against real APIs: pick the tool, fill the arguments, recover from errors, finish the task.',
    scoring: 'Task success rate across 12 internal tools and the τ-bench retail/airline suites.',
    dataset: 'Internal agent eval, 12 tools', version: 'v0.9', updated: 'Jun 2026',
    history: [
      { v: 'v0.9', date: 'Jun 2026', note: 'Added error-recovery scenarios.' },
      { v: 'v0.7', date: 'Apr 2026', note: 'Wired τ-bench.' },
      { v: 'v0.5', date: 'Feb 2026', note: 'Internal tools only.' },
    ],
  },
];

export const benchmarkById = (id: string) => BENCHMARKS.find((b) => b.id === id);
