import { ContactForm } from "./ContactForm";
import { OsmMap } from "./OsmMap";

/* "Contáctanos" block: navy section with white form box and OpenStreetMap. */
export function ContactSection({ title = "Contáctanos" }: { title?: string }) {
  return (
    <section className="bx-contact">
      <div className="bx-container bx-contact-row">
        <div>
          <h2>{title}</h2>
          <ContactForm />
        </div>
        <div className="bx-map-col">
          <OsmMap />
        </div>
      </div>
    </section>
  );
}
