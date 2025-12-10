"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from './useIntersectionObserver';
import './GeneralConstruction.css';

const GeneralConstruction = () => {
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
        <h1 className="service-title">GENERAL CONSTRUCTION & FRAMING</h1>
        <p className="service-subtitle">Solid foundations and expert framing for homes built to last.</p>

        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-label">EST. PRICE</span>
            <span className="metric-value">$50k+</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">LEAD TIME</span>
            <span className="metric-value">6-12 Weeks</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">WORK ON SITE</span>
            <span className="metric-value">4-8 Weeks</span>
          </div>
        </div>

        <button className="primary-btn">REQUEST A QUOTE</button>
        <p className="cta-note">Get a custom quote for your project</p>
      </div>

      {/* RIGHT FEED */}
      <div className="service-feed">
        {/* First Image Block */}
        <div className={`feed-block ${isVisible1 ? 'visible' : ''}`} ref={block1Ref}>
          <div className="image-block">
            <Image
              src="/images/kent-avenue-penthouse.jpg"
              alt="Kent Avenue Penthouse"
              width={800}
              height={600}
              priority
            />
            <div className="caption">KENT AVENUE PENTHOUSE</div>
          </div>
        </div>

        {/* Key Features */}
        <div className={`feed-block ${isVisible2 ? 'visible' : ''}`} ref={block2Ref}>
          <div className="section-header">Key Features</div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-number">01</span>
              <h3>Structural Integrity</h3>
              <p>Expert framing and foundation work ensuring long-term stability and safety.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">02</span>
              <h3>Code Compliance</h3>
              <p>All work meets current building codes and standards for quality assurance.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">03</span>
              <h3>Quality Materials</h3>
              <p>Premium lumber, concrete, and building materials for durable construction.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">04</span>
              <h3>Custom Solutions</h3>
              <p>Tailored construction solutions for additions, renovations, and new builds.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">05</span>
              <h3>Energy Efficiency</h3>
              <p>Modern insulation and framing techniques for energy-efficient homes.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">06</span>
              <h3>Load Bearing Support</h3>
              <p>Proper load distribution and support for multi-story constructions.</p>
            </div>
          </div>
        </div>

        {/* Second Image Block */}
        <div className={`feed-block ${isVisible3 ? 'visible' : ''}`} ref={block3Ref}>
          <div className="image-block">
            <Image
              src="/images/craftsman-restoring-vintage-wooden-staircase-1920s.jpg"
              alt="Restoring Vintage Staircase"
              width={800}
              height={600}
            />
            <div className="caption">RESTORING VINTAGE STAIRCASE</div>
          </div>
        </div>

        {/* Pricing and Warranties */}
        <div className={`feed-block ${isVisible4 ? 'visible' : ''}`} ref={block4Ref}>
          <div className="section-header">Pricing</div>
          <div className="split-text-block">
            <div className="editorial-col">
              <p className="editorial-text">
                Pricing varies based on project scope, materials, and complexity. Contact us for a detailed quote tailored to your construction needs.
              </p>
            </div>
            <div className="editorial-col">
              <p className="editorial-text">
                Our general construction work is backed by comprehensive warranties ensuring peace of mind. Structural elements carry a 10-year warranty, covering framing and foundational work.
              </p>
              <p className="editorial-text">
                All construction materials and workmanship are guaranteed for 2 years, ensuring that your home maintains its integrity and value over time.
              </p>
            </div>
          </div>
        </div>

        {/* Third Image Block */}
        <div className={`feed-block ${isVisible5 ? 'visible' : ''}`} ref={block5Ref}>
          <div className="image-block">
            <Image
              src="/images/elegant-1920s-craftsman-home-interior-with-rich-wo.jpg"
              alt="Elegant Craftsman Interior"
              width={800}
              height={600}
            />
            <div className="caption">ELEGANT CRAFTSMAN INTERIOR</div>
          </div>
        </div>

        {/* FAQs */}
        <div className={`feed-block ${isVisible6 ? 'visible' : ''}`} ref={block6Ref}>
          <div className="section-header">Frequently Asked Questions</div>
          <div className="faq-item">
            <h3>Do you handle permits?</h3>
            <p>Yes, we assist with obtaining necessary permits and ensure all work complies with local building codes.</p>
          </div>
          <div className="faq-item">
            <h3>How long does construction take?</h3>
            <p>Timeline depends on project size, but most general construction projects take 6-12 weeks from planning to completion.</p>
          </div>
          <div className="faq-item">
            <h3>What materials do you use?</h3>
            <p>We use premium, code-approved materials including pressure-treated lumber, concrete, and steel reinforcements.</p>
          </div>
        </div>

        {/* Final CTA Overlay */}
        <div className={`feed-block ${isVisible7 ? 'visible' : ''}`} ref={block7Ref}>
          <div className="image-block">
            <Image
              src="/images/colonial-home-interior-classic-elegant-entryway-st.jpg"
              alt="Classic Elegant Entryway"
              width={800}
              height={600}
              className="dimmed-img"
            />
            <div className="final-cta-overlay">
              <h2>Ready to Build Strong Foundations?</h2>
              <p>Contact us today for expert general construction and framing services.</p>
              <button className="primary-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralConstruction;