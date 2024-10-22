import BlockDetail from "@/components/blockDetail";
import { queryBlockByNumber } from "@/lib/db";
import Empty from "@/components/empty";

async function BlockNumber({ params: { number } }: { params: { number: number } }) {
  const data = await queryBlockByNumber(number);

  if (!data) return <Empty type="block"></Empty>;

  return <BlockDetail data={data}></BlockDetail>;
}

export default BlockNumber;
