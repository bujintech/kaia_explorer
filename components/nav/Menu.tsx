"use client";

import Link from "next/link";
import style from "./index.module.css";
import { useState } from "react";
export default function Menu() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={`${visible ? style.showMenu : ""} `} onClick={() => setVisible((v) => !v)}>
      <div className={style.m_btn}>
        <div className="flex fl_ja fl_ac">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="flex fl_ac">
        <li>
          <Link href="/blocks">BLOCKS</Link>
        </li>
        <li>
          <Link href="/txs">TRANSACTIONS</Link>
        </li>
        {/* <li>
            <Link href="/token">TOKEN</Link>
          </li> */}
        <li>
          <Link href="/gcInfo">GC INFO</Link>
        </li>
      </ul>
    </div>
  );
}
