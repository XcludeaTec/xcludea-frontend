import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import xcludeaLogo from '../assets/images/xcludea-logo.png'; // Update this path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-container">
            <div className="footer-logo-icon">
              <img 
                src={xcludeaLogo} 
                alt="Xcludea Logo" 
                onError={(e) => {
                  // Fallback to 'X' if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = 'X';
                  e.target.parentNode.style.fontSize = '1.5rem';
                  e.target.parentNode.style.fontWeight = 'bold';
                }}
              />
            </div>
          </div>
          <div className='footer-text'>
          <div className='footer-description'>
          <p>Building reliable software solutions from Sri Lanka to the world. Let's create something amazing.</p>
          </div>
          <div className="footer-contact">
            <p><FaPhone /> +94 71 0194151</p>
            <p><FaEnvelope /> xcludea.team@gmail.com</p>
          </div>
          </div>
        </div>
        <div className="footer-nav">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="/services#web-development">Web Development</a></li>
              <li><a href="/services#software-development">Software Development</a></li>
              <li><a href="/services#ui-ux-design">UI/UX Design</a></li>
              <li><a href="/services#mobile-app-development">Mobile App Development</a></li>
              <li><a href="/services#3d-modeling">3D Modeling</a></li>
              <li><a href="/services#graphic-designs">Graphic Designs</a></li>
              <li><a href="/services#ai-chatbots">AI ChatBots</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Our Products</h4>
            <ul>
              <li><a href="#">Product 1</a></li>
              <li><a href="#">Product 2</a></li>
              <li><a href="#">Product 3</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
        <p>© 2025 Xcludea Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;