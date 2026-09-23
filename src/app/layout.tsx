import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Fuoco — Wood-Fired Italian Kitchen",
  description:
    "Fuoco is a wood-fired Italian kitchen serving hand-stretched pizza, homemade pasta, fresh seafood and dolci beneath glowing sage arches.",
  openGraph: {
    title: "Fuoco — Wood-Fired Italian Kitchen",
    description:
      "Hand-stretched pizza, homemade pasta, the day's catch and dolci — dine beneath the arches.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#EBE6DB",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
