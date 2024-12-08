import { _fetchByRpc as _fetch, ResponseData } from "../utils/fetchProxy";

const BASE_NODE_RPC = (process.env.NODE_RPC || process.env.NEXT_PUBLIC_RPC) as string;

type Params = {
  jsonrpc?: "2.0";
  method?: string;
  params?: unknown[];
  id?: number;
};
type FetchReturnType<T> = Promise<ResponseData<T>>;

const formatFetchConfig = (params: Params): Parameters<typeof fetch>[1] => {
  const _body = {
    jsonrpc: params?.jsonrpc || "2.0",
    method: params?.method || "",
    params: params?.params || [],
    id: params?.id || 1,
  };
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_body),
  };
};

const clientVersion = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "web3_clientVersion" }));

const sha3 = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "web3_sha3" }));

const version = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "net_version" }));

const syncing = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_syncing" }));

const gasPrice = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_gasPrice" }));

const accounts = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_accounts" }));

const blockNumber = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_blockNumber" }));

const getBalance = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getBalance" }));

const getStorageAt = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getStorageAt" }));

const getTransactionCount = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getTransactionCount" }));

const getBlockTransactionCountByHash = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getBlockTransactionCountByHash" })
  );

const getBlockTransactionCountByNumber = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getBlockTransactionCountByNumber" })
  );

const getUncleCountByBlockHash = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getUncleCountByBlockHash" }));

const getUncleCountByBlockNumber = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getUncleCountByBlockNumber" }));

const getCode = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getCode" }));

const sendRawTransaction = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_sendRawTransaction" }));

const call = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_call" }));

const estimateGas = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_estimateGas" }));

const getBlockByHash = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getBlockByHash" }));

const getBlockByNumber = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getBlockByNumber" }));

const getTransactionByHash = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getTransactionByHash" }));

const getTransactionByBlockHashAndIndex = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getTransactionByBlockHashAndIndex" })
  );

const getTransactionByBlockNumberAndIndex = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getTransactionByBlockNumberAndIndex" })
  );

const getTransactionReceipt = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getTransactionReceipt" }));

const getUncleByBlockHashAndIndex = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(BASE_NODE_RPC, formatFetchConfig({ ...(params || {}), method: "eth_getUncleByBlockHashAndIndex" }));

const getUncleByBlockNumberAndIndex = <T>(params?: Params): FetchReturnType<T> =>
  _fetch(
    BASE_NODE_RPC,
    formatFetchConfig({ ...(params || {}), method: "eth_getUncleByBlockNumberAndIndex" })
  );

const getLogs = <T>(params?: Params): FetchReturnType<T> =>
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
