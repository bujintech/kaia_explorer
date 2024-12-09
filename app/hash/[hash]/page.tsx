import BlockDetail from "@/components/blockDetail";
import TxDetail from "@/components/txDetail";
import { queryDataByHash, queryTransfersByBlockNumber, queryTransfersByTxHash } from "@/lib/dbApi";

import type { BlockResponseData, TxResponseData } from "@/lib/dbApi/type";
import Empty from "@/components/empty";

async function Hash({ params: { hash } }: { params: { hash: string } }) {
  const result = await queryDataByHash(hash);

  if (!result) return <Empty></Empty>;

  const { type, data } = result;

  if (type === "TX") {
    const transfers = await queryTransfersByTxHash(hash);
    console.log("Transfers:", transfers);
    return <TxDetail data={data as TxResponseData} transfers={transfers ?? []}></TxDetail>;
  } else if (type === "BLOCK") {
    const blockNumber = (data as BlockResponseData).number;
    const transfers = await queryTransfersByBlockNumber(parseInt(blockNumber));
    return <BlockDetail data={data as BlockResponseData} transfers={transfers ?? []}></BlockDetail>;
  } else {
    return null;
  }
}

export default Hash;
