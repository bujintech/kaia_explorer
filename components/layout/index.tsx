import Nav from "../nav";
import Search from "../search";
import Footer from "../footer";
import RenderChilden from "./context";
import { queryMethodConfig, queryGcConfig } from "@/lib/dbApi";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const methodConfig = await queryMethodConfig();
  const gcConfig = await queryGcConfig();
  return (
    <RenderChilden data={{ methodConfig: methodConfig || {}, gcConfig: gcConfig || {} }}>
      <Nav></Nav>
      <main>
        <Search></Search>
        {children}
      </main>
      <Footer></Footer>
    </RenderChilden>
  );
}
