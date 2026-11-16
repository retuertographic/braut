"use client";

import { useState } from "react";

const FAQ = [
  {
    q: "¿POR QUÉ DEBERÍA ELEGIR UNA ASESORÍA ONLINE? ¿BRAUT ASESORES TRABAJA EXCLUSIVAMENTE ONLINE?",
    a: "Esa es precisamente la ventaja de trabajar con nosotros. Nuestra infraestructura permite eliminar los desplazamientos y las esperas. Sin embargo, para su mayor tranquilidad, también disponemos de sedes en Barcelona y Tenerife a las que podrá acudir en cualquier momento.",
  },
  {
    q: "¿QUÉ REQUISITOS NECESITO PARA SER CLIENTE DE BRAUT ASESORES?",
    a: "Únicamente disponer de una conexión a internet y ser autónomo o emprendedor.",
  },
  {
    q: "¿ME PODRÍAIS ASESORAR SOBRE QUÉ SERVICIOS DEBERÍA CONTRATAR EN BASE A MI SITUACIÓN?",
    a: "Por supuesto, ese es uno de nuestros cometidos. Contando con nosotros no necesitarás dominar conceptos técnicos para tener éxito en tu propio negocio.",
  },
  {
    q: "POR QUÉ LOS PRECIOS SON MÁS BAJOS QUE LOS DE UNA ASESORÍA TRADICIONAL?",
    a: "La razón de por qué logramos ofrecer precios inferiores tiene lugar en el ahorro de costes tales como; desplazamientos, material, consumibles o de archivo.",
  },
  {
    q: "LLEVO TIEMPO CON MI ASESOR DE CONFIANZA, ¿CAMBIAR A UNA ASESORÍA ONLINE SUPONDRÍA ALGÚN PROBLEMA?",
    a: "De ningún modo. No tendrás que encargarte de la mayoría de trámites.",
  },
  {
    q: "¿EXISTE ALGÚN COMPROMISO DE PERMANENCIA?",
    a: "o existe ningún tipo de contrato de permanencia. Sin letra pequeña. Nuestro aval es el trato diario con el cliente. Te podrás dar de baja cuando quieras.",
  },
];

/* "¿Tienes alguna duda?" — vertical tabs (SP Page Builder custom tab): question list left, answer right. */
export function ServicesFaqTabs() {
  const [active, setActive] = useState(0);
  return (
    <section className="bxs-faq" id="preguntasfrecuentes">
      <div className="bx-container">
        <h3 className="bxs-faq-title">¿Tienes alguna duda?</h3>
        <h3 className="bxs-faq-sub">Te resolvemos algunas aquí</h3>
        <div className="bxs-tabs">
          <ul className="bxs-tabs-nav" role="tablist">
            {FAQ.map((item, i) => (
              <li key={item.q} className={i === active ? "is-active" : undefined}>
                <a
                  href={`#bxs-faq-${i + 1}`}
                  role="tab"
                  id={`bxs-faq-tab-${i + 1}`}
                  aria-controls={`bxs-faq-${i + 1}`}
                  aria-selected={i === active}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(i);
                  }}
                >
                  {item.q}
                </a>
              </li>
            ))}
          </ul>
          <div className="bxs-tabs-content">
            {FAQ.map((item, i) => (
              <div
                key={item.q}
                id={`bxs-faq-${i + 1}`}
                role="tabpanel"
                aria-labelledby={`bxs-faq-tab-${i + 1}`}
                className={`bxs-tab-pane${i === active ? " is-active" : ""}`}
                hidden={i !== active}
              >
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
