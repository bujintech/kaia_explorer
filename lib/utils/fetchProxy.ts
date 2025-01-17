export interface ResponseData<T> {
  result?: T;
  error?: {
    code: number;
    message: string;
  };
  code?: number;
}
async function _fetch<T>(
  url: Parameters<typeof fetch>[0],
  parmas: Parameters<typeof fetch>[1]
): Promise<ResponseData<T>> {
  try {
    const response = await fetch(url, parmas);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data: ResponseData<T> = await response.json();
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

async function _fetchByRpc<T>(
  url: Parameters<typeof fetch>[0],
  parmas: Parameters<typeof fetch>[1]
): Promise<ResponseData<T>> {
  return _fetch(url, parmas);
}

const OTHER_NETWORK = "https://api-cypress.klaytnscope.com";

async function _fetchApiByOtherNetwork<T>(
  url: Parameters<typeof fetch>[0],
  parmas?: Parameters<typeof fetch>[1]
): Promise<ResponseData<T>> {
  const _url = OTHER_NETWORK + url;
  return _fetch(_url, parmas);
}

export { _fetchByRpc, _fetchApiByOtherNetwork };
