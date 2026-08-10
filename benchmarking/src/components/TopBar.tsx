import { useState } from 'react';
import { useApp } from '../state/store';
import { AddButton } from '../ui/primitives';
import { blended, overall } from '../lib/derive';

export default function TopBar() {
  const { models, globalQuery, setGlobalQuery, openModel, go, setFilter } = useApp();
  const [open, setOpen] = useState(false);

  const q = globalQuery.trim().toLowerCase();
  const matches = q
    ? models.filter((m) => m.name.toLowerCase().includes(q) || m.prov.toLowerCase().includes(q))
    : models.slice(0, 5);
  const results = matches.slice(0, 5);

  const showAll = () => {
    setOpen(false);
    setFilter('search', globalQuery);
    go('home');
  };

  return (
    <>
      <header
        style={{
          display: 'flex', alignItems: 'center', gap: 18, height: 56, padding: '0 22px',
          borderBottom: '1px solid var(--line)', background: 'var(--panel)', flex: 'none',
          zIndex: 30, position: 'relative',
        }}
      >
        <div
          onClick={() => go('landing')}
          style={{ display: 'flex', alignItems: 'baseline', gap: 9, cursor: 'pointer' }}
        >
          <span style={{ fontWeight: 700, letterSpacing: '.02em', fontSize: 15 }}>Firm Platform</span>
        </div>

        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: 400, zIndex: 60 }}>
          <input
            value={globalQuery}
            placeholder="Search models…"
            onChange={(e) => { setGlobalQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') showAll();
              if (e.key === 'Escape') setOpen(false);
            }}
            style={{
              width: '100%', height: 36, padding: '0 14px', border: '1px solid var(--line)',
              borderRadius: 8, background: 'var(--bg)', fontSize: 13, color: 'var(--ink)', outline: 'none',
            }}
          />
          {open && (
            <div
              style={{
                position: 'absolute', top: 42, left: 0, right: 0, background: 'var(--panel)',
                border: '1px solid var(--line)', borderRadius: 9, boxShadow: '0 12px 32px rgba(0,0,0,0.16)',
                padding: 6, zIndex: 61,
              }}
            >
              {results.map((m) => (
                <div
                  key={m.id}
                  className="row-hover"
                  onClick={() => { setOpen(false); openModel(m.id); }}
                  style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 10px', borderRadius: 6, cursor: 'pointer' }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {m.name}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                      {m.prov} · {overall(m)}% overall · ${blended(m).toFixed(1)}/M
                    </div>
                  </div>
                  <AddButton id={m.id} height={26} />
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setOpen(false); openModel(m.id); }}
                    style={{
                      height: 26, padding: '0 12px', border: 'none', borderRadius: 7,
                      background: 'var(--accent)', color: '#fff', fontSize: 12, fontWeight: 600,
                      cursor: 'pointer', flex: 'none',
                    }}
                  >
                    View
                  </button>
                </div>
              ))}
              {!results.length && (
                <div style={{ padding: '12px 10px', fontSize: 12.5, color: 'var(--muted)' }}>
                  No models match "{globalQuery}"
                </div>
              )}
              <div
                onClick={showAll}
                style={{
                  borderTop: '1px solid var(--line2)', marginTop: 4, padding: '9px 10px 6px',
                  fontSize: 12.5, color: 'var(--accent)', fontWeight: 600, cursor: 'pointer',
                }}
              >
                {q
                  ? `View all ${matches.length} result${matches.length === 1 ? '' : 's'} for "${globalQuery.trim()}" →`
                  : `Browse all ${models.length} models →`}
              </div>
            </div>
          )}
        </div>

        <div style={{ flex: 1 }} />
      </header>
      {open && <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 25 }} />}
    </>
  );
}
