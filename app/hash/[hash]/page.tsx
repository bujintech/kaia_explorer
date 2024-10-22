import BlockDetail from "@/app/hash/components/block";
import TxDetail from "@/app/hash/components/trabsactions";
import { queryDataByHash } from "@/lib/db/api";
import type { BlockResponseData, TxResponseData } from "@/lib/db/type";

async function Hash({ params: { hash } }: { params: { hash: string } }) {
  const result = await queryDataByHash(hash);
  if (!result) return null;

  const { type, data } = result;

  if (type === "TX") {
    return <TxDetail data={data as TxResponseData}></TxDetail>;
  } else if (type === "BLOCK") {
    return <BlockDetail data={data as BlockResponseData}></BlockDetail>;
  } else {
    return null;
  }
}

export default Hash;
