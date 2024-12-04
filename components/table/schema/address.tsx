import type { Columns } from "@/components/table";
import { Method, Block, Hash, Age, Address } from "@/components/map";
import type { TxResponseData } from "@/lib/dbApi/type";
import { hexToDecimal } from "@/lib/utils";
import style from "../index.module.css";

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
  { title: "Method", dataIndex: "input", render: ({ input }) => <Method input={input}></Method> },

  { title: "Tx Type", dataIndex: "type", render: ({ type }) => hexToDecimal(type) },
  { title: "Amount(KLAY)", dataIndex: "value", render: ({ value }) => hexToDecimal(value) },
  { title: "TX Fee(KLAY)", dataIndex: "blockNumber" },
];

export default columns;
