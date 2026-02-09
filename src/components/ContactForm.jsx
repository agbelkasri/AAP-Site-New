import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo purposes, always show success
    setStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })

    // Reset status after 5 seconds
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-xl border border-[#E8E8ED]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1D1D1F] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#E8E8ED] focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1D1D1F] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#E8E8ED] focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all outline-none"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#1D1D1F] mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E8E8ED] focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all outline-none"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1D1D1F] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#E8E8ED] focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all outline-none"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-[#1D1D1F] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-[#E8E8ED] focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all outline-none resize-none"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-700">Thank you! We'll respond within 24 hours.</span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-red-700">Something went wrong. Please try again.</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#0066CC] hover:bg-[#0052A3] disabled:bg-[#0066CC]/50 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <p className="mt-4 text-center text-sm text-[#6E6E73]">
        We typically respond within 24 business hours.
      </p>
    </motion.form>
  )
}
