import WorkerPage from './pages/WorkerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InventoryPage from './pages/InventoryPage';
import SubmitPage from './pages/SubmitPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkerPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
