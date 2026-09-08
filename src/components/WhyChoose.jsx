import React, { useEffect, useRef, useState } from 'react';
import './WhyChoose.css';

const features = [
  {
    icon: 'fa-users',
    title: 'EXPERIENCED TEAM',
    description: 'Specialists who know trade routes and regulations.'
  },
  {
    icon: 'fa-globe-americas',
    title: 'GLOBAL NETWORK',
    description: 'Trusted partners and agents across key trade lanes.'
  },
  {
    icon: 'fa-clock',
    title: 'TIMELY DELIVERY',
    description: 'Schedules we plan carefully and then keep.'
  },
  {
    icon: 'fa-headset',
    title: 'CLIENT SATISFACTION',
    description: 'Clear communication from booking to final mile.'
  }
];

const WhyChoose = () => {
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
    <section className="why-choose" id="why" ref={sectionRef}>
      <div className="container">
        <div className={`why-header ${isVisible ? 'fade-in' : ''}`}>
          <span className="why-tag">WHY CHOOSE US</span>
          <h2 className="why-title">BUILT ON TRUST AND DELIVERY</h2>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`why-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="why-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;