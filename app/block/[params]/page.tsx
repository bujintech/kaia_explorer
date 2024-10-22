import BlockDetail from "@/components/blockDetail";
import { queryBlockByNumber, queryBlockByHash } from "@/lib/db";
import { isHash, hexToDecimal } from "@/lib/utils";
import Empty from "@/components/empty";

async function BlockNumber({ params: { params } }: { params: { params: string } }) {
  let data = null;
  if (isHash(params)) {
    data = await queryBlockByHash(params);
  } else {
    data = await queryBlockByNumber(hexToDecimal(params));
  }

  if (!data) return <Empty type="block"></Empty>;

  return <BlockDetail data={data}></BlockDetail>;
}

export default BlockNumber;
