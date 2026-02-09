import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/locations', label: 'Locations' },
  { path: '/employment', label: 'Employment' },
  { path: '/contact', label: 'Contact' },
  { path: 'https://accounts.plex.com/interaction?clientId=B1371A12-25E2-4422-94ED-8E2983F81C66&ilp=sTcaEiXiRCKU7Y4pg_gcZmRvbWFpbj1jbG91ZC5wbGV4LmNvbQ&returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3FauthzId%3De4a1f1a3-c1dd-455f-aa7c-fbd2a9750b62#ie=1770240399422', label: 'Portal', external: true },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)
  const itemRefs = useRef([])
  const location = useLocation()

  // Get the active index based on current path
  const activeIndex = navLinks.findIndex(link => link.path === location.pathname)

  // Update bubble position
  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex
    if (targetIndex >= 0 && itemRefs.current[targetIndex]) {
      const item = itemRefs.current[targetIndex]
      const nav = navRef.current
      if (item && nav) {
        const navRect = nav.getBoundingClientRect()
        const itemRect = item.getBoundingClientRect()
        setBubbleStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
          opacity: 1,
        })
      }
    }
  }, [hoveredIndex, activeIndex, location.pathname])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Glass Navigation Bar */}
        <nav
          ref={navRef}
          className="relative hidden lg:flex items-center justify-center gap-1 px-2 py-2 rounded-full mx-auto w-fit"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: `
              0 4px 30px rgba(0, 0, 0, 0.1),
              inset 0 1px 1px rgba(255, 255, 255, 0.6),
              inset 0 -1px 1px rgba(0, 0, 0, 0.05)
            `,
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated Bubble */}
          <motion.div
            className="absolute top-2 bottom-2 rounded-full -z-10"
            initial={false}
            animate={{
              left: bubbleStyle.left,
              width: bubbleStyle.width,
              opacity: bubbleStyle.opacity,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: `
                0 2px 10px rgba(0, 0, 0, 0.1),
                0 4px 20px rgba(0, 0, 0, 0.05),
                inset 0 1px 1px rgba(255, 255, 255, 0.8),
                inset 0 -1px 2px rgba(0, 0, 0, 0.05)
              `,
            }}
          />

          {/* Nav Items */}
          {navLinks.map((link, index) => (
            link.external ? (
              <a
                key={link.path}
                ref={el => itemRefs.current[index] = el}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  hoveredIndex === index
                    ? 'text-[#1D1D1F]'
                    : 'text-[#1D1D1F]/70 hover:text-[#1D1D1F]'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                ref={el => itemRefs.current[index] = el}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path || hoveredIndex === index
                    ? 'text-[#1D1D1F]'
                    : 'text-[#1D1D1F]/70 hover:text-[#1D1D1F]'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo for Mobile */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#0066CC] to-[#0071E3] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold text-lg text-white">AAP Inc.</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full transition-colors"
            style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <nav className="p-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-xl text-base font-medium transition-all text-[#1D1D1F]/80 hover:bg-white/50"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        location.pathname === link.path
                          ? 'bg-white/80 text-[#1D1D1F]'
                          : 'text-[#1D1D1F]/80 hover:bg-white/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
