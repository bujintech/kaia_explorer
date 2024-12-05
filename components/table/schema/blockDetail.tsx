import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import { hexToDecimal } from "@/lib/utils";
import { Address, Age, Block, Hash, TxType } from "@/components/map";
import style from "../index.module.css";
import { Method } from "@/components/map";

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

  { title: "Tx Type", dataIndex: "type", render: ({ type }) => <TxType type={type}></TxType> },
  { title: "Amount(KLAY)", dataIndex: "value", render: ({ value }) => hexToDecimal(value) },
];
export default columns;
