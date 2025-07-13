import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </div>
      <div className="contact-content">
        <p>
          Have questions, feedback, or just want to say hello? Reach out to us using the details below or fill out our contact
          form, and we'll get back to you as soon as possible.
        </p>

        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <ul>
            <li><strong>Email:</strong> support@inspiretech.com</li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>Address:</strong> 123 Tech Street, Innovation City, Techland</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

