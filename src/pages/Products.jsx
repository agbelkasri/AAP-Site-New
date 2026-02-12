import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cog,
  Wrench,
  Layers,
  CheckCircle,
  Car,
  Truck,
  Factory,
  Settings,
  Ruler,
  Shield,
  Zap,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const products = [
  {
    id: 'metal-stampings',
    icon: Cog,
    title: 'Metal Stampings',
    description: 'Precision metal stampings engineered to meet the most demanding specifications in the automotive industry.',
    features: [
      'Progressive die stamping',
      'Transfer die operations',
      'Fine blanking capabilities',
      'Complex geometries',
      'Tight tolerance control',
      'High-volume production',
    ],
    materials: ['Steel', 'Stainless Steel', 'Aluminum', 'Copper', 'Brass'],
    applications: [
      'Structural components',
      'Brackets and mounts',
      'Heat shields',
      'Electrical connectors',
      'Body panels',
    ],
  },
  {
    id: 'weldments',
    icon: Wrench,
    title: 'Weldments',
    description: 'Expert welding capabilities delivering strong, durable assemblies for critical automotive applications.',
    features: [
      'MIG welding',
      'TIG welding',
      'Robotic welding',
      'Spot welding',
      'Projection welding',
      'Laser welding',
    ],
    materials: ['Carbon Steel', 'Stainless Steel', 'Aluminum', 'High-Strength Steel'],
    applications: [
      'Chassis components',
      'Suspension parts',
      'Exhaust systems',
      'Structural frames',
      'Safety components',
    ],
  },
  {
    id: 'mechanical-assemblies',
    icon: Layers,
    title: 'Mechanical Assemblies',
    description: 'Complete assembly solutions combining multiple components into ready-to-install products.',
    features: [
      'Sub-assembly integration',
      'Turnkey solutions',
      'Kitting services',
      'Sequenced delivery',
      'Just-in-time manufacturing',
      'Quality validation',
    ],
    materials: ['Mixed materials', 'Hardware integration', 'Purchased components'],
    applications: [
      'Engine components',
      'Transmission parts',
      'Interior assemblies',
      'Exterior trim',
      'Functional modules',
    ],
  },
]

const capabilities = [
  { icon: Ruler, title: 'Precision Tolerances', description: 'Tight tolerances to ±0.001"' },
  { icon: Settings, title: 'Press Capacity', description: 'Up to 800 tons stamping force' },
  { icon: Zap, title: 'Rapid Turnaround', description: 'Quick prototype to production' },
  { icon: Shield, title: 'Quality Assured', description: '100% inspection available' },
]

const industries = [
  { icon: Car, title: 'Automotive OEMs', description: 'Direct supply to major automotive manufacturers' },
  { icon: Truck, title: 'Tier One Suppliers', description: 'Supporting leading tier one suppliers globally' },
  { icon: Factory, title: 'Industrial Applications', description: 'Heavy equipment and industrial solutions' },
]

export default function Products() {
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
              Our Products
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              Manufacturing Excellence
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Precision-engineered metal stampings, weldments, and mechanical assemblies for the world's most demanding applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-[var(--color-bg)]' : 'bg-[var(--color-bg-secondary)]'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-2xl flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                  {product.title}
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Capabilities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                        <span className="text-[var(--color-text-secondary)] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Materials</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[var(--color-bg-tertiary)] rounded-full text-sm text-[var(--color-text-primary)]"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] rounded-3xl p-8 aspect-square flex flex-col justify-center">
                  <product.icon className="w-32 h-32 text-[#0066CC]/30 mx-auto mb-8" />
                  <h3 className="text-xl font-semibold text-white text-center mb-4">Applications</h3>
                  <ul className="space-y-3">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Capabilities Matrix */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Technical Specifications"
            title="Manufacturing Capabilities"
            description="State-of-the-art equipment and processes to meet your most demanding requirements."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{cap.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-[#1D1D1F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                subtitle="Quality First"
                title="World-Class Quality Assurance"
                description="Every product undergoes rigorous quality control to ensure it meets the highest standards."
                centered={false}
                light={true}
              />

              <div className="space-y-6">
                {[
                  { title: 'IATF 16949 Certified', desc: 'Automotive quality management system' },
                  { title: 'In-Process Inspection', desc: 'Continuous monitoring throughout production' },
                  { title: 'Final Inspection', desc: 'Comprehensive testing before shipment' },
                  { title: 'Traceability', desc: 'Full material and process traceability' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-[#0066CC] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="w-64 h-64 bg-gradient-to-br from-[#0066CC] to-[#0071E3] rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80">Quality Commitment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Markets We Serve"
            title="Industries Served"
            description="Trusted by leading manufacturers across multiple industries."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{industry.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{industry.description}</p>
              </motion.div>
            ))}
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
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Our engineering team is ready to help bring your product to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#F5F5F7] text-[#0066CC] rounded-full font-medium transition-all shadow-lg"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm"
              >
                Visit Our Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
