import React, { useEffect, useRef } from 'react';
import './HistoricADU.css';
import { Header } from './header';
import { Footer } from './footer';

const HistoricADU = () => {
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
    <main className="min-h-screen bg-black">
      <Header />
      <div className="adu-page-container">

        {/* =====================================================
            SECTION 1: THE SPLIT SCROLL (Story + Main Images)
           ===================================================== */}
        <section className="adu-split-section">

          {/* LEFT: STICKY SIDEBAR (The Story) */}
          <aside className="adu-sticky-sidebar">
            <div className="sidebar-content">
              <div className="sidebar-header">
                <span className="brand-label">Service 03</span>
                <h1 className="service-title">Historic ADU</h1>
              </div>

              <div className="metrics-grid">
                <div className="metric">
                  <span className="label">Est. Price</span>
                  <span className="value">$200k+</span>
                </div>
                <div className="metric">
                  <span className="label">Lead Time</span>
                  <span className="value">6-8 Months</span>
                </div>
              </div>

              <div className="service-narrative">
                <p>
                  Adding an accessory structure to a historic property requires navigating strict Certificate of Appropriateness (COA) guidelines. We design and build detached ADUs, garage apartments, or studios that appear as if they were original outbuildings.
                </p>
                <p>
                  We use matching rooflines, siding profiles, and window muntin patterns to ensure the new structure is a subordinate, respectful addition to the primary historic resource.
                </p>
              </div>

              <div className="sidebar-cta">
                <button className="primary-btn">Request a Quote</button>
              </div>
            </div>
          </aside>

          {/* RIGHT: SCROLLABLE FEED (Main Project Images) */}
          <main className="adu-feed">
            <div className="image-block" ref={addToRefs}>
              <img src="https://i.pinimg.com/1200x/8e/9b/b1/8e9bb1f7a2df92158f8bcfd3bb693d11.jpg" alt="Historic Carriage House ADU" />
              <span className="caption">01 / Outbuilding Architecture</span>
            </div>

            <div className="text-block" ref={addToRefs}>
              <div className="features-list">
                <div className="feature-row">
                  <span className="feature-num">01</span>
                  <span className="feature-name">Full COA & Permit Acquisition</span>
                </div>
                <div className="feature-row">
                  <span className="feature-num">02</span>
                  <span className="feature-name">Architectural Design by Preservation Specialists</span>
                </div>
                <div className="feature-row">
                  <span className="feature-num">03</span>
                  <span className="feature-name">Foundation & Framing to Match Existing Structures</span>
                </div>
              </div>
            </div>

            <div className="image-block" ref={addToRefs}>
              <img src="https://normcph.com/wp-content/uploads/2023/10/NormArchitects_PavilionHouse_PhotoCredit_JonasBjerrePoulsen_LowRes_18.jpg" alt="Interior of detached studio" />
              <span className="caption">02 / Seamless Subordinate Additions</span>
            </div>
          </main>
        </section>


        {/* =====================================================
            SECTION 2: THE "DESIGN DETAILS" GRID (The Bottom Part)
           ===================================================== */}
        <section className="adu-product-grid-section">

          <h2 className="grid-section-title">Design Details</h2>

          <div className="product-split-layout">

            {/* LEFT COLUMN: Featured Item (Sticky or Static) */}
            <div className="product-col-left">
              <div className="product-card featured">
                <div className="prod-img-box">
                  <img src="https://cdn.vox-cdn.com/thumbor/AfNC-ZaVF2mtc1zsFCH8lffsZ-c=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19565702/4570_University_Ave____Pierre_Galant_1.jpg" alt="Siding Materials" />
                </div>
                <div className="prod-info">
                  <span className="prod-brand">EXTERIOR SIDING</span>
                  <span className="prod-cat">MATERIALS</span>
                  <h3 className="prod-name">Hardie Shingle Shake</h3>
                  <span className="prod-price">Included</span>
                  <a href="#" className="visit-link">VISIT WEBSITE</a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Feed of Other Items */}
            <div className="product-col-right">

              {/* Item 1 */}
              <div className="product-card">
                <div className="prod-img-box">
                  <img src="https://normcph.com/wp-content/uploads/2024/10/Norm-Architects_KENT-AVENUE_JBP_72-1.jpg" alt="Period Windows" />
                </div>
                <div className="prod-info">
                  <span className="prod-brand">MILLWORK</span>
                  <span className="prod-cat">WINDOWS</span>
                  <h3 className="prod-name">Custom Wood Windows</h3>
                  <span className="prod-price">Custom Quote</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="product-card">
                <div className="prod-img-box">
                  <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80" alt="Roofing" />
                </div>
                <div className="prod-info">
                  <span className="prod-brand">ROOFING</span>
                  <span className="prod-cat">EXTERIOR</span>
                  <h3 className="prod-name">Standing Seam Metal Roof</h3>
                  <span className="prod-price">Starting at $18 / sq ft</span>
                </div>
              </div>

            </div>
          </div>

        </section>

      </div>
      <Footer />
    </main>
  );
};

export default HistoricADU;
