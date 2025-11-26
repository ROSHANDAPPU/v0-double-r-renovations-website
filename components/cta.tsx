"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function CTA() {
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
      { threshold: 0.15 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-black border-y border-[#2a2a2a] text-center">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        <div className="fade-in">
          <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white mb-4">
            Ready to Restore Your Historic Home?
          </h2>
          <p className="font-sans text-lg md:text-xl text-white mb-12">
            Let&apos;s discuss how we can bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#contact"
              className="bg-[#1B3A34] text-white px-10 py-[18px] font-sans font-medium text-sm uppercase tracking-[0.1em] transition-all duration-400 hover:bg-[#2A574E] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(27,58,52,0.4)]"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="#portfolio"
              className="bg-transparent text-white px-10 py-[18px] font-sans font-medium text-sm uppercase tracking-[0.1em] border border-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
