import { useEffect, useRef } from 'react'

interface TopographicAnimationProps {
  className?: string
  style?: React.CSSProperties
}

/**
 * TopographicAnimation - A smooth 2D topographic map animation
 * featuring brand colors and fluid terrain movement
 */
export default function TopographicAnimation({
  className = '',
  style = {}
}: TopographicAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const timeRef = useRef<number>(0)
  const heightMapRef = useRef<number[][] | null>(null)
  const mousePosRef = useRef<{ x: number; y: number } | null>(null)
  const mouseInfluenceRef = useRef<number>(0)
  const loopStatesRef = useRef<Map<string, { isClosed: boolean; stability: number }>>(new Map())
  const pathConnectionsRef = useRef<Map<string, { connected: boolean; stability: number }>>(new Map())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Subtle water-on-glass colors - very light and transparent
    const BASE_COLOR = { r: 91, g: 143, b: 163 } // Sky blue base
    const ACCENT_COLOR = { r: 122, g: 155, b: 122 } // Sage green accent

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
      heightMapRef.current = null // Regenerate on resize
    }

    requestAnimationFrame(() => resizeCanvas())
    const resizeObserver = new ResizeObserver(resizeCanvas)
    const container = canvas.parentElement
    if (container) resizeObserver.observe(container)
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
        mousePosRef.current = { x, y }
      } else {
        mousePosRef.current = null
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', () => { mousePosRef.current = null })

    // Animation parameters - optimized for water-on-glass smoothness
    const RESOLUTION = 2 // Higher resolution for smoother lines
    const ANIMATION_SPEED = 0.00005 // Very slow, fluid movement
    const MOUSE_RADIUS = 150
    const MOUSE_STRENGTH = 0.4 // Gentler mouse influence
    const MOUSE_RAMP = 0.05

    // Hash function for deterministic noise
    const hash = (x: number, y: number, seed: number = 0): number => {
      let n = x * 374761393 + y * 668265263 + seed * 2246822507
      n = (n ^ (n >> 15)) * 3266489917
      n = (n ^ (n >> 13)) * 2246822507
      return ((n ^ (n >> 16)) / 2147483648.0 + 1) / 2 // 0 to 1
    }

    // Smooth noise interpolation
    const smoothNoise = (x: number, y: number): number => {
      const x0 = Math.floor(x)
      const y0 = Math.floor(y)
      const x1 = x0 + 1
      const y1 = y0 + 1

      const fx = x - x0
      const fy = y - y0
      const sx = fx * fx * (3 - 2 * fx)
      const sy = fy * fy * (3 - 2 * fy)

      const n00 = hash(x0, y0)
      const n10 = hash(x1, y0)
      const n01 = hash(x0, y1)
      const n11 = hash(x1, y1)

      const nx0 = n00 * (1 - sx) + n10 * sx
      const nx1 = n01 * (1 - sx) + n11 * sx
      return nx0 * (1 - sy) + nx1 * sy
    }

    // Generate height map
    const generateHeightMap = (width: number, height: number, time: number): number[][] => {
      const map: number[][] = []
      const timeOffset = time * ANIMATION_SPEED
      const mousePos = mousePosRef.current
      const mouseX = mousePos ? (mousePos.x / canvas.width) * width : -1
      const mouseY = mousePos ? (mousePos.y / canvas.height) * height : -1

      for (let y = 0; y < height; y++) {
        map[y] = []
        for (let x = 0; x < width; x++) {
          // Multi-octave noise with smoother, more fluid waves
          let value = 0
          let amplitude = 1
          let frequency = 0.012 // Lower frequency for smoother waves
          let maxValue = 0

          // More octaves for smoother, more fluid motion
          for (let octave = 0; octave < 3; octave++) {
            const nx = x * frequency + timeOffset * (0.3 + octave * 0.15)
            const ny = y * frequency + timeOffset * (0.2 + octave * 0.12)
            value += smoothNoise(nx, ny) * amplitude
            maxValue += amplitude
            amplitude *= 0.5
            frequency *= 1.8 // Less frequency multiplication for smoother waves
          }

          value = value / maxValue
          // Add very slow, large-scale waves for fluid motion
          value += smoothNoise(x * 0.002 + timeOffset * 0.05, y * 0.002 + timeOffset * 0.04) * 0.2

          // Mouse influence
          if (mousePos && mouseX >= 0 && mouseY >= 0) {
            const dx = x - mouseX
            const dy = y - mouseY
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < MOUSE_RADIUS / RESOLUTION) {
              const normalizedDist = dist / (MOUSE_RADIUS / RESOLUTION)
              const influence = (1 - normalizedDist) * (1 - normalizedDist) * (3 - 2 * (1 - normalizedDist))
              value += influence * MOUSE_STRENGTH * mouseInfluenceRef.current
            }
          }

          map[y][x] = value
        }
      }
      return map
    }

    // Get height with interpolation
    const getHeight = (map: number[][], x: number, y: number): number => {
      const x1 = Math.floor(x)
      const y1 = Math.floor(y)
      const x2 = x1 + 1
      const y2 = y1 + 1

      if (x1 < 0 || y1 < 0 || x2 >= map[0].length || y2 >= map.length) return 0

      const fx = x - x1
      const fy = y - y1
      const sx = fx * fx * (3 - 2 * fx)
      const sy = fy * fy * (3 - 2 * fy)

      const h11 = map[y1][x1]
      const h21 = map[y1][x2]
      const h12 = map[y2][x1]
      const h22 = map[y2][x2]

      return h11 * (1 - sx) * (1 - sy) + h21 * sx * (1 - sy) + h12 * (1 - sx) * sy + h22 * sx * sy
    }

    // Draw smooth contour lines - water-on-glass style
    const drawContours = (ctx: CanvasRenderingContext2D, map: number[][], mapWidth: number, mapHeight: number) => {
      const minHeight = -0.6
      const maxHeight = 0.6
      const step = 0.15 // Closer steps for smoother transitions
      const sampleStep = RESOLUTION * 0.8 // Higher sampling for smoother lines

      for (let level = minHeight; level <= maxHeight; level += step) {
        const isMajor = Math.round((level - minHeight) / step) % 4 === 0
        const lineWidth = isMajor ? 1.5 : 1
        // Very subtle, transparent lines like water on glass
        const baseAlpha = isMajor ? 0.25 : 0.15
        
        // Smooth color gradient based on elevation - water-like
        const normalizedLevel = (level - minHeight) / (maxHeight - minHeight) // 0 to 1
        const r = Math.round(BASE_COLOR.r + (ACCENT_COLOR.r - BASE_COLOR.r) * normalizedLevel)
        const g = Math.round(BASE_COLOR.g + (ACCENT_COLOR.g - BASE_COLOR.g) * normalizedLevel)
        const b = Math.round(BASE_COLOR.b + (ACCENT_COLOR.b - BASE_COLOR.b) * normalizedLevel)
        
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`
        ctx.lineWidth = lineWidth
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        const points: { x: number; y: number }[] = []

        // Sample the entire map including edges
        for (let y = 0; y < mapHeight; y += sampleStep) {
          for (let x = 0; x < mapWidth; x += sampleStep) {
            const h = getHeight(map, x, y)
            const hRight = x + sampleStep < mapWidth ? getHeight(map, x + sampleStep, y) : h
            const hDown = y + sampleStep < mapHeight ? getHeight(map, x, y + sampleStep) : h

            const crossesH = (h < level && hRight >= level) || (h >= level && hRight < level)
            const crossesV = (h < level && hDown >= level) || (h >= level && hDown < level)

            if (crossesH || crossesV) {
              // Handle horizontal crossing
              if (crossesH && Math.abs(hRight - h) > 0.001) {
                const t = (level - h) / (hRight - h)
                const px = x + t * sampleStep
                const py = y
                // Clamp to map bounds
                const clampedPx = Math.max(0, Math.min(px, mapWidth))
                const clampedPy = Math.max(0, Math.min(py, mapHeight))
                points.push({
                  x: (clampedPx / mapWidth) * canvas.width,
                  y: (clampedPy / mapHeight) * canvas.height
                })
              }
              
              // Handle vertical crossing separately to avoid coordinate conflicts
              if (crossesV && Math.abs(hDown - h) > 0.001) {
                const t = (level - h) / (hDown - h)
                const px = x
                const py = y + t * sampleStep
                // Clamp to map bounds
                const clampedPx = Math.max(0, Math.min(px, mapWidth))
                const clampedPy = Math.max(0, Math.min(py, mapHeight))
                points.push({
                  x: (clampedPx / mapWidth) * canvas.width,
                  y: (clampedPy / mapHeight) * canvas.height
                })
              }
            }
          }
        }

        // Draw connected paths
        if (points.length > 1) {
          const drawn = new Set<number>()
          const maxDist = 30 // Increased for better connection
          const edgeConnectionDist = 50 // Larger distance for edge connections

          // Sort points by position for consistent ordering (prevents flickering)
          const sortedIndices = Array.from({ length: points.length }, (_, i) => i)
          sortedIndices.sort((a, b) => {
            const diffY = points[a].y - points[b].y
            if (Math.abs(diffY) > 1) return diffY
            return points[a].x - points[b].x
          })

          const paths: { x: number; y: number }[][] = []

          for (const i of sortedIndices) {
            if (drawn.has(i)) continue

            const startPoint = points[i]
            const path = [startPoint]
            drawn.add(i)
            let current = startPoint
            let found = true
            let iterations = 0
            const maxIterations = Math.min(points.length, 400)

            while (found && iterations < maxIterations) {
              iterations++
              found = false
              let closestIdx = -1
              let closestDistSq = maxDist * maxDist

              // Check if current point is near an edge - if so, use larger connection distance
              const isNearEdge = current.x < 20 || current.x > canvas.width - 20 ||
                                current.y < 20 || current.y > canvas.height - 20
              const connectionDistSq = isNearEdge ? edgeConnectionDist * edgeConnectionDist : maxDist * maxDist

              // Search in sorted order for consistency
              for (const j of sortedIndices) {
                if (drawn.has(j)) continue
                // Calculate distance correctly (no sign issues)
                const dx = points[j].x - current.x
                const dy = points[j].y - current.y
                const distSq = dx * dx + dy * dy
                if (distSq < closestDistSq && distSq < connectionDistSq) {
                  closestDistSq = distSq
                  closestIdx = j
                  found = true
                }
              }

              if (found && closestIdx >= 0) {
                const nextPoint = points[closestIdx]
                const closestDist = Math.sqrt(closestDistSq)
                
                // Add intermediate points for smooth curves and to prevent gaps
                // For sparse areas (few points), add more intermediate points for smoother curves
                const isSparseArea = points.length < 50 // Sparse if total points are few
                const baseSpacing = isSparseArea ? 4 : 6 // Tighter spacing for sparse areas
                const maxIntermediates = isSparseArea ? 8 : 4 // More intermediates for sparse areas
                
                if (closestDist > 3 && path.length > 0) {
                  const numIntermediates = Math.min(maxIntermediates, Math.max(1, Math.ceil(closestDist / baseSpacing)))
                  for (let interp = 1; interp < numIntermediates; interp++) {
                    const t = interp / numIntermediates
                    // Use smoother interpolation for sparse areas
                    const smoothT = isSparseArea 
                      ? t * t * t * (t * (t * 6 - 15) + 10) // smootherstep (5th order)
                      : t * t * (3 - 2 * t) // smoothstep (3rd order)
                    path.push({
                      x: current.x + (nextPoint.x - current.x) * smoothT,
                      y: current.y + (nextPoint.y - current.y) * smoothT
                    })
                  }
                }
                
                path.push(nextPoint)
                drawn.add(closestIdx)
                current = nextPoint
              }
            }

            paths.push(path)
          }

          // Post-process: smooth sparse paths by subdividing long segments
          for (let i = 0; i < paths.length; i++) {
            const path = paths[i]
            if (path.length < 3) continue // Skip very short paths
            
            // Check if path is sparse (few points relative to its length)
            let totalLength = 0
            for (let p = 0; p < path.length - 1; p++) {
              const dx = path[p + 1].x - path[p].x
              const dy = path[p + 1].y - path[p].y
              totalLength += Math.sqrt(dx * dx + dy * dy)
            }
            const avgSegmentLength = totalLength / (path.length - 1)
            const isSparse = path.length < 10 || avgSegmentLength > 15
            
            if (isSparse) {
              // Subdivide long segments in sparse paths
              const smoothedPath: { x: number; y: number }[] = [path[0]]
              
              for (let p = 0; p < path.length - 1; p++) {
                const p1 = path[p]
                const p2 = path[p + 1]
                const dx = p2.x - p1.x
                const dy = p2.y - p1.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                
                // If segment is long, add intermediate points
                if (dist > 8) {
                  const numSubdivisions = Math.min(4, Math.ceil(dist / 6))
                  for (let sub = 1; sub < numSubdivisions; sub++) {
                    const t = sub / numSubdivisions
                    // Use smoother interpolation
                    const smoothT = t * t * t * (t * (t * 6 - 15) + 10) // smootherstep
                    smoothedPath.push({
                      x: p1.x + dx * smoothT,
                      y: p1.y + dy * smoothT
                    })
                  }
                }
                smoothedPath.push(p2)
              }
              
              paths[i] = smoothedPath
            }
          }

          // Post-process: connect nearby path endpoints that might be part of the same curve
          // This handles cases where a path is cut by canvas edges
          // Track which paths have been merged to prevent multiple connections
          const mergedPaths = new Set<number>()
          
          for (let i = 0; i < paths.length; i++) {
            if (mergedPaths.has(i) || paths[i].length === 0) continue

            const path1 = paths[i]
            const start1 = path1[0]
            const end1 = path1[path1.length - 1]

            let bestConnection: { j: number; dist: number; type: string } | null = null

            for (let j = i + 1; j < paths.length; j++) {
              if (mergedPaths.has(j) || paths[j].length === 0) continue

              const path2 = paths[j]
              const start2 = path2[0]
              const end2 = path2[path2.length - 1]

              // Check if endpoints are close (especially when near edges)
              const distStartEnd = Math.sqrt((start1.x - end2.x) ** 2 + (start1.y - end2.y) ** 2)
              const distEndStart = Math.sqrt((end1.x - start2.x) ** 2 + (end1.y - start2.y) ** 2)
              const distStartStart = Math.sqrt((start1.x - start2.x) ** 2 + (start1.y - start2.y) ** 2)
              const distEndEnd = Math.sqrt((end1.x - end2.x) ** 2 + (end1.y - end2.y) ** 2)

              // Find the closest connection
              let minDist = Math.min(distStartEnd, distEndStart, distStartStart, distEndEnd)
              let connectType = ''

              if (minDist < edgeConnectionDist) {
                // Check if at least one endpoint is near an edge
                const start1NearEdge = start1.x < 20 || start1.x > canvas.width - 20 ||
                                      start1.y < 20 || start1.y > canvas.height - 20
                const end1NearEdge = end1.x < 20 || end1.x > canvas.width - 20 ||
                                    end1.y < 20 || end1.y > canvas.height - 20
                const start2NearEdge = start2.x < 20 || start2.x > canvas.width - 20 ||
                                      start2.y < 20 || start2.y > canvas.height - 20
                const end2NearEdge = end2.x < 20 || end2.x > canvas.width - 20 ||
                                    end2.y < 20 || end2.y > canvas.height - 20

                // Connect if endpoints are close and at least one is near an edge
                if ((start1NearEdge || end1NearEdge || start2NearEdge || end2NearEdge) && minDist < 40) {
                  if (minDist === distStartEnd) connectType = 'start1-end2'
                  else if (minDist === distEndStart) connectType = 'end1-start2'
                  else if (minDist === distStartStart) connectType = 'start1-start2'
                  else connectType = 'end1-end2'
                  
                  // Track the best connection (closest)
                  if (!bestConnection || minDist < bestConnection.dist) {
                    bestConnection = { j, dist: minDist, type: connectType }
                  }
                }
              }
            }

              // Only connect to the best (closest) connection to prevent flickering
              if (bestConnection) {
                const j = bestConnection.j
                const path2 = paths[j]
                const start2 = path2[0]
                const minDist = bestConnection.dist
                const connectType = bestConnection.type
                let shouldConnect = true

              if (shouldConnect) {
                // Create a more stable key for this connection using path start positions
                const connectionKey = `${level.toFixed(2)}_${Math.floor(start1.x / 20)}_${Math.floor(start1.y / 20)}_${Math.floor(start2.x / 20)}_${Math.floor(start2.y / 20)}`
                
                // Get previous connection state with stronger hysteresis
                const prevConnection = pathConnectionsRef.current.get(connectionKey)
                let shouldActuallyConnect = shouldConnect
                
                // Apply stronger hysteresis: if previously connected, require much larger distance to disconnect
                if (prevConnection) {
                  if (prevConnection.connected) {
                    // Was connected: require much larger distance to disconnect (add 15px threshold)
                    shouldActuallyConnect = minDist < 55
                  } else {
                    // Was disconnected: require smaller distance to connect (subtract 8px threshold)
                    shouldActuallyConnect = minDist < 32 && shouldConnect
                  }
                  // Update stability counter
                  pathConnectionsRef.current.set(connectionKey, {
                    connected: shouldActuallyConnect,
                    stability: prevConnection.stability + 1
                  })
                } else {
                  // New connection: initialize state
                  pathConnectionsRef.current.set(connectionKey, {
                    connected: shouldActuallyConnect,
                    stability: 1
                  })
                }
                
                // Clean up old connection states
                if (pathConnectionsRef.current.size > 1000) {
                  const entries = Array.from(pathConnectionsRef.current.entries())
                  entries.sort((a, b) => b[1].stability - a[1].stability)
                  pathConnectionsRef.current.clear()
                  entries.slice(0, 500).forEach(([key, value]) => {
                    pathConnectionsRef.current.set(key, value)
                  })
                }
                
                if (shouldActuallyConnect) {
                  // Merge paths with smooth transition
                  let mergedPath: { x: number; y: number }[] = []
                  
                  if (connectType === 'start1-end2') {
                    // Reverse path1 and append path2 with smooth transition
                    const reversedPath1 = [...path1].reverse()
                    const lastPoint = reversedPath1[reversedPath1.length - 1]
                    const firstPoint = path2[0]
                    const dist = Math.sqrt((lastPoint.x - firstPoint.x) ** 2 + (lastPoint.y - firstPoint.y) ** 2)
                    
                    mergedPath = [...reversedPath1]
                    // Add smooth transition points if needed
                    if (dist > 5) {
                      const numTransitions = Math.min(3, Math.ceil(dist / 8))
                      for (let t = 1; t < numTransitions; t++) {
                        const ratio = t / numTransitions
                        const smoothRatio = ratio * ratio * (3 - 2 * ratio) // smoothstep
                        mergedPath.push({
                          x: lastPoint.x + (firstPoint.x - lastPoint.x) * smoothRatio,
                          y: lastPoint.y + (firstPoint.y - lastPoint.y) * smoothRatio
                        })
                      }
                    }
                    mergedPath.push(...path2)
                    paths[i] = mergedPath
                    paths[j] = []
                  } else if (connectType === 'end1-start2') {
                    // Append path2 to path1 with smooth transition
                    const lastPoint = path1[path1.length - 1]
                    const firstPoint = path2[0]
                    const dist = Math.sqrt((lastPoint.x - firstPoint.x) ** 2 + (lastPoint.y - firstPoint.y) ** 2)
                    
                    mergedPath = [...path1]
                    // Add smooth transition points if needed
                    if (dist > 5) {
                      const numTransitions = Math.min(3, Math.ceil(dist / 8))
                      for (let t = 1; t < numTransitions; t++) {
                        const ratio = t / numTransitions
                        const smoothRatio = ratio * ratio * (3 - 2 * ratio) // smoothstep
                        mergedPath.push({
                          x: lastPoint.x + (firstPoint.x - lastPoint.x) * smoothRatio,
                          y: lastPoint.y + (firstPoint.y - lastPoint.y) * smoothRatio
                        })
                      }
                    }
                    mergedPath.push(...path2)
                    paths[i] = mergedPath
                    paths[j] = []
                  } else if (connectType === 'start1-start2') {
                    // Reverse path2 and prepend to path1 with smooth transition
                    const reversedPath2 = [...path2].reverse()
                    const lastPoint = reversedPath2[reversedPath2.length - 1]
                    const firstPoint = path1[0]
                    const dist = Math.sqrt((lastPoint.x - firstPoint.x) ** 2 + (lastPoint.y - firstPoint.y) ** 2)
                    
                    mergedPath = [...reversedPath2]
                    // Add smooth transition points if needed
                    if (dist > 5) {
                      const numTransitions = Math.min(3, Math.ceil(dist / 8))
                      for (let t = 1; t < numTransitions; t++) {
                        const ratio = t / numTransitions
                        const smoothRatio = ratio * ratio * (3 - 2 * ratio) // smoothstep
                        mergedPath.push({
                          x: lastPoint.x + (firstPoint.x - lastPoint.x) * smoothRatio,
                          y: lastPoint.y + (firstPoint.y - lastPoint.y) * smoothRatio
                        })
                      }
                    }
                    mergedPath.push(...path1)
                    paths[i] = mergedPath
                    paths[j] = []
                  } else if (connectType === 'end1-end2') {
                    // Reverse path2 and append to path1 with smooth transition
                    const reversedPath2 = [...path2].reverse()
                    const lastPoint = path1[path1.length - 1]
                    const firstPoint = reversedPath2[0]
                    const dist = Math.sqrt((lastPoint.x - firstPoint.x) ** 2 + (lastPoint.y - firstPoint.y) ** 2)
                    
                    mergedPath = [...path1]
                    // Add smooth transition points if needed
                    if (dist > 5) {
                      const numTransitions = Math.min(3, Math.ceil(dist / 8))
                      for (let t = 1; t < numTransitions; t++) {
                        const ratio = t / numTransitions
                        const smoothRatio = ratio * ratio * (3 - 2 * ratio) // smoothstep
                        mergedPath.push({
                          x: lastPoint.x + (firstPoint.x - lastPoint.x) * smoothRatio,
                          y: lastPoint.y + (firstPoint.y - lastPoint.y) * smoothRatio
                        })
                      }
                    }
                    mergedPath.push(...reversedPath2)
                    paths[i] = mergedPath
                    paths[j] = []
                  }
                }
              }
            }
          }

          // Draw all paths
          for (const path of paths) {
            if (path.length === 0) continue

            // Draw smooth path
            if (path.length > 1) {
              ctx.beginPath()
              // Ensure we start exactly at the first point
              ctx.moveTo(path[0].x, path[0].y)

              if (path.length === 2) {
                // For 2-point paths, ensure proper connection
                const dist = Math.sqrt((path[1].x - path[0].x) ** 2 + (path[1].y - path[0].y) ** 2)
                if (dist < 1.5) {
                  ctx.lineTo(path[1].x, path[1].y)
                } else {
                  const controlX = (path[0].x + path[1].x) / 2
                  const controlY = (path[0].y + path[1].y) / 2
                  ctx.quadraticCurveTo(controlX, controlY, path[1].x, path[1].y)
                }
                ctx.stroke()
                continue
              } else if (path.length === 3) {
                // For 3-point paths, use smooth curve
                ctx.quadraticCurveTo(path[1].x, path[1].y, path[2].x, path[2].y)
                ctx.stroke()
                continue
              } else {
                // Check if path forms a closed loop (only for complete shapes, not cut-off ones)
                const dxToStart = path[path.length - 1].x - path[0].x
                const dyToStart = path[path.length - 1].y - path[0].y
                const distToStart = Math.sqrt(dxToStart * dxToStart + dyToStart * dyToStart)
                
                // Check if path is near canvas edges (indicates shape is cut off)
                const edgeThreshold = 20
                const startNearEdge = path[0].x < edgeThreshold || path[0].x > canvas.width - edgeThreshold ||
                                     path[0].y < edgeThreshold || path[0].y > canvas.height - edgeThreshold
                const endNearEdge = path[path.length - 1].x < edgeThreshold || path[path.length - 1].x > canvas.width - edgeThreshold ||
                                   path[path.length - 1].y < edgeThreshold || path[path.length - 1].y > canvas.height - edgeThreshold
                
                // Calculate path perimeter to ensure it's a real shape, not just a small cluster
                let pathPerimeter = 0
                for (let p = 0; p < path.length - 1; p++) {
                  const dx = path[p + 1].x - path[p].x
                  const dy = path[p + 1].y - path[p].y
                  pathPerimeter += Math.sqrt(dx * dx + dy * dy)
                }
                
                // Create a stable key for this path based on start position and level
                const pathKey = `${level.toFixed(2)}_${Math.floor(path[0].x / 10)}_${Math.floor(path[0].y / 10)}`
                
                // Get previous loop state with hysteresis to prevent flickering
                const prevState = loopStatesRef.current.get(pathKey)
                let shouldBeClosed = distToStart < maxDist * 0.8 &&
                                    !startNearEdge && !endNearEdge &&
                                    pathPerimeter > 50 &&
                                    path.length >= 5
                
                // Apply hysteresis: if previously closed, require larger distance to open
                // If previously open, require smaller distance to close
                if (prevState) {
                  if (prevState.isClosed) {
                    // Was closed: require larger distance to open (add 5px threshold)
                    shouldBeClosed = distToStart < (maxDist * 0.8 + 5)
                  } else {
                    // Was open: require smaller distance to close (subtract 3px threshold)
                    shouldBeClosed = distToStart < (maxDist * 0.8 - 3) && shouldBeClosed
                  }
                  // Update stability counter
                  loopStatesRef.current.set(pathKey, {
                    isClosed: shouldBeClosed,
                    stability: prevState.stability + 1
                  })
                } else {
                  // New path: initialize state
                  loopStatesRef.current.set(pathKey, {
                    isClosed: shouldBeClosed,
                    stability: 1
                  })
                }
                
                // Clean up old states (keep only recent ones to prevent memory leak)
                if (loopStatesRef.current.size > 1000) {
                  const entries = Array.from(loopStatesRef.current.entries())
                  entries.sort((a, b) => b[1].stability - a[1].stability)
                  loopStatesRef.current.clear()
                  entries.slice(0, 500).forEach(([key, value]) => {
                    loopStatesRef.current.set(key, value)
                  })
                }
                
                const isClosedLoop = shouldBeClosed

                // Use simpler, more reliable curve drawing
                // Ensure we draw every segment to prevent gaps
                // Detect if this is a sparse path for smoother curves
                const isSparsePath = path.length < 10
                
                for (let p = 0; p < path.length - 1; p++) {
                  const p1 = path[p]
                  const p2 = path[p + 1]
                  
                  // Calculate distance to ensure proper connection
                  const dx = p2.x - p1.x
                  const dy = p2.y - p1.y
                  const dist = Math.sqrt(dx * dx + dy * dy)
                  
                  // For very close points, always use straight line to ensure connection
                  if (dist < 1.0) {
                    ctx.lineTo(p2.x, p2.y)
                    continue
                  }
                  
                  // For smooth curves, use quadratic curves between consecutive points
                  if (p < path.length - 2) {
                    const p3 = path[p + 2]
                    // Calculate distances to determine if this is a tight curve
                    const distToP3 = Math.sqrt((p3.x - p2.x) ** 2 + (p3.y - p2.y) ** 2)
                    
                    // For sparse paths, use smoother control points
                    if (isSparsePath) {
                      // For sparse paths, use gentler curves with better control points
                      const controlX = p2.x - (p3.x - p1.x) * 0.15 // Gentler for sparse
                      const controlY = p2.y - (p3.y - p1.y) * 0.15
                      ctx.quadraticCurveTo(controlX, controlY, p2.x, p2.y)
                    } else if (dist < 5 || distToP3 < 5) {
                      // For tight curves, use midpoint as control point
                      const controlX = (p1.x + p2.x) / 2
                      const controlY = (p1.y + p2.y) / 2
                      ctx.quadraticCurveTo(controlX, controlY, p2.x, p2.y)
                    } else {
                      // For normal curves, calculate control point for smoothness
                      // Ensure control point doesn't create overshoot, especially for horizontal segments
                      const controlX = p2.x - (p3.x - p1.x) * 0.25
                      const controlY = p2.y - (p3.y - p1.y) * 0.25
                      // Ensure we actually reach p2 by using it as the end point
                      ctx.quadraticCurveTo(controlX, controlY, p2.x, p2.y)
                    }
                  } else {
                    // Last segment - ensure we reach the end point exactly
                    // For sparse paths, use smoother curves
                    if (isSparsePath && dist > 2) {
                      const controlX = p1.x + (p2.x - p1.x) * 0.4
                      const controlY = p1.y + (p2.y - p1.y) * 0.4
                      ctx.quadraticCurveTo(controlX, controlY, p2.x, p2.y)
                    } else {
                      // For horizontal or near-horizontal segments, use simpler curve
                      const isHorizontal = Math.abs(dy) < Math.abs(dx) * 0.3
                      if (isHorizontal && dist > 2) {
                        // For horizontal segments, use a flatter curve
                        const controlX = p1.x + (p2.x - p1.x) * 0.5
                        const controlY = p1.y + (p2.y - p1.y) * 0.3
                        ctx.quadraticCurveTo(controlX, controlY, p2.x, p2.y)
                      } else {
                        // Use a small curve to ensure smooth connection
                        const controlX = p1.x + (p2.x - p1.x) * 0.5
                        const controlY = p1.y + (p2.y - p1.y) * 0.5
                        ctx.quadraticCurveTo(controlX, controlY, p2.x, p2.y)
                      }
                    }
                  }
                }
                
                // Close the loop if it's a complete closed shape
                if (isClosedLoop) {
                  const last = path[path.length - 1]
                  const first = path[0]
                  const second = path.length > 1 ? path[1] : path[0]
                  
                  // Calculate distance from last to first
                  const closeDist = Math.sqrt((last.x - first.x) ** 2 + (last.y - first.y) ** 2)
                  
                  // For small loops, use simpler closing
                  if (closeDist < 5 || path.length < 8) {
                    // For small loops, draw directly to start with a simple curve
                    const controlX = (last.x + first.x) / 2
                    const controlY = (last.y + first.y) / 2
                    ctx.quadraticCurveTo(controlX, controlY, first.x, first.y)
                  } else {
                    // For larger loops, use smooth closing with multiple curves
                    const midX = (last.x + first.x) / 2
                    const midY = (last.y + first.y) / 2
                    ctx.quadraticCurveTo(last.x, last.y, midX, midY)
                    // Final curve to start point using second point for smoothness
                    const controlX = (first.x + second.x) / 2
                    const controlY = (first.y + second.y) / 2
                    ctx.quadraticCurveTo(controlX, controlY, first.x, first.y)
                  }
                  // Ensure we actually reach the start point exactly
                  ctx.lineTo(first.x, first.y)
                }
              }
              ctx.stroke()
            }
          }
        }
      }
    }

    // Draw subtle water-like areas - very light and transparent
    const drawTerrainAreas = (ctx: CanvasRenderingContext2D, map: number[][], mapWidth: number, mapHeight: number) => {
      const spacing = RESOLUTION * 12 // Larger spacing for smoother, more fluid areas
      const brushSize = RESOLUTION * 15

      for (let y = 0; y < mapHeight; y += spacing) {
        for (let x = 0; x < mapWidth; x += spacing) {
          const height = getHeight(map, x, y)
          const canvasX = (x / mapWidth) * canvas.width
          const canvasY = (y / mapHeight) * canvas.height

          const r1 = hash(x, y, 1)
          
          // Very subtle, transparent water-like areas
          // Only draw for lower elevations to create depth
          if (height < 0.2) {
            const normalizedHeight = (height + 0.6) / 0.8 // Normalize to 0-1
            const r = Math.round(BASE_COLOR.r + (ACCENT_COLOR.r - BASE_COLOR.r) * normalizedHeight)
            const g = Math.round(BASE_COLOR.g + (ACCENT_COLOR.g - BASE_COLOR.g) * normalizedHeight)
            const b = Math.round(BASE_COLOR.b + (ACCENT_COLOR.b - BASE_COLOR.b) * normalizedHeight)
            
            // Very light, transparent like water on glass
            const alpha = (0.08 + r1 * 0.05) * (1 - normalizedHeight * 0.5)
            
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
            ctx.beginPath()
            ctx.ellipse(
              canvasX + (r1 - 0.5) * brushSize * 0.3,
              canvasY + (hash(x, y, 2) - 0.5) * brushSize * 0.3,
              brushSize * (0.8 + r1 * 0.4),
              brushSize * (0.6 + hash(x, y, 2) * 0.4),
              r1 * Math.PI * 0.5,
              0,
              Math.PI * 2
            )
            ctx.fill()
          }
        }
      }
    }

    // Animation loop
    const animate = (currentTime: number) => {
      if (!ctx) return

      // Update mouse influence
      if (mousePosRef.current) {
        mouseInfluenceRef.current = Math.min(1, mouseInfluenceRef.current + MOUSE_RAMP)
      } else {
        mouseInfluenceRef.current = Math.max(0, mouseInfluenceRef.current - MOUSE_RAMP)
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mapWidth = Math.ceil(canvas.width / RESOLUTION)
      const mapHeight = Math.ceil(canvas.height / RESOLUTION)

      // Generate or reuse height map with very smooth blending
      if (!heightMapRef.current) {
        heightMapRef.current = generateHeightMap(mapWidth, mapHeight, currentTime)
      } else {
        // Very smooth blending for water-on-glass effect
        const newMap = generateHeightMap(mapWidth, mapHeight, currentTime)
        const oldMap = heightMapRef.current
        const blend = 0.2 // Higher blending for ultra-smooth transitions

        for (let y = 0; y < mapHeight; y++) {
          for (let x = 0; x < mapWidth; x++) {
            heightMapRef.current[y][x] = oldMap[y][x] * (1 - blend) + newMap[y][x] * blend
          }
        }
      }

      timeRef.current = currentTime

      // Draw terrain areas first (background)
      drawTerrainAreas(ctx, heightMapRef.current, mapWidth, mapHeight)

      // Draw contour lines on top
      drawContours(ctx, heightMapRef.current, mapWidth, mapHeight)

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
