import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, It's Me</h3>
        <h1>I'm <span className="text-accent">Muhammad Umar Raza</span></h1>
        <h2 className="animated-text">
          And I'm a <span className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  'Full-Stack MERN Developer 💻',
                  'Cloud Engineer ☁️',
                  'DevOps Enthusiast 🚀',
                  'AI & Computer Vision Specialist 🧠'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </h2>

        <p>
          A passionate Software Engineer specializing in the <strong>MERN Stack</strong>,{' '}
          <strong>Cloud & DevOps</strong> (AWS, Docker, Terraform), and{' '}
          <strong>AI & Computer Vision</strong>. I build scalable full-stack applications,
          deploy production-grade cloud infrastructure, and engineer intelligent systems
          that solve real problems.
        </p>

        <div className="home-sci">
          <a href="https://github.com/umarraza78" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mumarraza789/" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:umarraza.se@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>

        {/* CV Buttons */}
        <div className="hero-cv-btns">
          <a
            href="/Finalassociate.pdf"
            download="Muhammad_Umar_Raza_CV.pdf"
            className="hero-cv-btn hero-cv-btn--download"
          >
            ⬇ Download CV
          </a>
          <a
            href="/Finalassociate.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-cv-btn hero-cv-btn--view"
          >
            👁 View CV
          </a>
        </div>
      </div>

      <div className="home-imgHover">
        <img src="/profile.png" alt="Muhammad Umar Raza" />
      </div>
    </section>
  );
};

export default Hero;