import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for does not exist or has been moved.
      </p>
      <p>
        This is a demonstration of how React Router handles unknown routes
        using the wildcard path "*".
      </p>
      <Link to="/" className="button">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
