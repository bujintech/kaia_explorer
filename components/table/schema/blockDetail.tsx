import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import { Address, Age, Block, Hash } from "@/components/map";
import style from "../index.module.css";
import { Method } from "@/components/map";

const columns: Columns<TxResponseData>[] = [
  {
    title: "TX Hash",
    dataIndex: "hash",
    render: ({ hash }) => <Hash hash={hash}></Hash>,
  },
  {
    title: "Block",
    dataIndex: "blockNumber",
    render: ({ blockNumber }) => <Block blockNumber={blockNumber}></Block>,
  },
  {
    title: "Age",
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
  { title: "Method", dataIndex: "input", render: ({ input }) => <Method input={input}></Method> },

  { title: "TX Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "blockNumber" },
  { title: "TX Fee(KLAY)", dataIndex: "blockNumber" },
];
export default columns;
