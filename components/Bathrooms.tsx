import React, { useEffect, useRef } from 'react';
import './Bathrooms.css';

const Bathrooms = () => {
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
    <div className="bath-page-container">

      {/* =====================================================
          SECTION 1: THE SPLIT SCROLL (Story + Main Images)
         ===================================================== */}
      <section className="bath-split-section">

        {/* LEFT: STICKY SIDEBAR (The Story) */}
        <aside className="bath-sticky-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <span className="brand-label">Service 04</span>
              <h1 className="service-title">Bathrooms</h1>
            </div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">$40k+</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">10-16 Weeks</span>
              </div>
            </div>

            <div className="service-narrative">
              <p>
                Upgraded bathrooms with improved comfort, durability, and visual appeal. This includes tile work, fixtures, storage optimization, and design touches suited to your space.
              </p>
              <p>
                We specialize in creating luxurious, functional bathrooms that blend modern amenities with timeless elegance.
              </p>
            </div>

            <div className="sidebar-cta">
              <button className="primary-btn">Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className="bath-feed">
          <div className="image-block" ref={addToRefs}>
            <img src="/images/bathroom-1.jpg" alt="Luxury Bathroom" />
            <span className="caption">01 / Spa-Like Retreat</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <h2 className="section-header">Key Features</h2>
            <div className="features-list">
              <div className="feature">01. Custom Vanities</div>
              <div className="feature">02. Premium Fixtures</div>
              <div className="feature">03. Tile & Stone Work</div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src="/images/bathroom-2.jpg" alt="Vanity Detail" />
            <span className="caption">02 / Elegant Details</span>
          </div>
        </main>
      </section>


      {/* =====================================================
          SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
          Matches Screenshot 2 & 3 behavior
         ===================================================== */}
      <section className="bath-product-grid-section">

        <h2 className="grid-section-title">Design Details</h2>

        <div className="product-split-layout">

          {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
          <div className="product-col-left">
            <div className="product-card featured">
              <div className="prod-img-box">
                <img src="/images/marble-tile.jpg" alt="Marble Tile" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">SURFACES</span>
                <span className="prod-cat">TILES</span>
                <h3 className="prod-name">Carrara Marble</h3>
                <span className="prod-price">$25 / sq ft</span>
                <a href="#" className="visit-link">VISIT WEBSITE</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Feed of Other Items */}
          <div className="product-col-right">

            {/* Item 1 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/shower-fixture.jpg" alt="Shower Fixture" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">FIXTURES</span>
                <span className="prod-cat">SHOWER</span>
                <h3 className="prod-name">Rainfall Showerhead</h3>
                <span className="prod-price">$500+</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="product-card">
              <div className="prod-img-box">
                <img src="/images/vanity-cabinet.jpg" alt="Vanity Cabinet" />
              </div>
              <div className="prod-info">
                <span className="prod-brand">STORAGE</span>
                <span className="prod-cat">VANITY</span>
                <h3 className="prod-name">Custom Oak Vanity</h3>
                <span className="prod-price">$2,000+</span>
              </div>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};

export default Bathrooms;