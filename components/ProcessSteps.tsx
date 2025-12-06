"use client"
import { useRef } from "react"
import useIntersectionObserver from "./useIntersectionObserver"

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We begin with an in-depth discussion about your vision, lifestyle, budget, and project goals. This collaborative session helps us understand your unique needs and preferences.",
  },
  {
    step: 2,
    title: "Space Assessment & Measurements",
    description: "Our team conducts a thorough analysis of your space, taking precise measurements and evaluating structural elements, lighting, and existing features.",
  },
  {
    step: 3,
    title: "Design Development",
    description: "We create detailed design concepts, mood boards, and 3D visualizations that bring your vision to life, incorporating your feedback at every stage.",
  },
  {
    step: 4,
    title: "Material Selection & Sourcing",
    description: "We curate premium materials, finishes, furniture, and fixtures that align with your design aesthetic and quality standards.",
  },
  {
    step: 5,
    title: "Project Planning & Coordination",
    description: "Detailed project timelines, contractor coordination, and permit management ensure smooth execution from start to finish.",
  },
  {
    step: 6,
    title: "Installation & Final Reveal",
    description: "Professional installation, styling, and final walkthrough to ensure every detail exceeds your expectations.",
  },
];

function ProcessStep({ step, title, description, index }: { step: number; title: string; description: string; index: number }) {
  const ref = useRef(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative w-full h-64 cursor-pointer group overflow-hidden bg-black border rounded-lg p-6 flex flex-col justify-center items-center transition-all duration-300 hover:shadow-lg hover:shadow-heritage-deep-green/50" style={{borderColor: '#1B3A34'}}>
        {/* Front */}
        <div className="transition-opacity duration-500 group-hover:opacity-0">
          <div className="font-serif font-bold text-[48px] mb-4" style={{color: '#1B3A34'}}>{`0${step}`}</div>
          <h3 className="font-serif font-semibold text-[24px] text-white text-center">{title}</h3>
        </div>
        {/* Back */}
        <div className="absolute inset-0 p-6 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-gray-400 text-center">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function ProcessSteps() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-center mb-4" style={{color: '#1B3A34'}}>Our Process</p>
        <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-center mb-12 text-white">OUR REMODELLING PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.step} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
