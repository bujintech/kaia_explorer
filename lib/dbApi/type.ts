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
  transactionsTotal: number;
  transactionsRoot: string;
  uncles: [];
}

export interface TxResponseData {
  timestamp: string;
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

export interface GcResponseData {
  name: string;
  thumbnail: string;
  total_staking: string;
  websites: [];
  joinedAt: string;
  apy: string;
  description: string;
  categories: { id: number; name: string }[];
  contracts: {
    address: string;
    type: string;
    version: number;
  }[];
  summary: string;
}

export enum NftType {
  ERC721 = "ERC721",
  ERC1155 = "ERC1155",
  KIP37 = "KIP37",
}

export interface TransferResponseData {
  txHash: string;
  from: string;
  to: string;
  tokenContract: string;
  tokenName: string;
  amount: string;
  timestamp: number;
  type: string;
  nftId: string;
  tokenType: string;
}

export interface KaiaQuoteData {
  price: number;
  volume: number;
  marketCap: number;
  circulatingSupply: number;
}
