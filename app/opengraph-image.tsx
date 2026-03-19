import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Levou zadní — AI studio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          levou zadní
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#f05823",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}
        >
          AI studio
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#8c8c8c",
            marginTop: 32,
            maxWidth: 600,
            textAlign: "center" as const,
            lineHeight: 1.6,
          }}
        >
          Od nápadu k produktu. Weby, aplikace, prototypy, experimenty.
        </div>
      </div>
    ),
    { ...size }
  )
}
