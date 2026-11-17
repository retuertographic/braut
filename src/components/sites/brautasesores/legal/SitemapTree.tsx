"use client";

import Link from "next/link";
import { useState } from "react";

type Node = { label: string; href?: string; children?: Node[] };

/* Mirrors the source JMap sitemap. Alias URLs on the source are listed as they were and redirect locally. */
const TREE: Node[] = [
  {
    label: "Menu Principal",
    children: [
      { label: "Inicio", href: "/" },
      {
        label: "Servicios",
        href: "/servicios",
        children: [
          { label: "Autónomos", href: "/servicios/autonomos" },
          { label: "Pymes", href: "/servicios/pymes" },
          { label: "Emprendedores", href: "/servicios/emprendedores" },
        ],
      },
      { label: "Conócenos", href: "/conocenos" },
      { label: "Contacto", href: "/contacto" },
      { label: "Autónomos", href: "/autonomos" },
      { label: "Pymes", href: "/pymes" },
      { label: "Emprendedores", href: "/emprendedores" },
    ],
  },
  {
    label: "Servicios",
    children: [
      { label: "Autónomos", href: "/autonomos-fiscal-tenerife-barcelona" },
      { label: "Pymes", href: "/pymes-fiscal-tenerife-barcelona" },
      { label: "Emprendedores", href: "/emprendedores-fiscal-tenerife-barcelona" },
    ],
  },
  {
    label: "Destacados",
    children: [
      { label: "Conócenos", href: "/conocenos-fiscal-tenerife-barcelona" },
      { label: "Servicios", href: "/servicios-fiscal-tenerife-barcelona" },
      { label: "Contacto", href: "/contacto-fiscal-tenerife-barcelona" },
    ],
  },
  {
    label: "Enlaces rápidos",
    children: [
      { label: "Contacto", href: "/contacto-asesoria-fiscal-tenerife-barcelona" },
      { label: "Emprendedores", href: "/emprendedores-asesoria-fiscal-tenerife-barcelona" },
      { label: "Pymes", href: "/pymes-asesoria-fiscal-tenerife-barcelona" },
      { label: "Autónomos", href: "/autonomos-asesoria-fiscal-tenerife-barcelona" },
    ],
  },
  {
    label: "Footer",
    children: [
      { label: "Sitemap", href: "/sitemap" },
      { label: "Cookies", href: "/cookies" },
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Política de privacidad", href: "/politica-de-privacidad" },
    ],
  },
];

function TreeItem({ node, defaultOpen = false, root = false }: { node: Node; defaultOpen?: boolean; root?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = !!node.children?.length;
  return (
    <li className={`bxm-item${hasChildren ? " has-children" : ""}${open ? " is-open" : ""}`}>
      {hasChildren && (
        <button
          type="button"
          className="bxm-hit"
          aria-expanded={open}
          aria-label={open ? `Contraer ${node.label}` : `Expandir ${node.label}`}
          onClick={() => setOpen((v) => !v)}
        />
      )}
      {root ? (
        <button type="button" className="bxm-folder" onClick={() => setOpen((v) => !v)}>
          {node.label}
        </button>
      ) : node.href ? (
        <Link href={node.href} className={node.href === "/sitemap" ? "is-selected" : undefined}>
          {node.label}
        </Link>
      ) : (
        <span>{node.label}</span>
      )}
      {hasChildren && open && (
        <ul>
          {node.children!.map((child, i) => (
            <TreeItem key={`${child.label}-${i}`} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function SitemapTree() {
  return (
    <div className="bxm">
      {TREE.map((node) => (
        <ul className="bxm-tree" key={node.label}>
          <TreeItem node={node} root defaultOpen={node.label === "Footer"} />
        </ul>
      ))}
    </div>
  );
}
