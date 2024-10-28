"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import style from "./index.module.css";

function GCInfo() {
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
    <div className={style.gcPage}>
      <div className={style.title}>
        <span>GC Information</span>
      </div>

      <div className={style.gcContainer}>
        {data.map((item, i) => {
          return (
            <div key={i} className={style.itemwrap}>
              <div className={style.iteminner}>
                <div className={style.info}>
                  <img src={item.thumbnail}></img>
                  <div>{item.name}</div>
                </div>

                <div className={style.countMsg}>
                  <span>Total Staking</span>
                  <span>APY</span>
                </div>

                <div
                  className={style.countMsg}
                  style={{ fontWeight: "bold", borderTop: "1px solid #3d4049" }}
                >
                  <span>{item.total_staking || "0"}KALY</span>
                  <span>{item.apy || "0"}%</span>
                </div>

                <div className={style.des}>
                  <div>{item.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GCInfo;
