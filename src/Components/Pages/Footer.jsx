// src/components/Footer.js
import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <section id='contact'>
    <footer className="footer">
      <div className="footer-content">
        <h4>Contact Us</h4>
        <p>Email: devidecoration@gmail.com</p>
        <p>Phone: +91 9744354160</p>
        <p>Address: Morazha, Kannur, India</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Devi Event Management. All rights reserved.</p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
