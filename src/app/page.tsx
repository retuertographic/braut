import Link from "next/link";
import { ContactSection } from "@/components/sites/brautasesores/ContactSection";
import { ASSET } from "@/components/sites/brautasesores/data";
import { FadeUp } from "@/components/sites/brautasesores/FadeUp";
import { HeroSlider3D } from "@/components/sites/brautasesores/HeroSlider3D";
import { QuoteVideoSection } from "@/components/sites/brautasesores/QuoteVideoSection";
import { ServicesCarousel } from "@/components/sites/brautasesores/ServicesCarousel";
import { BRUSH_BOTTOM_PATH, BRUSH_TOP_PATH } from "@/components/sites/brautasesores/shapes";
import { ShareSection } from "@/components/sites/brautasesores/ShareSection";

const PLANS = [
  { name: "Autónomos", image: `${ASSET}/profesionalidad.jpg` },
  { name: "Pymes", image: `${ASSET}/compr.jpg` },
  { name: "Emprendedores", image: `${ASSET}/experiencia.jpg` },
];

export default function Home() {
  return (
    <>
      <HeroSlider3D />

      <section className="bx-intro">
        <div className="bx-intro-inner">
          <h3>TÚ Nos Mueves</h3>
          <p>
            BRAUT ASESORES es una asesoría para autónomos, pymes y emprendedores orientada a los nuevos tiempos.
            Proporcionamos una experiencia presencial y online que permite una conexión total entre cliente y
            asesoría a&nbsp;pesar de la distancia. En el desarrollo de nuestra actividad nunca necesitará visitarnos.
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
          <FadeUp>
            <Link href="/servicios" className="bx-btn-blue">
              Servicios
            </Link>
          </FadeUp>
          <div className="bx-divider" />
        </div>
      </section>

      <section className="bx-plans">
        <div className="bx-shape bx-shape-top" aria-hidden="true">
          <svg viewBox="0 0 1000 90.13" preserveAspectRatio="none">
            <path d={BRUSH_TOP_PATH} />
          </svg>
        </div>
        <div className="bx-shape bx-shape-bottom" aria-hidden="true">
          <svg viewBox="0 0 1000 90.13" preserveAspectRatio="none">
            <path d={BRUSH_BOTTOM_PATH} />
          </svg>
        </div>
        <div className="bx-container bx-plans-inner">
          <h2>Elige tu plan</h2>
          <div className="bx-plan-grid">
            {PLANS.map((plan) => (
              <div className="bx-plan" key={plan.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="bx-plan-img" src={plan.image} alt={plan.name} width={510} height={593} />
                <span className="bx-plan-name">{plan.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-advantages" id="servicios">
        <div className="bx-advantages-inner">
          <h3>DESCUBRE LAS VENTAJAS DE TRABAJAR CON NOSOTROS</h3>
          <p>
            BRAUT ASESORES está disponible para ti desde cualquier lugar del mundo siempre y cuando tengas tu
            régimen fiscal establecido en España (Península, Canarias o Ceuta y Melilla). Sólo necesitas un
            ordenador y conexión a internet
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="bx-advantages-img"
            src={`${ASSET}/howwe.jpg`}
            alt="Nos envía sus documentos, procesamos sus datos, le presentamos sus obligaciones, elaboramos sus informes y sus informes siempre listos para consultar"
            width={768}
            height={452}
          />
        </div>
      </section>

      <QuoteVideoSection />

      <ServicesCarousel />

      <ContactSection />

      <ShareSection path="/" title="Inicio" />
    </>
  );
}
