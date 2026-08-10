import { useState } from 'react';
import { HOSTS, MODELS, PARAM_BUCKETS, PUBLISHERS } from '../data/models';
import { paramBucket } from '../lib/derive';
import { useApp } from '../state/store';
import { CheckBox, RadioDot, mono } from '../ui/primitives';

type SectionKey = 'scope' | 'task' | 'pub' | 'host' | 'param' | 'cost' | 'lat';


/** One collapsible filter section. Defined at module scope so its children never remount. */
function AccordionSection({
  title, open, onToggle, children,
}: { title: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: '1px solid var(--line2)', paddingTop: 6 }}>
      <div
        onClick={onToggle}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 4px', cursor: 'pointer' }}
      >
        <span style={{ fontSize: 13, fontWeight: 600 }}>{title}</span>
        <span style={{ fontSize: 11, color: 'var(--faint)' }}>{open ? '▾' : '▸'}</span>
      </div>
      {open && <div style={{ padding: '2px 0 10px' }}>{children}</div>}
    </div>
  );
}

const rowStyle = { display: 'flex', alignItems: 'center', gap: 9, padding: '6px 5px', borderRadius: 6 } as const;

export default function FilterSidebar() {
  const {
    benchmarks, filters, filtered, setFilter, setSearch, toggleFilterKey, resetFilters, activeChips, taskBenchmark,
  } = useApp();
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    scope: true, task: true, pub: true, host: false, param: false, cost: false, lat: false,
  });

  const toggleSection = (id: SectionKey) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const setScope = (scope: typeof filters.scope) => {
    setFilter('scope', scope);
    if (taskBenchmark) {
      if (scope === 'Public' && taskBenchmark.scope === 'Proprietary') setFilter('task', 'all');
      if (scope === 'Proprietary' && taskBenchmark.scope === 'Public') setFilter('task', 'all');
    }
  };

  return (
    <aside
      style={{
        width: 256, flex: 'none', borderRight: '1px solid var(--line)', background: 'var(--panel)',
        overflow: 'auto', padding: '18px 16px 30px', display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 600 }}>Filters</div>
        {activeChips.length > 0 && (
          <div
            onClick={resetFilters}
            style={{ fontSize: 12, color: 'var(--muted)', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Reset
          </div>
        )}
      </div>

      <input
        value={filters.search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search models…"
        style={{
          width: '100%', height: 36, padding: '0 12px', border: '1px solid var(--line)', borderRadius: 8,
          background: 'var(--bg)', fontSize: 13, color: 'var(--ink)', outline: 'none', marginBottom: 6,
        }}
      />

      <AccordionSection title="Benchmarks" open={open.scope} onToggle={() => toggleSection('scope')}>
        {(['all', 'Public', 'Proprietary'] as const).map((id) => {
          const checked = filters.scope === id;
          const count = id === 'all' ? benchmarks.length : benchmarks.filter((b) => b.scope === id).length;
          return (
            <div key={id} className="row-hover" onClick={() => setScope(id)} style={{ ...rowStyle, cursor: 'pointer' }}>
              <RadioDot checked={checked} />
              <span style={{ fontSize: 13, color: checked ? 'var(--ink)' : 'var(--muted)' }}>{id === 'all' ? 'All' : id}</span>
              <span style={{ ...mono, marginLeft: 'auto', fontSize: 11.5, color: 'var(--faint)' }}>{count}</span>
            </div>
          );
        })}
      </AccordionSection>

      <AccordionSection title="Task" open={open.task} onToggle={() => toggleSection('task')}>
        {[{ id: 'all', label: 'All tasks', scope: null as string | null }, ...benchmarks.map((b) => ({ id: b.id, label: b.label, scope: b.scope }))].map((o) => {
          const checked = filters.task === o.id;
          const proprietary = o.scope === 'Proprietary';
          const greyed = !!o.scope && ((proprietary && filters.scope === 'Public') || (!proprietary && filters.scope === 'Proprietary'));
          return (
            <div
              key={o.id}
              className="row-hover"
              onClick={() => !greyed && setFilter('task', o.id)}
              style={{ ...rowStyle, cursor: greyed ? 'not-allowed' : 'pointer' }}
            >
              <RadioDot checked={checked} />
              <span style={{ fontSize: 13, color: greyed ? 'var(--faint)' : checked ? 'var(--ink)' : 'var(--muted)' }}>{o.label}</span>
              {proprietary && (
                <span style={{ fontSize: 9, letterSpacing: '.03em', color: 'var(--internal)', background: 'var(--amber-soft)', borderRadius: 4, padding: '1px 5px' }}>
                  proprietary
                </span>
              )}
              <span style={{ ...mono, marginLeft: 'auto', fontSize: 11.5, color: 'var(--faint)' }}>
                {o.id === 'all' ? MODELS.length : filtered.length}
              </span>
            </div>
          );
        })}
      </AccordionSection>

      <AccordionSection title="Publisher" open={open.pub} onToggle={() => toggleSection('pub')}>
        {PUBLISHERS.map((p) => (
          <div key={p} className="row-hover" onClick={() => toggleFilterKey('pub', p)} style={{ ...rowStyle, cursor: 'pointer' }}>
            <CheckBox checked={!!filters.pub[p]} />
            <span style={{ fontSize: 13 }}>{p}</span>
            <span style={{ ...mono, marginLeft: 'auto', fontSize: 11.5, color: 'var(--faint)' }}>
              {MODELS.filter((m) => m.prov === p).length}
            </span>
          </div>
        ))}
      </AccordionSection>

      <AccordionSection title="Available on" open={open.host} onToggle={() => toggleSection('host')}>
        {HOSTS.map((h) => (
          <div key={h} className="row-hover" onClick={() => toggleFilterKey('host', h)} style={{ ...rowStyle, cursor: 'pointer' }}>
            <CheckBox checked={!!filters.host[h]} />
            <span style={{ fontSize: 13 }}>{h}</span>
            <span style={{ ...mono, marginLeft: 'auto', fontSize: 11.5, color: 'var(--faint)' }}>
              {MODELS.filter((m) => m.host.includes(h)).length}
            </span>
          </div>
        ))}
      </AccordionSection>

      <AccordionSection title="Parameters" open={open.param} onToggle={() => toggleSection('param')}>
        {PARAM_BUCKETS.map((b) => (
          <div key={b} className="row-hover" onClick={() => toggleFilterKey('param', b)} style={{ ...rowStyle, cursor: 'pointer' }}>
            <CheckBox checked={!!filters.param[b]} />
            <span style={{ fontSize: 13 }}>{b}</span>
            <span style={{ ...mono, marginLeft: 'auto', fontSize: 11.5, color: 'var(--faint)' }}>
              {MODELS.filter((m) => paramBucket(m) === b).length}
            </span>
          </div>
        ))}
      </AccordionSection>

      <AccordionSection title="Cost ceiling" open={open.cost} onToggle={() => toggleSection('cost')}>
        <div style={{ padding: '6px 5px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 7 }}>
            <span style={{ color: 'var(--muted)' }}>Blended ≤</span>
            <span style={mono}>${filters.cost}</span>
          </div>
          <input
            type="range" min={1} max={50} step={1} value={filters.cost}
            onChange={(e) => setFilter('cost', Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)' }}
          />
        </div>
      </AccordionSection>

      <AccordionSection title="Latency budget" open={open.lat} onToggle={() => toggleSection('lat')}>
        <div style={{ padding: '6px 5px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 7 }}>
            <span style={{ color: 'var(--muted)' }}>P50 ≤</span>
            <span style={mono}>{filters.lat}s</span>
          </div>
          <input
            type="range" min={1} max={8} step={0.5} value={filters.lat}
            onChange={(e) => setFilter('lat', Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)' }}
          />
        </div>
      </AccordionSection>

      <div style={{ flex: 1 }} />
      <div style={{ borderTop: '1px solid var(--line2)', padding: '12px 4px 0', marginTop: 14, fontSize: 11.5, color: 'var(--faint)', lineHeight: 1.5 }}>
        Coming soon — <span style={{ color: 'var(--muted)' }}>Agents</span> &amp; <span style={{ color: 'var(--muted)' }}>Skills</span> share these same filters.
      </div>
    </aside>
  );
}
