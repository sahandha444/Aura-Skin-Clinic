import type { Metadata } from "next";
import SiteHeader from "./site-header";
import Footer from "./footer";
import "./globals.css";

export const metadata: Metadata = { title: "AURA Family Health Care & Skin Clinic" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
