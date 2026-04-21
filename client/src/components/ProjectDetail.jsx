import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-detail-container">
        <h2>Project not found.</h2>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-nav">
        <Link to="/" className="back-btn"><FaArrowLeft /> Back</Link>
      </div>
      
      <div className="project-detail-content">
        <h1 className="project-title">{project.title} <span className="text-accent">Overview</span></h1>
        
        <div className="project-media">
          {project.video ? (
            <video 
              src={project.video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="project-video"
            />
          ) : (
            <img src={project.image} alt={project.title} className="project-img-large" />
          )}
        </div>

        <div className="project-info">
          <div className="project-description">
            <h3>About This Project</h3>
            {project.fullDesc.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn project-link-btn">
                View Repository <FaExternalLinkAlt style={{marginLeft: '8px'}} />
              </a>
            )}
          </div>
          
          <div className="project-tech">
            <h3>Tech Stack</h3>
            <div className="tech-tags">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
