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
          {/* Tag Line */}
          <div className="hero-tag">
            FAST CLEARANCE. RELIABLE <br />DELIVERY.
          </div>

          {/* Main Heading */}
          <h1>
            YOUR CARGO. <br />
            <span className="highlight">OUR PRIORITY.</span> <br />
            YOUR <br />
            SUCCESS.
          </h1>

          {/* Description */}
          <p>
            Grandline Logistics Limited moves freight by sea, air and road — 
            clearing customs, storing goods and delivering on time, every time.
          </p>

          {/* CTA Button */}
          <a href="#contact" className="btn-primary">
            REQUEST A QUOTE <i className="fas fa-arrow-right"></i>
          </a>

          {/* Services Label */}
          <a href="#services" className="hero-services">
            OUR SERVICES
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;