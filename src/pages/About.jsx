import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Leaf,
  Shield,
  TrendingUp,
  Lightbulb,
  CheckCircle,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { CertificationBadges } from '../components/CertificationBadge'

const timeline = [
  { year: '1993', title: 'Founded', description: 'AAP Inc. established in Michigan, USA with a vision for world-class manufacturing.' },
  { year: '2000', title: 'ISO Certified', description: 'Achieved first ISO certification, demonstrating commitment to quality.' },
  { year: '2010', title: 'Mexico Expansion', description: 'Opened manufacturing facility in San Luis Potosí, Mexico.' },
  { year: '2015', title: 'IATF 16949', description: 'Achieved IATF 16949 certification for automotive quality management.' },
  { year: '2020', title: 'Technology Investment', description: 'Major investment in robotic welding and automation systems.' },
  { year: 'Today', title: 'Global Leader', description: 'Continuing to serve OEMs and Tier One suppliers worldwide.' },
]

const values = [
  {
    icon: Target,
    title: 'Quality Excellence',
    description: 'Unwavering commitment to delivering products that exceed customer expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously improving our processes and capabilities through technology.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Building lasting partnerships through exceptional service and reliability.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Conducting business with honesty, transparency, and ethical standards.',
  },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" style={{ background: 'linear-gradient(to bottom right, var(--color-bg-secondary), var(--color-bg))' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-primary-gradient)]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              About AAP Inc.
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Three decades of manufacturing excellence, serving the world's leading automotive companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-[#1D1D1F]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eye className="w-16 h-16 text-[#0066CC] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              "Always striving to be the world class value provider to our global customers and stakeholders."
            </h2>
            <p className="text-xl text-white/60">— AAP Inc. Mission Statement</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                subtitle="Our Journey"
                title="From Vision to World-Class Reality"
                centered={false}
              />
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Founded in 1993, AAP Inc. began with a simple vision: to provide world-class manufacturing solutions to the automotive industry. What started as a small operation in Michigan has grown into a global manufacturing partner serving OEMs and Tier One suppliers across the world.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Our journey has been marked by continuous improvement, strategic expansion, and an unwavering commitment to quality. Today, with facilities in both the USA and Mexico, we deliver precision-engineered metal stampings, weldments, and mechanical assemblies that meet the demanding requirements of the automotive industry.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Our success is built on the foundation of our people, processes, and technology working together to exceed customer expectations every day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1993', label: 'Founded' },
                  { value: '30+', label: 'Years Experience' },
                  { value: '2', label: 'Facilities' },
                  { value: '100%', label: 'Quality Focus' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[var(--color-bg-secondary)] rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[var(--color-text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Our History"
            title="Key Milestones"
            description="A timeline of growth, achievement, and continuous improvement."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 lg:pr-12 lg:text-right hidden lg:block">
                    {index % 2 === 0 && (
                      <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-sm border border-[var(--color-border)]">
                        <div className="text-sm text-[var(--color-primary)] font-medium mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                        <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full hidden lg:block" />

                  <div className="flex-1 lg:pl-12 hidden lg:block">
                    {index % 2 !== 0 && (
                      <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-sm border border-[var(--color-border)]">
                        <div className="text-sm text-[var(--color-primary)] font-medium mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                        <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile View */}
                  <div className="lg:hidden w-full">
                    <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-sm border border-[var(--color-border)]">
                      <div className="text-sm text-[var(--color-primary)] font-medium mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-secondary)]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide everything we do at AAP Inc."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{value.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Quality Certified"
            title="Our Certifications"
            description="Recognized certifications that demonstrate our commitment to excellence."
          />

          <CertificationBadges />

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'IATF 16949',
                description: 'The international standard for automotive quality management systems, ensuring consistent quality across all our processes.',
              },
              {
                icon: Leaf,
                title: 'ISO 14001',
                description: 'Environmental management certification demonstrating our commitment to sustainable manufacturing practices.',
              },
              {
                icon: Shield,
                title: 'NMSDC',
                description: 'Certified member of the National Minority Supplier Development Council, promoting diversity in the supply chain.',
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)]"
              >
                <cert.icon className="w-12 h-12 text-[var(--color-primary)] mb-4" />
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{cert.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Technology */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                subtitle="Technology"
                title="Innovation & Continuous Improvement"
                centered={false}
              />
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                At AAP Inc., we believe that innovation is the key to maintaining our competitive edge. We continuously invest in state-of-the-art equipment, advanced processes, and employee development to deliver superior products and services.
              </p>

              <div className="space-y-4">
                {[
                  'Advanced robotic welding and automation',
                  'Precision stamping with tight tolerances',
                  'Integrated quality management systems',
                  'Lean manufacturing and continuous improvement',
                  'Employee training and development programs',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-[var(--color-text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] rounded-3xl p-12 text-center"
            >
              <TrendingUp className="w-24 h-24 text-[#0066CC] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Improvement</h3>
              <p className="text-white/70">
                Our kaizen culture ensures we're always finding better ways to serve our customers.
              </p>
            </motion.div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Discover how AAP Inc. can be your trusted manufacturing partner.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#F5F5F7] text-[#0066CC] rounded-full font-medium transition-all shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
