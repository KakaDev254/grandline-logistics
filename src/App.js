import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <CtaBanner />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 <span>Grandline Logistics Limited</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;