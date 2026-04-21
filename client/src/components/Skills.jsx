import React from 'react';
import {
  FaPython, FaJava, FaTerminal, FaDatabase, FaLeaf,
  FaDocker, FaAws, FaGitAlt, FaLinux,
  FaBrain, FaEye, FaFire, FaShieldHalved, FaTableCells,
  FaCloud, FaGear, FaRotate, FaCode, FaPaperPlane, FaDharmachakra
} from 'react-icons/fa6';
import { FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">Technical <span className="text-accent">Expertise</span></h2>

      <div className="skills-container">

        {/* Section 1: Development */}
        <div className="skills-group">
          <h3>Development</h3>
          <div className="skills-list">
            <div className="skill-item"><FaCode /><span>C++</span></div>
            <div className="skill-item"><FaPython /><span>Python</span></div>
            <div className="skill-item"><FaJava /><span>Java</span></div>
            <div className="skill-item"><FaTerminal /><span>C# / .NET</span></div>
            <div className="skill-item"><FaLeaf /><span>MongoDB</span></div>
            <div className="skill-item"><FaDatabase /><span>SQL</span></div>
            <div className="skill-item"><FaNodeJs /><span>MERN Stack</span></div>
            <div className="skill-item"><FaPaperPlane /><span>Postman</span></div>
          </div>
        </div>

        {/* Section 2: DevOps & Cloud */}
        <div className="skills-group">
          <h3>DevOps & Cloud</h3>
          <div className="skills-list">
            <div className="skill-item"><FaAws /><span>AWS</span></div>
            <div className="skill-item"><FaDocker /><span>Docker</span></div>
            <div className="skill-item"><FaDharmachakra /><span>Kubernetes</span></div>
            <div className="skill-item"><FaCloud /><span>Terraform</span></div>
            <div className="skill-item"><FaGear /><span>Jenkins</span></div>
            <div className="skill-item"><FaRotate /><span>CI/CD</span></div>
            <div className="skill-item"><FaGitAlt /><span>Git/GitHub</span></div>
            <div className="skill-item"><FaLinux /><span>Linux/Bash</span></div>
          </div>
        </div>

        {/* Section 3: AI & Security */}
        <div className="skills-group">
          <h3>AI & Security</h3>
          <div className="skills-list">
            <div className="skill-item"><FaBrain /><span>YOLOv8/10</span></div>
            <div className="skill-item"><FaEye /><span>OpenCV</span></div>
            <div className="skill-item"><FaCode /><span>MediaPipe</span></div>
            <div className="skill-item"><FaFire /><span>PyTorch</span></div>
            <div className="skill-item"><FaTableCells /><span>NumPy/Pandas</span></div>
            <div className="skill-item"><FaShieldHalved /><span>SonarQube</span></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;