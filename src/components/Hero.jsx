import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-ship" style={{ marginRight: '8px' }}></i> 
            Fast Clearance. Reliable Delivery.
          </div>
          <h1>
            Your cargo.<br />
            <span className="highlight">Our priority.</span><br />
            Your success.
          </h1>
          <p>
            Grandline Logistics Limited moves freight by sea, air and road — clearing customs, 
            storing goods and delivering on time, every time.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Start Shipping</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years moving cargo</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Global partners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Core service lines</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Client support</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <span className="hero-image-text">Global Logistics</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;