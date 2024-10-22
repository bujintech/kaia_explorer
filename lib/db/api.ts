import db from "./db";
import { decompressJson } from "./util";
import type { BlockResponseData, TxResponseData, GcResponseData } from "./type";

export const queryBlockByNumber = async (blockNumber: number): Promise<BlockResponseData | null> => {
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
};

export const queryTransactionsByBlockNumber = async (
  blockNumber: number
): Promise<TxResponseData[] | null> => {
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
};

export const queryGcInfoList = async (): Promise<GcResponseData[]> => {
  const data = await db.query({
    KeyConditionExpression: `PK = :PK `,
    ExpressionAttributeValues: {
      ":PK": `GC`,
    },
  });

  const list = (Array.isArray(data.Items) ? data.Items : []).map((v) => {
    return JSON.parse(v.RESULT);
    // return decompressJson<GcResponseData>(v.RESULT);
  });
  return list;
};

export const queryDataByHash = async (
  hash: string
): Promise<{ type: "TX" | "BLOCK"; data: unknown } | null> => {
  const data = await db.query({
    KeyConditionExpression: `PK = :PK `,
    ExpressionAttributeValues: {
      ":PK": hash,
    },
  });
  const itemData = data.Items?.[0];

  if (!itemData) return null;

  return {
    type: itemData.SK,
    data: decompressJson(itemData.RESULT),
  };
};
