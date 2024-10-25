import Nav from "@/components/nav";
import Search from "@/components/search";
import Footer from "@/components/footer";

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

        <main style={{ minHeight: "calc(100% - 170px)" }}>
          <div className="page_search">
            <Search></Search>
          </div>

          {children}
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
}
