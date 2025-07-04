import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {
  FaHome, FaUsers, FaTools,
  FaClipboardCheck, FaGraduationCap, FaServer ,FaEnvelope
} from 'react-icons/fa';

// Navigation item config
const navItems = [
  { path: '/', icon: <FaHome />, label: 'Home' },
  { path: '/about', icon: <FaUsers />, label: 'About' },
  { path: '/services', icon: <FaTools />, label: 'Services' },
  { path: '/projects', icon: <FaClipboardCheck />, label: 'Projects' },
  { path: '/careers', icon: <FaGraduationCap />, label: 'Careers' },
  { path: '/hosting', icon: <FaServer />, label: 'Testimonial' },
  { path: '/contact', icon: <FaEnvelope />, label: 'Contact Us' },
];

function Navbar() {
  // State to track scroll position
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 1) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Add scroll event listener on mount, remove on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `nav-icon-wrapper ${isActive ? 'active' : ''}`
          }
        >
          <span className="nav-text">{item.label}</span>
          <div className="icon-bubble">{item.icon}</div>
        </NavLink>
      ))}
    </div>
  );
}

// Note: Add this import at the top if not already present
import { useEffect } from 'react';

export default Navbar;