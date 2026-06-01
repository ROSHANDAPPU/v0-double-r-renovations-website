"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesMenu.module.css";

const services = [
  {
    slug: "bathrooms",
    name: "Historic Bathroom Remodel",
    description: "Preserving the intimacy of a historic home while upgrading essential functions. Our bathroom remodels respect original tile patterns and fixture placements, integrating modern plumbing and waterproofing systems discreetly behind the walls. We specialize in period-appropriate subway tile, hexagon floor mosaics, and restoring original cast iron tubs.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  },
  {
    slug: "kitchens",
    name: "Period-Appropriate Kitchens",
    description: "The kitchen is the heart of the home, but in a historic house, it shouldn't feel like a time capsule of the wrong decade. We design kitchens that honor the architectural era—whether that's Craftsman shaker cabinets or Victorian beadboard—while concealing modern appliances and providing ergonomic functionality for today's lifestyle.",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80",
  },
  {
    slug: "historic-houses-remodeling",
    name: "Historic ADU (Accessory Dwelling Unit)",
    description: "Adding an accessory structure to a historic property requires navigating strict Certificate of Appropriateness (COA) guidelines. We design and build detached ADUs, garage apartments, or studios that appear as if they were original outbuildings. We use matching rooflines, siding profiles, and window muntin patterns to ensure the new structure is a subordinate, respectful addition to the primary historic resource.",
    image: "https://i.pinimg.com/1200x/8e/9b/b1/8e9bb1f7a2df92158f8bcfd3bb693d11.jpg",
  },
  {
    slug: "general-construction",
    name: "Carriage Houses, Garages & Carports",
    description: "As seen in the Shaw Residence project, we specialize in building detached garages and carports that enhance rather than detract from historic curb appeal. We reject modern metal boxes in favor of structures featuring Hardie Shingle Shake, decorative brackets, and custom wood doors designed to house classic and collector vehicles with style.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1200&q=80",
  },
  {
    slug: "full-home-remodels",
    name: "Historic Preservation & Porch Restoration",
    description: "This is our foundation. We focus on preserving the \"historic look\" by salvaging and repairing original materials. Whether restoring a grand wraparound porch or replicating intricate millwork, we use traditional joinery techniques and high-quality wood species to bring aging architectural details back to life without erasing the patina of time.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    slug: "interior-painting",
    name: "Historic Home Painting & Prep",
    description: "Painting a historic home is not a cosmetic update; it is a preservation treatment. Our process involves careful surface preparation (scraping and sanding lead-safe practices), repair of damaged wood siding, and the application of high-quality primers and paints with a historic sheen. We help clients select colors from historically accurate palettes suitable for the home's architectural style and the McKinney Historic District guidelines.",
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