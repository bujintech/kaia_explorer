import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import style from "./index.module.css";

function Logo() {
  return (
    <Link href="/">
      <div className={`${style.logo} flex fl_ae`}>
        <Image alt="logo" width={90} height={96} src="/images/logo.png"></Image>
        <Image alt="logo_text" width={334} height={46} src="/images/logo_text.png"></Image>
      </div>
    </Link>
  );
}

export default function Nav() {
  return (
    <div className={`${style.navComponent} flex fl_jb fl_ae`}>
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
}
