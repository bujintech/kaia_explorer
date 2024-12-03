import style from "./index.module.css";
import { Age, Block } from "../map";
import FromTo from "./FromTo";
import Copy from "../copy";

import type { TxResponseData } from "@/lib/dbApi/type";

function TransactionDetail({ data }: { data: TxResponseData }) {
  return (
    <>
      <div className={style.title}>TRANSACTIONS</div>

      <div className={`${style.detail} ${style.card}`}>
        <div>
          <span>TXN Hash</span>
          <span>
            {data.hash}
            <Copy className={style.copyBtn} text={data.hash}></Copy>
          </span>
        </div>
        <div>
          <span>Block</span>
          <span>
            <Block className="color_primary weight" blockNumber={data.blockNumber}></Block>
          </span>
        </div>
        <FromTo from={data.from} to={data.to}></FromTo>
        <div>
          <span>Age</span>
          <span>
            <Age timestamp={data.timestamp}></Age>
          </span>
        </div>
        <div>
          <span>Amount</span>
          <span>{data.gas}</span>
        </div>
        <div>
          <span>TXN Fee</span>
          <span>{data.gasPrice}</span>
        </div>
      </div>
    </>
  );
}

export default TransactionDetail;
