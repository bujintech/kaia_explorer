import { formatNumber } from "@/lib/utils";
import { queryMaxBlockNumber } from "@/lib/dbApi";
import style from "./index.module.css";
import Link from "next/link";

async function Welcome() {
  const blockHeight = await queryMaxBlockNumber();

  return (
    <div className={style.blockHeight}>
      <Link href={`/block/${blockHeight}`}>
        <div>Block Height</div>
        <div>{formatNumber(blockHeight)}</div>
      </Link>
    </div>
  );
}

export default Welcome;
