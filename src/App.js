// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App
