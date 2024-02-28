import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Marketplace from './components/Marketplace.mjs';
import ProductDetails from './components/ProductDetails.mjs'; // Make sure this path matches the location of your new component

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <header className="bg-blue-800 text-white p-4 text-center mb-4">
          <h1 className="text-4xl">LongevityVerse Marketplace</h1>
        </header>
        <Switch>
          <Route path="/" exact component={Marketplace} />
          <Route path="/product/:productId" component={ProductDetails} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
