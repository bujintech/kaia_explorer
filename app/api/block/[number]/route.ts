import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

type Params = {
  number: string;
};

export async function POST(_: NextRequest, { params }: { params: Params }): Promise<NextResponse> {
  const { number } = params;

  const data = await db.getItem({
    Key: {
      PK: "BLOCK" + number,
      SK: "0x8b25072a2bddecc7af73ec645221300b900b06f62fd01b21c067ed6d163c41b4",
    },
  });
  console.log(data);

  return NextResponse.json({
    result: data,
  });
}
