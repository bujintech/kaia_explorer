import style from "./index.module.css";
import { Age, Block } from "../map";

import type { TxResponseData } from "@/lib/dbApi/type";

async function TransactionDetail({ data }: { data: TxResponseData }) {
  return (
    <>
      <div className={style.title}>TRANSACTIONS</div>

      <div className={`${style.detail} ${style.card}`}>
        <div>
          <span>TXN Hash</span>
          <span>{data.hash}</span>
        </div>
        <div>
          <span>Block</span>
          <span>
            <Block blockNumber={data.blockNumber}></Block>
          </span>
        </div>
        <div>
          <span>From-To</span>
          <span>{data.from}</span>
        </div>
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
