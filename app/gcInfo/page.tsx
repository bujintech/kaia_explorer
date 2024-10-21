"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import style from "./index.module.css";

const GCInfo = () => {
  const [data, setData] = useState([]);

  const queryGcInfoData = useCallback(() => {
    axios.post("/api/gcInfo").then(({ data }) => {
      console.log(data.result);
      setData(data.result);
    });
  }, []);

  useEffect(() => {
    queryGcInfoData();
  }, []);

  return (
    <>
      {data.map((item: any, i) => {
        return (
          <div key={i} className={style.flex}>
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
    </>
  );
};

export default GCInfo;
