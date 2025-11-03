import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TemetkezésPro – Digitális Megoldások Temetkezési Vállalkozásoknak",
  description: "Belső elhunyt- és ügyfél-nyilvántartás hivatalos irat-előkészítéssel. Modern digitális eszközök temetkezési vállalkozásoknak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
