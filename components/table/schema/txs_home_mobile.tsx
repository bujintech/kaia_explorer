import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import * as render from "./render";
import style from "../index.module.css";

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
          <div>{render.renderBlock(blockNumber)}</div>
          <div>{render.renderAge(timestamp)}</div>
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
          <div>{render.renderAddress(from)}</div>
          <div className={style.to}>{"\u3000"}</div>
          <div>{render.renderAddress(to)}</div>
        </div>
      );
    },
  },
];

export default columns;
