import type { Metadata } from "next";
import { AVISO_LEGAL_HTML } from "@/components/sites/brautasesores/legal/content";
import { LegalPage } from "@/components/sites/brautasesores/legal/LegalPage";

export const metadata: Metadata = { title: "Aviso legal" };

export default function Page() {
  return <LegalPage title="Aviso legal" html={AVISO_LEGAL_HTML} />;
}
