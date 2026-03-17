"use client"

import { useEffect, useRef } from "react"
import { createNoise3D } from "simplex-noise"

const NODE_COUNT = 60
const CONNECTION_DIST = 150
const CODE_CHARS = ["{}", "=>", "//", "fn", "AI", ">>", "&&", "::","<>", "01", "**", "$$"]
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
        })
      }
    }

    function draw() {
      tick++
      ctx.clearRect(0, 0, w, h)

      // Update nodes with noise-influenced movement
      for (const node of nodes) {
        const n = noise3D(node.x * 0.002, node.y * 0.002, tick * 0.0003)
        node.vx += Math.cos(n * Math.PI * 2) * 0.02
        node.vy += Math.sin(n * Math.PI * 2) * 0.02

        // Dampen
        node.vx *= 0.99
        node.vy *= 0.99

        // Clamp speed
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        const maxSpeed = BASE_SPEED + RANGE_SPEED
        if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed
          node.vy = (node.vy / speed) * maxSpeed
        }

        node.x += node.vx
        node.y += node.vy

        // Wrap around
        if (node.x < -20) node.x = w + 20
        if (node.x > w + 20) node.x = -20
        if (node.y < -20) node.y = h + 20
        if (node.y > h + 20) node.y = -20
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12
            ctx.strokeStyle = `rgba(240, 88, 35, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        if (node.char) {
          // Code character
          ctx.font = "10px 'JetBrains Mono', monospace"
          ctx.fillStyle = `rgba(240, 88, 35, ${node.alpha * 0.6})`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(node.char, node.x, node.y)
        } else {
          // Dot
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(240, 88, 35, ${node.alpha})`
          ctx.fill()
        }
      }

      // Occasional pulse on a random connection (signal traveling)
      if (tick % 90 === 0) {
        const pulseNode = nodes[Math.floor(Math.random() * nodes.length)]
        ctx.beginPath()
        ctx.arc(pulseNode.x, pulseNode.y, 8, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(240, 88, 35, 0.08)"
        ctx.fill()
      }

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    initNodes()
    draw()

    window.addEventListener("resize", () => {
      resize()
      initNodes()
    })

    return () => {
      cancelAnimationFrame(animFrame)
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
