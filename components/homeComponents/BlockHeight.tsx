import { formatNumber } from "@/lib/utils";
import { queryMaxBlockNumber } from "@/lib/dbApi";
import style from "./index.module.css";

async function Welcome() {
  const blockHeight = await queryMaxBlockNumber();

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
