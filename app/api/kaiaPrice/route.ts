import { NextResponse } from "next/server";
import { queryKaiaQuote } from "@/lib/dbApi";
import type { KaiaQuoteData } from "@/lib/dbApi/type";

export async function POST(): Promise<NextResponse<KaiaQuoteData>> {
    const data = await queryKaiaQuote();
    return NextResponse.json(data);
}
