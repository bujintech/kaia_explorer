import Table from "../table";

const columns = [
  { title: "TX Hash", dataIndex: "txHash" },
  { title: "Block", dataIndex: "blockNumber" },
  { title: "Age", dataIndex: "createdAt" },
  { title: "From", dataIndex: "fromAddress" },
  { title: "To", dataIndex: "toAddress" },
  { title: "Method", dataIndex: "methodName" },
  { title: "Tx Type", dataIndex: "blockNumber" },
  { title: "Amount(KLAY)", dataIndex: "amount" },
  { title: "TX Fee(KLAY)", dataIndex: "txFee" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Transactions({ dataSource }: { dataSource: any[] }) {
  return (
    <>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
}
