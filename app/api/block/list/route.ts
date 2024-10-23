import { NextResponse, NextRequest } from "next/server";
import { queryListFromBatch } from "@/lib/db";

const LIMIT = 15;

async function getBlockList(blockNumber: number) {
  let _blockNumber = blockNumber;

  const params = [];

  while (_blockNumber >= 0 && blockNumber - _blockNumber < LIMIT) {
    params.push({
      PK: `${_blockNumber}`,
      SK: `BLOCK#${_blockNumber}`,
    });
    _blockNumber = _blockNumber - 1;
  }

  const list = await queryListFromBatch(params);

  return {
    list,
    blockNumber: _blockNumber,
  };
}

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { data } = (await res.json()) as { data: { startWith: number } };

  const startBlockNumber = Number(data.startWith);

  let obj = { code: 0, endBlockNumber: 0, result: [] };

  if (!isNaN(startBlockNumber) && startBlockNumber >= 0) {
    const { list, blockNumber } = await getBlockList(startBlockNumber);

    obj = { code: 0, endBlockNumber: blockNumber, result: list as [] };
  }

  return NextResponse.json(obj);
}
