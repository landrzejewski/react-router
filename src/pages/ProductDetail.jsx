import React from 'react';
import { useParams, Link, useLoaderData } from 'react-router-dom';

function ProductDetail() {
  // Get the productId from the URL parameters
  const { productId } = useParams();
  
  // Get product data from loader
  const product = useLoaderData();
  
  return (
    <div className="page">
      <h1>Product Detail</h1>
      <div className="product-card">
        <h2>{product.name}</h2>
        <div className="product-price">${product.price}</div>
        
        <div className="product-rating">
          <span>Rating: {product.rating}/5</span>
          <span>({product.reviews} reviews)</span>
        </div>
        
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        
        <div className="product-features">
          <h3>Features</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <p className="loader-info">
          This data was loaded using a React Router loader function before the component rendered.
          The product ID ({productId}) was extracted from the URL using the useParams hook.
        </p>
      </div>
      
      <div className="button-group">
        <Link to="/products" className="button">
          Back to Products
        </Link>
        <Link to="/" className="button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
