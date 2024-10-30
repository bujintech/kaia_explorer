import Nav from "@/components/nav";
import Search from "@/components/search";
import Footer from "@/components/footer";
import Script from "next/script";
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
      <Script async src="/script/fontSize.js"></Script>
      <body>
        <Nav></Nav>
        <main>
          <Search></Search>
          {children}
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
}
