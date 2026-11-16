import type { Metadata } from "next";
import { FaBookmark, FaBrain, FaFileExport, FaPaintBrush, FaRocket, FaUserCheck, FaUsers } from "react-icons/fa";
import { AnimatedCounters, type Counter } from "@/components/sites/brautasesores/AnimatedCounters";
import { ContactForm } from "@/components/sites/brautasesores/ContactForm";
import { ASSET } from "@/components/sites/brautasesores/data";
import { OsmMap } from "@/components/sites/brautasesores/OsmMap";
import { PageHero } from "@/components/sites/brautasesores/PageHero";
import { QuoteVideoSection } from "@/components/sites/brautasesores/QuoteVideoSection";
import { ShareSection } from "@/components/sites/brautasesores/ShareSection";

export const metadata: Metadata = {
  title: "Conócenos",
};

const FEATURES = [
  { title: "Profesionalidad", icon: <FaBrain />, tone: "is-steel" },
  { title: "Compromiso", icon: <FaUserCheck />, tone: "is-blue" },
  { title: "Experiencia", icon: <FaFileExport />, tone: "is-navy" },
];

const COUNTERS: Counter[] = [
  { icon: <FaUsers />, value: 967, label: "Clientes satisfechos" },
  { icon: <FaRocket />, value: 321, label: "Referencias" },
  { icon: <FaPaintBrush />, value: 2145, label: "Éxitos" },
  { icon: <FaBookmark />, value: 58, label: "Menciones" },
];

export default function ConocenosPage() {
  return (
    <>
      <PageHero />

      <section className="bxa-why">
        <div className="bx-container">
          <h2 className="bxa-why-title">¿Por qué elegirnos?</h2>
          <div className="bxa-why-grid">
            {FEATURES.map((f) => (
              <div className={`bxa-feature ${f.tone}`} key={f.title}>
                <div className="bxa-feature-icon" aria-hidden="true">
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bxa-what" style={{ backgroundImage: `url(${ASSET}/sin-titulo-8.jpg)` }}>
        <div className="bxa-what-overlay" />
        <div className="bx-container bxa-what-row">
          <div className="bxa-what-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/sin-titulo-9.jpg`} alt="Image" width={614} height={437} loading="lazy" />
          </div>
          <div className="bxa-what-text">
            <h3>Lo que hacemos</h3>
            <p>
              BRAUT ASESORES es una asesoría para autónomos, pymes y emprendedores orientada a los nuevos tiempos.
              Proporcionamos una experiencia online que permite una conexión total entre cliente y asesoría
              a&nbsp;pesar de la distancia. En el desarrollo de nuestra actividad nunca necesitará visitarnos.
            </p>
            <p>
              Siempre habrá una forma de&nbsp;comunicación que se adapte a su necesidad concreta; teléfono, mail,
              videconferencia, mensajería instantánea o, si le conviene, citación personal en cualquiera
              de&nbsp;nuestras sedes de Barcelona o Tenerife.
            </p>
            <p>
              Gracias al componente online logramos reducir los procesos burocráticos y&nbsp;tiempo en
              desplazamientos. Ello&nbsp;nos permite ofrecer los precios más competitivos.
            </p>
          </div>
        </div>
      </section>

      <QuoteVideoSection className="bxa-quote" />

      <AnimatedCounters items={COUNTERS} />

      <div className="bxa-spacer" aria-hidden="true" />

      <section className="bxa-contact">
        <div className="bx-container">
          <h2 className="bxa-contact-title">Contáctanos</h2>
          <ContactForm className="bx-form-box bxa-form-dark" />
          <OsmMap className="bx-map bxa-map" />
        </div>
      </section>

      <div className="bxa-share">
        <ShareSection path="/conocenos" title="Conócenos" />
      </div>
    </>
  );
}
