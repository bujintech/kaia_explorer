import { NextResponse } from "next/server";
import { getGcInfoList } from "@/lib/db/api";

export async function POST(): Promise<NextResponse> {
  const data = await getGcInfoList();
  return NextResponse.json({ result: data });
}
