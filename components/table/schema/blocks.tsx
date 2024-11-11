import type { Columns } from "@/components/table";
import type { BlockResponseData } from "@/lib/dbApi/type";
import * as render from "./render";
import { BlockProposer } from "@/components/map";

const columns: Columns<BlockResponseData>[] = [
  {
    title: "Block",
    dataIndex: "number",
    render: ({ number }) => render.renderBlock(number),
  },
  {
    title: "Time Ago",
    dataIndex: "timestamp",
    render: ({ timestamp }) => render.renderAge(timestamp),
  },
  { title: "Total TXs", dataIndex: "transactionsTotal" },
  {
    title: "Block proposer",
    dataIndex: "miner",
    render: ({ miner }) => <BlockProposer miner={miner}></BlockProposer>,
  },
  { title: "Base Fee", dataIndex: "number" },
  { title: "Rewards(KLAY)", dataIndex: "number" },
  { title: "Burnt Fee", dataIndex: "number" },
];

export default columns;
