"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaLongArrowAltRight, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { ASSET, NAV } from "./data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("bx-offcanvas-open", open);
    return () => document.body.classList.remove("bx-offcanvas-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    setSubOpen(false);
  };

  return (
    <>
      <div className="bx-header-spacer" />
      <header className="bx-header">
        <div className="bx-header-row">
          <div className="bx-header-logo">
            <Link href="/" aria-label="Braut Asesores">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/brautasesores-retuertographicdesign922971723-3.jpg`}
                alt="Braut Asesores"
                width={378}
                height={68}
              />
            </Link>
          </div>

          <nav className="bx-header-nav" aria-label="Principal">
            <ul className="bx-menu">
              {NAV.map((item) => (
                <li key={item.href} className={isActive(pathname, item.href) ? "is-active" : undefined}>
                  <Link href={item.href}>
                    {item.label}
                    {item.children && (
                      <svg className="bx-menu-caret" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <div className="bx-dropdown">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={pathname === child.href ? "is-active" : undefined}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="bx-header-cta">
            <Link href="/contacto" className="bx-btn-cta">
              Contactar <FaLongArrowAltRight aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="bx-burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      <div className="bx-offcanvas-overlay" onClick={close} aria-hidden="true" />
      <aside className="bx-offcanvas" aria-hidden={!open} aria-label="Menú">
        <button type="button" className="bx-offcanvas-close" aria-label="Cerrar menú" onClick={close}>
          <FaTimes />
        </button>
        <ul>
          {NAV.map((item) => (
            <li
              key={item.href}
              className={`bx-offcanvas-item${isActive(pathname, item.href) ? " is-active" : ""}`}
            >
              {item.children ? (
                <div>
                  <Link href={item.href} onClick={close}>
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="bx-offcanvas-toggle"
                    aria-label={subOpen ? "Cerrar submenú" : "Abrir submenú"}
                    aria-expanded={subOpen}
                    onClick={() => setSubOpen((v) => !v)}
                  >
                    {subOpen ? <FaMinus /> : <FaPlus />}
                  </button>
                  {subOpen && (
                    <ul className="bx-offcanvas-sub">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={close}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={item.href} onClick={close}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Link href="/contacto" className="bx-btn-cta" onClick={close}>
          Contactar <FaLongArrowAltRight aria-hidden="true" />
        </Link>
      </aside>
    </>
  );
}
