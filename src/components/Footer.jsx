import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Locations', path: '/locations' },
  ],
  resources: [
    { label: 'Employment', path: '/employment' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Supplier Portal', path: '/supplier-portal' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066CC] to-[#0071E3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <div className="font-bold text-xl">AAP Inc.</div>
                <div className="text-xs text-[#6E6E73]">World Class Manufacturing</div>
              </div>
            </div>
            <p className="text-[#A1A1A6] text-sm leading-relaxed">
              World-class American manufacturer specializing in metal stampings, weldments, and mechanical assemblies since 1993.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#A1A1A6]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-[#0071E3] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#A1A1A6]">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-[#0071E3] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-[#A1A1A6]">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0071E3] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-[#A1A1A6] mb-1">USA</div>
                    <a href="tel:+12485432427" className="text-white hover:text-[#0071E3] transition-colors">
                      +1 (248) 543-2427
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0071E3] mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="text-[#A1A1A6] mb-1">Mexico</div>
                    <a href="tel:+524441372100" className="text-white hover:text-[#0071E3] transition-colors">
                      +52 (444) 137-2100
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0071E3] mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@aapincorp.com" className="text-white hover:text-[#0071E3] transition-colors text-sm">
                    info@aapincorp.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2D2D2F]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6E6E73] text-sm">
            &copy; {new Date().getFullYear()} AAP Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#6E6E73] text-xs">
              IATF 16949 | ISO 14001 | NMSDC Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
