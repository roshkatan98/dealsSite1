import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Home Finds",
  description: "Smart Home Finds Deals - curated smart home deals and alerts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
