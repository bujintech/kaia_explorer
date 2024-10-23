import Nav from "@/components/nav";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kaiaScan",
  description: "kaiaScan explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
