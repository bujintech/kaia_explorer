import { PutCommand } from "@aws-sdk/lib-dynamodb";
import docClient from "./db";
import { formatJsonToGzip, splitStringAtThirdFromEnd } from "./util";

export interface BlockResponseData {
  baseFeePerGas: string;
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  totalDifficulty: string;
  transactions: TxResponseData[];
  transactionsRoot: string;
  uncles: [];
}

export interface TxResponseData {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: string;
  value: string;
  type: string;
  v: string;
  r: string;
  s: string;
}

async function blockItemTask(data: BlockResponseData) {
  const _data = { ...data, transactions: [] };
  const RESULT = formatJsonToGzip(_data);

  const _blockNumber = parseInt(data.number, 16).toString();
  const [GS4PK_blockNumber, GS4SK_blockNumber] = splitStringAtThirdFromEnd(_blockNumber);

  const Item = {
    PK: data.hash, // 块hash、交易hash
    SK: "BLOCK", // 块 、交易

    RESULT: JSON.stringify(RESULT), // 结果

    GS1PK: `BLOCK#${_blockNumber}`,
    GS1SK: "BLOCK",

    GS2PK: `MINER#${data.miner}`,
    GS2SK: data.miner,

    GS3PK: `0000000`, //TODO
    GS3SK: "0000000",

    GS4PK: `BLOCK#${GS4PK_blockNumber}`, //块 以千单位拆分 例如：166628001 => 166628、001
    GS4SK: `${GS4SK_blockNumber}#BLOCK`,

    CHAIN: "KAIA", // 固定：KAIA
    TYPE: "BLOCK",
  };
  const command = new PutCommand({
    TableName: "devEVM",
    Item: Item,
  });
  return await docClient.send(command);
}

async function transactionItemTask(data: TxResponseData) {
  const _data = { ...data, v: "", r: "", s: "" };

  const RESULT = formatJsonToGzip(_data);

  const _blockNumber = parseInt(data.blockNumber, 16).toString();
  const [GS4PK_blockNumber, GS4SK_blockNumber] = splitStringAtThirdFromEnd(_blockNumber);

  const Item = {
    PK: data.hash, // 块hash、交易hash
    SK: "TX", // 块 、交易

    RESULT: JSON.stringify(RESULT), // 结果

    GS1PK: `TX#${_blockNumber}`,
    GS1SK: "TX",

    GS2PK: `FROM#${data.from}`,
    GS2SK: data.from,

    GS3PK: `0000000`, //TODO
    GS3SK: "0000000",

    GS4PK: `BLOCK#${GS4PK_blockNumber}`, //块 以千单位拆分 例如：166628001 => 166628、001
    GS4SK: `${GS4SK_blockNumber}#BLOCK`,

    CHAIN: "KAIA", // 固定：KAIA
    TYPE: "TX",
  };
  const command = new PutCommand({
    TableName: "devEVM",
    Item: Item,
  });
  return await docClient.send(command);
}

export { blockItemTask, transactionItemTask };
