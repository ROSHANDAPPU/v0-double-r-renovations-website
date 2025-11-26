"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Historic Assessment",
    description:
      "We begin with a comprehensive evaluation of your home's architectural significance, structural integrity, and restoration potential. Our experts document original features and identify preservation priorities.",
  },
  {
    number: "02",
    title: "Thoughtful Design",
    description:
      "Our design team creates detailed plans that honor your home's heritage while incorporating modern amenities. We collaborate closely with you to ensure every detail reflects your vision.",
  },
  {
    number: "03",
    title: "Masterful Execution",
    description:
      "Our skilled craftsmen bring the design to life using traditional techniques and premium materials. We maintain rigorous quality standards from foundation to finish.",
  },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-black border-y border-[#2a2a2a]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-[#1B3A34] mb-4">
            How We Work
          </span>
          <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white">
            Our Restoration Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <div key={step.number} className="fade-in" style={{ transitionDelay: `${index * 0.15}s` }}>
              <span className="block font-serif font-bold text-[48px] text-[#1B3A34] mb-4">{step.number}</span>
              <h3 className="font-serif font-semibold text-[24px] text-white mb-3">{step.title}</h3>
              <p className="font-sans text-base leading-[1.7] text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
