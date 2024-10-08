import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game-details/:id" element={<GamePage />} />
      </Routes>
    </Router>
  );
}




export default App
