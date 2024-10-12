import { NextResponse } from "next/server";
import { blockItemTask, transactionItemTask } from "./task";
import type { BlockResponseData } from "./task";
import { getBlockByNumber } from "@/lib/api";

async function taskItem(blockNumber: number) {
  const data = await getBlockByNumber<BlockResponseData>({ params: [blockNumber, true] });

  const result = data.result;
  if (result && result.hash) {
    await blockItemTask(result);

    const txs = [...(result.transactions || [])];
    let txitem = txs.pop();
    while (txitem) {
      await transactionItemTask(txitem);
      txitem = txs.pop();
    }
  }

  return result;
}

export async function GET() {
  const data = await taskItem(166700278);
  return NextResponse.json(data);
}
