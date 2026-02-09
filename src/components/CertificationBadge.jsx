import { motion } from 'framer-motion'
import { Shield, Award, Leaf } from 'lucide-react'

const certifications = {
  'IATF 16949': {
    icon: Award,
    description: 'International Automotive Quality Management',
    color: 'from-blue-500 to-blue-600',
  },
  'ISO 14001': {
    icon: Leaf,
    description: 'Environmental Management System',
    color: 'from-green-500 to-green-600',
  },
  'NMSDC': {
    icon: Shield,
    description: 'National Minority Supplier Development Council',
    color: 'from-purple-500 to-purple-600',
  },
}

export default function CertificationBadge({ name, showDescription = true, delay = 0 }) {
  const cert = certifications[name]
  if (!cert) return null

  const Icon = cert.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8E8ED] hover:shadow-lg transition-shadow"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-[#1D1D1F]">{name}</h4>
        {showDescription && (
          <p className="text-sm text-[#6E6E73]">{cert.description}</p>
        )}
      </div>
    </motion.div>
  )
}

export function CertificationBadges() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.keys(certifications).map((name, index) => (
        <CertificationBadge key={name} name={name} delay={index * 0.1} />
      ))}
    </div>
  )
}
