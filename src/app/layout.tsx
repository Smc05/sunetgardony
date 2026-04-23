import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sunset Apartment Gárdony | Apartman a Velencei-tó partján",
  description:
    "Csodáld meg a Velencei-tó legszebb naplementéit a romantikus tetőtéri apartmanunkból. Foglaljon most!",
  keywords:
    "szálláshely, Velencei-tó, naplemente, romantikus, apartman, Gárdony",
  icons: {
    icon: "/assets/logo/logo-t-bg.png",
    apple: "/assets/logo/logo-t-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-lato)]">
        <Navbar />
        <ScrollAnimations />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
