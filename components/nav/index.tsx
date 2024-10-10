import Link from "next/link";
import style from "./index.module.css";
const Nav = () => {
  return (
    <ul className={style.nav}>
      <li>
        <Link href="/blocks">Blocks</Link>
      </li>
      <li>
        <Link href="/txs">Transactions</Link>
      </li>
      <li>
        <Link href="/gcInfo">GC Info</Link>
      </li>
    </ul>
  );
};

export default Nav;
