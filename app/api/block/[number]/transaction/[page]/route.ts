import { NextResponse, NextRequest } from "next/server";
import { _fetchApiByOtherNetwork as _fetch } from "@/lib/utils/fetchProxy";

type Params = {
  number: number;
  page: number;
};

const LIMIT_DEFAULT = 25;

export async function POST(_: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  const { page, number } = params;

  const data = await _fetch(`/v2/blocks/${number}/txs?page=${page}&limit=${LIMIT_DEFAULT}`);

  return NextResponse.json(data);
}
