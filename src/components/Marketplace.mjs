import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard'; // Adjust the import path as necessary

export function Marketplace() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearchQuery && matchesCategory;
  });

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="marketplace">
      {/* Marketplace Header */}
      <div className="marketplace-header">
        <h2>Longevity Marketplace</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Supplements">Supplements</option>
          <option value="Food">Food</option>
          <option value="Devices">Devices</option>
        </select>
      </div>
      {/* Check if filteredProducts is empty */}
      {filteredProducts.length === 0 ? (
        <div className="no-products">No products found.</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
