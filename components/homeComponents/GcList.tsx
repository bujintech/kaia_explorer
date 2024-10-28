"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import style from "./index.module.css";

function GcList() {
  const [data, setData] = useState(new Array(11).fill({}));

  const queryGcInfoData = useCallback(() => {
    axios.post("/api/gcInfo").then(({ data }) => {
      setData(data.result);
    });
  }, []);

  useEffect(() => {
    queryGcInfoData();
  }, []);

  return (
    <div className={style.gcList}>
      {[
        [data[0], data[1], data[2], data[3]],
        [data[4], data[5], data[6], data[7]],
      ].map((v, j) => {
        return (
          <div className="flex fl_jb" key={j}>
            {v.map((item, i) => {
              return (
                <div className={style.item} key={i}>
                  <div className={style.info}>
                    <img src={item.thumbnail}></img>
                    <div>{item.name}</div>
                  </div>

                  <div className={style.countMsg}>
                    <div className="flex fl_jb">
                      <span>ToTal Staking</span>
                      <span>{item.totalStaking || "0"}KALY</span>
                    </div>
                    <div className="flex fl_jb">
                      <span>APY</span>
                      <span>{item.apy || "0"}%</span>
                    </div>
                  </div>

                  <div className={style.des}>
                    <div>{item.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <div className={style.more}>
        <Link href="/gcInfo">LEARN MORE</Link>
      </div>
    </div>
  );
}

export default GcList;
