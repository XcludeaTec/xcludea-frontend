import React, { useRef, useEffect, useState } from 'react';
import './careers.css';
import { FaMouse, FaLaptop, FaCalendarAlt, FaHandHoldingMedical, FaUsers, FaClock, FaUser } from 'react-icons/fa';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const features = [
  {
    title: 'Cutting-Edge Technology',
    desc: 'Work with the latest tools and technologies to stay ahead in the industry.'
  },
  {
    title: 'Supportive Team Culture',
    desc: 'Collaboration, mentorship, and respect drive our everyday work.'
  },
  {
    title: 'Global Exposure',
    desc: 'Take part in projects that reach international clients and markets.'
  },
  {
    title: 'Continuous Learning',
    desc: 'Grow through workshops, training, and challenging real-world tasks.'
  },
  {
    title: 'Ownership & Impact',
    desc: 'Make meaningful contributions and see your work make a difference.'
  },
];

const benefits = [
  {
    icon: <FaLaptop />, title: 'Flexible Work', desc: 'Remote',
  },
  {
    icon: <FaCalendarAlt />, title: 'Time Off', desc: 'Vacation and personal leave',
  },
  {
    icon: <FaHandHoldingMedical />, title: 'Wellness Support', desc: 'Mental Health Programs',
  },
  {
    icon: <FaUsers />, title: 'Friendly', desc: 'Work Friendly',
  },
];

const Careers = () => {
  const applySectionRef = useRef(null);
  const [animatedLetters, setAnimatedLetters] = useState(false);
  const [animatedBenefits, setAnimatedBenefits] = useState(false);
  const [backgroundVisible, setBackgroundVisible] = useState(false);

  const handleOpenPositionsClick = () => {
    if (applySectionRef.current) {
      applySectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for letter animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedLetters(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const titleElement = document.querySelector('.careers-title');
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for benefits animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedBenefits(true);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const benefitsSection = document.querySelector('.benefits-section');
    if (benefitsSection) {
      observer.observe(benefitsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for background image
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundVisible(true);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const whySection = document.querySelector('.careers-why');
    if (whySection) {
      observer.observe(whySection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="careers-container">
      <section className="careers-hero">
        <h1 className={`careers-title ${animatedLetters ? 'animated' : ''}`}>
          <span className="accent letter">C</span>
          <span className="black letter">a</span>
          <span className="black letter">r</span>
          <span className="black letter">e</span>
          <span className="black letter">e</span>
          <span className="black letter">r</span>
          <span className="black letter">s</span>
        </h1>
        <p className="careers-subtitle">
          Meet the talented and passionate team who work tirelessly behind the scenes to bring our vision to life, ensuring excellence in everything we do.
        </p>
        <button className="open-positions-btn" onClick={handleOpenPositionsClick}>Open Positions</button>
        <div className="mouse-icon-wrapper"><FaMouse className="mouse-icon" size={28} /></div>
      </section>

      <section className="careers-why">
        <h2 className="why-title">Why Join <span className="accent">Xcludea</span></h2>
        <p className="why-desc">
          Join a team that blends innovation with purpose. At Xcludea, you'll work on real-world projects using cutting-edge AI and tech. We value creativity, respect, and ownership, all within a supportive, growth-focused culture. From Sri Lanka to the world, be part of something bigger.
        </p>
        <div className={`features-bg-illustration ${backgroundVisible ? 'visible' : ''}`}>
          <img src="src/assets/images/careers.png" alt="Background Illustration" />
        </div>
        <div className="features-list">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-number">{i + 1}</div>
              <div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-title">Benefits</h2>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div 
              className={`benefit-card ${animatedBenefits ? 'animated' : ''}`} 
              key={i}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="benefit-icon">{b.icon}</div>
              <div className="benefit-title">{b.title}</div>
              <div className="benefit-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="apply-section" ref={applySectionRef}>
        <h2 className="apply-title">
          Apply <span className="accent">Now</span>
        </h2>
        <div className="apply-subheading">All Openings</div>
        <h2>No Openings</h2>
      </section>

      {/* Contact Section (Full Width) */}
      <section className="contact-section full-width">
        <ContactSection />
      </section>

      {/* Footer Section (Full Width) */}
      <section className="footer-section full-width">
        <Footer />
      </section>
    </div>
  );
};

export default Careers;
