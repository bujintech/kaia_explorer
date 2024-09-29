import Table from "../table";

const columns = [
  { title: "Block", dataIndex: "blockNumber" },
  { title: "Time Ago", dataIndex: "createdAt" },
  { title: "Total TXs", dataIndex: "txCount" },
  { title: "Block proposer", dataIndex: "minerName" },
  { title: "Base Fee", dataIndex: "baseFee" },
  { title: "Rewards(KLAY)", dataIndex: "reward" },
  { title: "Burnt Fee", dataIndex: "burntFees" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlockList({ dataSource }: { dataSource: any[] }) {
  return (
    <>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
}
