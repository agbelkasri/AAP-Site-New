import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

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
            background: `linear-gradient(135deg, var(--glass-bg) 0%, var(--glass-bg-light) 100%)`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: `
              0 4px 30px var(--glass-shadow),
              inset 0 1px 1px var(--glass-inset-light),
              inset 0 -1px 1px var(--glass-inset-dark)
            `,
            border: '1px solid var(--glass-border)',
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
              background: `linear-gradient(135deg, var(--glass-bubble) 0%, var(--glass-bubble) 100%)`,
              boxShadow: `
                0 2px 10px var(--glass-bubble-shadow),
                0 4px 20px var(--glass-inset-dark),
                inset 0 1px 1px var(--glass-inset-light),
                inset 0 -1px 2px var(--glass-inset-dark)
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
                className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  color: hoveredIndex === index ? 'var(--nav-text-active)' : 'var(--nav-text)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                ref={el => itemRefs.current[index] = el}
                to={link.path}
                className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
                style={{
                  color: (location.pathname === link.path || hoveredIndex === index)
                    ? 'var(--nav-text-active)'
                    : 'var(--nav-text)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {link.label}
              </Link>
            )
          ))}

          {/* Theme Toggle - Desktop */}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo for Mobile */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold text-lg text-white">AAP Inc.</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Theme Toggle - Mobile */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full transition-colors"
              style={{
                background: 'var(--glass-bg-light)',
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
                background: `linear-gradient(135deg, var(--glass-bg) 0%, var(--glass-bg-light) 100%)`,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 4px 30px var(--glass-shadow)',
                border: '1px solid var(--glass-border)',
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
                      className="px-4 py-3 rounded-xl text-base font-medium transition-all"
                      style={{ color: 'var(--nav-text)' }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="px-4 py-3 rounded-xl text-base font-medium transition-all"
                      style={{
                        color: location.pathname === link.path ? 'var(--nav-text-active)' : 'var(--nav-text)',
                        background: location.pathname === link.path ? 'var(--glass-bubble)' : 'transparent',
                      }}
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
