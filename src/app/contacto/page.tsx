import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaLinkedinIn,
  FaRegClock,
  FaStreetView,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { ContactForm } from "@/components/sites/brautasesores/ContactForm";
import { CONTACT } from "@/components/sites/brautasesores/data";
import { OsmMap } from "@/components/sites/brautasesores/OsmMap";
import { ShareSection } from "@/components/sites/brautasesores/ShareSection";

export const metadata: Metadata = {
  title: "Contacto",
};

type InfoItem = { icon: ReactNode; title: string; href?: string; external?: boolean; text?: ReactNode };

const INFO: InfoItem[] = [
  { icon: <FaHome />, title: CONTACT.address, href: CONTACT.addressUrl, external: true },
  { icon: <FaWhatsapp />, title: "0034 626 744 820 (WhatsApp)", href: CONTACT.whatsappUrl, external: true },
  { icon: <FaEnvelope />, title: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    icon: <FaRegClock />,
    title: "Horario",
    text: (
      <>
        Lunes a Viernes,
        <br />
        de 09:30 a 15:00
      </>
    ),
  },
  { icon: <FaStreetView />, title: "Street view", href: CONTACT.streetViewUrl, external: true },
  { icon: <FaLinkedinIn />, title: "Linkedin", href: CONTACT.linkedin, external: true },
  { icon: <FaTwitter />, title: "Twitter", href: CONTACT.twitter, external: true },
  { icon: <FaFacebookF />, title: "Facebook", href: CONTACT.facebook, external: true },
];

function InfoListItem({ item }: { item: InfoItem }) {
  const inner = (
    <div className="bxa-info-item">
      <span className="bxa-info-icon" aria-hidden="true">
        {item.icon}
      </span>
      <div>
        <h3 className="bxa-info-title">{item.title}</h3>
        {item.text && <div className="bxa-info-text">{item.text}</div>}
      </div>
    </div>
  );
  if (!item.href) return <li>{inner}</li>;
  return (
    <li>
      <a
        href={item.href}
        title={item.title}
        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    </li>
  );
}

export default function ContactoPage() {
  return (
    <>
      <section className="bxa-maphero">
        <OsmMap className="bxa-maphero-map" />
        <div className="bxa-maphero-shape" aria-hidden="true">
          <svg viewBox="0 0 1000 99" preserveAspectRatio="none">
            <path d="M768.06,59.54C687,48.21,607.41,28.42,526.35,17.15,347.45-7.73,155.24,13.87.07,99H1000V68.11A1149.19,1149.19,0,0,1,768.06,59.54Z" />
          </svg>
        </div>
      </section>

      <section className="bxa-contactpage">
        <div className="bx-container bxa-contactpage-row">
          <div className="bxa-contactpage-form">
            <h2 className="bxa-contact-title">Contáctanos</h2>
            <ContactForm className="bx-form-box bxa-form-dark" />
          </div>
          <div className="bxa-contactpage-info">
            <h2 className="bxa-contact-title bxa-info-heading">Información</h2>
            <ul className="bxa-info-list">
              {INFO.map((item) => (
                <InfoListItem item={item} key={item.title} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="bxa-share">
        <ShareSection path="/contacto" title="Contacto" />
      </div>
    </>
  );
}
