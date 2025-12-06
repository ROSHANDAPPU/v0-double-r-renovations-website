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
    image: "/craftsman-restoring-vintage-wooden-staircase-1920s.jpg",
  },
  {
    slug: "full-home-remodels",
    name: "Full-Home Remodels",
    description: "A complete transformation of interior spaces with thoughtful design choices, functional improvements, and modern aesthetics, tailored to bring a renewed identity to your home.",
    image: "/elegant-1920s-craftsman-home-interior-woodwork.jpg",
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    description: "Custom kitchen upgrades that blend utility and refined style. From layout reconfiguration to cabinetry and lighting, this service enhances the heart of the home.",
    image: "/arts-and-crafts-cottage-kitchen-renovation-vintage.jpg",
  },
  {
    slug: "bathrooms",
    name: "Bathrooms",
    description: "Upgraded bathrooms with improved comfort, durability, and visual appeal. This includes tile work, fixtures, storage optimization, and design touches suited to your space.",
    image: "/tudor-revival-home-renovation-elegant-interior.jpg",
  },
  {
    slug: "interior-painting",
    name: "Interior Painting & Finishes",
    description: "A refined interior update with color choices, finish textures, and detail work. This service highlights the character of each room using cohesive tones and high quality materials.",
    image: "/farmhouse-interior-rustic-beams-white-walls-modern.jpg",
  },
];

export function ServicesMenu() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      className="bg-black text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 py-16 rounded-lg" style={{backgroundColor: '#1B3A34'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">EXPLORE OUR SERVICES</h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={service.slug}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <Link href={`/services/${service.slug}`} className="group flex items-center py-4 transition-all duration-300 gap-x-4">
                    <ArrowRight className={`text-white w-8 h-8 transition-all duration-300 ${activeService === index ? 'opacity-100' : 'opacity-50'}`} />
                    <span className={`text-4xl font-serif transition-all duration-300 group-hover:scale-105 group-hover:text-shadow-glow text-white ${activeService === index ? 'opacity-100' : 'opacity-50'}`}>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] hidden md:block rounded-lg overflow-hidden">
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
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded">
                    <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}