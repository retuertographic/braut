# brautasesores.com — Home brief

Source: https://www.brautasesores.com/ (Joomla 3 + Helix Ultimate "barber" template + SP Page Builder).
The server answers 403 "Malware detected" to plain HTTP clients, so all inspection and asset
downloads were done through Playwright/Chromium.

## Route map

| Source | Local route | Owner files |
| --- | --- | --- |
| `/` | `/` | `src/app/page.tsx`, `src/components/sites/brautasesores/*` |
| `/servicios`, `/servicios/{autonomos,pymes,emprendedores}` | same paths | `src/app/servicios/**`, `src/app/braut-servicios.css` |
| `/conocenos`, `/contacto` | same paths | `src/app/{conocenos,contacto}/page.tsx`, `src/app/braut-about.css` |
| Footer SEO aliases (`/contacto-asesoria-fiscal-tenerife-barcelona`, …) | mapped to the routes above | `data.ts` |
| `/sitemap`, `/cookies`, `/aviso-legal`, `/politica-de-privacidad` | out of scope → still link to source | `data.ts` |

## Page-wide

- Body: Montserrat 16/24 `#383838`. Fixed header 100px (80px < 992px), white, `0 2px 5px rgba(0,0,0,.05)`.
- Menu: Montserrat 18px, letter-spacing 2.7px, uppercase; active item gets a 3px `#ffaa68` underline;
  active parent with children ("Servicios") turns orange. Dropdown 240px white, `0 3px 5px rgba(0,0,0,.2)`.
- CTA "Contactar": Lato 16px, `#bc2a0c`, padding 12×30, hover `#222`.
- Cookie consent: static black top banner until "¡Entendido!", then a "Política de cookies" tab
  fixed bottom-left (left 3em).
- Mobile: off-canvas 300px from the right, items Montserrat 25px/500 uppercase, "+" expands Servicios.

## Sections (desktop 1440)

1. **3D slider** — stage 1360×990 (850 tablet, 320 mobile), margin 0 40px, perspective 1000px.
   Active `translateZ(-200px)`, neighbours `translate3d(±100%,0,-400px) rotateY(±4deg)`, 800ms,
   autoplay 5s, line dots bottom-right. Background images darkened ~50%. Layers fade/slide up after 1s.
2. **TÚ nos mueves** — Open Sans 40/50 bold `#222`; body Open Sans 15/24 `#999`; blue (#1803a1)
   "Servicios" button with WOW fadeInUp (200ms); 1px divider.
3. **Elige tu plan** — `#e5e5e5`; white brush shape top (374px), steel-blue brush bottom (74px, flipped);
   Heebo 55/75 heading; 440×512 images radius 40; Archivo Narrow 45/55 names.
4. **Descubre las ventajas** — `#436885`, Montserrat 28/33.6 heading, Varela Round body, timeline is an image (`howwe.jpg`).
5. **Video quote** — `people-working.mp4` cover + `rgba(0,0,0,.6)`, circle logo, Varela Round 30/38.
6. **Services carousel** — centred loop, item width = viewport − 2×(400 | 120 | 60), gap 20, autoplay 4s, 800ms.
7. **Contáctanos** — `#0b1d42`; white form box (padding 35); OSM map 460×591, zoom 16, custom marker
   at 28.4605543, −16.2572958. Form posts via AJAX on the source; the clone validates and opens a `mailto:`.
8. **Comparte esta página** — Lato 31/51 bold uppercase, FA brand icons.
9. **Footer** — `#141414`, 4 columns, icon list (`#444` bold titles), orange top border on the copyright bar.

## Assets

All images/video in `public/sites/brautasesores/` keep their source file names
(`/images/...` and `/media/videos/...` on the source). Fonts are the same Google Fonts families
via `next/font`; icons are Font Awesome via `react-icons`.
