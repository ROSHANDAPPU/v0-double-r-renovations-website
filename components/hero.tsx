"use client"

import { useState, useEffect, useCallback, RefObject } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { VerticalText } from "./VerticalText"

const slides = [
  {
    id: 1,
    title: "CRAFTSMAN REVIVAL",
    description:
      "Nestled in the historic heart of Portland, this 1920s Craftsman bungalow has been meticulously restored to honor its original character. Rich woodwork, period-appropriate fixtures, and modern amenities blend seamlessly to create a home that celebrates its heritage while embracing contemporary living.",
    image: "https://media.houseandgarden.co.uk/photos/62e012c1260f7ae37edaa794/master/w_1600%2Cc_limit/MFOX8726.jpg",
  },
  {
    id: 2,
    title: "VICTORIAN ELEGANCE",
    description:
      "A stately Victorian residence transformed with careful attention to architectural detail. Original crown moldings, restored hardwood floors, and custom millwork tell the story of craftsmanship spanning generations, while thoughtful updates ensure comfort for modern families.",
    image: "https://images.ctfassets.net/3s5io6mnxfqz/5C3t8ALJh4KygvPnwhGTCr/51083d5d3ba71659e7653a5e4384a76a/victorian-interior-design-guide.jpeg?w=1920",
  },
  {
    id: 3,
    title: "HERITAGE FARMHOUSE",
    description:
      "This century-old farmhouse has been lovingly renovated to preserve its rustic charm while introducing contemporary functionality. Exposed beams, reclaimed materials, and artisanal finishes create spaces that feel both timeless and fresh.",
    image: "https://images.ctfassets.net/wlzmdirin2hy/4CdXvxkc2gZbfjO94w2yNJ/adc9b2b18f9ba118adb70ac9b0a09e13/LX_PNW80_HOM_Lawton_GARMAN_KM160-HDR-Edit.jpg?w=3840&q=100",
  },
  {
    id: 4,
    title: "COLONIAL RESTORATION",
    description:
      "A distinguished Colonial home brought back to its former glory through extensive restoration work. Classic proportions, refined details, and a neutral palette create an atmosphere of understated elegance that honors the home's storied past.",
    image: "https://www.boardandvellum.com/wp-content/uploads/2017/11/3x2-colonial_restoration_on_the_hill-foyer-cut_full.jpg",
  },
  {
    id: 5,
    title: "ARTS & CRAFTS KITCHEN",
    description:
      "A vintage kitchen renovation that combines Arts & Crafts styling with modern functionality. Handcrafted cabinets, period lighting, and contemporary appliances create a space that's both historically accurate and perfectly suited for today's lifestyle.",
    image: "https://st.hzcdn.com/simgs/pictures/kitchens/saint-paul-craftsman-david-heide-design-studio-img~4741fe870617f87a_14-6780-1-2d8717c.jpg",
  },
  {
    id: 6,
    title: "TUDOR REVIVAL",
    description:
      "An elegant Tudor revival home restored with meticulous attention to architectural authenticity. Intricate woodwork, stained glass, and period-appropriate finishes bring this historic style back to life for modern occupants.",
    image: "/images/tudor-revival-home-renovation-elegant-interior.jpg",
  },
  {
    id: 7,
    title: "SPANISH COLONIAL",
    description:
      "A beautiful Spanish Colonial courtyard renovation that preserves the architectural heritage of this distinctive style. Arched doorways, tile work, and lush landscaping create an oasis of Mediterranean charm in a modern setting.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 8,
    title: "GEORGIAN STAIRCASE",
    description:
      "A grand Georgian staircase restoration that serves as the centerpiece of this historic home. Meticulously carved woodwork and period-appropriate finishes restore the original grandeur while ensuring structural integrity.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 9,
    title: "PRAIRIE STYLE LIVING",
    description:
      "A Prairie Style home renovation that honors Frank Lloyd Wright's architectural principles. Horizontal lines, natural materials, and an organic connection to the landscape create a uniquely American aesthetic.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 10,
    title: "CRAFTSMAN BUNGALOW",
    description:
      "A charming 1920s Craftsman bungalow exterior restoration that maintains the original character while updating systems and finishes. The result is a home that looks as good as the day it was built.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 11,
    title: "ELEGANT CRAFTSMAN INTERIOR",
    description:
      "An elegant Craftsman interior featuring rich wood details and period-appropriate furnishings. The restoration work preserves the original architectural elements while creating comfortable, modern living spaces.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 12,
    title: "RICH WOODWORK CRAFTSMAN",
    description:
      "A Craftsman home showcasing rich woodwork and intricate detailing. The restoration highlights the craftsmanship of the original builders while providing the durability and comfort required by contemporary homeowners.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 13,
    title: "CRAFTSMAN STAIRCASE",
    description:
      "A vintage Craftsman staircase restoration that demonstrates the attention to detail required for historic preservation. Handcrafted elements and period-appropriate materials ensure authenticity and longevity.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 14,
    title: "VICTORIAN FIREPLACE",
    description:
      "A Victorian home interior featuring an elegant living room with a restored fireplace. The renovation work preserves the architectural integrity while updating the space for modern comfort and functionality.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 15,
    title: "FARMHOUSE BEAMS",
    description:
      "A farmhouse interior with rustic beams and modern white walls. The renovation balances historic charm with contemporary design, creating a space that's both comfortable and stylish.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 16,
    title: "COLONIAL ENTRYWAY",
    description:
      "A classic Colonial home interior with an elegant entryway. The restoration work maintains the traditional proportions and details while incorporating modern conveniences and updated systems.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 17,
    title: "ARTS & CRAFTS COTTAGE",
    description:
      "An Arts & Crafts cottage kitchen renovation that preserves the movement's emphasis on craftsmanship and natural materials. Handcrafted elements and period-appropriate design create a harmonious space.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 18,
    title: "TUDOR INTERIOR",
    description:
      "A Tudor revival home renovation featuring elegant interior details. The restoration work honors the architectural heritage of this distinctive style while providing modern comfort and functionality.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 19,
    title: "SPANISH COURTYARD",
    description:
      "A Spanish Colonial home courtyard renovation that creates a peaceful outdoor living space. The design incorporates traditional elements with modern landscaping and water features.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 20,
    title: "GEORGIAN STAIRCASE DETAIL",
    description:
      "Detailed restoration of a Georgian staircase showcasing intricate woodwork and architectural craftsmanship. The work ensures that historic elements are preserved for future generations.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
  {
    id: 21,
    title: "PRAIRIE FIREPLACE",
    description:
      "A Prairie Style home living room with a restored fireplace. The renovation emphasizes horizontal lines and natural materials, creating a warm and inviting space that reflects the movement's principles.",
    image: "/images/elegant-craftsman-home-interior-with-wood-details-.jpg",
  },
]

interface HeroProps {
  sectionRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

export function Hero({ sectionRef, isVisible }: HeroProps) {
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
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <VerticalText side="left" isVisible={isVisible} />
      <VerticalText side="right" isVisible={isVisible} />
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
