"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesMenu.module.css";

const services = [
  {
    slug: "general-construction",
    name: "General Construction & Framing",
    description: "Reliable structural work that forms the backbone of any home improvement project. This service covers essential framing, load bearing support, and solid foundational construction designed for long lasting performance.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    slug: "full-home-remodels",
    name: "Full-Home Remodels",
    description: "A complete transformation of interior spaces with thoughtful design choices, functional improvements, and modern aesthetics, tailored to bring a renewed identity to your home.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    description: "Custom kitchen upgrades that blend utility and refined style. From layout reconfiguration to cabinetry and lighting, this service enhances the heart of the home.",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80",
  },
  {
    slug: "bathrooms",
    name: "Bathrooms",
    description: "Upgraded bathrooms with improved comfort, durability, and visual appeal. This includes tile work, fixtures, storage optimization, and design touches suited to your space.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  },
  {
    slug: "interior-painting",
    name: "Interior Painting & Finishes",
    description: "A refined interior update with color choices, finish textures, and detail work. This service highlights the character of each room using cohesive tones and high quality materials.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  },
];

export function ServicesMenu() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="bg-black text-white py-24 flex items-center justify-center">
      <div 
        className="max-w-6xl w-full mx-4 bg-gradient-to-br from-[#122723] to-[#0a1714] border border-[#1b3a34]/35 shadow-2xl rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-500 hover:border-[#1b3a34]/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] mb-10 text-[#C5B388]/90">
              EXPLORE OUR SERVICES
            </h2>
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li
                  key={service.slug}
                  onMouseEnter={() => setActiveService(index)}
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="group flex items-center transition-all duration-300 gap-x-4"
                  >
                    <ArrowRight 
                      className={`w-6 h-6 transition-all duration-300 transform ${
                        activeService === index 
                          ? "translate-x-0 opacity-100 text-[#C5B388]" 
                          : "-translate-x-2 opacity-0 text-white"
                      }`} 
                    />
                    <span 
                      className={`font-serif text-2xl md:text-3xl lg:text-4xl transition-all duration-500 tracking-wide text-white transform ${
                        activeService === index 
                          ? "opacity-100 translate-x-1" 
                          : "opacity-35 translate-x-0 group-hover:opacity-60"
                      }`}
                    >
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[550px] hidden md:block rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/img">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`${styles.serviceImage} ${
                  activeService === index ? styles.active : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                  unoptimized
                />
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/65 border border-white/10 p-5 rounded-2xl transition-all duration-300">
                    <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-[#C5B388] uppercase block mb-1.5">
                      SERVICE DETAIL
                    </span>
                    <p className="text-[13px] leading-relaxed text-white/90 font-sans">
                      {service.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}