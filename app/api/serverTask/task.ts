import { compressJson, splitGroupToNumber } from "@/lib/db";

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

function getblockItem(data: BlockResponseData) {
  const tx_total = data.transactions?.length || 0;
  const _data = { ...data, transactions: [], transactionsTotal: tx_total };
  const RESULT = compressJson(_data);

  const _blockNumber = parseInt(data.number, 16).toString();

  return {
    PK: data.hash,
    SK: "BLOCK",

    GS1PK: `BLOCK#${splitGroupToNumber(_blockNumber)}`,
    GS1SK: _blockNumber,

    GS2PK: `FROM#${data.miner}`,
    GS2SK: _blockNumber,

    GS3PK: "0",
    GS3SK: "0",

    GS4PK: `0`,
    GS4SK: "0",

    RESULT: JSON.stringify(RESULT),
    CHAIN: "KAIA",
    TYPE: "BLOCK",
  };
}

function getTransactionItem(data: TxResponseData) {
  const _data = { ...data, v: "", r: "", s: "" };

  const RESULT = compressJson(_data);
  const _blockNumber = parseInt(data.blockNumber, 16).toString();

  return {
    PK: data.hash,
    SK: "TX",

    GS1PK: `TX#${splitGroupToNumber(_blockNumber)}`,
    GS1SK: `${_blockNumber}#${parseInt(data.transactionIndex, 16).toString()}`,

    GS2PK: `FROM#${data.from}`,
    GS2SK: parseInt(data.nonce, 16).toString(),

    GS3PK: `To#${data.to}`,
    GS3SK: `${_blockNumber}#${parseInt(data.transactionIndex, 16).toString()}`,

    GS4PK: `0`,
    GS4SK: "0",

    RESULT: JSON.stringify(RESULT),
    CHAIN: "KAIA",
    TYPE: "TX",
  };
}

export { getblockItem, getTransactionItem };
