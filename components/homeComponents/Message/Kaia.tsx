import { formatNumber } from "@/lib/utils";
import style from "./index.module.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Kaia() {
  const [price, setPrice] = useState(NaN);

  useEffect(() => {
    const fetchPrice = async () => {
      const data = await axios.post(`/api/kaiaPrice`, {
        data: {},
      });
      setPrice(data.data);
    };
    fetchPrice().catch(err => {
      console.log("fetchPrice error:", err);
      setPrice(NaN);
    });
  }, []);

  return (
    <div className={style.kaia}>
      <div>KAIA</div>
      <div>
        <div className={style.item}>
          <p>Price</p>
          <p>{isNaN(price) ? "-" : `$${price}`}</p>
        </div>
        <div className={style.item}>
          <p>
            Volume<i>(24)</i>
          </p>
          <p>${formatNumber(98691620)}</p>
        </div>
        <div className={style.item}>
          <p>Ciculating Supply</p>
          <p>{formatNumber(5891585282)}</p>
        </div>
        <div className={style.item}>
          <p>Market Cap</p>
          <p>${formatNumber(1603474074)}</p>
        </div>
      </div>
    </div>
  );
}

export default Kaia;
