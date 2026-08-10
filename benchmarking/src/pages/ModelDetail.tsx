import React, { useEffect, useState } from 'react';
import {
  MAX_COMPARE, blended, ctxLabel, fmtRelease, license, overall, paramLabel,
} from '../lib/derive';
import { modelById, useApp } from '../state/store';
import { AddButton, ComparingButton, mono } from '../ui/primitives';
import type { Model } from '../types';

const viewButton: React.CSSProperties = {
  height: 28, padding: '0 14px', border: 'none', borderRadius: 7, background: 'var(--accent)',
  color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer',
};

export default function ModelDetail() {
  const {
    models, modelId, cameFrom, benchmarks, filters, taskBenchmark, shortlist, recentViewed,
    go, openModel, openBenchmarkTask, toggleShortlist,
  } = useApp();

  const [launchOpen, setLaunchOpen] = useState(false);
  const [launchMsg, setLaunchMsg] = useState('');
  const [altMore, setAltMore] = useState(false);

  // Opening another model resets the page-local UI.
  useEffect(() => { setLaunchOpen(false); setLaunchMsg(''); setAltMore(false); }, [modelId]);

  const model = modelById(modelId);
  if (!model) return null;

  const score = overall(model);

  // Nearest by overall score, with a slight same-type preference.
  const alternatives = rankAlternatives(models, model);
  const shownAlts = alternatives.slice(0, altMore ? 10 : 5);

  const metrics = [
    { label: 'Input $ / 1M', value: `$${model.cin}` },
    { label: 'Output $ / 1M', value: `$${model.cout}` },
    { label: 'Latency (p50)', value: `${model.lat}s` },
    { label: 'Overall', value: `${score}%` },
  ];

  const inShort = shortlist.includes(model.id);
  const full = shortlist.length >= MAX_COMPARE && !inShort;
  const compareStyle: React.CSSProperties = {
    height: 38, padding: '0 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
    cursor: full ? 'not-allowed' : 'pointer',
    ...(inShort
      ? { border: '1px solid var(--accent-line)', background: 'var(--accent-soft)', color: 'var(--accent)' }
      : full
        ? { border: '1px solid var(--line2)', background: 'var(--panel)', color: 'var(--faint)' }
        : { border: '1px solid var(--line)', background: 'var(--panel)', color: 'var(--ink)' }),
  };

  /** Sub-line under each alternative reflects whichever filters are active. */
  const altReason = (alt: Model) => {
    const parts: string[] = [];
    if (taskBenchmark) parts.push(`${alt.s[taskBenchmark.sk]}% ${taskBenchmark.label.toLowerCase()}`);
    if (filters.lat < 8) parts.push(`${alt.lat}s latency`);
    if (filters.cost < 50) parts.push(`$${blended(alt).toFixed(1)} blended`);
    return parts.length ? parts.join(' · ') : `${overall(alt)}% overall`;
  };

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '30px 40px 90px' }}>
      <div onClick={() => go(cameFrom || 'home')} style={{ fontSize: 12.5, color: 'var(--muted)', cursor: 'pointer', marginBottom: 18 }}>
        ← Back to benchmarking
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 26, alignItems: 'start' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)' }}>{model.prov} · {model.type}</span>
            <span style={{ fontSize: 10.5, border: '1px solid var(--line)', borderRadius: 4, padding: '1px 6px', color: 'var(--muted)' }}>
              {model.status}
            </span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 600, margin: '0 0 6px' }}>{model.name}</h1>
          <div style={{ fontSize: 13.5, color: 'var(--muted)' }}>
            {model.mod.join(' · ')} · {ctxLabel(model.ctx)} context · {paramLabel(model)} · {license(model.type)}
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--faint)', marginTop: 4 }}>
            Available on {model.host.join(', ')} · released {fmtRelease(model.rel)}
          </div>

          <div style={{ display: 'flex', gap: 9, margin: '18px 0 4px' }}>
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setLaunchOpen((o) => !o)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 9, height: 38, padding: '0 16px', border: 'none',
                  borderRadius: 8, background: 'var(--accent)', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                }}
              >
                Launch in <span style={{ fontSize: 10, opacity: 0.85 }}>▾</span>
              </button>
              {launchOpen && (
                <div
                  style={{
                    position: 'absolute', top: 44, left: 0, zIndex: 55, background: 'var(--panel)',
                    border: '1px solid var(--line)', borderRadius: 9, boxShadow: '0 12px 32px rgba(0,0,0,0.16)',
                    padding: 6, minWidth: 212,
                  }}
                >
                  {['Model experimentation', 'Evaluations & traces'].map((option) => (
                    <div
                      key={option}
                      className="row-hover"
                      onClick={() => { setLaunchOpen(false); setLaunchMsg(`Launching ${model.name} in ${option}… (demo)`); }}
                      style={{ padding: '9px 11px', borderRadius: 6, cursor: 'pointer', fontSize: 13 }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button type="button" style={compareStyle} onClick={() => { if (!full) toggleShortlist(model.id); }}>
              {inShort ? '✓ Comparing' : full ? `Max ${MAX_COMPARE}` : 'Compare'}
            </button>
            <ComparingButton />
          </div>
          {launchMsg && (
            <div
              style={{
                marginTop: 6, fontSize: 12.5, color: 'var(--accent)', background: 'var(--accent-soft)',
                borderRadius: 7, padding: '8px 11px', display: 'inline-block',
              }}
            >
              {launchMsg}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 13, margin: '22px 0 26px' }}>
            {metrics.map((metric) => (
              <div key={metric.label} style={{ border: '1px solid var(--line)', borderRadius: 10, background: 'var(--panel)', padding: '14px 15px' }}>
                <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 7 }}>{metric.label}</div>
                <div style={{ ...mono, fontSize: 20, fontWeight: 600 }}>{metric.value}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 8 }}>SCORES BY BENCHMARK</div>
          {benchmarks.map((b) => {
            const value = model.s[b.sk];
            const strong = value >= 85;
            return (
              <div
                key={b.id}
                className="row-hover"
                onClick={() => openBenchmarkTask(b.id)}
                style={{
                  display: 'grid', gridTemplateColumns: '150px 1fr 50px', gap: 14, alignItems: 'center',
                  padding: '11px 8px', borderRadius: 7, cursor: 'pointer', borderBottom: '1px solid var(--line2)',
                }}
              >
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{b.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--faint)' }}>{b.scope}</div>
                </div>
                <div style={{ position: 'relative', height: 8, background: 'var(--line2)', borderRadius: 5, overflow: 'hidden' }}>
                  <div
                    style={{
                      position: 'absolute', left: 0, top: 0, bottom: 0, width: `${value}%`, borderRadius: 5,
                      background: strong ? 'var(--accent)' : 'var(--ink)', opacity: strong ? 1 : 0.55,
                    }}
                  />
                </div>
                <div style={{ ...mono, fontSize: 14, fontWeight: 600, textAlign: 'right' }}>{value}%</div>
              </div>
            );
          })}
        </div>

        <div style={{ border: '1px solid var(--line)', borderRadius: 12, background: 'var(--panel)', padding: '16px 16px 18px' }}>
          <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 8 }}>ALTERNATIVES</div>
          {shownAlts.map((alt) => (
            <div key={alt.id} style={{ padding: '12px 0', borderBottom: '1px solid var(--line2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2, flexWrap: 'wrap' }}>
                <span onClick={() => openModel(alt.id)} style={{ fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>{alt.name}</span>
                {recentViewed.includes(alt.id) && (
                  <span
                    style={{
                      fontSize: 9.5, letterSpacing: '.03em', color: 'var(--muted)', background: 'var(--panel2)',
                      border: '1px solid var(--line)', borderRadius: 4, padding: '1px 5px', whiteSpace: 'nowrap',
                    }}
                  >
                    RECENTLY VIEWED
                  </span>
                )}
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--muted)', marginBottom: 9 }}>{altReason(alt)}</div>
              <div style={{ display: 'flex', gap: 7 }}>
                <AddButton id={alt.id} />
                <button type="button" onClick={() => openModel(alt.id)} style={viewButton}>View</button>
              </div>
            </div>
          ))}
          {alternatives.length > 5 && (
            <div
              onClick={() => setAltMore((v) => !v)}
              style={{ marginTop: 13, fontSize: 12.5, color: 'var(--accent)', fontWeight: 600, cursor: 'pointer', textAlign: 'center' }}
            >
              {altMore ? 'Show fewer' : `See more (${Math.min(5, alternatives.length - 5)})`}
            </div>
          )}
        </div>
      </div>

      {launchOpen && <div onClick={() => setLaunchOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 50 }} />}
    </div>
  );
}

/** Alternatives: every other model ranked by closeness in overall score, same type slightly preferred. */
function rankAlternatives(models: Model[], model: Model) {
  const score = overall(model);
  return models
    .filter((x) => x.id !== model.id)
    .map((x) => ({ x, d: Math.abs(overall(x) - score) + (x.type === model.type ? -3 : 0) }))
    .sort((a, b) => a.d - b.d)
    .map((o) => o.x);
}
