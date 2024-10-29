import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import * as render from "./render";
import style from "../index.module.css";

const columns: Columns<TxResponseData>[] = [
  {
    title: "Block",
    dataIndex: "blockNumber",
    render: ({ blockNumber }) => render.renderBlock(blockNumber),
  },
  {
    title: "Age",
    dataIndex: "timestamp",
    render: ({ timestamp }) => render.renderAge(timestamp),
  },
  {
    title: "From",
    dataIndex: "from",
    render: ({ from }) => render.renderAddress(from),
  },
  {
    title: "To",
    dataIndex: "to",
    render: ({ to }) => render.renderAddress(to, { className: style.to }),
  },
];

export default columns;
