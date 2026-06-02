"use client"

import { useState, useEffect } from "react";
import { withBasePath } from "@/lib/basePath";
import { Header } from "@/components/header";
import { ServicesMenu } from "@/components/ServicesMenu";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={withBasePath('/images/services/hero.jpg')}
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1
            className={`font-sans text-[14px] md:text-[16px] font-normal tracking-[0.35em] mb-4 md:mb-6 text-heritage-deep-green transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            SERVICES
          </h1>
          <p
            className={`font-serif text-4xl md:text-6xl mb-4 md:mb-6 transition-all duration-700 delay-100 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            CRAFTSMANSHIP
          </p>
          <p
            className={`font-sans text-[14px] md:text-[16px] font-normal text-white/80 tracking-[0.2em] transition-all duration-700 delay-200 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Exacting standards for the discerning homeowner.
          </p>
        </div>
      </section>
      <ServicesMenu />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
