import { NextResponse, NextRequest } from "next/server";
import { getTransactionsByBlockNumber } from "@/lib/db/api";

const LIMIT = 13;

async function queryTxList(blockNumber: number, list: unknown[] = [], count: number = 5) {
  const txs = await getTransactionsByBlockNumber(166887902);
  console.log(111, list?.length);

  if (!txs) return { list, blockNumber };

  const _list = [...list, ...txs];

  if (_list.length < LIMIT) {
    return await queryTxList(blockNumber - 1, _list);
  }

  return {
    list: [...list, ...txs],
    blockNumber,
  };
}

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { data } = (await res.json()) as { data: { startWith: number } };

  const blockStartWith = data.startWith;

  const { list, blockNumber } = await queryTxList(blockStartWith);

  const result = {
    code: 0,
    endBlockNumber: blockNumber - 1,
    result: list,
  };

  return NextResponse.json(result);
}