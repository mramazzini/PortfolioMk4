import React from 'react';
import Home from './components/pages/Home'

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="container">

    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        
      </Routes>
    </Router>

  </div>
  );
}

export default App;