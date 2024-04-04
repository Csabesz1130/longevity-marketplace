// src/components/ProductCard.mjs
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <Link to={`/product/${product.id}`} className="inline-block mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors">View Details</Link>
      </div>
    </div>
  );
};

export { ProductCard };
