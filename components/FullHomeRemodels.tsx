"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from './useIntersectionObserver';
import './GeneralConstruction.css';

const FullHomeRemodels = () => {
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
        <h1 className="service-title">FULL-HOME REMODELS</h1>
        <p className="service-subtitle">Complete home transformations that preserve character while embracing modern living.</p>

        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-label">EST. PRICE</span>
            <span className="metric-value">$150k+</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">LEAD TIME</span>
            <span className="metric-value">8-16 Weeks</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">WORK ON SITE</span>
            <span className="metric-value">6-12 Weeks</span>
          </div>
        </div>

        <button className="primary-btn">REQUEST A CONSULTATION</button>
        <p className="cta-note">Get a custom quote for your project</p>
      </div>

      {/* RIGHT FEED */}
      <div className="service-feed">
        {/* First Image Block */}
        <div className={`feed-block ${isVisible1 ? 'visible' : ''}`} ref={block1Ref}>
          <div className="image-block">
            <Image
              src="/images/elegant-1920s-craftsman-home-interior-woodwork.jpg"
              alt="Elegant Craftsman Interior"
              width={800}
              height={600}
              priority
            />
            <div className="caption">ELEGANT CRAFTSMAN INTERIOR</div>
          </div>
        </div>

        {/* Key Features */}
        <div className={`feed-block ${isVisible2 ? 'visible' : ''}`} ref={block2Ref}>
          <div className="section-header">Key Features</div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-number">01</span>
              <h3>Complete Renovation</h3>
              <p>End-to-end home remodeling from concept to completion, covering all rooms and systems.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">02</span>
              <h3>Design Integration</h3>
              <p>Unified design approach ensuring cohesive aesthetics throughout the entire home.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">03</span>
              <h3>Modern Amenities</h3>
              <p>Integration of contemporary features while maintaining historic character.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">04</span>
              <h3>System Upgrades</h3>
              <p>Electrical, plumbing, and HVAC improvements for modern comfort and efficiency.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">05</span>
              <h3>Structural Enhancements</h3>
              <p>Foundation and framing improvements for long-term stability and safety.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">06</span>
              <h3>Custom Finishes</h3>
              <p>Premium materials and finishes tailored to your style and budget.</p>
            </div>
          </div>
        </div>

        {/* Second Image Block */}
        <div className={`feed-block ${isVisible3 ? 'visible' : ''}`} ref={block3Ref}>
          <div className="image-block">
            <Image
              src="/images/prairie-style-home-restoration-living-room-firepla.jpg"
              alt="Prairie Style Home Restoration"
              width={800}
              height={600}
            />
            <div className="caption">PRAIRIE STYLE HOME RESTORATION</div>
          </div>
        </div>

        {/* Pricing and Warranties */}
        <div className={`feed-block ${isVisible4 ? 'visible' : ''}`} ref={block4Ref}>
          <div className="section-header">Pricing</div>
          <div className="split-text-block">
            <div className="editorial-col">
              <p className="editorial-text">
                Full-home remodel pricing depends on scope, materials, and home size. Each project is uniquely priced based on your specific renovation goals.
              </p>
            </div>
            <div className="editorial-col">
              <p className="editorial-text">
                Full-home remodels include comprehensive warranties covering all workmanship and materials. Structural improvements carry a 10-year warranty for your peace of mind.
              </p>
              <p className="editorial-text">
                All finishes, installations, and systems are guaranteed for 2-5 years depending on the component, ensuring your renovated home maintains its quality and value.
              </p>
            </div>
          </div>
        </div>

        {/* Third Image Block */}
        <div className={`feed-block ${isVisible5 ? 'visible' : ''}`} ref={block5Ref}>
          <div className="image-block">
            <Image
              src="/images/georgian-colonial-home-grand-staircase-restoration.jpg"
              alt="Georgian Colonial Home Staircase"
              width={800}
              height={600}
            />
            <div className="caption">GEORGIAN COLONIAL GRAND STAIRCASE</div>
          </div>
        </div>

        {/* FAQs */}
        <div className={`feed-block ${isVisible6 ? 'visible' : ''}`} ref={block6Ref}>
          <div className="section-header">Frequently Asked Questions</div>
          <div className="faq-item">
            <h3>Can I live during the remodel?</h3>
            <p>Yes, we work efficiently to minimize disruption. Temporary living arrangements can be arranged if needed.</p>
          </div>
          <div className="faq-item">
            <h3>How do you handle historic homes?</h3>
            <p>We specialize in preserving historic character while adding modern functionality and comfort.</p>
          </div>
          <div className="faq-item">
            <h3>What's included in a full remodel?</h3>
            <p>Complete renovation covering kitchens, bathrooms, living spaces, systems, and exterior improvements.</p>
          </div>
        </div>

        {/* Final CTA Overlay */}
        <div className={`feed-block ${isVisible7 ? 'visible' : ''}`} ref={block7Ref}>
          <div className="image-block">
            <Image
              src="/images/victorian-home-interior-elegant-living-room-firepl.jpg"
              alt="Victorian Home Interior"
              width={800}
              height={600}
              className="dimmed-img"
            />
            <div className="final-cta-overlay">
              <h2>Ready for a Complete Home Transformation?</h2>
              <p>Let's discuss your vision for a fully renovated home that meets all your needs.</p>
              <button className="primary-btn">Start Your Remodel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullHomeRemodels;