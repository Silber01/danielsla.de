import React from 'react';
import './App.css';
import MainScreen from './MainScreen';
import ColorLearn from './ColorLearn';
import {HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/colorLearn" element={< ColorLearn />} />
          <Route path="/colorlearn" element={< ColorLearn />} />
          <Route path="/ColorLearn" element={< ColorLearn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
