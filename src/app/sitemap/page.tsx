import type { Metadata } from "next";
import { SitemapTree } from "@/components/sites/brautasesores/legal/SitemapTree";

export const metadata: Metadata = { title: "Sitemap" };

export default function Page() {
  return (
    <section className="bxm-page">
      <div className="bx-container">
        <h1>Sitemap</h1>
        <SitemapTree />
      </div>
    </section>
  );
}
