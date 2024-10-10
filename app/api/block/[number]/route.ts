import { NextResponse, NextRequest } from "next/server";
import { _fetchApiByOtherNetwork as _fetch } from "@/lib/utils/fetchProxy";

type Params = {
  number: string;
};

export async function POST(_: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  const { number } = params;

  const data = await _fetch(`/v2/blocks/${number}`);

  return NextResponse.json(data);
}
