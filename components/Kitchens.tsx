"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from './useIntersectionObserver';
import './GeneralConstruction.css';

const Kitchens = () => {
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
        <h1 className="service-title">KITCHEN RENOVATIONS</h1>
        <p className="service-subtitle">Transform your kitchen into the heart of your home with expert craftsmanship and modern design.</p>

        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-label">EST. PRICE</span>
            <span className="metric-value">$75k+</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">LEAD TIME</span>
            <span className="metric-value">4-8 Weeks</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">WORK ON SITE</span>
            <span className="metric-value">2-4 Weeks</span>
          </div>
        </div>

        <button className="primary-btn">GET A KITCHEN QUOTE</button>
        <p className="cta-note">Get a custom quote for your project</p>
      </div>

      {/* RIGHT FEED */}
      <div className="service-feed">
        {/* First Image Block */}
        <div className={`feed-block ${isVisible1 ? 'visible' : ''}`} ref={block1Ref}>
          <div className="image-block">
            <Image
              src="/images/arts-and-crafts-cottage-kitchen-renovation-vintage.jpg"
              alt="Arts and Crafts Cottage Kitchen"
              width={800}
              height={600}
              priority
            />
            <div className="caption">ARTS AND CRAFTS COTTAGE KITCHEN</div>
          </div>
        </div>

        {/* Key Features */}
        <div className={`feed-block ${isVisible2 ? 'visible' : ''}`} ref={block2Ref}>
          <div className="section-header">Key Features</div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-number">01</span>
              <h3>Custom Cabinetry</h3>
              <p>Bespoke cabinet designs with premium materials and expert craftsmanship.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">02</span>
              <h3>Appliance Integration</h3>
              <p>Seamless integration of modern appliances with period-appropriate styling.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">03</span>
              <h3>Countertop Solutions</h3>
              <p>Granite, quartz, or custom surfaces chosen for durability and aesthetics.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">04</span>
              <h3>Lighting Design</h3>
              <p>Task and ambient lighting solutions for functionality and ambiance.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">05</span>
              <h3>Storage Optimization</h3>
              <p>Smart storage solutions maximizing space and organization.</p>
            </div>
            <div className="feature-card">
              <span className="feature-number">06</span>
              <h3>Period Details</h3>
              <p>Authentic details and finishes respecting the home's architectural style.</p>
            </div>
          </div>
        </div>

        {/* Second Image Block */}
        <div className={`feed-block ${isVisible3 ? 'visible' : ''}`} ref={block3Ref}>
          <div className="image-block">
            <Image
              src="/images/elegant-1920s-craftsman-home-interior-woodwork.jpg"
              alt="Elegant Craftsman Interior"
              width={800}
              height={600}
            />
            <div className="caption">ELEGANT CRAFTSMAN INTERIOR</div>
          </div>
        </div>

        {/* Pricing and Warranties */}
        <div className={`feed-block ${isVisible4 ? 'visible' : ''}`} ref={block4Ref}>
          <div className="section-header">Pricing</div>
          <div className="split-text-block">
            <div className="editorial-col">
              <p className="editorial-text">
                Kitchen renovation costs vary based on scope, materials, and complexity. We provide detailed estimates tailored to your vision and budget.
              </p>
            </div>
            <div className="editorial-col">
              <p className="editorial-text">
                Kitchen renovations include comprehensive warranties on all workmanship and installations. Cabinetry and custom millwork carry a 5-year warranty for structural integrity.
              </p>
              <p className="editorial-text">
                Countertops, fixtures, and appliances are guaranteed for 2 years, ensuring your new kitchen maintains its beauty and functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Third Image Block */}
        <div className={`feed-block ${isVisible5 ? 'visible' : ''}`} ref={block5Ref}>
          <div className="image-block">
            <Image
              src="/images/tudor-revival-home-renovation-elegant-interior.jpg"
              alt="Tudor Revival Home Interior"
              width={800}
              height={600}
            />
            <div className="caption">TUDOR REVIVAL HOME INTERIOR</div>
          </div>
        </div>

        {/* FAQs */}
        <div className={`feed-block ${isVisible6 ? 'visible' : ''}`} ref={block6Ref}>
          <div className="section-header">Frequently Asked Questions</div>
          <div className="faq-item">
            <h3>Do you work with existing layouts?</h3>
            <p>Yes, we can work within existing footprints or create new layouts through reconfiguration.</p>
          </div>
          <div className="faq-item">
            <h3>What styles do you specialize in?</h3>
            <p>We excel in transitional designs that blend historic character with modern functionality.</p>
          </div>
          <div className="faq-item">
            <h3>Can you match existing finishes?</h3>
            <p>Yes, we carefully match or complement existing architectural details and finishes.</p>
          </div>
        </div>

        {/* Final CTA Overlay */}
        <div className={`feed-block ${isVisible7 ? 'visible' : ''}`} ref={block7Ref}>
          <div className="image-block">
            <Image
              src="/images/farmhouse-interior-rustic-beams-white-walls-modern.jpg"
              alt="Farmhouse Interior"
              width={800}
              height={600}
              className="dimmed-img"
            />
            <div className="final-cta-overlay">
              <h2>Ready to Renovate Your Kitchen?</h2>
              <p>Let's create the perfect kitchen that combines beauty, function, and timeless appeal.</p>
              <button className="primary-btn">Plan Your Kitchen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchens;