import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import { FaTasks, FaClock, FaLock, FaUsers } from 'react-icons/fa';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import developmentImg from '../assets/images/development.jpg';
import uiuxImg from '../assets/images/uiux.jpg';
import careersImg from '../assets/images/careers.png';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('development');

  const categories = [
    { 
      id: 'development', 
      label: ' Development', 
      image: developmentImg, 
      content: [
        'Software Development, Boosted by AI',
        'Web Development',
        'Software Development',
      ] 
    },
    { 
      id: 'uiux', 
      label: 'UI/UX Design', 
      image: uiuxImg, 
      content: [
        'User Interface Design',
        'User Experience Optimization',
        'Prototyping & Wireframing',
      ] 
    },
    { 
      id: 'other', 
      label: 'Other', 
      image: careersImg, 
      content: [
        'Consulting Services',
        'Maintenance & Support',
        'Custom Solutions',
      ] 
    },
  ];

  const selected = categories.find(cat => cat.id === selectedCategory);

  // Animation refs and states
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const descRef = useRef(null);
  const [descVisible, setDescVisible] = useState(false);
  const categoryRef = useRef(null);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const mainServiceRef = useRef(null);
  const [mainServiceVisible, setMainServiceVisible] = useState(false);
  const serviceCardsRef = useRef([]);
  const [serviceCardsVisible, setServiceCardsVisible] = useState([false, false, false, false]);

  // Helper for observing
  function useFadeInOnView(ref, setVisible, threshold = 0.3) {
    useEffect(() => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold }
      );
      if (ref.current) observer.observe(ref.current);
      return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [ref, setVisible, threshold]);
  }

  useFadeInOnView(headerRef, setHeaderVisible);
  useFadeInOnView(descRef, setDescVisible);
  useFadeInOnView(categoryRef, setCategoryVisible);
  useFadeInOnView(mainServiceRef, setMainServiceVisible);

  // For service cards
  useEffect(() => {
    serviceCardsRef.current = serviceCardsRef.current.slice(0, 4);
    const observers = serviceCardsRef.current.map((ref, idx) => {
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setServiceCardsVisible(prev => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        },
        { threshold: 0.3 }
      );
    });
    serviceCardsRef.current.forEach((ref, idx) => {
      if (ref) observers[idx].observe(ref);
    });
    return () => {
      serviceCardsRef.current.forEach((ref, idx) => {
        if (ref) observers[idx].unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="services-page">
      <div className="services-content">
        {/* Header Section */}
        <section className="header-section">
          <h1
            className={`fade-in-up${headerVisible ? ' visible' : ''}`}
            ref={headerRef}
          >OUR<br /><span className="highlight">SERVICES</span></h1>
          <p
            className={`services-description fade-in-up${descVisible ? ' visible' : ''}`}
            ref={descRef}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Category Selection Section */}
        <section className="category-selection-section">
          <div
            className={`category-container fade-in-up${categoryVisible ? ' visible' : ''}`}
            ref={categoryRef}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-button ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Main Service Content Section */}
        <section className="main-service-section">
          <div
            className={`service-content fade-in-up${mainServiceVisible ? ' visible' : ''}`}
            ref={mainServiceRef}
          >
            <div className="service-image-container">
              <img src={selected.image} alt={`${selected.label} Image`} className="service-image" />
            </div>
            <div className="service-details">
              <h2>{selected.label}</h2>
              <ul>
                {selected.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="additional-services-section">
          <div className="additional-top">
            <p className="fade-in-up visible">
              Engineers are ready to help with your bold ambitions, provide you with more information on our services, and answer your technical questions.
            </p>
          </div>
          <div className="service-cards">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`service-card service-card-animate-${idx % 2 === 0 ? 'left' : 'right'}${serviceCardsVisible[idx] ? ' visible' : ''}`}
                ref={el => serviceCardsRef.current[idx] = el}
              >
                <div className="card-icon">
                  {idx === 0 ? <FaTasks /> : idx === 1 ? <FaClock /> : idx === 2 ? <FaLock /> : <FaUsers />}
                </div>
                <h3>{idx === 0 ? 'Project Management' : idx === 1 ? 'Time Management' : idx === 2 ? 'Security At Heart' : 'Unique Culture'}</h3>
                <p>We believe in thinking differently. Innovation begins with imagination, and we encourage bold, new ideas.</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Section (Full Width) */}
      <section className="contact-section full-width-100px">
        <ContactSection />
      </section>

      {/* Footer Section (Full Width) */}
      <section className="footer-section full-width-100px">
        <Footer />
      </section>
    </div>
  );
};

export default Services;