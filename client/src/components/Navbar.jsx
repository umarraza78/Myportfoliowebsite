import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      let currentActive = 'home'; // fallback

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = window.scrollY;
          const offset = element.offsetTop - 200; // Account for navbar height
          const height = element.offsetHeight;

          if (top >= offset && top < offset + height) {
            currentActive = section;
          }
        }
      });

      setActiveLink(currentActive);
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    // Run once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="/#home" className="logo">Umar.</a>
      <nav className="navbar">
        <a href="/#home" className={activeLink === 'home' ? 'active' : ''}>Home</a>
        <a href="/#about" className={activeLink === 'about' ? 'active' : ''}>About</a>
        <a href="/#skills" className={activeLink === 'skills' ? 'active' : ''}>Skills</a>
        <a href="/#projects" className={activeLink === 'projects' ? 'active' : ''}>Portfolio</a>
        <a href="/#certificates" className={activeLink === 'certificates' ? 'active' : ''}>Certificates</a>
        <a href="/#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a>
        <a href="/Finalassociate.pdf" target="_blank" rel="noreferrer" className="navbar-cv-btn">View CV</a>
      </nav>
    </header>
  );
};

export default Navbar;