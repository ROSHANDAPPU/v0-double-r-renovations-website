import React, { useEffect, useRef } from 'react';
import { withBasePath } from '@/lib/basePath';
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
              <span className="brand-label">Service 05</span>
              <h1 className="service-title">Historic Preservation &<br />Porch Restoration</h1>
            </div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">Project Dep.</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">Project Dep.</span>
              </div>
            </div>

            <div className="service-narrative">
              <p>
                This is our foundation. We focus on preserving the "historic look" by salvaging and repairing original materials. Whether restoring a grand wraparound porch or replicating intricate millwork, we use traditional joinery techniques and high-quality wood species to bring aging architectural details back to life without erasing the patina of time.
              </p>
              <p>
                We respect the history of each home, ensuring structural elements are reinforced with modern code safety while preserving custom historic details.
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
            <img src={withBasePath("/images/services/inside/preservation/1.jpg")} alt="Historic Preservation" />
            <span className="caption">01 / Timeless Restoration</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <div className="features-list">
              <div className="feature-row">
                <span className="feature-num">01</span>
                <span className="feature-name">Carpentry Replacement Matching Historic Profiles</span>
              </div>
              <div className="feature-row">
                <span className="feature-num">02</span>
                <span className="feature-name">Structural Repair of Porches & Balustrades</span>
              </div>
              <div className="feature-row">
                <span className="feature-num">03</span>
                <span className="feature-name">Wood Window Restoration</span>
              </div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src={withBasePath("/images/services/inside/preservation/2.jpg")} alt="Beautiful Modern Home Living Room" />
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
                <img src={withBasePath("/images/services/inside/preservation/3.jpg")} alt="Hardwood Flooring" />
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
                <img src={withBasePath("/images/services/inside/preservation/4.jpg")} alt="Cabinetry" />
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
                <img src={withBasePath("/images/services/inside/preservation/5.jpg")} alt="Lighting" />
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