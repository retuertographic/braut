import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SITE_URL } from "./data";

/* "Comparte esta página" — share links point to the page's public URL on the source domain. */
export function ShareSection({ path = "/", title = "Inicio" }: { path?: string; title?: string }) {
  const url = `${SITE_URL}${path}`;
  const enc = encodeURIComponent(url);
  const links = [
    { label: "Facebook", href: `https://www.facebook.com/sharer.php?u=${enc}`, icon: <FaFacebook /> },
    {
      label: "Twitter",
      href: `https://twitter.com/share?url=${enc}&text=${encodeURIComponent(title)}`,
      icon: <FaTwitter />,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${enc}`,
      icon: <FaLinkedin />,
    },
    { label: "WhatsApp", href: `https://api.whatsapp.com/send?text=${enc}`, icon: <FaWhatsapp /> },
  ];
  return (
    <section className="bx-share">
      <div className="bx-container">
        <h6>Comparte esta página</h6>
        <ul>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`Compartir en ${l.label}`}>
                {l.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
