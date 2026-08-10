import React from 'react';
import { MAX_COMPARE, ctxLabel, license, overall, paramLabel } from '../lib/derive';
import { modelById, useApp } from '../state/store';
import { CheckBox, GhostButton } from '../ui/primitives';
import type { Model } from '../types';

interface Row {
  label: string;
  values: string[];
  /** Which direction wins the row — categorical rows have no winner. */
  best?: 'min' | 'max';
  raw?: number[];
}

/** Comparison — split layout: model picker on the left, matrix on the right. */
export default function Comparison() {
  const {
    models, shortlist, benchmarks, pickSearch, setPickSearch,
    go, openModel, toggleShortlist, clearShortlist, inShortlist,
  } = useApp();

  const selected = shortlist.map(modelById).filter(Boolean) as Model[];
  const count = selected.length;

  const q = pickSearch.trim().toLowerCase();
  const picker = models.filter((m) => !q || m.name.toLowerCase().includes(q) || m.prov.toLowerCase().includes(q));

  const rows: (Row | { header: string })[] = count
    ? [
      { header: 'ATTRIBUTES' },
      { label: 'Publisher', values: selected.map((m) => m.prov) },
      { label: 'Type', values: selected.map((m) => m.type) },
      { label: 'Parameters', values: selected.map(paramLabel) },
      { label: 'Available on', values: selected.map((m) => m.host.join(', ')) },
      { label: 'Modality', values: selected.map((m) => m.mod.join(' · ')) },
      { label: 'Context', values: selected.map((m) => ctxLabel(m.ctx)), raw: selected.map((m) => m.ctx), best: 'max' },
      { label: 'License', values: selected.map((m) => license(m.type)) },
      { header: 'COST & SPEED' },
      { label: 'Input $ / 1M', values: selected.map((m) => `$${m.cin}`), raw: selected.map((m) => m.cin), best: 'min' },
      { label: 'Output $ / 1M', values: selected.map((m) => `$${m.cout}`), raw: selected.map((m) => m.cout), best: 'min' },
      { label: 'Latency (p50)', values: selected.map((m) => `${m.lat}s`), raw: selected.map((m) => m.lat), best: 'min' },
      { label: 'Overall accuracy', values: selected.map((m) => `${overall(m)}%`), raw: selected.map(overall), best: 'max' },
      { header: 'BENCHMARKS' },
      ...benchmarks.map((b) => ({
        label: b.label,
        values: selected.map((m) => `${m.s[b.sk]}%`),
        raw: selected.map((m) => m.s[b.sk]),
        best: 'max' as const,
      })),
    ]
    : [];

  const bestIndex = (row: Row) => {
    if (!row.best || !row.raw) return -1;
    let bi = 0;
    row.raw.forEach((v, i) => {
      if (row.best === 'max' ? v > row.raw![bi] : v < row.raw![bi]) bi = i;
    });
    return bi;
  };

  return (
    <div style={{ margin: '0 auto', padding: '30px 40px 90px' }}>
      <div onClick={() => go('landing')} style={{ fontSize: 12.5, color: 'var(--muted)', cursor: 'pointer', marginBottom: 18 }}>
        ← Back to benchmarking
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 5 }}>SIDE BY SIDE · UP TO 4</div>
          <h1 style={{ fontSize: 25, fontWeight: 600, margin: 0 }}>Comparison</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {count > 0 && <GhostButton onClick={clearShortlist}>Clear</GhostButton>}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
        {/* Picker — always visible, so removing the last model never ejects you. */}
        <div style={{ width: 300, flex: 'none', border: '1px solid var(--line)', borderRadius: 11, background: 'var(--panel)', overflow: 'hidden' }}>
          <div style={{ padding: '13px 14px', borderBottom: '1px solid var(--line)' }}>
            <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 9 }}>
              PICK MODELS · {count}/{MAX_COMPARE}
            </div>
            <input
              value={pickSearch}
              onChange={(e) => setPickSearch(e.target.value)}
              placeholder="Search models…"
              style={{
                width: '100%', height: 32, padding: '0 11px', border: '1px solid var(--line)', borderRadius: 7,
                background: 'var(--bg)', fontSize: 13, outline: 'none',
              }}
            />
          </div>
          <div style={{ maxHeight: 560, overflow: 'auto' }}>
            {picker.map((m) => {
              const on = inShortlist(m.id);
              const full = count >= MAX_COMPARE && !on;
              return (
                <div
                  key={m.id}
                  className="row-hover"
                  style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 13px', borderBottom: '1px solid var(--line2)' }}
                >
                  <div
                    onClick={() => { if (!full) toggleShortlist(m.id); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 9, flex: 1, minWidth: 0,
                      cursor: full ? 'not-allowed' : 'pointer', opacity: full ? 0.5 : 1,
                    }}
                  >
                    <CheckBox checked={on} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {m.name}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>{m.prov} · {overall(m)}% overall</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModel(m.id)}
                    style={{
                      height: 26, padding: '0 12px', border: 'none', borderRadius: 6, background: 'var(--accent)',
                      color: '#fff', fontSize: 11.5, fontWeight: 600, cursor: 'pointer', flex: 'none',
                    }}
                  >
                    View
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0, overflowX: 'auto' }}>
          {count === 0 ? (
            <div style={{ border: '1px dashed var(--line)', borderRadius: 12, padding: '48px 40px', textAlign: 'center', background: 'var(--panel)' }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Select models to compare</div>
              <div style={{ fontSize: 13.5, color: 'var(--muted)' }}>Pick up to four models from the list to line them up side by side.</div>
            </div>
          ) : (
            <div
              style={{
                border: '1px solid var(--line)', borderRadius: 12, background: 'var(--panel)', display: 'grid',
                gridTemplateColumns: `200px repeat(${count}, minmax(170px,1fr))`,
                minWidth: 200 + count * 180,
              }}
            >
              <div style={{ padding: 16, fontSize: 12, color: 'var(--muted)', alignSelf: 'end', borderBottom: '1px solid var(--line)' }}>
                {count} of {MAX_COMPARE} selected
              </div>
              {selected.map((m) => (
                <div key={m.id} style={{ padding: '14px 16px', borderLeft: '1px solid var(--line)', borderBottom: '1px solid var(--line)', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2 }}>
                    <span onClick={() => openModel(m.id)} style={{ fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>{m.name}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 10 }}>{m.prov} · {m.type}</div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span onClick={() => toggleShortlist(m.id)} style={{ fontSize: 12, color: 'var(--muted)', cursor: 'pointer' }}>Remove</span>
                  </div>
                </div>
              ))}

              {rows.map((row, i) =>
                'header' in row ? (
                  <div
                    key={`h-${row.header}`}
                    style={{
                      gridColumn: '1 / -1', padding: '14px 16px 7px', fontSize: 11, letterSpacing: '.06em',
                      color: 'var(--faint)', fontWeight: 600, borderTop: '1px solid var(--line2)', background: 'var(--panel2)',
                    }}
                  >
                    {row.header}
                  </div>
                ) : (
                  <React.Fragment key={`r-${row.label}-${i}`}>
                    <div style={{ padding: '11px 16px', fontSize: 13, color: 'var(--muted)', borderTop: '1px solid var(--line2)' }}>
                      {row.label}
                    </div>
                    {row.values.map((value, ci) => (
                      <div
                        key={`${row.label}-${ci}`}
                        style={{
                          padding: '11px 16px', borderLeft: '1px solid var(--line2)', borderTop: '1px solid var(--line2)',
                          fontFamily: 'var(--mono)', fontSize: 13.5,
                        }}
                      >
                        <span style={ci === bestIndex(row) ? { color: 'var(--accent)', fontWeight: 700 } : undefined}>{value}</span>
                      </div>
                    ))}
                  </React.Fragment>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
