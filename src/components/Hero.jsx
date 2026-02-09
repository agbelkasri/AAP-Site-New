import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  primaryCTALink,
  secondaryCTA,
  secondaryCTALink,
  backgroundImage,
  overlay = true,
  centered = true,
  minHeight = 'min-h-screen',
}) {
  return (
    <section
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D1F]/90 via-[#1D1D1F]/70 to-[#1D1D1F]/80" />
      )}

      {/* Background Pattern */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] via-white to-[#F5F5F7]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0071E3]/10 rounded-full blur-3xl" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-32 ${centered ? 'text-center' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle && (
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              backgroundImage
                ? 'bg-white/10 text-white/90 backdrop-blur-sm'
                : 'bg-[#0066CC]/10 text-[#0066CC]'
            }`}>
              {subtitle}
            </span>
          )}

          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight ${
            backgroundImage ? 'text-white' : 'text-[#1D1D1F]'
          }`}>
            {title}
          </h1>

          {description && (
            <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${
              backgroundImage ? 'text-white/80' : 'text-[#6E6E73]'
            }`}>
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className={`flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
              {primaryCTA && (
                <Link
                  to={primaryCTALink || '#'}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0066CC] hover:bg-[#0052A3] text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  {primaryCTA}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  to={secondaryCTALink || '#'}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all ${
                    backgroundImage
                      ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                      : 'bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F]'
                  }`}
                >
                  {secondaryCTA}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
