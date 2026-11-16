import type { Metadata } from "next";
import {
  Archivo_Narrow,
  Fjalla_One,
  Heebo,
  Lato,
  Montserrat,
  Nunito,
  Open_Sans,
  Poppins,
  Varela_Round,
} from "next/font/google";
import "./globals.css";
import "./braut.css";
import "./braut-servicios.css";
import "./braut-about.css";
import { CookieConsent } from "@/components/sites/brautasesores/CookieConsent";
import { Footer } from "@/components/sites/brautasesores/Footer";
import { Header } from "@/components/sites/brautasesores/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/* Extra Montserrat weights (thin title, semibold plan card) used on the service pages. */
const montserratExtra = Montserrat({ variable: "--font-montserrat-extra", subsets: ["latin"], weight: ["100", "600"] });

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400"] });

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["700"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["700"],
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: ["400"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Inicio",
    template: "%s",
  },
  description:
    "BRAUT ASESORES es una asesoría para autónomos, pymes y emprendedores orientada a los nuevos tiempos, con sedes en Barcelona y Tenerife.",
  icons: { icon: "/sites/brautasesores/recurso-1mdpi1.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = [
    montserrat.variable,
    openSans.variable,
    heebo.variable,
    archivoNarrow.variable,
    varelaRound.variable,
    lato.variable,
    fjallaOne.variable,
    nunito.variable,
    poppins.variable,
    montserratExtra.variable,
  ].join(" ");

  return (
    <html lang="es-ES" className={fontVars}>
      <body className="braut-body">
        <CookieConsent />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
