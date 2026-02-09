import { motion } from 'framer-motion'

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light
            ? 'bg-white/10 text-white/90'
            : 'bg-[#0066CC]/10 text-[#0066CC]'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-[#1D1D1F]'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-white/70' : 'text-[#6E6E73]'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
