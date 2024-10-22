import { NextResponse } from "next/server";
import { queryGcInfoList } from "@/lib/db";

export async function POST(): Promise<NextResponse> {
  const data = await queryGcInfoList();
  return NextResponse.json({ result: data });
}
