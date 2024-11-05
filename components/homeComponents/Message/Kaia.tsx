import { formatNumber } from "@/lib/utils";
import style from "./index.module.css";

function Kaia() {
  return (
    <div className={style.kaia}>
      <div>KLAY</div>
      <div>
        <div className={style.item}>
          <p>Price</p>
          <p>$0.125074</p>
        </div>
        <div className={style.item}>
          <p>
            Volume<i>(24)</i>
          </p>
          <p>${formatNumber(8462673)}</p>
        </div>
        <div className={style.item}>
          <p>
            Ciculating<i>(Klay)</i>
          </p>
          <p>{formatNumber(5855155094)}</p>
        </div>
        <div className={style.item}>
          <p>Market Cap</p>
          <p>${formatNumber(732327000)}</p>
        </div>
      </div>
    </div>
  );
}

export default Kaia;
