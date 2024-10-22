import { NextResponse, NextRequest } from "next/server";
import { queryBlockByNumber } from "@/lib/db/api";

const LIMIT = 18;

async function queryBlockList(blockNumber: number, list: unknown[] = []) {
  const data = await queryBlockByNumber(blockNumber);

  if (!data) return { list, blockNumber };

  const _list = [...list, data];

  if (_list.length < LIMIT) {
    return await queryBlockList(blockNumber - 1, _list);
  }

  return {
    list: [...list, data],
    blockNumber,
  };
}

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { data } = (await res.json()) as { data: { startWith: number } };
  const { list, blockNumber } = await queryBlockList(data.startWith);

  return NextResponse.json({
    code: 0,
    endBlockNumber: blockNumber - 1,
    result: list,
  });
}
