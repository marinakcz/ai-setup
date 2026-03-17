"use client"

import { useEffect, useRef } from "react"
import { createNoise3D } from "simplex-noise"

const POINTS = 180
const RADIUS = 200
const NOISE_SCALE = 0.8
const NOISE_SPEED = 0.0008

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
    let animFrame: number
    let w = 0
    let h = 0
    let tick = 0

    function resize() {
      w = container!.offsetWidth
      h = container!.offsetHeight
      canvas.width = w
      canvas.height = h
    }

    function draw() {
      tick++
      ctx.clearRect(0, 0, w, h)

      const cx = w * 0.5
      const cy = h * 0.5
      const baseRadius = Math.min(w, h) * 0.28
      const t = tick * NOISE_SPEED

      // Draw multiple layered blobs
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 1.5
        const layerAlpha = [0.06, 0.04, 0.025][layer]
        const layerScale = [1, 1.3, 1.6][layer]
        const layerHue = [14, 20, 8][layer]

        ctx.beginPath()

        for (let i = 0; i <= POINTS; i++) {
          const angle = (i / POINTS) * Math.PI * 2
          const nx = Math.cos(angle) * 2
          const ny = Math.sin(angle) * 2

          const noiseVal = noise3D(
            nx + layerOffset,
            ny + layerOffset,
            t + layerOffset * 0.3
          )

          const r = baseRadius * layerScale + noiseVal * baseRadius * NOISE_SCALE

          const x = cx + Math.cos(angle) * r
          const y = cy + Math.sin(angle) * r

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.closePath()

        // Fill with radial gradient
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * layerScale * 1.5)
        gradient.addColorStop(0, `hsla(${layerHue}, 89%, 55%, ${layerAlpha * 2})`)
        gradient.addColorStop(0.5, `hsla(${layerHue}, 89%, 45%, ${layerAlpha})`)
        gradient.addColorStop(1, `hsla(${layerHue}, 89%, 35%, 0)`)

        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Soft glow in center
      const glowGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 0.6)
      glowGradient.addColorStop(0, "rgba(240, 88, 35, 0.04)")
      glowGradient.addColorStop(1, "rgba(240, 88, 35, 0)")
      ctx.beginPath()
      ctx.arc(cx, cy, baseRadius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const onResize = () => resize()
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
