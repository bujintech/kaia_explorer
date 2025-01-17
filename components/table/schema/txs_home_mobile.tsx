import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import style from "../index.module.css";
import { Address, Age, Hash } from "@/components/map";

const columns: Columns<TxResponseData>[] = [
  {
    title: (
      <div className={style.mb_th}>
        <div>TX Hash</div>
        <div>Age</div>
      </div>
    ),
    dataIndex: "hash",
    render: ({ hash, timestamp }) => {
      return (
        <div className={style.mb_td}>
          <div className="ellipsis">
            <Hash hash={hash} noFormat></Hash>
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
          <div>
            <Address address={to}></Address>
          </div>
        </div>
      );
    },
  },
];

export default columns;
