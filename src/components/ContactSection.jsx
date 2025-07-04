import React from 'react';
import './ContactSection.css';
import { FaUser } from 'react-icons/fa'; // Import a user icon for the button

const ContactSection = () => {
  return (
    <div className="contact-content">
      <h2>
        Ready To <span className="highlight">Contact Us</span>?
      </h2>
      <p>
        Our expert teams of consultants, architects, and solutions engineers are ready to help with your bold ambitions, provide you with more information on our services, and answer your technical questions.
      </p>
      <a href="#" className="contact-button">
        Talk to us <FaUser />
      </a>
    </div>
  );
};

export default ContactSection;