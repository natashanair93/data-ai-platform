import { useState } from 'react';
import { APPROVAL_FILL, APPROVAL_STATUS, PRODUCTION_BAR, approvalOf, overall } from '../lib/derive';
import { useApp } from '../state/store';
import { ApprovalLegend, Card, eyebrow, mono } from '../ui/primitives';

/** Firm Index — top 10 models by composite score, colored by approval status. */
export default function FirmIndexChart() {
  const { models, shortlist, openModel, toggleShortlist, inShortlist } = useApp();
  const [hover, setHover] = useState<string | null>(null);

  const ranked = models.slice().sort((a, b) => overall(b) - overall(a)).slice(0, 10);

  return (
    <Card style={{ padding: '20px 22px 16px', marginBottom: 22 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ ...eyebrow, marginBottom: 3 }}>TOP 10 MODELS BY FIRM INDEX SCORE</div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>Firm Index — composite across six benchmark tasks</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ ...eyebrow, color: 'var(--faint)', whiteSpace: 'nowrap' }}>SCALE 0–100 · HIGHER IS BETTER</div>
          <div style={{ ...mono, fontSize: 11, color: 'var(--faint)', whiteSpace: 'nowrap', marginTop: 3 }}>Updated Jul 16, 2026</div>
        </div>
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--muted)', marginTop: 2 }}>Click a bar to view the model; hover for Compare.</div>

      <div style={{ position: 'relative', height: 300, marginTop: 36 }}>
        {[0, 25, 50, 75, 100].map((g) => (
          <div key={g} style={{ position: 'absolute', left: 34, right: 0, bottom: `${g}%`, borderTop: `1px solid ${g === 0 ? 'var(--line)' : 'var(--line2)'}` }} />
        ))}
        {[0, 25, 50, 75, 100].map((g) => (
          <span key={g} style={{ ...mono, position: 'absolute', left: 0, bottom: `calc(${g}% - 6px)`, fontSize: 10.5, color: 'var(--faint)' }}>{g}</span>
        ))}

        <div style={{ position: 'absolute', left: 34, right: 0, bottom: `${PRODUCTION_BAR}%`, borderTop: '2px dashed var(--accent)', zIndex: 2, pointerEvents: 'none' }} />
        <span
          style={{
            position: 'absolute', right: 0, bottom: `calc(${PRODUCTION_BAR}% + 7px)`, zIndex: 2, fontSize: 11,
            fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-soft)',
            border: '1px solid var(--accent-line)', borderRadius: 6, padding: '2px 8px',
            whiteSpace: 'nowrap', pointerEvents: 'none',
          }}
        >
          {PRODUCTION_BAR.toFixed(1)}
        </span>

        <div style={{ position: 'absolute', left: 34, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'flex-end', gap: 16, padding: '0 12px' }}>
          {ranked.map((m) => {
            const score = overall(m);
            const approval = approvalOf(m.id);
            const on = inShortlist(m.id);
            const hovered = hover === m.id;
            const dim = hover !== null && !hovered;
            return (
              <div
                key={m.id}
                onMouseEnter={() => setHover(m.id)}
                onMouseLeave={() => setHover(null)}
                style={{ position: 'relative', flex: 1, minWidth: 0, height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
              >
                <div
                  onClick={() => openModel(m.id)}
                  style={{
                    width: '100%', maxWidth: 56, height: `${score}%`, borderRadius: '4px 4px 0 0',
                    cursor: 'pointer', transition: 'opacity .15s ease, filter .15s ease',
                    background: APPROVAL_FILL[approval],
                    boxShadow: on ? '0 0 0 2px var(--panel), 0 0 0 4px var(--accent)' : undefined,
                    opacity: dim ? 0.25 : 1,
                    filter: dim ? 'saturate(.15)' : undefined,
                  }}
                />
                {hovered && (
                  <div
                    style={{
                      position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                      bottom: `calc(${score}% + 6px)`, zIndex: 12, background: 'var(--panel)',
                      border: '1px solid var(--line)', borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                      padding: '9px 12px 10px', whiteSpace: 'nowrap', textAlign: 'left',
                    }}
                  >
                    <div style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 2 }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                      Firm Index score: <span style={{ ...mono, fontWeight: 700, color: 'var(--ink)' }}>{score}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 2 }}>
                      <span style={{ fontSize: 11, color: APPROVAL_STATUS[approval].color }}>{APPROVAL_STATUS[approval].label}</span>
                      <span style={{ color: 'var(--line)' }}>·</span>
                      <span
                        onClick={(e) => { e.stopPropagation(); toggleShortlist(m.id); }}
                        style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', cursor: 'pointer' }}
                      >
                        {shortlist.includes(m.id) ? '✓ Comparing' : '+ Compare'}
                      </span>
                    </div>
                    <div style={{ fontSize: 10.5, color: 'var(--faint)', marginTop: 4 }}>Click the bar to view</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 16, padding: '0 12px', margin: '8px 0 0 34px' }}>
        {ranked.map((m) => (
          <div key={m.id} style={{ flex: 1, minWidth: 0, textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: inShortlist(m.id) ? 'var(--accent)' : 'var(--ink)', lineHeight: 1.3 }}>
              {m.name}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid var(--line2)' }}>
        <ApprovalLegend />
      </div>
    </Card>
  );
}
