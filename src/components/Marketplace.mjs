import React, { useEffect, useState } from 'react';
import { Collapsible } from './Collapsible.mjs'; // Ensure this path is correct

const Marketplace = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  // Sample categories for demonstration
  const categories = ['Supplements', 'Therapies', 'Clinics', 'Wearables', 'Nutrition'];

  // Define the handleCategoryClick function
  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category}`);
    // TODO: Implement what should happen when a category is clicked
  };

  return (
    <main className="flex-1 grid md:grid-cols-[200px_1fr] gap-4 p-4 md:gap-8 md:p-6">
      <div className="hidden md:flex flex-col gap-4">
        <Collapsible title="All Categories">
          <div className="grid gap-2">
            {categories.map((category, index) => (
              // Replace the <a> tag with a <button> for better accessibility
              <button key={index} onClick={() => handleCategoryClick(category)} className="flex items-center text-sm font-medium rounded-md px-3 py-2">
                {category}
              </button>
            ))}
          </div>
        </Collapsible>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="device bg-white shadow rounded-lg p-4">
            <img src={product.image} className="mx-auto mb-2" alt={product.name} />
            <h2 className="text-xl mb-2">{product.name}</h2>
            <p className="mb-4">{product.description}</p>
            // Ensure the href is a valid URL
            <a href={product.detailsUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 text-white rounded px-4 py-1">View Details</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Marketplace;
