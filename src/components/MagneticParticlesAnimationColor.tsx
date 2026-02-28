import { useEffect, useRef } from 'react'

interface MagneticParticlesAnimationProps {
  className?: string
  style?: React.CSSProperties
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  hue: number
  life: number
}

/**
 * MagneticParticlesAnimation - A fast, eye-catching particle system
 * with magnetic mouse interaction and dynamic color effects
 */
export default function MagneticParticlesAnimation({
  className = '',
  style = {}
}: MagneticParticlesAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mousePosRef = useRef<{ x: number; y: number } | null>(null)
  const touchPosRef = useRef<{ x: number; y: number } | null>(null)
  const hueRef = useRef<number>(180) // Start with blue hue

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

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
      
      // Reinitialize particles on resize
      initParticles()
    }

    requestAnimationFrame(() => resizeCanvas())
    const resizeObserver = new ResizeObserver(resizeCanvas)
    const container = canvas.parentElement
    if (container) resizeObserver.observe(container)
    window.addEventListener('resize', resizeCanvas)

    // Performance-optimized particle count based on screen size
    const getParticleCount = () => {
      const area = canvas.width * canvas.height
      return Math.min(Math.floor(area / 15000), 150) // Max 150 particles
    }

    // Initialize particles
    const initParticles = () => {
      const count = getParticleCount()
      particlesRef.current = []
      
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 2 + Math.random() * 2,
          hue: (hueRef.current + Math.random() * 60) % 360,
          life: Math.random()
        })
      }
    }

    initParticles()

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    const handleMouseLeave = () => {
      mousePosRef.current = null
    }

    // Touch tracking
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        touchPosRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        }
      }
    }

    const handleTouchEnd = () => {
      touchPosRef.current = null
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true })
    canvas.addEventListener('touchend', handleTouchEnd)

    // Animation parameters
    const ATTRACTION_FORCE = 0.02
    const REPULSION_FORCE = 0.03
    const REPULSION_DISTANCE = 80
    const ATTRACTION_DISTANCE = 200
    const FRICTION = 0.98
    const HUE_SPEED = 0.1

    // Get interaction point (mouse or touch)
    const getInteractionPoint = () => {
      return mousePosRef.current || touchPosRef.current
    }

    // Update particles
    const updateParticles = () => {
      const interactionPoint = getInteractionPoint()
      hueRef.current = (hueRef.current + HUE_SPEED) % 360

      particlesRef.current.forEach((particle) => {
        // Apply friction
        particle.vx *= FRICTION
        particle.vy *= FRICTION

        // Mouse/touch interaction
        if (interactionPoint) {
          const dx = interactionPoint.x - particle.x
          const dy = interactionPoint.y - particle.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < REPULSION_DISTANCE) {
            // Repulsion when close
            const force = (1 - dist / REPULSION_DISTANCE) * REPULSION_FORCE
            particle.vx -= (dx / dist) * force
            particle.vy -= (dy / dist) * force
          } else if (dist < ATTRACTION_DISTANCE) {
            // Attraction when further
            const force = (1 - dist / ATTRACTION_DISTANCE) * ATTRACTION_FORCE
            particle.vx += (dx / dist) * force
            particle.vy += (dy / dist) * force
          }
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Update hue for color animation
        particle.hue = (particle.hue + 0.2) % 360
        particle.life = (particle.life + 0.01) % 1
      })
    }

    // Draw connections between nearby particles
    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      const particles = particlesRef.current
      const maxDistance = 120

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.3
            const hue = (p1.hue + p2.hue) / 2

            ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
    }

    // Draw particles with glow effect
    const drawParticles = (ctx: CanvasRenderingContext2D) => {
      const particles = particlesRef.current
      const interactionPoint = getInteractionPoint()

      particles.forEach(particle => {
        // Calculate distance to interaction point for glow intensity
        let glowIntensity = 1
        if (interactionPoint) {
          const dx = interactionPoint.x - particle.x
          const dy = interactionPoint.y - particle.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            glowIntensity = 1 + (1 - dist / 150) * 2
          }
        }

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * glowIntensity * 3
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, 0.8)`)
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 60%, 0.4)`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * glowIntensity * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 75%, 0.9)`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * glowIntensity, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Draw interaction point effect
    const drawInteractionPoint = (ctx: CanvasRenderingContext2D) => {
      const interactionPoint = getInteractionPoint()
      if (!interactionPoint) return

      // Pulsing ring effect
      const time = Date.now() * 0.005
      const pulseSize = 30 + Math.sin(time) * 10

      const gradient = ctx.createRadialGradient(
        interactionPoint.x,
        interactionPoint.y,
        0,
        interactionPoint.x,
        interactionPoint.y,
        pulseSize
      )
      gradient.addColorStop(0, `hsla(${hueRef.current}, 80%, 70%, 0.6)`)
      gradient.addColorStop(0.5, `hsla(${hueRef.current}, 70%, 60%, 0.3)`)
      gradient.addColorStop(1, `hsla(${hueRef.current}, 60%, 50%, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(interactionPoint.x, interactionPoint.y, pulseSize, 0, Math.PI * 2)
      ctx.fill()

      // Core dot
      ctx.fillStyle = `hsla(${hueRef.current}, 90%, 75%, 0.9)`
      ctx.beginPath()
      ctx.arc(interactionPoint.x, interactionPoint.y, 4, 0, Math.PI * 2)
      ctx.fill()
    }

    // Animation loop - optimized for performance
    const animate = () => {
      if (!ctx) return

      // Clear with slight fade for trailing effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update particles
      updateParticles()

      // Draw connections first (behind particles)
      drawConnections(ctx)

      // Draw particles
      drawParticles(ctx)

      // Draw interaction point
      drawInteractionPoint(ctx)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
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
        pointerEvents: 'auto',
        ...style
      }}
    />
  )
}

