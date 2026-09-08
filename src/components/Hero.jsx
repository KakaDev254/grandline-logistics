import React, { useEffect, useState } from 'react';
import './Hero.css';
// Import your local image
import heroBg from '../assets/hero-bg.jpg'; // Change this to your actual image name

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
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${offset * 0.5}px) scale(1.1)`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <i className="fas fa-ship" style={{ marginRight: '8px' }}></i> 
            FAST CLEARANCE. RELIABLE DELIVERY.
          </div>

          {/* Main Heading */}
          <h1>
            YOUR CARGO.<br />
            <span className="highlight">OUR PRIORITY.</span><br />
            YOUR SUCCESS.
          </h1>

          {/* Description */}
          <p>
            Grandline Logistics Limited moves freight by sea, air and road — 
            clearing customs, storing goods and delivering on time, every time.
          </p>

          {/* CTA Button */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">REQUEST A QUOTE</a>
          </div>

          {/* Services Label */}
          <div className="hero-services-label">
            <span>OUR SERVICES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;