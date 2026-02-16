import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
  GraduationCap,
  Heart,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const benefits = [
  { icon: Shield, title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
  { icon: DollarSign, title: 'Competitive Pay', description: 'Industry-leading compensation packages' },
  { icon: Clock, title: 'Work-Life Balance', description: 'Flexible scheduling and PTO' },
  { icon: TrendingUp, title: 'Career Growth', description: 'Clear advancement opportunities' },
  { icon: GraduationCap, title: 'Training Programs', description: 'Continuous learning and development' },
  { icon: Heart, title: '401(k) Plan', description: 'Retirement savings with company match' },
]

export default function Employment() {
  const paycorRef = useRef(null)

  useEffect(() => {
    // Load Paycor recruiting script
    const script = document.createElement('script')
    script.id = 'gnewtonjs'
    script.type = 'text/javascript'
    script.src = '//recruitingbypaycor.com/career/iframe.action?clientId=8a7883d094b427e80194b8fbcc3700f9'
    script.async = true

    if (paycorRef.current) {
      paycorRef.current.appendChild(script)
    }

    return () => {
      // Cleanup on unmount
      const existing = document.getElementById('gnewtonjs')
      if (existing) existing.remove()
    }
  }, [])

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
              Careers at AAP Inc.
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              Join Our World-Class Team
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-10">
              Build your career with a leading manufacturer committed to excellence, innovation, and the success of our team members.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full font-medium transition-all shadow-lg"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Employee Benefits"
            title="Comprehensive Benefits Package"
            description="We take care of our team with a competitive benefits package."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[var(--color-surface)] rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-[var(--color-border)] hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">{benefit.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Open Positions"
            title="Current Opportunities"
            description="Explore our current job openings and find your next career move."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 border border-[var(--color-border)]"
          >
            {/* Paycor Job Listings Embed */}
            <div ref={paycorRef} className="min-h-[400px]" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
