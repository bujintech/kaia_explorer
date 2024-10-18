import Link from "next/link";
import type { Columns } from "@/components/table";
import dayjs from "@/lib/utils/day";
export interface DataType {
  number: string;
  createdAt: string;
  txCount: string;
  minerName: string;
  baseFee: string;
  reward: string;
  burntFees: string;
}

export const columns: Columns<DataType>[] = [
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
    dataIndex: "createdAt",
    render: ({ createdAt }) => dayjs(Number(createdAt) * 1000).fromNow(),
  },
  { title: "Total TXs", dataIndex: "txCount" },
  { title: "Block proposer", dataIndex: "minerName" },
  { title: "Base Fee", dataIndex: "baseFee" },
  { title: "Rewards(KLAY)", dataIndex: "reward" },
  { title: "Burnt Fee", dataIndex: "burntFees" },
];
