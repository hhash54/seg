// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CourseExplorationPage from './pages/CourseExplorationPage';
import InteractiveLessonPage from './pages/InteractiveLessonPage';
import UserDashboard from './pages/UserDashboard';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<CourseExplorationPage />} />
        <Route path="/lesson" element={<InteractiveLessonPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
