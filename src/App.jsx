// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Guide from './pages/Guide';
import Resources from './pages/Resources';
import PlotYourForest from './pages/PlotYourForest';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/plot" element={<PlotYourForest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
