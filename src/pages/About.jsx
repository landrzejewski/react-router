import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>
        This is a simple React application demonstrating the basics of React Router.
      </p>
      <p>
        React Router is the standard routing library for React applications. It enables
        the implementation of dynamic, client-side routing in single-page applications.
      </p>
      <p>
        In this demo, we're showcasing:
      </p>
      <ul>
        <li>Basic routing with Route and Routes components</li>
        <li>Navigation with Link components</li>
        <li>URL parameters</li>
        <li>Nested routes</li>
        <li>404 page handling</li>
      </ul>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </div>
  );
}

export default About;
