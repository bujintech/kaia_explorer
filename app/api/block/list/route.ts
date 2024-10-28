import { NextResponse, NextRequest } from "next/server";
import { queryBlockList } from "@/lib/dbApi";

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { data } = (await res.json()) as { data: { startWith: number } };

  const startBlockNumber = Number(data.startWith);

  let obj = { code: 0, endBlockNumber: 0, result: [] };

  if (!isNaN(startBlockNumber) && startBlockNumber >= 0) {
    const { list, lastBlockNumber } = await queryBlockList(startBlockNumber);

    obj = { code: 0, endBlockNumber: lastBlockNumber, result: list as [] };
  }

  return NextResponse.json(obj);
}
