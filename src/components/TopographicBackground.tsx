import TopographicAnimation from './TopographicAnimation'

interface TopographicBackgroundProps {
  children: React.ReactNode
  className?: string
}

/**
 * TopographicBackground - Wrapper component that adds a topographic
 * animation as a background behind its children content.
 * 
 * Usage:
 * <TopographicBackground>
 *   <div className="container-custom">
 *     Your content here
 *   </div>
 * </TopographicBackground>
 */
export default function TopographicBackground({ 
  children, 
  className = '' 
}: TopographicBackgroundProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <TopographicAnimation />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}

