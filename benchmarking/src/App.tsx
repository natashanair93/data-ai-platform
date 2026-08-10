import TopBar from './components/TopBar';
import FilterSidebar from './components/FilterSidebar';
import ShortlistTray from './components/ShortlistTray';
import Landing from './pages/Landing';
import AllModels from './pages/AllModels';
import ModelDetail from './pages/ModelDetail';
import Comparison from './pages/Comparison';
import Methodology from './pages/Methodology';
import Stub from './pages/Stub';
import { useApp } from './state/store';

export default function App() {
  const { view } = useApp();

  return (
    <div
      className="salt-theme salt-density-low"
      style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg)' }}
    >
      <TopBar />

      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* The filter sidebar belongs to the All models explorer only. */}
        {view === 'home' && <FilterSidebar />}

        <main style={{ flex: 1, overflow: 'auto', minWidth: 0 }}>
          {view === 'landing' && <Landing />}
          {view === 'home' && <AllModels />}
          {view === 'model' && <ModelDetail />}
          {view === 'compare' && <Comparison />}
          {view === 'method' && <Methodology />}
          {(view === 'agents' || view === 'skills') && <Stub />}
        </main>
      </div>

      <ShortlistTray />
    </div>
  );
}
