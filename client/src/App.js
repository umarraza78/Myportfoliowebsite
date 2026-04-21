import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa6';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import ParticlesBackground from './components/ParticlesBackground';
import ProjectDetail from './components/ProjectDetail';
import './styles.css';

function Home() {
  useEffect(() => {
    // ── Scroll Progress Bar ──────────────────────────────────────
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${(scrollTop / docHeight) * 100}%`;
    };

    // ── Scroll Reveal ────────────────────────────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    // Tag all headings and major elements
    document.querySelectorAll(
      '.heading, .portfolio-box, .pillar, .skills-group, .about-content > p, .reveal'
    ).forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 3 === 0) el.classList.add('reveal-left');
      else if (i % 3 === 1) el.classList.add('reveal');
      else el.classList.add('reveal-right');
      el.classList.add(`delay-${(i % 6) + 1}`);
      revealObserver.observe(el);
    });

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      revealObserver.disconnect();
      bar.remove();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <div className="footer-iconTop">
        <a href="#home"><FaArrowUp /></a>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;