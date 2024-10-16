import { NextResponse } from "next/server";

import type { BlockResponseData } from "./task";
import { getBlockByNumber } from "@/lib/api";
import { db } from "@/lib/db";
import { getblockItem, getTransactionItem } from "./task";

async function taskItem(blockNumber: number) {
  const data = await getBlockByNumber<BlockResponseData>({ params: [blockNumber, true] });

  const result = data.result;
  if (result && result.hash) {
    const blockItem = getblockItem(result);
    const txs = [...(result.transactions || [])].map(getTransactionItem);

    const dataList = [blockItem, ...txs].map((Item) => {
      return {
        PutRequest: { Item },
      };
    });

    await db.batchWrite(dataList);
    console.log("blockNumber 成功", blockNumber);
  }
}

async function start() {
  let min = 166887900;
  const max = 166887912;

  while (min < max) {
    await taskItem(min);
    min++;
  }
}

export async function GET() {
  await start();
  return NextResponse.json({ a: 1 });
}
