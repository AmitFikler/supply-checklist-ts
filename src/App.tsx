import WorkerPage from './pages/WorkerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InventoryList from './pages/InventoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkerPage />} />
        <Route path="/inventory" element={<InventoryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
