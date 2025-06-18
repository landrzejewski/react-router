import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  // Get the productId from the URL parameters
  const { productId } = useParams();
  
  return (
    <div className="page">
      <h1>Product Detail</h1>
      <div className="product-card">
        <h2>Product ID: {productId}</h2>
        <p>This is a demonstration of route parameters in React Router.</p>
        <p>
          The product ID is extracted from the URL using the useParams hook.
          Try changing the ID in the URL to see how this component updates.
        </p>
      </div>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </div>
  );
}

export default ProductDetail;
