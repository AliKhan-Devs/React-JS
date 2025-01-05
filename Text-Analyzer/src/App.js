// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 1000);
  };

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#5a509b';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark mode disabled", 'success');
    }
  };

  return (
    
      <Router>
        <Navbar mode={mode} title='Text Analyzer' toggle={toggle} showAlert={showAlert} />
        <div className="container mb-3">
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
         
          </Routes>
        
        </div>
      </Router>
   
  );
}

export default App;
