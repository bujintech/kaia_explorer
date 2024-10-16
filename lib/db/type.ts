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

export interface PutInputItem {
  PK: string;
  SK: string; // 块 、交易
  RESULT: string; // 结果
  GS1PK: string;
  GS1SK: string;
  GS2PK: string;
  GS2SK: string;
  GS3PK: string; //TODO
  GS3SK: string;
  GS4PK: string; //块 以千单位拆分 例如：166628001 => 166628、001
  GS4SK: string;
  CHAIN: string; // 固定：KAIA
  TYPE: string;
}
