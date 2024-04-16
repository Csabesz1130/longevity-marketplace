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

  const handleDistributorLinkClick = () => {
    window.gtag('event', 'click', {
      event_category: 'Distributor Link',
      event_label: product.name,
      value: 1,
    });

    window.open(product.detailsUrl, '_blank');
  };

  // Inside your return statement in ProductDetails.mjs
return (
  <div className="max-w-4xl mx-auto p-4 space-y-4">
    <button onClick={() => navigate(-1)} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414-1.414L9.586 10 6.293 6.707A1 1 0 017.707 5.293l4 4a1 1 0 010 1.414l-4 4z" clipRule="evenodd" />
        </svg>
        Back
      </button>
    <div>
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <img src={product.image} alt={`Image of ${product.name}`} className="my-4 rounded-lg shadow-md" />
      <p>{product.description}</p>
      <div className="mt-4">
        <span className="text-lg font-semibold">Price:</span> ${product.price}
      </div>
      {product.categories && (
        <div className="mt-4">
          <span className="text-lg font-semibold">Categories:</span>
          <ul className="list-disc list-inside">
            {product.categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
      )}
      <a href={product.detailsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Visit Distributor
      </a>
    </div>
  </div>
);

};

export default ProductDetails;
