import React from 'react';
import './InResidence.css';

const InResidence = () => {
  const projects = [
    {
      id: 1,
      title: "Historic Bathrooms",
      caption: "HISTORIC BATHROOMS",
      meta: "From $24,000 USD",
      desc: "Preserving the intimacy of a historic home while upgrading essential plumbing, Mosaic tiling, and built-in cabinetry.",
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80"
    },
    {
      id: 2,
      title: "Period Kitchens",
      caption: "PERIOD KITCHENS",
      meta: "From $35,000 USD",
      desc: "Custom Craftsman shaker or Victorian beadboard kitchens that conceal modern appliances in period millwork.",
      img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80"
    },
    {
      id: 3,
      title: "Historic ADUs",
      caption: "HISTORIC ADUS",
      meta: "From $200,000 USD",
      desc: "Adding detached accessory structures and garage suites designed to respect historic guidelines and COA rules.",
      img: "https://i.pinimg.com/1200x/8e/9b/b1/8e9bb1f7a2df92158f8bcfd3bb693d11.jpg"
    },
    {
      id: 4,
      title: "Garages & Carports",
      caption: "GARAGES & CARPORTS",
      meta: "From $37,000 USD",
      desc: "Detached garages and carriage houses built to complement your residence, featuring Hardie Shingle Shake siding.",
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1600&q=80"
    },
    {
      id: 5,
      title: "Preservation & Prep",
      caption: "HISTORIC PRESERVATION",
      meta: "Project Dependent",
      desc: "Porch restoration, lead-safe paint prep, window salvaging, and period-correct painting to enhance curb presence.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
    },
  ];

  return (
    <section className="in-residence-section">

      {/* 1. SECTION TITLE */}
      <div className="residence-header">
        <h2>Services</h2>
      </div>

      {/* 2. FLOATING SIDE TEXT (Vertical) */}
      {/* These are absolute positioned so they don't mess up the grid */}
      <div className="vertical-text text-left">SERVICES</div>
      <div className="vertical-text text-right">SERVICES</div>

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
                {project.desc}
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