/* Prefixed with the deploy base path (e.g. "/braut" on GitHub Pages). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const ASSET = `${BASE_PATH}/sites/brautasesores`;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Autónomos", href: "/servicios/autonomos" },
      { label: "Pymes", href: "/servicios/pymes" },
      { label: "Emprendedores", href: "/servicios/emprendedores" },
    ],
  },
  { label: "Conócenos", href: "/conocenos" },
];

export const CONTACT = {
  phoneDisplay: "626 744 820",
  whatsappUrl: "https://api.whatsapp.com/send?phone=34626744820",
  email: "info@brautasesores.com",
  address: "C/Calderón de la Barca, nº2., 38005 Santa Cruz de Tenerife",
  addressUrl: "https://goo.gl/maps/s3yroRXhywbZf4c39",
  streetViewUrl: "https://goo.gl/maps/VPXwT9XntWys2QLc7",
  linkedin: "https://www.linkedin.com/company/braut-asesores/",
  twitter: "https://twitter.com/BRAUTasesores",
  facebook: "https://www.facebook.com/pg/brautasesores/about/?ref=page_internal",
  lat: 28.4605543,
  lng: -16.2572958,
};

/*
 * The source footer links to SEO alias URLs (e.g. /contacto-asesoria-fiscal-tenerife-barcelona)
 * that render the same pages as the main routes. They are mapped to the local routes here.
 */
export const FOOTER_MENUS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Enlaces rápidos",
    links: [
      { label: "Contacto", href: "/contacto" },
      { label: "Emprendedores", href: "/servicios/emprendedores" },
      { label: "Pymes", href: "/servicios/pymes" },
      { label: "Autónomos", href: "/servicios/autonomos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Autónomos", href: "/servicios/autonomos" },
      { label: "Pymes", href: "/servicios/pymes" },
      { label: "Emprendedores", href: "/servicios/emprendedores" },
    ],
  },
  {
    title: "Destacados",
    links: [
      { label: "Conócenos", href: "/conocenos" },
      { label: "Servicios", href: "/servicios" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Cookies", href: "/cookies" },
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
];

export const PRIVACY_URL = "/politica-de-privacidad";
export const COOKIES_URL = "/cookies";
/* Public URL used in the share links; set NEXT_PUBLIC_SITE_URL at build time (falls back to the live domain). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.brautasesores.com").replace(/\/$/, "");
