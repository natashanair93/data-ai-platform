import { benchmarkById } from '../data/benchmarks';
import { useApp } from '../state/store';
import { mono } from '../ui/primitives';

/** "What does it measure?" — a benchmark's definition and admin-curated version history. */
export default function Methodology() {
  const { methodId, go } = useApp();
  const benchmark = benchmarkById(methodId);
  if (!benchmark) return null;

  const facts = [
    { label: 'Dataset', value: benchmark.dataset, mono: false },
    { label: 'Version', value: benchmark.version, mono: true },
    { label: 'Last updated', value: benchmark.updated, mono: false },
  ];

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '30px 40px 90px' }}>
      <div onClick={() => go('landing')} style={{ fontSize: 12.5, color: 'var(--muted)', cursor: 'pointer', marginBottom: 18 }}>
        ← Back to benchmarking
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)' }}>BENCHMARK</span>
        <span
          style={{
            fontSize: 10.5, border: '1px solid var(--line)', borderRadius: 4, padding: '1px 6px',
            color: benchmark.scope === 'Public' ? 'var(--muted)' : 'var(--internal)',
          }}
        >
          {benchmark.scope}
        </span>
      </div>
      <h1 style={{ fontSize: 27, fontWeight: 600, margin: '0 0 4px' }}>{benchmark.label}</h1>
      <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 26 }}>{benchmark.metric}</div>

      <div style={{ border: '1px solid var(--line)', borderRadius: 11, background: 'var(--panel)', padding: '22px 24px' }}>
        <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 8 }}>WHAT IT MEASURES</div>
        <p style={{ fontSize: 15, lineHeight: 1.6, margin: '0 0 22px' }}>{benchmark.measures}</p>
        <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 8 }}>HOW IT'S SCORED</div>
        <p style={{ fontSize: 15, lineHeight: 1.6, margin: '0 0 4px' }}>{benchmark.scoring}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 13, margin: '18px 0' }}>
        {facts.map((fact) => (
          <div key={fact.label} style={{ border: '1px solid var(--line)', borderRadius: 10, background: 'var(--panel)', padding: '14px 15px' }}>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 6 }}>{fact.label}</div>
            <div style={fact.mono ? { ...mono, fontSize: 15, fontWeight: 600 } : { fontSize: 13.5, fontWeight: 600, lineHeight: 1.4 }}>
              {fact.value}
            </div>
          </div>
        ))}
      </div>

      {benchmark.history.length > 0 && (
        <>
          <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', margin: '24px 0 12px' }}>
            VERSION HISTORY <span style={{ color: 'var(--faint)', textTransform: 'none', letterSpacing: 0 }}>— admins curate this</span>
          </div>
          {benchmark.history.map((h) => (
            <div key={h.v} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid var(--line2)' }}>
              <span style={{ ...mono, fontSize: 13, fontWeight: 600, width: 48 }}>{h.v}</span>
              <span style={{ fontSize: 12.5, color: 'var(--faint)', width: 90 }}>{h.date}</span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>{h.note}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
