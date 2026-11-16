import type { Metadata } from "next";
import type { IconType } from "react-icons";
import { FaFingerprint, FaHourglassStart, FaMedal, FaPenNib, FaPiggyBank, FaUser } from "react-icons/fa";
import { ASSET } from "@/components/sites/brautasesores/data";
import { PageHero } from "@/components/sites/brautasesores/PageHero";
import { FormSection, ServiceIntro, ServicesButton } from "@/components/sites/brautasesores/services/ServiceBlocks";
import { ShareSection } from "@/components/sites/brautasesores/ShareSection";

export const metadata: Metadata = { title: "Emprendedores" };

/* Three columns of two icon features each (stacked in this order on mobile). */
const COLUMNS: { icon: IconType; title: string }[][] = [
  [
    { icon: FaUser, title: "ALTA DE AUTÓNOMO GRATIS" },
    { icon: FaFingerprint, title: "SOLICITUD DE FIRMA DIGITAL" },
  ],
  [
    { icon: FaPenNib, title: "CONSTITUCIÓN DE SOCIEDAD GRATUITA" },
    { icon: FaMedal, title: "REGISTRO DE MARCA" },
  ],
  [
    { icon: FaPiggyBank, title: "TE BUSCAMOS FINANCIACIÓN" },
    { icon: FaHourglassStart, title: "TRES MESES GRATIS PARA QUE ARRANQUES" },
  ],
];

export default function Emprendedores() {
  return (
    <>
      <PageHero />
      <ServiceIntro image={`${ASSET}/admin2.jpg`} title="Emprendedores">
        ¿Quieres crear una empresa? ¿Tienes dudas sobre tu negocio? ¿Necesitas asesoramiento para saber si te conviene
        ser autónomo o montar una S.L.? Si trabajas con nosotros no tendrás que preocuparte por las situaciones que se
        te puedan presentar en el día a día de tu negocio. Infórmate sin compromiso.
      </ServiceIntro>
      <section className="bxs-features">
        <div className="bx-container bxs-features-grid">
          {COLUMNS.map((col, i) => (
            <div className="bxs-features-col" key={i}>
              {col.map(({ icon: Icon, title }) => (
                <div className="bxs-feature" key={title}>
                  <span className="bxs-feature-icon" aria-label={title}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <ServicesButton label="Servicios" variant="top" />
      <FormSection title="Pide presupuesto" />
      <ServicesButton label="Todos los servicios" variant="bottom" />
      <ShareSection path="/servicios/emprendedores" title="Emprendedores" className="bxs-share-light" />
    </>
  );
}
