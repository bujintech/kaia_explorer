import { queryTransactionsByBlockNumber } from "./index";
import type { TxResponseData } from "./type";
const LIMIT = 10;

export default async function queryTxList(
  blockNumber: number,
  list: TxResponseData[] = []
): Promise<{ list: TxResponseData[]; lastBlockNumber: number }> {
  const txs = await queryTransactionsByBlockNumber(blockNumber);

  if (!txs) return { list, lastBlockNumber: blockNumber };

  const _list = [...list, ...txs];

  if (_list.length < LIMIT) {
    return await queryTxList(blockNumber - 1, _list);
  }

  return {
    list: _list,
    lastBlockNumber: blockNumber,
  };
}
