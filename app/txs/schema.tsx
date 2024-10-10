import type { Columns } from "@/components/table";
import Link from "next/link";

export interface DataType {
  txHash: string;
  blockNumber: string;
  createdAt: string;
  fromAddress: string;
  toAddress: string;
  methodName: string;
  amount: string;
  txFee: string;
}

export const columns: Columns<DataType>[] = [
  {
    title: "TX Hash",
    dataIndex: "txHash",
    render: ({ txHash }) => <Link href={`/tx/${txHash}`}>{txHash}</Link>,
  },
  { title: "Block", dataIndex: "blockNumber" },
  { title: "Age", dataIndex: "createdAt" },
  { title: "From", dataIndex: "fromAddress" },
  { title: "To", dataIndex: "toAddress" },
  { title: "Method", dataIndex: "methodName" },
  { title: "Tx Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "amount" },
  { title: "TX Fee(KLAY)", dataIndex: "txFee" },
];
