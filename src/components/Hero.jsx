import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax offsets
  const parallaxOffset = scrollY * 0.5;
  const parallaxOffsetFast = scrollY * 0.8;
  const parallaxOffsetSlow = scrollY * 0.2;

  return (
    <section className="hero" ref={heroRef}>
      {/* Parallax Background Layers */}
      <div 
        className="parallax-layer layer-1"
        style={{ transform: `translateY(${parallaxOffsetSlow}px)` }}
      />
      <div 
        className="parallax-layer layer-2"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="parallax-layer layer-3"
        style={{ transform: `translateY(${parallaxOffsetFast}px)` }}
      />
      
      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`particle particle-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
            }}
          />
        ))}
      </div>

      <div className="container hero-grid">
        <div 
          className="hero-content"
          style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
        >
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
        <div 
          className="hero-image"
          style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
        >
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