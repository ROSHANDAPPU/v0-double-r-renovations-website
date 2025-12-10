"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from './useIntersectionObserver';
import './GeneralConstruction.css';

const Bathrooms = () => {
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
        <h1 className="service-title">BATHROOM RENOVATIONS</h1>
        <p className="service-subtitle">Create serene, functional bathrooms that blend luxury, comfort, and period-appropriate design.</p>

        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-label">EST. PRICE</span>
            <span className="metric-value">$25k+</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">LEAD TIME</span>
            <span className="metric-value">3-6 Weeks</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">WORK ON SITE</span>
            <span className="metric-value">1-3 Weeks</span>
          </div>
        </div>

        <button className="primary-btn">GET BATHROOM PRICING</button>
        <p className="cta-note">Get a custom quote for your project</p>
      </div>

      {/* RIGHT FEED */}
      <div className="service-feed">
        {/* First Image Block */}
        <div className={`feed-block ${isVisible1 ? 'visible' : ''}`} ref={block1Ref}>
          <div className="image-block">
            <Image
              src="/images/tudor-revival-home-renovation-elegant-interior.jpg"
              alt="Tudor Revival Home Interior"
              width={800}
              height={600}
              priority
            />
            <div className="caption">TUDOR REVIVAL HOME INTERIOR</div>
          </div>
        </div>

        {/* Key Features */}
        <div className={`feed-block ${isVisible2 ? 'visible' : ''}`} ref={block2Ref}>
          <div className="section-header">Key Features</div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-number">01</span>
              <h3>Luxury Fixtures</h3>
              <p>Premium faucets, hardware, and fixtures chosen for quality and style.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">02</span>
              <h3>Tile & Stone Work</h3>
              <p>Expert installation of natural stone, ceramic, or premium synthetic surfaces.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">03</span>
              <h3>Vanity Design</h3>
              <p>Custom vanities with integrated sinks and thoughtful storage solutions.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">04</span>
              <h3>Shower Solutions</h3>
              <p>Walk-in showers, tub replacements, or custom shower enclosures.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">05</span>
              <h3>Lighting & Mirrors</h3>
              <p>Ambient and task lighting with beautifully framed mirrors.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">06</span>
              <h3>Accessibility Features</h3>
              <p>Universal design elements for comfort and safety at any age.</p>
            </div>
          </div>
        </div>

        {/* Second Image Block */}
        <div className={`feed-block ${isVisible3 ? 'visible' : ''}`} ref={block3Ref}>
          <div className="image-block">
            <Image
              src="/images/farmhouse-interior-rustic-beams-white-walls-modern.jpg"
              alt="Farmhouse Interior"
              width={800}
              height={600}
            />
            <div className="caption">FARMHOUSE INTERIOR</div>
          </div>
        </div>

        {/* Pricing and Warranties */}
        <div className={`feed-block ${isVisible4 ? 'visible' : ''}`} ref={block4Ref}>
          <div className="section-header">Pricing</div>
          <div className="split-text-block">
            <div className="editorial-col">
              <p className="editorial-text">
                Bathroom renovation costs depend on scope, fixtures, and materials. We provide transparent pricing with no hidden fees.
              </p>
            </div>
            <div className="editorial-col">
              <p className="editorial-text">
                Bathroom renovations include comprehensive warranties on all installations and materials. Plumbing work carries a 5-year warranty for leak-free performance.
              </p>
              <p className="editorial-text">
                Fixtures, tile work, and finishes are guaranteed for 2 years, ensuring your bathroom maintains its beauty and functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Third Image Block */}
        <div className={`feed-block ${isVisible5 ? 'visible' : ''}`} ref={block5Ref}>
          <div className="image-block">
            <Image
              src="/images/elegant-craftsman-home-interior-with-wood-details-.jpg"
              alt="Elegant Craftsman Home Interior"
              width={800}
              height={600}
            />
            <div className="caption">ELEGANT CRAFTSMAN HOME INTERIOR</div>
          </div>
        </div>

        {/* FAQs */}
        <div className={`feed-block ${isVisible6 ? 'visible' : ''}`} ref={block6Ref}>
          <div className="section-header">Frequently Asked Questions</div>
          <div className="faq-item">
            <h3>Can you work around my schedule?</h3>
            <p>Yes, we schedule work to minimize disruption, often completing projects in phases.</p>
          </div>
          <div className="faq-item">
            <h3>Do you handle plumbing updates?</h3>
            <p>Absolutely, we provide complete plumbing services including pipe replacement and fixture installation.</p>
          </div>
          <div className="faq-item">
            <h3>What about water damage prevention?</h3>
            <p>We include waterproofing and proper drainage solutions to prevent future water damage.</p>
          </div>
        </div>

        {/* Final CTA Overlay */}
        <div className={`feed-block ${isVisible7 ? 'visible' : ''}`} ref={block7Ref}>
          <div className="image-block">
            <Image
              src="/images/repulse-bay-residence.jpg"
              alt="Repulse Bay Residence"
              width={800}
              height={600}
              className="dimmed-img"
            />
            <div className="final-cta-overlay">
              <h2>Transform Your Bathroom Today</h2>
              <p>Experience the luxury of a beautifully renovated bathroom designed for modern living.</p>
              <button className="primary-btn">Start Your Renovation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bathrooms;