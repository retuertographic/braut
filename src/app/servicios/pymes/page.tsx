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

export const metadata: Metadata = { title: "Pymes" };

export default function Pymes() {
  return (
    <>
      <PageHero />
      <ServiceIntro image={`${ASSET}/admin1.jpg`} title="Pymes">
        En&nbsp;BRAUT ASESORES&nbsp;sabemos que cada empresa es diferente.&nbsp;Elige el paquete que mejor se adapte a tu
        negocio o bien pídenos que te asesoremos:
      </ServiceIntro>
      <PlanCard />
      <ServicesButton label="Servicios" variant="top" />
      <FormSection title="Pide presupuesto" />
      <ServicesButton label="Todos los servicios" variant="bottom" />
      <ShareSection path="/servicios/pymes" title="Pymes" className="bxs-share-light" />
    </>
  );
}
