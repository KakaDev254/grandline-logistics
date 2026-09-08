import React, { useEffect, useState } from 'react';
import './Hero.css';
// Import your local image
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
      {/* Parallax Background Image */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${offset * 0.5}px) scale(1.1)`,
        }}
      />
      
      {/* Darker Overlay for better text visibility */}
      <div className="hero-overlay"></div>

      <div className="container hero-grid">
        <div className="hero-content">
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

          {/* Services Label - Clickable */}
          <a href="#services" className="hero-services-label">
            <span>OUR SERVICES</span>
            <i className="fas fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;