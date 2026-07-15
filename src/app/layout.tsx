import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SevaSetu Foundation | Bridging Service & Social Impact",
  description: "SevaSetu Foundation empowers communities across India through education, women empowerment, environmental sustainability, animal welfare, and youth development.",
  keywords: ["NGO India","social impact","education NGO","women empowerment","environment","SevaSetu"],
  openGraph: {
    title: "SevaSetu Foundation",
    description: "Bridging Service and Social Impact — empowering communities across India.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
