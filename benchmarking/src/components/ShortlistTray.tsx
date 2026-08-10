import { MAX_COMPARE } from '../lib/derive';
import { modelById, useApp } from '../state/store';

export default function ShortlistTray() {
  const { shortlist, openModel, toggleShortlist, clearShortlist, openCompare } = useApp();
  if (!shortlist.length) return null;
  const remaining = MAX_COMPARE - shortlist.length;

  return (
    <div
      style={{
        position: 'fixed', left: 0, right: 0, bottom: 18, margin: '0 auto', width: 'fit-content',
        maxWidth: '92vw', background: 'var(--panel)', border: '1px solid var(--line)', borderRadius: 12,
        boxShadow: '0 10px 34px rgba(0,0,0,0.16)', padding: '10px 14px', display: 'flex',
        alignItems: 'center', gap: 14, zIndex: 40, animation: 'trayup .2s ease',
      }}
    >
      <span style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', flex: 'none', whiteSpace: 'nowrap' }}>
        {shortlist.length} SELECTED
      </span>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', minWidth: 0 }}>
        {shortlist.map((id) => {
          const m = modelById(id);
          if (!m) return null;
          return (
            <div
              key={id}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px 6px 11px',
                border: '1px solid var(--line)', borderRadius: 7, background: 'var(--bg)',
              }}
            >
              <span onClick={() => openModel(id)} style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {m.name}
              </span>
              <span onClick={() => toggleShortlist(id)} style={{ cursor: 'pointer', color: 'var(--faint)', fontSize: 15, lineHeight: 1, padding: '0 2px' }}>
                ×
              </span>
            </div>
          );
        })}
      </div>
      <span style={{ fontSize: 12, color: 'var(--faint)', flex: 'none' }}>
        {remaining === 0 ? 'Maximum reached' : `${remaining} more allowed`}
      </span>
      <button
        type="button"
        onClick={clearShortlist}
        style={{
          height: 34, padding: '0 12px', border: '1px solid var(--line)', borderRadius: 7,
          background: 'var(--panel)', color: 'var(--muted)', fontSize: 12.5, cursor: 'pointer', flex: 'none',
        }}
      >
        Clear
      </button>
      <button
        type="button"
        onClick={openCompare}
        style={{
          height: 34, padding: '0 15px', border: '1px solid var(--accent-line)', borderRadius: 8,
          background: 'var(--accent-soft)', color: 'var(--accent)', fontSize: 13, fontWeight: 600,
          cursor: 'pointer', flex: 'none',
        }}
      >
        Comparing ({shortlist.length}) →
      </button>
    </div>
  );
}
