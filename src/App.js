import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
