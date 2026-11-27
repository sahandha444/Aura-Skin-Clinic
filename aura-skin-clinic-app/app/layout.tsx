import type { Metadata } from "next";
import SiteHeader from "./site-header";
import Footer from "./footer";
import FloatingContact from "./floating-contact";
import "./globals.css";

export const metadata: Metadata = { title: "Aura Family Health Care & Skin Clinic" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
