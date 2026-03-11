import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fredriksweb.site"),
  title: "Produktdesigner | Fredrik Storheil",
  description: "Produktdesigner portefølje",
  icons: {
    icon: [{ url: "/favicon-fredrik-portfolio.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon-fredrik-portfolio.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={manrope.className}>
      <body>{children}</body>
    </html>
  );
}
