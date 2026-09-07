import React from 'react';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>
          New month. New opportunities. <br />
          Stronger partnerships.
        </h2>
        <p>
          We renew our commitment to delivering world-class logistics solutions 
          that help your business grow.
        </p>
        <a href="#contact" className="btn-primary">Start Shipping</a>
      </div>
    </section>
  );
};

export default CtaBanner;