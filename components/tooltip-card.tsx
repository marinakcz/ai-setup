"use client";

import { useRef } from "react";

export function TooltipCard() {
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const show = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = "1";
      tooltipRef.current.style.transform = "scale(1)";
    }
  };
  const hide = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = "0";
      tooltipRef.current.style.transform = "scale(0.95)";
    }
  };

  return (
    <span
      className="relative inline-block text-primary cursor-default"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <span className="decoration-primary/40 decoration-dashed underline underline-offset-4 cursor-help">
        přemýšlet správně
      </span>
      <span
        ref={tooltipRef}
        role="tooltip"
        className="pointer-events-none absolute -top-44 left-1/2 -translate-x-1/2 z-50 w-64 px-5 py-4 rounded-xl bg-card border border-border shadow-2xl transition-all duration-200"
        style={{ opacity: 0, transform: "scale(0.95)" }}
      >
        <span className="block font-mono text-xs text-muted-foreground mb-3">
          Pořád platí:
        </span>
        <span className="flex items-center justify-center gap-3 font-mono text-base mt-1">
          <span className="inline-flex flex-col items-center">
            <span className="text-foreground font-medium">rozhodnutí</span>
            <span className="w-full h-px bg-muted-foreground/50 my-1" />
            <span className="text-foreground font-bold">2</span>
          </span>
          <span className="text-muted-foreground">=</span>
          <span className="text-foreground font-bold">bordel²</span>
        </span>
      </span>
    </span>
  );
}
