"use client";

import style from "./index.module.css";
import { Address } from "@/components/map";
import Copy from "@/components/copy";
import { useState } from "react";
import type { GcResponseData } from "@/lib/dbApi/type";

export default function GcAddress({ gcData, address }: { gcData: GcResponseData | null; address: string }) {
  const [visible, setVisible] = useState<boolean>(true);

  if (gcData) {
    return (
      <div className={style.gcAddress}>
        <span>Address</span>

        <span
          className={style.gcAddress_icon}
          style={{ transform: `rotate(${visible ? 0 : 180}deg)` }}
          onClick={() => setVisible(!visible)}
        ></span>

        <div style={{ maxHeight: visible ? "600px" : "0" }}>
          {gcData.contracts.map((v) => {
            return (
              <p key={v.address}>
                <span style={{ color: "#666" }}>{v.type.toLocaleLowerCase()}:&nbsp;</span>
                <span>
                  <Address className="color_primary" address={v.address} noFormat></Address>
                  <Copy text={v.address}></Copy>
                </span>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <span>Address</span>
      <span>
        {address}
        <Copy text={address}></Copy>
      </span>
    </div>
  );
}
