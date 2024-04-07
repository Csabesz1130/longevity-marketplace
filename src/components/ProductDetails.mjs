import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch product details with status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => {
        console.error("Failed to fetch product details", err);
        setError("Failed to load product details. Please try again later.");
      });
  }, [productId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <img src={product.image} alt={`Image of ${product.name}`} className="mb-4 rounded-lg shadow-lg" />
      <p className="mb-4">{product.description}</p>
      <a href={product.detailsUrl} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Visit Distributor
      </a>
    </div>
  );
};

export default ProductDetails;
