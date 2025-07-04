import React from 'react';
import './home.css';
import { FaArrowRight, FaMouse, FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiFigma, SiNextdotjs, SiMysql } from 'react-icons/si';
import xcludeaLogo from '../assets/images/xcludea-logo.png';
import bgX from '../assets/images/image.png';
import ChatBot from '../components/ChatBot';
import whoWeAreImg from '../assets/images/Who We Are.jpg';
import Footer from '../components/Footer';
import whatWeDoImg from '../assets/images/What We Do.jpg';
import ContactSection from '../components/ContactSection';


const techStack = [
  { icon: <SiFigma />, label: 'Figma' },
  { icon: <FaJava />, label: 'Java' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <SiNextdotjs />, label: 'Next.js' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <FaHtml5 />, label: 'HTML' },
  { icon: <FaCss3 />, label: 'CSS' },
];

const Home = () => (
  <>
    <div className="home-hero">
      <div className="home-logo">
        <img src={xcludeaLogo} alt="Xcludea Logo" />
      </div>
      <div className="home-bg-x">
        <img src={bgX} alt="Background X" />
      </div>
      <div className="home-content">
        <h1 className="home-title">
          <span className="home-title-accent">Unlock The Future</span><br />
          <span className="home-title-light">With Us</span>
        </h1>
        <p className="home-subtitle">add a lorem text for this description</p>
        <button className="home-cta-btn">
          Get Started <FaArrowRight />
        </button>
        <div className="home-mouse-icon"><FaMouse /></div>
      </div>
      <ChatBot />
    </div>

    {/* Tech Stack Section */}
    <section className="tech-stack-section">
      <h2 className="tech-stack-title">
        <span className="tech-stack-title-black">OUR</span> <span className="tech-stack-title-accent">Tech Stack</span>
      </h2>
      <div className="tech-stack-circle">
        <div className="tech-stack-center">Tech Stack</div>
        <div className="tech-stack-orbit">
          {techStack.map((t, i) => (
            <div className={`tech-stack-icon tech-stack-icon-${i}`} key={i} title={t.label}>
              {t.icon}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Info Section */}
    <section className="info-section">
      <div className="info-card">
        <div className="info-text">
          <h2 className="info-title">Who We Are</h2>
          <p className="info-desc">
            Xcludea is a Sri Lankan-based software startup that builds smart, reliable, and modern digital solutions for businesses. We help clients around the world by creating websites, mobile apps, and custom software built to solve real problems and grow their business.
          </p>
          <a href="/about" className="info-link">Read More &rarr;</a>
        </div>
        <div className="info-image">
          <img src={whoWeAreImg} alt="Team working in an office" />
        </div>
      </div>
      <div className="info-card info-card-reverse">
        <div className="info-text">
          <h2 className="info-title">What We Do</h2>
          <p className="info-desc">
            At Xcludea, we design and develop custom software solutions to help businesses grow and succeed. From websites and mobile apps to complete business systems, we build modern, scalable, and user-friendly products tailored to your needs.
          </p>
          <a href="/services" className="info-link">Read More &rarr;</a>
        </div>
        <div className="info-image">
          <img src={whatWeDoImg} alt="Developer working on a computer with code overlay" />
        </div>
      </div>
    </section>
            {/* Contact Section (Full Width) */}
      <section className="contact-section full-width">
        <ContactSection />
      </section>

      <Footer />
    
  </>
);

export default Home;
