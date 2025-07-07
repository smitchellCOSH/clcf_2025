
/* App.jsx controls the routing between pages for the whole app. */


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Guide from './pages/Guide';
import Resources from './pages/Resources';
import PlotYourForest from './pages/PlotYourForest';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import PlantCalculator from './pages/PlantCalculator';
import AutoTop from './components/AutoTop';


const App = () => {
  return (
    <Router>
      <AutoTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/plot" element={<PlotYourForest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/plant-calculator" element={<PlantCalculator />} />
      </Routes>
    </Router>
  );
};

export default App;