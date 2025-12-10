import React from 'react';
import './InResidence.css';

const InResidence = () => {
  // Placeholder data - replace with your actual project details
  const projects = [
    { id: 1, title: "Repulse Bay Residence", meta: "Residential | 2024", img: "/images/repulse-bay-residence.jpg" },
    { id: 2, title: "Kent Avenue Penthouse", meta: "Residential | 2024", img: "/images/kent-avenue-penthouse.jpg" },
    { id: 3, title: "Fjord Boat House", meta: "Residential | 2020", img: "/images/fjord-boat-house.jpg" },
    { id: 4, title: "Archipelago House", meta: "Residential | 2020", img: "/images/archipelago-house.jpg" },
    { id: 5, title: "Pavilion House", meta: "Residential | 2021", img: "/images/pavilion-house.jpg" },
  ];

  return (
    <section className="in-residence-section">

      {/* 1. SECTION TITLE */}
      <div className="residence-header">
        <h2>Services</h2>
      </div>

      {/* 2. FLOATING SIDE TEXT (Vertical) */}
      {/* These are absolute positioned so they don't mess up the grid */}
      <div className="vertical-text text-left">HOMES</div>
      <div className="vertical-text text-right">HOMES</div>

      {/* 3. THE 5-COLUMN GRID */}
      <div className="residence-grid">
        {projects.map((project) => (
          <div key={project.id} className="residence-item">
            <div className="image-wrapper">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="item-info">
              <h3>{project.title}</h3>
              <p className="description">
                A brief description of the project goes here to match the editorial style...
              </p>
              <span className="meta">{project.meta}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default InResidence;