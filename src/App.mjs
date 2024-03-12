import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Marketplace from './components/Marketplace.mjs';
import ProductDetails from './components/ProductDetails.mjs';
import Navigation from './components/Navigation'; // Import the Navigation component

function App() {
  return (
    <Router>
      <div className="flex">
        <Navigation /> {/* Include the Navigation component */}
        <div className="flex-grow bg-gray-100">
          <header className="bg-blue-800 text-white p-4 text-center mb-4">
            <h1 className="text-4xl">LongevityVerse Marketplace</h1>
          </header>
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            {/* Additional routes can be added here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
