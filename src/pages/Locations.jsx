import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Building,
  Cog,
  Wrench,
  CheckCircle,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const locations = [
  {
    id: 'usa',
    country: 'United States',
    city: 'Michigan',
    flag: '🇺🇸',
    address: 'Michigan, USA',
    phone: '+1 (248) 543-2427',
    phoneLink: 'tel:+12485432427',
    email: 'usa@aapinc.com',
    capabilities: [
      'Metal Stampings',
      'Weldments',
      'Mechanical Assemblies',
      'Engineering Support',
      'Quality Lab',
      'Tooling',
    ],
    features: [
      'State-of-the-art stamping presses',
      'Robotic welding cells',
      'Advanced quality inspection',
      'On-site engineering team',
    ],
  },
  {
    id: 'mexico',
    country: 'Mexico',
    city: 'San Luis Potosí',
    flag: '🇲🇽',
    address: 'San Luis Potosí, Mexico',
    phone: '+52 (444) 137-2100',
    phoneLink: 'tel:+524441372100',
    email: 'mexico@aapinc.com',
    capabilities: [
      'Metal Stampings',
      'Weldments',
      'Mechanical Assemblies',
      'Sub-Assembly',
      'Quality Control',
      'Logistics',
    ],
    features: [
      'Strategic USMCA location',
      'Modern manufacturing facility',
      'Skilled workforce',
      'Efficient logistics hub',
    ],
  },
]

export default function Locations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-white pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#0066CC]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0071E3]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#0066CC]/10 text-[#0066CC] mb-6">
              Our Facilities
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              Global Locations
            </h1>
            <p className="text-xl text-[#6E6E73] max-w-3xl mx-auto">
              Strategically positioned facilities in the USA and Mexico to serve our customers efficiently across North America and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="North American Presence"
            title="USA & Mexico Operations"
            description="Two state-of-the-art facilities working together to deliver world-class manufacturing solutions."
          />

          {/* Visual Map Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] rounded-3xl p-8 md:p-16 mb-16 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* USA Location Pin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🇺🇸</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">USA</h3>
                <p className="text-white/60">Michigan</p>
              </motion.div>

              {/* Connection Line */}
              <div className="hidden md:block w-32 h-px bg-gradient-to-r from-[#0066CC] to-[#0071E3]" />
              <div className="md:hidden h-16 w-px bg-gradient-to-b from-[#0066CC] to-[#0071E3]" />

              {/* Globe Icon */}
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Globe className="w-8 h-8 text-[#0066CC]" />
              </div>

              {/* Connection Line */}
              <div className="hidden md:block w-32 h-px bg-gradient-to-r from-[#0071E3] to-[#0066CC]" />
              <div className="md:hidden h-16 w-px bg-gradient-to-b from-[#0071E3] to-[#0066CC]" />

              {/* Mexico Location Pin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🇲🇽</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Mexico</h3>
                <p className="text-white/60">San Luis Potosí</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Cards */}
      {locations.map((location, index) => (
        <section
          key={location.id}
          id={location.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-[#F5F5F7]' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-start`}>
              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{location.flag}</span>
                  <div>
                    <h2 className="text-4xl font-bold text-[#1D1D1F]">{location.country}</h2>
                    <p className="text-[#6E6E73] text-lg">{location.city}</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E8ED] mb-8">
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#0066CC]" />
                      </div>
                      <span className="text-[#1D1D1F]">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#0066CC]" />
                      </div>
                      <a href={location.phoneLink} className="text-[#0066CC] hover:underline font-medium">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#0066CC]" />
                      </div>
                      <a href={`mailto:${location.email}`} className="text-[#0066CC] hover:underline">
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-4">Facility Capabilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.capabilities.map((cap, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white rounded-full text-sm text-[#1D1D1F] border border-[#E8E8ED]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] rounded-3xl p-8 h-full">
                  <Building className="w-16 h-16 text-[#0066CC] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-6">Facility Highlights</h3>
                  <div className="space-y-4">
                    {location.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 text-white/60">
                      <Clock className="w-5 h-5" />
                      <span>Operating 24/7 to meet your needs</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Two Locations */}
      <section className="py-24 bg-[#1D1D1F]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Strategic Advantage"
            title="Why USA & Mexico?"
            description="Our dual-facility approach provides strategic advantages for our customers."
            light={true}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'USMCA Benefits',
                description: 'Take advantage of the United States-Mexico-Canada Agreement for optimized trade.',
              },
              {
                icon: Cog,
                title: 'Flexible Capacity',
                description: 'Scalable production across two facilities to meet varying demand requirements.',
              },
              {
                icon: Wrench,
                title: 'Redundancy',
                description: 'Business continuity through dual-source manufacturing capabilities.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <item.icon className="w-12 h-12 text-[#0066CC] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
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
              Visit Our Facilities
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Schedule a tour to see our world-class manufacturing capabilities firsthand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#F5F5F7] text-[#0066CC] rounded-full font-medium transition-all shadow-lg"
            >
              Schedule a Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
