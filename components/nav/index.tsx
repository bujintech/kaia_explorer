import Image from "next/image";
import Link from "next/link";
import style from "./index.module.css";

function Nav() {
  return (
    <div className={style.navComponent}>
      <div className="flex fl_jb">
        <Link href="/">
          <div className={`${style.logo} flex fl_ae`}>
            <Image alt="logo" width={90} height={96} src="/images/logo.png"></Image>
            <Image alt="logo_text" width={334} height={46} src="/images/logo_text.png"></Image>
          </div>
        </Link>

        <ul className="flex fl_ac">
          <li>
            <Link href="/blocks">BLOCKS</Link>
          </li>
          <li>
            <Link href="/txs">TRANSACTIONS</Link>
          </li>
          <li>
            <Link href="/gcInfo">TOKEN</Link>
          </li>
          <li>
            <Link href="/gcInfo">GC INFO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
