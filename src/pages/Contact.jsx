import React, { useState } from 'react';
import './Contact.css';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const SuccessPopup = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={e => e.stopPropagation()}>
        <div className="icon-circle">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" stroke="#4BB543" strokeWidth="4" fill="#E9F9EE" />
            <path d="M16 24L22 30L32 18" stroke="#4BB543" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="popup-message">Message sent successfully!</div>
        <div className="popup-submessage">Thank you for contacting us. We'll get back to you soon!</div>
        <button className="popup-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const serviceId = import.meta.env?.VITE_EMAILJS_SERVICE_ID || 'xcludea_software_company';
    const templateId = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || 'template_ri23cni';
    const publicKey = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || '-qkSx1e1dpHp0xeVR';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          country: formData.country,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      setShowPopup(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        message: ''
      });
      setTimeout(() => setShowPopup(false), 3000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="contact-page">
      <h1>CONTACT <span className="highlight">US</span></h1>
      <p className="contact-description">We'd love to hear from you! Get in touch with us for any inquiries or support.</p>

      <SuccessPopup show={showPopup} onClose={handleClosePopup} />

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {submitStatus === 'error' && (
          <div className="error-message">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">*First Name</label>
              <input 
                type="text" 
                id="firstName" 
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">*Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name" 
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">*Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input 
                type="text" 
                id="company" 
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name" 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">*Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">*Country</label>
              <input 
                type="text" 
                id="country" 
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter your country" 
                required 
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can we help you" 
              rows="5" 
              required
            />
          </div>
          <br />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <br />


      {/* Footer Section (Full Width) */}
      <section className="footer-section full-width">
        <Footer />
      </section>
    </div>
    
  );
};

export default Contact;