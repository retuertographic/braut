import type { Metadata } from "next";
import { PRIVACIDAD_HTML } from "@/components/sites/brautasesores/legal/content";
import { LegalPage } from "@/components/sites/brautasesores/legal/LegalPage";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Page() {
  return <LegalPage title="Política de privacidad" html={PRIVACIDAD_HTML} />;
}
