import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png' 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
