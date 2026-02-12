import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Users,
  Heart,
  TrendingUp,
  Award,
  Shield,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  MapPin,
  CheckCircle,
  Mail,
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

const values = [
  {
    icon: Users,
    title: 'Team Environment',
    description: 'Work alongside skilled professionals in a collaborative, supportive atmosphere where every voice matters.',
  },
  {
    icon: Award,
    title: 'Excellence Culture',
    description: 'Join a team committed to world-class quality and continuous improvement in everything we do.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Develop your skills and advance your career with ongoing training and promotion from within.',
  },
]

const departments = [
  'Manufacturing & Production',
  'Quality Assurance',
  'Engineering',
  'Maintenance',
  'Logistics & Supply Chain',
  'Administration',
]

export default function Employment() {
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

      {/* Why Work Here */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Why AAP Inc."
            title="Why Work With Us?"
            description="At AAP Inc., we believe our people are our greatest asset. Here's what sets us apart."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{value.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Culture Section */}
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
                subtitle="Our Culture"
                title="A Place to Grow"
                centered={false}
                light={true}
              />
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                At AAP Inc., we foster a culture of respect, collaboration, and continuous improvement. Our team members are empowered to contribute ideas, develop their skills, and grow their careers.
              </p>

              <div className="space-y-4">
                {[
                  'Safety is our top priority',
                  'Open door management policy',
                  'Regular team events and recognition',
                  'Diverse and inclusive workplace',
                  'Promote from within philosophy',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0066CC] flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
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
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-[#0066CC] to-[#0071E3] rounded-full flex items-center justify-center">
                  <Users className="w-32 h-32 text-white/30" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <Heart className="w-10 h-10 text-[#0066CC]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Career Paths"
            title="Departments & Opportunities"
            description="Explore career opportunities across our various departments."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[var(--color-bg-secondary)] rounded-xl p-6 flex items-center gap-4 hover:bg-[var(--color-bg-tertiary)] transition-colors"
              >
                <Briefcase className="w-6 h-6 text-[var(--color-primary)]" />
                <span className="font-medium text-[var(--color-text-primary)]">{dept}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-24 bg-[var(--color-bg-secondary)]">
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
            className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 text-center border border-[var(--color-border)]"
          >
            <div className="w-20 h-20 bg-[var(--color-bg-secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Check Back Soon
            </h3>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
              We're always looking for talented individuals to join our team. While we don't have any positions posted at the moment, we encourage you to submit your resume for future opportunities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:careers@aapinc.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full font-medium transition-all"
              >
                <Mail className="w-5 h-5" />
                Submit Your Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] rounded-full font-medium transition-all"
              >
                Contact HR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="How to Apply"
            title="Our Hiring Process"
            description="A simple, straightforward process to join our team."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', description: 'Submit your resume and application online or via email.' },
              { step: '02', title: 'Review', description: 'Our HR team reviews your qualifications.' },
              { step: '03', title: 'Interview', description: 'Meet with our team to discuss the opportunity.' },
              { step: '04', title: 'Welcome', description: 'Receive an offer and join the AAP family.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-[var(--color-border)]" />
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            subtitle="Work Locations"
            title="Where We Hire"
            description="Opportunities available at both of our facilities."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { flag: '🇺🇸', location: 'Michigan, USA', phone: '+1 (248) 543-2427' },
              { flag: '🇲🇽', location: 'San Luis Potosí, Mexico', phone: '+52 (444) 137-2100' },
            ].map((loc, index) => (
              <motion.div
                key={loc.location}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-surface)] rounded-2xl p-8 flex items-center gap-6 shadow-sm border border-[var(--color-border)]"
              >
                <span className="text-5xl">{loc.flag}</span>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">{loc.location}</h3>
                  <p className="text-[var(--color-primary)]">{loc.phone}</p>
                </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join a team that values quality, innovation, and your professional growth.
            </p>
            <a
              href="mailto:careers@aapinc.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#F5F5F7] text-[#0066CC] rounded-full font-medium transition-all shadow-lg"
            >
              Apply Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
