import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cargo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', cargo: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2>Let's move your cargo</h2>
          <p>Get in touch today for a quote or a consultation. We're ready to support your supply chain.</p>
          
          <div className="contact-detail">
            <i className="fas fa-phone-alt"></i>
            <span>+254 716 311 139</span>
          </div>
          <div className="contact-detail">
            <i className="fas fa-envelope"></i>
            <span>info@grandlinelogistics.com</span>
          </div>
          <div className="contact-detail">
            <i className="fas fa-location-dot"></i>
            <span>Mombasa, Kenya</span>
          </div>
          
          <div className="social-links">
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
          
          <p className="social-handles">
            <i className="fab fa-tiktok"></i> qhlgrandline · 
            <i className="fab fa-linkedin-in"></i> grandline logistics limited
          </p>
        </div>
        
        <div className="quote-form">
          <h3>Request a quote</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="e.g. John M." 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@company.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="cargo">Cargo Details</label>
              <textarea 
                id="cargo" 
                placeholder="Tell us what you're shipping, volume, route..." 
                value={formData.cargo}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i> 
              Send Quote Request
            </button>
          </form>
          <p className="quote-phone">
            Prefer to talk? Call us directly on +254 716 311 139
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;