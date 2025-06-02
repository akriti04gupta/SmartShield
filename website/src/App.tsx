import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ScanPage from './pages/ScanPage';
import ComparisonPage from './pages/ComparisonPage';
import SharingPage from './pages/SharingPage';
import AboutPage from './pages/AboutPage';
import ScanResult from './pages/ScanResult';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="result" element={<ScanResult />} />
          <Route path="scan" element={<ScanPage />} />
          <Route path="comparison" element={<ComparisonPage />} />
          <Route path="sharing" element={<SharingPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;