import { NextResponse, NextRequest } from "next/server";
import { queryTransactionsByBlockNumber } from "@/lib/db";

const LIMIT = 13;

async function getTxList(blockNumber: number, list: unknown[] = []) {
  const txs = await queryTransactionsByBlockNumber(blockNumber);

  if (!txs) return { list, blockNumber };

  const _list = [...list, ...txs];

  if (_list.length < LIMIT) {
    return await getTxList(blockNumber - 1, _list);
  }

  return {
    list: [...list, ...txs],
    blockNumber,
  };
}

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { data } = (await res.json()) as { data: { startWith: number } };

  const startBlockNumber = Number(data.startWith);

  let obj = { code: 0, endBlockNumber: 0, result: [] };

  if (!isNaN(startBlockNumber) && startBlockNumber >= 0) {
    const { list, blockNumber } = await getTxList(startBlockNumber);

    obj = { code: 0, endBlockNumber: blockNumber, result: list as [] };
  }

  return NextResponse.json(obj);
}
