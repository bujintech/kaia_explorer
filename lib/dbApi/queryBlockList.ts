import { queryListFromBatch } from "./index";
import { hexToDecimal } from "../utils";
import type { BlockResponseData } from "./type";
const LIMIT = 30;

export default async function queryBlockList(
  blockNumber: number,
  size?: number
): Promise<{ list: BlockResponseData[]; lastBlockNumber: number }> {
  let _blockNumber = blockNumber;

  const params = [];
  size = size || LIMIT;

  while (_blockNumber >= 0 && blockNumber - _blockNumber < size) {
    params.push({
      PK: `${_blockNumber}`,
      SK: `BLOCK#${_blockNumber}`,
    });
    _blockNumber = _blockNumber - 1;
  }

  const list = (await queryListFromBatch(params)) as BlockResponseData[];
  return {
    list: list.sort((a, b) => hexToDecimal(b.number) - hexToDecimal(a.number)),
    lastBlockNumber: _blockNumber,
  };
}
