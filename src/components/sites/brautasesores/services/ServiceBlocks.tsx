import Link from "next/link";
import type { ReactNode } from "react";
import { ContactForm } from "../ContactForm";
import { FadeUp } from "../FadeUp";

/* Feature box at the top of each service page: illustration, title and intro paragraph. */
export function ServiceIntro({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bxs-intro">
      <div className="bx-container">
        <div className="bxs-intro-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bxs-intro-img" src={image} alt={title} width={900} height={400} />
          <h4 className="bxs-intro-title">{title}</h4>
          <p>{children}</p>
        </div>
      </div>
    </section>
  );
}

/* Blue "PLAN A MEDIDA" pricing card, centred in a three-column row. */
export function PlanCard() {
  return (
    <section className="bxs-plan">
      <div className="bx-container">
        <div className="bxs-plan-card">
          <h3>PLAN A MEDIDA</h3>
          <ul>
            <li>
              Diseñado para aquellos que buscan un servicio integral y personalizado. Nos adaptamos a tus necesidades
              específicas para ofrecerte un soporte completo
            </li>
          </ul>
          <Link href="/contacto" className="bxs-plan-btn">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Red uppercase button row ("Servicios" / "Todos los servicios") linking back to the overview. */
export function ServicesButton({ label, variant }: { label: string; variant: "top" | "bottom" }) {
  const link = (
    <Link href="/servicios" className="bxs-btn-red">
      {label}
    </Link>
  );
  return (
    <section className={`bxs-btn-row bxs-btn-row--${variant}`}>
      <div className="bx-container">{variant === "top" ? <FadeUp>{link}</FadeUp> : link}</div>
    </section>
  );
}

/* White section with heading and the navy form box ("Pide presupuesto" / "Contáctanos"). */
export function FormSection({ title }: { title: string }) {
  return (
    <section className="bxs-form-section">
      <div className="bx-container">
        <h2>{title}</h2>
        <ContactForm className="bx-form-box bxs-form-navy" />
      </div>
    </section>
  );
}
