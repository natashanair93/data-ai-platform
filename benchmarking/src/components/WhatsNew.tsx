import React from 'react';
import { useApp } from '../state/store';
import { mono } from '../ui/primitives';

/* What's new is curated editorial content (see "Model Benchmarking v2 — Decisions"):
   two featured cards plus a three-card stream. Every action is wired to a real
   catalog entity so View / Compare / Methodology all land somewhere real. */

type Noun = 'MODEL' | 'BENCHMARK';

const cardBase: React.CSSProperties = {
  border: '1px solid var(--line)', background: 'var(--panel)', display: 'flex', flexDirection: 'column',
};

/** Noun palette: models get the plum strip, benchmarks the darker plum. */
const stripColor = (noun: Noun) => (noun === 'MODEL' ? 'var(--salt-color-plum-500)' : 'var(--salt-color-plum-600)');

function NounTag({ noun }: { noun: Noun }) {
  return (
    <span
      style={{
        fontSize: 10, letterSpacing: '.07em', fontWeight: 700, borderRadius: 999, padding: '2px 10px',
        color: noun === 'MODEL' ? 'var(--salt-color-plum-600)' : '#fff',
        background: noun === 'MODEL' ? 'var(--salt-color-plum-100)' : 'var(--salt-color-plum-600)',
      }}
    >
      {noun}
    </span>
  );
}

const proofPanel: React.CSSProperties = {
  border: '1px solid var(--line2)', borderRadius: 8, background: 'var(--panel2)',
  padding: '12px 14px', marginBottom: 11,
};

const proofLabel: React.CSSProperties = {
  fontSize: 10, letterSpacing: '.06em', fontWeight: 700, color: 'var(--muted)',
};

function Track({ pct, fill }: { pct: number; fill: string }) {
  return (
    <span style={{ position: 'relative', height: 9, background: 'var(--line2)', borderRadius: 4 }}>
      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: fill, borderRadius: 4 }} />
    </span>
  );
}

const viewButton: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', height: 30, padding: '0 14px', border: 'none',
  borderRadius: 7, background: 'var(--accent)', color: '#fff', fontSize: 12, fontWeight: 700,
  letterSpacing: '.04em', cursor: 'pointer',
};

const inlineAction: React.CSSProperties = {
  fontSize: 12, fontWeight: 600, color: 'var(--accent)', cursor: 'pointer', whiteSpace: 'nowrap',
};

/** Score-by-domain rows on the featured model card — gray below the production bar. */
const DOMAIN_ROWS: { label: string; score: number; below?: boolean }[] = [
  { label: 'Chat', score: 92 },
  { label: 'Code', score: 86 },
  { label: 'Doc extraction', score: 84 },
  { label: 'Reasoning', score: 83 },
  { label: 'Tool use', score: 71, below: true },
];

/** Leaderboard rows on the featured benchmark card — approval status drives the fill. */
const BENCH_ROWS: { name: string; width: number; value: string; approved: boolean }[] = [
  { name: 'GPT-5.6 Sol', width: 74, value: '74.2', approved: false },
  { name: 'Claude Fable 5', width: 73.8, value: '73.8', approved: true },
  { name: 'Claude Opus 4.8', width: 71.5, value: '71.5', approved: true },
  { name: 'Gemini 3.1 Ultra', width: 68.9, value: '68.9', approved: false },
  { name: 'Claude Sonnet 5', width: 68.1, value: '68.1', approved: true },
];

function StreamCard({
  noun, date, chip, title, children, actions,
}: {
  noun: Noun; date: string; chip: string; title: string;
  children: React.ReactNode; actions?: React.ReactNode;
}) {
  return (
    <div style={{ ...cardBase, borderTop: `3px solid ${stripColor(noun)}`, borderRadius: 9, padding: '17px 19px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9, flexWrap: 'wrap' }}>
        <NounTag noun={noun} />
        <span style={{ ...mono, fontSize: 10.5, color: 'var(--faint)' }}>{date}</span>
        <span style={{ fontSize: 10, color: 'var(--muted)', border: '1px solid var(--line)', borderRadius: 4, padding: '1px 6px' }}>
          {chip}
        </span>
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.4, marginBottom: 7 }}>{title}</div>
      <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 12 }}>{children}</div>
      <div style={{ flex: 1 }} />
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{actions}</div>}
    </div>
  );
}

