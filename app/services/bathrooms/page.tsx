"use client"
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import React from "react"
import Image from "next/image"

export default function BathroomsPage() {
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
        style={{ marginTop: '80px', backgroundImage: `url('/images/tudor-revival-home-renovation-elegant-interior.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bathroom Renovations</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Create serene, functional bathrooms that blend luxury, comfort, and period-appropriate design.
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
              <p className="text-3xl font-bold text-[#1B3A34]">$25k+</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Lead Time</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">3-6 Weeks</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Work On Site</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">1-3 Weeks</p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Luxury Fixtures</h3>
                <p className="text-[#CCCCCC]">
                  Premium faucets, hardware, and fixtures chosen for quality and style.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tile & Stone Work</h3>
                <p className="text-[#CCCCCC]">
                  Expert installation of natural stone, ceramic, or premium synthetic surfaces.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Vanity Design</h3>
                <p className="text-[#CCCCCC]">
                  Custom vanities with integrated sinks and thoughtful storage solutions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Shower Solutions</h3>
                <p className="text-[#CCCCCC]">
                  Walk-in showers, tub replacements, or custom shower enclosures.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Lighting & Mirrors</h3>
                <p className="text-[#CCCCCC]">
                  Ambient and task lighting with beautifully framed mirrors.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Accessibility Features</h3>
                <p className="text-[#CCCCCC]">
                  Universal design elements for comfort and safety at any age.
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
              Bathroom renovation costs depend on scope, fixtures, and materials.
              We provide transparent pricing with no hidden fees.
            </p>
            <button className="bg-[#1B3A34] text-black px-8 py-3 font-semibold hover:bg-[#B5A078] transition-colors">
              Get Bathroom Pricing
            </button>
          </div>
        </section>

        {/* WARRANTIES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Warranties</h2>
            <div className="space-y-8 text-[#CCCCCC]">
              <p>
                Bathroom renovations include comprehensive warranties on all installations and materials.
                Plumbing work carries a 5-year warranty for leak-free performance.
              </p>
              <p>
                Fixtures, tile work, and finishes are guaranteed for 2 years,
                ensuring your bathroom maintains its beauty and functionality.
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
                <h3 className="text-xl font-semibold mb-2">Can you work around my schedule?</h3>
                <p className="text-[#CCCCCC]">
                  Yes, we schedule work to minimize disruption, often completing projects in phases.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">Do you handle plumbing updates?</h3>
                <p className="text-[#CCCCCC]">
                  Absolutely, we provide complete plumbing services including pipe replacement and fixture installation.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">What about water damage prevention?</h3>
                <p className="text-[#CCCCCC]">
                  We include waterproofing and proper drainage solutions to prevent future water damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Bathroom Today</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Experience the luxury of a beautifully renovated bathroom designed for modern living.
            </p>
            <button className="bg-[#1B3A34] text-black px-10 py-4 font-semibold text-lg hover:bg-[#B5A078] transition-colors">
              Start Your Renovation
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
