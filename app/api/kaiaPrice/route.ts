import { NextResponse } from "next/server";
import { queryKaiaPrice } from "@/lib/dbApi";

export async function POST(): Promise<NextResponse> {
    const data = await queryKaiaPrice();
    return NextResponse.json(data);
}
