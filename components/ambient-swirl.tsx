"use client"

import { useEffect, useRef } from "react"
import { createNoise3D } from "simplex-noise"

const NODE_COUNT = 60
const CONNECTION_DIST = 150
const CODE_CHARS = ["{}", "=>", "//", "fn", "AI", ">>", "&&", "::", "<>", "01", "**"]
const BASE_SPEED = 0.3
const RANGE_SPEED = 0.4

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  char: string | null
  alpha: number
  glow: number
}

interface Pulse {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
}

export function AmbientSwirl() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement("canvas")
    canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;"
    container.appendChild(canvas)
    const ctx = canvas.getContext("2d")!

    const noise3D = createNoise3D()
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    let tick = 0
    let animFrame: number
    let w = 0
    let h = 0

    function resize() {
      w = container!.offsetWidth
      h = container!.offsetHeight
      canvas.width = w
      canvas.height = h
    }

    function initNodes() {
      nodes = []
      for (let i = 0; i < NODE_COUNT; i++) {
        const hasChar = Math.random() < 0.3
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * BASE_SPEED,
          vy: (Math.random() - 0.5) * BASE_SPEED,
          radius: hasChar ? 0 : 1.5 + Math.random() * 1.5,
          char: hasChar ? CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)] : null,
          alpha: 0.15 + Math.random() * 0.35,
          glow: 0,
        })
      }
    }

    function draw() {
      tick++
      ctx.clearRect(0, 0, w, h)

      // Trigger pulse every ~120 frames
      if (tick % 120 === 0) {
        const source = nodes[Math.floor(Math.random() * nodes.length)]
        source.glow = 1
        pulses.push({
          x: source.x,
          y: source.y,
          radius: 0,
          maxRadius: CONNECTION_DIST * 1.8,
          alpha: 0.25,
        })

        // Light up nearby nodes with delay
        for (const other of nodes) {
          const dx = source.x - other.x
          const dy = source.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST && other !== source) {
            other.glow = Math.max(other.glow, 0.7 * (1 - dist / CONNECTION_DIST))
          }
        }
      }

      // Update nodes
      for (const node of nodes) {
        const n = noise3D(node.x * 0.002, node.y * 0.002, tick * 0.0003)
        node.vx += Math.cos(n * Math.PI * 2) * 0.02
        node.vy += Math.sin(n * Math.PI * 2) * 0.02
        node.vx *= 0.99
        node.vy *= 0.99

        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        const maxSpeed = BASE_SPEED + RANGE_SPEED
        if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed
          node.vy = (node.vy / speed) * maxSpeed
        }

        node.x += node.vx
        node.y += node.vy
        node.glow *= 0.96

        if (node.x < -20) node.x = w + 20
        if (node.x > w + 20) node.x = -20
        if (node.y < -20) node.y = h + 20
        if (node.y > h + 20) node.y = -20
      }

      // Update and draw pulses (expanding rings)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.radius += 2.5
        p.alpha *= 0.97

        if (p.alpha < 0.01) {
          pulses.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(240, 88, 35, ${p.alpha * 0.3})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const proximity = 1 - dist / CONNECTION_DIST
            const glowBoost = Math.max(nodes[i].glow, nodes[j].glow)
            const baseAlpha = proximity * 0.12
            const alpha = baseAlpha + glowBoost * proximity * 0.4

            ctx.strokeStyle = `rgba(240, 88, 35, ${alpha})`
            ctx.lineWidth = 0.5 + glowBoost * 1.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const glowAlpha = node.alpha + node.glow * 0.6

        // Glow halo when lit up
        if (node.glow > 0.1) {
          const haloRadius = (node.char ? 12 : 6) + node.glow * 10
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, haloRadius
          )
          gradient.addColorStop(0, `rgba(240, 88, 35, ${node.glow * 0.15})`)
          gradient.addColorStop(1, "rgba(240, 88, 35, 0)")
          ctx.beginPath()
          ctx.arc(node.x, node.y, haloRadius, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }

        if (node.char) {
          ctx.font = "10px 'JetBrains Mono', monospace"
          ctx.fillStyle = `rgba(240, 88, 35, ${glowAlpha * 0.6})`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(node.char, node.x, node.y)
        } else {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius + node.glow * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(240, 88, 35, ${glowAlpha})`
          ctx.fill()
        }
      }

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    initNodes()
    draw()

    const onResize = () => { resize(); initNodes() }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener("resize", onResize)
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    />
  )
}
