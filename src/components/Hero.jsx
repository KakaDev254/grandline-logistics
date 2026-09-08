import React, { useEffect, useState } from 'react';
import './Hero.css';

// You can replace this with your own image URL
const heroBackgroundImage = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      {/* Parallax Background Image */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          transform: `translateY(${offset * 0.5}px) scale(1.1)`,
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="hero-overlay"></div>

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
          <div className="hero-image-content">
            <i className="fas fa-ship" style={{ fontSize: '3rem', marginBottom: '12px', color: 'var(--accent-gold)' }}></i>
            <span className="hero-image-text">QHL Grandline Logistics</span>
            <span className="hero-image-sub">Global Logistics Solutions</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;