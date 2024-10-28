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
    title: "Time Ago",
    dataIndex: "timestamp",
    render: ({ timestamp }) => dayjs(Number(timestamp) * 1000).fromNow(),
  },
  { title: "Total TXs", dataIndex: "transactionsTotal" },
  {
    title: "Block proposer",
    dataIndex: "miner",
    render: ({ miner }) => {
      return <Link href={`/address/${miner}`}>{miner}</Link>;
    },
  },
  { title: "Base Fee", dataIndex: "number" },
  { title: "Rewards(KLAY)", dataIndex: "number" },
  { title: "Burnt Fee", dataIndex: "number" },
];

export default columns;
