import React from 'react';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-badge">NEW MONTH. NEW OPPORTUNITIES.</div>
        <h2>
          Stronger Partnerships!
        </h2>
        <p>
          Happy New Month! As we step into September, we renew our commitment to 
          delivering world-class logistics solutions that help your business grow.
          <br />
          <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>
            Let's achieve more together!
          </span>
        </p>
        <div className="cta-tagline">
          <span>YOUR CARGO. OUR PRIORITY.</span>
          <span className="highlight">YOUR SUCCESS.</span>
        </div>
        <a href="#contact" className="btn-primary">Get Started Today</a>
      </div>
    </section>
  );
};

export default CtaBanner;