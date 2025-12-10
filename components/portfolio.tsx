"use client";

import React, { RefObject, useRef } from "react";
import { VerticalText } from "./VerticalText";
import useIntersectionObserver from "./useIntersectionObserver";
import './portfolio.css';

const projects = [
  {
    id: 1,
    title: "The Tudor Revival",
    description: "A classic 1920s brick Tudor home where we restored the exterior masonry but opened up the back with modern steel-framed windows, blending historic charm with contemporary functionality.",
    categories: ["RESIDENTIAL", "RESTORATION", "1926"],
    image: "https://www.sunset.com/wp-content/uploads/tudor-exterior-arterberry-cooke-pc-gavin-cater.jpg",
    layout: "landscape",
  },
  {
    id: 2,
    title: "The Prohibition Loft",
    description: "An old industrial building from 1924 converted into a stunning living space. Exposed original brick walls painted white, contrasting with sleek black modern kitchen cabinets in this adaptive reuse masterpiece.",
    categories: ["HOSPITALITY", "ADAPTIVE REUSE", "1924"],
    image: "https://media.vrbo.com/lodging/84000000/83450000/83448800/83448744/af8549cc.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    layout: "portrait",
  },
  {
    id: 3,
    title: "The Craftsman Bungalow",
    description: "A focused restoration of detailed woodwork in a 1922 Craftsman home. The intricate staircase features stained woodwork in a deep, rich color, paired with modern minimalist furniture for timeless elegance.",
    categories: ["RESIDENTIAL", "RENOVATION", "1922"],
    image: "https://cdn.vox-cdn.com/thumbor/AfNC-ZaVF2mtc1zsFCH8lffsZ-c=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19565702/4570_University_Ave____Pierre_Galant_1.jpg",
    layout: "portrait",
  },
  {
    id: 4,
    title: "The Art Deco Manor",
    description: "A wide shot of a 1928 living room with geometric molding and arched doorways, featuring contemporary light fixtures and furniture. High contrast styling honors the Art Deco heritage while embracing modern luxury.",
    categories: ["RESIDENTIAL", "RESTORATION", "1928"],
    image: "https://swanarchitecture.com/images/projects/art-deco-house/05_Art-Deco-House.jpg",
    layout: "landscape",
  },
  {
    id: 5,
    title: "The Georgian Estate",
    description: "A vertical shot of a grand entryway in this 1921 Georgian home. The historic bones remain intact, but fresh paint and crisp lighting create a space that feels both timeless and contemporary.",
    categories: ["RESIDENTIAL", "RESTORATION", "1921"],
    image: "https://design-milk.com/images/2025/07/Pulso-Hotel-Praca-Henrique-Monteiro-Arthur-Casas-1.jpg",
    layout: "portrait",
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
                className={`work-item ${project.layout === "landscape" ? "item-landscape" : "item-portrait"} group cursor-pointer transition-all duration-700 ease-out ${
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
            {projects.slice(3).map((project, index) => (
              <article
                key={project.id}
                className={`work-item ${project.layout === "landscape" ? "item-landscape" : "item-portrait"} group cursor-pointer transition-all duration-700 ease-out ${
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
