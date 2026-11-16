"use client";

import { useEffect, useState } from "react";
import { COOKIES_URL } from "./data";

const KEY = "cookieconsent_status";

function readDismissed() {
  try {
    return window.localStorage.getItem(KEY) === "dismiss";
  } catch {
    return false;
  }
}

/* Cookie notice: static top banner until dismissed, then a "Política de cookies" tab bottom-left. */
export function CookieConsent() {
  const [state, setState] = useState<"unknown" | "banner" | "tab">("unknown");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after mount
    setState(readDismissed() ? "tab" : "banner");
  }, []);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".bx-header");
    const banner = document.querySelector<HTMLElement>(".bx-cookie-banner");
    if (!header) return;
    if (state === "banner" && banner) {
      const sync = () => {
        const h = Math.max(0, banner.getBoundingClientRect().bottom);
        header.style.top = `${h}px`;
      };
      sync();
      window.addEventListener("scroll", sync, { passive: true });
      window.addEventListener("resize", sync);
      return () => {
        window.removeEventListener("scroll", sync);
        window.removeEventListener("resize", sync);
        header.style.top = "";
      };
    }
    header.style.top = "";
  }, [state]);

  if (state === "unknown") return null;

  if (state === "tab") {
    return (
      <button type="button" className="bx-cookie-revoke" onClick={() => setState("banner")}>
        Política de cookies
      </button>
    );
  }

  return (
    <div className="bx-cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <span>
        Esta página web emplea tanto cookies propias como de terceros técnicas, para recopilar información
        estadística de su navegación, así como para mejorar su experiencia de usuario. Al navegar por este sitio
        web, usted accede al empleo de estas cookies. Puede cambiar la configuración de su navegador para no
        aceptar su instalación u obtener más información en nuestra <a href={COOKIES_URL}>política de cookies</a>.
      </span>
      <button
        type="button"
        onClick={() => {
          try {
            window.localStorage.setItem(KEY, "dismiss");
          } catch {
            /* storage unavailable: dismiss for this page view only */
          }
          setState("tab");
        }}
      >
        ¡Entendido!
      </button>
    </div>
  );
}
