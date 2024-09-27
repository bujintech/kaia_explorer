import { NextResponse, NextRequest } from "next/server";
import { _fetchApiByOtherNetwork as _fetch } from "@/lib/utils/fetchProxy";

type Params = {
  blockNumber: string;
};

export async function POST(_: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  const { blockNumber } = params;

  const data = await _fetch(`/v2/blocks/${blockNumber}`);

  return NextResponse.json(data);
}
