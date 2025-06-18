import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our React Router tutorial application!</p>
      <p>
        This is a simple demonstration of React Router basics. Use the navigation
        above to explore different pages or click the buttons below.
      </p>
      <div className="button-group">
        <Link to="/about" className="button">
          Learn About Us
        </Link>
        <Link to="/contact" className="button">
          Contact Us
        </Link>
        <Link to="/products/123" className="button">
          View Sample Product
        </Link>
      </div>
    </div>
  );
}

export default Home;
