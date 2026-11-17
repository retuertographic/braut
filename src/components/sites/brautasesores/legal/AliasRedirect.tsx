"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/* Static hosting has no server redirects, so alias URLs forward on the client. */
export function AliasRedirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);
  return (
    <section className="bxm-page">
      <div className="bx-container">
        <p>
          Redirigiendo… <Link href={to}>Continuar</Link>
        </p>
      </div>
    </section>
  );
}
