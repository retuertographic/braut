import Link from "next/link";
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
import { CONTACT, FOOTER_MENUS, LEGAL_LINKS } from "./data";

type IconItem = { icon: ReactNode; title: string; href?: string; text?: ReactNode };

const ICON_ITEMS: IconItem[] = [
  { icon: <FaHome />, title: CONTACT.address, href: CONTACT.addressUrl },
  { icon: <FaWhatsapp />, title: "0034 626 744 820 (WhatsApp)", href: CONTACT.whatsappUrl },
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
  { icon: <FaStreetView />, title: "Street view", href: CONTACT.streetViewUrl },
  { icon: <FaLinkedinIn />, title: "Linkedin", href: CONTACT.linkedin },
  { icon: <FaTwitter />, title: "Twitter", href: CONTACT.twitter },
  { icon: <FaFacebookF />, title: "Facebook", href: CONTACT.facebook },
];

function IconListItem({ item }: { item: IconItem }) {
  const inner = (
    <>
      <span className="bx-iconlist-icon" aria-hidden="true">
        {item.icon}
      </span>
      <span>
        <span className="bx-iconlist-title">{item.title}</span>
        {item.text && <span>{item.text}</span>}
      </span>
    </>
  );
  return item.href ? (
    <a className="bx-iconlist-item" href={item.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div className="bx-iconlist-item">{inner}</div>
  );
}

export function Footer() {
  return (
    <footer>
      <section className="bx-bottom">
        <div className="bx-container bx-bottom-grid">
          <div className="bx-bottom-col">
            <h3>Acércate</h3>
            <ul className="bx-iconlist">
              {ICON_ITEMS.map((item) => (
                <li key={item.title}>
                  <IconListItem item={item} />
                </li>
              ))}
            </ul>
          </div>
          {FOOTER_MENUS.map((menu) => (
            <div className="bx-bottom-col" key={menu.title}>
              <h3>{menu.title}</h3>
              <ul className="bx-bottom-menu">
                {menu.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <div className="bx-footer">
        <div className="bx-container bx-footer-row">
          <span className="bx-footer-copy">
            © 2020 Braut Asesores. Todos los derechos reservados.{" "}
            <a href="https://retuertographicdesign.com/" target="_blank" rel="noopener noreferrer">
              Desarrollado por Retuerto Graphic Design. Ricardo Retuerto Barrera |{" "}
              <span className="bx-nowrap">Spain-Germany</span> | <span className="bx-nowrap">0034 922 971 723</span> ·{" "}
              <span className="bx-nowrap">0049 30 31878629</span>
            </a>
          </span>
          <ul>
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
