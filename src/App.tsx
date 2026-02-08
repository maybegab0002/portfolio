
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Omniportal from './projects/omniportal';
import Kadiz from './projects/kadiz';
import Spendzy from './projects/spendzy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/omniportal" element={<Omniportal />} />
        <Route path="/projects/kadiz" element={<Kadiz />} />
        <Route path="/projects/spendzy" element={<Spendzy />} />
      </Routes>
    </Router>
  );
};

export default App;