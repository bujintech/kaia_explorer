import { NextResponse } from "next/server";
import { version } from "@/lib/api";

export async function POST(): Promise<NextResponse> {
  const data = await version();
  return NextResponse.json(data);
}
