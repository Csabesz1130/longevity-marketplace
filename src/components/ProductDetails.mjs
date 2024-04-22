import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Container, Typography, Button, Link } from '@material-ui/core';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch product details with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Failed to fetch product details", err);
        setError("Failed to load product details. Please try again later.");
      });
  }, [productId]);

  if (error) {
    return <Typography className="text-red-500">{error}</Typography>;
  }

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const handleDistributorLinkClick = () => {
    window.gtag('event', 'click', {
      event_category: 'Distributor Link',
      event_label: product.name,
      value: 1,
    });

    window.open(product.detailsUrl, '_blank');
  };

  return (
    <Container className="max-w-4xl mx-auto p-4 space-y-4">
      <Button
        onClick={() => navigate(-1)}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414-1.414L9.586 10 6.293 6.707A1 1 0 017.707 5.293l4 4a1 1 0 010 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </Button>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="my-4 rounded-lg shadow-md"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <Typography variant="h2" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" component="p">
            {product.description}
          </Typography>
          <Typography variant="h5" component="h3">
            Price: ${product.price}
          </Typography>
          {product.categories