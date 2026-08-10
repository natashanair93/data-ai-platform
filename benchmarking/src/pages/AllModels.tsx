import CoreMetricsCharts from '../components/CoreMetricsCharts';
import { blended, overall } from '../lib/derive';
import { useApp } from '../state/store';
import { AddButton, mono } from '../ui/primitives';

const COL_TEMPLATE = 'minmax(190px,0.85fr) 66px 74px minmax(300px,1.9fr) 186px';

/** All models — the explorer: filters (sidebar) ↔ ranked grid ↔ compare. */
export default function AllModels() {
  const {
    models, filtered, filters, benchmarks, taskBenchmark, activeChips, expanded,
    go, openModel, openMethod, toggleExpanded,
  } = useApp();

  const benchColLabel = taskBenchmark ? `${taskBenchmark.label.toUpperCase()} %` : 'BENCHMARKS';
  const benchColProprietary = taskBenchmark?.scope === 'Proprietary' || filters.scope === 'Proprietary';

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '30px 34px 100px' }}>
      <div onClick={() => go('landing')} style={{ fontSize: 12.5, color: 'var(--muted)', cursor: 'pointer', marginBottom: 14 }}>
        ← Overview
      </div>
      <h1 style={{ fontSize: 25, fontWeight: 600, margin: '0 0 5px' }}>All models</h1>
      <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 22px', maxWidth: 620, lineHeight: 1.5 }}>
        Search and compare LLM performance across public and proprietary benchmarks.
      </p>

      <CoreMetricsCharts />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 12, fontSize: 12.5, color: 'var(--muted)' }}>
        <span>
          <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{filtered.length}</span> of {models.length} models
        </span>
        {taskBenchmark && (
          <>
            <span style={{ color: 'var(--faint)' }}>·</span>
            <span>
              ranked by {taskBenchmark.label} —{' '}
              <span onClick={() => openMethod(taskBenchmark.id)} style={{ color: 'var(--accent)', fontWeight: 600, cursor: 'pointer' }}>
                what does it measure?
              </span>
            </span>
          </>
        )}
        {activeChips.length > 0 && (
          <>
            <span style={{ color: 'var(--faint)' }}>·</span>
            {activeChips.map((chip) => (
              <span
                key={chip.label}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 6px 3px 9px',
                  border: '1px solid var(--accent-line)', background: 'var(--accent-soft)', color: 'var(--accent)',
                  borderRadius: 6, fontSize: 12, fontWeight: 600,
                }}
              >
                {chip.label}
                <span onClick={chip.remove} style={{ cursor: 'pointer', fontSize: 14, lineHeight: 1 }}>×</span>
              </span>
            ))}
          </>
        )}
      </div>

      <div style={{ border: '1px solid var(--line)', borderRadius: 11, background: 'var(--panel)', overflow: 'hidden' }}>
        <div
          style={{
            display: 'grid', gridTemplateColumns: COL_TEMPLATE, gap: 16, alignItems: 'center',
            padding: '12px 18px', borderBottom: '1px solid var(--line)', fontSize: 11,
            letterSpacing: '.04em', color: 'var(--faint)',
          }}
        >
          <div>MODEL</div>
          <div style={{ textAlign: 'right' }}>COST</div>
          <div style={{ textAlign: 'right' }}>LATENCY</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            {benchColLabel}
            {benchColProprietary && (
              <span
                style={{
                  fontSize: 9, letterSpacing: '.03em', color: 'var(--internal)', background: 'var(--amber-soft)',
                  borderRadius: 4, padding: '1px 5px', whiteSpace: 'nowrap',
                }}
              >
                proprietary
              </span>
            )}
          </div>
          <div />
        </div>

        {filtered.map((m) => {
          const isExpanded = !!expanded[m.id];
          const allTasks = benchmarks
            .map((b) => ({ label: b.label, score: m.s[b.sk] }))
            .sort((a, b) => b.score - a.score);
          const shown = taskBenchmark
            ? [{ label: taskBenchmark.label, score: m.s[taskBenchmark.sk] }]
            : isExpanded ? allTasks : allTasks.slice(0, 2);

          return (
            <div
              key={m.id}
              className="row-hover"
              style={{
                display: 'grid', gridTemplateColumns: COL_TEMPLATE, gap: 16, alignItems: 'start',
                padding: '14px 18px', borderBottom: '1px solid var(--line2)',
              }}
            >
              <div onClick={() => openModel(m.id)} style={{ cursor: 'pointer', minWidth: 0, paddingTop: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.name}
                  </span>
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>{m.prov} · {m.host[0]}</div>
                <div style={{ ...mono, fontSize: 11.5, color: 'var(--faint)', marginTop: 1 }}>{overall(m)}% overall</div>
              </div>
              <div style={{ ...mono, textAlign: 'right', fontSize: 13, paddingTop: 2 }}>${blended(m).toFixed(1)}</div>
              <div style={{ ...mono, textAlign: 'right', fontSize: 13, paddingTop: 2 }}>{m.lat}s</div>
              <div>
                {shown.map((t) => (
                  <div key={t.label} style={{ display: 'grid', gridTemplateColumns: '96px 1fr 42px', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 11.5, color: 'var(--muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {t.label}
                    </span>
                    <span style={{ position: 'relative', height: 8, background: 'var(--line2)', borderRadius: 4, overflow: 'hidden' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${t.score}%`, background: 'var(--accent)', borderRadius: 4 }} />
                    </span>
                    <span style={{ ...mono, fontSize: 12.5, fontWeight: 600, textAlign: 'right' }}>{t.score}%</span>
                  </div>
                ))}
                {!taskBenchmark && (
                  <div
                    onClick={() => toggleExpanded(m.id)}
                    style={{ fontSize: 11.5, color: 'var(--accent)', fontWeight: 600, cursor: 'pointer', marginTop: 2 }}
                  >
                    {isExpanded ? 'Show less' : `+${allTasks.length - 2} more tasks`}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', paddingTop: 1 }}>
                <AddButton id={m.id} />
                <button
                  type="button"
                  onClick={() => openModel(m.id)}
                  style={{
                    height: 30, padding: '0 14px', border: 'none', borderRadius: 7, background: 'var(--accent)',
                    color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                  }}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}

        {!filtered.length && (
          <div style={{ padding: 44, textAlign: 'center', color: 'var(--muted)', fontSize: 14 }}>
            No models match these filters. Loosen a constraint or reset.
          </div>
        )}
      </div>
    </div>
  );
}
