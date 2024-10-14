import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { montserrat } from "../../fonts";


export const metadata: Metadata = {
  title: "CAJAS1970 | CAJAS, IMPRESIONES",
  description: "FABRICA MAYORISTA Y MINORISTA DE CAJAS DE MICROCORRUGADO Y CARTULINA. IMPRESIONES A PEDIDO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head></head>
      <body className={`${montserrat.className} antialiased`}>
      <Header />
      <main className="mt-[150px]">
        {children}
      </main>
      </body>
    </html>
  );
}
