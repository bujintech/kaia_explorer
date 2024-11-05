import { formatNumber } from "@/lib/utils";

import style from "./index.module.css";
import Link from "next/link";

function BlockHeight({ blockHeight }: { blockHeight: number }) {
  return (
    <div className={style.blockHeight}>
      <Link href={`/block/${blockHeight}`}>
        <div>Block Height</div>
        <div>{formatNumber(blockHeight)}</div>
      </Link>
    </div>
  );
}

export default BlockHeight;
