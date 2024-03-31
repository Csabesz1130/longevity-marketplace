// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Marketplace from './components/Marketplace'; // Adjusted to .js extension
import ProductDetails from './components/ProductDetails'; // Ensure this matches your file structure
import Navigation from './components/Navigation'; // Ensure Navigation component is properly imported

function App() {
  return (
    <Router>
      <div className="flex">
        <Navigation /> {/* Sidebar Navigation */}
        <div className="flex-grow bg-gray-100">
          <header className="bg-blue-800 text-white p-4 text-center mb-4">
            <h1 className="text-4xl">LongevityVerse Marketplace</h1>
          </header>
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            {/* Additional routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
