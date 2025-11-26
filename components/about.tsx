"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="fade-in">
            <span className="inline-block font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-[#1B3A34] mb-4">
              Our Story
            </span>
            <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] text-white mb-6">
              Restoring History, Building Futures
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-[17px] leading-[1.75] tracking-[0.01em] text-white">
                For over two decades, Double R Renovations has been at the forefront of historic home restoration. Our
                team of master craftsmen combines traditional techniques with modern precision to breathe new life into
                1920s-era homes.
              </p>
              <p className="font-sans text-[17px] leading-[1.75] tracking-[0.01em] text-white">
                We believe that every historic home tells a story. Our mission is to honor that narrative while creating
                spaces that meet the demands of contemporary living. From original millwork restoration to
                period-appropriate additions, we approach each project with reverence and expertise.
              </p>
              <p className="font-sans text-[17px] leading-[1.75] tracking-[0.01em] text-white">
                Based in the heart of America&apos;s most historic neighborhoods, we&apos;ve earned a reputation for
                excellence that spans generations of satisfied homeowners.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="/craftsman-restoring-vintage-wooden-staircase-1920s.jpg"
              alt="Master craftsman restoring vintage woodwork"
              fill
              className="object-cover brightness-90 hover:brightness-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
