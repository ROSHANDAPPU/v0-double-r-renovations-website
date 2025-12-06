import React from 'react';
import './About.css';
import { Portfolio } from './portfolio';
import { CTA } from './cta';

const About = () => {
  return (
    <div className="about-page-container">

      {/* 1. THE STORY SECTION (Split Screen) */}
      <section className="about-story-section">

        {/* Left Side: Text */}
        <div className="story-content">
          <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white mb-6">
            Our Story
          </h2>
          <div className="story-body">
            <p>
              Drawing on decades of experience in historic restoration and architectural
              design, Double R Renovations was founded to bridge the gap between
              traditional craftsmanship and modern living.
              <br /><br />
              We believe that a home is more than just a structure; it is a living
              narrative. Our work is dedicated to preserving the soul of historic
              properties while seamlessly integrating the comfort and functionality
              required by contemporary life. From the intricate molding of a
              turn-of-the-century estate to the robust framing of a custom build,
              our approach remains the same: integrity, precision, and a timeless aesthetic.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="story-image-container relative">
          <img
            src="/craftsman-restoring-vintage-wooden-staircase-1920s.jpg"
            alt="Founder of Double R Renovations"
            className="story-img"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
            <h1 className="font-sans text-[14px] md:text-[16px] font-normal tracking-[0.35em] mb-4 md:mb-6 text-heritage-deep-green">
              ABOUT
            </h1>
            <p className="font-serif text-4xl md:text-6xl mb-4 md:mb-6">
              LEGACY
            </p>
            <p className="font-sans text-[14px] md:text-[16px] font-normal text-white/80 tracking-[0.2em]">
              Bridging historic integrity with modern living.
            </p>
          </div>
        </div>

      </section>


      {/* 2. OUR VALUES SECTION (3-Column Editorial Grid) */}
      <section className="values-section">
        <h2 className="values-title">Our Values</h2>

        <div className="values-grid">

          {/* Value 1 */}
          <div className="value-item">
            <span className="value-number">01</span>
            <h3>Historic Integrity First</h3>
            <p>
              We restore every home with deep respect for its original architecture,
              materials, and character. We do not erase history; we revive it.
            </p>
          </div>

          {/* Value 2 */}
          <div className="value-item">
            <span className="value-number">02</span>
            <h3>Craftsmanship Without Shortcuts</h3>
            <p>
              Every detail—from moldings to masonry—is executed by specialized
              trades who understand historic construction. Quality is our only metric.
            </p>
          </div>

          {/* Value 3 */}
          <div className="value-item">
            <span className="value-number">03</span>
            <h3>Modern Comfort, Classic Soul</h3>
            <p>
              We integrate modern systems and layouts while preserving the charm
              and story that make each home unique. The best of both worlds.
            </p>
          </div>

        </div>
      </section>

      {/* 3. RECURRING SECTIONS (Same as Homepage) */}
      <Portfolio backgroundColor="#1B3A34" />
      <CTA />

    </div>
  );
};

export default About;