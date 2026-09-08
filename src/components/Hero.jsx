import React, { useEffect, useState } from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.jpg';

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
      {/* Parallax Background */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${offset * 0.5}px) scale(1.1)`,
        }}
      />
      
      <div className="hero-overlay"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          {/* Top left badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            TRUSTED LOGISTICS PARTNER
          </div>

          {/* Main heading with decorative line */}
          <div className="hero-heading-wrapper">
            <div className="heading-line"></div>
            <h1>
              <span className="text-light">YOUR CARGO,</span>
              <span className="text-highlight">OUR PRIORITY</span>
              <span className="text-light">YOUR SUCCESS</span>
            </h1>
          </div>

          {/* Description */}
          <p className="hero-description">
            Grandline Logistics delivers freight by sea, air and road — 
            with seamless customs clearance, secure warehousing, 
            and on-time delivery across the globe.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              GET STARTED
              <svg className="btn-arrow" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </a>
            <a href="#services" className="btn-secondary">
              EXPLORE SERVICES
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-number">12+</span>
              <span className="trust-label">Years of Excellence</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">40+</span>
              <span className="trust-label">Global Partners</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">24/7</span>
              <span className="trust-label">Client Support</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;