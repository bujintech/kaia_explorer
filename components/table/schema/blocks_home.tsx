import type { Columns } from "@/components/table";
import type { BlockResponseData } from "@/lib/dbApi/type";
import { Age, Block } from "@/components/map";
import { BlockProposer } from "@/components/map";

const columns: Columns<BlockResponseData>[] = [
  {
    title: "Block",
    dataIndex: "number",
    render: ({ number }) => <Block blockNumber={number}></Block>,
  },
  {
    title: "Age",
    dataIndex: "timestamp",
    render: ({ timestamp }) => <Age timestamp={timestamp}></Age>,
  },
  { title: "Total TXs", dataIndex: "transactionsTotal" },
  {
    title: "Block proposer",
    dataIndex: "miner",
    render: ({ miner }) => <BlockProposer miner={miner}></BlockProposer>,
  },
  { title: "Reward", dataIndex: "transactionsTotal" },
];

export default columns;
