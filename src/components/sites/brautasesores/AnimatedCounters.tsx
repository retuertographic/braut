"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type Counter = { icon: ReactNode; value: number; label: string };

/* jQuery "swing" easing used by SP Page Builder's animated number addon. */
const swing = (p: number) => 0.5 - Math.cos(p * Math.PI) / 2;

/*
 * SP Page Builder "animated number": empty until the bar scrolls into view, then counts from 0 to the
 * value. The source sets each counter's duration (ms) equal to its value.
 */
function AnimatedNumber({ value, start }: { value: number; start: boolean }) {
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const duration = Math.max(value, 1);
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setShown(Math.round(swing(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return <div className="bxa-counter-number">{shown ?? " "}</div>;
}

export function AnimatedCounters({ items }: { items: Counter[] }) {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bxa-counters" ref={ref}>
      <div className="bx-container bxa-counters-grid">
        {items.map((c) => (
          <div className="bxa-counter" key={c.label}>
            <div className="bxa-counter-icon" aria-hidden="true">
              {c.icon}
            </div>
            <AnimatedNumber value={c.value} start={start} />
            <div className="bxa-counter-title">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
