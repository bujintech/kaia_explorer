import { BlockProposer, Block, Age } from "@/components/map";
import { hexToDecimal } from "@/lib/utils";
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
  {
    title: "Base Fee(GWei)",
    dataIndex: "baseFeePerGas",
    render: ({ baseFeePerGas }) => hexToDecimal(baseFeePerGas) / 1000000000,
  },
  { title: "Rewards(KLAY)", dataIndex: "number", render: () => 9.6 },
];

export default columns;
