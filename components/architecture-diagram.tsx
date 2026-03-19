"use client"

import { useState, useCallback } from "react"
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
  type NodeProps,
  Position,
  MarkerType,
  Handle,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

// Custom node with tooltip
function TooltipNode({ data }: NodeProps) {
  const [hover, setHover] = useState(false)
  const style = data.nodeStyle as React.CSSProperties

  return (
    <div
      style={{
        ...style,
        transition: "border-color 0.2s, background 0.2s",
        ...(hover ? { borderColor: "rgba(240, 88, 35, 0.6)", background: "rgba(240, 88, 35, 0.08)" } : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative cursor-default"
    >
      {data.targetPos && <Handle type="target" position={data.targetPos as Position} style={{ opacity: 0 }} />}
      {data.sourcePos && <Handle type="source" position={data.sourcePos as Position} style={{ opacity: 0 }} />}
      {data.label as string}
      {data.tip && (
        <div
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-white text-[#0d0d0d] text-[10px] font-mono whitespace-nowrap transition-all duration-200"
          style={{
            opacity: hover ? 1 : 0,
            transform: hover ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.95)",
          }}
        >
          {data.tip as string}
        </div>
      )}
    </div>
  )
}

const nodeTypes = { tooltip: TooltipNode }

const base = {
  background: "#1a1a1a",
  border: "1px solid #2e2e2e",
  borderRadius: "12px",
  padding: "12px 20px",
  color: "#fff",
  fontSize: "13px",
  fontFamily: "var(--font-body), system-ui, sans-serif",
  fontWeight: 600,
  cursor: "default",
}

const studioStyle = {
  ...base,
  border: "1px solid rgba(240, 88, 35, 0.3)",
  background: "rgba(240, 88, 35, 0.04)",
}

const inputStyle = {
  ...base,
  border: "1px solid rgba(140, 140, 140, 0.4)",
  background: "#222",
  color: "#bbb",
}

const feedbackStyle = {
  ...base,
  fontSize: "10px",
  fontFamily: "var(--font-mono), monospace",
  fontWeight: 400,
  color: "#666",
  padding: "6px 14px",
  border: "1px dashed #333",
  background: "transparent",
}

const nodes: Node[] = [
  {
    id: "designer", type: "tooltip", position: { x: 0, y: 150 },
    data: { label: "Designér", tip: "Zadá brief. Schválí plán. Řídí směr.", nodeStyle: inputStyle, sourcePos: Position.Right },
  },
  {
    id: "orchestrator", type: "tooltip", position: { x: 250, y: 150 },
    data: { label: "Orchestrátor", tip: "Rozloží úkol na kroky. Vybere agenty. Koordinuje.", nodeStyle: { ...studioStyle, fontSize: "14px" }, sourcePos: Position.Right, targetPos: Position.Left },
  },
  {
    id: "agents", type: "tooltip", position: { x: 500, y: 50 },
    data: { label: "Agenti", tip: "Každý má roli. Frontend, backend, QA, obsah. Běží izolovaně.", nodeStyle: studioStyle, targetPos: Position.Left, sourcePos: Position.Right },
  },
  {
    id: "memory", type: "tooltip", position: { x: 500, y: 150 },
    data: { label: "Paměť", tip: "Databáze, vektory, poznatky. Agenti si odsud čtou kontext.", nodeStyle: studioStyle, targetPos: Position.Left },
  },
  {
    id: "tools", type: "tooltip", position: { x: 500, y: 250 },
    data: { label: "Nástroje", tip: "MCP servery. Figma, GitHub, Playwright, Vercel, Sentry.", nodeStyle: studioStyle, targetPos: Position.Left },
  },
  {
    id: "pipeline", type: "tooltip", position: { x: 730, y: 150 },
    data: { label: "Pipeline", tip: "Build, testy, deploy. Automaticky, bez zásahu.", nodeStyle: studioStyle, targetPos: Position.Left, sourcePos: Position.Right },
  },
  {
    id: "product", type: "tooltip", position: { x: 960, y: 150 },
    data: { label: "Produkt", tip: "Hotový web, aplikace nebo prototyp. Nasazený a živý.", nodeStyle: inputStyle, targetPos: Position.Left, sourcePos: Position.Bottom },
  },
  {
    id: "feedback", type: "tooltip", position: { x: 470, y: 360 },
    data: { label: "zpětná smyčka", tip: "Sleduje chyby a výkon. Učí se. Navrhuje vylepšení.", nodeStyle: feedbackStyle, targetPos: Position.Right, sourcePos: Position.Left },
  },
]

const orange = "rgba(240, 88, 35, 0.4)"
const grey = "#2e2e2e"

const edges: Edge[] = [
  { id: "e1", source: "designer", target: "orchestrator", animated: true, style: { stroke: orange, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: orange } },
  { id: "e2", source: "orchestrator", target: "agents", animated: true, style: { stroke: orange, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: orange } },
  { id: "e3", source: "orchestrator", target: "memory", style: { stroke: grey, strokeWidth: 1 } },
  { id: "e4", source: "orchestrator", target: "tools", style: { stroke: grey, strokeWidth: 1 } },
  { id: "e5", source: "agents", target: "pipeline", animated: true, style: { stroke: orange, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: orange } },
  { id: "e6", source: "pipeline", target: "product", animated: true, style: { stroke: orange, strokeWidth: 1.5 }, markerEnd: { type: MarkerType.ArrowClosed, color: orange } },
  { id: "e7", source: "product", target: "feedback", type: "smoothstep", style: { stroke: grey, strokeWidth: 1, strokeDasharray: "6 4" } },
  { id: "e8", source: "feedback", target: "orchestrator", type: "smoothstep", animated: true, style: { stroke: grey, strokeWidth: 1, strokeDasharray: "6 4" }, markerEnd: { type: MarkerType.ArrowClosed, color: grey } },
]

export function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto" style={{ height: 450, minWidth: 0 }}>
      <div style={{ minWidth: 700, height: 450 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: "#0d0d0d" }}
      >
        <Background color="#1a1a1a" gap={24} size={1} />
      </ReactFlow>
      </div>
    </div>
  )
}
