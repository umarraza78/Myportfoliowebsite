import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
import { FaBrain, FaDocker, FaAws } from 'react-icons/fa6';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">About <span className="text-accent">Me</span></h2>
        <h3>Software Engineer · Full-Stack · Cloud · AI</h3>
        <p>
          I'm a <strong>Software Engineer</strong> with a strong passion for building end-to-end technology solutions that scale.
          My core focus spans four domains:
        </p>

        <div className="about-pillars">
          <div className="pillar">
            <FaNodeJs className="pillar-icon" />
            <div>
              <h4>MERN Stack Development</h4>
              <p>Building full-stack web applications with MongoDB, Express, React, and Node.js —
                from REST APIs to dynamic, responsive front-ends.</p>
            </div>
          </div>

          <div className="pillar">
            <FaBrain className="pillar-icon" />
            <div>
              <h4>AI & Computer Vision</h4>
              <p>Engineering intelligent systems using YOLOv8/10, OpenCV, PyTorch, and MediaPipe —
                from real-time object detection to automated monitoring pipelines.</p>
            </div>
          </div>

          <div className="pillar">
            <FaDocker className="pillar-icon" />
            <div>
              <h4>DevOps & CI/CD</h4>
              <p>Automating delivery pipelines with Docker, Kubernetes, Jenkins, and GitHub Actions,
                and enforcing code quality through SonarQube integration.</p>
            </div>
          </div>

          <div className="pillar">
            <FaAws className="pillar-icon" />
            <div>
              <h4>Cloud Infrastructure (AWS)</h4>
              <p>Designing and provisioning scalable, secure cloud architectures using AWS services
                and Terraform (IaC) — VPCs, EC2 Auto Scaling, S3, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;