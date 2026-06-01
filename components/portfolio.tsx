"use client";

import React, { RefObject, useRef } from "react";
import { VerticalText } from "./VerticalText";
import useIntersectionObserver from "./useIntersectionObserver";
import './portfolio.css';

const projects = [
  {
    id: 1,
    title: "The Shaw Carriage House & Outdoor Living",
    description: "A comprehensive exterior transformation designed for the classic car enthusiast. This project included a new 24'x32' garage and a 20'x24' carport featuring custom Hardie Shingle Shake siding to match the historic texture of the main residence. The restoration was completed with a full foundation skirting, extensive exterior carpentry replacement, and the addition of a 20'x12' Trex deck and a stained 20'x20' concrete patio, creating a seamless blend of preservation and functional outdoor space.",
    categories: ["EXTERIOR", "CARRIAGE HOUSE", "OUTDOOR LIVING"],
    image: "https://www.sunset.com/wp-content/uploads/tudor-exterior-arterberry-cooke-pc-gavin-cater.jpg",
    layout: "landscape",
  },
  {
    id: 2,
    title: "The Roberts Historic Interior Reconfiguration",
    description: "This interior gut remodel focused on reclaiming privacy and flow in a historic home while preserving its original charm. The project featured a full kitchen renovation and a strategic master bedroom reconfiguration—relocating a doorway to create a private retreat. The work included a full bathroom remodel, fresh front face painting to boost curb appeal, and the addition of a small Trex deck, proving that thoughtful modern updates can respect the original footprint.",
    categories: ["INTERIOR", "KITCHEN", "BATHROOM"],
    image: "https://media.vrbo.com/lodging/84000000/83450000/83448800/83448744/af8549cc.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    layout: "portrait",
  },
  {
    id: 3,
    title: "The Dowell Exterior Envelope Restoration",
    description: "A meticulous exterior preservation eﬀort focusing on the critical details that protect a historic structure. This project involved comprehensive carpentry repair, the installation of new Hardie Soﬃt for proper attic ventilation, and a full exterior painting package. By using period-appropriate color palettes and durable materials, we revitalized the home's weather barrier while enhancing its historic curb presence.",
    categories: ["EXTERIOR", "PRESERVATION", "CARPENTRY"],
    image: "https://cdn.vox-cdn.com/thumbor/AfNC-ZaVF2mtc1zsFCH8lffsZ-c=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19565702/4570_University_Ave____Pierre_Galant_1.jpg",
    layout: "portrait",
  },
  {
    id: 4,
    title: "The Neal Master Suite & Foundation Overhaul",
    description: "A complex restoration addressing both luxury and structural integrity. In the master bathroom, we performed a full tile remodel of the shower surround, walls, and flooring. Beneath the surface, we executed a critical Pier and Beam foundation repair to level the home, followed by the repair of all cracked sheetrock and fresh paint on all window and door trim. This project also included the construction of a new ADU, designed to match the scale and detailing of the main historic house.",
    categories: ["ADDITION", "FOUNDATION", "BATHROOM"],
    image: "https://swanarchitecture.com/images/projects/art-deco-house/05_Art-Deco-House.jpg",
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
  const isVisible = externalIsVisible !== undefined ? externalIsVisible : useIntersectionObserver(sectionRef, { threshold: 0.1 });

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
