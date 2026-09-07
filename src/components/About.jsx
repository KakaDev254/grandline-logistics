import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-image"></div>
        <div>
          <span className="about-tag">ABOUT GRANDLINE</span>
          <h2>Reliable service. On time. Every time.</h2>
          <p>
            We are a logistics partner built for businesses that cannot afford delays. 
            From the moment your consignment leaves the supplier, our team handles the 
            paperwork, the clearance and the movement — and keeps you updated the whole way.
          </p>
          <p>
            Whether it is a single container or a recurring supply chain, we deliver 
            world-class logistics solutions that help your business grow.
          </p>
          <div className="about-highlight">
            <p>
              <i className="fas fa-arrow-right" style={{ color: '#d97706', marginRight: '12px' }}></i>
              Let's move forward together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;