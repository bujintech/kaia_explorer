import BlockDetail from "@/app/hash/components/block";
import { queryBlockByNumber } from "@/lib/db/api";

async function BlockNumber({ params: { number } }: { params: { number: number } }) {
  const data = await queryBlockByNumber(number);

  if (!data) return null;

  return <BlockDetail data={data}></BlockDetail>;
}

export default BlockNumber;
