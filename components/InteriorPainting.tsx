"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from './useIntersectionObserver';
import './GeneralConstruction.css';

const InteriorPainting = () => {
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);
  const block4Ref = useRef<HTMLDivElement>(null);
  const block5Ref = useRef<HTMLDivElement>(null);
  const block6Ref = useRef<HTMLDivElement>(null);
  const block7Ref = useRef<HTMLDivElement>(null);

  const isVisible1 = useIntersectionObserver(block1Ref);
  const isVisible2 = useIntersectionObserver(block2Ref);
  const isVisible3 = useIntersectionObserver(block3Ref);
  const isVisible4 = useIntersectionObserver(block4Ref);
  const isVisible5 = useIntersectionObserver(block5Ref);
  const isVisible6 = useIntersectionObserver(block6Ref);
  const isVisible7 = useIntersectionObserver(block7Ref);

  return (
    <div className="service-page-container">
      {/* LEFT SIDEBAR */}
      <div className="service-sidebar">
        <span className="brand-label">Double R Renovations</span>
        <h1 className="service-title">INTERIOR PAINTING & FINISHES</h1>
        <p className="service-subtitle">Transform your interiors with expert painting and finishing services that bring out the beauty of your home.</p>

        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-label">EST. PRICE</span>
            <span className="metric-value">$15k+</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">LEAD TIME</span>
            <span className="metric-value">2-4 Weeks</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">WORK ON SITE</span>
            <span className="metric-value">1-2 Weeks</span>
          </div>
        </div>

        <button className="primary-btn">GET PAINTING QUOTE</button>
        <p className="cta-note">Get a custom quote for your project</p>
      </div>

      {/* RIGHT FEED */}
      <div className="service-feed">
        {/* First Image Block */}
        <div className={`feed-block ${isVisible1 ? 'visible' : ''}`} ref={block1Ref}>
          <div className="image-block">
            <Image
              src="/images/farmhouse-interior-rustic-beams-white-walls-modern.jpg"
              alt="Farmhouse Interior"
              width={800}
              height={600}
              priority
            />
            <div className="caption">FARMHOUSE INTERIOR</div>
          </div>
        </div>

        {/* Key Features */}
        <div className={`feed-block ${isVisible2 ? 'visible' : ''}`} ref={block2Ref}>
          <div className="section-header">Key Features</div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-number">01</span>
              <h3>Color Consultation</h3>
              <p>Professional color selection and consultation to create harmonious interior palettes.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">02</span>
              <h3>Premium Materials</h3>
              <p>High-quality paints, stains, and finishes chosen for durability and aesthetic appeal.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">03</span>
              <h3>Surface Preparation</h3>
              <p>Expert surface preparation ensuring smooth, long-lasting finishes.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">04</span>
              <h3>Detail Work</h3>
              <p>Precise attention to trim, moldings, and architectural details.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">05</span>
              <h3>Historic Finishes</h3>
              <p>Period-appropriate paints and techniques respecting historic homes.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">06</span>
              <h3>Eco-Friendly Options</h3>
              <p>Low-VOC and environmentally friendly paint options for healthier living spaces.</p>
            </div>
          </div>
        </div>

        {/* Second Image Block */}
        <div className={`feed-block ${isVisible3 ? 'visible' : ''}`} ref={block3Ref}>
          <div className="image-block">
            <Image
              src="/images/arts-and-crafts-cottage-kitchen-renovation-vintage.jpg"
              alt="Arts and Crafts Cottage"
              width={800}
              height={600}
            />
            <div className="caption">ARTS AND CRAFTS COTTAGE</div>
          </div>
        </div>

        {/* Pricing and Warranties */}
        <div className={`feed-block ${isVisible4 ? 'visible' : ''}`} ref={block4Ref}>
          <div className="section-header">Pricing</div>
          <div className="split-text-block">
            <div className="editorial-col">
              <p className="editorial-text">
                Interior painting costs vary based on room size, surface condition, and materials. We provide detailed estimates customized to your specific painting needs.
              </p>
            </div>
            <div className="editorial-col">
              <p className="editorial-text">
                Interior painting services include comprehensive warranties on workmanship and materials. Paint finishes carry a 3-year warranty against fading, cracking, and peeling.
              </p>
              <p className="editorial-text">
                All painting and finishing work is guaranteed for 2 years, ensuring your interiors maintain their beauty and quality over time.
              </p>
            </div>
          </div>
        </div>

        {/* Third Image Block */}
        <div className={`feed-block ${isVisible5 ? 'visible' : ''}`} ref={block5Ref}>
          <div className="image-block">
            <Image
              src="/images/colonial-home-interior-classic-elegant-entryway-st.jpg"
              alt="Colonial Home Interior"
              width={800}
              height={600}
            />
            <div className="caption">COLONIAL HOME INTERIOR</div>
          </div>
        </div>

        {/* FAQs */}
        <div className={`feed-block ${isVisible6 ? 'visible' : ''}`} ref={block6Ref}>
          <div className="section-header">Frequently Asked Questions</div>
          <div className="faq-item">
            <h3>How long does interior painting take?</h3>
            <p>Most interior painting projects take 1-2 weeks depending on room size and complexity.</p>
          </div>
          <div className="faq-item">
            <h3>Do you work with historic homes?</h3>
            <p>Yes, we specialize in historic-appropriate paints and techniques that preserve architectural integrity.</p>
          </div>
          <div className="faq-item">
            <h3>What paints do you use?</h3>
            <p>We use premium Benjamin Moore, Sherwin Williams, and period-appropriate paints for optimal results.</p>
          </div>
        </div>

        {/* Final CTA Overlay */}
        <div className={`feed-block ${isVisible7 ? 'visible' : ''}`} ref={block7Ref}>
          <div className="image-block">
            <Image
              src="/images/pavilion-house.jpg"
              alt="Pavilion House"
              width={800}
              height={600}
              className="dimmed-img"
            />
            <div className="final-cta-overlay">
              <h2>Transform Your Interiors</h2>
              <p>Let us bring new life to your home with expert painting and finishing services.</p>
              <button className="primary-btn">Start Your Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorPainting;