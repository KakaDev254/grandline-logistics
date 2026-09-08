import React, { useEffect, useState } from 'react';
import './CtaBanner.css';
import ctaBg from '../assets/cta-bg.jpg';

const CtaBanner = () => {
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
    <section className="cta-banner">
      {/* Background with imported image */}
      <div 
        className="cta-bg"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset * 0.4}px) scale(1.1)`,
        }}
      />
      
      {/* Lighter Overlay */}
      <div className="cta-overlay"></div>

      <div className="container cta-content">
        <h2>
          NEW MONTH. NEW<br />
          <span className="highlight">OPPORTUNITIES.</span><br />
          STRONGER PARTNERSHIPS
        </h2>
        <p>
          We renew our commitment to delivering world-class logistics solutions that help your
          business grow.
        </p>
        <a href="#contact" className="cta-btn">START SHIPPING</a>
      </div>
    </section>
  );
};

export default CtaBanner;