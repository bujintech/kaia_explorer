import { formatNumber } from "@/lib/utils";
import style from "./index.module.css";

function Kaia() {
  return (
    <div className={style.kaia}>
      <div>KAIA</div>
      <div>
        <div className={style.item}>
          <p>Price</p>
          <p>$0.272618</p>
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
