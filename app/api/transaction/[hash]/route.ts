import { NextResponse, NextRequest } from "next/server";
import { _fetchApiByOtherNetwork as _fetch } from "@/lib/utils/fetchProxy";

type Params = {
  hash: string;
};

export async function POST(_: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  const { hash } = params;

  const data = await _fetch(`/v2/txs/${hash}`);

  return NextResponse.json(data);
}
