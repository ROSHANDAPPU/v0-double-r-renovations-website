"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"

const navLinks = [
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#services", label: "SERVICES" },
  { href: "#process", label: "PROCESS" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] md:h-[80px] transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="h-full px-6 md:px-10 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-[13px] md:text-[14px] font-normal text-white tracking-[0.25em] uppercase"
        >
          Double R Renovations
        </Link>

        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[11px] font-sans font-normal tracking-[0.2em] transition-opacity duration-200 hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden lg:flex items-center">
          <button className="text-white p-2 transition-opacity duration-200 hover:opacity-60" aria-label="Search">
            <Search size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-[70px] left-0 right-0 bg-black/98 backdrop-blur-sm py-8">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-[12px] font-sans font-normal tracking-[0.2em]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
