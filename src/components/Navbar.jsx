import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          GRANDLINE <span>LOGISTICS</span>
        </a>

        <button 
          className={`nav-hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#why" onClick={() => setIsOpen(false)}>Why Us</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="#contact" className="nav-btn" onClick={() => setIsOpen(false)}>Get a Quote</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;