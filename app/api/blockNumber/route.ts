import { NextResponse } from "next/server";
import { blockNumber } from "@/lib/api";

export async function POST(): Promise<NextResponse> {
  const data = await blockNumber();
  return NextResponse.json({
    ...data,
    result: parseInt(data.result),
  });
}
