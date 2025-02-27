import React from 'react';
import './Footer.css';

const Footer = () => {

  // Component States
  const currentDate = new Date().getFullYear();


  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-0">&copy; { currentDate } Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;