/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import style from "./index.module.css";
import Search from "@/components/search";

function GCInfo() {
  const [data, setData] = useState(new Array(11).fill({}));

  const queryGcInfoData = useCallback(() => {
    axios.post("/api/gcInfo").then(({ data }) => {
      setData(data.result);
    });
  }, []);

  useEffect(() => {
    // queryGcInfoData();
  }, []);

  return (
    <div className={style.gcPage}>
      <div className="page_search">
        <Search></Search>
      </div>

      <div className={style.title}>
        <span>GC Information</span>
      </div>

      <div className={style.gcContainer}>
        {data.map((item: any, i) => {
          return (
            <div key={i}>
              <div>
                <img src={item.thumbnail}></img>
              </div>
              <div>
                <div>{item.name}</div>

                <div>
                  {item.categories?.map((v: any) => (
                    <span style={{ margin: 10, border: "1px solid red" }} key={v.name}>
                      {v.name}
                    </span>
                  ))}
                </div>
                <div>Total Staking {item.totalStaking} (KLAY)</div>
                <div>APY {item.apy} %</div>
                <div>{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GCInfo;
