"use client"

import dynamic from "next/dynamic"

const Isoflow = dynamic(() => import("isoflow").then(m => m.default), { ssr: false })

const colors = [
  { id: "primary", value: "#f05823" },
  { id: "dark", value: "#2a2a2a" },
  { id: "muted", value: "#444444" },
  { id: "accent", value: "#ff8c5a" },
]

const icons = [
  { id: "person", name: "Person", url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='30' r='20' fill='%23f05823'/%3E%3Cellipse cx='50' cy='80' rx='30' ry='20' fill='%23f05823'/%3E%3C/svg%3E" },
  { id: "server", name: "Server", url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='15' y='10' width='70' height='80' rx='8' fill='%232a2a2a' stroke='%23f05823' stroke-width='2'/%3E%3Ccircle cx='50' cy='35' r='6' fill='%23f05823'/%3E%3Crect x='30' y='55' width='40' height='4' rx='2' fill='%23555'/%3E%3Crect x='30' y='65' width='40' height='4' rx='2' fill='%23555'/%3E%3C/svg%3E" },
  { id: "box", name: "Box", url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='10' y='10' width='80' height='80' rx='8' fill='%232a2a2a' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E" },
  { id: "db", name: "Database", url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='25' rx='35' ry='15' fill='%232a2a2a' stroke='%23f05823' stroke-width='2'/%3E%3Cpath d='M15 25v50c0 8 15 15 35 15s35-7 35-15V25' fill='%232a2a2a' stroke='%23f05823' stroke-width='2'/%3E%3C/svg%3E" },
  { id: "cloud", name: "Cloud", url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M75 45a20 20 0 00-38-5 15 15 0 00-22 13 12 12 0 005 23h50a15 15 0 005-31z' fill='%232a2a2a' stroke='%23666' stroke-width='1.5'/%3E%3C/svg%3E" },
]

const initialData = {
  title: "AI Studio Architecture",
  icons,
  colors,
  items: [
    { id: "designer", name: "Designér", icon: "person", description: "Brief, směr, schválení" },
    { id: "orchestrator", name: "Orchestrátor", icon: "server", description: "Plánuje, deleguje, rozhoduje" },
    { id: "agents", name: "Agenti", icon: "box", description: "Izolovaní specialisté v kontejnerech" },
    { id: "memory", name: "Paměť", icon: "db", description: "Databáze, vektory, naučené znalosti" },
    { id: "tools", name: "Nástroje", icon: "box", description: "Figma, GitHub, Playwright, Vercel..." },
    { id: "pipeline", name: "Pipeline", icon: "box", description: "Build, test, deploy" },
    { id: "product", name: "Produkt", icon: "cloud", description: "Web, aplikace, prototyp" },
  ],
  connectors: [
    { id: "c1", from: "designer", to: "orchestrator", color: "primary" },
    { id: "c2", from: "orchestrator", to: "agents", color: "primary" },
    { id: "c3", from: "agents", to: "tools" },
    { id: "c4", from: "agents", to: "memory" },
    { id: "c5", from: "agents", to: "pipeline", color: "primary" },
    { id: "c6", from: "pipeline", to: "product", color: "primary" },
    { id: "c7", from: "product", to: "orchestrator", color: "accent" },
  ],
  views: [
    {
      id: "main",
      name: "Main",
      itemOverrides: {
        designer: { position: [0, 3] },
        orchestrator: { position: [3, 3] },
        agents: { position: [6, 2] },
        memory: { position: [6, 5] },
        tools: { position: [9, 1] },
        pipeline: { position: [9, 4] },
        product: { position: [12, 3] },
      },
    },
  ],
}

export function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto" style={{ height: "400px" }}>
      <Isoflow
        initialData={initialData}
        width="100%"
        height={400}
      />
    </div>
  )
}
