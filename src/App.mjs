import React from 'react';
import './App.css';
import Marketplace from './components/Marketplace.mjs';

function App() {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-800 text-white p-4 text-center mb-4">
        <h1 className="text-4xl">LongevityVerse Marketplace</h1>
      </header>
      <Marketplace />
    </div>
  );
}

export default App;
