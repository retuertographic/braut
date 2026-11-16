"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Reproduces the source's WOW.js "fadeInUp" (200ms delay) when the element enters the viewport. */
export function FadeUp({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`bx-fade-up${visible ? " is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
