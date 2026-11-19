import { CONTACT, SITE_URL } from "@/components/sites/brautasesores/data";

/* llms.txt (https://llmstxt.org): a Markdown summary of the site for language models. */
export const dynamic = "force-static";

const url = (path: string) => `${SITE_URL}${path}`;

const BODY = `# BRAUT Asesores

> BRAUT ASESORES es una asesoría fiscal, contable y legal para autónomos, pymes y emprendedores, orientada a los nuevos tiempos. Trabaja de forma online en toda España (Península, Canarias, Ceuta y Melilla) y dispone de sedes en Barcelona y Santa Cruz de Tenerife para citas presenciales.

Datos clave:

- Modelo de trabajo: atención online por teléfono, email, videoconferencia o mensajería instantánea; nunca es necesario visitar la oficina, aunque se puede pedir cita presencial en Barcelona o Tenerife.
- Requisitos para ser cliente: tener el régimen fiscal establecido en España, conexión a internet y ser autónomo, pyme o emprendedor.
- Precios: más competitivos que una asesoría tradicional gracias al ahorro en desplazamientos, material, consumibles y archivo.
- Sin permanencia: no existe ningún contrato de permanencia.
- Dirección: ${CONTACT.address}.
- Teléfono / WhatsApp: +34 626 744 820.
- Email: ${CONTACT.email}.
- Horario: lunes a viernes, de 9:30 a 15:00.

## Servicios

- [Servicios](${url("/servicios")}): catálogo completo — política fiscal y calendario de impuestos; altas de actividad, censales, IAE y operador intracomunitario; declaraciones de Sociedades, Renta y Patrimonio, IVA/IGIC, retenciones de IRPF, Intrastat y pagos fraccionados; escritos, recursos y reclamaciones ante la Administración Tributaria; asistencia en inspecciones; Libros Oficiales y Cuentas Anuales en el Registro Mercantil; asesoramiento fiscal, contable y legal permanente. Incluye preguntas frecuentes.
- [Autónomos](${url("/servicios/autonomos")}): plan a medida para profesionales autónomos, con servicio integral y personalizado.
- [Pymes](${url("/servicios/pymes")}): paquetes y plan a medida adaptados a cada empresa.
- [Emprendedores](${url("/servicios/emprendedores")}): ayuda para crear empresa o elegir entre autónomo y S.L.; alta de autónomo gratis, constitución de sociedad gratuita, firma digital, registro de marca, búsqueda de financiación y tres meses gratis para arrancar.

## Empresa y contacto

- [Inicio](${url("/")}): presentación de la asesoría, planes por tipo de cliente y cómo trabaja (nos envía sus documentos, procesamos sus datos, le presentamos sus obligaciones, elaboramos sus informes, siempre listos para consultar).
- [Conócenos](${url("/conocenos")}): por qué elegirnos (profesionalidad, compromiso, experiencia) y qué hacemos.
- [Contacto](${url("/contacto")}): formulario de contacto, mapa y datos de la oficina de Santa Cruz de Tenerife.

## Optional

- [Política de privacidad](${url("/politica-de-privacidad")})
- [Aviso legal](${url("/aviso-legal")})
- [Política de cookies](${url("/cookies")})
- [Sitemap](${url("/sitemap")})
`;

export function GET() {
  return new Response(BODY, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
