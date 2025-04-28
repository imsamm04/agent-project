import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import TopPage from './pages/TopPage';
import MyRecordPage from './pages/MyRecordPage';
import ColumnPage from './pages/ColumnPage';
import ChallengePage from './pages/ChallengePage';
import NotificationPage from './pages/NotificationPage';
import NotFoundPage from './pages/NotFoundPage';
import logo from './logo.svg';
import './App.css';
import './tailwind.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/my-record" element={<MyRecordPage />} />
        <Route path="/column" element={<ColumnPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
