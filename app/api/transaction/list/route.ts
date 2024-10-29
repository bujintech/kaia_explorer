import { NextResponse, NextRequest } from "next/server";
import { queryTxList, queryMaxBlockNumber } from "@/lib/dbApi";

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { data } = (await res.json()) as { data: { startWith: number } };

  let startBlockNumber: number = 0;
  if (data.startWith) {
    startBlockNumber = Number(data.startWith);
  } else {
    startBlockNumber = await queryMaxBlockNumber();
  }

  let obj = { code: 0, lastBlockNumber: 0, result: [] };

  if (!isNaN(startBlockNumber) && startBlockNumber >= 0) {
    const { list, lastBlockNumber } = await queryTxList(startBlockNumber);

    obj = { code: 0, lastBlockNumber, result: list as [] };
  }

  return NextResponse.json(obj);
}
