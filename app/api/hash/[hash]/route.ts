import { NextRequest, NextResponse } from "next/server";
import { queryDataByHash } from "@/lib/db";

export async function POST(
  _: NextRequest,
  { params: { hash } }: { params: { hash: string } }
): Promise<NextResponse> {
  const data = await queryDataByHash(hash);
  return NextResponse.json({ code: 0, result: data });
}
