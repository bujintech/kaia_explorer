import db from "../db";
import { decompressJson } from "./util";
import type { BlockResponseData, TxResponseData, GcResponseData } from "./type";

export { default as queryBlockList } from "./queryBlockList";
export { default as queryTxList } from "./queryTxList";

export async function queryBlockByNumber(blockNumber: number): Promise<BlockResponseData | null> {
  const data = await db.getItem({
    Key: {
      PK: `${blockNumber}`,
      SK: `BLOCK#${blockNumber}`,
    },
  });
  if (data?.Item?.RESULT) return decompressJson<BlockResponseData>(data?.Item?.RESULT);
  return null;
}

export async function queryDataByHash(hash: string): Promise<{ type: "TX" | "BLOCK"; data: unknown } | null> {
  if (!hash) return null;

  const data = await db.query({
    IndexName: "GS1",
    KeyConditionExpression: `GS1PK = :GS1PK `,
    ExpressionAttributeValues: {
      ":GS1PK": hash || "",
    },
  });

  const itemData = data.Items?.[0];

  if (!itemData) return null;

  return {
    type: itemData.GS1SK,
    data: decompressJson(itemData.RESULT),
  };
}

export async function queryBlockByHash(hash: string): Promise<BlockResponseData | null> {
  const data = await queryDataByHash(hash);
  if (data?.type === "BLOCK") {
    return data.data as BlockResponseData;
  }
  return null;
}

export async function queryTransactionByHash(hash: string): Promise<TxResponseData | null> {
  const data = await queryDataByHash(hash);
  if (data?.type === "TX") {
    return data.data as TxResponseData;
  }
  return null;
}

export async function queryTransactionsByBlockNumber(blockNumber: number): Promise<TxResponseData[] | null> {
  const data = await db.query({
    KeyConditionExpression: `PK = :PK `,
    ExpressionAttributeValues: {
      ":PK": `${blockNumber}`,
    },
  });

  const list = Array.isArray(data.Items) ? data.Items : [];

  let blockData: BlockResponseData | null = null;
  const txsList: TxResponseData[] = [];

  list.map((v) => {
    if (v.GS1SK === "TX") {
      txsList.push(decompressJson(v.RESULT));
    }
    if (v.GS1SK === "BLOCK") {
      blockData = decompressJson(v.RESULT);
    }
  });

  return blockData ? txsList : null;
}

export async function queryTransactionsByAddress(address: string): Promise<TxResponseData[]> {
  const data = await db.query({
    KeyConditionExpression: `GS2PK = :GS2PK`,
    ExpressionAttributeValues: {
      ":GS2PK": `${address}`,
    },
    ScanIndexForward: true,
    IndexName: "GS2",
  });
  return (Array.isArray(data.Items) ? data.Items : []).map((v) => {
    return decompressJson<TxResponseData>(v.RESULT);
  });
}

export async function queryGcConfig(): Promise<Record<string, string> | null> {
  const data = await db.getItem({
    Key: {
      PK: "GC_CONFIG",
      SK: "GC_CONFIG",
    },
  });

  if (data?.Item?.RESULT) return decompressJson(data.Item.RESULT);
  return null;
}

export async function queryGcInfoByName(gcName: string): Promise<GcResponseData | null> {
  if (!gcName) return null;

  const data = await db.getItem({
    Key: {
      PK: "GC",
      SK: gcName,
    },
  });

  if (data?.Item?.RESULT) return decompressJson(data.Item.RESULT);
  return null;
}

export async function queryListFromBatch(params: Record<"PK" | "SK", string>[]): Promise<unknown[]> {
  if (!params || params.length === 0) return [];

  const data = await db.batchGetItem(params);

  const tableName = db.tableName;

  return (data.Responses?.[tableName] || []).map((v) => {
    return decompressJson(v.RESULT);
  });
}

export async function queryGcInfoList(): Promise<GcResponseData[]> {
  const data = await db.query({
    KeyConditionExpression: `PK = :PK `,
    ExpressionAttributeValues: {
      ":PK": `GC`,
    },
  });

  return (Array.isArray(data.Items) ? data.Items : [])
    .map((v) => {
      return decompressJson<GcResponseData>(v.RESULT);
    })
    .sort((a, b) => {
      return Number(b.total_staking) - Number(a.total_staking);
    });
}
