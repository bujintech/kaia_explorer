import { formatNumber } from "@/lib/utils";
import style from "./index.module.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import type { KaiaQuoteData } from "@/lib/dbApi/type";

function Kaia() {
  const [price, setPrice] = useState<KaiaQuoteData>({
    price: NaN,
    volume: NaN,
    marketCap: NaN,
    circulatingSupply: NaN,
  });

  useEffect(() => {
    const fetchPrice = async () => {
      const data = await axios.post(`/api/kaiaPrice`, {
        data: {},
      });
      console.log("data:", data);
      setPrice(data.data);
    };
    fetchPrice().catch(err => {
      console.log("fetchPrice error:", err);
      setPrice({
        price: NaN,
        volume: NaN,
        marketCap: NaN,
        circulatingSupply: NaN,
      });
    });
  }, []);

  return (
    <div className={style.kaia}>
      <div>KAIA</div>
      <div>
        <div className={style.item}>
          <p>Price</p>
          <p>${formatNumber(price.price)}</p>
        </div>
        <div className={style.item}>
          <p>
            Volume<i>(24)</i>
          </p>
          <p>${formatNumber(price.volume)}</p>
        </div>
        <div className={style.item}>
          <p>Ciculating Supply</p>
          <p>{formatNumber(price.circulatingSupply)}</p>
        </div>
        <div className={style.item}>
          <p>Market Cap</p>
          <p>${formatNumber(price.marketCap)}</p>
        </div>
      </div>
    </div>
  );
}

export default Kaia;
