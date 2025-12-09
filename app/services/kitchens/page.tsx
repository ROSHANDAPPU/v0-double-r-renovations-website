"use client"
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import React from "react"
import Image from "next/image"

export default function KitchensPage() {
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
        style={{ marginTop: '80px', backgroundImage: `url('/images/arts-and-crafts-cottage-kitchen-renovation-vintage.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kitchen Renovations</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Transform your kitchen into the heart of your home with expert craftsmanship and modern design.
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
              <p className="text-3xl font-bold text-[#1B3A34]">$75k+</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Lead Time</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">4-8 Weeks</p>
            </div>
            <div className="border border-[#1B3A34] p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#CCCCCC] mb-3">Work On Site</h3>
              <p className="text-3xl font-bold text-[#1B3A34]">2-4 Weeks</p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Custom Cabinetry</h3>
                <p className="text-[#CCCCCC]">
                  Bespoke cabinet designs with premium materials and expert craftsmanship.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Appliance Integration</h3>
                <p className="text-[#CCCCCC]">
                  Seamless integration of modern appliances with period-appropriate styling.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Countertop Solutions</h3>
                <p className="text-[#CCCCCC]">
                  Granite, quartz, or custom surfaces chosen for durability and aesthetics.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Lighting Design</h3>
                <p className="text-[#CCCCCC]">
                  Task and ambient lighting solutions for functionality and ambiance.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Storage Optimization</h3>
                <p className="text-[#CCCCCC]">
                  Smart storage solutions maximizing space and organization.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Period Details</h3>
                <p className="text-[#CCCCCC]">
                  Authentic details and finishes respecting the home's architectural style.
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
              Kitchen renovation costs vary based on scope, materials, and complexity.
              We provide detailed estimates tailored to your vision and budget.
            </p>
            <button className="bg-[#1B3A34] text-black px-8 py-3 font-semibold hover:bg-[#B5A078] transition-colors">
              Get a Kitchen Quote
            </button>
          </div>
        </section>

        {/* WARRANTIES */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A34] mb-10 text-center">Warranties</h2>
            <div className="space-y-8 text-[#CCCCCC]">
              <p>
                Kitchen renovations include comprehensive warranties on all workmanship and installations.
                Cabinetry and custom millwork carry a 5-year warranty for structural integrity.
              </p>
              <p>
                Countertops, fixtures, and appliances are guaranteed for 2 years,
                ensuring your new kitchen maintains its beauty and functionality.
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
                <h3 className="text-xl font-semibold mb-2">Do you work with existing layouts?</h3>
                <p className="text-[#CCCCCC]">
                  Yes, we can work within existing footprints or create new layouts through reconfiguration.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">What styles do you specialize in?</h3>
                <p className="text-[#CCCCCC]">
                  We excel in transitional designs that blend historic character with modern functionality.
                </p>
              </div>
              <div className="border-b border-[#333333] pb-4">
                <h3 className="text-xl font-semibold mb-2">Can you match existing finishes?</h3>
                <p className="text-[#CCCCCC]">
                  Yes, we carefully match or complement existing architectural details and finishes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Renovate Your Kitchen?</h2>
            <p className="text-lg text-[#CCCCCC] mb-8">
              Let's create the perfect kitchen that combines beauty, function, and timeless appeal.
            </p>
            <button className="bg-[#1B3A34] text-black px-10 py-4 font-semibold text-lg hover:bg-[#B5A078] transition-colors">
              Plan Your Kitchen
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
