import { APPROVALS } from '../data/models';
import type { Approval, Model, ModelType, Scope } from '../types';

const MONTHS: Record<string, string> = {
  '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
  '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec',
};

export const COMPARE_PALETTE = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)'];
export const MAX_COMPARE = 4;
export const PRODUCTION_BAR = 80;

export const blended = (m: Model) => (m.cin + m.cout) / 2;

export const overall = (m: Model) => {
  const s = m.s;
  return Math.round((s.m + s.c + s.ch + s.ct + s.r + s.t) / 6);
};

export const ctxLabel = (c: number) => (c >= 1000 ? `${c / 1000}M` : `${c}K`);

export const license = (t: ModelType) =>
  t === 'Frontier' ? 'Proprietary API' : t === 'Open' ? 'Open weights' : 'Internal only';

export const modelScope = (m: Model): Scope => (m.type === 'Open' ? 'Public' : 'Proprietary');

export const paramLabel = (m: Model) => (m.params == null ? 'Undisclosed' : `${m.params}B`);

export const paramBucket = (m: Model) => {
  if (m.params == null) return 'Undisclosed';
  if (m.params < 10) return '<10B';
  if (m.params <= 100) return '10–100B';
  return '>100B';
};

export const fmtRelease = (rel: string) => {
  const [year, month] = rel.split('-');
  return `${MONTHS[month] ?? ''} ${year}`;
};

export const typeColor = (t: ModelType) =>
  t === 'Frontier' ? 'var(--frontier)' : t === 'Open' ? 'var(--open)' : 'var(--internal)';

export const approvalOf = (id: string): Approval => APPROVALS[id] ?? 'na';

/** Shared approval color encoding: solid accent = approved, light = pending, gray = not approved. */
export const APPROVAL_FILL: Record<Approval, string> = {
  approved: 'var(--accent)',
  pending: 'var(--salt-color-blue-200)',
  na: 'var(--salt-color-gray-300)',
};

export const APPROVAL_STATUS: Record<Approval, { label: string; color: string }> = {
  approved: { label: 'Approved for use', color: 'var(--open)' },
  pending: { label: 'Pending review', color: 'var(--internal)' },
  na: { label: 'Not approved — not deployable', color: 'var(--muted)' },
};
