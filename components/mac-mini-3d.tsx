"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function MacMini3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const w = container.offsetWidth
    const h = container.offsetHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100)
    camera.position.set(0, 2.5, 5)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2)
    keyLight.position.set(3, 5, 4)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x8899bb, 0.4)
    fillLight.position.set(-3, 2, -2)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3)
    rimLight.position.set(0, 0, -5)
    scene.add(rimLight)

    // Mac Mini body — rounded box
    const bodyWidth = 2.8
    const bodyHeight = 0.45
    const bodyDepth = 2.8
    const radius = 0.12

    // Create rounded box shape
    const shape = new THREE.Shape()
    const x = -bodyWidth / 2
    const y = -bodyDepth / 2
    shape.moveTo(x + radius, y)
    shape.lineTo(x + bodyWidth - radius, y)
    shape.quadraticCurveTo(x + bodyWidth, y, x + bodyWidth, y + radius)
    shape.lineTo(x + bodyWidth, y + bodyDepth - radius)
    shape.quadraticCurveTo(x + bodyWidth, y + bodyDepth, x + bodyWidth - radius, y + bodyDepth)
    shape.lineTo(x + radius, y + bodyDepth)
    shape.quadraticCurveTo(x, y + bodyDepth, x, y + bodyDepth - radius)
    shape.lineTo(x, y + radius)
    shape.quadraticCurveTo(x, y, x + radius, y)

    const extrudeSettings = {
      depth: bodyHeight,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 3,
    }

    const bodyGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    bodyGeo.rotateX(-Math.PI / 2)
    bodyGeo.translate(0, bodyHeight / 2, 0)

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 0.85,
      roughness: 0.15,
    })
    const body = new THREE.Mesh(bodyGeo, bodyMat)
    scene.add(body)

    // Bottom dark band
    const bandGeo = new THREE.CylinderGeometry(1.35, 1.35, 0.06, 64)
    const bandMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.3,
      roughness: 0.6,
    })
    const band = new THREE.Mesh(bandGeo, bandMat)
    band.position.y = 0.03
    scene.add(band)

    // Apple logo (simple circle on top as subtle indent)
    const logoGeo = new THREE.CircleGeometry(0.2, 32)
    const logoMat = new THREE.MeshStandardMaterial({
      color: 0xa8a8a8,
      metalness: 0.9,
      roughness: 0.1,
    })
    const logo = new THREE.Mesh(logoGeo, logoMat)
    logo.rotation.x = -Math.PI / 2
    logo.position.y = bodyHeight + 0.05
    scene.add(logo)

    // Front LED dot
    const ledGeo = new THREE.SphereGeometry(0.02, 16, 16)
    const ledMat = new THREE.MeshStandardMaterial({
      color: 0xf05823,
      emissive: 0xf05823,
      emissiveIntensity: 2,
    })
    const led = new THREE.Mesh(ledGeo, ledMat)
    led.position.set(0, bodyHeight * 0.4, bodyDepth / 2 + 0.06)
    scene.add(led)

    // Ground reflection plane
    const groundGeo = new THREE.PlaneGeometry(10, 10)
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0d0d0d,
      metalness: 0.0,
      roughness: 0.95,
      transparent: true,
      opacity: 0.5,
    })
    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.01
    scene.add(ground)

    // Animation
    let animFrame: number
    const clock = new THREE.Clock()

    function animate() {
      const elapsed = clock.getElapsedTime()

      // Slow auto-rotation
      body.rotation.y = elapsed * 0.15
      band.rotation.y = elapsed * 0.15
      logo.position.x = Math.sin(elapsed * 0.15) * 0
      logo.rotation.z = elapsed * 0.15
      led.position.x = Math.sin(body.rotation.y) * (bodyDepth / 2 + 0.06)
      led.position.z = Math.cos(body.rotation.y) * (bodyDepth / 2 + 0.06)

      // LED pulse
      ledMat.emissiveIntensity = 1.5 + Math.sin(elapsed * 2) * 0.5

      renderer.render(scene, camera)
      animFrame = requestAnimationFrame(animate)
    }

    animate()

    // Resize
    const onResize = () => {
      const w = container.offsetWidth
      const h = container.offsetHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener("resize", onResize)
      renderer.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full max-w-3xl mx-auto mb-12"
      style={{ aspectRatio: "16/10" }}
    />
  )
}
