import React from 'react';
import './InResidence.css';

const InResidence = () => {
  // Placeholder data - replace with your actual project details
  const projects = [
    { id: 1, title: "Repulse Bay Residence", caption: "REPULSE BAY RESIDENCE", meta: "Residential | 2024", img: "https://images.adsttc.com/media/images/5d51/58a4/284d/d1bc/4500/0207/medium_jpg/浅水湾PULSA_中国香港__by_Aedas_03.jpg?1565612188" },
    { id: 2, title: "Kent Avenue Penthouse", caption: "KENT AVENUE PENTHOUSE", meta: "Residential | 2024", img: "https://normcph.com/wp-content/uploads/2024/10/Norm-Architects_KENT-AVENUE_JBP_72-1.jpg" },
    { id: 3, title: "Fjord Boat House", caption: "FJORD BOAT HOUSE", meta: "Residential | 2020", img: "https://leibal.com/wp-content/uploads/2020/11/NORM_ARCHITECTS_FJORD_BOAT_HOUSE_18.jpg" },
    { id: 4, title: "Archipelago House", caption: "ARCHIPELAGO HOUSE", meta: "Residential | 2020", img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3c0ae232537929.56899d7433d6f.jpg" },
    { id: 5, title: "Pavilion House", caption: "PAVILION HOUSE", meta: "Residential | 2021", img: "https://normcph.com/wp-content/uploads/2023/10/NormArchitects_PavilionHouse_PhotoCredit_JonasBjerrePoulsen_LowRes_18.jpg" },
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
            <div className="image-caption">
              {project.caption}
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