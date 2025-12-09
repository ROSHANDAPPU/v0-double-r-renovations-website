"use client"
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import React from "react"
import Image from "next/image"

export default function InteriorPaintingPage() {
  return (
    <>
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[70px] md:h-[80px] bg-transparent">
        <div className="h-full px-6 md:px-10 lg:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="font-sans text-[13px] md:text-[14px] font-normal text-white tracking-[0.25em] uppercase"
          >
            Double R Renovations
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-[11px] font-sans font-normal tracking-[0.2em] uppercase">Back to Services</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ marginTop: '80px', backgroundImage: `url('/images/farmhouse-interior-rustic-beams-white-walls-modern.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Interior Painting & Finishes</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Transform your interiors with expert painting and finishing services that bring out the beauty of your home.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-black text-white p-6 md:p-10 relative overflow-hidden">

        {/* BOX WITH QUICK NUMBERS */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Est. Price</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">$15k+</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Lead Time</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">2-4 Weeks</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Work On Site</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">1-2 Weeks</p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Color Consultation</h3>
                <p className="text-[#CCCCCC]">
                  Professional color selection and consultation to create harmonious interior palettes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Premium Materials</h3>
                <p className="text-[#CCCCCC]">
                  High-quality paints, stains, and finishes chosen for durability and aesthetic appeal.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Surface Preparation</h3>
                <p className="text-[#CCCCCC]">
                  Expert surface preparation ensuring smooth, long-lasting finishes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Detail Work</h3>
                <p className="text-[#CCCCCC]">
                  Precise attention to trim, moldings, and architectural details.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Historic Finishes</h3>
                <p className="text-[#CCCCCC]">
                  Period-appropriate paints and techniques respecting historic homes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Eco-Friendly Options</h3>
                <p className="text-[#CCCCCC]">
                  Low-VOC and environmentally friendly paint options for healthier living spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-6">Pricing</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Interior painting costs vary based on room size, surface condition, and materials.
              We provide detailed estimates customized to your specific painting needs.
            </p>
            <button className="bg-[#1B3A34] text-black px-8 py-3 font-semibold hover:bg-[#B5A078] transition-colors">
              Get Painting Quote
            </button>
          </div>
        </section>

        {/* WARRANTIES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Warranties</h2>
            <div className="space-y-8 text-[#CCCCCC]">
              <p>
                Interior painting services include comprehensive warranties on workmanship and materials.
                Paint finishes carry a 3-year warranty against fading, cracking, and peeling.
              </p>
              <p>
                All painting and finishing work is guaranteed for 2 years,
                ensuring your interiors maintain their beauty and quality over time.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ’s */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">How long does interior painting take?</h3>
                <p className="text-[#CCCCCC]">
                  Most interior painting projects take 1-2 weeks depending on room size and complexity.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you work with historic homes?</h3>
                <p className="text-[#CCCCCC]">
                  Yes, we specialize in historic-appropriate paints and techniques that preserve architectural integrity.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">What paints do you use?</h3>
                <p className="text-[#CCCCCC]">
                  We use premium Benjamin Moore, Sherwin Williams, and period-appropriate paints for optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Interiors</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Let us bring new life to your home with expert painting and finishing services.
            </p>
            <button className="bg-[#1B3A34] text-black px-10 py-4 font-semibold text-lg hover:bg-[#B5A078] transition-colors">
              Start Your Project
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
