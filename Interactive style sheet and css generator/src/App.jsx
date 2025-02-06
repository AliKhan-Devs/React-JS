import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import InteractiveLab from './components/InteractiveLab';
import Tutorials from './components/Tutorials';
import Challenges from './components/Challenges';
import Resources from './components/Resources';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interactive-lab" element={<InteractiveLab />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;