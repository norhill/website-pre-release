import { useEffect, useRef } from 'react'

interface WaterAnimationProps {
  className?: string
  style?: React.CSSProperties
}

/**
 * WaterAnimation - A smooth water-like animation with mouse interaction
 * Creates flowing water effects with ripples and waves
 */
export default function WaterAnimation({
  className = '',
  style = {}
}: WaterAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const timeRef = useRef<number>(0)
  const mousePosRef = useRef<{ x: number; y: number } | null>(null)
  const mouseVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null)
  const ripplesRef = useRef<Array<{
    x: number
    y: number
    radius: number
    strength: number
    life: number
    maxLife: number
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Water colors - subtle and transparent
    const WATER_COLOR = { r: 91, g: 143, b: 163 } // Sky blue
    const ACCENT_COLOR = { r: 122, g: 155, b: 122 } // Sage green

    // Canvas setup
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        const rect = container.getBoundingClientRect()
        canvas.width = rect.width || container.clientWidth || window.innerWidth
        canvas.height = rect.height || container.clientHeight || window.innerHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    requestAnimationFrame(() => resizeCanvas())
    const resizeObserver = new ResizeObserver(resizeCanvas)
    const container = canvas.parentElement
    if (container) resizeObserver.observe(container)
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking with velocity calculation
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
        if (lastMousePosRef.current) {
          // Calculate velocity for ripple strength
          const dx = x - lastMousePosRef.current.x
          const dy = y - lastMousePosRef.current.y
          const speed = Math.sqrt(dx * dx + dy * dy)
          
          mouseVelocityRef.current = {
            x: dx * 0.1,
            y: dy * 0.1
          }
          
          // Create ripple if mouse moved fast enough
          if (speed > 2) {
            ripplesRef.current.push({
              x,
              y,
              radius: 0,
              strength: Math.min(speed * 0.3, 1.5),
              life: 0,
              maxLife: 60 + speed * 2
            })
          }
        }
        
        mousePosRef.current = { x, y }
        lastMousePosRef.current = { x, y }
      } else {
        mousePosRef.current = null
        lastMousePosRef.current = null
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', () => {
      mousePosRef.current = null
      lastMousePosRef.current = null
    })

    // Animation parameters
    const WAVE_SPEED = 0.0003
    const WAVE_FREQUENCY = 0.008
    const MOUSE_INFLUENCE_RADIUS = 200
    const MOUSE_INFLUENCE_STRENGTH = 0.8

    // Smooth noise function for water waves
    const smoothNoise = (x: number, y: number, time: number): number => {
      const n1 = Math.sin(x * WAVE_FREQUENCY + time * WAVE_SPEED) * 0.5
      const n2 = Math.sin(y * WAVE_FREQUENCY * 0.7 + time * WAVE_SPEED * 0.8) * 0.5
      const n3 = Math.sin((x + y) * WAVE_FREQUENCY * 0.5 + time * WAVE_SPEED * 1.2) * 0.3
      return (n1 + n2 + n3) / 1.3
    }

    // Get water height at a point
    const getWaterHeight = (x: number, y: number, time: number): number => {
      let height = smoothNoise(x, y, time)
      
      // Add mouse influence
      if (mousePosRef.current) {
        const dx = x - mousePosRef.current.x
        const dy = y - mousePosRef.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < MOUSE_INFLUENCE_RADIUS) {
          const normalizedDist = dist / MOUSE_INFLUENCE_RADIUS
          const influence = (1 - normalizedDist) * (1 - normalizedDist)
          const angle = Math.atan2(dy, dx)
          
          // Create wave effect from mouse position
          const wave = Math.sin(dist * 0.05 - time * 0.01) * influence * MOUSE_INFLUENCE_STRENGTH
          height += wave
          
          // Add velocity-based influence
          const velX = mouseVelocityRef.current.x
          const velY = mouseVelocityRef.current.y
          const velInfluence = (velX * Math.cos(angle) + velY * Math.sin(angle)) * influence * 0.3
          height += velInfluence
        }
      }
      
      // Add ripple effects
      ripplesRef.current.forEach(ripple => {
        const dx = x - ripple.x
        const dy = y - ripple.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const rippleRadius = ripple.radius
        
        if (dist < rippleRadius * 2) {
          const normalizedDist = dist / (rippleRadius * 2)
          const rippleWave = Math.sin((dist - rippleRadius) * 0.3) * (1 - normalizedDist)
          height += rippleWave * ripple.strength * (1 - ripple.life / ripple.maxLife)
        }
      })
      
      return height
    }

    // Draw water surface
    const drawWater = (ctx: CanvasRenderingContext2D, time: number) => {
      const width = canvas.width
      const height = canvas.height
      const resolution = 3 // Higher resolution for smoother water
      
      // Create gradient for water depth effect
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, `rgba(${WATER_COLOR.r}, ${WATER_COLOR.g}, ${WATER_COLOR.b}, 0.15)`)
      gradient.addColorStop(0.5, `rgba(${WATER_COLOR.r}, ${WATER_COLOR.g}, ${WATER_COLOR.b}, 0.08)`)
      gradient.addColorStop(1, `rgba(${ACCENT_COLOR.r}, ${ACCENT_COLOR.g}, ${ACCENT_COLOR.b}, 0.12)`)
      
      // Draw water surface with waves
      for (let y = 0; y < height; y += resolution) {
        const path = new Path2D()
        let isPathStarted = false
        
        for (let x = 0; x < width; x += resolution) {
          const waterHeight = getWaterHeight(x, y, time)
          const waveY = y + waterHeight * 15 // Wave amplitude
          
          if (!isPathStarted) {
            path.moveTo(x, waveY)
            isPathStarted = true
          } else {
            path.lineTo(x, waveY)
          }
        }
        
        // Draw wave line
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.stroke(path)
      }
      
      // Draw flowing water particles/streaks
      const particleCount = 30
      for (let i = 0; i < particleCount; i++) {
        const seed = i * 1000
        const x = (Math.sin(time * 0.0001 + seed) * 0.5 + 0.5) * width
        const y = (Math.cos(time * 0.00008 + seed * 0.7) * 0.5 + 0.5) * height
        const waterHeight = getWaterHeight(x, y, time)
        const particleY = y + waterHeight * 15
        
        // Draw subtle flowing streaks
        const streakLength = 40 + Math.sin(time * 0.0001 + seed) * 20
        const angle = Math.sin(time * 0.0001 + seed) * 0.3
        
        ctx.beginPath()
        ctx.moveTo(x, particleY)
        ctx.lineTo(
          x + Math.cos(angle) * streakLength,
          particleY + Math.sin(angle) * streakLength
        )
        
        const alpha = 0.1 + Math.sin(time * 0.0001 + seed) * 0.05
        ctx.strokeStyle = `rgba(${WATER_COLOR.r}, ${WATER_COLOR.g}, ${WATER_COLOR.b}, ${alpha})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    // Draw ripples
    const drawRipples = (ctx: CanvasRenderingContext2D) => {
      ripplesRef.current.forEach((ripple, index) => {
        ripple.life += 1
        ripple.radius += 2 + ripple.strength
        
        if (ripple.life >= ripple.maxLife) {
          ripplesRef.current.splice(index, 1)
          return
        }
        
        const alpha = (1 - ripple.life / ripple.maxLife) * 0.3
        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          ripple.radius * 0.3,
          ripple.x,
          ripple.y,
          ripple.radius
        )
        gradient.addColorStop(0, `rgba(${WATER_COLOR.r}, ${WATER_COLOR.g}, ${WATER_COLOR.b}, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(${WATER_COLOR.r}, ${WATER_COLOR.g}, ${WATER_COLOR.b}, ${alpha * 0.5})`)
        gradient.addColorStop(1, `rgba(${WATER_COLOR.r}, ${WATER_COLOR.g}, ${WATER_COLOR.b}, 0)`)
        
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    // Animation loop
    const animate = (currentTime: number) => {
      if (!ctx) return

      timeRef.current = currentTime

      // Clear canvas with slight fade for trailing effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw water
      drawWater(ctx, currentTime)

      // Draw ripples
      drawRipples(ctx)

      // Decay mouse velocity
      mouseVelocityRef.current.x *= 0.9
      mouseVelocityRef.current.y *= 0.9

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style
      }}
    />
  )
}




