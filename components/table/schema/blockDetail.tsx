import type { Columns } from "@/components/table";
import type { TxResponseData } from "@/lib/dbApi/type";
import { hexToDecimal } from "@/lib/utils";
import { Address, Age, Block, Hash, TxType } from "@/components/map";
import style from "../index.module.css";
import { Method } from "@/components/map";
import { TabbedTableColumn } from "@/components/tabbedTable";
import { RenderMethod } from "@/components/tabbedTable/types";

const columns: (Columns<TxResponseData> & TabbedTableColumn<TxResponseData>)[] = [
  {
    title: "TX Hash",
    dataIndex: "hash",
    render: ({ hash }) => (
      <div className="ellipsis">
        <Hash hash={hash} noFormat></Hash>
      </div>
    ),
    renderMethod: RenderMethod.Hash,
  },
  {
    title: "Block",
    dataIndex: "blockNumber",
    render: ({ blockNumber }) => <Block blockNumber={blockNumber}></Block>,
    renderMethod: RenderMethod.Block,
  },
  {
    title: "Age (ago)",
    dataIndex: "timestamp",
    render: ({ timestamp }) => <Age timestamp={timestamp}></Age>,
    renderMethod: RenderMethod.Age,
  },
  {
    title: "From",
    dataIndex: "from",
    render: ({ from }) => <Address address={from}></Address>,
    renderMethod: RenderMethod.Address,
  },
  {
    title: "To",
    dataIndex: "to",
    render: ({ to }) => <Address address={to} className={style.to}></Address>,
    renderMethod: RenderMethod.Address,
  },
  {
    title: "Method",
    dataIndex: "input",
    render: ({ input }) => <Method input={input}></Method>,
    renderMethod: RenderMethod.Method,
  },
  {
    title: "Tx Type",
    dataIndex: "type",
    render: ({ type }) => <TxType type={type}></TxType>,
    renderMethod: RenderMethod.TxType,
  },
  {
    title: "Amount(KAIA)",
    dataIndex: "value",
    render: ({ value }) => hexToDecimal(value) / 1000000000000000000,
    renderMethod: RenderMethod.Decimal,
  },
];
export default columns;
