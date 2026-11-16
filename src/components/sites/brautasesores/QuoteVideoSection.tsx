import Link from "next/link";
import { ASSET } from "./data";
import { FadeUp } from "./FadeUp";

/* Background-video quote: "Ser profesional no depende de la profesión…". Used on home and Conócenos. */
export function QuoteVideoSection({ className = "" }: { className?: string }) {
  return (
    <section className={`bx-quote ${className}`}>
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src={`${ASSET}/people-working.mp4`} type="video/mp4" />
      </video>
      <div className="bx-quote-overlay" />
      <div className="bx-quote-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bx-quote-logo" src={`${ASSET}/logo-circ.png`} alt="Braut Asesores" width={165} height={164} />
        <div className="bx-quote-text">
          Ser profesional no depende de la profesión que ejerzas sino de lo humana que la hagas
        </div>
        <h5>&quot;Sobre el valor de la profesionalidad&quot;</h5>
        <FadeUp>
          <Link href="/servicios" className="bx-btn-blue">
            Servicios
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
