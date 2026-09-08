import React, { useEffect, useRef, useState } from 'react';
import './About.css';
// Import your about image
import aboutImage from '../assets/about-image.jpg'; // Change this to your actual image name

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className={`about-grid ${isVisible ? 'fade-in' : ''}`}>
          {/* Left Column - Image */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img src={aboutImage} alt="Grandline Logistics" />
              <div className="about-image-overlay"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content">
            <span className="about-tag">ABOUT GRANDLINE</span>
            <h2>RELIABLE SERVICE. ON TIME.<br />EVERY TIME.</h2>
            <p>
              We are a logistics partner built for businesses that cannot afford delays. From
              the moment your consignment leaves the supplier, our team handles the
              paperwork, the clearance and the movement — and keeps you updated the
              whole way.
            </p>
            <p>
              Whether it is a single container or a recurring supply chain, we deliver world-
              class logistics solutions that help your business grow.
            </p>
            <div className="about-highlight">
              <i className="fas fa-arrow-right"></i>
              LET'S MOVE FORWARD TOGETHER.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;