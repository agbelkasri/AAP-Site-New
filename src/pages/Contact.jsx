import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Building,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team',
    contacts: [
      { label: 'USA', value: '+1 (248) 543-2427', link: 'tel:+12485432427' },
      { label: 'Mexico', value: '+52 (444) 137-2100', link: 'tel:+524441372100' },
    ],
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We respond within 24 hours',
    contacts: [
      { label: 'General', value: 'info@aapinc.com', link: 'mailto:info@aapinc.com' },
      { label: 'Sales', value: 'sales@aapinc.com', link: 'mailto:sales@aapinc.com' },
    ],
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Tour our facilities',
    contacts: [
      { label: 'USA', value: 'Michigan, United States', link: null },
      { label: 'Mexico', value: 'San Luis Potosí, Mexico', link: null },
    ],
  },
]

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24"
        style={{ background: 'linear-gradient(to bottom right, var(--color-bg-secondary), var(--color-bg))' }}
      >
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
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Ready to discuss your project? We're here to help bring your manufacturing vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{method.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">{method.description}</p>
                <div className="space-y-2">
                  {method.contacts.map((contact, i) => (
                    <div key={i} className="text-sm">
                      <span className="text-[var(--color-text-secondary)]">{contact.label}: </span>
                      {contact.link ? (
                        <a href={contact.link} className="text-[var(--color-primary)] hover:underline font-medium">
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-[var(--color-text-primary)]">{contact.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <SectionHeading
                subtitle="Send a Message"
                title="How Can We Help?"
                description="Fill out the form below and our team will get back to you within 24 hours."
                centered={false}
              />
              <ContactForm />
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              {/* Response Time */}
              <div className="bg-[var(--color-surface)] rounded-2xl p-8 mb-8 border border-[var(--color-border)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">Quick Response</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">We respond within 24 hours</p>
                  </div>
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  Our team is dedicated to providing prompt, helpful responses to all inquiries. Whether you need a quote, technical information, or general assistance, we're here to help.
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-[var(--color-surface)] rounded-2xl p-8 mb-8 border border-[var(--color-border)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">Business Hours</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">When you can reach us</p>
                  </div>
                </div>
                <div className="space-y-2 text-[var(--color-text-secondary)]">
                  <p><span className="text-[var(--color-text-primary)] font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="text-[var(--color-text-primary)] font-medium">Saturday - Sunday:</span> Closed</p>
                  <p className="text-sm mt-4">*Manufacturing operations run 24/7</p>
                </div>
              </div>

              {/* Location Quick Links - DARK SECTION: stays hardcoded */}
              <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] rounded-2xl p-8">
                <Building className="w-12 h-12 text-[#0066CC] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Our Facilities</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇺🇸</span>
                      <h4 className="text-white font-medium">USA Headquarters</h4>
                    </div>
                    <p className="text-white/60 text-sm mb-2">Michigan, United States</p>
                    <a href="tel:+12485432427" className="text-[#0066CC] text-sm hover:underline">
                      +1 (248) 543-2427
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇲🇽</span>
                      <h4 className="text-white font-medium">Mexico Facility</h4>
                    </div>
                    <p className="text-white/60 text-sm mb-2">San Luis Potosí, Mexico</p>
                    <a href="tel:+524441372100" className="text-[#0066CC] text-sm hover:underline">
                      +52 (444) 137-2100
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Quick answers to common inquiries."
          />

          <div className="space-y-4">
            {[
              {
                question: 'What industries do you serve?',
                answer: 'We primarily serve the automotive industry, including OEMs and Tier One suppliers. We also support industrial and heavy equipment manufacturers.',
              },
              {
                question: 'What is your typical lead time?',
                answer: 'Lead times vary based on project complexity and volume. Contact us for specific timing based on your requirements.',
              },
              {
                question: 'Do you offer engineering support?',
                answer: 'Yes, our engineering team provides design for manufacturability (DFM), prototyping, and technical support throughout the product lifecycle.',
              },
              {
                question: 'What certifications do you hold?',
                answer: 'We are certified to IATF 16949 (automotive quality), ISO 14001 (environmental), and are an NMSDC certified minority supplier.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[var(--color-bg-secondary)] rounded-xl p-6"
              >
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">{faq.question}</h3>
                <p className="text-[var(--color-text-secondary)]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
