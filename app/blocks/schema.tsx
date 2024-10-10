import type { Columns } from "@/components/table";
import Link from "next/link";

export interface DataType {
  blockNumber: string;
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
    dataIndex: "blockNumber",
    render: ({ blockNumber }) => <Link href={`/block/${blockNumber}`}>{blockNumber}</Link>,
  },
  { title: "Time Ago", dataIndex: "createdAt" },
  { title: "Total TXs", dataIndex: "txCount" },
  { title: "Block proposer", dataIndex: "minerName" },
  { title: "Base Fee", dataIndex: "baseFee" },
  { title: "Rewards(KLAY)", dataIndex: "reward" },
  { title: "Burnt Fee", dataIndex: "burntFees" },
];
