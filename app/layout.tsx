import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({subsets: ["latin"], variable: '--font-ibm-plex-serif', weight: ['400', '700']});


export const metadata: Metadata = {
  title: "Horion",
  description: "Horizon is a modern banking platform for the next generation of businesses.",
  icons: {
    icon: '/icons/icon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
