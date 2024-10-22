import { NextResponse } from "next/server";
import { queryGcInfoList } from "@/lib/db/api";

export async function POST(): Promise<NextResponse> {
  const data = await queryGcInfoList();
  return NextResponse.json({ result: data });
}
