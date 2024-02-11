import React, { useEffect, useState } from 'react';

const Marketplace = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="device bg-white shadow rounded-lg p-4">
            <img src={product.image} className="mx-auto mb-2" alt={product.name} />
            <h2 className="text-xl mb-2">{product.name}</h2>
            <p className="mb-4">{product.description}</p>
            <a href={product.detailsUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 text-white rounded px-4 py-1">View Details</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Marketplace;
