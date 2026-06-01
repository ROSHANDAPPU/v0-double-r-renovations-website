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
              <span className="brand-label">Service 06</span>
              <h1 className="service-title">Historic Home Painting<br />& Prep</h1>
            </div>

            <div className="metrics-grid">
              <div className="metric">
                <span className="label">Est. Price</span>
                <span className="value">$9 / sq ft</span>
              </div>
              <div className="metric">
                <span className="label">Lead Time</span>
                <span className="value">~4 Weeks</span>
              </div>
            </div>

            <div className="service-narrative">
              <p>
                Painting a historic home is not a cosmetic update; it is a preservation treatment. Our process involves careful surface preparation (scraping and sanding lead-safe practices), repair of damaged wood siding, and the application of high-quality primers and paints with a historic sheen.
              </p>
              <p>
                We help clients select colors from historically accurate palettes suitable for the home's architectural style and the McKinney Historic District guidelines.
              </p>
            </div>

            <div className="sidebar-cta">
              <button className="primary-btn">Request a Quote</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
        <main className="pt-feed">
          <div className="image-block" ref={addToRefs}>
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80" alt="Painted Wall" />
            <span className="caption">01 / Historic Colors & Finishes</span>
          </div>

          <div className="text-block" ref={addToRefs}>
            <div className="features-list">
              <div className="feature-row">
                <span className="feature-num">01</span>
                <span className="feature-name">Full Exterior Painting</span>
              </div>
              <div className="feature-row">
                <span className="feature-num">02</span>
                <span className="feature-name">Replacement of Rotten Trim</span>
              </div>
              <div className="feature-row">
                <span className="feature-num">03</span>
                <span className="feature-name">Hardie Soffit Installation</span>
              </div>
              <div className="feature-row">
                <span className="feature-num">04</span>
                <span className="feature-name">Crack Repair & Drywall Touchups</span>
              </div>
            </div>
          </div>

          <div className="image-block" ref={addToRefs}>
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80" alt="Interior House Painting and Finishes" />
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
                <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80" alt="Farrow and Ball Premium Paint Palette" />
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
                <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80" alt="Venetian Plaster Textured Wall Finish" />
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
                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200&q=80" alt="Elegant Stained Oak Wood Paneling" />
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