"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "CRAFTSMAN REVIVAL",
    description:
      "Nestled in the historic heart of Portland, this 1920s Craftsman bungalow has been meticulously restored to honor its original character. Rich woodwork, period-appropriate fixtures, and modern amenities blend seamlessly to create a home that celebrates its heritage while embracing contemporary living.",
    image: "/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 2,
    title: "VICTORIAN ELEGANCE",
    description:
      "A stately Victorian residence transformed with careful attention to architectural detail. Original crown moldings, restored hardwood floors, and custom millwork tell the story of craftsmanship spanning generations, while thoughtful updates ensure comfort for modern families.",
    image: "/victorian-home-interior-elegant-living-room-firepl.jpg",
  },
  {
    id: 3,
    title: "HERITAGE FARMHOUSE",
    description:
      "This century-old farmhouse has been lovingly renovated to preserve its rustic charm while introducing contemporary functionality. Exposed beams, reclaimed materials, and artisanal finishes create spaces that feel both timeless and fresh.",
    image: "/farmhouse-interior-rustic-beams-white-walls-modern.jpg",
  },
  {
    id: 4,
    title: "COLONIAL RESTORATION",
    description:
      "A distinguished Colonial home brought back to its former glory through extensive restoration work. Classic proportions, refined details, and a neutral palette create an atmosphere of understated elegance that honors the home's storied past.",
    image: "/colonial-home-interior-classic-elegant-entryway-st.jpg",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Subtle overlay for text legibility */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-200 z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all duration-200 z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>

      {/* Content Overlay - Bottom Center */}
      <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-10 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Project Title */}
          <h1
            className={`font-sans text-[14px] md:text-[16px] font-normal text-white tracking-[0.35em] mb-4 md:mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Project Description */}
          <p
            className={`font-sans text-[13px] md:text-[14px] font-normal text-white/90 leading-[1.8] max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Dot Pagination */}
        <div
          className={`flex items-center justify-center gap-2 mt-8 md:mt-10 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
