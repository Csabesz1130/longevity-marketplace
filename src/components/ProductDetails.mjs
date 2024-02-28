// src/components/ProductDetails.mjs
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details using the productId
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Failed to fetch product details", err));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <img src={product.image} alt={product.name} className="mb-4" />
      <p className="mb-4">{product.description}</p>
      <a href={product.detailsUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Visit Distributor
      </a>
    </div>
  );
};

export default ProductDetails;
