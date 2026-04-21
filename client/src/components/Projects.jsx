import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Latest <span className="text-accent">Projects</span></h2>

      <div className="portfolio-container">
        {projectsData.map((project) => (
          <div className="portfolio-box" key={project.id}>

            {/* LEFT: Content Panel */}
            <div className="portfolio-box-content">
              <h4>{project.title}</h4>
              <p>{project.shortDesc}</p>

              <div className="portfolio-box-tags">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="portfolio-box-tag">{tech}</span>
                ))}
              </div>

              <div className="portfolio-box-actions">
                <Link to={`/project/${project.id}`} className="portfolio-box-link">
                  View Details <FaExternalLinkAlt size={12} />
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-box-link portfolio-box-link--outline"
                  >
                    GitHub <FaGithub size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT: Image Panel — always show image, never autoplay video */}
            <div className="portfolio-box-image">
              <img src={project.image} alt={project.title} />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;