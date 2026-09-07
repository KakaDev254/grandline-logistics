import React from 'react';
import './WhyChoose.css';

const features = [
  {
    icon: 'fa-users',
    title: 'Experienced Team',
    description: 'Specialists who know trade routes and regulations.'
  },
  {
    icon: 'fa-network-wired',
    title: 'Global Network',
    description: 'Trusted partners and agents across key trade lanes.'
  },
  {
    icon: 'fa-clock',
    title: 'Timely Delivery',
    description: 'Schedules we plan carefully and then keep.'
  },
  {
    icon: 'fa-headset',
    title: 'Client Satisfaction',
    description: 'Clear communication from booking to final mile.'
  }
];

const WhyChoose = () => {
  return (
    <section className="why-choose" id="why">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Built on trust and delivery</h2>
          <p className="section-sub mx-auto">Why businesses choose us as their logistics partner.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;