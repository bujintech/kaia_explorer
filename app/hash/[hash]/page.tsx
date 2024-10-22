import BlockDetail from "@/components/blockDetail";
import TxDetail from "@/components/transactionDetail";
import { queryDataByHash } from "@/lib/db";

import type { BlockResponseData, TxResponseData } from "@/lib/db/type";
import Empty from "@/components/empty";

async function Hash({ params: { hash } }: { params: { hash: string } }) {
  const result = await queryDataByHash(hash);
  if (!result) return <Empty type="hash"></Empty>;

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