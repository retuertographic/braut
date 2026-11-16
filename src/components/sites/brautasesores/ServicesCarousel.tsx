"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ASSET } from "./data";

const ITEMS = [
  { label: "Autónomos", href: "/servicios/autonomos", image: `${ASSET}/a.jpg` },
  { label: "Pymes", href: "/servicios/pymes", image: `${ASSET}/aeras-footer1.jpg` },
  { label: "Emprendedores", href: "/servicios/emprendedores", image: `${ASSET}/aeras-footer2.jpg` },
];

const MARGIN = 20;
const SPEED = 800;
const INTERVAL = 3998;
const CLONES = 2;

/* Side padding per breakpoint from the source carousel config (400 / 120 / 60). */
function sidePadding(w: number) {
  if (w >= 992) return 400;
  if (w >= 768) return 120;
  return 60;
}

/* Centered, looping image carousel (SP Page Builder "carousel extended", layout 3). */
export function ServicesCarousel() {
  const n = ITEMS.length;
  const slides = [...ITEMS.slice(-CLONES), ...ITEMS, ...ITEMS.slice(0, CLONES)];
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1440);
  const [pos, setPos] = useState(CLONES + 1); // start centred on "Pymes" like the source
  const [animate, setAnimate] = useState(true);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const pad = sidePadding(width);
  const itemW = Math.max(0, width - pad * 2);
  const offset = pad - pos * (itemW + MARGIN);

  const next = useCallback(() => {
    setAnimate(true);
    setPos((p) => p + 1);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(next, INTERVAL);
    return () => window.clearTimeout(t);
  }, [pos, next]);

  // Jump back from a clone to its real counterpart once the transition ends.
  function onTransitionEnd() {
    if (pos >= n + CLONES) {
      setAnimate(false);
      setPos(pos - n);
    } else if (pos < CLONES) {
      setAnimate(false);
      setPos(pos + n);
    }
  }

  const activeIndex = (((pos - CLONES) % n) + n) % n;

  return (
    <section className="bx-carousel" aria-roledescription="carousel" aria-label="Servicios">
      <div className="bx-carousel-viewport" ref={viewportRef}>
        <div
          className="bx-carousel-track"
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
            transition: animate ? `transform ${SPEED}ms` : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="bx-carousel-item"
              style={{ width: itemW }}
              aria-hidden={i !== pos}
            >
              <Link href={item.href} tabIndex={i === pos ? 0 : -1}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.label} width={1463} height={847} />
                <div className="bx-carousel-caption">{item.label}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ul className="bx-carousel-dots">
        {ITEMS.map((item, i) => (
          <li key={item.label}>
            <button
              type="button"
              className={i === activeIndex ? "is-active" : undefined}
              aria-label={`Mostrar ${item.label}`}
              onClick={() => {
                setAnimate(true);
                setPos(CLONES + i);
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
