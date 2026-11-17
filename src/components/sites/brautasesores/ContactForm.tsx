"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FaComments } from "react-icons/fa";
import { CONTACT, PRIVACY_URL } from "./data";

type Props = { className?: string };

type Errors = Partial<Record<"email" | "mensaje" | "captcha" | "policy", string>>;

const REQUIRED = "Por favor, completa los campos requeridos";

/*
 * The source form posts to a Joomla (SP Page Builder) AJAX endpoint. This clone has no mail
 * backend, so after validating it opens the visitor's mail client addressed to the office.
 */
export function ContactForm({ className = "bx-form-box" }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("email") || !/^\S+@\S+\.\S+$/.test(get("email"))) next.email = REQUIRED;
    if (!get("mensaje")) next.mensaje = REQUIRED;
    if (get("captcha") !== "a") next.captcha = "Respuesta incorrecta";
    if (!data.get("policy")) next.policy = "Debes aceptar la política de privacidad";
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus(null);
      return;
    }
    const body = [
      "Formulario de la página de contacto",
      `De: ${get("nombre")} ${get("apellidos")}`,
      `Email: ${get("email")}`,
      `Asunto: ${get("asunto")}`,
      `Mensaje: ${get("mensaje")}`,
    ].join("\n");
    const subject = get("asunto") || "Formulario de contacto";
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Gracias. Se ha abierto tu cliente de correo para enviar el mensaje.");
    e.currentTarget.reset();
  }

  return (
    <div className={className}>
      <form className="bx-form" onSubmit={onSubmit} noValidate>
        <div className="bx-form-field">
          <input className="bx-input" type="text" name="nombre" placeholder="Nombre" aria-label="Nombre" />
        </div>
        <div className="bx-form-field">
          <input className="bx-input" type="text" name="apellidos" placeholder="Apellidos" aria-label="Apellidos" />
        </div>
        <div className="bx-form-field">
          <input className="bx-input" type="email" name="email" placeholder="Email*" aria-label="Email" required />
          {errors.email && <span className="bx-form-error">{errors.email}</span>}
        </div>
        <div className="bx-form-field">
          <input className="bx-input" type="text" name="asunto" placeholder="Asunto" aria-label="Asunto" />
        </div>
        <div className="bx-form-field is-full">
          <textarea className="bx-input" name="mensaje" placeholder="Mensaje*" aria-label="Mensaje" required />
          {errors.mensaje && <span className="bx-form-error">{errors.mensaje}</span>}
        </div>
        <div className="bx-form-field is-full">
          <label className="bx-form-label">
            ¿Primera letra del abecedario en minúscula?
            <input
              className="bx-input"
              type="text"
              name="captcha"
              placeholder="¿Primera letra del abecedario en minúscula?"
              style={{ marginTop: 8 }}
            />
          </label>
          {errors.captcha && <span className="bx-form-error">{errors.captcha}</span>}
        </div>
        <label className="bx-form-check">
          <input type="checkbox" name="policy" />
          <span className="bx-form-check-box" aria-hidden="true" />
          <span>
            He leído y acepto la <Link href={PRIVACY_URL}>Política de privacidad</Link>
            {errors.policy && <span className="bx-form-error">{errors.policy}</span>}
          </span>
        </label>
        <div className="bx-form-submit">
          <button type="submit" className="bx-btn-send">
            <FaComments aria-hidden="true" /> Enviar
          </button>
        </div>
        {status && (
          <p className="bx-form-status" role="status">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
