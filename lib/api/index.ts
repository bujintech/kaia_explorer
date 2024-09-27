import { _fetch, BASE_NODE_RPC, ResponseData } from "../utils/nodeFetch";

type Params = {
  jsonrpc?: "2.0";
  method?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any[];
  id?: number;
};
type FetchReturnType = Promise<ResponseData>;

const formatFetchConfig = (params: Params): Parameters<typeof fetch>[1] => {
  const _body = {
    jsonrpc: params?.jsonrpc || "2.0",
    method: params?.method || "",
    params: params?.params || [],
    id: params?.id || 1,
  };
  console.log(_body);
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_body),
  };
};

const clientVersion = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "web3_clientVersion" }));

const sha3 = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "web3_sha3" }));

const version = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "net_version" }));

const syncing = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_syncing" }));

const gasPrice = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_gasPrice" }));

const accounts = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_accounts" }));

const blockNumber = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_blockNumber" }));

const getBalance = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getBalance" }));

const getStorageAt = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getStorageAt" }));

const getTransactionCount = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getTransactionCount" }));

const getBlockTransactionCountByHash = (params?: Params): FetchReturnType =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getBlockTransactionCountByHash" })
  );

const getBlockTransactionCountByNumber = (params?: Params): FetchReturnType =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getBlockTransactionCountByNumber" })
  );

const getUncleCountByBlockHash = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getUncleCountByBlockHash" }));

const getUncleCountByBlockNumber = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getUncleCountByBlockNumber" }));

const getCode = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getCode" }));

const sendRawTransaction = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_sendRawTransaction" }));

const call = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_call" }));

const estimateGas = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_estimateGas" }));

const getBlockByHash = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getBlockByHash" }));

const getBlockByNumber = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getBlockByNumber" }));

const getTransactionByHash = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getTransactionByHash" }));

const getTransactionByBlockHashAndIndex = (params?: Params): FetchReturnType =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getTransactionByBlockHashAndIndex" })
  );

const getTransactionByBlockNumberAndIndex = (params?: Params): FetchReturnType =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getTransactionByBlockNumberAndIndex" })
  );

const getTransactionReceipt = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getTransactionReceipt" }));

const getUncleByBlockHashAndIndex = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getUncleByBlockHashAndIndex" }));

const getUncleByBlockNumberAndIndex = (params?: Params): FetchReturnType =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getUncleByBlockNumberAndIndex" })
  );

const getLogs = (params?: Params): FetchReturnType =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getLogs" }));

export {
  clientVersion,
  sha3,
  version,
  syncing,
  gasPrice,
  accounts,
  blockNumber,
  getBalance,
  getStorageAt,
  getTransactionCount,
  getBlockTransactionCountByHash,
  getBlockTransactionCountByNumber,
  getUncleCountByBlockHash,
  getUncleCountByBlockNumber,
  getCode,
  sendRawTransaction,
  call,
  estimateGas,
  getBlockByHash,
  getBlockByNumber,
  getTransactionByHash,
  getTransactionByBlockHashAndIndex,
  getTransactionByBlockNumberAndIndex,
  getTransactionReceipt,
  getUncleByBlockHashAndIndex,
  getUncleByBlockNumberAndIndex,
  getLogs,
};
