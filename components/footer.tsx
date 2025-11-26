import Link from "next/link"

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Historic Restoration",
  "Period Additions",
  "Kitchen Renovation",
  "Bathroom Restoration",
  "Exterior Renovation",
  "Custom Millwork",
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#2a2a2a] pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block font-serif text-2xl font-semibold text-white mb-4">
              Double R Renovations
            </Link>
            <p className="font-sans text-[15px] leading-relaxed text-white max-w-[280px]">
              Preserving the past, building the future. Expert restoration of 1920s-era homes with contemporary
              precision.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-[#1B3A34] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[15px] text-white hover:text-[#1B3A34] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-[#1B3A34] mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-sans text-[15px] text-white">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-[0.1em] text-[#1B3A34] mb-5">Contact</h4>
            <address className="not-italic space-y-3 font-sans text-[15px] text-white">
              <p>123 Heritage Lane</p>
              <p>Dallas, Texas 75205</p>
              <p className="pt-2">
                <a href="tel:+12145551920" className="hover:text-[#1B3A34] transition-colors">
                  (214) 555-1920
                </a>
              </p>
              <p>
                <a href="mailto:info@doublerrenovations.com" className="hover:text-[#1B3A34] transition-colors">
                  info@doublerrenovations.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar - Copyright text changed to white/70 for subtle contrast */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Double R Renovations. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
