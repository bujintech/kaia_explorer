import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import style from "../index.module.css";
import { Address, Age, Hash } from "@/components/map";

const columns: Columns<TxResponseData>[] = [
  {
    title: "TX Hash",
    dataIndex: "hash",
    render: ({ hash }) => (
      <div className="ellipsis">
        <Hash hash={hash} noFormat></Hash>
      </div>
    ),
  },
  {
    title: "Age (ago)",
    dataIndex: "timestamp",
    render: ({ timestamp }) => <Age timestamp={timestamp}></Age>,
  },
  {
    title: "From",
    dataIndex: "from",
    render: ({ from }) => <Address address={from}></Address>,
  },
  {
    title: "To",
    dataIndex: "to",
    render: ({ to }) => <Address address={to} className={style.to}></Address>,
  },
];

export default columns;
