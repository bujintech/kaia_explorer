import type { Columns } from "@/components/table";
import * as render from "./render";
import { Method } from "@/components/map";
import type { TxResponseData } from "@/lib/dbApi/type";
import style from "../index.module.css";

const columns: Columns<TxResponseData>[] = [
  {
    title: "TX Hash",
    dataIndex: "hash",
    render: ({ hash }) => render.renderHash(hash),
  },
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
  { title: "Method", dataIndex: "input", render: ({ input }) => <Method input={input}></Method> },
  { title: "Tx Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "blockNumber" },
  { title: "TX Fee(KLAY)", dataIndex: "blockNumber" },
];

export default columns;
