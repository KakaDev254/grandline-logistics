import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const servicesData = [
  {
    icon: 'fa-plane',
    title: 'FREIGHT FORWARDING',
    description: 'Sea and air freight moved end to end with documentation handled by our team.'
  },
  {
    icon: 'fa-file-contract',
    title: 'CUSTOMS CLEARANCE',
    description: 'Fast, compliant clearance that keeps your cargo moving through every checkpoint.'
  },
  {
    icon: 'fa-warehouse',
    title: 'WAREHOUSING & DISTRIBUTION',
    description: 'Secure storage, inventory handling and distribution built around your volumes.'
  },
  {
    icon: 'fa-truck',
    title: 'HAULAGE & TRANSPORT',
    description: 'A reliable fleet for containerised and general cargo, on schedule every time.'
  },
  {
    icon: 'fa-globe',
    title: 'IMPORT & EXPORT SOLUTIONS',
    description: 'Global trade support from supplier pickup to final delivery at your door.'
  }
];

const Services = () => {
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
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className={`services-header ${isVisible ? 'fade-in' : ''}`}>
          <span className="services-tag">OUR SERVICES</span>
          <h2 className="services-title">COMPLETE LOGISTICS<br />UNDER ONE ROOF</h2>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
          
          {/* Red Card - No Icon */}
          <div 
            className={`service-card-red ${isVisible ? 'fade-in-up' : ''}`}
            style={{ animationDelay: `${servicesData.length * 0.08}s` }}
          >
            <h3>NEED SOMETHING TAILORED?</h3>
            <p>Tell us what you are shipping and we will build the route around it.</p>
            <button 
              className="talk-btn"
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              TALK TO US <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;