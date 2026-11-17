import { ASSET } from "../data";

type Props = { title: string; html: string };

/* Shared layout of the legal pages: peach topographic banner + centred text block. */
export function LegalPage({ title, html }: Props) {
  return (
    <>
      <section className="bxl-hero" style={{ backgroundImage: `url(${ASSET}/pattern.jpg)` }}>
        <div className="bx-container">
          <h2>{title}</h2>
        </div>
      </section>
      <section className="bxl-body">
        <div className="bx-container">
          {/* Static, trusted copy taken from the source site. */}
          <div className="bxl-text" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </>
  );
}
