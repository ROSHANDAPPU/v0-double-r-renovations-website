"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FullHomeRemodelsPage() {
  return (
    <>
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[70px] md:h-[80px] bg-black/95 backdrop-blur-sm">
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
        style={{ marginTop: '80px', backgroundImage: `url('/images/elegant-1920s-craftsman-home-interior-woodwork.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Full-Home Remodels</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Complete home transformations that preserve character while embracing modern living.
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
              <p className="text-3xl font-bold text-[#1B3A34]">$150k+</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Lead Time</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">8-16 Weeks</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Work On Site</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">6-12 Weeks</p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Complete Renovation</h3>
                <p className="text-[#CCCCCC]">
                  End-to-end home remodeling from concept to completion, covering all rooms and systems.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Design Integration</h3>
                <p className="text-[#CCCCCC]">
                  Unified design approach ensuring cohesive aesthetics throughout the entire home.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Modern Amenities</h3>
                <p className="text-[#CCCCCC]">
                  Integration of contemporary features while maintaining historic character.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">System Upgrades</h3>
                <p className="text-[#CCCCCC]">
                  Electrical, plumbing, and HVAC improvements for modern comfort and efficiency.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Structural Enhancements</h3>
                <p className="text-[#CCCCCC]">
                  Foundation and framing improvements for long-term stability and safety.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Custom Finishes</h3>
                <p className="text-[#CCCCCC]">
                  Premium materials and finishes tailored to your style and budget.
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
              Full-home remodel pricing depends on scope, materials, and home size.
              Each project is uniquely priced based on your specific renovation goals.
            </p>
            <button className="bg-[#1B3A34] text-black px-8 py-3 font-semibold hover:bg-[#B5A078] transition-colors">
              Request a Consultation
            </button>
          </div>
        </section>

        {/* WARRANTIES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Warranties</h2>
            <div className="space-y-8 text-[#CCCCCC]">
              <p>
                Full-home remodels include comprehensive warranties covering all workmanship and materials.
                Structural improvements carry a 10-year warranty for your peace of mind.
              </p>
              <p>
                All finishes, installations, and systems are guaranteed for 2-5 years depending on the component,
                ensuring your renovated home maintains its quality and value.
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
                <h3 className="text-xl font-semibold mb-2">Can I live during the remodel?</h3>
                <p className="text-[#CCCCCC]">
                  Yes, we work efficiently to minimize disruption. Temporary living arrangements can be arranged if needed.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">How do you handle historic homes?</h3>
                <p className="text-[#CCCCCC]">
                  We specialize in preserving historic character while adding modern functionality and comfort.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">What's included in a full remodel?</h3>
                <p className="text-[#CCCCCC]">
                  Complete renovation covering kitchens, bathrooms, living spaces, systems, and exterior improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Complete Home Transformation?</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Let's discuss your vision for a fully renovated home that meets all your needs.
            </p>
            <button className="bg-[#1B3A34] text-black px-10 py-4 font-semibold text-lg hover:bg-[#B5A078] transition-colors">
              Start Your Remodel
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
