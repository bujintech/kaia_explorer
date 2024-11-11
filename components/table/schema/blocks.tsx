import { BlockProposer, Block, Age } from "@/components/map";

import type { Columns } from "@/components/table";
import type { BlockResponseData } from "@/lib/dbApi/type";

const columns: Columns<BlockResponseData>[] = [
  {
    title: "Block",
    dataIndex: "number",
    render: ({ number }) => <Block blockNumber={number}></Block>,
  },
  {
    title: "Time Ago",
    dataIndex: "timestamp",
    render: ({ timestamp }) => <Age timestamp={timestamp}></Age>,
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
