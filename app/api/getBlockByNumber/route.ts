import { NextResponse, NextRequest } from "next/server";
import { getBlockByNumber } from "@/lib/api";

export async function POST(res: NextRequest): Promise<NextResponse> {
  const { blockNumber } = await res.json();

  const data = await getBlockByNumber({ params: [blockNumber, true] });
  return NextResponse.json(data);
}
