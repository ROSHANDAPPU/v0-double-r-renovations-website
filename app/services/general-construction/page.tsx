"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GeneralConstructionPage() {
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
        style={{ marginTop: '80px', backgroundImage: `url('/images/craftsman-restoring-vintage-wooden-staircase-1920s.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">General Construction & Framing</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Solid foundations and expert framing for homes built to last.
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
              <p className="text-3xl font-bold text-[#1B3A34]">$50k+</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Lead Time</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">6-12 Weeks</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Work On Site</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">4-8 Weeks</p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Structural Integrity</h3>
                <p className="text-[#CCCCCC]">
                  Expert framing and foundation work ensuring long-term stability and safety.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Code Compliance</h3>
                <p className="text-[#CCCCCC]">
                  All work meets current building codes and standards for quality assurance.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Quality Materials</h3>
                <p className="text-[#CCCCCC]">
                  Premium lumber, concrete, and building materials for durable construction.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Custom Solutions</h3>
                <p className="text-[#CCCCCC]">
                  Tailored construction solutions for additions, renovations, and new builds.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Energy Efficiency</h3>
                <p className="text-[#CCCCCC]">
                  Modern insulation and framing techniques for energy-efficient homes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Load Bearing Support</h3>
                <p className="text-[#CCCCCC]">
                  Proper load distribution and support for multi-story constructions.
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
              Pricing varies based on project scope, materials, and complexity.
              Contact us for a detailed quote tailored to your construction needs.
            </p>
            <button className="bg-[#1B3A34] text-black px-8 py-3 font-semibold hover:bg-[#B5A078] transition-colors">
              Request a Quote
            </button>
          </div>
        </section>

        {/* WARRANTIES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Warranties</h2>
            <div className="space-y-8 text-[#CCCCCC]">
              <p>
                Our general construction work is backed by comprehensive warranties ensuring peace of mind.
                Structural elements carry a 10-year warranty, covering framing and foundational work.
              </p>
              <p>
                All construction materials and workmanship are guaranteed for 2 years,
                ensuring that your home maintains its integrity and value over time.
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
                <h3 className="text-xl font-semibold mb-2">Do you handle permits?</h3>
                <p className="text-[#CCCCCC]">
                  Yes, we assist with obtaining necessary permits and ensure all work complies with local building codes.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">How long does construction take?</h3>
                <p className="text-[#CCCCCC]">
                  Timeline depends on project size, but most general construction projects take 6-12 weeks from planning to completion.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">What materials do you use?</h3>
                <p className="text-[#CCCCCC]">
                  We use premium, code-approved materials including pressure-treated lumber, concrete, and steel reinforcements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Strong Foundations?</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Contact us today for expert general construction and framing services.
            </p>
            <button className="bg-[#1B3A34] text-black px-10 py-4 font-semibold text-lg hover:bg-[#B5A078] transition-colors">
              Get Started
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
