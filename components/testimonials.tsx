"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Double R Renovations transformed our 1922 bungalow into a masterpiece. They preserved every original detail while seamlessly integrating modern comforts. Their craftsmanship is unparalleled.",
    author: "Sarah & Michael Thompson",
    location: "Highland Park, Dallas",
  },
  {
    id: 2,
    quote:
      "Working with the Double R team was an absolute pleasure. Their deep knowledge of historic architecture and unwavering attention to detail made all the difference in our Tudor revival restoration.",
    author: "Elizabeth Morrison",
    location: "University Park, Texas",
  },
  {
    id: 3,
    quote:
      "From the initial assessment to the final walkthrough, Double R demonstrated expertise and integrity at every turn. Our 1920s home has never looked more beautiful—or functioned better.",
    author: "James & Patricia Chen",
    location: "Lakewood, Dallas",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center">
        {/* Section Header */}
        <div className="mb-12 fade-in">
          <span className="inline-block font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-[#1B3A34] mb-4">
            Testimonials
          </span>
          <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="fade-in relative">
          <blockquote className="mb-8">
            <p className="font-serif text-[24px] md:text-[32px] font-normal italic leading-[1.5] text-white">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
          </blockquote>
          <div className="font-sans text-[15px] text-white">
            <span className="text-white font-medium">{testimonials[currentIndex].author}</span>
            <span className="mx-2">—</span>
            <span className="text-white/70">{testimonials[currentIndex].location}</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prevTestimonial}
              className="p-2 border border-[#2a2a2a] text-white hover:border-[#1B3A34] hover:text-[#1B3A34] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#1B3A34]" : "bg-[#2a2a2a]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 border border-[#2a2a2a] text-white hover:border-[#1B3A34] hover:text-[#1B3A34] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
