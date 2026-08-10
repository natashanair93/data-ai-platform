import React from 'react';
import { MAX_COMPARE } from '../lib/derive';
import { useApp } from '../state/store';

/** Horizontal progress bar used across every chart in the app. */
export function Bar({
  pct, color = 'var(--accent)', height = 8, radius = 4, track = 'var(--line2)',
}: { pct: number; color?: string; height?: number; radius?: number; track?: string }) {
  return (
    <span style={{ position: 'relative', display: 'block', height, background: track, borderRadius: radius, overflow: 'hidden' }}>
      <span style={{ position: 'absolute', inset: '0 auto 0 0', width: `${Math.max(0, Math.min(100, pct))}%`, background: color, borderRadius: radius }} />
    </span>
  );
}

/** Compare / ✓ Comparing / Max 4 button — one behavior everywhere a model appears. */
export function AddButton({ id, height = 30 }: { id: string; height?: number }) {
  const { shortlist, toggleShortlist } = useApp();
  const on = shortlist.includes(id);
  const full = shortlist.length >= MAX_COMPARE && !on;
  const base: React.CSSProperties = {
    height, padding: '0 12px', borderRadius: 7, fontSize: 12, fontWeight: 600,
    cursor: full ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap',
  };
  const style: React.CSSProperties = on
    ? { ...base, border: '1px solid var(--accent-line)', background: 'var(--accent-soft)', color: 'var(--accent)' }
    : full
      ? { ...base, border: '1px solid var(--line2)', background: 'var(--panel)', color: 'var(--faint)' }
      : { ...base, border: 'none', background: 'transparent', color: 'var(--accent)' };
  return (
    <button
      type="button"
      style={style}
      onClick={(e) => { e.stopPropagation(); if (!full) toggleShortlist(id); }}
    >
      {on ? '✓ Comparing' : full ? `Max ${MAX_COMPARE}` : 'Compare'}
    </button>
  );
}

export function PrimaryButton({
  children, onClick, height = 36,
}: { children: React.ReactNode; onClick?: () => void; height?: number }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        height, padding: '0 16px', border: 'none', borderRadius: 7, background: 'var(--accent)',
        color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children, onClick, height = 38,
}: { children: React.ReactNode; onClick?: () => void; height?: number }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        height, padding: '0 15px', border: '1px solid var(--line)', borderRadius: 8,
        background: 'var(--panel2)', color: 'var(--muted)', fontSize: 13, fontWeight: 600,
        cursor: 'pointer', whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  );
}

/** "Comparing (N) →" — the single entry point into the comparison view. */
export function ComparingButton({ height = 38 }: { height?: number }) {
  const { shortlist, openCompare } = useApp();
  if (!shortlist.length) return null;
  return (
    <button
      type="button"
      onClick={openCompare}
      style={{
        height, padding: '0 15px', border: '1px solid var(--accent-line)', borderRadius: 8,
        background: 'var(--accent-soft)', color: 'var(--accent)', fontSize: 13, fontWeight: 600,
        cursor: 'pointer', whiteSpace: 'nowrap',
      }}
    >
      Comparing ({shortlist.length}) →
    </button>
  );
}

export function CheckBox({ checked }: { checked: boolean }) {
  return (
    <span
      style={{
        width: 15, height: 15, borderRadius: 4, display: 'inline-flex', alignItems: 'center',
        justifyContent: 'center', fontSize: 10, flex: 'none',
        border: `1px solid ${checked ? 'var(--accent)' : 'var(--line)'}`,
        background: checked ? 'var(--accent)' : 'var(--panel)',
        color: checked ? '#fff' : 'transparent',
      }}
    >
      ✓
    </span>
  );
}

export function RadioDot({ checked }: { checked: boolean }) {
  return (
    <span
      style={{
        width: 13, height: 13, borderRadius: '50%', flex: 'none', background: 'var(--panel)',
        border: checked ? '4px solid var(--accent)' : '1.5px solid var(--line)',
      }}
    />
  );
}

/** Approval color key — repeated under each chart that uses the encoding. */
export function ApprovalLegend({ short = false }: { short?: boolean }) {
  const items: [string, string][] = [
    ['var(--accent)', 'Approved for use'],
    ['var(--salt-color-blue-200)', 'Pending review'],
    ['var(--salt-color-gray-300)', short ? 'Not approved' : 'Not approved — not deployable today'],
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
      {items.map(([color, label]) => (
        <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--muted)' }}>
          <span style={{ width: 14, height: 14, borderRadius: 3, background: color }} />
          {label}
        </span>
      ))}
    </div>
  );
}

export function Card({
  children, style,
}: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        border: '1px solid var(--line)', borderRadius: 11, background: 'var(--panel)',
        boxShadow: 'var(--salt-shadow-lowest, none)', ...style,
      }}
    >
      {children}
    </div>
  );
}

export const mono: React.CSSProperties = { fontFamily: 'var(--mono)' };
export const eyebrow: React.CSSProperties = {
  fontSize: 11, letterSpacing: '.06em', fontWeight: 700, color: 'var(--muted)',
};
