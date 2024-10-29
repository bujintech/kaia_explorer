import { formatNumber } from "@/lib/utils";
import style from "./index.module.css";

function Welcome() {
  const blockHeight = 28349723;

  return (
    <div className={style.blockHeight}>
      <div>
        <div>Block Height</div>
        <div>{formatNumber(blockHeight)}</div>
      </div>
    </div>
  );
}

export default Welcome;
