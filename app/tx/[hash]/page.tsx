import TransactionDetail from "@/components/transactionDetail";
import { queryTransactionByHash } from "@/lib/db";
import Empty from "@/components/empty";

async function TransactionHash({ params: { hash } }: { params: { hash: string } }) {
  const data = await queryTransactionByHash(hash);

  if (!data) return <Empty type="block"></Empty>;

  return <TransactionDetail data={data}></TransactionDetail>;
}

export default TransactionHash;
