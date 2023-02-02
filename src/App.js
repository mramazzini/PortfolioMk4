import React from 'react';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Hire from './components/pages/Hire'
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
        <Route
          path='/hire'
          element={<Hire />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
    </Router>

  </div>
  );
}

export default App;