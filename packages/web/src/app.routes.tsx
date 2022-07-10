import { Navigate, Route, Routes } from 'react-router-dom';
import HomeContent from './containers/HomeContent/page';
import MyDecks from './containers/MyDecks/page';

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomeContent />} />
      <Route path="/mydecks" element={<MyDecks />} />
      <Route path="*" element={<div>404 Not found</div>} />
    </Routes>
  );
}

export default AppContent;
