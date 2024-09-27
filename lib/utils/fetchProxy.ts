// export const BASE_NODE_RPC = process.env.BASE_NODE_RPC;
export const BASE_NODE_RPC =
  "https://rpc.ankr.com/klaytn/452fcd62a28e28193d74a5dbe1ba1d001f63962461ec355117b539c1158222db";

export interface ResponseData {
  result?: unknown;
  error?: {
    code: number;
    message: string;
  };
  code?: number;
}
async function _fetch(
  url: Parameters<typeof fetch>[0],
  parmas: Parameters<typeof fetch>[1]
): Promise<ResponseData> {
  try {
    const response = await fetch(url, parmas);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data: ResponseData = await response.json();
    return data;
  } catch (error) {
    console.log("request error ----", error);
    return {
      error: {
        code: -1,
        message: "Network response was not ok ",
      },
    };
  }
}

async function _fetchByRpc(
  url: Parameters<typeof fetch>[0],
  parmas: Parameters<typeof fetch>[1]
): Promise<ResponseData> {
  return _fetch(url, parmas);
}

const OTHER_NETWORK = "https://api-cypress.klaytnscope.com";

async function _fetchApiByOtherNetwork(
  url: Parameters<typeof fetch>[0],
  parmas?: Parameters<typeof fetch>[1]
): Promise<ResponseData> {
  const _url = OTHER_NETWORK + url;
  return _fetch(_url, parmas);
}

export { _fetchByRpc, _fetchApiByOtherNetwork };
