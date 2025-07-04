import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS here
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/about';
import Services from './pages/Services';
import Contact from './pages/Contact'; // Import the new Contact component
import Careers from './pages/Careers'; // Import the Careers component

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> {/* New route for Contact Us */}
          <Route path="/careers" element={<Careers />} /> {/* New route for Careers */}
        </Routes>
      </div>
    </div>
  );
}

export default App;