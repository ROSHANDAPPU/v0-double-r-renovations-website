import React, { useEffect, useRef } from 'react';
import './FullHomeRemodels.css';

const FullHomeRemodels = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation observer for fade-in elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="fhr-page-container">

      {/* =====================================================
          SECTION 1: THE SPLIT SCROLL (Story + Main Images)
         ===================================================== */}
      <section className="fhr-split-section">

        {/* LEFT: STICKY SIDEBAR (The Story) */}
        <aside className="fhr-sticky-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <span className="brand-label">Service 02</span>
              <h1 className="service-title">Full-Home<br />Remodels</h1>
            </div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">$150k+</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">12-24 Weeks</span>
              </div>
            </div>

            <div className="service-narrative">
              <p>
                A complete transformation of interior spaces with thoughtful design choices, functional improvements, and modern aesthetics, tailored to bring a renewed identity to your home.
              </p>
              <p>
                Our full-home remodels integrate high-end finishes, custom layouts, and sustainable materials to create spaces that reflect your lifestyle and vision.
              </p>
            </div>

            <div className="sidebar-cta">
              <button className="primary-btn">Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className="fhr-feed">
          <div className="image-block" ref={addToRefs}>
            <img src="/images/remodel-1.jpg" alt="Living Room" />
            <span className="caption">01 / Living Spaces</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <h2 className="section-header">Key Areas</h2>
            <div className="features-list">
              <div className="feature">01. Kitchen & Dining</div>
              <div className="feature">02. Living Areas</div>
              <div className="feature">03. Bedrooms & Bathrooms</div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src="/images/remodel-2.jpg" alt="Kitchen" />
            <span className="caption">02 / Modern Kitchen</span>
          </div>
        </main>
      </section>


      {/* =====================================================
          SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
          Matches Screenshot 2 & 3 behavior
         ===================================================== */}
      <section className="fhr-product-grid-section">

        <h2 className="grid-section-title">Design Details</h2>

        <div className="product-split-layout">

          {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
          <div className="product-col-left">
            <div className="product-card featured">
              <div className="prod-img-box">
                <img src="/images/flooring-sample.jpg" alt="Hardwood Flooring" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">PREMIUM FINISHES</span>
                <span className="prod-cat">FLOORING</span>
                <h3 className="prod-name">Oak Hardwood</h3>
                <span className="prod-price">$15 / sq ft</span>
                <a href="#" className="visit-link">VISIT WEBSITE</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Feed of Other Items */}
          <div className="product-col-right">

            {/* Item 1 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/cabinetry.jpg" alt="Cabinetry" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">CUSTOM</span>
                <span className="prod-cat">CABINETRY</span>
                <h3 className="prod-name">Bespoke Kitchen Cabinets</h3>
                <span className="prod-price">$5,000+</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/lighting.jpg" alt="Lighting" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">AMBIANCE</span>
                <span className="prod-cat">LIGHTING</span>
                <h3 className="prod-name">LED Pendant Lights</h3>
                <span className="prod-price">$300 / unit</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default FullHomeRemodels;