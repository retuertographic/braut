import type { Metadata } from "next";
import { ASSET } from "@/components/sites/brautasesores/data";
import { PageHero } from "@/components/sites/brautasesores/PageHero";
import {
  FormSection,
  PlanCard,
  ServiceIntro,
  ServicesButton,
} from "@/components/sites/brautasesores/services/ServiceBlocks";
import { ShareSection } from "@/components/sites/brautasesores/ShareSection";

export const metadata: Metadata = { title: "Autónomos" };

export default function Autonomos() {
  return (
    <>
      <PageHero />
      <ServiceIntro image={`${ASSET}/admin.jpg`} title="Autónomos">
        En&nbsp;BRAUT ASESORES&nbsp;entendemos que cada profesional es diferente, por ello buscamos adaptarnos de la
        mejor manera posible a tu negocio o actividad profesional:
      </ServiceIntro>
      <PlanCard />
      <ServicesButton label="Servicios" variant="top" />
      <FormSection title="Pide presupuesto" />
      <ServicesButton label="Todos los servicios" variant="bottom" />
      <ShareSection path="/servicios/autonomos" title="Autónomos" className="bxs-share-light" />
    </>
  );
}
