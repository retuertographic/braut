"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ASSET } from "./data";

type Slide = { image: string; content: ReactNode };

const TITLE = (
  <h3 className="bx-slide-title">
    Asesoría para autónomos&nbsp;y pymes&nbsp;online
  </h3>
);

const SLIDES: Slide[] = [
  { image: `${ASSET}/mesa_slider_3.jpg`, content: TITLE },
  {
    image: `${ASSET}/mesa_slider_1.jpg`,
    content: (
      <h5 className="bx-slide-info">
        Infórmate sin compromiso
        <br />
        626&nbsp;744&nbsp;820
        <br />
        De lunes a viernes de 9:30 a 15:00
      </h5>
    ),
  },
  { image: `${ASSET}/mesa_slider_2.jpg`, content: TITLE },
];

const INTERVAL = 5000;

/* SP Page Builder "3D" slider: active slide centred, neighbours rotated back on either side. */
export function HeroSlider3D() {
  const [active, setActive] = useState(0);
  const n = SLIDES.length;

  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);

  useEffect(() => {
    const t = window.setTimeout(() => go(active + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [active, go]);

  return (
    <section aria-roledescription="carousel" aria-label="Destacados">
      <div className="bx-slider">
        {SLIDES.map((slide, i) => {
          const pos = i === active ? "is-active" : i === (active + n - 1) % n ? "is-prev" : "is-next";
          return (
            <div key={i} className={`bx-slide ${pos}`} aria-hidden={i !== active}>
              <div className="bx-slide-content">
                <div className="bx-slide-text">{slide.content}</div>
                <Link href="/contacto" className="bx-slide-btn" tabIndex={i === active ? 0 : -1}>
                  Contacta
                </Link>
              </div>
              <div className="bx-slide-bg" style={{ backgroundImage: `url(${slide.image})` }} />
              {i === active && (
                <ul className="bx-slider-dots">
                  {SLIDES.map((_, d) => (
                    <li key={d}>
                      <button
                        type="button"
                        className={d === active ? "is-active" : undefined}
                        aria-label={`Ir a la diapositiva ${d + 1}`}
                        onClick={() => go(d)}
                      >
                        {d === active && <span key={active} />}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
