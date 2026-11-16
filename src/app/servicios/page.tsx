import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { ASSET } from "@/components/sites/brautasesores/data";
import { PageHero } from "@/components/sites/brautasesores/PageHero";
import { FormSection } from "@/components/sites/brautasesores/services/ServiceBlocks";
import { ServicesFaqTabs } from "@/components/sites/brautasesores/services/ServicesFaqTabs";
import { ShareSection } from "@/components/sites/brautasesores/ShareSection";

export const metadata: Metadata = { title: "Servicios" };

/* The source cards link to the alias URLs /autonomos, /pymes, /emprendedores; mapped to the local routes. */
const CARDS = [
  { name: "Autónomos", href: "/servicios/autonomos", image: "services-cover-pic-1.jpg", tone: "red" },
  { name: "Pymes", href: "/servicios/pymes", image: "services-cover-pic-5.jpg", tone: "blue" },
  { name: "Emprendedores", href: "/servicios/emprendedores", image: "services-cover-pic-6.jpg", tone: "dark" },
];

const LIST_LEFT = [
  "1) Definición de su política fiscal, impuestos, exenciones y calendario fiscal.",
  "",
  "2) Tramitación de:",
  "- Alta de actividad económica.",
  "- Altas, bajas y modificaciones censales.",
  "- Altas y bajas IAE, Operador Intracomunitario, Registro de devolución mensual del IVA/IGIC.",
  "- Aplazamientos.",
  "",
  "3) Preparación y presentación de declaraciones tributarias:",
  "- Impuesto de Sociedades y sus pagos a cuenta.",
  "- Declaración de la Renta y Patrimonio.",
  "- IVA/IGIC.",
  "- Retenciones de IRPF.",
  "- Operaciones Intracomunitarias e Intrastat.",
  "- Pagos fraccionados en estimación directa y en estimación objetiva.",
  "- Declaración anual de operaciones con terceras personas y de entidades en atribución de rentas.",
  "- Cualquier otra declaración exigida por las particularidades del cliente.",
  "",
];

export default function Servicios() {
  return (
    <>
      <PageHero />

      <section className="bxs-heading">
        <div className="bx-container">
          <h6>Servicios</h6>
        </div>
      </section>

      <section className="bxs-cards">
        <div className="bx-container bxs-cards-grid">
          {CARDS.map((card) => (
            <div className={`bxs-card bxs-card--${card.tone}`} key={card.name}>
              <div className="bxs-card-bg" style={{ backgroundImage: `url(${ASSET}/${card.image})` }} />
              <div className="bxs-card-overlay" />
              <div className="bxs-card-content">
                <h4 className="bxs-card-title">
                  <Link href={card.href}>
                    <FaArrowCircleRight aria-hidden="true" />
                    {card.name}
                  </Link>
                </h4>
                <div className="bxs-card-btn-wrap">
                  <Link href={card.href} className="bxs-card-btn" aria-label={`Ver más: ${card.name}`}>
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bxs-list">
        <div className="bx-container">
          <h2 className="bxs-list-title">
            BRAUT ASESORES&nbsp;ofrece todo tipo de servicios para el desarrollo de su actividad:
          </h2>
          <div className="bxs-list-row">
            <div className="bxs-list-text">
              {LIST_LEFT.map((line, i) => (
                <p key={i}>{line || " "}</p>
              ))}
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="bxs-list-img" src={`${ASSET}/serv.jpg`} alt="Image" width={1098} height={734} />
              <div className="bxs-list-text">
                <p>4)&nbsp;Preparación de escritos dirigidos a la Administración Tributaria, recursos y reclamaciones.</p>
                <p>
                  <br />
                  5)&nbsp;Asistencia ante Inspecciones Tributarias.
                </p>
                <p>&nbsp;</p>
                <p>6)&nbsp;Presentación de Libros Oficiales y Cuentas Anuales ante el Registro Mercantil.</p>
                <p>&nbsp;</p>
                <p>
                  7)&nbsp;Asesoramiento integral permanente tanto en lo relativo a lo fiscal, como a lo contable y legal y
                  a la gestión del día a día de su negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesFaqTabs />

      <FormSection title="Contáctanos" />

      <ShareSection path="/servicios" title="Servicios" className="bxs-share-light" />
    </>
  );
}
