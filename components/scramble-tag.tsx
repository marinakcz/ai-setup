"use client"

import { useEffect, useRef } from "react"

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________"

function useScramble(text: string, delay = 0) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasRun.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true
        observer.unobserve(el)

        const randomChar = () =>
          SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]

        const oldText = el.innerText
        const length = Math.max(oldText.length, text.length)
        const queue: { from: string; to: string; start: number; end: number; char?: string }[] = []
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ""
          const to = text[i] || ""
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          queue.push({ from, to, start, end })
        }

        let frame = 0
        let frameReq: number
        const delayFrames = Math.floor(delay / 16)

        const update = () => {
          if (frame < delayFrames) {
            frame++
            frameReq = requestAnimationFrame(update)
            return
          }

          const currentFrame = frame - delayFrames
          let output = ""
          let complete = 0

          for (let i = 0; i < queue.length; i++) {
            const { from, to, start, end } = queue[i]
            let { char } = queue[i]

            if (currentFrame >= end) {
              complete++
              output += to
            } else if (currentFrame >= start) {
              if (!char || Math.random() < 0.28) {
                char = randomChar()
                queue[i].char = char
              }
              output += `<span class="scramble-dud">${char}</span>`
            } else {
              output += from
            }
          }

          el.innerHTML = output

          if (complete === queue.length) {
            el.innerHTML = text
          } else {
            frame++
            frameReq = requestAnimationFrame(update)
          }
        }

        frameReq = requestAnimationFrame(update)
        return () => cancelAnimationFrame(frameReq)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [text, delay])

  return ref
}

export function ScrambleTag({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useScramble(text, delay)
  return <span ref={ref}>{text}</span>
}
