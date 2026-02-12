import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Card({
  icon: Icon,
  title,
  description,
  link,
  linkText = 'Learn More',
  image,
  variant = 'default',
  delay = 0,
}) {
  const variants = {
    default: 'bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-xl',
    filled: 'bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)]',
    dark: 'bg-[#1D1D1F] text-white',
  }

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl p-8 transition-all duration-300 h-full ${variants[variant]}`}
    >
      {image && (
        <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-[var(--color-bg-secondary)]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {Icon && (
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
          variant === 'dark'
            ? 'bg-[#0066CC]'
            : 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-gradient)]'
        }`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
      )}

      <h3 className={`text-xl font-semibold mb-3 ${
        variant === 'dark' ? 'text-white' : 'text-[var(--color-text-primary)]'
      }`}>
        {title}
      </h3>

      <p className={`mb-6 leading-relaxed ${
        variant === 'dark' ? 'text-[#A1A1A6]' : 'text-[var(--color-text-secondary)]'
      }`}>
        {description}
      </p>

      {link && (
        <span className={`inline-flex items-center gap-2 text-sm font-medium group ${
          variant === 'dark' ? 'text-[#0071E3]' : 'text-[var(--color-primary)]'
        }`}>
          {linkText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      )}
    </motion.div>
  )

  if (link) {
    return (
      <Link to={link} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
