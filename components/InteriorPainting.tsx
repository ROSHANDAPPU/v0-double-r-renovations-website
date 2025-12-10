import React, { useEffect, useRef } from 'react';
import './InteriorPainting.css';

const InteriorPainting = () => {
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
    <div className="intp-page-container">

      {/* =====================================================
          SECTION 1: THE SPLIT SCROLL (Story + Main Images)
         ===================================================== */}
      <section className="intp-split-section">

        {/* LEFT: STICKY SIDEBAR (The Story) */}
        <aside className="intp-sticky-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <span className="brand-label">Service 05</span>
              <h1 className="service-title">Interior Painting<br />& Finishes</h1>
            </div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">$15k+</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">4-8 Weeks</span>
              </div>
            </div>

            <div className="service-narrative">
              <p>
                A refined interior update with color choices, finish textures, and detail work. This service highlights the character of each room using cohesive tones and high quality materials.
              </p>
              <p>
                We provide expert painting services that transform spaces with precision application and durable, eco-friendly finishes.
              </p>
            </div>

            <div className="sidebar-cta">
              <button className="primary-btn">Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className="intp-feed">
          <div className="image-block" ref={addToRefs}>
            <img src="https://homedecorelooks.com/wp-content/uploads/2025/07/1920s_interior_style_pqwrx.jpg" alt="Painted Interior" />
            <span className="caption">01 / Color Harmony</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <h2 className="section-header">Finishing Touches</h2>
            <div className="features-list">
              <div className="feature">01. Premium Paints</div>
              <div className="feature">02. Texture Finishes</div>
              <div className="feature">03. Trim & Molding</div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src="https://homedecorelooks.com/wp-content/uploads/2025/07/regional_adaptations_of_art_deco_2vip6.jpg" alt="Detail Work" />
            <span className="caption">02 / Artisan Details</span>
          </div>
        </main>
      </section>


      {/* =====================================================
          SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
          Matches Screenshot 2 & 3 behavior
         ===================================================== */}
      <section className="intp-product-grid-section">

        <h2 className="grid-section-title">Design Details</h2>

        <div className="product-split-layout">

          {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
          <div className="product-col-left">
            <div className="product-card featured">
              <div className="prod-img-box">
                <img src="https://homedecorelooks.com/wp-content/uploads/2025/07/1920s_decor_inspiration_sources_lg14k.jpg" alt="Premium Paint" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">FINISHES</span>
                <span className="prod-cat">PAINT</span>
                <h3 className="prod-name">Farrow & Ball Estate</h3>
                <span className="prod-price">$80 / gallon</span>
                <a href="#" className="visit-link">VISIT WEBSITE</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Feed of Other Items */}
          <div className="product-col-right">

            {/* Item 1 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="https://homedecorelooks.com/wp-content/uploads/2025/07/luxurious_black_and_gold_elegance_mbksz.jpg" alt="Texture Tool" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">TOOLS</span>
                <span className="prod-cat">FINISHING</span>
                <h3 className="prod-name">Venetian Plaster Kit</h3>
                <span className="prod-price">$150 / set</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="https://homedecorelooks.com/wp-content/uploads/2025/07/decorative_tassel_fringe_beading_jcj3p.jpg" alt="Wood Stain" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">WOODWORK</span>
                <span className="prod-cat">STAINS</span>
                <h3 className="prod-name">Natural Oak Stain</h3>
                <span className="prod-price">$45 / quart</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default InteriorPainting;