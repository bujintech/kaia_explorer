import { NextResponse, NextRequest } from "next/server";
import { db, decompressJson } from "@/lib/db";

type Params = {
  page: number;
};

// const LIMIT_DEFAULT = 25;

export async function POST(_: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  const { page } = params;
  console.log(page);

  const data = await db.query({
    KeyConditionExpression: "GS4PK = :GS4PK",
    IndexName: "GS4",
    ExpressionAttributeValues: {
      ":GS4PK": "TX",
    },
    ScanIndexForward: false,
  });

  const result = (data.Items || []).map((v) => decompressJson(v.RESULT));

  return NextResponse.json({ result });
}
