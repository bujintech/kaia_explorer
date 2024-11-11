import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import style from "../index.module.css";
import { Address, Age, Block } from "@/components/map";

const columns: Columns<TxResponseData>[] = [
  {
    title: (
      <div className={style.mb_th}>
        <div>TX Hash</div>
        <div>Age</div>
      </div>
    ),
    dataIndex: "hash",
    render: ({ blockNumber, timestamp }) => {
      return (
        <div className={style.mb_td}>
          <div>
            <Block blockNumber={blockNumber}></Block>
          </div>
          <div>
            <Age timestamp={timestamp}></Age>
          </div>
        </div>
      );
    },
  },
  {
    title: (
      <div className={style.mb_th}>
        <div>From</div>
        <div>To</div>
      </div>
    ),
    dataIndex: "hash",
    render: ({ from, to }) => {
      return (
        <div className={style.mb_td}>
          <div>
            <Address address={from}></Address>
          </div>
          <div className={style.to}>{"\u3000"}</div>
          <div>
            <Address address={to}></Address>
          </div>
        </div>
      );
    },
  },
];

export default columns;
