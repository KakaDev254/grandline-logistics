import React, { useEffect, useState } from 'react';
import './CtaBanner.css';

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
      {/* Parallax Background */}
      <div 
        className="cta-background"
        style={{
          backgroundImage: "url('/cta-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${offset * 0.4}px) scale(1.1)`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="cta-overlay"></div>

      <div className="container cta-content">
        <h2>
          NEW MONTH. NEW<br />
          <span className="highlight">OPPORTUNITIES.</span><br />
          <span className="highlight">STRONGER PARTNERSHIPS</span>
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