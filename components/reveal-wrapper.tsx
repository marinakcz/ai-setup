"use client";

import { useRef } from "react";
import { useMountEffect } from "@/hooks/use-mount-effect";

export function RevealWrapper({
  children,
  className,
  threshold = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useMountEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  });

  return (
    <div
      ref={ref}
      className={`reveal-group${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
