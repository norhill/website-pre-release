import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ArchitectureTerm {
  firstWord: string
  articleLink: string
  color?: string // Tailwind color class (e.g., 'text-nordic-blue', 'text-forest-green') or CSS color value
}

const architectureTerms: ArchitectureTerm[] = [
  { firstWord: 'Business', articleLink: '/articles/business-architecture', color: 'text-sky-blue' },
  { firstWord: 'Enterprise', articleLink: '/articles/enterprise-architecture', color: 'text-forest-green' },
  { firstWord: 'AI', articleLink: '/articles/ai-architecture', color: 'text-amber-gold' },
  { firstWord: 'Democratize', articleLink: '/articles/democratize-architecture', color: '#6b80a3' },
  { firstWord: 'Capability', articleLink: '/articles/capability-architecture', color: 'text-deep-plum' },
  { firstWord: 'Pragmatic', articleLink: '/articles/pragmatic-architecture', color: 'text-sky-blue' },
  { firstWord: 'Connected', articleLink: '/articles/connected-architecture', color: '#1b59a9' },
]

const ROTATION_INTERVAL = 3000 // 3 seconds per word

export default function RotatingArchitectureHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, _setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return // Pause rotation on hover

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % architectureTerms.length)
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [isHovered])

  const currentTerm = architectureTerms[currentIndex]
  const defaultColor = 'text-nordic-blue'
  const textColor = currentTerm.color || defaultColor
  const isTailwindClass = textColor.startsWith('text-')
  const textColorStyle = isTailwindClass ? {} : { color: textColor }
  const textColorClass = isTailwindClass ? textColor : defaultColor

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
        <Link
          to={currentTerm.articleLink}
          className="flex items-baseline gap-3 no-underline"
        >
          {/* Rotating First Word (fixed max width based on longest word) */}
          <div className="relative inline-block h-28 md:h-32 lg:h-36 flex items-end">
            {/* Invisible longest word to reserve constant width */}
            <span className="invisible text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-none">
              Democratize
            </span>
            <div className="absolute inset-x-0 top-0 bottom-0 flex items-end justify-end overflow-visible">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTerm.firstWord}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`text-5xl md:text-6xl lg:text-7xl font-heading font-bold block whitespace-nowrap leading-none ${textColorClass}`}
                  style={{ transformStyle: 'preserve-3d', ...textColorStyle }}
                >
                  {currentTerm.firstWord}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Fixed "Architecture" Word */}
          <span className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-nordic-blue leading-none">
            Architecture
          </span>

          {/* Moving Arrow Indicator */}
          <motion.div
            animate={{
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex items-end text-nordic-blue transition-colors ml-2"
          >
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-12 md:h-12"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </Link>

      {/* Dots indicator showing current position, placed below words */}
      <div className="mt-6 flex justify-center gap-2">
        {architectureTerms.map((term, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-nordic-blue w-8'
                : 'bg-nordic-blue/30 hover:bg-nordic-blue/50'
            }`}
            aria-label={`Show ${term.firstWord} Architecture`}
          />
        ))}
      </div>
    </div>
  )
}

