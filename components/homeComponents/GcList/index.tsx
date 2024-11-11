"use client";

import Link from "next/link";
import type { GcResponseData } from "@/lib/dbApi/type";

import style from "./index.module.css";
import { useGlobalData } from "@/components/layout/context";

function PCList({ list }: { list: [GcResponseData[], GcResponseData[]] }) {
  return list.map((v, j) => {
    return (
      <div className="flex fl_jb" key={j}>
        {v.map((item, i) => {
          return (
            <div className={style.pc_item} key={i}>
              <div className={style.pc_info}>
                <img src={item.thumbnail}></img>
                <div>{item.name}</div>
              </div>

              <div className={style.pc_countMsg}>
                <div className="flex fl_jb">
                  <span>Total Staking</span>
                  <span>{item.total_staking || "0"}</span>
                </div>
                <div className="flex fl_jb">
                  <span>APY</span>
                  <span>{item.apy || "0"}%</span>
                </div>
              </div>

              <div className={style.pc_des}>
                <div>{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  });
}

function MobileList({ list }: { list: GcResponseData[] }) {
  return (
    <div className={style.mb_container}>
      <div className="flex fl_jb">
        {list.map((v, index) => {
          return (
            <div key={index} className={style.mb_item}>
              <img src={v.thumbnail}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GcList({ data }: { data: GcResponseData[] }) {
  const { isMobile } = useGlobalData();

  return (
    <div className={style.gcList}>
      {isMobile ? (
        <MobileList
          list={[data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7]]}
        ></MobileList>
      ) : (
        <PCList
          list={[
            [data[0], data[1], data[2], data[3]],
            [data[4], data[5], data[6], data[7]],
          ]}
        ></PCList>
      )}

      <div className={style.more}>
        <Link href="/gcInfo">LEARN MORE</Link>
      </div>
    </div>
  );
}

export default GcList;
