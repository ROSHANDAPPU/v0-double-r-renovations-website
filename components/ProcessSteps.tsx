"use client"
import { useRef } from "react"
import useIntersectionObserver from "./useIntersectionObserver"
import "./ProcessSteps.css"

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation & Historic Scouting",
    description: "Understanding the Structure & Vision: We begin with an in-depth discussion about your vision, lifestyle, and project goals. More importantly, we conduct a preliminary scouting assessment of your home to check for compliance with local historic district requirements, existing conditions of the foundation and framing, and potential construction permit hurdles before you invest in design.",
  },
  {
    step: 2,
    title: "Collaborative Design & Material Selection",
    description: "Selecting Period-Appropriate Materials: We work with you to finalize the design. This stage focuses on selecting materials that honor the home's era—choosing the correct profile of Hardie Shingle Shake, matching historic trim dimensions, or selecting tile that reflects the period. We ensure every component fits the architectural narrative.",
  },
  {
    step: 3,
    title: "Architectural Consultation",
    description: "Defining the Structural Narrative: For projects requiring additions or structural changes, we engage with a trusted architect experienced in historic homes. Together, we create plans that not only meet modern building codes but also satisfy the aesthetic requirements of the McKinney Historic Preservation Board.",
  },
  {
    step: 4,
    title: "COA & Permitting (Paperwork)",
    description: "Navigating Historic District Compliance: We manage the entire Certificate of Appropriateness (COA) application and building permit process. This includes preparing all documentation, attending board hearings if necessary, and ensuring compliance with all local ordinances so you can avoid delays and fines.",
  },
  {
    step: 5,
    title: "Precision Construction",
    description: "Craftsmanship Over Convenience: Construction begins with a focus on protecting the existing historic fabric. Using our in-house team (no outsourcing), we execute the work with 11+ years of specialized experience—whether it's repairing a Pier and Beam foundation, framing a new garage, or installing intricate tilework.",
  },
  {
    step: 6,
    title: "Client Walkthrough & Review",
    description: "Ensuring the Vision is Realized: Before final sign-off, we conduct a thorough walkthrough. We review the workmanship, the flow of the space, and ensure that the finished product matches the design intent and historic character we set out to preserve.",
  },
  {
    step: 7,
    title: "Final Touchups & Preservation Care",
    description: "The Last 1% Makes the Difference: We don't leave until the details are perfect. This final phase includes touchup paint on trim, adjusting historic door latches, and cleaning the site. We also provide guidance on how to maintain your newly restored or expanded historic home for the long term.",
  },
];

function ProcessStep({ step, title, description, index }: { step: number; title: string; description: string; index: number }) {
  const ref = useRef(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`process-card-wrapper transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="process-card">
        <div className="card-header">
          <span className="phase-label">PHASE 0{step}</span>
          <span className="step-number">0{step}</span>
        </div>
        <div className="card-content-box">
          <div className="accent-line" />
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function ProcessSteps() {
  return (
    <section className="process-section">
      <div className="process-container">
        <p className="process-eyebrow">OUR PROCESS</p>
        <h2 className="process-main-title">OUR PRESERVATION PROCESS</h2>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.step} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
