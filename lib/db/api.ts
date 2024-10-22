import db from "./db";
import { decompressJson } from "./util";
import type { BlockResponseData, TxResponseData, GcResponseData } from "./type";

export async function queryBlockByNumber(blockNumber: number): Promise<BlockResponseData | null> {
  const data = await db.query({
    KeyConditionExpression: `GS1PK = :GS1PK AND GS1SK = :GS1SK`,
    ExpressionAttributeValues: {
      ":GS1PK": `${blockNumber}`,
      ":GS1SK": `BLOCK#${blockNumber}`,
    },
    ScanIndexForward: true,
    IndexName: "GS1",
  });
  const Item = (Array.isArray(data.Items) ? data.Items : [])[0];
  if (Item?.RESULT) return decompressJson<BlockResponseData>(Item.RESULT);
  return null;
}

export async function queryBlockByHash(hash: string = ""): Promise<BlockResponseData | null> {
  const data = await db.getItem({
    Key: {
      PK: hash,
      SK: "BLOCK",
    },
  });
  if (data?.Item?.RESULT) return decompressJson<BlockResponseData>(data.Item.RESULT);
  return null;
}

export async function queryTransactionByHash(hash: string = ""): Promise<TxResponseData | null> {
  const data = await db.getItem({
    Key: {
      PK: hash,
      SK: "TX",
    },
  });

  if (data?.Item?.RESULT) return decompressJson<TxResponseData>(data.Item.RESULT);
  return null;
}

export async function queryTransactionsByBlockNumber(blockNumber: number): Promise<TxResponseData[] | null> {
  const data = await db.query({
    KeyConditionExpression: `GS1PK = :GS1PK `,
    ExpressionAttributeValues: {
      ":GS1PK": `${blockNumber}`,
    },
    ScanIndexForward: true,
    IndexName: "GS1",
  });

  const list = Array.isArray(data.Items) ? data.Items : [];

  const blockIndex = list.findIndex((v) => v.SK === "BLOCK");
  if (blockIndex >= 0) {
    return list
      .filter((v) => v.SK === "TX")
      .map((v) => {
        return decompressJson<TxResponseData>(v.RESULT);
      });
  } else {
    return null;
  }
}

export async function queryDataByHash(hash: string): Promise<{ type: "TX" | "BLOCK"; data: unknown } | null> {
  const data = await db.query({
    KeyConditionExpression: `PK = :PK `,
    ExpressionAttributeValues: {
      ":PK": hash || "",
    },
  });
  const itemData = data.Items?.[0];

  if (!itemData) return null;

  return {
    type: itemData.SK,
    data: decompressJson(itemData.RESULT),
  };
}

export async function queryTransactionByAddress(address: string): Promise<TxResponseData[]> {
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

  if (data?.Item?.RESULT) return JSON.parse(data.Item.RESULT);
  return null;
}

export async function queryGcInfoByName(gcName: string = ""): Promise<GcResponseData | null> {
  const data = await db.getItem({
    Key: {
      PK: "GC",
      SK: gcName,
    },
  });

  if (data?.Item?.RESULT) return JSON.parse(data.Item.RESULT);
  return null;
}

export async function queryGcInfoList(): Promise<GcResponseData[]> {
  const data = await db.query({
    KeyConditionExpression: `PK = :PK `,
    ExpressionAttributeValues: {
      ":PK": `GC`,
    },
  });

  const list = (Array.isArray(data.Items) ? data.Items : []).map((v) => {
    return JSON.parse(v.RESULT);
  });
  return list;
}
