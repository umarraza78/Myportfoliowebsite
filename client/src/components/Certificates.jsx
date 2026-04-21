import React from 'react';
import { FaExpand } from 'react-icons/fa';

const certificatesData = [
  { id: 1, title: 'Professional Certification 1', image: '/c1.png' },
  { id: 2, title: 'Professional Certification 2', image: '/c2.png' },
  { id: 3, title: 'Professional Certification 3', image: '/c3.png' },
  { id: 4, title: 'Professional Certification 4', image: '/c4.png' },
  { id: 5, title: 'Professional Certification 5', image: '/c5.png' },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h2 className="heading">My <span className="text-accent">Certificates</span></h2>

      <div className="cert-grid">
        {certificatesData.map((cert) => (
          <a
            key={cert.id}
            className="cert-card"
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to view full size"
          >
            <img src={cert.image} alt={cert.title} />
            <div className="cert-overlay">
              <FaExpand size={22} />
              <span>View Full Size</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
