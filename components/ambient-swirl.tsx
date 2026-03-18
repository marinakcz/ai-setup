"use client"

import { useEffect, useRef } from "react"
import { createNoise3D } from "simplex-noise"

const PARTICLE_COUNT = 400
const PARTICLE_PROP_COUNT = 9
const PARTICLE_PROPS_LENGTH = PARTICLE_COUNT * PARTICLE_PROP_COUNT
const RANGE_Y = 100
const BASE_TTL = 50
const RANGE_TTL = 150
const BASE_SPEED = 0.1
const RANGE_SPEED = 1.4
const BASE_RADIUS = 1
const RANGE_RADIUS = 2.5
const BASE_HUE = 10
const RANGE_HUE = 30
const NOISE_STEPS = 8
const X_OFF = 0.00125
const Y_OFF = 0.00125
const Z_OFF = 0.0005

const TAU = 2 * Math.PI
const rand = (n: number) => n * Math.random()
const randRange = (n: number) => n - rand(2 * n)
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m
  return Math.abs((t + hm) % m - hm) / hm
}
const lerp = (n1: number, n2: number, speed: number) =>
  (1 - speed) * n1 + speed * n2

export function AmbientSwirl() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvasA = document.createElement("canvas")
    const canvasB = document.createElement("canvas")
    canvasB.style.cssText =
      "position:absolute;top:0;left:0;width:100%;height:100%;"
    container.appendChild(canvasB)

    const ctxA = canvasA.getContext("2d")!
    const ctxB = canvasB.getContext("2d")!
    const center: number[] = []

    const noise3D = createNoise3D()
    const particleProps = new Float32Array(PARTICLE_PROPS_LENGTH)
    let tick = 0
    let animFrame: number

    function resize() {
      const w = container!.offsetWidth
      const h = container!.offsetHeight
      canvasA.width = w
      canvasA.height = h
      canvasB.width = w
      canvasB.height = h
      center[0] = 0.5 * w
      center[1] = 0.5 * h
    }

    function initParticle(i: number) {
      const x = rand(canvasA.width)
      const y = center[1] + randRange(RANGE_Y)
      particleProps.set(
        [
          x, y, 0, 0, 0,
          BASE_TTL + rand(RANGE_TTL),
          BASE_SPEED + rand(RANGE_SPEED),
          BASE_RADIUS + rand(RANGE_RADIUS),
          BASE_HUE + rand(RANGE_HUE),
        ],
        i
      )
    }

    function initParticles() {
      for (let i = 0; i < PARTICLE_PROPS_LENGTH; i += PARTICLE_PROP_COUNT) {
        initParticle(i)
      }
    }

    function drawParticles() {
      for (let i = 0; i < PARTICLE_PROPS_LENGTH; i += PARTICLE_PROP_COUNT) {
        const i2 = 1 + i,
          i3 = 2 + i,
          i4 = 3 + i,
          i5 = 4 + i,
          i6 = 5 + i,
          i7 = 6 + i,
          i8 = 7 + i,
          i9 = 8 + i

        const x = particleProps[i]
        const y = particleProps[i2]
        const n =
          noise3D(x * X_OFF, y * Y_OFF, tick * Z_OFF) * NOISE_STEPS * TAU
        const vx = lerp(particleProps[i3], Math.cos(n), 0.5)
        const vy = lerp(particleProps[i4], Math.sin(n), 0.5)
        let life = particleProps[i5]
        const ttl = particleProps[i6]
        const speed = particleProps[i7]
        const x2 = x + vx * speed
        const y2 = y + vy * speed
        const radius = particleProps[i8]
        const hue = particleProps[i9]

        ctxA.save()
        ctxA.lineCap = "round"
        ctxA.lineWidth = radius
        ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
        ctxA.beginPath()
        ctxA.moveTo(x, y)
        ctxA.lineTo(x2, y2)
        ctxA.stroke()
        ctxA.closePath()
        ctxA.restore()

        life++
        particleProps[i] = x2
        particleProps[i2] = y2
        particleProps[i3] = vx
        particleProps[i4] = vy
        particleProps[i5] = life

        if (
          x2 > canvasA.width ||
          x2 < 0 ||
          y2 > canvasA.height ||
          y2 < 0 ||
          life > ttl
        ) {
          initParticle(i)
        }
      }
    }

    function draw() {
      tick++
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height)
      ctxB.clearRect(0, 0, canvasB.width, canvasB.height)

      drawParticles()

      // Glow
      ctxB.save()
      ctxB.filter = "blur(8px) brightness(200%)"
      ctxB.globalCompositeOperation = "lighter"
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()

      ctxB.save()
      ctxB.filter = "blur(4px) brightness(200%)"
      ctxB.globalCompositeOperation = "lighter"
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()

      // Render
      ctxB.save()
      ctxB.globalCompositeOperation = "lighter"
      ctxB.drawImage(canvasA, 0, 0)
      ctxB.restore()

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener("resize", resize)
      if (canvasB.parentNode) canvasB.parentNode.removeChild(canvasB)
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
