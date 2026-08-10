import { useApp } from '../state/store';

/** Agents & Skills slot in as parallel entity types reusing this whole pattern. */
export default function Stub() {
  const { view } = useApp();
  const isAgents = view === 'agents';

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 40px' }}>
      <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--muted)', marginBottom: 6 }}>
        COMING SOON · NEW ENTITY TYPE
      </div>
      <h1 style={{ fontSize: 28, fontWeight: 600, margin: '0 0 10px' }}>{isAgents ? 'Agents' : 'Skills'}</h1>
      <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 26px', maxWidth: 560 }}>
        {isAgents
          ? 'Agents will be a first-class entity alongside Models — found through the same filters, ranked on autonomy benchmarks (tool use, task success, recovery), and dropped into the same comparison charts.'
          : 'Skills will plug into the same shape: filter, benchmark and compare — even mixing skills, agents and models in one comparison.'}
      </p>
    </div>
  );
}
