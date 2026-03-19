"use client"

import { useCallback } from "react"
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
  Position,
  MarkerType,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

const nodeStyle = {
  background: "#1a1a1a",
  border: "1px solid #2e2e2e",
  borderRadius: "12px",
  padding: "12px 20px",
  color: "#fff",
  fontSize: "13px",
  fontFamily: "var(--font-body), system-ui, sans-serif",
  fontWeight: 600,
}

const studioNodeStyle = {
  ...nodeStyle,
  border: "1px solid rgba(240, 88, 35, 0.3)",
  background: "rgba(240, 88, 35, 0.04)",
}

const labelStyle = {
  ...nodeStyle,
  fontSize: "10px",
  fontFamily: "var(--font-mono), monospace",
  fontWeight: 400,
  color: "#8c8c8c",
  padding: "6px 12px",
}

const nodes: Node[] = [
  {
    id: "designer",
    data: { label: "Designér" },
    position: { x: 0, y: 150 },
    style: nodeStyle,
    sourcePosition: Position.Right,
  },
  {
    id: "orchestrator",
    data: { label: "Orchestrátor" },
    position: { x: 220, y: 150 },
    style: { ...studioNodeStyle, fontSize: "14px" },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "agents",
    data: { label: "Agenti" },
    position: { x: 440, y: 60 },
    style: studioNodeStyle,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "memory",
    data: { label: "Paměť" },
    position: { x: 440, y: 150 },
    style: studioNodeStyle,
    targetPosition: Position.Left,
  },
  {
    id: "tools",
    data: { label: "Nástroje" },
    position: { x: 440, y: 240 },
    style: studioNodeStyle,
    targetPosition: Position.Left,
  },
  {
    id: "pipeline",
    data: { label: "Pipeline" },
    position: { x: 660, y: 150 },
    style: studioNodeStyle,
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "product",
    data: { label: "Produkt" },
    position: { x: 880, y: 150 },
    style: nodeStyle,
    targetPosition: Position.Left,
    sourcePosition: Position.Bottom,
  },
  {
    id: "feedback-label",
    data: { label: "zpětná smyčka" },
    position: { x: 420, y: 340 },
    style: labelStyle,
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
  },
]

const edgeStyle = {
  stroke: "#2e2e2e",
  strokeWidth: 1.5,
}

const primaryEdgeStyle = {
  stroke: "rgba(240, 88, 35, 0.4)",
  strokeWidth: 1.5,
}

const edges: Edge[] = [
  { id: "e1", source: "designer", target: "orchestrator", style: primaryEdgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(240, 88, 35, 0.4)" } },
  { id: "e2", source: "orchestrator", target: "agents", style: primaryEdgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(240, 88, 35, 0.4)" } },
  { id: "e3", source: "orchestrator", target: "memory", style: edgeStyle },
  { id: "e4", source: "orchestrator", target: "tools", style: edgeStyle },
  { id: "e5", source: "agents", target: "pipeline", style: primaryEdgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(240, 88, 35, 0.4)" } },
  { id: "e6", source: "pipeline", target: "product", style: primaryEdgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(240, 88, 35, 0.4)" } },
  { id: "e7", source: "product", target: "feedback-label", style: { ...edgeStyle, strokeDasharray: "6 4" }, type: "smoothstep" },
  { id: "e8", source: "feedback-label", target: "orchestrator", style: { ...edgeStyle, strokeDasharray: "6 4" }, type: "smoothstep", markerEnd: { type: MarkerType.ArrowClosed, color: "#2e2e2e" } },
]

export function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-border overflow-hidden" style={{ height: 420 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.3 }}
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
        <Background color="#1a1a1a" gap={20} size={1} />
      </ReactFlow>
    </div>
  )
}
