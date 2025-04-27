import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import TopPage from './pages/TopPage';
import MyRecordPage from './pages/MyRecordPage';
import ColumnPage from './pages/ColumnPage';
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
      </Routes>
    </Router>
  );
}

export default App;