export default function WhatsNew() {
  const { openModel, openMethod, openBenchmarkTask, addMany, toggleShortlist } = useApp();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14, margin: '34px 0 18px' }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 600 }}>What's new</div>
          <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 4 }}>Fresh from the evaluation queue</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {/* Featured A — model event */}
        <div style={{ ...cardBase, borderTop: '3px solid var(--salt-color-plum-500)', borderRadius: 11, padding: '16px 18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
            <NounTag noun="MODEL" />
            <span style={{ ...mono, fontSize: 11, color: 'var(--faint)' }}>14 JUL 2026</span>
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.35, marginBottom: 9 }}>
            Claude Sonnet 4.5 enters the Firm Index at <span style={{ color: 'var(--salt-color-blue-700)' }}>#4</span> (85.5)
          </div>
          <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>
            Takes <strong style={{ color: 'var(--ink)' }}>#1 on Chat</strong> at $9/M — 40% cheaper than the index leader —
            making it the better default for <strong style={{ color: 'var(--ink)' }}>8 of your 11 support agents</strong>.
            Skip it for tool-heavy agents: it drops to 71 on{' '}
            <span onClick={() => openBenchmarkTask('tooluse')} style={{ color: 'var(--accent)', fontWeight: 600, cursor: 'pointer' }}>
              Tool Use
            </span>
            , below the production bar of 80.
          </div>

          <div style={proofPanel}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 9 }}>
              <span style={proofLabel}>SCORE BY DOMAIN</span>
              <span style={{ fontSize: 10, letterSpacing: '.06em', color: 'var(--faint)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {DOMAIN_ROWS.map((r) => (
                <div key={r.label} style={{ display: 'grid', gridTemplateColumns: '98px 1fr 30px', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 11.5, color: 'var(--muted)' }}>{r.label}</span>
                  <Track pct={r.score} fill={r.below ? 'var(--salt-color-gray-300)' : 'var(--accent)'} />
                  <span style={{ ...mono, fontSize: 11.5, fontWeight: 600, textAlign: 'right', color: r.below ? 'var(--muted)' : undefined }}>
                    {r.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button type="button" onClick={() => openModel('claude-sonnet-4-5')} style={viewButton}>VIEW</button>
            <span onClick={() => addMany(['claude-sonnet-4-5', 'claude-opus-4-1'])} style={inlineAction}>
              Compare with Claude Opus 4.1
            </span>
          </div>
        </div>

        {/* Featured B — benchmark event */}
        <div style={{ ...cardBase, borderTop: '3px solid var(--salt-color-plum-600)', borderRadius: 11, padding: '16px 18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9 }}>
            <NounTag noun="BENCHMARK" />
            <span style={{ ...mono, fontSize: 11, color: 'var(--faint)' }}>02 JUL 2026</span>
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.35, marginBottom: 9 }}>
            New in market: FinOps Agent Bench tests <span style={{ color: 'var(--salt-color-blue-700)' }}>finance workflows</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>
            A public benchmark from Vals that grades agents on end-to-end finance operations — reconciliation, exception
            handling, reporting — against expert-authored gold traces.{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>GPT-5.6 Sol</span> leads at 74.2, but{' '}
            <strong style={{ color: 'var(--ink)' }}>2 of the top 5 aren't approved</strong> for use here. Not yet in the Firm
            Index — <strong style={{ color: 'var(--ink)' }}>RMS UA is validating it</strong> for the tool-use domain, decision
            expected Aug.
          </div>

          <div style={proofPanel}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 9 }}>
              <span style={proofLabel}>BEST ON THIS BENCHMARK</span>
              <span style={{ fontSize: 10, letterSpacing: '.06em', color: 'var(--faint)' }}>TOP 5 OF 19 · PUBLISHER-REPORTED</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {BENCH_ROWS.map((r, i) => (
                <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '16px 118px 1fr 34px 76px', gap: 9, alignItems: 'center' }}>
                  <span style={{ ...mono, fontSize: 11, color: 'var(--faint)' }}>{i + 1}</span>
                  <span
                    style={{
                      fontSize: 11.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden',
                      textOverflow: 'ellipsis', color: r.approved ? undefined : 'var(--muted)',
                    }}
                  >
                    {r.name}
                  </span>
                  <Track pct={r.width} fill={r.approved ? 'var(--accent)' : 'var(--salt-color-blue-200)'} />
                  <span style={{ ...mono, fontSize: 11.5, fontWeight: 600, textAlign: 'right', color: r.approved ? undefined : 'var(--muted)' }}>
                    {r.value}
                  </span>
                  <span style={{ fontSize: 10.5, textAlign: 'right', whiteSpace: 'nowrap', color: r.approved ? 'var(--open)' : 'var(--muted)' }}>
                    {r.approved ? '● Approved' : '◐ Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span onClick={() => openMethod('tooluse')} style={inlineAction}>Methodology (vals.ai) ↗</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 26 }}>
        <StreamCard
          noun="MODEL"
          date="11 JUL"
          chip="Internal"
          title="Helios-Support FT tops internal Chat"
          actions={
            <>
              <span onClick={() => openModel('helios-support-ft')} style={viewButton}>VIEW</span>
              <span onClick={() => toggleShortlist('helios-support-ft')} style={inlineAction}>Compare</span>
            </>
          }
        >
          Chat <strong style={{ color: 'var(--ink)' }}>96</strong> · Tool use <strong style={{ color: 'var(--ink)' }}>88</strong>
        </StreamCard>

        <StreamCard
          noun="MODEL"
          date="7 JUL"
          chip="Newly evaluated"
          title="Claude Fable 5 evaluated across the firm suite"
          actions={
            <>
              <span onClick={() => openModel('claude-fable-5')} style={viewButton}>VIEW</span>
              <span onClick={() => toggleShortlist('claude-fable-5')} style={inlineAction}>Compare</span>
            </>
          }
        >
          Tool use <strong style={{ color: 'var(--ink)' }}>90.1</strong> · Firm Index <strong style={{ color: 'var(--ink)' }}>#1</strong>
        </StreamCard>

        <StreamCard noun="BENCHMARK" date="4 JUL" chip="Version bump" title="Math v4.2 — AIME 2025 added">
          <strong style={{ color: 'var(--ink)' }}>12</strong> items retired · <strong style={{ color: 'var(--ink)' }}>5</strong> moved
        </StreamCard>
      </div>
    </>
  );
}
