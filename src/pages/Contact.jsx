import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>
        This is the contact page of our React Router demo application.
      </p>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your message" rows="4"></textarea>
        </div>
        <button className="submit-button">Send Message</button>
      </div>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </div>
  );
}

export default Contact;
