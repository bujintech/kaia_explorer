import { NextResponse, NextRequest } from "next/server";
import { queryTxList } from "@/lib/dbApi";

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { data } = (await res.json()) as { data: { startWith: number } };

  const startBlockNumber = Number(data.startWith);

  let obj = { code: 0, lastBlockNumber: 0, result: [] };

  if (!isNaN(startBlockNumber) && startBlockNumber >= 0) {
    const { list, lastBlockNumber } = await queryTxList(startBlockNumber);

    obj = { code: 0, lastBlockNumber, result: list as [] };
  }

  return NextResponse.json(obj);
}
