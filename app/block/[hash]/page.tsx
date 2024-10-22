import BlockDetail from "@/components/blockDetail";
import { queryBlockByHash } from "@/lib/db";
import Empty from "@/components/empty";

async function BlockHash({ params: { hash } }: { params: { hash: string } }) {
  const data = await queryBlockByHash(hash);

  if (!data) return <Empty type="block"></Empty>;

  return <BlockDetail data={data}></BlockDetail>;
}

export default BlockHash;
