import Link from "next/link";
import type { Columns } from "@/components/table";
import type { BlockResponseData } from "@/lib/dbApi/type";
import { dayjs } from "@/lib/utils";

const columns: Columns<BlockResponseData>[] = [
  {
    title: "Block",
    dataIndex: "number",
    render: ({ number }) => {
      const blockNumber = parseInt(number, 16).toString();
      return <Link href={`/block/${blockNumber}`}>{blockNumber}</Link>;
    },
  },
  {
    title: "Age",
    dataIndex: "timestamp",
    render: ({ timestamp }) => dayjs(Number(timestamp) * 1000).fromNow(),
  },
  { title: "Total TXs", dataIndex: "transactionsTotal" },
  { title: "Block proposer", dataIndex: "miner" },
  { title: "Reward", dataIndex: "miner" },
];

export default columns;
