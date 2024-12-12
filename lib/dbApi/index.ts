import db from "../db";
import { decompressJson } from "./util";
import type { BlockResponseData, TxResponseData, GcResponseData, TransferResponseData } from "./type";
import { hexToDecimal } from "../utils";

export { default as queryBlockList } from "./queryBlockList";
export { default as queryTxList } from "./queryTxList";

interface DbStruct {
  PK: string;
  SK: string;
  GS1PK: string;
  GS1SK: string;
  GS2PK: string;
  GS2SK: string;
  GS3PK: string;
  GS3SK: string;
  GS4PK: string;
  RESULT?: Buffer;
  TIMESTAMP: number;
  AMOUNT: number;
  NAME: string;
  NFTID: string;
  TYPE: string;
}

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
    KeyConditionExpression: `GS1PK = :GS1PK`,
    ExpressionAttributeValues: {
      ":GS1PK": hash || "",
    },
  });

  const itemData = data.Items?.filter((v) => {
    return v.GS1SK.toString() === "TX" || v.GS1SK.toString() === "BLOCK";
  })[0];

  if (!itemData) return null;

  const _data = decompressJson(itemData.RESULT);
  return {
    type: itemData.GS1SK,
    data: {
      ...((_data && _data) || {}),
      timestamp: itemData.TIMESTAMP,
    },
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
    ScanIndexForward: false,
  });

  const list = Array.isArray(data.Items) ? data.Items : [];

  let blockData: BlockResponseData | null = null;
  const txsList: TxResponseData[] = [];

  list.map((v) => {
    if (v.GS1SK === "TX") {
      txsList.push({
        ...decompressJson(v.RESULT),
        timestamp: v.TIMESTAMP,
      });
    }
    if (v.GS1SK === "BLOCK") {
      blockData = decompressJson(v.RESULT);
    }
  });

  return blockData ? txsList : [];
}

export async function queryTransactionsByAddress(address: string): Promise<TxResponseData[]> {
  const data = await db.query({
    KeyConditionExpression: `GS2PK = :GS2PK and begins_with(GS2SK, :GS2SK)`,
    ExpressionAttributeValues: {
      ":GS2PK": `${address}`,
      ":GS2SK": "TX",
    },
    ScanIndexForward: true,
    IndexName: "GS2",
  });
  return (Array.isArray(data.Items) ? data.Items : []).map((v) => {
    return {
      ...decompressJson<TxResponseData>(v.RESULT),
      timestamp: v.TIMESTAMP,
    };
  });
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

function dbObjToTransfer(v: DbStruct): TransferResponseData {
  console.log(v);
  return {
    txHash: v.GS1PK.toString(),
    type: v.SK.toString().startsWith("TRANSFER#TOKEN") ? "token" : "nft",
    from: v.GS2PK.toString(),
    to: v.GS3PK.toString(),
    amount: v.AMOUNT?.toString() ?? "--",
    tokenContract: v.GS4PK.toString(),
    tokenName: v.NAME?.toString() ?? "--",
    timestamp: v.TIMESTAMP,
    nftId: v.NFTID ? v.NFTID.toString() : '',
    tokenType: v.TYPE.toString(),
  }
}

export async function queryTransfersByTxHash(hash: string): Promise<TransferResponseData[] | null> {
  if (!hash) return null;

  const data = await db.query({
    IndexName: "GS1",
    KeyConditionExpression: `GS1PK = :GS1PK and begins_with(GS1SK, :GS1SK)`,
    ExpressionAttributeValues: {
      ":GS1PK": hash || "",
      ":GS1SK": "TRANSFER#",
    },
  });

  return data.Items?.map(v => ({
    txHash: hash,
    type: v.SK.toString().startsWith("TRANSFER#TOKEN") ? "token" : "nft",
    from: v.GS2PK.toString(),
    to: v.GS3PK.toString(),
    amount: v.AMOUNT.toString(),
    tokenContract: v.GS4PK.toString(),
    tokenName: v.NAME?.toString() ?? "",
    timestamp: v.TIMESTAMP,
    nftId: v.NFTID ? v.NFTID.toString() : '',
    tokenType: v.TYPE.toString(),
  })) ?? [];
}

export async function queryTransfersByBlockNumber(blockNumber?: number): Promise<TransferResponseData[] | null> {
  if (!blockNumber) return null;

  const data = await db.query({
    KeyConditionExpression: `PK = :PK and begins_with(SK, :SK)`,
    ExpressionAttributeValues: {
      ":PK": hexToDecimal(blockNumber).toString() || "",
      ":SK": "TRANSFER#",
    },
  })

  return data.Items?.map(v => ({
    txHash: v.GS1PK.toString(),
    type: v.SK.toString().startsWith("TRANSFER#TOKEN") ? "token" : "nft",
    from: v.GS2PK.toString(),
    to: v.GS3PK.toString(),
    amount: v.AMOUNT.toString(),
    tokenContract: v.GS4PK.toString(),
    tokenName: v.NAME?.toString() ?? "--",
    timestamp: v.TIMESTAMP,
    nftId: v.NFTID ? v.NFTID.toString() : '',
    tokenType: v.TYPE.toString(),
  })) ?? [];
}

export async function queryTransfersByFromOrTo(address: string): Promise<TransferResponseData[] | null> {
  if (!address) return null;

  const dataFrom = await db.query({
    KeyConditionExpression: `GS2PK = :GS2PK and begins_with(GS2SK, :GS2SK)`,
    IndexName: "GS2",
    ExpressionAttributeValues: {
      ":GS2PK": address || "",
      ":GS2SK": "TRANSFER#",
    },
  })

  const dataTo = await db.query({
    KeyConditionExpression: `GS3PK = :GS3PK and begins_with(GS3SK, :GS3SK)`,
    IndexName: "GS3",
    ExpressionAttributeValues: {
      ":GS3PK": address || "",
      ":GS3SK": "TRANSFER#",
    },
  })

  console.log("address:", address, "dataFrom:", dataFrom.Items?.length, "dataTo:", dataTo.Items?.length);

  return [
    ...dataFrom.Items?.map(v => dbObjToTransfer(v as DbStruct)) ?? [],
    ...(dataTo.Items?.map(v => dbObjToTransfer(v as DbStruct)) ?? [])
  ];
}

export async function queryMaxBlockNumber() {
  const data = await db.getItem({
    Key: {
      PK: "MAX_BLOCK",
      SK: "MAX_BLOCK",
    },
  });
  if (data?.Item?.RESULT) return Number(data.Item.RESULT);
  return NaN;
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

export async function queryMethodConfig(): Promise<Record<string, string> | null> {
  const data = await db.getItem({
    Key: {
      PK: "METHOD_CONFIG",
      SK: "METHOD_CONFIG",
    },
  });

  if (data?.Item?.RESULT) return decompressJson(data.Item.RESULT);
  return null;
}
