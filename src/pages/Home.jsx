import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cog,
  Wrench,
  Layers,
  Globe,
  Award,
  Shield,
  Leaf,
  Factory,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { CertificationBadges } from '../components/CertificationBadge'
import LogoCarousel from '../components/LogoCarousel'

// Company logos
import aapLogo from '../assets/images/company/aap.png'
import eapLogo from '../assets/images/company/eap.png'
import gapLogo from '../assets/images/company/gap.png'
import aapMexicoLogo from '../assets/images/company/aap-mexico.png'

const companyLogos = [
  { src: aapLogo, alt: 'Advanced Assembly Products, Inc.' },
  { src: eapLogo, alt: 'Emerging Advanced Products, L.L.C.' },
  { src: gapLogo, alt: 'Global Advanced Products, L.L.C.' },
  { src: aapMexicoLogo, alt: 'Advanced Assembly Products México' },
]

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const competencies = [
  {
    icon: Cog,
    title: 'Metal Stampings',
    description: 'Precision metal stampings with tight tolerances for automotive and industrial applications. From simple brackets to complex structural components.',
    link: '/products',
  },
  {
    icon: Wrench,
    title: 'Weldments',
    description: 'Expert welding capabilities including MIG, TIG, and robotic welding for durable, high-strength assemblies that meet stringent specifications.',
    link: '/products',
  },
  {
    icon: Layers,
    title: 'Mechanical Assemblies',
    description: 'Complete mechanical assembly solutions combining stampings, weldments, and purchased components into turnkey products.',
    link: '/products',
  },
]

const stats = [
  { value: '30+', label: 'Years of Excellence' },
  { value: '2', label: 'Global Facilities' },
  { value: '100%', label: 'Quality Commitment' },
  { value: '24/7', label: 'Customer Support' },
]

export default function Home() {
  const [logoIndex, setLogoIndex] = useState(0)
  const shuffledLogos = useMemo(() => shuffleArray(companyLogos), [])

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % shuffledLogos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [shuffledLogos])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/90 backdrop-blur-sm mb-6">
              World Class Manufacturing Since 1993
            </span>

            {/* Cycling Company Logos */}
            <div className="h-24 md:h-32 lg:h-40 mb-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={shuffledLogos[logoIndex].alt}
                  src={shuffledLogos[logoIndex].src}
                  alt={shuffledLogos[logoIndex].alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="h-full w-auto max-w-[80vw] md:max-w-[600px] object-contain drop-shadow-lg brightness-0 invert"
                />
              </AnimatePresence>
            </div>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed">
              Precision metal stampings, weldments, and mechanical assemblies for OEMs and Tier One automotive suppliers worldwide.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Explore Capabilities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white rounded-full font-medium transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Client Logos - Inside hero (hidden for now)
        <div className="absolute bottom-0 left-0 right-0">
          <LogoCarousel />
        </div>
        */}
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                About AAP Inc.
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                American Manufacturing Excellence
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Founded in 1993, AAP Inc. has grown into a world-class manufacturer serving the global automotive industry. With facilities in the USA and Mexico, we deliver precision-engineered solutions to OEMs and Tier One suppliers worldwide.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Our commitment to quality is demonstrated through our IATF 16949, ISO 14001, and NMSDC certifications, ensuring every product meets the highest standards.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Factory className="w-48 h-48 text-[var(--color-primary)]/20" />
                </div>
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -right-8 bg-[var(--color-surface)] rounded-2xl shadow-2xl p-6 border border-[var(--color-border)]">
                <div className="text-4xl font-bold text-[var(--color-primary)]">30+</div>
                <div className="text-[var(--color-text-secondary)]">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Our Expertise"
            title="Core Competencies"
            description="Comprehensive manufacturing solutions designed to meet the demanding requirements of the automotive industry."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {competencies.map((item, index) => (
              <Card
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
                linkText="View Capabilities"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] overflow-hidden flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-[#0066CC]/30" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                Innovation & Technology
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Driving Manufacturing Innovation
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                We continuously invest in state-of-the-art equipment and processes to deliver superior quality and efficiency. Our commitment to innovation keeps us at the forefront of manufacturing technology.
              </p>
              <ul className="space-y-4">
                {['Advanced robotic welding systems', 'Precision stamping presses', 'Integrated quality control', 'Lean manufacturing processes'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-[var(--color-text-primary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Quality Assured"
            title="Certified Excellence"
            description="Our certifications demonstrate our unwavering commitment to quality, environmental responsibility, and diversity."
          />

          <CertificationBadges />
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Global Reach"
            title="USA & Mexico Facilities"
            description="Strategically located facilities to serve our customers efficiently across North America and beyond."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Globe className="w-12 h-12 text-[var(--color-primary)] mb-6" />
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">USA Facility</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">Michigan, United States</p>
              <p className="text-[var(--color-primary)] font-medium">+1 (248) 543-2427</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[var(--color-bg-secondary)] rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <Globe className="w-12 h-12 text-[var(--color-primary)] mb-6" />
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Mexico Facility</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">San Luis Potosí, Mexico</p>
              <p className="text-[var(--color-primary)] font-medium">+52 (444) 137-2100</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-text-primary)] hover:opacity-80 text-[var(--color-bg)] rounded-full font-medium transition-all"
            >
              View All Locations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with World-Class Manufacturing?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss how AAP Inc. can support your manufacturing needs with precision, quality, and reliability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#F5F5F7] text-[#0066CC] rounded-full font-medium transition-all shadow-lg"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
