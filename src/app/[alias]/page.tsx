import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AliasRedirect } from "@/components/sites/brautasesores/legal/AliasRedirect";
import { ALIASES } from "@/components/sites/brautasesores/legal/aliases";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ALIASES).map((alias) => ({ alias }));
}

export const metadata: Metadata = { robots: { index: false } };

export default async function Page({ params }: { params: Promise<{ alias: string }> }) {
  const { alias } = await params;
  const to = ALIASES[alias];
  if (!to) notFound();
  return <AliasRedirect to={to} />;
}
