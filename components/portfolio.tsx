"use client";

import React, { RefObject, useRef } from "react";
import { VerticalText } from "./VerticalText";
import useIntersectionObserver from "./useIntersectionObserver";
import './portfolio.css';

const projects = [
  {
    id: 1,
    title: "1 Hotel Copenhagen",
    description: "A meticulous restoration, seamlessly integrating modern amenities while preserving original details.",
    categories: ["HOSPITALITY", "RESTORATION", "2024"],
    image: "/prairie-style-home-restoration-living-room-firepla.jpg",
    layout: "landscape",
  },
  {
    id: 2,
    title: "Galleri Sonja",
    description: "A comprehensive renovation, balancing historic authenticity with contemporary living.",
    categories: ["CULTURE", "RENOVATION", "2024"],
    image: "/elegant-1920s-craftsman-home-interior-woodwork.jpg",
    layout: "portrait",
  },
  {
    id: 4,
    title: "Guest House No. 16",
    description: "A sensitive expansion, honoring the original architecture while providing modern functionality.",
    categories: ["HOSPITALITY", "ADDITION", "2023"],
    image: "/georgian-colonial-home-grand-staircase-restoration.jpg",
    layout: "portrait",
  },
  {
    id: 5,
    title: "Joinery Stool",
    description: "Design | Furniture | 2025",
    categories: ["DESIGN", "FURNITURE", "2025"],
    image: "/spanish-colonial-home-courtyard-renovation.jpg",
    layout: "portrait",
  },
  {
    id: 6,
    title: "Strandgården",
    description: "Architecture | Residential | 2025",
    categories: ["ARCHITECTURE", "RESIDENTIAL", "2025"],
    image: "/victorian-home-interior-elegant-living-room-firepl.jpg",
    layout: "portrait",
  },
  {
    id: 7,
    title: "Audo House",
    description: "A place where architecture and interior design shape experience.",
    categories: ["ARCHITECTURE", "INTERIOR", "2025"],
    image: "/colonial-home-interior-classic-elegant-entryway-st.jpg",
    layout: "landscape",
  },
];

interface PortfolioProps {
  sectionRef?: RefObject<HTMLElement>;
  isVisible?: boolean;
  showVerticalText?: boolean;
  backgroundColor?: string;
}

export function Portfolio({ sectionRef: externalRef, isVisible: externalIsVisible, showVerticalText = false, backgroundColor = '#000' }: PortfolioProps) {
  const internalRef = useRef<HTMLElement>(null);
  const sectionRef = externalRef || internalRef;
  const isVisible = externalIsVisible !== undefined ? externalIsVisible : useIntersectionObserver(sectionRef, { threshold: 0.5 });

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="latest-work-section"
      style={{ backgroundColor }}
    >
      <div className={`flex justify-center transition-opacity duration-1000 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {showVerticalText && <VerticalText side="left" isVisible={isVisible} />}
        <div className="flex-grow max-w-none mx-auto px-4 md:px-12">
          <header className="text-center mb-[60px]">
            <h2 className="inline-block font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-white mb-4">
              Latest Work
            </h2>
            <p className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white">
              Showcasing timeless renovations
            </p>
          </header>

          <div className="gallery-row">
            {projects.slice(0, 3).map((project, index) => (
              <article
                key={project.id}
                className={`work-item ${project.title === "1 Hotel Copenhagen" ? "item-landscape" : "item-portrait"} group cursor-pointer transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-2">
                  <span className="text-[11px] uppercase text-gray-500">VIEW</span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="work-image"
                  />
                </div>
                <div className="text-content">
                  <h3 className="font-serif uppercase text-[14px] tracking-[2px] mb-[12px] text-white">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[12px] leading-[1.6] text-white mb-[15px]">
                    {project.description}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-[1px] underline text-white">
                    {project.categories.join(' | ')}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="gallery-row" style={{ marginTop: '80px' }}>
            {projects.slice(3, 6).map((project, index) => (
              <article
                key={project.id}
                className={`work-item ${project.title === "Audo House" ? "item-landscape" : "item-portrait"} group cursor-pointer transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="mb-2">
                  <span className="text-[11px] uppercase text-gray-500">VIEW</span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="work-image"
                  />
                </div>
                <div className="text-content">
                  <h3 className="font-serif uppercase text-[14px] tracking-[2px] mb-[12px] text-white">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[12px] leading-[1.6] text-white mb-[15px]">
                    {project.description}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-[1px] underline text-white">
                    {project.categories.join(' | ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {showVerticalText && <VerticalText side="right" isVisible={isVisible} />}
      </div>
    </section>
  );
}
