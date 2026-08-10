import { overall } from '../lib/derive';
import { modelById, useApp } from '../state/store';
import { ComparingButton, GhostButton, mono } from '../ui/primitives';
import type { Model } from '../types';

/** Cost / Latency / Accuracy for the shortlist — same model order in all three charts. */
export default function CoreMetricsCharts() {
  const { shortlist, colorOf, clearShortlist } = useApp();
  const selected = shortlist.map(modelById).filter(Boolean) as Model[];
  if (!selected.length) return null;

  const maxCin = Math.max(...selected.map((m) => m.cin), 0.1);
  const maxLat = Math.max(...selected.map((m) => m.lat), 0.1);

  const charts: { title: string; sub: string; value: (m: Model) => number; label: (m: Model) => string; max: number }[] = [
    { title: 'Cost — Input', sub: 'USD / 1M tokens', value: (m) => m.cin, label: (m) => `$${m.cin}`, max: maxCin },
    { title: 'Latency — P50', sub: 'seconds', value: (m) => m.lat, label: (m) => `${m.lat}s`, max: maxLat },
    { title: 'Accuracy', sub: 'overall %', value: (m) => overall(m), label: (m) => `${overall(m)}%`, max: 100 },
  ];

  return (
    <div style={{ marginBottom: 26 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Core metrics comparison</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <GhostButton onClick={clearShortlist}>Clear</GhostButton>
          <ComparingButton />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        {charts.map((chart) => (
          <div key={chart.title} style={{ border: '1px solid var(--line)', borderRadius: 11, background: 'var(--panel)', padding: '16px 18px 14px' }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 2 }}>{chart.title}</div>
            <div style={{ fontSize: 11.5, color: 'var(--faint)', marginBottom: 14 }}>{chart.sub}</div>
            {selected.map((m) => {
              const color = colorOf(m.id);
              const width = Math.max(3, (chart.value(m) / chart.max) * 100);
              return (
                <div key={m.id} style={{ display: 'grid', gridTemplateColumns: '108px 1fr 52px', gap: 9, alignItems: 'center', marginBottom: 11 }}>
                  <span
                    style={{
                      fontSize: 11.5, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden',
                      textOverflow: 'ellipsis', display: 'flex', alignItems: 'center', gap: 6,
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: color, flex: 'none' }} />
                    {m.name}
                  </span>
                  <span style={{ position: 'relative', height: 14, background: 'var(--line2)', borderRadius: 3, overflow: 'hidden' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${width.toFixed(1)}%`, background: color, borderRadius: 3 }} />
                  </span>
                  <span style={{ ...mono, fontSize: 12, fontWeight: 600, textAlign: 'right' }}>{chart.label(m)}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
