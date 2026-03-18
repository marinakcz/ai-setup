import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const TO_EMAIL = "studio@levouzadni.cz"
const FROM_EMAIL = "studio@levouzadni.cz" // needs verified domain in Resend

// Simple in-memory rate limit (per IP, 3 submissions per hour)
const submissions = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const hourAgo = now - 3600_000
  const times = (submissions.get(ip) || []).filter((t) => t > hourAgo)
  if (times.length >= 3) return true
  times.push(now)
  submissions.set(ip, times)
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Příliš mnoho zpráv. Zkuste to později." }, { status: 429 })
    }

    const body = await req.json()
    const { name, email, phone, interests, description, website } = body

    // Honeypot check
    if (website) {
      return NextResponse.json({ ok: true }) // fake success for bots
    }

    // Validation
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Vyplňte jméno a e-mail." }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Neplatný e-mail." }, { status: 400 })
    }

    // Build email
    const lines = [
      `Jméno: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      interests ? `Zajímá: ${interests}` : null,
      "",
      description || "(bez popisu)",
    ]
      .filter(Boolean)
      .join("\n")

    if (!resend) {
      console.error("RESEND_API_KEY not configured")
      return NextResponse.json({ error: "E-mail služba není nakonfigurována." }, { status: 500 })
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Levou zadní — ${name}`,
      text: lines,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Něco se pokazilo. Zkuste to znovu." }, { status: 500 })
  }
}
