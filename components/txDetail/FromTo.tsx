"use client";

import style from "./index.module.css";
import { Address } from "../map";
import Copy from "../copy";
import { useState } from "react";

export default function FromTo({ from, to }: { from: string; to: string }) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={style.address}>
      <span>From-To</span>
      <span className={style.pcAddress}>
        <Address className="color_primary" address={from} noFormat></Address>
        <Copy text={from}></Copy>
        <i></i>
        <Address className="color_primary" address={to} noFormat></Address>
        <Copy text={to}></Copy>
      </span>

      <span
        className={style.mobileAddress_icon}
        style={{ transform: `rotate(${visible ? 0 : 180}deg)` }}
        onClick={() => setVisible(!visible)}
      ></span>

      <div className={style.mobileAddress} style={{ maxHeight: visible ? "1000px" : "0" }}>
        <p>
          From:&nbsp;<Address className="color_primary" address={from} noFormat></Address>
          <Copy text={from}></Copy>
        </p>
        <p>
          To:&nbsp;<Address className="color_primary" address={to} noFormat></Address>
          <Copy text={to}></Copy>
        </p>
      </div>
    </div>
  );
}
