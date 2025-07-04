import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import { FaLinkedin, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
// Import images using proper import paths
import rumalImg from '../assets/images/rumal.jpg';
import sandipaImg from '../assets/images/sandipa.jpg';
import logoImg from '../assets/images/image.png'; // Fixed import path
import missionVisionImg from '../assets/images/mission.png'; // Add this import or use correct path

const About = () => {
  const founders = [
    {
      name: 'Rumal Medagedara',
      title: 'Full Stack Developer',
      image: rumalImg,
      social: [
        { href: 'mailto:rumal@example.com', icon: <FaEnvelope />, label: 'Email Rumal' },
        { href: 'https://linkedin.com/in/rumal', icon: <FaLinkedin />, label: "Rumal's LinkedIn" },
        { href: 'https://facebook.com/rumal', icon: <FaFacebookF />, label: "Rumal's Facebook" },
        { href: 'https://instagram.com/rumal', icon: <FaInstagram />, label: "Rumal's Instagram" },
      ],
    },
    {
      name: 'Sandipa Senadhira',
      title: 'Full Stack Developer',
      image: sandipaImg,
      social: [
        { href: 'mailto:sandipa@example.com', icon: <FaEnvelope />, label: 'Email Sandipa' },
        { href: 'https://linkedin.com/in/sandipa', icon: <FaLinkedin />, label: "Sandipa's LinkedIn" },
        { href: 'https://facebook.com/sandipa', icon: <FaFacebookF />, label: "Sandipa's Facebook" },
        { href: 'https://instagram.com/sandipa', icon: <FaInstagram />, label: "Sandipa's Instagram" },
      ],
    },
  ];

  // Stats for animation
  const stats = [
    { end: 1, label: 'Years Of\nExperience', suffix: '+', duration: 2000 },
    { end: 5, label: 'Projects', suffix: '+', duration: 2000 },
    { end: 10, label: 'Employees', suffix: '+', duration: 2000 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const foundersSectionRef = useRef(null);
  const [foundersVisible, setFoundersVisible] = useState(false);

  // Purpose section animation
  const purposeRef = useRef(null);
  const [purposeVisible, setPurposeVisible] = useState(false);

  // Animation refs and states for text blocks
  const heroTitleRef = useRef(null);
  const [heroTitleVisible, setHeroTitleVisible] = useState(false);
  const missionTitleRef = useRef(null);
  const [missionTitleVisible, setMissionTitleVisible] = useState(false);
  const missionDescRef = useRef(null);
  const [missionDescVisible, setMissionDescVisible] = useState(false);
  const visionTitleRef = useRef(null);
  const [visionTitleVisible, setVisionTitleVisible] = useState(false);
  const visionDescRef = useRef(null);
  const [visionDescVisible, setVisionDescVisible] = useState(false);
  const purposeTitleRef = useRef(null);
  const [purposeTitleVisible, setPurposeTitleVisible] = useState(false);
  const purposeSubtitleRef = useRef(null);
  const [purposeSubtitleVisible, setPurposeSubtitleVisible] = useState(false);
  const foundersTitleRef = useRef(null);
  const [foundersTitleVisible, setFoundersTitleVisible] = useState(false);
  const contactTitleRef = useRef(null);
  const [contactTitleVisible, setContactTitleVisible] = useState(false);
  const contactDescRef = useRef(null);
  const [contactDescVisible, setContactDescVisible] = useState(false);

  // New refs and states for mission and vision cards
  const missionCardRef = useRef(null);
  const [missionCardVisible, setMissionCardVisible] = useState(false);
  const visionCardRef = useRef(null);
  const [visionCardVisible, setVisionCardVisible] = useState(false);
  const missionVisionImgRef = useRef(null);
  const [missionVisionImgVisible, setMissionVisionImgVisible] = useState(false);

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

  useFadeInOnView(heroTitleRef, setHeroTitleVisible);
  useFadeInOnView(missionTitleRef, setMissionTitleVisible);
  useFadeInOnView(missionDescRef, setMissionDescVisible);
  useFadeInOnView(visionTitleRef, setVisionTitleVisible);
  useFadeInOnView(visionDescRef, setVisionDescVisible);
  useFadeInOnView(purposeTitleRef, setPurposeTitleVisible);
  useFadeInOnView(purposeSubtitleRef, setPurposeSubtitleVisible);
  useFadeInOnView(foundersTitleRef, setFoundersTitleVisible);
  useFadeInOnView(contactTitleRef, setContactTitleVisible);
  useFadeInOnView(contactDescRef, setContactDescVisible);

  useFadeInOnView(missionCardRef, setMissionCardVisible);
  useFadeInOnView(visionCardRef, setVisionCardVisible);
  useFadeInOnView(missionVisionImgRef, setMissionVisionImgVisible);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    stats.forEach((stat, i) => {
      let start = 0;
      const increment = stat.end / (stat.duration / 16);
      function animate() {
        start += increment;
        if (start < stat.end) {
          setCounts(prev => {
            const updated = [...prev];
            updated[i] = Math.floor(start);
            return updated;
          });
          requestAnimationFrame(animate);
        } else {
          setCounts(prev => {
            const updated = [...prev];
            updated[i] = stat.end;
            return updated;
          });
        }
      }
      animate();
    });
  }, [hasAnimated]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFoundersVisible(true);
        }
      },
      { threshold: 0.2 } // Reduced threshold for better visibility trigger
    );
    if (foundersSectionRef.current) {
      observer.observe(foundersSectionRef.current);
    }
    return () => {
      if (foundersSectionRef.current) observer.unobserve(foundersSectionRef.current);
    };
  }, []);

  useEffect(() => {
    // Smooth scroll for the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPurposeVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (purposeRef.current) {
      observer.observe(purposeRef.current);
    }
    return () => {
      if (purposeRef.current) observer.unobserve(purposeRef.current);
    };
  }, []);

  return (
    <div className="about-container">
      <h1
        className={`hero-title fade-in-up${heroTitleVisible ? ' visible' : ''}`}
        ref={heroTitleRef}
      >
        ABOUT <span className="highlight">XCLUDEA</span>
      </h1>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-left">
              <img src={logoImg} alt="XCLUDEA Logo" className="x-logo" />
            </div>
            <div className="hero-right">
              <p className={`hero-description fade-in-up${heroTitleVisible ? ' visible' : ''}`}>
                About Xcludea Technologies
At Xcludea Technologies, we are passionate about building innovative digital solutions that empower businesses to grow and succeed. As a forward-thinking software engineering startup, we specialize in Software Development, Web Development, Mobile App Development, UI/UX Design, and Graphic Design. Our mission is to deliver high-quality, customized technology solutions that meet the unique needs of each client. While we currently offer a range of services, we are also working toward launching our own groundbreaking product in the near future — a step that will take Xcludea Technologies to the next level of innovation. With creativity, technical expertise, and a dedication to excellence, we’re here to turn your ideas into impactful digital experiences..
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section-wrapper" ref={statsRef}>
        <div className="stats-section">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">
                {counts[i]}{stat.suffix}
                <div className="stat-label">
                  {stat.label.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-content">
            <div
              className={`mission-side slide-in-mission${missionCardVisible ? ' visible' : ''}`}
              ref={missionCardRef}
            >
              <h2
                className={`section-title fade-in-up${missionTitleVisible ? ' visible' : ''}`}
                ref={missionTitleRef}
              >
                Our <span className="highlight">Mission</span>
              </h2>
              <p
                className={`section-description fade-in-up${missionDescVisible ? ' visible' : ''}`}
                ref={missionDescRef}
              >
                Our mission is to deliver high-quality, innovative, and customized digital solutions that help businesses thrive in a fast-paced digital world. We focus on software, web, and mobile development, along with UI/UX and graphic design, to turn ideas into impactful and user-friendly digital experiences.
              </p>
            </div>
            <div
              className={`mission-vision-graphic slide-up-img${missionVisionImgVisible ? ' visible' : ''}`}
              ref={missionVisionImgRef}
            >
              <img src={missionVisionImg} alt="Archer aiming at target symbolizing mission and vision" />
            </div>
            <div
              className={`vision-side slide-in-vision${visionCardVisible ? ' visible' : ''}`}
              ref={visionCardRef}
            >
              <h2
                className={`section-title fade-in-up${visionTitleVisible ? ' visible' : ''}`}
                ref={visionTitleRef}
              >
                Our <span className="highlight">Vision</span>
              </h2>
              <p
                className={`section-description fade-in-up${visionDescVisible ? ' visible' : ''}`}
                ref={visionDescRef}
              >
                Our vision is to become a globally recognized technology company known for creativity, reliability, and excellence. We aim to lead in digital innovation and launch our own product that solves real-world problems, making technology more accessible and valuable for people and businesses everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Purpose Section */}
      <section className="purpose-section" ref={purposeRef}>
        <div className="container">
          <h2
            className={`purpose-title fade-in-up${purposeTitleVisible ? ' visible' : ''}`}
            ref={purposeTitleRef}
          >
            Built on <span className="highlight">Purpose</span>
          </h2>
          <p
            className={`purpose-subtitle fade-in-up${purposeSubtitleVisible ? ' visible' : ''}`}
            ref={purposeSubtitleRef}
          >
            Our purpose is to create meaningful digital solutions that solve real problems, enhance user experiences, and support business growth. We are driven by innovation, creativity, and a commitment to delivering value through technology.
          </p>
          <div className="purpose-cards">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`purpose-card purpose-animate-${idx === 0 ? 'left' : idx === 2 ? 'right' : 'middle'}${purposeVisible ? ' visible' : ''}`}
              >
                <div className="card-icon">{idx === 0 ? '💡' : idx === 1 ? '✅' : '🎯'}</div>
                <h3 className="card-title">{idx === 0 ? 'Creativity' : idx === 1 ? 'Trust' : 'Adaptability'}</h3>
                <p className="card-description">
                  {idx === 0
                    ? 'We believe in thinking differently. Innovation begins with imagination, and we encourage bold, new ideas.'
                    : idx === 1
                    ? 'Trust is the foundation of every relationship. We build it through honesty, transparency, and reliability.'
                    : 'We evolve with change. In a fast-moving tech world, we stay flexible and ready to pivot when needed.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section" ref={foundersSectionRef}>
        <div className="container">
          <h2
            className={`founders-title fade-in-up${foundersTitleVisible ? ' visible' : ''}`}
            ref={foundersTitleRef}
          >
            Meet Our <span className="highlight">Founders</span>
          </h2>
          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div
                className={`founder-card slide-in-${index % 2 === 0 ? 'left' : 'right'}${foundersVisible ? ' visible' : ''}`}
                key={index}
              >
                <div className="founder-image">
                  <img 
                    src={founder.image} 
                    alt={`Portrait of ${founder.name}`} 
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image for ${founder.name}:`, e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-title">{founder.title}</p>
                <div className="social-links">
                  {founder.social.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      className="social-link"
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2
              className={`contact-title fade-in-up${contactTitleVisible ? ' visible' : ''}`}
              ref={contactTitleRef}
            >
              Ready To <span className="highlight">Contact Us?</span>
            </h2>
            <p
              className={`contact-description fade-in-up${contactDescVisible ? ' visible' : ''}`}
              ref={contactDescRef}
            >
              Our expert teams of consultants, architects, and solutions engineers are ready to help with
              your bold ambitions, provide you with more information, our services, and answer your
              technical questions.
            </p>
            <a href="#" className="contact-button">Talk to us</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;