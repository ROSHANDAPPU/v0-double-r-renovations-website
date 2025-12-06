"use client";

import { useRef } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Portfolio } from "@/components/portfolio";
import InResidence from "@/components/InResidence";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import useIntersectionObserver from "@/components/useIntersectionObserver";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  const isHeroVisible = useIntersectionObserver(heroRef, { threshold: 0.5 });
  const isPortfolioVisible = useIntersectionObserver(portfolioRef, { threshold: 0.5 });

  const isRecentVisible = isHeroVisible || isPortfolioVisible;

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero sectionRef={heroRef} isVisible={isRecentVisible} />
      <Portfolio sectionRef={portfolioRef} isVisible={isRecentVisible} showVerticalText={true} />
      <BeforeAfterSlider />
      <InResidence />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
