"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Craftsman Bungalow",
    description:
      "In the heart of Highland Park, this 1920s craftsman bungalow underwent a meticulous restoration. Every original detail was carefully preserved while modern amenities were seamlessly integrated throughout.",
    categories: ["RESTORATION", "RESIDENTIAL", "2024"],
    image: "/restored-1920s-craftsman-bungalow-exterior-white-t.jpg",
  },
  {
    id: 2,
    title: "Tudor Revival Estate",
    description:
      "A comprehensive renovation of a distinguished Tudor Revival estate in University Park. The project balanced historic authenticity with contemporary living requirements.",
    categories: ["RENOVATION", "RESIDENTIAL", "2024"],
    image: "/tudor-revival-home-renovation-elegant-interior.jpg",
  },
  {
    id: 3,
    title: "Prairie Style Residence",
    description:
      "This Oak Cliff prairie style home stands as a testament to thoughtful restoration. The interior unfolds as a composition of horizontal lines and natural materials.",
    categories: ["RESTORATION", "RESIDENTIAL", "2023"],
    image: "/prairie-style-home-restoration-living-room-firepla.jpg",
  },
  {
    id: 4,
    title: "Spanish Colonial Revival",
    description:
      "Amid the tree-lined streets of Lakewood, this Spanish Colonial Revival was sensitively expanded. The period addition honors the original architecture while providing modern functionality.",
    categories: ["ADDITION", "RESIDENTIAL", "2023"],
    image: "/spanish-colonial-home-courtyard-renovation.jpg",
  },
  {
    id: 5,
    title: "Georgian Colonial Manor",
    description:
      "A grand Georgian Colonial in Preston Hollow restored to its original splendor. The project celebrates classical proportions and refined craftsmanship throughout.",
    categories: ["RESTORATION", "RESIDENTIAL", "2023"],
    image: "/georgian-colonial-home-grand-staircase-restoration.jpg",
  },
  {
    id: 6,
    title: "Arts & Crafts Cottage",
    description:
      "This charming M Streets cottage embraces the Arts & Crafts philosophy. Every detail within is guided by intention as the interior unfolds as a study in warmth.",
    categories: ["RENOVATION", "RESIDENTIAL", "2022"],
    image: "/arts-and-crafts-cottage-kitchen-renovation-vintage.jpg",
  },
]

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      { threshold: 0 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="relative" style={{ backgroundColor: "#1B3A34" }}>
      <div
        className={`hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
          isInView ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span
          className="text-[11px] font-sans tracking-[0.3em] text-white/60"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          RECENT
        </span>
      </div>

      <div
        className={`hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
          isInView ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-[11px] font-sans tracking-[0.3em] text-white/60" style={{ writingMode: "vertical-rl" }}>
          RECENT
        </span>
      </div>

      <div className="sticky top-0 z-0 h-screen flex items-center justify-center pointer-events-none">
        <h2 className="font-sans text-[13px] md:text-[14px] font-normal uppercase tracking-[0.35em] text-white/80">
          Latest Work
        </h2>
      </div>

      <div className="relative z-10 -mt-[50vh] pb-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="fade-in group cursor-pointer"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Image Container - Tall aspect ratio */}
                <div className="relative aspect-[4/5] overflow-hidden mb-8">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Project Info */}
                <div>
                  {/* Title */}
                  <h3 className="font-sans text-[18px] md:text-[20px] font-normal uppercase tracking-[0.2em] mb-4 text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[14px] md:text-[15px] leading-[1.8] font-normal mb-5 text-white/80">
                    {project.description}
                  </p>

                  {/* Categories */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.categories.map((category, catIndex) => (
                      <span key={catIndex} className="flex items-center gap-2">
                        <span className="font-sans text-[11px] font-normal uppercase tracking-[0.15em] text-white/50">
                          {category}
                        </span>
                        {catIndex < project.categories.length - 1 && <span className="text-white/30">|</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
