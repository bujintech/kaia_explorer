import { NextResponse, NextRequest } from "next/server";
import { db, splitGroupToNumber, decompressJson } from "@/lib/db";

const LIMIT = 10;

async function queryItem(blockGroup: number): Promise<Record<string, any>[]> {
  const data = await db.query({
    KeyConditionExpression: `GS1PK = :GS1PK`,
    ExpressionAttributeValues: {
      ":GS1PK": `BLOCK#${blockGroup}`,
    },
    IndexName: "GS1",
    Limit: LIMIT,
    ScanIndexForward: false,
  });
  return data;
  const total = data.Items?.length || 0;

  const marginTotal = LIMIT - total;

  if (total > 0 && marginTotal > 0) {
    const list = await queryItem(blockGroup - 1);
    return (data.Items || []).concat(list);
  }

  return data.Items || [];
}

export async function POST(): Promise<NextResponse> {
  const blockGroup = splitGroupToNumber(166887913);
  const a = await queryItem(blockGroup);
  return NextResponse.json({ a });
}
