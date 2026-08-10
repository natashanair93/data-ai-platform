import FirmIndexChart from '../components/FirmIndexChart';
import TopModels from '../components/TopModels';
import WhatsNew from '../components/WhatsNew';
import { useApp } from '../state/store';
import { ComparingButton, GhostButton, PrimaryButton } from '../ui/primitives';

/** Benchmarking landing — What's new, Firm Index, Top models by metric. */
export default function Landing() {
  const { shortlist, clearShortlist, go } = useApp();

  return (
    <div style={{ maxWidth: 1180, margin: '0 auto', padding: '30px 34px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <h1 style={{ fontSize: 25, fontWeight: 600, margin: '0 0 5px' }}>Benchmarking</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {shortlist.length > 0 && <GhostButton onClick={clearShortlist}>Clear</GhostButton>}
          <ComparingButton />
          <PrimaryButton onClick={() => go('home')}>All models</PrimaryButton>
        </div>
      </div>
      <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 24px', maxWidth: 640, lineHeight: 1.5 }}>
        Firm-wide model intelligence, updated daily. Click models anywhere to select them for comparison, or search to
        explore the full catalog.
      </p>

      <WhatsNew />
      <FirmIndexChart />
      <TopModels />
    </div>
  );
}
