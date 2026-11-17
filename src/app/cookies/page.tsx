import type { Metadata } from "next";
import { COOKIES_HTML } from "@/components/sites/brautasesores/legal/content";
import { LegalPage } from "@/components/sites/brautasesores/legal/LegalPage";

export const metadata: Metadata = { title: "Cookies" };

export default function Page() {
  return <LegalPage title="Política de cookies" html={COOKIES_HTML} />;
}
