import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  LogIn,
  Shield,
  FileText,
  Package,
  Clock,
  HelpCircle,
  Mail,
  Phone,
  ArrowRight,
  Lock,
} from 'lucide-react'

export default function SupplierPortal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0071E3]/10 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMCAyOCAyOCAwIDEgMC01NiAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0071E3] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm mb-6">
              Supplier Resources
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Supplier Portal
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Access the Plex portal for supplier information, documentation, and collaboration tools.
            </p>

            {/* Portal Login Button - Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-block"
            >
              <button
                disabled
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 text-white/50 rounded-2xl font-medium cursor-not-allowed border border-white/10"
              >
                <Lock className="w-6 h-6" />
                <span className="text-lg">Portal Access Coming Soon</span>
              </button>
              <p className="mt-4 text-white/40 text-sm">
                Plex UX integration will be available soon
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
              Portal Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
              What You'll Find Here
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Once active, the supplier portal will provide access to essential resources and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: 'Documentation',
                description: 'Access specifications, drawings, and quality requirements.',
              },
              {
                icon: Package,
                title: 'Orders & Shipments',
                description: 'View purchase orders and track shipment status.',
              },
              {
                icon: Clock,
                title: 'Scheduling',
                description: 'Review delivery schedules and forecasts.',
              },
              {
                icon: Shield,
                title: 'Quality Portal',
                description: 'Submit quality documentation and certifications.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Card */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 text-center border border-[var(--color-border)] shadow-sm"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary-gradient)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <LogIn className="w-12 h-12 text-[var(--color-primary)]" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Plex UX Portal Integration
            </h3>

            <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
              We're working on integrating the Plex UX supplier portal. Once available, you'll be able to access all supplier resources directly from this page.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-bg-secondary)] rounded-full text-[var(--color-text-secondary)]">
              <Clock className="w-5 h-5" />
              <span>Coming Soon</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <HelpCircle className="w-16 h-16 text-[var(--color-primary)] mb-6" />
              <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Need Assistance?
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                If you're a supplier and need immediate access to information or have questions about becoming a supplier, please contact our team directly.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+12485432427"
                  className="flex items-center gap-4 p-4 bg-[var(--color-bg-secondary)] rounded-xl hover:bg-[var(--color-bg-tertiary)] transition-colors"
                >
                  <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)]">Call Us</div>
                    <div className="text-[var(--color-text-primary)] font-medium">+1 (248) 543-2427</div>
                  </div>
                </a>

                <a
                  href="mailto:suppliers@aapinc.com"
                  className="flex items-center gap-4 p-4 bg-[var(--color-bg-secondary)] rounded-xl hover:bg-[var(--color-bg-tertiary)] transition-colors"
                >
                  <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)]">Email Us</div>
                    <div className="text-[var(--color-text-primary)] font-medium">suppliers@aapinc.com</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] rounded-3xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Become a Supplier
              </h3>
              <p className="text-white/70 mb-8">
                Interested in becoming an approved AAP Inc. supplier? We're always looking to expand our supplier network with quality-focused partners.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Competitive purchasing practices',
                  'Clear quality expectations',
                  'Long-term partnership approach',
                  'Timely payment terms',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 bg-[#0066CC] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] hover:bg-[#0052A3] text-white rounded-full font-medium transition-all"
              >
                Contact Us to Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
