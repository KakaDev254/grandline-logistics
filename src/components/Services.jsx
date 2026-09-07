import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: 'fa-plane',
    title: 'Freight Forwarding',
    description: 'Sea and air freight moved end to end with documentation handled by our team.'
  },
  {
    icon: 'fa-file-contract',
    title: 'Customs Clearance',
    description: 'Fast, compliant clearance that keeps your cargo moving through every checkpoint.'
  },
  {
    icon: 'fa-warehouse',
    title: 'Warehousing & Distribution',
    description: 'Secure storage, inventory handling and distribution built around your volumes.'
  },
  {
    icon: 'fa-truck',
    title: 'Haulage & Transport',
    description: 'A reliable fleet for containerised and general cargo, on schedule every time.'
  },
  {
    icon: 'fa-globe',
    title: 'Import & Export Solutions',
    description: 'Global trade support from supplier pickup to final delivery at your door.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Complete logistics under one roof</h2>
          <p className="section-sub mx-auto">End-to-end solutions tailored to your supply chain needs.</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
          <div className="service-card service-card-highlight">
            <div className="service-icon" style={{ color: '#f59e0b' }}>
              <i className="fas fa-message"></i>
            </div>
            <h3 style={{ color: 'white' }}>Need something tailored?</h3>
            <p style={{ color: '#cbd5e1' }}>
              Tell us what you are shipping and we will build the route around it.
            </p>
            <button 
              className="service-cta"
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;