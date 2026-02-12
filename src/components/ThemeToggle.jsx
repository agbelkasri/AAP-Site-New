import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full transition-colors"
      style={{
        background: 'var(--glass-bg-light)',
        backdropFilter: 'blur(10px)',
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Moon className="w-4 h-4" style={{ color: 'var(--nav-text-active)' }} />
        ) : (
          <Sun className="w-4 h-4" style={{ color: 'var(--nav-text-active)' }} />
        )}
      </motion.div>
    </button>
  )
}
