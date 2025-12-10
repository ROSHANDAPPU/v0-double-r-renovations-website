"use client";

import React, { RefObject, useRef } from "react";
import { VerticalText } from "./VerticalText";
import useIntersectionObserver from "./useIntersectionObserver";
import './portfolio.css';

const projects = [
  {
    id: 1,
    title: "Repulse Bay Residence",
    description: "A brief description of the project goes here to match the editorial style...",
    categories: ["RESIDENTIAL", "2024"],
    image: "https://images.adsttc.com/media/images/5d51/58a4/284d/d1bc/4500/0207/medium_jpg/浅水湾PULSA_中国香港__by_Aedas_03.jpg?1565612188",
    layout: "landscape",
  },
  {
    id: 2,
    title: "Kent Avenue Penthouse",
    description: "A brief description of the project goes here to match the editorial style...",
    categories: ["RESIDENTIAL", "2024"],
    image: "https://normcph.com/wp-content/uploads/2024/10/Norm-Architects_KENT-AVENUE_JBP_72-1.jpg",
    layout: "portrait",
  },
  {
    id: 3,
    title: "Fjord Boat House",
    description: "A brief description of the project goes here to match the editorial style...",
    categories: ["RESIDENTIAL", "2020"],
    image: "https://leibal.com/wp-content/uploads/2020/11/NORM_ARCHITECTS_FJORD_BOAT_HOUSE_18.jpg",
    layout: "portrait",
  },
  {
    id: 4,
    title: "Archipelago House",
    description: "A brief description of the project goes here to match the editorial style...",
    categories: ["RESIDENTIAL", "2020"],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3c0ae232537929.56899d7433d6f.jpg",
    layout: "landscape",
  },
  {
    id: 5,
    title: "Pavilion House",
    description: "A brief description of the project goes here to match the editorial style...",
    categories: ["RESIDENTIAL", "2021"],
    image: "https://normcph.com/wp-content/uploads/2023/10/NormArchitects_PavilionHouse_PhotoCredit_JonasBjerrePoulsen_LowRes_18.jpg",
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
