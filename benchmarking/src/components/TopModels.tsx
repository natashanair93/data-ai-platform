import { useState } from 'react';
import { APPROVAL_FILL, approvalOf, blended, overall } from '../lib/derive';
import { useApp } from '../state/store';
import { AddButton, ApprovalLegend, Card, mono } from '../ui/primitives';
import type { Model } from '../types';

const METRICS = {
  acc: { label: 'Accuracy', hint: 'overall % · higher is better' },
  lat: { label: 'Latency', hint: 'p50 seconds · lower is better' },
  cost: { label: 'Cost', hint: 'blended $ / 1M · lower is better' },
} as const;

type MetricKey = keyof typeof METRICS;

/** Top models by metric — one model per row, longest bar first. */
export default function TopModels() {
  const { models, landingMetric, setLandingMetric, openModel, go } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const key: MetricKey = landingMetric;
  const valueOf = (m: Model) => (key === 'acc' ? overall(m) : key === 'lat' ? m.lat : blended(m));

  const sorted = models
    .slice()
    .sort((a, b) => (key === 'acc' ? valueOf(b) - valueOf(a) : valueOf(a) - valueOf(b)))
    .slice(0, showMore ? 10 : 5);

  // Lower-is-better metrics invert the bar so the longest bar is always the best model.
  const max = Math.max(...sorted.map(valueOf), 0.001);

  return (
    <Card style={{ padding: '18px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ fontSize: 16, fontWeight: 600, whiteSpace: 'nowrap' }}>Top models by</span>
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: 9, height: 32, padding: '0 13px',
                border: '1px solid var(--line)', borderRadius: 7, background: 'var(--panel)',
                fontSize: 13, fontWeight: 600, color: 'var(--ink)', cursor: 'pointer',
              }}
            >
              {METRICS[key].label} <span style={{ color: 'var(--faint)', fontSize: 10 }}>▾</span>
            </button>
            {menuOpen && (
              <div
                style={{
                  position: 'absolute', top: 38, left: 0, zIndex: 40, width: 190, background: 'var(--panel)',
                  border: '1px solid var(--line)', borderRadius: 9, boxShadow: '0 12px 32px rgba(0,0,0,0.16)', padding: 6,
                }}
              >
                {(Object.keys(METRICS) as MetricKey[]).map((k) => (
                  <div
                    key={k}
                    className="row-hover"
                    onClick={() => { setLandingMetric(k); setMenuOpen(false); }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '9px 11px', borderRadius: 6, cursor: 'pointer',
                      background: key === k ? 'var(--accent-soft)' : 'transparent',
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{METRICS[k].label}</span>
                    {key === k && <span style={{ color: 'var(--accent)', fontSize: 12 }}>✓</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span style={{ fontSize: 12, color: 'var(--faint)' }}>{METRICS[key].hint}</span>
        </div>
      </div>

      <div style={{ border: '1px solid var(--line)', borderRadius: 9, overflow: 'hidden' }}>
        {sorted.map((m) => {
          const raw = valueOf(m);
          const width = key === 'acc' ? raw : Math.max(4, 100 - (raw / max) * 88);
          const value = key === 'acc' ? `${raw}%` : key === 'lat' ? `${raw}s` : `$${raw.toFixed(2)}`;
          return (
            <div
              key={m.id}
              className="row-hover"
              style={{
                display: 'grid', gridTemplateColumns: '190px 1fr 60px 158px', gap: 18, alignItems: 'center',
                padding: '12px 16px', borderBottom: '1px solid var(--line2)',
              }}
            >
              <span
                onClick={() => openModel(m.id)}
                style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {m.name}
              </span>
              <span style={{ position: 'relative', height: 10, background: 'var(--line2)', borderRadius: 5, overflow: 'hidden' }}>
                <span
                  style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: `${width.toFixed(1)}%`,
                    borderRadius: 5, background: APPROVAL_FILL[approvalOf(m.id)],
                  }}
                />
              </span>
              <span style={{ ...mono, fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{value}</span>
              <span style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <AddButton id={m.id} height={28} />
                <button
                  type="button"
                  onClick={() => openModel(m.id)}
                  style={{
                    height: 28, padding: '0 14px', border: 'none', borderRadius: 7, background: 'var(--accent)',
                    color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  View
                </button>
              </span>
            </div>
          );
        })}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, padding: '11px 16px' }}>
          <span onClick={() => setShowMore((s) => !s)} style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--accent)', cursor: 'pointer' }}>
            {showMore ? 'Show fewer' : 'Show more'}
          </span>
          {showMore && (
            <span onClick={() => go('home')} style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--accent)', cursor: 'pointer' }}>
              View all {models.length} models →
            </span>
          )}
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <ApprovalLegend short />
      </div>

      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 35 }} />}
    </Card>
  );
}
